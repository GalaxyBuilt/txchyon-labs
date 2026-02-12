"use client";

import React from "react";
import {
  Zap,
  Target,
  Shield,
  ChevronRight,
  ArrowUpRight,
  Hexagon,
  Globe,
  Database,
  Lock,
  Bitcoin
} from "lucide-react";

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-gold/30 selection:text-gold">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(hsl(var(--gold)) 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      {/* Gradient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Navigation Header */}
        <nav className="flex items-center justify-between mb-24">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
              <Hexagon className="w-6 h-6 text-gold animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-platinum">Txchyon</span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-gold/80 leading-none uppercase">Labs Infrastructure</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://txchyon.com" className="text-xs font-mono text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              MAIN SITE
            </a>
            <div className="h-4 w-px bg-border/50" />
            <button className="text-xs font-mono text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              UNIFIED LOGIN
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/20 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-[10px] font-mono text-gold tracking-wider uppercase">Systems Online • v4.0.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-platinum tracking-tight mb-8">
            The Hub of <span className="text-gold italic">Intelligence.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proprietary market identification and execution models powered by the Txchyon data engine. Integrated architecture for the modern institutional trader.
          </p>
        </div>

        {/* Labs Selection Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {/* Omega Labs */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <a href="/labs/omega" className="relative block h-full bg-card/40 border border-border/50 rounded-2xl p-8 hover:border-gold/30 hover:bg-card/60 transition-all duration-300 backdrop-blur-sm cursor-pointer overflow-hidden border-l-2 border-l-gold/50">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-32 h-32 text-gold rotate-12" />
              </div>

              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-7 h-7 text-gold" />
                </div>
                <div className="px-3 py-1 bg-positive/10 border border-positive/30 rounded-md">
                  <span className="text-[10px] font-mono text-positive font-bold">ALPHA-ACCESS</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-platinum mb-4 tracking-tight">Project Omega</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Advanced market sniper and timing engine. Utilizes multi-layered confirms for high-probability execution.
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-border/50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-none">Status</span>
                  <span className="text-sm font-semibold text-platinum">Production</span>
                </div>
                <div className="flex items-center gap-2 text-gold font-mono text-sm group-hover:translate-x-1 transition-transform">
                  LAUNCH MODULE <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

          {/* Ultima Labs */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <a href="/labs/ultima" className="relative block h-full bg-card/40 border border-border/50 rounded-2xl p-8 hover:border-gold/30 hover:bg-card/60 transition-all duration-300 backdrop-blur-sm cursor-pointer overflow-hidden border-l-2 border-l-gold/50">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32 text-gold -rotate-12" />
              </div>

              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <div className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-md">
                  <span className="text-[10px] font-mono text-gold font-bold">INSTITUTIONAL</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-platinum mb-4 tracking-tight">Project Ultima</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                AI market intelligence platform. Real-time capital flow analysis, whale tracking, and automated risk engine.
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-border/50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-none">Status</span>
                  <span className="text-sm font-semibold text-platinum">Redesign Active</span>
                </div>
                <div className="flex items-center gap-2 text-gold font-mono text-sm group-hover:translate-x-1 transition-transform">
                  LAUNCH MODULE <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

          {/* Project Genesis */}
          <div className="group relative md:col-span-2 lg:col-span-2">
            <div className="absolute inset-0 bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <a href="/labs/genesis" className="relative block h-full bg-card/40 border border-border/50 rounded-2xl p-8 hover:border-gold/30 hover:bg-card/60 transition-all duration-300 backdrop-blur-sm cursor-pointer overflow-hidden border-l-2 border-l-gold/50">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bitcoin className="w-32 h-32 text-gold rotate-12" />
              </div>

              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Bitcoin className="w-7 h-7 text-gold" />
                </div>
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md">
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Demo Access</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-platinum mb-4 tracking-tight">Project Genesis</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                Institutional-grade Bitcoin compounding engine. Fully automated, non-custodial system designed to accumulate BTC through cyclical volatility capture. Engineered like a hedge fund, optimized for survival, and obsessed with long-term BTC accumulation.
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-border/50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-none">Status</span>
                  <span className="text-sm font-semibold text-platinum">Live Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-gold font-mono text-sm group-hover:translate-x-1 transition-transform">
                  LAUNCH MODULE <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Infrastructure Info */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-secondary/30 border border-border/50 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="flex justify-center gap-12 mb-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Encrypted</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                    <Database className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Atomic</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Tachyon</span>
                </div>
              </div>

              <h3 className="text-platinum font-semibold mb-4">Unified Infrastructure</h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Deploying institutional grade tools under a single sovereign domain. Txchyon.com/labs serves as the authoritative gateway to all proprietary trading modules.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.3em] flex flex-col gap-2">
          <span>All Rights Reserved • Txchyon Labs Engine</span>
          <span className="text-muted-foreground/50">
            Powered By <a href="https://galaxybuilt.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-bold">GalaxyBuilt</a>
          </span>
        </div>
      </div>
    </div>
  );
}
