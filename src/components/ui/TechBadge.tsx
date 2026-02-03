import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Layout, 
  Smartphone, 
  Shield, 
  Box,
  FileJson,
  Server,
  Layers,
  Zap,
  Lock,
  Wifi
} from 'lucide-react';

interface TechBadgeProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = "", showLabel = true }) => {
  const getIcon = (techName: string) => {
    const lower = techName.toLowerCase();
    const iconClass = "w-4 h-4";
    
    if (lower.includes('react')) return <div className={iconClass}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"/><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"/><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)"/></svg></div>;
    if (lower.includes('next')) return <div className={iconClass}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M15 15L9 9M9 15l6-6"/></svg></div>;
    if (lower.includes('vue')) return <div className={iconClass}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20.5L2 3.5h20L12 20.5z"/><path d="M12 14L7 4.5h10L12 14z"/></svg></div>;
    if (lower.includes('node')) return <Server className={iconClass} />;
    if (lower.includes('python')) return <Terminal className={iconClass} />;
    if (lower.includes('go')) return <Terminal className={iconClass} />;
    if (lower.includes('tailwind')) return <div className={iconClass}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19c-3.037-2-1.5-3.5.5-5.5 2.5-2.5 4-4-2.5-5.5S6 12 9 14c2.5 2 1.5 3.5-.5 5.5-2.5 2.5-4 4 2.5 5.5s7-4 6.5-6z"/></svg></div>;
    if (lower.includes('electron')) return <Cpu className={iconClass} />;
    if (lower.includes('pwa')) return <Smartphone className={iconClass} />;
    if (lower.includes('graphql')) return <Database className={iconClass} />;
    if (lower.includes('apollo')) return <Globe className={iconClass} />;
    if (lower.includes('socket')) return <Zap className={iconClass} />;
    if (lower.includes('redis')) return <Database className={iconClass} />;
    if (lower.includes('framer')) return <Layers className={iconClass} />;
    if (lower.includes('typescript')) return <div className={iconClass}><span className="font-bold text-[10px] leading-none">TS</span></div>;
    if (lower.includes('security') || lower.includes('cryptography')) return <Lock className={iconClass} />;
    if (lower.includes('network') || lower.includes('linux')) return <Wifi className={iconClass} />;
    
    return <Code2 className={iconClass} />;
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {getIcon(name)}
      {showLabel && <span>{name}</span>}
    </div>
  );
};