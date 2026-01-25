import React, { useState, useEffect } from "react";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Add custom animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes shimmer {
        0% { background-position: -468px 0; }
        100% { background-position: 468px 0; }
      }
    `;
    document.head.appendChild(style);

    // Set featured post
    setFeaturedPost(blogPosts[0]);
  }, []);

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  const ImageWithLoader = ({ src, alt, className, imageId, ...props }) => {
    const isLoaded = loadedImages.has(imageId);

    return (
      <div className="relative">
        {!isLoaded && (
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-shimmer bg-[length:468px_100%] ${className}`}
            style={{ animation: 'shimmer 1.5s infinite' }}
          />
        )}
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => handleImageLoad(imageId)}
          loading="lazy"
          {...props}
        />
      </div>
    );
  };

  // Blog Categories
  const categories = [
    { id: "all", name: "All Posts", count: 18 },
    { id: "planning", name: "Event Planning", count: 6 },
    { id: "trends", name: "Industry Trends", count: 5 },
    { id: "tips", name: "Expert Tips", count: 4 },
    { id: "design", name: "Event Design", count: 3 }
  ];

  // Blog Posts Data - Expanded with more posts for each category
  const blogPosts = [
    // Featured Post - Trends
    {
      id: 1,
      title: "The Future of Hybrid Events: Blending Physical and Digital Experiences",
      excerpt: "Explore how hybrid events are revolutionizing the industry by combining in-person engagement with digital accessibility.",
      content: "Hybrid events represent the next evolution in event planning, offering the best of both physical and virtual worlds...",
      category: "trends",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
      tags: ["Hybrid Events", "Technology", "Innovation"],
      featured: true
    },

    // Planning Category Posts
    {
      id: 2,
      title: "10 Essential Tips for Stress-Free Wedding Planning",
      excerpt: "Discover proven strategies to make your wedding planning journey smooth and enjoyable.",
      content: "Wedding planning can be overwhelming, but with the right approach, it can be an exciting and memorable experience...",
      category: "planning",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center",
      tags: ["Wedding", "Planning", "Tips"],
      featured: false
    },
    {
      id: 3,
      title: "Sustainable Event Planning: Reducing Your Carbon Footprint",
      excerpt: "Learn how to create memorable events while minimizing environmental impact through sustainable practices.",
      content: "Sustainability is no longer optional in event planning - it's a necessity. Discover practical ways to reduce waste...",
      category: "planning",
      author: "Dr. Emily Watson",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop&crop=center",
      tags: ["Sustainability", "Eco-friendly", "Planning"],
      featured: false
    },
    {
      id: 4,
      title: "Corporate Event Budgeting: Maximizing Impact Without Breaking the Bank",
      excerpt: "Smart budgeting strategies that deliver exceptional corporate events within your financial constraints.",
      content: "Corporate events don't have to be expensive to be effective. Learn how to allocate resources wisely...",
      category: "planning",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-02",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      tags: ["Corporate", "Budgeting", "Planning"],
      featured: false
    },
    {
      id: 5,
      title: "Crisis Management for Event Planners: Preparing for the Unexpected",
      excerpt: "Essential strategies to handle emergencies and ensure event success under any circumstances.",
      content: "From weather disruptions to technical failures, learn how to create robust contingency plans...",
      category: "planning",
      author: "Dr. Emily Watson",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-20",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      tags: ["Crisis Management", "Planning", "Risk"],
      featured: false
    },
    {
      id: 6,
      title: "Venue Selection Masterclass: Finding the Perfect Space for Your Event",
      excerpt: "Comprehensive guide to evaluating and selecting venues that align with your event vision and budget.",
      content: "The right venue can make or break your event. Discover key factors to consider when choosing your space...",
      category: "planning",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-15",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&crop=center",
      tags: ["Venue", "Planning", "Location"],
      featured: false
    },

    // Trends Category Posts
    {
      id: 7,
      title: "AI in Event Management: How Artificial Intelligence is Transforming the Industry",
      excerpt: "Exploring the impact of AI on event planning, personalization, and attendee experiences.",
      content: "Artificial intelligence is revolutionizing how we plan and execute events, from chatbots to predictive analytics...",
      category: "trends",
      author: "James Kim",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
      tags: ["AI", "Technology", "Innovation"],
      featured: false
    },
    {
      id: 8,
      title: "The Rise of Micro-Events: Intimate Gatherings in a Post-Pandemic World",
      excerpt: "Why smaller, more focused events are becoming the new standard for meaningful connections.",
      content: "Micro-events offer deeper engagement and more personalized experiences in today's event landscape...",
      category: "trends",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop&crop=center",
      tags: ["Micro-Events", "Trends", "Networking"],
      featured: false
    },
    {
      id: 9,
      title: "Virtual Reality Events: Creating Immersive Digital Experiences",
      excerpt: "How VR technology is pushing the boundaries of what's possible in virtual event experiences.",
      content: "Virtual reality is transforming online events from passive viewing to active participation...",
      category: "trends",
      author: "James Kim",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-22",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
      tags: ["VR", "Technology", "Virtual Events"],
      featured: false
    },
    {
      id: 10,
      title: "Sustainable Events: The Growing Demand for Eco-Conscious Gatherings",
      excerpt: "Understanding the shift towards environmentally responsible event practices and attendee expectations.",
      content: "Today's event attendees are increasingly conscious of environmental impact and sustainability...",
      category: "trends",
      author: "Dr. Emily Watson",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-18",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop&crop=center",
      tags: ["Sustainability", "Trends", "Eco-friendly"],
      featured: false
    },

    // Tips Category Posts
    {
      id: 11,
      title: "The Power of Storytelling in Event Marketing",
      excerpt: "How compelling narratives can elevate your event marketing and drive engagement.",
      content: "In a world of information overload, storytelling cuts through the noise and creates meaningful connections...",
      category: "tips",
      author: "James Kim",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      tags: ["Marketing", "Storytelling", "Engagement"],
      featured: false
    },
    {
      id: 12,
      title: "Maximizing Event ROI: Strategies for Measuring Success",
      excerpt: "Practical approaches to track and demonstrate the return on investment for your events.",
      content: "Measuring event success goes beyond attendance numbers. Learn key metrics that matter...",
      category: "tips",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-25",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      tags: ["ROI", "Metrics", "Analytics"],
      featured: false
    },
    {
      id: 13,
      title: "Networking Strategies That Actually Work at Events",
      excerpt: "Proven techniques to make meaningful connections and build valuable relationships at any gathering.",
      content: "Effective networking is a skill that can be learned and mastered with the right strategies...",
      category: "tips",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      tags: ["Networking", "Tips", "Relationships"],
      featured: false
    },
    {
      id: 14,
      title: "Event Technology Stack: Essential Tools for Modern Planners",
      excerpt: "Building the perfect technology toolkit to streamline your event planning process.",
      content: "The right technology can transform your event planning workflow and enhance attendee experience...",
      category: "tips",
      author: "James Kim",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-08",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
      tags: ["Technology", "Tools", "Productivity"],
      featured: false
    },

    // Design Category Posts
    {
      id: 15,
      title: "The Psychology of Event Design: Creating Memorable Experiences",
      excerpt: "Understand how psychological principles can transform your event design and attendee engagement.",
      content: "Great event design goes beyond aesthetics - it's about creating emotional connections and memorable experiences...",
      category: "design",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center",
      tags: ["Design", "Psychology", "Experience"],
      featured: false
    },
    {
      id: 16,
      title: "Color Theory in Event Design: Setting the Right Mood",
      excerpt: "How strategic color choices can influence attendee emotions and event atmosphere.",
      content: "Colors have a profound psychological impact that can enhance or detract from your event experience...",
      category: "design",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-30",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center",
      tags: ["Design", "Color Theory", "Atmosphere"],
      featured: false
    },
    {
      id: 17,
      title: "Lighting Design: Transforming Spaces with Strategic Illumination",
      excerpt: "Master the art of lighting to create ambiance, highlight features, and guide attendee flow.",
      content: "Lighting is one of the most powerful yet often overlooked elements in event design...",
      category: "design",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-25",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center",
      tags: ["Design", "Lighting", "Ambiance"],
      featured: false
    },
    {
      id: 18,
      title: "Spatial Design: Creating Flow and Function in Event Layouts",
      excerpt: "Optimizing space utilization to enhance attendee experience and event functionality.",
      content: "Effective spatial design considers both aesthetics and practical movement through your event space...",
      category: "design",
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-20",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center",
      tags: ["Design", "Layout", "Space Planning"],
      featured: false
    }
  ];

  // Popular Tags
  const popularTags = [
    "Event Planning", "Wedding", "Corporate", "Technology", "Sustainability",
    "Design", "Marketing", "Tips", "Trends", "Innovation", "Networking",
    "ROI", "Virtual Events", "AI", "VR", "Budgeting", "Venue Selection"
  ];

  // Filtered posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const CreativeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      {/* Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        >
          <div className="text-xl opacity-20">
            {['📝', '✍️', '🌟', '✨'][i % 4]}
          </div>
        </div>
      ))}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <CreativeBackground />
      
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="text-4xl mb-3 animate-float">📝</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-3"></div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Event <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Insights</span>
            </h1>
            
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Expert tips, industry trends, and creative inspiration for unforgettable events
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 pl-10"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 overflow-hidden group hover:transform hover:scale-105 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative rounded-xl overflow-hidden h-48 lg:h-64">
                  <ImageWithLoader
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    imageId={`featured-${featuredPost.id}`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-purple-300 text-xs font-semibold capitalize">{featuredPost.category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-xs">{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-lg font-bold text-white mb-3 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ImageWithLoader
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-8 h-8 rounded-full"
                        imageId={`author-${featuredPost.id}`}
                      />
                      <div>
                        <p className="text-white text-xs font-semibold">{featuredPost.author}</p>
                        <p className="text-gray-400 text-xs">{formatDate(featuredPost.date)}</p>
                      </div>
                    </div>
                    
                    <button className="text-purple-300 text-xs font-semibold hover:text-purple-200 transition-colors duration-300">
                      Read Article →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-white font-semibold text-sm mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between text-xs p-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-black/40 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-white font-semibold text-sm mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:scale-105"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-white font-semibold text-sm mb-3">Stay Updated</h3>
                <p className="text-gray-400 text-xs mb-3">
                  Get the latest event insights delivered to your inbox
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white text-xs placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300"
                  />
                  <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-lg">
                  {selectedCategory === "all" ? "Latest Articles" : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-400 text-xs">
                  {filteredPosts.length} articles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-40">
                      <ImageWithLoader
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        imageId={`post-${post.id}`}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full capitalize">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                      </div>
                      
                      <h3 className="text-white font-semibold text-sm mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs mb-4 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <ImageWithLoader
                            src={post.authorImage}
                            alt={post.author}
                            className="w-6 h-6 rounded-full"
                            imageId={`author-sm-${post.id}`}
                          />
                          <span className="text-white text-xs">{post.author}</span>
                        </div>
                        
                        <button className="text-purple-300 text-xs font-semibold hover:text-purple-200 transition-colors duration-300">
                          Read →
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="text-gray-500 text-xs hover:text-purple-300 transition-colors duration-300 cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-8">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
                    Load More Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
            <h2 className="text-lg font-bold text-white mb-3">
              Ready to <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Share Your Story?</span>
            </h2>
            
            <p className="text-gray-300 text-sm mb-6">
              Join our community of event professionals and share your insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
                Write for Us
              </button>
              <button className="px-6 py-3 bg-transparent border border-purple-500/30 text-purple-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-purple-500/10">
                Browse All Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs">
            © 2024 EventEase Blog. Sharing knowledge, inspiring events.
          </p>
        </div>
      </footer>
    </div>
  );
}