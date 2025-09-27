export const loadStyreneFont = () => {
  if (typeof window === 'undefined') return Promise.resolve();

  return new Promise<void>((resolve) => {
    // Create a link element to load the font
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.cdnfonts.com/css/styrene';
    document.head.appendChild(link);

    // Wait for the stylesheet to load
    link.onload = () => {
      // Force a repaint to ensure the font is applied
      document.body.style.fontFamily = 'Styrene, Inter, sans-serif';
      document.body.classList.add('font-loaded');
      resolve();
    };

    link.onerror = () => {
      console.warn('Failed to load Styrene font, using fallback');
      resolve();
    };

    // Fallback timeout
    setTimeout(() => {
      if (!document.body.classList.contains('font-loaded')) {
        console.warn('Styrene font loading timed out, falling back to Inter');
        resolve();
      }
    }, 3000);
  });
};
