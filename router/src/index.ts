export interface Env {
    // Secret environment variables set via `wrangler secret put`
    LABS_USERNAME: string;
    LABS_PASSWORD: string;

    // Configuration variables from wrangler.toml
    MAIN_SITE_URL: string;
    LABS_HUB_URL: string;
    OMEGA_URL: string;
    ULTIMA_URL: string;
    CAPITAL_URL: string;
    GENESIS_URL: string;
    SHOP_URL: string;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);
        const path = url.pathname;

        // 0. Route for Capital Assets (Astro unique assets dir)
        if (path.startsWith('/capital-assets')) {
            return proxyRequest(request, env.CAPITAL_URL, ''); // Don't strip prefix, Astro expects it
        }

        // 1. Route for Capital
        if (path.startsWith('/capital')) {
            return proxyRequest(request, env.CAPITAL_URL, '/capital');
        }

        // 2. Route for Omega Labs
        if (path.startsWith('/labs/omega')) {
            const auth = await checkAuth(request, env);
            if (!auth) return promptAuth();

            return proxyRequest(request, env.OMEGA_URL, '/labs/omega');
        }

        // 2. Route for Ultima Labs
        if (path.startsWith('/labs/ultima')) {
            const auth = await checkAuth(request, env);
            if (!auth) return promptAuth();

            return proxyRequest(request, env.ULTIMA_URL, '/labs/ultima');
        }

        // 3. Route for Genesis (Public - No Auth Required)
        if (path.startsWith('/labs/genesis')) {
            return proxyRequest(request, env.GENESIS_URL, '/labs/genesis');
        }

        // 3. Route for Labs Hub (The Landing Page)
        if (path === '/labs' || path === '/labs/' || path.startsWith('/labs/')) {
            // Note: We don't password protect the main /labs page so people can see the descriptions
            return proxyRequest(request, env.LABS_HUB_URL, '/labs');
        }

        // 4. Route for Shop
        if (path.startsWith('/shop')) {
            // No auth check here because the Shop app has its own Middleware auth
            // Also, we do NOT strip the prefix because the Next.js app has basePath: '/shop'
            return proxyRequest(request, env.SHOP_URL, '');
        }

        // 5. Default: Route everything else to the main Astro Megablog
        return fetch(new URL(path + url.search, env.MAIN_SITE_URL), request);
    },
};

/**
 * Checks Basic Auth against environment secrets
 */
async function checkAuth(request: Request, env: Env): Promise<boolean> {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) return false;

    const [scheme, encoded] = authHeader.split(' ');
    if (scheme !== 'Basic' || !encoded) return false;

    const decoded = atob(encoded);
    const [username, password] = decoded.split(':');

    // Note: You must set these using `wrangler secret put LABS_USERNAME` etc.
    return username === env.LABS_USERNAME && password === env.LABS_PASSWORD;
}

/**
 * Returns a 401 response to prompt for credentials
 */
function promptAuth(): Response {
    return new Response('Authentication Required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Txchyon Labs"',
        },
    });
}

/**
 * Proxies the request to the target origin, stripping the base path if necessary
 */
async function proxyRequest(request: Request, targetOrigin: string, basePath: string): Promise<Response> {
    const url = new URL(request.url);

    // Strip the prefix so the destination app sees cleaner paths
    // This is important because the destination apps (Next.js) are likely deployed at root
    if (basePath && url.pathname.startsWith(basePath)) {
        url.pathname = url.pathname.slice(basePath.length);
        if (!url.pathname.startsWith('/')) {
            url.pathname = '/' + url.pathname;
        }
    }

    const targetUrl = new URL(url.pathname + url.search, targetOrigin);

    const newRequest = new Request(targetUrl, request);
    newRequest.headers.set('X-Forwarded-Host', url.host);

    return fetch(newRequest);
}
