const links = [
  { label: 'Email', href: 'mailto:bharathvelamala1929@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/bharath03-a' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharath-velamala/' },
  { label: 'Medium', href: 'https://medium.com/@bharathvelamala1929' },
];

const ContactFooter = () => {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-5 pt-24 pb-16 md:px-8 md:pt-32">
      <p className="eyebrow mb-6">// get in touch</p>
      <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl">
        Working on something hard in data or systems?
        <span className="text-accent"> Let&apos;s talk.</span>
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        Data platforms, applied AI, distributed systems. Anything that has to be
        correct under scale. Based in Tempe AZ, and happily remote.
      </p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px]">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="link-underline text-ink hover:text-accent"
          >
            {l.label.toLowerCase()} ↗
          </a>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-[11px] text-ink-faint md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} bharath velamala</span>
        <span>space grotesk · jetbrains mono · built with curiosity</span>
      </div>
    </footer>
  );
};

export default ContactFooter;
