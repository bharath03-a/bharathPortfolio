/*
  "Now" — a living section. Update the entries as things change.
  Keep it factual: only what you're actually doing.
*/

interface Thread {
  title: string;
  note: string;
  href?: string;
}

const threads: Thread[] = [
  {
    title: 'Building GitCortex',
    note: 'A local-first code knowledge graph for Git repos. tree-sitter AST indexing, an embedded KuzuDB graph, and an MCP server so coding assistants can query code structure instead of re-reading files.',
    href: 'https://github.com/bharath03-a/GitCortex',
  },
  {
    title: 'Building TraceCast',
    note: 'Demo-as-code: write a YAML script, get a reproducible terminal and browser demo. CI-native, regenerated automatically, and drivable by an MCP server.',
    href: 'https://github.com/bharath03-a/TraceCast',
  },
  {
    title: 'Learning ML systems',
    note: 'A personal lab for ML systems engineering. Writing CUDA kernels by hand and profiling them against cuBLAS on real GPUs via Modal, starting from the memory hierarchy and working up.',
    href: 'https://github.com/bharath03-a/moe-kernel-lab',
  },
];

const Now = () => {
  return (
    <section id="now" className="border-y border-rule bg-paper-deep/50">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-baseline justify-between border-b border-rule pb-4">
          <h2 className="font-mono text-sm tracking-wider text-ink-faint">// now</h2>
          <span className="font-mono text-sm text-accent-2">mid 2026</span>
        </div>

        <ol>
          {threads.map((thread, i) => (
            <li
              key={thread.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-7 md:grid-cols-[2.5rem_1fr_2fr] md:gap-x-10"
            >
              <span className="font-mono text-sm text-accent md:pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl font-medium text-ink">
                {thread.href ? (
                  <a
                    href={thread.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-accent"
                  >
                    {thread.title} ↗
                  </a>
                ) : (
                  thread.title
                )}
              </h3>
              <p className="col-start-2 mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft md:col-start-3 md:mt-0">
                {thread.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Now;
