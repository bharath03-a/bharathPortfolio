import { getAssetPath } from '@/utils/pathUtils';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  /** Markdown-ish plain text. Rendered as paragraphs split on blank lines. */
  content: string;
  tags: string[];
  cover?: string;
  coverCaption?: string;
  link?: string;
  linkLabel?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'mlsys-2026-scratchpad-scheduler',
    title: 'Standing on a stage at MLSys, talking about a scheduler I taught an LLM to plan',
    excerpt:
      'How a multi-agent LLM pipeline took 2nd place in MLSys 2026 Track B for memory-constrained tensor DAG scheduling, and what it felt like to present it.',
    date: '2026-05-12',
    readTime: '6 min read',
    cover: getAssetPath('/mlsys.png'),
    coverCaption: 'Presenting the Scratchpad Scheduler Agent at MLSys 2026, Track B.',
    link: 'https://github.com/bharath03-a/scratchpad-scheduler-agent',
    linkLabel: 'Code on GitHub',
    tags: ['MLSys', 'Systems', 'Multi-Agent LLM'],
    content: `A few weeks ago I was standing behind a podium under a very large chandelier, looking at a slide that read "A Multi-Agent LLM Pipeline for Memory-Constrained Tensor DAG Scheduling." It was MLSys 2026, Track B, and the work had just placed 2nd in the agent-only category. This is the story of what it does and why I think the shape of it matters.

The problem.
Modern ML compilers have to schedule a graph of tensor operations onto hardware with a small, fast scratchpad memory. You can only keep so many tiles resident at once. Choose the wrong grouping and you spill, recompute, and pay in latency. It is a hard combinatorial partitioning problem: minimize latency while respecting a strict fast-memory budget, over a DAG with real dependency and granularity constraints.

The usual instinct is to write a clever heuristic or a solver. I wanted to know whether a language model could do the part it is actually good at, reasoning about structure, while leaving the parts it is bad at to deterministic code.

The shape of the system.
The pipeline is a small team of agents, each with one job. An analyzer reads the DAG and computes the things that matter: critical path, fan-in and fan-out, where the memory pressure concentrates. A parallel planner proposes grouping strategies. An optimizer pushes on latency. A refiner cleans up what the others missed.

None of those agents are trusted. Every proposal goes through a deterministic validator written in plain Python: does this grouping respect dependencies, does it fit in fast memory, does it cover every node, are the granularities legal. NetworkX does the graph metrics. An algorithmic search finds valid [w, h, k] granularities the model is not allowed to hallucinate. And there is a time-aware budget cascade with a deterministic fallback, so the system always returns a valid schedule even if the model runs out of room to think.

That is the whole idea, really: the LLM proposes, the solver disposes. Reasoning where it helps, hard guarantees where they count.

Why I like this division of labor.
It is tempting to ask a model to "just output the schedule." It will, confidently, and sometimes it will be wrong in ways that are expensive to detect. Putting a deterministic validator in the loop changes the failure mode entirely. The model can be creative and occasionally wrong, because wrong proposals simply never make it past the gate. You get the upside of search-by-reasoning without betting correctness on a token stream.

The result.
2nd place, agent-only, Track B. But the number I care about more is that the fallback path meant the system never returned an invalid schedule. The guarantee held.

The stage.
Presenting it was its own thing. You spend weeks deep in DAG granularities and Redis-free validators and then suddenly you are explaining it out loud to a room of people who build this for a living. What stuck with me is how much the room cared about the boring guarantee, the validator and the fallback, more than the agent choreography. That tracked with what I already believed: the interesting part of an "AI system" is usually the deterministic scaffolding around the intelligence, not the intelligence itself.

I walked off that stage more convinced than ever that this is the lane I want to be in, the seam between reasoning and systems that have to be correct under load.`,
  },
  {
    id: 'star-schema-data-warehousing',
    title: 'Designing a STAR schema, and when not to',
    excerpt:
      'What a STAR schema is, when it earns its place in an analytics stack, and the modeling decisions that actually matter.',
    date: '2025-09-23',
    readTime: '7 min read',
    tags: ['Data Engineering', 'Dimensional Modeling'],
    content: `A STAR schema is a dimensional model: one central fact table (events, transactions, measurements) surrounded by dimension tables that answer who, what, when, and where. The fact table in the middle radiating keys out to its dimensions is where the name comes from.

Why STAR over normalized 3NF for analytics? Three reasons. Query simplicity: analysts write one obvious join for "sales by product by month" instead of navigating a web of tables. Performance: narrow fact tables with surrogate keys compress and scan beautifully in columnar warehouses like BigQuery and Snowflake. Governance: dimensions become the one place a business definition lives.

The constructs that matter.
The fact table's grain must be explicit and chosen first, one row per order line, say. It holds measures and foreign keys, nothing else. Dimensions hold the descriptive attributes you slice by, with integer surrogate keys and slowly-changing-dimension handling (SCD2, effective_from / effective_to, is_current) when history matters. A precomputed date dimension saves you from rewriting calendar logic in every query.

A short checklist I keep coming back to: define the business process and atomic grain before anything else; keep fact columns skinny and additive; use surrogate keys; model SCD2 only on the entities where history is actually used; and build conformed dimensions you can share across multiple stars.

When not to reach for it.
Highly transactional OLTP systems do not want this shape. Neither do wide, sparse attribute sets that churn daily without an analytical question behind them. STAR is a tool for clarity in BI. When the questions are stable and the grain is consistent, it is still the most pragmatic model on the table.`,
  },
];

export const featuredPost = blogPosts[0];
