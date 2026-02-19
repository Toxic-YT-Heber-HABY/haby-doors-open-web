import { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Tv } from 'lucide-react';

const ResponsiveTest = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    type: 'unknown'
  });

  useEffect(() => {
    // Skip in production since component renders null
    if (process.env.NODE_ENV === 'production') return;

    const updateScreenSize = () => {
      // Use visualViewport to avoid forced reflow from window.innerWidth/innerHeight
      const vv = window.visualViewport;
      const width = vv ? Math.round(vv.width) : document.documentElement.clientWidth;
      const height = vv ? Math.round(vv.height) : document.documentElement.clientHeight;
      let type = 'desktop';
      
      if (width < 640) type = 'mobile';
      else if (width < 1024) type = 'tablet';
      else if (width < 1920) type = 'desktop';
      else type = 'large';
      
      setScreenSize({ width, height, type });
    };

    requestAnimationFrame(updateScreenSize);
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getIcon = () => {
    switch (screenSize.type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      case 'desktop': return <Monitor className="w-5 h-5" />;
      case 'large': return <Tv className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  const getStatusColor = () => {
    switch (screenSize.type) {
      case 'mobile': return 'bg-green-500';
      case 'tablet': return 'bg-blue-500';
      case 'desktop': return 'bg-purple-500';
      case 'large': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 text-sm">
        <div className={`w-2 h-2 rounded-full ${getStatusColor()}`}></div>
        {getIcon()}
        <span className="font-mono">
          {screenSize.width}×{screenSize.height}
        </span>
        <span className="text-xs bg-white/20 px-2 py-1 rounded">
          {screenSize.type}
        </span>
      </div>
    </div>
  );
};

export default ResponsiveTest;