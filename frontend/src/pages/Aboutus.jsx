import React, { useState, useEffect } from "react";

export default function AboutUs() {
  const [activeTeam, setActiveTeam] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

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

  // Team Data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "With over 15 years in event management, Sarah founded EventEase to revolutionize how people experience events.",
      expertise: ["Strategic Planning", "Client Relations", "Innovation"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Marcus brings artistic vision to every event, ensuring each detail tells a compelling story.",
      expertise: ["Design Strategy", "Brand Development", "Visual Storytelling"]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Emily ensures flawless execution with her meticulous attention to detail and process optimization.",
      expertise: ["Logistics", "Budget Management", "Team Leadership"]
    },
    {
      id: 4,
      name: "James Kim",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "James leads our tech initiatives, creating seamless digital experiences for hybrid and virtual events.",
      expertise: ["Technology Integration", "AV Production", "Digital Platforms"]
    }
  ];

  // Statistics
  const stats = [
    { number: "500+", label: "Events Organized", icon: "🎪" },
    { number: "50+", label: "Countries Served", icon: "🌎" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🛡️" }
  ];

  // Values with images
  const values = [
    {
      icon: "💫",
      title: "Excellence",
      description: "We never settle for mediocre. Every event is an opportunity to create something extraordinary.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Your vision is our mission. We work alongside you as true partners in creativity.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to stay ahead of the curve.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: "❤️",
      title: "Passion",
      description: "We genuinely love what we do, and that energy translates into every event we create.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop&crop=center"
    }
  ];

  // Services with images
  const services = [
    {
      category: "Corporate Events",
      items: ["Conferences", "Product Launches", "Team Building", "Shareholder Meetings"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center"
    },
    {
      category: "Social Events",
      items: ["Weddings", "Birthdays", "Anniversaries", "Graduations"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&crop=center"
    },
    {
      category: "Special Events",
      items: ["Charity Galas", "Award Ceremonies", "Festivals", "Cultural Events"],
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=250&fit=crop&crop=center"
    }
  ];

  // Event gallery images
  const eventGallery = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center"
  ];

  const Timeline = () => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
      
      {[
        { 
          year: "2018", 
          event: "EventEase Founded", 
          description: "Started with a vision to transform event experiences",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=120&fit=crop&crop=center"
        },
        { 
          year: "2019", 
          event: "First Major Conference", 
          description: "Organized 1000+ attendee tech conference",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=120&fit=crop&crop=center"
        },
        { 
          year: "2020", 
          event: "Digital Expansion", 
          description: "Pioneered virtual event solutions during pandemic",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=120&fit=crop&crop=center"
        },
        { 
          year: "2021", 
          event: "International Reach", 
          description: "Expanded services to 20+ countries",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=120&fit=crop&crop=center"
        },
        { 
          year: "2022", 
          event: "Award Recognition", 
          description: "Received Global Event Excellence Award",
          image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=200&h=120&fit=crop&crop=center"
        },
        { 
          year: "2023", 
          event: "AI Integration", 
          description: "Launched AI-powered event planning tools",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=120&fit=crop&crop=center"
        },
        { 
          year: "2024", 
          event: "Sustainability Focus", 
          description: "Committed to carbon-neutral events",
          image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=200&h=120&fit=crop&crop=center"
        }
      ].map((item, index) => (
        <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6'}`}>
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 font-bold text-sm mb-1">{item.year}</div>
              <div className="text-white font-semibold text-xs mb-1">{item.event}</div>
              <div className="text-gray-400 text-xs mb-2">{item.description}</div>
              <ImageWithLoader
                src={item.image}
                alt={item.event}
                className="w-full h-20 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                imageId={`timeline-${index}`}
              />
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full border-2 border-black z-10"></div>
          <div className="w-1/2"></div>
        </div>
      ))}
    </div>
  );

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
            {['🎪', '🎭', '🌟', '✨'][i % 4]}
          </div>
        </div>
      ))}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <CreativeBackground />
      
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="text-4xl mb-3 animate-float">🎪</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-3"></div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              We Create <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Magic</span> Through Events
            </h1>
            
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              At EventEase, we transform visions into unforgettable experiences. 
              With passion, creativity, and precision, we craft moments that last a lifetime.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/20">
            <ImageWithLoader
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop&crop=center"
              alt="EventEase Team in Action"
              className="w-full h-48 md:h-64 object-cover"
              imageId="hero"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Journey</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              From humble beginnings to industry leaders
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Meet Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Team</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              The passionate professionals behind every event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTeam(activeTeam === member.id ? null : member.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <ImageWithLoader
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full border-2 border-purple-500/30 group-hover:border-purple-400 transition-all duration-300"
                      imageId={`team-${member.id}`}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">{member.name}</h3>
                    <p className="text-purple-300 text-xs mb-1">{member.role}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                
                {activeTeam === member.id && (
                  <div className="mt-3 animate-slideIn">
                    <div className="border-t border-gray-700 pt-3">
                      <h4 className="text-white text-xs font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Values</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              The principles that guide every decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-24 mb-3 rounded-lg overflow-hidden">
                  <ImageWithLoader
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    imageId={`value-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-2xl">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{value.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              What We <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Offer</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Comprehensive event solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-32">
                  <ImageWithLoader
                    src={service.image}
                    alt={service.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    imageId={`service-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 text-white font-semibold text-sm">{service.category}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-xs group-hover:text-white transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Work</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              A glimpse of the extraordinary events we've created
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {eventGallery.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <ImageWithLoader
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                  imageId={`gallery-${index}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    👁️
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Find Us & <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Connect</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Visit our studio or get in touch to start planning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map Section */}
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
              <h3 className="text-white font-semibold text-sm mb-3">Our Studio</h3>
              
              {/* Enhanced Map with Image */}
              <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg h-40 mb-3 overflow-hidden">
                <ImageWithLoader
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop&crop=center"
                  alt="EventEase Studio Location"
                  className="w-full h-full object-cover opacity-60"
                  imageId="location"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📍</div>
                    <div className="text-white font-semibold text-xs">EventEase HQ</div>
                    <div className="text-gray-300 text-xs">123 Event Street</div>
                    <div className="text-gray-300 text-xs">New York, NY 10001</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <h4 className="text-purple-300 font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">123 Event Street<br />NY 10001</p>
                </div>
                <div>
                  <h4 className="text-purple-300 font-semibold mb-1">Hours</h4>
                  <p className="text-gray-300">Mon-Fri: 8AM-6PM<br />Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
              <h3 className="text-white font-semibold text-sm mb-4">Get In Touch</h3>
              
              {[
                { icon: "📞", title: "Call Us", details: "+1 (555) 123-4567", desc: "Available 24/7 for events" },
                { icon: "✉️", title: "Email", details: "hello@eventease.com", desc: "Response within 2 hours" },
                { icon: "💬", title: "Live Chat", details: "On website", desc: "Instant support" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 mb-4 group">
                  <div className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-xs">{item.title}</h4>
                    <p className="text-purple-300 text-xs font-medium">{item.details}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden">
            <ImageWithLoader
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=300&fit=crop&crop=center"
              alt="Ready to create magic"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              imageId="cta"
            />
            <div className="relative z-10">
              <h2 className="text-lg font-bold text-white mb-3">
                Ready to Create Something <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Extraordinary?</span>
              </h2>
              
              <p className="text-gray-300 text-sm mb-6">
                Let's transform your vision into an unforgettable experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
                  Start Your Project
                </button>
                <button className="px-6 py-3 bg-transparent border border-purple-500/30 text-purple-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-purple-500/10">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs">
            © 2024 EventEase. Crafting unforgettable experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}