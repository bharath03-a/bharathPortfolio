import { useState } from 'react';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';
import { getAssetPath } from '@/utils/pathUtils';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  image: string;
  details: string;
  technologies: string[];
  achievements: string[];
}

interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  image: string;
  details: string;
  coursework: string[];
}

const experiences: Experience[] = [
  {
    company: 'Centauri Health Solutions',
    role: 'Data Engineer II',
    location: 'Tempe, AZ',
    period: '2025 — now',
    current: true,
    image: getAssetPath('/chs.png'),
    details:
      'Architecting CLARION, a multi-tenant clinical data platform. End-to-end ETL pipelines with schema contracts and SCD Type 2 tracking over 1M+ weekly records, plus a streaming pipeline that ingests CDA XML and ZIP/PDF documents into FHIR bundles on Dataflow, and a Map-Reduce NER inference pipeline feeding AI-assisted medical coding.',
    technologies: ['Apache Beam', 'Dataflow', 'BigQuery', 'FHIR', 'Spanner Graph', 'Gemini'],
    achievements: [
      'Architecting CLARION, a multi-tenant clinical data platform, with schema contracts and SCD2 over 1M+ weekly records for 5+ downstream teams',
      'Built a streaming CDA XML and ZIP/PDF to FHIR pipeline on Dataflow, cutting failures ~80% via per-page parallelism and file-handle lifecycle management',
      'Designed a Map-Reduce NER inference pipeline across millions of pages, hybrid rule-based plus LLM, feeding BigQuery datasets for AI-assisted medical coding',
    ],
  },
  {
    company: 'Mayo Clinic',
    role: 'Data Science Intern, Biostatistics',
    location: 'Rochester, MN',
    period: '2024 — 2025',
    image: getAssetPath('/MC.jpeg'),
    details:
      'Co-authored and published medspaCyV (PMC12374723), an open-source clinical NLP tool with a custom sentence tokenizer, sectionizer, and NER visualizer. Built an event-driven NLP microservice on Cloud Run and Firestore that turns clinical notes into structured assets.',
    technologies: ['medspaCy', 'Clinical NLP', 'Cloud Run', 'Firestore', 'Python'],
    achievements: [
      'Co-authored and published medspaCyV (PMC12374723), an open-source clinical NLP toolkit',
      'Built an event-driven NLP microservice that cut pipeline latency 60% with async concurrency and tighter service boundaries',
    ],
  },
  {
    company: 'HSBC',
    role: 'Data Engineer',
    location: 'Hyderabad, India',
    period: '2023',
    image: getAssetPath('/hsbc.png'),
    details:
      'Migrated 2M+ weekly financial records from on-premise mainframe to GCP, and owned distributed Spark/Dataproc analytics pipelines. Designed a multi-tenant data model across 20+ critical tables with full schema compliance after migration.',
    technologies: ['GCP', 'Airflow', 'Dataflow', 'BigQuery', 'Spark', 'PostgreSQL'],
    achievements: [
      'Migrated 2M+ weekly financial records mainframe to GCP, cutting execution time 35% with regression test safeguards',
      'Cut Spark/Dataproc processing time 40% and cloud cost 25% via windowed aggregations and optimized joins',
      'Reached 100% schema compliance across 20+ tables across 3+ upstream and downstream teams',
    ],
  },
  {
    company: 'SpringML',
    role: 'Associate Data Engineer',
    location: 'Hyderabad, India',
    period: '2021 — 2022',
    image: getAssetPath('/springML.png'),
    details:
      'Engineered a large-scale Apache Beam pipeline in Java on Dataflow processing 2M+ weekly records, fault-tolerant CDC pipelines with dbt, and a Cloud Run microservice orchestrating Document AI over 100K+ claim uploads. Authored Terraform IaC and Cloud Build CI/CD across the SDLC.',
    technologies: ['Java', 'Apache Beam', 'Dataflow', 'dbt', 'Document AI', 'Terraform'],
    achievements: [
      'Tuned a Java Beam pipeline to 8-minute end-to-end latency, a 50% improvement, with PII masking for governance',
      'Built fault-tolerant CDC pipelines with dbt SQL MERGE, accelerating data availability 35%',
      'Cut release lead time 40% with Terraform IaC and Cloud Build CI/CD, and processed 100K+ Document AI claim uploads',
    ],
  },
];

const educations: Education[] = [
  {
    institution: 'University of Arizona',
    degree: 'MS, Data Science',
    location: 'Tucson, AZ',
    period: '2023 — 2025',
    gpa: '4.0 / 4.0',
    image: getAssetPath('/uofa.png'),
    details:
      'Machine learning, statistical modeling, and big-data systems. Teaching Assistant for AI coursework, with industry-sponsored projects across healthcare and analytics.',
    coursework: ['Machine Learning', 'Deep Learning', 'NLP', 'Big Data', 'Data Mining', 'AI (TA)'],
  },
  {
    institution: 'IIT Patna',
    degree: 'BTech, Mechanical Engineering',
    location: 'Patna, India',
    period: '2017 — 2021',
    gpa: '3.5 / 4.0',
    image: getAssetPath('/iitp.png'),
    details:
      'A heavy mathematical and systems-thinking foundation, and the first real pull toward programming and data.',
    coursework: ['Engineering Math', 'Control Systems', 'Thermodynamics', 'Programming', 'Statistics'],
  },
];

// How I think — short, honest principles. Not a resume.
const principles = [
  {
    head: 'Correctness first, cleverness second.',
    body: 'A pipeline that is fast and wrong is just wrong, faster. I would rather make the boring guarantee hold than chase a benchmark.',
  },
  {
    head: 'Understand the layer below you.',
    body: 'I keep climbing down the stack, from BigQuery to Beam to Rust to the memory hierarchy, because abstractions leak and the leaks are where the real bugs live.',
  },
  {
    head: 'Let the deterministic parts be deterministic.',
    body: 'I like systems where the model proposes and a solver verifies. Reasoning where it helps, hard guarantees where they count.',
  },
];

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
      {/* Bio */}
      <div className="max-w-2xl">
        <p className="eyebrow mb-6">// about</p>
        <div className="space-y-5 font-display text-xl font-medium leading-relaxed text-ink md:text-2xl">
          <p>
            I&apos;m Bharath, a data engineer who got curious about what holds the
            data up.
          </p>
          <p className="font-normal text-ink-soft">
            Most of my work has been close to infrastructure: cloud pipelines for
            healthcare and finance, clinical NLP, semantic search. The further I
            went, the more I wanted to know how the floor itself was built, so I
            started writing schedulers, consensus, and logs by hand to find out.
          </p>
        </div>
      </div>

      {/* How I think */}
      <div className="mt-20">
        <p className="eyebrow mb-8">// how i think</p>
        <div className="grid gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.head}>
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {p.head}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <p className="eyebrow mb-8">// where i&apos;ve worked</p>
        <div className="space-y-3">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setSelectedExperience(exp)}
              className="group block w-full border-l-2 border-rule bg-paper-deep/40 p-5 text-left transition-colors hover:border-accent hover:bg-paper-deep/70 md:p-7"
            >
              <div className="grid gap-x-6 gap-y-4 md:grid-cols-[auto_1fr]">
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="h-12 w-12 flex-shrink-0 rounded-lg bg-paper object-contain p-1.5 grayscale transition duration-300 group-hover:grayscale-0 md:h-14 md:w-14"
                  />
                  <span className="font-mono text-[13px] text-ink-faint">{exp.period}</span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent md:text-2xl">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-green">
                        <span className="h-1.5 w-1.5 rounded-full bg-green" /> current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-ink-soft">
                    {exp.role} <span className="text-ink-faint">· {exp.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-mono text-xs text-ink-faint">
                    {exp.technologies.join('  ·  ')}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <p className="eyebrow mb-8">// studied at</p>
        <div className="grid gap-3 md:grid-cols-2">
          {educations.map((edu) => (
            <button
              key={edu.institution}
              onClick={() => setSelectedEducation(edu)}
              className="group block border-l-2 border-rule bg-paper-deep/40 p-5 text-left transition-colors hover:border-accent hover:bg-paper-deep/70 md:p-6"
            >
              <div className="flex items-start gap-4">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="h-12 w-12 flex-shrink-0 rounded-lg bg-paper object-contain p-1.5 grayscale transition duration-300 group-hover:grayscale-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-ink-faint">{edu.period}</span>
                    {edu.gpa && (
                      <span className="font-mono text-[11px] text-accent">GPA {edu.gpa}</span>
                    )}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {edu.institution}
                  </h3>
                  <p className="font-mono text-[13px] text-ink-soft">{edu.degree}</p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-ink-faint">
                    {edu.coursework.join('  ·  ')}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />
      )}
      {selectedEducation && (
        <EducationModal
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          education={selectedEducation}
        />
      )}
    </section>
  );
};

export default About;
