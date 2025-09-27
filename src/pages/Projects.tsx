import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Database, Brain, BarChart3, Zap, TrendingUp, Building2, LineChart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const projects = [
    {
      id: 'youtube-data-pipeline',
      title: "YouTube Data Pipeline",
      description: "Real-time data processing with LDA & BERTopic for YouTube analytics",
      icon: Database,
      category: "Data Engineering", 
      tech: ["Python", "Apache Beam", "BigQuery", "LDA", "BERTopic", "NLP"],
      fullDescription: "Built a comprehensive real-time data pipeline that extracts YouTube video metadata, processes it using Apache Beam, and applies advanced topic modeling techniques including LDA and BERTopic for content analysis and categorization.",
      features: ["Real-time data extraction", "Scalable processing with Apache Beam", "Advanced NLP topic modeling", "BigQuery integration", "Content categorization", "Metadata processing"],
      challenges: "Handling large-scale streaming data while maintaining real-time processing capabilities and ensuring accurate topic classification with complex YouTube metadata.",
      solution: "Implemented a distributed processing architecture using Apache Beam with optimized batch processing and efficient topic modeling algorithms for scalable content analysis.",
      image: "/Real-Time YouTube Data Pipeline.png"
    },
    {
      id: 'real-time-analytics',
      title: "Real-time Analytics Pipeline",
      description: "Real-time Spotify data processing and visualization platform",
      icon: Zap,
      category: "Data Engineering",
      tech: ["Kafka", "Spark", "API", "Real-time Processing", "Music Analytics"],
      fullDescription: "Leveraged the Spotify Web API to extract, process, and warehouse music data for real-time analytics and visualization, providing insights into music trends and user behavior.",
      features: ["Real-time data streaming", "API integration", "Interactive dashboards", "Music analytics", "Trend analysis", "Performance monitoring"],
      challenges: "Managing real-time data streams while providing interactive analytics and maintaining system performance under high-throughput conditions.",
      solution: "Built a streaming architecture using Kafka and Spark Streaming with real-time dashboard updates and efficient data processing pipelines.",
      image: "/Streaming Data Analytics and Visualization.png"
    },
    {
      id: 'ocr2latex',
      title: "RAG-powered OCR2LaTeX",
      description: "AI-driven math & table extraction using OCR and LLaMA models",
      icon: Brain,
      category: "AI",
      tech: ["Python", "Streamlit", "OCR", "Pillow", "LLM", "LLaMA"],
      fullDescription: "Developed a Streamlit application that converts images of formulas and tables into LaTeX code using OCR and a fine-tuned LLaMA model. Integrated Retrieval-Augmented Generation (RAG) to enhance accuracy and contextual understanding.",
      features: ["OCR integration", "LaTeX generation", "Mathematical formula recognition", "Table extraction", "Streamlit interface", "AI-powered conversion"],
      challenges: "Accurately recognizing complex mathematical notation and table structures from images while maintaining proper LaTeX formatting.",
      solution: "Implemented a RAG-powered system combining OCR with AI models specifically trained on mathematical content for high-accuracy conversion.",
      image: "/RAG-powered OCR2LaTeX.png"
    },
    {
      id: 'ecommerce-segmentation',
      title: "E-Commerce Customer Segmentation",
      description: "Customer segmentation and behavior analysis using RFM modeling",
      icon: BarChart3,
      category: "Data Science/ML",
      tech: ["Python", "Clustering", "EDA", "KMeans", "DBSCAN", "RFM Model"],
      fullDescription: "Leveraged transactional data from a UK-based online retailer to perform customer segmentation using data mining techniques. Analyzed purchasing behaviors, including transaction frequency, spending patterns, and product preferences.",
      features: ["Customer segmentation", "Behavioral pattern analysis", "Transaction analysis", "Marketing insights", "Retention modeling", "Revenue optimization"],
      challenges: "Processing large volumes of transactional data while identifying meaningful customer segments for business strategy optimization.",
      solution: "Applied advanced clustering algorithms and statistical analysis techniques to segment customers based on purchasing behavior, frequency, and monetary value.",
      image: "/E-Commerce Customer Segmentation & Behavior Analysis.png"
    },
    {
      id: 'deforestation-analysis',
      title: "Forests in Transition",
      description: "Deforestation & soybean consumption analysis with geospatial visualization",
      icon: BarChart3,
      category: "Data Analytics",
      tech: ["R", "Data Visualization", "Statistical Analysis", "Environmental Data", "Geospatial Analysis"],
      fullDescription: "Analyzed global deforestation trends and soybean consumption's impact on forest conservation efforts. Visualized forest conversion over decades with dynamic choropleth maps and explored soybean consumption in Brazil.",
      features: ["Environmental data analysis", "Geospatial visualization", "Trend analysis", "Statistical modeling", "Conservation insights", "Agricultural impact assessment"],
      challenges: "Integrating diverse environmental datasets while establishing clear correlations between agricultural practices and deforestation rates.",
      solution: "Utilized R for statistical analysis and geospatial mapping to visualize deforestation trends and quantify the relationship between soybean cultivation and forest loss.",
      image: "/Forests in Transition.png"
    },
    {
      id: 'flight-crash-analysis',
      title: "Flight Crash Analysis",
      description: "Aviation safety analysis with interactive visualizations and trend identification",
      icon: BarChart3,
      category: "Data Analytics",
      tech: ["Python", "Data Visualization", "Statistical Analysis", "Safety Analytics", "Aviation Data"],
      fullDescription: "Visualized flight crash data to analyze trends, causes, and safety improvements. Developed interactive plots, including time series animations, radial bar plots, radar plots, heat maps, waffle plots, and density plots.",
      features: ["Aviation safety analysis", "Crash pattern identification", "Statistical visualization", "Risk assessment", "Safety trend analysis", "Cause correlation"],
      challenges: "Processing sensitive aviation data while extracting meaningful insights for safety improvement without compromising data integrity.",
      solution: "Applied statistical analysis and visualization techniques to identify key safety factors and trends, providing actionable insights for aviation safety enhancement.",
      image: "/Flight Crash Analysis.png"
    },
    {
      id: 'realtime-reel-buzz',
      title: "Real-Time Analytics Pipeline (Session-Based Reel Buzz)",
      description: "Meta-inspired real-time 'Reel Buzz' pipeline using Scio (Apache Beam)",
      icon: Zap,
      category: "Data Engineering",
      tech: ["Scala", "Scio", "Apache Beam", "BigQuery", "Pub/Sub", "Dataflow", "Streaming Analytics"],
      fullDescription: "Developed a Meta-inspired real-time 'Reel Buzz' pipeline using Scio (Apache Beam), processing 10K+ mock events/min with state, timers, and event-time logic, and streaming results to BigQuery.",
      features: ["Real-time event processing", "Stateful stream processing", "Event-time logic", "BigQuery integration", "Scalable streaming", "Session-based analytics"],
      challenges: "Processing high-volume real-time events while maintaining state and ensuring accurate event-time processing for social media analytics.",
      solution: "Implemented a robust streaming pipeline using Scio and Apache Beam with state management, timers, and event-time processing to handle 10K+ events per minute.",
      image: "/placeholder.svg"
    },
    {
      id: 'legal-chatbot',
      title: "Legal Chatbot",
      description: "AI-powered legal assistance chatbot for document analysis and consultation",
      icon: Brain,
      category: "AI",
      tech: ["Python", "NLP", "Legal AI", "Document Analysis", "Chatbot", "Legal Consultation"],
      fullDescription: "An AI-powered legal assistance chatbot designed for legal document analysis and consultation. Provides intelligent legal advice, document analysis, and consultation services using advanced NLP techniques and legal domain knowledge.",
      features: ["Legal document analysis", "AI-powered consultation", "Legal advice generation", "Document processing", "Natural language understanding", "Legal domain expertise"],
      challenges: "Providing accurate legal advice while ensuring compliance with legal standards and handling complex legal document analysis.",
      solution: "Developed an AI system with specialized legal domain knowledge and NLP capabilities to provide accurate legal assistance and document analysis.",
      image: "/placeholder.svg"
    },
    {
      id: 'medstruct',
      title: "MedStruct",
      description: "Medical document structuring and analysis system for healthcare data processing",
      icon: Database,
      category: "AI",
      tech: ["Python", "Medical NLP", "Document Processing", "Healthcare Data", "Medical Text Analysis"],
      fullDescription: "A medical document structuring and analysis system designed for healthcare data processing. Transforms unstructured medical documents into structured data for better analysis and insights in healthcare applications.",
      features: ["Medical document structuring", "Healthcare data processing", "Medical text analysis", "Document transformation", "Healthcare insights", "Medical NLP"],
      challenges: "Processing complex medical documents and extracting structured information while maintaining medical accuracy and compliance.",
      solution: "Implemented specialized medical NLP techniques and healthcare domain knowledge to accurately structure and analyze medical documents.",
      image: "/placeholder.svg"
    },
    {
      id: 'medicare-fraud-detection',
      title: "Medicare Fraud Detection",
      description: "Machine learning system for detecting fraudulent Medicare claims using advanced analytics",
      icon: BarChart3,
      category: "Data Science/ML",
      tech: ["Python", "Machine Learning", "Fraud Detection", "Healthcare Analytics", "Pattern Recognition", "Statistical Analysis"],
      fullDescription: "A machine learning system for detecting fraudulent Medicare claims using advanced analytics and pattern recognition. Analyzes healthcare claims data to identify suspicious patterns and potential fraud cases.",
      features: ["Fraud detection", "Pattern recognition", "Healthcare analytics", "Statistical analysis", "Risk assessment", "Claims analysis"],
      challenges: "Identifying fraudulent patterns in large-scale healthcare claims data while minimizing false positives and ensuring accuracy.",
      solution: "Developed advanced machine learning models with pattern recognition capabilities to accurately detect fraudulent Medicare claims and suspicious activities.",
      image: "/placeholder.svg"
    },
    {
      id: 'amazon-consumer-analysis',
      title: "Amazon Consumer Behavior Analysis",
      description: "Comprehensive analysis of consumer behavior using Amazon Consumer Behaviour Dataset",
      icon: BarChart3,
      category: "Data Analytics",
      tech: ["Data analysis", "statistical analysis", "data visualization", "R", "Quarto", "dlookr"],
      fullDescription: "Conducted a comprehensive analysis of consumer behavior using the Amazon Consumer Behavior Dataset from Kaggle. Analyzed customer interactions, browsing patterns, and reviews to uncover insights that can optimize business strategies and enhance customer experiences.",
      features: ["Consumer behavior analysis", "Statistical modeling", "Data visualization", "Customer insights", "Business optimization", "Pattern recognition"],
      challenges: "Processing large-scale consumer data while identifying actionable insights for business strategy and customer experience improvement.",
      solution: "Applied advanced statistical analysis and visualization techniques using R and Quarto to uncover meaningful patterns in Amazon consumer behavior data.",
      image: "/Amazon Consumer Behavior.png"
    },
    {
      id: 'crime-data-analysis',
      title: "Crime Data Analysis",
      description: "Predictive modeling for U.S. gun violence pattern analysis",
      icon: BarChart3,
      category: "Data Analytics",
      tech: ["Python", "ML", "Spark", "Statistical Analysis", "Pattern Recognition"],
      fullDescription: "Analyzed large-scale crime datasets to identify patterns in gun violence across the United States, developing predictive models to forecast crime hotspots and trends using advanced statistical methods.",
      features: ["Big data processing", "Predictive modeling", "Geographic analysis", "Pattern recognition", "Statistical forecasting", "Crime hotspot identification"],
      challenges: "Processing massive datasets with complex relationships while ensuring model accuracy and interpretability for law enforcement applications.",
      solution: "Utilized Apache Spark for distributed processing and ensemble methods for robust predictive modeling with comprehensive feature engineering and geographic clustering.",
      image: "/Large-Scale Crime Data Analysis and Predictive Modeling.png"
    },
    {
      id: 'nyc-transportation',
      title: "NYC Transportation Recovery",
      description: "Analyzing transportation data for post-pandemic recovery insights",
      icon: LineChart,
      category: "Data Analytics",
      tech: ["Tableau", "Data Visualization", "Transportation Data", "Time Series Analysis"],
      fullDescription: "Analyzed post-pandemic recovery trends in MTA ridership, North America's largest public transportation network, after significant disruptions caused by COVID-19.",
      features: ["Transportation analytics", "Recovery trend analysis", "Ridership visualization", "Service optimization", "Resource planning", "Performance metrics"],
      challenges: "Analyzing complex transportation data while accounting for pandemic-related disruptions and changing commuter patterns.",
      solution: "Created comprehensive Tableau dashboards to visualize ridership recovery patterns and provide actionable insights for transportation planning and resource allocation.",
      image: "/Analyzing NYC Transportation Recovery.png"
    },
    {
      id: 'testcase-ai',
      title: "TestCase AI",
      description: "AI-powered healthcare test case generation using LangGraph and Google Gemini",
      icon: Brain,
      category: "AI",
      tech: ["Python", "LangGraph", "Google Gemini", "Healthcare Compliance", "FDA", "HIPAA"],
      fullDescription: "An AI-powered system that automatically converts healthcare software requirements into compliant, traceable test cases using LangGraph and Google Gemini models.",
      features: ["AI-powered requirement extraction", "Compliance mapping", "Comprehensive test generation", "Quality validation", "Session memory", "LangGraph workflow"],
      challenges: "Converting complex healthcare requirements into compliant test cases while ensuring traceability and meeting regulatory standards.",
      solution: "Implemented a multi-step LangGraph workflow with conditional routing, error handling, and specialized healthcare domain knowledge.",
      image: "/placeholder.svg"
    },
    {
      id: 'image-recognition',
      title: "Image Recognition",
      description: "Multi-label face attribute prediction using deep learning",
      icon: Brain,
      category: "AI",
      tech: ["TensorFlow", "Computer Vision", "Deep Learning", "CNN", "Multi-label Classification"],
      fullDescription: "Implemented a deep learning project for face attribute prediction using convolutional neural networks with multi-label classification capabilities for accurate facial feature detection.",
      features: ["Multi-label classification", "CNN architecture", "Face attribute detection", "High accuracy prediction", "Feature extraction", "Model optimization"],
      challenges: "Achieving high accuracy in multi-label classification while managing computational complexity and preventing overfitting in facial recognition tasks.",
      solution: "Developed a custom CNN architecture with attention mechanisms and data augmentation techniques for improved performance and robust feature learning.",
      image: "/Multi-Label Image Recognition and Attribute Prediction.png"
    },
    {
      id: 'ai-interview-coach',
      title: "AI Interview Coach",
      description: "Voice-enabled interview preparation platform with AI feedback",
      icon: Brain,
      category: "AI",
      tech: ["React", "FastAPI", "Voice Recognition", "AI", "Python", "NLP"],
      fullDescription: "Built an intelligent interview preparation platform that uses voice recognition and AI to simulate realistic interview scenarios, providing personalized feedback and coaching.",
      features: ["Voice recognition", "AI-powered feedback", "Interview simulation", "Performance analytics", "Personalized coaching", "Real-time interaction"],
      challenges: "Creating natural voice interactions while providing meaningful feedback on interview performance and communication skills.",
      solution: "Integrated advanced NLP models with voice recognition technology to create an interactive coaching experience with real-time feedback mechanisms.",
      image: "/Al Interview Coach.png"
    },
    {
      id: 'social-media-disaster',
      title: "Social Media Disaster Classification",
      description: "NLP model for classifying disaster-related social media posts",
      icon: Brain,
      category: "AI",
      tech: ["Python", "NLP", "Machine Learning", "Text Classification", "Social Media Analytics"],
      fullDescription: "Created an intelligent system to automatically classify and analyze disaster-related content from social media platforms, enabling rapid response and information gathering during emergency situations.",
      features: ["Text classification", "Disaster detection", "Social media monitoring", "Emergency response", "Sentiment analysis", "Real-time processing"],
      challenges: "Accurately classifying diverse social media content while handling informal language, slang, and varying disaster contexts.",
      solution: "Implemented advanced NLP models with custom preprocessing pipelines to handle social media text variations and achieve high classification accuracy.",
      image: "/Social Media Disaster Classification.png"
    },
    {
      id: 'sales-forecasting',
      title: "Store Sales Forecasting",
      description: "Time series forecasting for retail store sales prediction",
      icon: TrendingUp,
      category: "Data Science/ML",
      tech: ["Python", "Time Series", "Regression", "Decision Tree", "Forecasting"],
      fullDescription: "Developed a time series forecasting model to predict store sales using historical data. Applied advanced feature engineering and implemented multiple regression techniques.",
      features: ["Time series analysis", "Sales forecasting", "Statistical modeling", "Trend analysis", "Seasonal patterns", "Business intelligence"],
      challenges: "Accurately forecasting sales while accounting for seasonal variations, trends, and external factors affecting retail performance.",
      solution: "Combined multiple regression techniques with comprehensive feature engineering to create robust forecasting models for retail sales prediction.",
      image: "/Store Sales Time Series Forecasting.png"
    },
    {
      id: 'house-price-prediction',
      title: "House Price Prediction",
      description: "Advanced regression modeling for real estate price prediction",
      icon: Building2,
      category: "Data Science/ML",
      tech: ["Machine Learning", "Ridge Regression", "LightGBM", "Feature Engineering", "PCA"],
      fullDescription: "Developed a machine learning pipeline for house price prediction using Ridge Regression, LightGBM, and model blending to enhance accuracy.",
      features: ["Advanced regression modeling", "Feature engineering", "Model blending", "Hyperparameter optimization", "Price prediction", "Real estate analytics"],
      challenges: "Handling complex real estate data with multiple features while ensuring model accuracy and preventing overfitting.",
      solution: "Implemented ensemble methods combining Ridge Regression and LightGBM with sophisticated feature engineering techniques for optimal price prediction accuracy.",
      image: "/Intelligent House Price Prediction.png"
    },
    {
      id: 'ecommerce-behavior',
      title: "E-Commerce Customer Behavior",
      description: "Customer segmentation and purchase behavior analysis",
      icon: BarChart3,
      category: "Data Science/ML",
      tech: ["Python", "Clustering", "ML", "Customer Analytics", "Segmentation"],
      fullDescription: "Analyzed customer behavior patterns in e-commerce platforms using advanced segmentation techniques and predictive modeling to optimize marketing strategies.",
      features: ["Customer segmentation", "Behavior analysis", "Purchase prediction", "Churn modeling", "RFM analysis", "Marketing optimization"],
      challenges: "Identifying meaningful customer segments while handling diverse purchase patterns and seasonal variations.",
      solution: "Applied clustering algorithms and predictive models with comprehensive feature engineering for actionable customer insights.",
      image: "/E-Commerce Customer Segmentation & Behavior Analysis.png"
    },
    {
      id: 'purchase-prediction',
      title: "E-Commerce Purchase Prediction",
      description: "Predictive modeling for repeat purchases using machine learning",
      icon: BarChart3,
      category: "Data Science/ML",
      tech: ["Python", "XGBoost", "LightGBM", "Scikit-Learn", "PyTorch"],
      fullDescription: "Developed a predictive solution for repeat purchases in the Instacart Market Basket Analysis, leveraging ensemble methods to predict reordered items.",
      features: ["Machine learning pipeline", "Purchase prediction", "Recommendation system", "Feature engineering", "Model optimization", "Behavioral analysis"],
      challenges: "Processing large-scale transactional data while building accurate predictive models for complex customer purchasing patterns.",
      solution: "Utilized ensemble methods combining XGBoost and LightGBM with advanced feature engineering to create robust predictive models.",
      image: "/E-Commerce Purchase Behavior Prediction.png"
    }
  ];

  const categories = ['All', 'Data Engineering', 'Data Science/ML', 'AI', 'Data Analytics'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialIsland />
      
      <main className="pt-24 pb-20 px-2 md:px-6 relative">
        <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-4 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
          <div className="mb-8">
            <Button
              onClick={handleBackClick}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-gray-50 text-black hover:text-gray-600 bg-white/20 backdrop-blur-md"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                All Projects
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              A comprehensive collection of data engineering, machine learning, and analytics projects
            </p>
          </div>

          {/* Category Filter Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2 font-styrene">
                Filter by Category
              </h2>
              <p className="text-slate-600">
                Explore projects by their domain and technology focus
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm min-w-[140px] ${
                    selectedCategory === category
                      ? 'bg-slate-900 text-white shadow-xl scale-105 border-2 border-slate-900'
                      : 'bg-white/80 text-slate-700 hover:bg-white border-2 border-white/60 hover:border-slate-300 hover:shadow-lg hover:scale-102'
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="ml-2 text-xs opacity-75">
                      ({filteredProjects.length})
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Active filter indicator */}
            {selectedCategory !== 'All' && (
              <div className="text-center mt-4">
                <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  Showing {filteredProjects.length} {selectedCategory} projects
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    ✕
                  </button>
                </span>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  className="block cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group-hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 cursor-pointer h-full bg-white/70 backdrop-blur-md border border-white/50">
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50/90 to-slate-100/90 relative overflow-hidden flex items-center justify-center p-6">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      )}
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg mb-3 border border-white/60">
                          <IconComponent size={24} className="text-slate-700" />
                        </div>
                        <div className="text-center">
                          <span className="inline-block px-3 py-1 bg-white/70 text-slate-600 text-xs rounded-full font-medium border border-white/50">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 pr-2 font-styrene">
                          {project.title}
                        </h3>
                        <ArrowRight
                          size={18}
                          className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                        />
                      </div>
                      <p className="text-slate-600 mb-3 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/80 text-slate-700 text-xs rounded-full font-medium border border-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-xs rounded-full font-medium border border-blue-200/50">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Projects;