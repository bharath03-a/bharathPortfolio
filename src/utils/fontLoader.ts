export const loadStyreneFont = () => {
  if (typeof window === 'undefined') return Promise.resolve();

  return new Promise<void>((resolve) => {
    // Use Google Fonts as primary source, with CDN fonts as fallback
    const fontSources = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      'https://fonts.cdnfonts.com/css/styrene?display=swap'
    ];
    
    let loaded = false;
    let attempts = 0;
    
    const tryLoadFont = (source: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = source;
      link.crossOrigin = 'anonymous';
      
      link.onload = () => {
        if (!loaded) {
          loaded = true;
          // Use Inter as primary font since Styrene is unreliable
          document.body.style.fontFamily = 'Inter, system-ui, -apple-system, sans-serif';
          document.body.classList.add('font-loaded');
          console.log('Font loaded successfully');
          resolve();
        }
      };
      
      link.onerror = () => {
        attempts++;
        if (attempts < fontSources.length) {
          tryLoadFont(fontSources[attempts]);
        } else {
          console.warn('Failed to load font from all sources, using system fallback');
          document.body.style.fontFamily = 'system-ui, -apple-system, sans-serif';
          resolve();
        }
      };
      
      document.head.appendChild(link);
    };
    
    tryLoadFont(fontSources[0]);
    
    // Fallback timeout
    setTimeout(() => {
      if (!loaded) {
        console.warn('Font loading timed out, using system fallback');
        document.body.style.fontFamily = 'system-ui, -apple-system, sans-serif';
        resolve();
      }
    }, 3000);
  });
};
