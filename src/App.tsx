import React from 'react';
import { Monitor, Apple, Box, Sparkles, Gamepad2, Film, Cuboid } from 'lucide-react';
import { motion } from 'motion/react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const FloatingModelCard = ({ src, title, tags, icon: Icon, className, delay }: any) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [-15, 15, -15], opacity: 1 }}
    transition={{ 
      y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 1, delay: delay * 0.5 }
    }}
    className={`absolute rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/40 backdrop-blur-md ${className}`}
  >
    <img 
      src={src} 
      alt={title} 
      className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
      referrerPolicy="no-referrer"
      onError={(event) => {
        if (event.currentTarget.src !== img1) {
          event.currentTarget.src = img1;
        }
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent"></div>

    <div className="absolute bottom-4 left-4 right-4 z-20">
      <div className="text-[10px] font-mono text-[#F9CF00] mb-1.5 flex items-center gap-1 uppercase tracking-wider">
        <Sparkles className="w-3 h-3" /> AI Generated
      </div>
      <div className="text-sm font-semibold text-zinc-100 flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-zinc-400" />
        {title}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/5 backdrop-blur-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden bg-[#050505] text-zinc-50 selection:bg-[#F9CF00]/30 font-sans">
      
      {/* Background Layer: 3D Showcase Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 3D Software Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Colorful Glowing Orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F9CF00]/10 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#F9CF00]/10 rounded-full blur-[150px] translate-y-1/3"></div>

        {/* Floating Showcase Cards */}
        <FloatingModelCard 
          src={img2}
          title="Cybernetic Android"
          icon={Gamepad2}
          tags={['Character', '4K PBR', 'Rigged']}
          className="w-64 h-80 -left-12 top-12 md:left-10 md:top-20 -rotate-6"
          delay={0}
        />
        
        <FloatingModelCard 
          src={img3}
          title="Space Explorer"
          icon={Film}
          tags={['Hero', 'Unreal Engine', 'Cinematic']}
          className="w-72 h-64 -right-20 top-32 md:right-12 md:top-24 rotate-3 hidden sm:block"
          delay={1.5}
        />

        <FloatingModelCard 
          src={img1}
          title="Stylized Avatar"
          icon={Cuboid}
          tags={['Stylized', 'Tripo AI', 'OBJ']}
          className="w-56 h-72 left-1/4 -bottom-20 md:left-20 md:bottom-10 rotate-12 opacity-60"
          delay={3}
        />

        <FloatingModelCard 
          src={img4}
          title="Fantasy Warrior"
          icon={Gamepad2}
          tags={['Character', 'Next-Gen', 'GLTF']}
          className="w-64 h-80 -right-10 -bottom-10 md:right-24 md:bottom-16 -rotate-6 hidden md:block"
          delay={2}
        />
      </div>

      {/* Top spacer */}
      <div className="flex-1 relative z-10"></div>

      {/* Main Content (Glassmorphism Card) */}
      <main className="relative z-10 max-w-2xl w-full text-center space-y-8 bg-[#0a0a0c]/60 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_0_50px_0_rgba(0,0,0,0.5)]">
        
        {/* Logo & Title */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F9CF00]/20 to-[#F9CF00]/5 border border-[#F9CF00]/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,207,0,0.2)] backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
            <Box className="w-10 h-10 text-[#F9CF00] relative z-10" />
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                Lite Viewer
              </h1>
              <span className="px-3 py-1 text-xs font-medium bg-[#F9CF00]/10 text-[#F9CF00] border border-[#F9CF00]/20 rounded-full backdrop-blur-md">
                Alpha 测试版
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-lg md:text-xl text-zinc-200 max-w-lg mx-auto leading-relaxed font-medium">
            极速加载的轻量级 3D 模型查看器
          </p>
          <p className="text-zinc-400 max-w-md mx-auto text-sm md:text-base">
            专为游戏与影视行业打造。支持多种主流 3D 模型格式，完美适配 Windows 与 macOS 双端系统，为您带来流畅的 AI 生成资产预览体验。
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#F9CF00] text-zinc-950 hover:bg-[#F9CF00]/90 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,207,0,0.3)] border border-[#F9CF00]/50">
            <Monitor className="w-5 h-5" />
            <span>Windows 版下载</span>
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 text-white hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 active:scale-95 backdrop-blur-md">
            <Apple className="w-5 h-5" />
            <span>macOS 版下载</span>
          </button>
        </div>
      </main>

      {/* Bottom spacer & Footer */}
      <div className="flex-1 flex flex-col justify-end w-full relative z-10">
        <footer className="text-center text-zinc-500 text-sm pb-4 drop-shadow-md">
          <p>开发与版权归属 &copy; {new Date().getFullYear()} Tripo 3D. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
