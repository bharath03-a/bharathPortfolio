import { getAssetPath } from '@/utils/pathUtils';

const RESUME_URL = getAssetPath('/Bharath_Velamala_Resume_FDE.pdf');

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="mx-auto max-w-5xl px-5 pt-36 pb-20 md:px-8 md:pt-44 md:pb-28"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
        <div className="animate-rise">
          <p className="eyebrow mb-6">Data + systems engineer / Tempe AZ</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl md:text-[3.7rem]">
            I build data systems, and lately
            the parts that stay
            <span className="text-accent"> correct under load.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Four years moving healthcare and financial data across GCP at scale.
            Now I spend my evenings further down the stack: schedulers, consensus,
            write-ahead logs, rate limiters, mostly in Rust, because I want to
            understand the machinery I&apos;ve been standing on.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 font-mono text-[13px]">
            <button
              onClick={() => scrollTo('work')}
              className="bg-ink px-4 py-2.5 text-paper transition-colors hover:bg-accent"
            >
              see the work →
            </button>
            <button
              onClick={() => scrollTo('now')}
              className="border border-rule px-4 py-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              what i&apos;m on now
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-rule px-4 py-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              resume ↗
            </a>
          </div>
        </div>

        <div className="animate-rise order-first md:order-none" style={{ animationDelay: '120ms' }}>
          <figure className="w-40 md:w-52">
            <img
              src={getAssetPath('/25_0673_COIS_convocation-544.jpg')}
              alt="Bharath Velamala"
              className="w-full grayscale-[0.15] object-cover"
              style={{ aspectRatio: '4 / 5' }}
            />
            <figcaption className="mt-2 font-mono text-[11px] leading-relaxed text-ink-faint">
              convocation, university of arizona<br />ms data science, 2025
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
