import { Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const SocialIsland = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bharath-velamala/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/bharath_velamala/', label: 'Instagram' },
    // { icon: Youtube, href: '#', label: 'YouTube' },
    { 
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-.64-2.09A2.33 2.33 0 0 0 15.9 10a2.16 2.16 0 0 0-1.81.91c-.18-.22-.44-.38-.73-.38a1.18 1.18 0 0 0-.92.41V10.5a.36.36 0 0 0-.72 0v7.5a.36.36 0 0 0 .72 0v-5.62c0-.89.33-1.34 1-1.34s1 .45 1 1.34v5.62a.36.36 0 0 0 .72 0v-5.62c0-.89.33-1.34 1-1.34s1 .45 1 1.34v5.62a.36.36 0 0 0 .72 0z"/>
        </svg>
      ), 
      href: 'https://medium.com/@bharathvelamala1929', 
      label: 'Medium' 
    },
    { icon: Github, href: 'https://github.com/bharath03-a', label: 'Github' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg rounded-full px-4 py-2">
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-600 hover:text-gray-800 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIsland;
