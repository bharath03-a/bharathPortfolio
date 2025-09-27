import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BlogModal from '@/components/BlogModal';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  const blogPosts = [
    {
      id: 'star-schema-data-warehousing',
      title: 'Data Engineering Fundamentals: Designing a STAR Schema',
      excerpt: 'What a STAR schema is, when to use it, and practical modeling tips with examples.',
      date: '2025-09-23',
      readTime: '7 min read',
      content: `A STAR schema is a dimensional modeling pattern used in analytics systems to make querying fast, intuitive, and scalable. It consists of one central fact table (events, transactions, measurements) connected to multiple dimension tables (who, what, when, where, how). The "star" shape comes from the fact table in the middle radiating foreign keys to surrounding dimensions.

Why STAR over 3NF for analytics?
- Query simplicity: Analysts can write simple joins for common questions (sales by product by month).
- Performance: Narrow fact tables with surrogate keys compress well and scan quickly in columnar warehouses (BigQuery, Snowflake, Redshift).
- Governance: Dimensions centralize business definitions (e.g., what is a customer?).

Core constructs:
- Fact table: Grain must be explicit (e.g., one row per order line). Contains measures (amount, quantity) and FKs to dimensions.
- Dimensions: Descriptive attributes used to slice/dice facts (product_category, region, signup_channel). Add surrogate keys and support slowly changing dimensions (SCD Type 2) when history matters.
- Date/Time dimension: Precompute calendars (fiscal periods, holidays, week of year) to simplify time-series queries.

Design checklist:
1) Define the business process and the atomic grain first.
2) Identify measures and required dimensions; avoid overloading measures into dimensions.
3) Use integer surrogate keys; keep fact columns skinny and additive where possible.
4) Model SCD2 on critical entities (customer, product) using effective_from/effective_to ranges and is_current flag.
5) Create conformed dimensions shared across stars to enable cross-domain analysis.

Example: E‑commerce Orders Star
- Fact: order_line_fact (grain: one row per order line)
  - Keys: date_key, customer_key, product_key, store_key
  - Measures: line_amount, quantity, discount_amount
- Dimensions: dim_date, dim_customer (SCD2), dim_product (SCD2), dim_store

SQL sketch for a fact load (warehouse syntax):
SELECT
  d.date_key,
  c.customer_key,
  p.product_key,
  s.store_key,
  oi.quantity,
  oi.extended_amount AS line_amount,
  oi.discount_amount
FROM staging.order_items oi
JOIN dim_date d ON d.date = CAST(oi.order_date AS DATE)
JOIN dim_customer c ON c.customer_id = oi.customer_id AND c.is_current = TRUE
JOIN dim_product p ON p.product_id = oi.product_id AND p.is_current = TRUE
JOIN dim_store s ON s.store_id = oi.store_id; 

When not to use STAR:
- Highly transactional OLTP systems.
- Wide, sparse attributes that change daily without analytical need.

Takeaway: STAR schemas remain the most pragmatic shape for BI—optimize for clarity, stable dimensions, and consistent grain.`,
      tags: ['Data Engineering', 'Dimensional Modeling', 'STAR Schema']
    },
    {
      id: 'data-engineering-trends',
      title: 'Future of Data Engineering',
      excerpt: 'Exploring emerging trends in data engineering and what they mean for practitioners.',
      date: '2024-03-15',
      readTime: '5 min read',
      content: 'Data engineering is rapidly evolving with new technologies and methodologies emerging constantly. In this comprehensive analysis, we explore the key trends shaping the future of data engineering, including real-time processing, cloud-native architectures, and the integration of AI/ML workflows into data pipelines.',
      tags: ['Data Engineering', 'Technology Trends', 'Future']
    },
    {
      id: 'machine-learning-production',
      title: 'ML Models in Production',
      excerpt: 'Best practices for deploying and maintaining machine learning models at scale.',
      date: '2024-03-10',
      readTime: '8 min read',
      content: 'Deploying machine learning models to production environments presents unique challenges that differ significantly from traditional software deployment. This article covers best practices for model versioning, monitoring, A/B testing, and maintaining model performance over time.',
      tags: ['Machine Learning', 'Production', 'MLOps']
    },
    {
      id: 'cloud-data-architectures',
      title: 'Modern Cloud Data Architectures',
      excerpt: 'Building scalable data solutions in the cloud era.',
      date: '2024-03-05',
      readTime: '6 min read',
      content: 'Cloud computing has fundamentally changed how we design and implement data architectures. This post explores modern patterns for building scalable, cost-effective data solutions using cloud-native services and serverless technologies.',
      tags: ['Cloud Computing', 'Data Architecture', 'Scalability']
    }
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
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
                Blog
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Thoughts on data science and engineering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/70 backdrop-blur-md border border-white/50 group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleBlogClick(post)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 pr-2 font-styrene">
                      {post.title}
                    </h2>
                    <ArrowRight
                      size={18}
                      className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    />
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/80 text-slate-700 text-xs rounded-full font-medium border border-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-xs rounded-full font-medium border border-blue-200/50">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {selectedBlog && (
        <BlogModal 
          blog={selectedBlog} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Blog;
