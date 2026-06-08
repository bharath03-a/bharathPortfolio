
import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';
import { Card, CardContent } from '@/components/ui/card';
import { getAssetPath } from '@/utils/pathUtils';
import { Brain, Cpu, Database } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  image: string;
  details: string;
  technologies: string[];
  achievements: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  image: string;
  details: string;
  coursework: string[];
}

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  const experiences = [
    {
      company: "Centauri Health Solutions",
      role: "Data Ops Engineer II",
      period: "Jul 2025 - Present",
      image: getAssetPath("/chs.png"),
      details: "Transform 1M+ patient C-CDA documents into structured data through a scalable GCP ETL pipeline using Apache Beam, MedSpaCy, and Gemini. Create embeddings with BigQueryML to enable semantic search and analytics. Process and filter 1M+ patient document pages through OCR and parsing, reducing medical coder review time by 50%.",
      technologies: ["Python", "Apache Beam", "MedSpaCy", "Gemini", "BigQuery", "BigQueryML", "GCP", "ETL", "C-CDA", "Semantic Search", "OCR"],
      achievements: [
        "Transform 1M+ patient C-CDA documents into structured data via scalable GCP ETL pipeline",
        "Create embeddings using BigQueryML to enable advanced semantic search and analytics",
        "Process and filter 1M+ patient document pages via OCR and parsing, reducing medical coder review time by 50%",
        "Build scalable pipelines using Apache Beam, MedSpaCy, and Gemini"
      ]
    },
    {
      company: "Mayo Clinic",
      role: "Data Science Intern (Biostatistics)",
      period: "May 2024 - May 2025",
      image: getAssetPath("/MC.jpeg"),
      details: "Developed MedSpaCy, an open-source NLP tool with 4 modules for clinical text analysis, and built an NLP pipeline converting two semi-structured input formats into structured outputs, cutting clinical note review time by 90%. Engineered domain-specific, rule-based NLP modules like entity recognition, section detection with MedSpaCy, and implemented ConText algorithm with five contextual flags, improving entity and section detection accuracy by 35%.",
      technologies: ["Python", "MedSpaCy", "NLP", "Clinical Text Analysis", "ConText Algorithm", "Entity Recognition", "Section Detection", "Rule-based NLP", "Open-source"],
      achievements: [
        "Developed MedSpaCy, an open-source NLP tool with 4 modules for clinical text analysis",
        "Built NLP pipeline converting two semi-structured input formats into structured outputs, cutting clinical note review time by 90%",
        "Engineered domain-specific, rule-based NLP modules like entity recognition and section detection with MedSpaCy",
        "Implemented ConText algorithm with five contextual flags, improving entity and section detection accuracy by 35%"
      ]
    },
    {
      company: "HSBC",
      role: "Data Engineer",
      period: "Jan 2023 - Aug 2023",
      image: getAssetPath("/hsbc.png"),
      details: "Migrated mainframe-based corporate card transaction pipelines (1M+ weekly records) to GCP using Control-M, Compute Engine, BigQuery, PostgreSQL reducing pipeline execution time by 35% and ensuring zero data loss. Guided and resolved 50+ data integrity issues using SQL query optimizations, collaborating with upstream and downstream teams and leveraging SQL on BigQuery to improve data consistency by 100% and ensure compliance. Created ETL workflows using Spark on Google Cloud Dataproc, reducing processing time of real-time financial analytics by 40% and cutting costs by 25% through optimized parallel data processing, improving scalability.",
      technologies: ["GCP", "BigQuery", "PostgreSQL", "Control-M", "Compute Engine", "SQL", "ETL", "Data Migration", "Apache Spark", "Dataproc", "Mainframe", "Financial Analytics"],
      achievements: [
        "Migrated mainframe-based corporate card transaction pipelines (1M+ weekly records) to GCP, reducing execution time by 35% and ensuring zero data loss",
        "Guided and resolved 50+ data integrity issues using SQL query optimizations, improving data consistency by 100% and ensuring compliance",
        "Created ETL workflows using Spark on Google Cloud Dataproc, reducing processing time by 40% and cutting costs by 25%",
        "Improved scalability through optimized parallel data processing"
      ]
    },
    {
      company: "SpringML Inc.",
      role: "Associate Data Engineer",
      period: "Jan 2021 - Dec 2022",
      image: getAssetPath("/springML.png"),
      details: "Orchestrated ETL pipelines with Java, Apache Beam, Dataflow, and BigQuery to process 2M+ weekly health records, reducing execution time to 8 minutes, boosting workflow efficiency by 50% and ensuring full PII masking compliance. Pioneered a multi-channel communication pipeline using Python, Dataflow, Pub/Sub, Twilio, Cloud Functions, leveraging STAR schema data models to optimize outreach analytics and boost user response rates by 30%. Implemented modular, fault-tolerant ETL pipelines on GCP using Data Fusion, Airflow, and BigQuery, sourcing data from SAP IBP to automate ingestion, reducing retrieval time by 35% and improving demand forecasting accuracy. Collaborated with Google Cloud team to demo cross-project infrastructure on a shared VPC using Terraform, Cloud Run, creating reusable templates that cut deployment time by 40%, streamlined workflows, and enhanced security. Innovated a solution with Google Cloud Document AI to parse 10K+ physical reward claim documents, automating key information extraction and cutting manual review time by 50%.",
      technologies: ["Java", "Apache Beam", "Dataflow", "BigQuery", "Python", "Pub/Sub", "Twilio", "Cloud Functions", "Terraform", "STAR Schema", "Data Fusion", "Airflow", "SAP IBP", "Cloud Run", "Document AI", "PII Masking", "ETL"],
      achievements: [
        "Orchestrated ETL pipelines processing 2M+ weekly health records, reducing execution time to 8 minutes and boosting workflow efficiency by 50%",
        "Pioneered multi-channel communication pipeline using Python, Dataflow, Pub/Sub, Twilio, Cloud Functions, boosting user response rates by 30%",
        "Implemented modular, fault-tolerant ETL pipelines on GCP using Data Fusion, Airflow, and BigQuery, reducing retrieval time by 35%",
        "Collaborated with Google Cloud team to demo cross-project Shared VPC infrastructure PoC, cutting deployment time by 40%",
        "Innovated solution with Google Cloud Document AI to parse 10K+ physical reward claim documents, cutting manual review time by 50%"
      ]
    }
  ];

  const educations = [
    {
      institution: "University of Arizona",
      degree: "Master of Science in Data Science",
      period: "Aug 2023 - May 2025",
      gpa: "4.0/4.0",
      image: getAssetPath("/uofa.png"),
      details: "Specialized in advanced machine learning techniques, statistical modeling, and big data analytics. Conducted research in deep learning applications for healthcare and worked on multiple industry-sponsored projects. Served as Teaching Assistant for AI courses.",
      coursework: ["Data Mining", "Machine Learning", "Data Visualization", "Deep Learning", "NLP", "Big Data", "AI (Teaching Assistant)"]
    },
    {
      institution: "Indian Institute of Technology (IIT) Patna",
      degree: "Bachelor of Technology in Mechanical Engineering",
      period: "2017 - 2021",
      image: getAssetPath("/iitp.png"),
      details: "Developed strong analytical and mathematical foundations. Completed projects in automation, robotics, and data analysis. Active member of the coding club and participated in multiple hackathons.",
      coursework: ["Engineering Mathematics", "Thermodynamics", "Fluid Mechanics", "Control Systems", "CAD/CAM", "Materials Science", "Programming Fundamentals", "Statistics"]
    }
  ];

  const focusAreas = [
    {
      title: 'Data Engineering',
      icon: Database,
      summary: 'Production pipelines, batch and streaming systems, cloud warehouses, orchestration, and data quality.',
      proof: ['GCP Dataflow', 'Apache Beam', 'Spark', 'BigQuery', 'Airflow', 'Pub/Sub'],
    },
    {
      title: 'AI',
      icon: Brain,
      summary: 'LLM applications, RAG, clinical NLP, OCR workflows, and model-backed tools with structured outputs.',
      proof: ['Gemini', 'MedSpaCy', 'RAG', 'LangExtract', 'FastAPI', 'Embeddings'],
    },
    {
      title: 'Systems Projects',
      icon: Cpu,
      summary: 'Recent hands-on projects in rate limiting, DAG scheduling, async runtimes, and streaming semantics.',
      proof: ['Rust', 'Tokio', 'gRPC', 'Redis Lua', 'Consistent Hashing', 'Scio'],
    },
  ];

  return (
    <section id="about" className="py-20 px-2 md:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* About Me Section */}
        <div 
          className="text-center"
        >
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Background & Experience
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
          </div>

            <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-slate-800 leading-relaxed font-styrene">
              <p>
                I am Bharath Velamala, a data engineer with 4+ years of experience building cloud data pipelines, 
                analytics platforms, and AI-enabled workflows. My strongest lane is data engineering on GCP, and I am 
                intentionally expanding into AI systems and distributed systems through recent projects in RAG, clinical NLP, 
                streaming analytics, Rust, and scheduling.
              </p>
              <p>
                My expertise spans across healthcare analytics, financial data engineering, and e-commerce, where I have contributed to 
                optimizing data pipelines and predictive modeling. I completed my Master of Science in Data Science at 
                the University of Arizona with a 4.0 GPA and am currently working as a Data Ops Engineer II at Centauri Health Solutions in Tempe, AZ.
              </p>
              <p>
                I am most interested in teams that sit close to infrastructure and intelligence: data platforms, applied AI, 
                real-time processing, and systems that have to be correct under scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
              {focusAreas.map(({ title, icon: Icon, summary, proof }) => (
                <div key={title} className="bg-white/70 border border-white/60 rounded-2xl p-5 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 font-styrene">{title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">{summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {proof.map((item) => (
                      <span key={item} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">


            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Professional Experience
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              A journey through innovative companies where I've built scalable data solutions
            </p>
          </div>
            <div className="grid gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Company Image with Grey Background */}
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 bg-gray-100">
                          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img 
                              src={exp.image} 
                              alt={exp.company}
                              className={`object-contain rounded-full hover:scale-120 transition-transform duration-300 w-64 h-64 scale-125`}
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h5 className="text-2xl font-bold text-black mb-2 font-styrene group-hover:text-slate-700 transition-colors">
                                {exp.company}
                              </h5>
                              <p className="text-slate-700 font-medium text-lg mb-2 font-styrene">
                                {exp.role}
                              </p>
                            </div>
                            <span className="inline-block bg-white/60 text-slate-800 text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-slate-700 mb-6 leading-relaxed">
                            {exp.details.substring(0, 150)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="text-xs bg-white/60 text-slate-700 px-3 py-1 rounded-full border border-white/40 hover:bg-white/80 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 6 && (
                              <span className="text-xs text-slate-600 px-2 py-1">
                                +{exp.technologies.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Education Section */}
        <div>
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">

            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Academic Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Educational foundation that shaped my analytical thinking and technical expertise
            </p>
          </div>
            <div className="grid gap-8">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedEducation(edu)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Institution Image with Grey Background */}
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 bg-gray-100">
                          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img 
                              src={edu.image} 
                              alt={edu.institution}
                              className="w-28 h-28 object-contain rounded-full hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h5 className="text-2xl font-bold text-black mb-2 font-styrene group-hover:text-slate-700 transition-colors">
                                {edu.institution}
                              </h5>
                              <p className="text-slate-700 font-medium text-lg mb-2 font-styrene">
                                {edu.degree}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="inline-block bg-white/60 text-slate-800 text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap">
                                {edu.period}
                              </span>
                              {edu.gpa && (
                                <span className="inline-block bg-green-50/80 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
                                  GPA: {edu.gpa}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-slate-700 mb-6 leading-relaxed">
                            {edu.details.substring(0, 150)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.slice(0, 6).map((course, courseIndex) => (
                              <span 
                                key={courseIndex} 
                                className="text-xs bg-white/60 text-slate-700 px-3 py-1 rounded-full border border-white/40 hover:bg-white/80 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                            {edu.coursework.length > 6 && (
                              <span className="text-xs text-slate-600 px-2 py-1">
                                +{edu.coursework.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
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
