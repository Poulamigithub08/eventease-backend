import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rotatingTexts = [
    "Unforgettable Events",
    "Memorable Moments", 
    "Extraordinary Experiences",
    "Perfect Celebrations"
  ];

  // Sample upcoming events data with countdowns
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      date: "2024-03-15T09:00:00",
      venue: "Convention Center",
      attendees: 250,
      category: "conference"
    },
    {
      id: 2,
      title: "Summer Music Festival",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      date: "2024-06-20T14:00:00",
      venue: "City Park Amphitheater",
      attendees: 5000,
      category: "festival"
    },
    {
      id: 3,
      title: "Art & Design Expo",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=300&fit=crop",
      date: "2024-04-10T10:00:00",
      venue: "Modern Art Museum",
      attendees: 800,
      category: "exhibition"
    },
    {
      id: 4,
      title: "Business Leadership Conference",
      image: "https://images.unsplash.com/photo-1551836026-d5c2e0c49b13?w=400&h=300&fit=crop",
      date: "2024-05-05T08:00:00",
      venue: "Grand Hotel Ballroom",
      attendees: 300,
      category: "conference"
    },
    {
      id: 5,
      title: "Food & Wine Festival",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      date: "2024-07-12T12:00:00",
      venue: "Downtown Square",
      attendees: 2000,
      category: "festival"
    }
  ];

  // Sample events for brief section
  const featuredEvents = [
    {
      id: 1,
      title: "Corporate Events",
      description: "Professional gatherings that drive business growth",
      icon: "🏢",
      tags: ["Networking", "Conferences", "Seminars"]
    },
    {
      id: 2,
      title: "Wedding Celebrations",
      description: "Unforgettable moments for your special day",
      icon: "💍",
      tags: ["Traditional", "Modern", "Destination"]
    },
    {
      id: 3,
      title: "Music Festivals",
      description: "Epic celebrations of sound and culture",
      icon: "🎵",
      tags: ["EDM", "Rock", "Jazz", "Hip-Hop"]
    }
  ];

  // About us brief
  const aboutBrief = {
    title: "About EventEase",
    description: "We transform visions into unforgettable experiences. With years of expertise in event management, we create moments that last forever.",
    features: ["500+ Events", "50+ Partners", "98% Satisfaction"],
    icon: "🎯"
  };

  // Services brief
  const servicesBrief = [
    {
      icon: "📋",
      title: "Event Planning",
      description: "End-to-end event coordination and management"
    },
    {
      icon: "🏟️",
      title: "Venue Selection",
      description: "Perfect locations for every occasion"
    },
    {
      icon: "🎪",
      title: "Vendor Management",
      description: "Trusted partners for seamless execution"
    }
  ];

  // Popular event shoutouts
  const popularEvents = [
    {
      id: 1,
      title: "Sunset Beach Party",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      likes: 1247,
      date: "2024-08-15"
    },
    {
      id: 2,
      title: "Winter Gala Night",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop",
      likes: 892,
      date: "2024-12-20"
    },
    {
      id: 3,
      title: "Spring Art Fair",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      likes: 1563,
      date: "2024-04-05"
    }
  ];

  // Latest news
  const latestNews = [
    {
      id: 1,
      title: "Event Trends 2024",
      excerpt: "Discover the latest trends shaping the event industry this year",
      date: "2024-01-15",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Sustainable Events Guide",
      excerpt: "How to create eco-friendly and sustainable events",
      date: "2024-01-10",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Virtual Events Mastery",
      excerpt: "Mastering the art of engaging virtual experiences",
      date: "2024-01-05",
      readTime: "6 min"
    }
  ];

  // Team & Sponsors
  const teamSponsors = {
    teams: [
      { name: "Event Planners", count: "15+" },
      { name: "Coordinators", count: "25+" },
      { name: "Designers", count: "10+" }
    ],
    sponsors: ["TechCorp", "Global Bank", "Innovate Inc", "Prime Media"]
  };

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/events", label: "EVENTS" },
    { to: "/about", label: "ABOUT US" },
    { to: "/services", label: "SERVICES" },
    { to: "/gallery", label: "GALLERY" },
    { to: "/blogs", label: "BLOGS" },
    { to: "/contacts", label: "CONTACTS" },
    { to: "/my-events", label: "MY EVENTS" }
  ];

  // Hero Section Effects
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    });
  };

  // Countdown component for each event
  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
      const difference = new Date(targetDate) - new Date();
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    });

    return (
      <div className="flex space-x-1 justify-center">
        {timeLeft.days > 0 && (
          <div className="text-center">
            <div className="bg-red-500/20 text-red-300 px-1 py-0.5 rounded text-xs font-bold">
              {timeLeft.days}
            </div>
            <div className="text-gray-400 text-xs mt-0.5">D</div>
          </div>
        )}
        <div className="text-center">
          <div className="bg-red-500/20 text-red-300 px-1 py-0.5 rounded text-xs font-bold">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-gray-400 text-xs mt-0.5">H</div>
        </div>
        <div className="text-center">
          <div className="bg-red-500/20 text-red-300 px-1 py-0.5 rounded text-xs font-bold">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-gray-400 text-xs mt-0.5">M</div>
        </div>
        <div className="text-center">
          <div className="bg-red-500/20 text-red-300 px-1 py-0.5 rounded text-xs font-bold">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-gray-400 text-xs mt-0.5">S</div>
        </div>
      </div>
    );
  };

  const scrollEvents = (direction) => {
    const container = document.getElementById('events-scroll');
    const scrollAmount = 300;
    const newScroll = direction === 'left' 
      ? Math.max(0, currentScroll - scrollAmount)
      : currentScroll + scrollAmount;
    
    setCurrentScroll(newScroll);
    container.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-400/30 to-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-16 -right-16 w-60 h-60 bg-red-500/8 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-28 left-1/4 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/3 -left-16 w-52 h-52 bg-yellow-500/4 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-grid-flow"></div>
        </div>
      </div>

      {/* Hero Section - Your Provided Code */}
      <div 
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative"
        onMouseMove={handleMouseMove}
      >
        {/* Enhanced Background with Interactive Elements */}
        <div className="absolute inset-0">
          {/* Dynamic Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              transform: `scale(1.05) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
            }}
          />
          
          {/* Interactive Gradient Orbs */}
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-red-600/8 to-purple-600/8 rounded-full blur-3xl transition-all duration-500"
            style={{
              top: `${mousePosition.y}%`,
              left: `${mousePosition.x}%`,
            }}
          />
          
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/6 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-3xl animate-pulse-slow delay-1500" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Main Content */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            {/* Elegant Badge */}
            <div className={`inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-12 backdrop-blur-sm transition-all duration-700 transform hover:scale-105 hover:border-red-500/30 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-300" />
              </div>
              <span className="text-red-300 text-xs font-medium tracking-wider">
                TRUSTED BY 500+ COMPANIES
              </span>
            </div>

            {/* Refined Heading */}
            <div className="mb-10">
              <div className="relative inline-block">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Create{" "}
                  <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text animate-gradient-x relative">
                    {rotatingTexts[currentText]}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse" />
                  </span>
                </h1>
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-6">
                With <span className="font-semibold text-red-400">EventEase</span>
              </h2>
            </div>

            {/* Elegant Subheading */}
            <p className="text-base md:text-lg text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              Professional event planning, stunning designs, and flawless coordination 
              for your perfect occasion.
            </p>

            {/* Updated CTA Buttons Grid with Correct Routing */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
              {/* Plan Your Event -> SignupHost */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />
                <Link
                  to="/signuphost"
                  className="relative bg-gradient-to-br from-red-600 to-red-800 group-hover:from-red-500 group-hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-red-900/30 border border-red-400/40 overflow-hidden flex flex-col items-center justify-center space-y-2 min-h-[120px]"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <div className="text-center">
                    <div className="text-base font-semibold">Plan Your Event</div>
                    <div className="text-red-200 text-xs font-light mt-1">Become an event host</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </div>

              {/* Join an Event -> SignupGuest */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                <Link
                  to="/signupguest"
                  className="relative bg-gradient-to-br from-gray-900 to-black group-hover:from-purple-900/20 group-hover:to-gray-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-900/20 border border-purple-500/20 overflow-hidden flex flex-col items-center justify-center space-y-2 min-h-[120px]"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🎪</div>
                  <div className="text-center">
                    <div className="text-base font-semibold">Join an Event</div>
                    <div className="text-purple-200 text-xs font-light mt-1">Register as attendee</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </div>

              {/* Welcome Back -> Signin */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/30 to-red-600/30 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                <Link
                  to="/signin"
                  className="relative bg-gradient-to-br from-black to-gray-900 group-hover:from-yellow-900/10 group-hover:to-black text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-yellow-900/10 border border-yellow-500/20 overflow-hidden flex flex-col items-center justify-center space-y-2 min-h-[120px]"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <div className="text-center">
                    <div className="text-base font-semibold">Welcome Back</div>
                    <div className="text-yellow-200 text-xs font-light mt-1">Sign in to your account</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </div>
            </div>

            {/* Minimal Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto border-t border-gray-800/30 pt-10">
              {[
                { number: "500+", label: "Events", icon: "🎉" },
                { number: "98%", label: "Satisfaction", icon: "⭐" },
                { number: "50+", label: "Cities", icon: "🌍" },
                { number: "24/7", label: "Support", icon: "💫" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="text-xl font-bold text-red-500 mb-1 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-1">
                      <span>{stat.number}</span>
                      <span className="text-sm opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-300">
                        {stat.icon}
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs font-medium group-hover:text-gray-300 transition-colors duration-300 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-red-400/60 text-xs font-medium tracking-wide">Explore More</span>
              <div className="w-5 h-8 border border-red-500/20 rounded-full flex justify-center group hover:border-red-400/40 transition-colors duration-300">
                <div className="w-0.5 h-2 bg-red-500/60 rounded-full mt-1 animate-bounce group-hover:bg-red-400" />
              </div>
            </div>
          </div>

          {/* Minimal Corner Accents */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-red-500/20" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-red-500/20" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-red-500/20" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-red-500/20" />
        </section>

        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-red-400/15 rounded-full animate-float ${
                i % 3 === 0 ? 'animate-spin-slow' : ''
              }`}
              style={{
                left: `${15 + (i * 10)}%`,
                top: `${20 + (i * 7)}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${12 + (i % 4)}s`
              }}
            />
          ))}
        </div>

        {/* Subtle Mouse Trail */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-3 h-3 bg-red-500/10 rounded-full blur-sm transition-all duration-150 ease-out"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      </div>

      {/* 1. Scrollable Upcoming Events with Countdown */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-3">
              Upcoming <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Events</span>
            </h2>
            <p className="text-gray-300 text-sm">Don't miss these amazing events happening soon</p>
          </div>

          <div className="relative">
            {/* Scroll buttons */}
            <button 
              onClick={() => scrollEvents('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              ‹
            </button>
            <button 
              onClick={() => scrollEvents('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              ›
            </button>

            {/* Scrollable events container */}
            <div 
              id="events-scroll"
              className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
              style={{ scrollBehavior: 'smooth' }}
            >
              {upcomingEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-500/90 text-white px-2 py-1 rounded text-xs font-bold">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-white font-bold text-sm mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-400 text-xs mb-3">
                      <span>📅</span>
                      <span className="ml-1">{new Date(event.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>📍</span>
                      <span className="ml-1">{event.venue}</span>
                    </div>
                    
                    <CountdownTimer targetDate={event.date} />
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-gray-400 text-xs">
                        👥 {event.attendees.toLocaleString()} attending
                      </div>
                      <Link 
                        to={`/events/${event.id}`}
                        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded text-xs font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                      >
                        Interested? Join the Event
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short Brief of Events Section with Tags */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <div 
                key={event.id}
                className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-102 animate-slide-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{event.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs border border-red-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/events"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore all events</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About Us Brief */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl p-8 border border-red-500/20 animate-slide-up">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{aboutBrief.icon}</div>
              <h2 className="text-2xl font-black text-white mb-3">{aboutBrief.title}</h2>
              <p className="text-gray-300 text-sm mb-6">{aboutBrief.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {aboutBrief.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-red-400 font-bold text-lg">{feature}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn more about us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Brief */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Services</span>
            </h2>
            <p className="text-gray-300 text-sm">Comprehensive event solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesBrief.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-102 animate-slide-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore all services</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Popular Event Shoutout */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-3">
              Popular <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Events</span>
            </h2>
            <p className="text-gray-300 text-sm">Most loved events by our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularEvents.map((event, index) => (
              <div 
                key={event.id}
                className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-102 animate-slide-up group"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-red-500/90 text-white px-2 py-1 rounded text-xs font-bold">
                    ❤️ {event.likes}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-xs">
                    <span>📅</span>
                    <span className="ml-1">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore the gallery</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Latest News Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-3">
              Latest <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">News</span>
            </h2>
            <p className="text-gray-300 text-sm">Stay updated with event industry insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <div 
                key={news.id}
                className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-102 animate-slide-up"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <h3 className="text-white font-bold text-sm mb-2">{news.title}</h3>
                <p className="text-gray-300 text-xs mb-4">{news.excerpt}</p>
                <div className="flex justify-between text-gray-400 text-xs">
                  <span>{new Date(news.date).toLocaleDateString()}</span>
                  <span>{news.readTime} read</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/blogs"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore the blogs</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Teams & Sponsors Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-xl p-8 border border-red-500/20 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-3">Our Team & Partners</h2>
              <p className="text-gray-300 text-sm">Meet the experts behind your perfect events</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Teams */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 text-center">Our Teams</h3>
                <div className="space-y-3">
                  {teamSponsors.teams.map((team, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-black/20 rounded border border-red-500/10">
                      <span className="text-gray-300 text-sm">{team.name}</span>
                      <span className="text-red-400 font-bold text-sm">{team.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sponsors */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 text-center">Trusted Partners</h3>
                <div className="grid grid-cols-2 gap-3">
                  {teamSponsors.sponsors.map((sponsor, index) => (
                    <div key={index} className="p-3 bg-black/20 rounded border border-red-500/10 text-center">
                      <span className="text-gray-300 text-sm">{sponsor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/contacts"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add animations to CSS */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes grid-flow {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-40px) translateX(-40px);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}