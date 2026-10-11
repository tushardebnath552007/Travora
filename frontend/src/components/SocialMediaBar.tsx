import React from 'react';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook, 
  Share2, 
  Send, 
  Globe,
  Sparkles
} from 'lucide-react';
import { useTravora } from '../context/TravoraContext';

export const SocialMediaBar: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { showToast } = useTravora();

  const socials = [
    {
      name: 'Instagram',
      handle: '@travora.journeys',
      followers: '148K',
      icon: <Instagram className="w-4 h-4" />,
      color: 'hover:text-pink-400 hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)]',
      url: 'https://instagram.com'
    },
    {
      name: 'YouTube',
      handle: 'TRAVORA Expeditions',
      followers: '92K',
      icon: <Youtube className="w-4 h-4" />,
      color: 'hover:text-red-400 hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]',
      url: 'https://youtube.com'
    },
    {
      name: 'X (Twitter)',
      handle: '@travora_world',
      followers: '64K',
      icon: <Twitter className="w-4 h-4" />,
      color: 'hover:text-cyan-400 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]',
      url: 'https://twitter.com'
    },
    {
      name: 'Facebook',
      handle: 'TRAVORA Community',
      followers: '85K',
      icon: <Facebook className="w-4 h-4" />,
      color: 'hover:text-blue-400 hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]',
      url: 'https://facebook.com'
    },
    {
      name: 'Telegram',
      handle: 'Travora Expeditions Channel',
      followers: '32K',
      icon: <Send className="w-4 h-4" />,
      color: 'hover:text-sky-400 hover:border-sky-500/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]',
      url: 'https://telegram.org'
    }
  ];

  const handleSocialClick = (name: string, handle: string) => {
    showToast(`Opening ${name} (${handle})`, 'info');
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {socials.map((s) => (
          <button
            key={s.name}
            onClick={() => handleSocialClick(s.name, s.handle)}
            className={`p-2 rounded-full bg-slate-900/80 border border-white/10 text-neutral-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-pointer ${s.color}`}
            title={`${s.name} - ${s.handle} (${s.followers} explorers)`}
            aria-label={s.name}
          >
            {s.icon}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-400 uppercase font-mono">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
        <span>Join 400K+ Explorers Worldwide</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {socials.map((s) => (
          <button
            key={s.name}
            onClick={() => handleSocialClick(s.name, s.handle)}
            className={`p-3 rounded-2xl bg-slate-950/70 border border-white/10 text-left transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group flex items-center gap-3 ${s.color}`}
          >
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-cyan-300 transition-colors">
                {s.name}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono">
                {s.followers}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
