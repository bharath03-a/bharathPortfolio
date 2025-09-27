export const loadStyreneFont = () => {
  if (typeof window === 'undefined') return Promise.resolve();

  return new Promise<void>((resolve) => {
    // Try multiple font sources for better reliability
    const fontSources = [
      'https://fonts.cdnfonts.com/css/styrene',
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
          document.body.style.fontFamily = 'Styrene, Inter, sans-serif';
          document.body.classList.add('font-loaded');
          console.log('Styrene font loaded successfully');
          resolve();
        }
      };
      
      link.onerror = () => {
        attempts++;
        if (attempts < fontSources.length) {
          tryLoadFont(fontSources[attempts]);
        } else {
          console.warn('Failed to load Styrene font from all sources, using fallback');
          resolve();
        }
      };
      
      document.head.appendChild(link);
    };
    
    tryLoadFont(fontSources[0]);
    
    // Fallback timeout
    setTimeout(() => {
      if (!loaded) {
        console.warn('Styrene font loading timed out, falling back to Inter');
        resolve();
      }
    }, 5000);
  });
};
