import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Smartphone, 
  Server,
  Zap,
  Wifi,
  Lock,
} from 'lucide-react';
import ReactLogo from '../../assets/react.svg'
import JSLogo from '../../assets/icons/javascript-16.svg'
import PythonLogo from '../../assets/icons/python-127.svg'
import TailwindLogo from '../../assets/icons/tailwind-css.svg'
import CryptographyLogo from '../../assets/icons/cryptography.svg'
import CSSLogo from '../../assets/icons/css.svg'
import HTMLLogo from '../../assets/icons/html.svg'
import JavaLogo from '../../assets/icons/java.svg'
import LinuxLogo from '../../assets/icons/linux.svg'
import MongoDBLogo from '../../assets/icons/mongodb.svg'
import MySQLLogo from '../../assets/icons/sql-file-format.svg'
import ShopifyLogo from '../../assets/icons/shopify.svg'
import TSLogo from '../../assets/icons/typescript-16.svg'
import VercelLogo from '../../assets/icons/vercel-logo.svg'
import ViteLogo from '../../assets/icons/vite.svg'
import GhidraLogo from '../../assets/icons/ghidra_logo.svg'
import FramerLogo from '../../assets/icons/framer.svg'

interface TechBadgeProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = "", showLabel = true }) => {
  const getIcon = (techName: string) => {
    const lower = techName.toLowerCase();
    const iconClass = "w-4 h-4 dark:text-comic-yellow text-comic-black";
    
    if (lower.includes('react')) 
      return <div className={iconClass}><img src={ReactLogo} alt="React" className={iconClass} /></div>;
    if (lower.includes('next')) 
      return <div className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><title>Nextjs SVG Icon</title><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64s64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2c-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"/><path fill="currentColor" d="m78.6 73.3l7.5 11.3V41.8h-7.5z"/></svg></div>;
    if (lower.includes('javascript')) 
      return <div className={iconClass}><img src={JSLogo} alt="JavaScript" className={iconClass} /></div>;
    if (lower.includes('node')) 
      return <Server className={iconClass} />;
    if (lower.includes('python')) 
      return <div className={iconClass}><img src={PythonLogo} alt="Python" className={iconClass} /></div>;
    if (lower.includes('go')) 
      return <Terminal className={iconClass} />;
    if (lower.includes('tailwind')) 
      return <div className={iconClass}><img src={TailwindLogo} alt="Tailwind CSS" className={iconClass} /></div>;
    if (lower.includes('electron')) 
      return <Cpu className={iconClass} />;
    if (lower.includes('pwa')) 
      return <Smartphone className={iconClass} />;
    if (lower.includes('graphql')) 
      return <Database className={iconClass} />;
    if (lower.includes('apollo')) 
      return <Globe className={iconClass} />;
    if (lower.includes('socket')) 
      return <Zap className={iconClass} />;
    if (lower.includes('redis')) 
      return <Database className={iconClass} />;
    if (lower.includes('framer')) 
      return <div className={iconClass}><img src={FramerLogo} alt="Framer" className={iconClass} /></div>;
    if (lower.includes('security')) 
      return <Lock className={iconClass} />;
    if (lower.includes('cryptography')) 
      return <div className={iconClass}><img src={CryptographyLogo} alt="Cryptography" className={iconClass} /></div>;
    if (lower.includes('network'))
      return <Wifi className={iconClass} />;
    if (lower.includes('linux')) 
      return <div className={iconClass}><img src={LinuxLogo} alt="Linux" className={iconClass} /></div>;
    if (lower.includes('shopify')) 
      return <div className={iconClass}><img src={ShopifyLogo} alt="Shopify" className={iconClass} /></div>;
    if (lower.includes('typescript')) 
      return <div className={iconClass}><img src={TSLogo} alt="TypeScript" className={iconClass} /></div>;
    if (lower.includes('vercel')) 
      return <div className={iconClass}><img src={VercelLogo} alt="Vercel" className={iconClass} /></div>;
    if (lower.includes('vite')) 
      return <div className={iconClass}><img src={ViteLogo} alt="Vite" className={iconClass} /></div>;
    if (lower.includes('css')) 
      return <div className={iconClass}><img src={CSSLogo} alt="CSS" className={iconClass} /></div>;
    if (lower.includes('html')) 
      return <div className={iconClass}><img src={HTMLLogo} alt="HTML" className={iconClass} /></div>;
    if (lower.includes('java')) 
      return <div className={iconClass}><img src={JavaLogo} alt="Java" className={iconClass} /></div>;
    if (lower.includes('mongodb')) 
      return <div className={iconClass}><img src={MongoDBLogo} alt="MongoDB" className={iconClass} /></div>;
    if (lower.includes('mysql') || lower.includes('sql')) 
      return <div className={iconClass}><img src={MySQLLogo} alt="MySQL" className={iconClass} /></div>;
    if (lower.includes('ghidra'))
      return <div className={iconClass}><img src={GhidraLogo} alt="Ghidra" className={iconClass} /></div>;
    if (lower.includes('payload'))
      return <div className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Payloadcms SVG Icon</title><path fill="currentColor" d="M11.068 0L22.08 6.625v12.573L13.787 24V11.427L2.769 4.808zM1.92 18.302l8.31-4.812v9.812z"/></svg></div>;

    return <Code2 className={iconClass} />;
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {getIcon(name)}
      {showLabel && <span>{name}</span>}
    </div>
  );
};