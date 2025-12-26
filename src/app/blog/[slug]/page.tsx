'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetails() {
  const blogPost = {
    title: "The Future of Solar Energy: Trends and Innovations",
    author: "Rajesh Kumar",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Solar Energy",
    image: "/api/placeholder/800/400",
    content: [
      {
        type: "paragraph",
        text: "Solar energy is rapidly evolving, and the future looks brighter than ever. With technological advancements and decreasing costs, solar power is becoming increasingly accessible to households and businesses worldwide. In this article, we'll explore the latest trends and innovations shaping the solar energy landscape."
      },
      {
        type: "heading",
        text: "Emerging Technologies"
      },
      {
        type: "paragraph",
        text: "The solar industry is witnessing remarkable technological breakthroughs. Perovskite solar cells, for instance, promise higher efficiency rates at lower production costs. These next-generation cells can achieve efficiency levels above 30%, compared to traditional silicon cells that typically range between 15-20%."
      },
      {
        type: "paragraph",
        text: "Another exciting development is the integration of artificial intelligence in solar energy systems. AI-powered monitoring and optimization systems can predict weather patterns, adjust energy consumption, and maximize solar panel efficiency in real-time."
      },
      {
        type: "heading",
        text: "Energy Storage Solutions"
      },
      {
        type: "paragraph",
        text: "One of the biggest challenges with solar energy has always been storage. However, recent advancements in battery technology are addressing this issue head-on. Lithium-ion batteries are becoming more affordable, while new technologies like solid-state batteries and flow batteries offer promising alternatives for large-scale energy storage."
      },
      {
        type: "paragraph",
        text: "Home energy storage systems are also becoming increasingly popular. These systems allow homeowners to store excess solar energy generated during the day for use during nighttime or power outages, providing energy independence and peace of mind."
      },
      {
        type: "heading",
        text: "Smart Grid Integration"
      },
      {
        type: "paragraph",
        text: "The integration of solar energy with smart grid technology is revolutionizing how we manage and distribute electricity. Smart grids enable two-way communication between utility companies and consumers, allowing for more efficient energy distribution and better load management."
      },
      {
        type: "paragraph",
        text: "Virtual power plants (VPPs) are another innovative concept gaining traction. VPPs connect multiple distributed energy resources, including solar panels and battery storage systems, to function as a single power plant. This approach enhances grid stability and reduces the need for traditional power plants."
      },
      {
        type: "heading",
        text: "Policy and Market Trends"
      },
      {
        type: "paragraph",
        text: "Government policies and incentives continue to drive solar energy adoption worldwide. Many countries have set ambitious renewable energy targets, with solar power playing a crucial role in achieving these goals. Tax credits, subsidies, and net metering policies make solar installations more financially attractive for consumers."
      },
      {
        type: "paragraph",
        text: "The corporate sector is also embracing solar energy at an unprecedented rate. Companies are increasingly installing solar panels on their facilities to reduce energy costs and meet sustainability goals. This trend is expected to accelerate as more businesses recognize the economic and environmental benefits of solar power."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "The future of solar energy is incredibly promising. With continuous technological innovations, improving energy storage solutions, and supportive policies, solar power is poised to become a dominant energy source in the coming decades. As we move towards a more sustainable future, solar energy will undoubtedly play a central role in meeting our energy needs while protecting our planet."
      }
    ],
    tags: ["Solar Energy", "Renewable Energy", "Technology", "Innovation", "Sustainability"],
    relatedPosts: [
      {
        id: 1,
        title: "Understanding Solar Panel Efficiency",
        author: "Priya Sharma",
        date: "March 10, 2024",
        image: "/api/placeholder/300/200",
        href: "/blog/understanding-solar-panel-efficiency"
      },
      {
        id: 2,
        title: "Solar Energy Storage Solutions",
        author: "Amit Patel",
        date: "March 5, 2024",
        image: "/api/placeholder/300/200",
        href: "/blog/solar-energy-storage-solutions"
      },
      {
        id: 3,
        title: "The Economics of Solar Power",
        author: "Neha Gupta",
        date: "February 28, 2024",
        image: "/api/placeholder/300/200",
        href: "/blog/economics-of-solar-power"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-white hover:text-green-200 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-green-100">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {blogPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {blogPost.readTime}
                </div>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {blogPost.category}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <div className="text-white text-xl font-semibold">
                  Featured Image
                </div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {blogPost.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === 'heading' && (
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {section.text}
                    </h2>
                  )}
                  {section.type === 'paragraph' && (
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {section.text}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-t border-gray-200 pt-8 mt-12"
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share and Like */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <Heart className="w-5 h-5 mr-2" />
                    Like
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Comment
                  </button>
                </div>
                <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Posts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white font-semibold">
                    Post Image
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={post.href}
                    className="text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
