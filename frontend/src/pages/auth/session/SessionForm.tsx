import React, { useState } from 'react';
import { useTravora } from '../../../context/TravoraContext';
import { Compass, Mail, Lock, User, Eye, EyeOff, ArrowRight, LogOut } from 'lucide-react';

interface SessionFormProps {
  initialMode: 'login' | 'signup';
}

export const SessionForm: React.FC<SessionFormProps> = ({ initialMode }) => {
  const { login, signup, authLoading, authUser, logout, setActiveTab } = useTravora();
  const [tab, setTab] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => setTab(initialMode), [initialMode]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (tab === 'signup') {
        if (!name.trim()) throw new Error('Please tell us your name.');
        if (password.length < 6) throw new Error('Password must be at least 6 characters.');
        await signup(name, email, password);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  if (authUser) {
    return (
      <div className="text-center space-y-5 py-8">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-400 to-amber-300 mx-auto flex items-center justify-center text-3xl font-black text-slate-950 font-display">{authUser.name.charAt(0)}</div>
        <div>
          <h2 className="text-2xl font-black text-white font-display">You're signed in, {authUser.name}!</h2>
          <p className="text-sm text-neutral-400 mt-1 font-mono">{authUser.email}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => setActiveTab('explore')} className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider cursor-pointer">Explore Destinations <ArrowRight className="w-4 h-4 inline ml-1" /></button>
          <button onClick={logout} className="px-6 py-3 rounded-full border border-white/15 text-neutral-200 text-xs font-bold uppercase tracking-wider hover:border-rose-400/60 hover:text-rose-300 cursor-pointer"><LogOut className="w-4 h-4 inline mr-1" /> Sign Out</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-300 p-[1.5px]"><div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center"><Compass className="w-5 h-5 text-cyan-300" /></div></div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">{tab === 'login' ? 'Welcome Back' : 'Join the Expedition'}</h2>
          <p className="text-xs text-neutral-400 font-mono">{tab === 'login' ? 'Log in to pick up where you left off.' : 'Create a free account in under a minute.'}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10">
        {(['login', 'signup'] as const).map((t) => (
          <button key={t} onClick={() => { setTab(t); setError(null); }} className={`py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${tab === t ? 'bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950' : 'text-neutral-300 hover:text-white'}`}>
            {t === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="space-y-4">
        {tab === 'signup' && (
          <label className="block space-y-1.5">
            <span className="text-xs font-black text-cyan-300 uppercase font-mono">Full Name</span>
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 focus-within:border-cyan-400/70 rounded-2xl px-4 py-3">
              <User className="w-4 h-4 text-neutral-400 shrink-0" />
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Aarav Sen" className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" />
            </div>
          </label>
        )}
        <label className="block space-y-1.5">
          <span className="text-xs font-black text-cyan-300 uppercase font-mono">Email</span>
          <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 focus-within:border-cyan-400/70 rounded-2xl px-4 py-3">
            <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" />
          </div>
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-black text-cyan-300 uppercase font-mono">Password</span>
          <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 focus-within:border-cyan-400/70 rounded-2xl px-4 py-3">
            <Lock className="w-4 h-4 text-neutral-400 shrink-0" />
            <input type={showPass ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder={tab === 'signup' ? 'Min. 6 characters' : 'Your password'} className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="text-neutral-400 hover:text-white cursor-pointer">{showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
          </div>
        </label>
        {error && <div className="text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/40 rounded-xl px-4 py-2.5">{error}</div>}
        <button type="submit" disabled={authLoading} className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider hover:from-cyan-300 hover:to-amber-200 transition-all shadow-lg disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2">
          {authLoading ? <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" /> : null}
          <span>{tab === 'login' ? 'Log In to Travora' : 'Create Free Account'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <p className="text-[11px] text-neutral-500 text-center font-mono">Secured by the Travora backend · passwords hashed with SHA-256 + salt</p>
    </>
  );
};
