import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [activeEvent, setActiveEvent] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState({});

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
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);

    // Update countdown timers every second
    const timer = setInterval(() => {
      updateCountdowns();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateCountdowns = () => {
    const now = new Date();
    const newTimeRemaining = {};

    upcomingEvents.forEach(event => {
      const eventDate = new Date(event.date + 'T' + event.time);
      const diff = eventDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        newTimeRemaining[event.id] = { days, hours, minutes, seconds };
      } else {
        newTimeRemaining[event.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    });

    setTimeRemaining(newTimeRemaining);
  };

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

  // Event Categories
  const eventCategories = [
    { id: "all", name: "All Events", icon: "🎪", count: 18 },
    { id: "wedding", name: "Weddings & Parties", icon: "💒", count: 4 },
    { id: "corporate", name: "Corporate Events", icon: "💼", count: 5 },
    { id: "music", name: "Music & Entertainment", icon: "🎵", count: 3 },
    { id: "conference", name: "Conferences", icon: "🎤", count: 3 },
    { id: "sports", name: "Sports & Fitness", icon: "⚽", count: 2 },
    { id: "community", name: "Community & Charity", icon: "🤝", count: 1 }
  ];

  // Upcoming Events with countdown timers
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Annual technology conference featuring industry leaders and innovative startups",
      date: "2024-02-15",
      time: "09:00",
      location: "Convention Center, Downtown",
      category: "conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      price: "$299",
      tags: ["Popular", "Limited Seats"],
      seats: 45,
      organizer: "Tech Events Inc."
    },
    {
      id: 2,
      title: "Summer Music Festival",
      description: "Three-day outdoor music festival with top artists and local bands",
      date: "2024-03-22",
      time: "14:00",
      location: "Riverside Park",
      category: "music",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop&crop=center",
      price: "$89",
      tags: ["New", "Early Bird"],
      seats: 1200,
      organizer: "Music Festivals Co."
    },
    {
      id: 3,
      title: "Corporate Leadership Retreat",
      description: "Exclusive retreat for corporate leaders and executives",
      date: "2024-02-28",
      time: "08:30",
      location: "Mountain Resort",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center",
      price: "$1,499",
      tags: ["Exclusive", "Limited Seats"],
      seats: 25,
      organizer: "Leadership Dynamics"
    },
    {
      id: 4,
      title: "Spring Wedding Expo",
      description: "Premier wedding planning event with top vendors and experts",
      date: "2024-03-08",
      time: "10:00",
      location: "Grand Ballroom",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center",
      price: "Free",
      tags: ["Popular", "New"],
      seats: 300,
      organizer: "Wedding Planners Association"
    },
    {
      id: 5,
      title: "Charity Gala Dinner",
      description: "Elegant evening supporting local community initiatives",
      date: "2024-04-05",
      time: "19:00",
      location: "Luxury Hotel Downtown",
      category: "community",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      price: "$250",
      tags: ["Charity", "Limited Seats"],
      seats: 80,
      organizer: "Community Foundation"
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      description: "Exciting pitch competition for emerging startups and investors",
      date: "2024-03-15",
      time: "13:00",
      location: "Innovation Hub",
      category: "conference",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
      price: "$49",
      tags: ["Popular", "Networking"],
      seats: 200,
      organizer: "Startup Ecosystem"
    }
  ];

  // Event Calendar Data
  const eventCalendar = [
    { date: "2024-02-15", events: ["Tech Innovation Summit"] },
    { date: "2024-02-28", events: ["Corporate Leadership Retreat"] },
    { date: "2024-03-08", events: ["Spring Wedding Expo"] },
    { date: "2024-03-15", events: ["Startup Pitch Competition"] },
    { date: "2024-03-22", events: ["Summer Music Festival"] },
    { date: "2024-04-05", events: ["Charity Gala Dinner"] }
  ];

  // Past Event Highlights
  const pastEvents = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop&crop=center",
      title: "Winter Tech Conference 2023",
      attendees: "500+"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop&crop=center",
      title: "Autumn Wedding Fair",
      attendees: "800+"
    },
    {
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=300&h=200&fit=crop&crop=center",
      title: "City Music Festival",
      attendees: "5,000+"
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop&crop=center",
      title: "Business Leadership Forum",
      attendees: "200+"
    }
  ];

  // Sponsors & Partners
  const sponsors = [
    { name: "TechCorp", logo: "💻" },
    { name: "EventPro", logo: "🎭" },
    { name: "InnovateCo", logo: "🚀" },
    { name: "CityBank", logo: "🏦" },
    { name: "Global Media", logo: "📰" }
  ];

  // Blog Updates
  const blogUpdates = [
    {
      title: "5 Event Trends to Watch in 2024",
      excerpt: "Discover the latest innovations shaping the event industry",
      readTime: "5 min read"
    },
    {
      title: "Maximizing Event Engagement",
      excerpt: "Strategies to keep your attendees connected and involved",
      readTime: "4 min read"
    }
  ];

  // Filter and sort events
  const filteredEvents = upcomingEvents
    .filter(event => selectedCategory === "all" || event.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date) - new Date(b.date);
        case "popularity":
          return b.seats - a.seats;
        case "price":
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        default:
          return 0;
      }
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
            {['🎪', '🎫', '🌟', '✨'][i % 4]}
          </div>
        </div>
      ))}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );

  const CountdownTimer = ({ eventId }) => {
    const timer = timeRemaining[eventId] || { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return (
      <div className="flex items-center justify-center space-x-2">
        {[
          { value: timer.days, label: 'Days' },
          { value: timer.hours, label: 'Hours' },
          { value: timer.minutes, label: 'Minutes' },
          { value: timer.seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-black/40 text-white text-xs font-mono rounded-lg px-2 py-1 min-w-12">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-xs mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <CreativeBackground />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="text-5xl mb-4 animate-float">🎪</div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Unforgettable</span> Events
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            From intimate gatherings to grand celebrations - find your next extraordinary experience
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { number: "500+", label: "Events Organized" },
              { number: "50K+", label: "Happy Attendees" },
              { number: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Browse by <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Category</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Find events that match your interests and preferences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border text-center group hover:transform hover:scale-105 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-purple-500/50 shadow-lg shadow-purple-900/20'
                    : 'border-purple-500/20'
                }`}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div className="text-white font-semibold text-xs mb-1">{category.name}</div>
                <div className="text-gray-400 text-xs">{category.count} events</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events with Filters */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Upcoming <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Events</span>
              </h2>
              <p className="text-gray-400 text-sm">Don't miss these incredible experiences</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black/40 border border-gray-600 rounded-lg text-white text-sm px-3 py-2 focus:outline-none focus:border-purple-500"
              >
                <option value="date">Date</option>
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <ImageWithLoader
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    imageId={`event-${event.id}`}
                  />
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {event.seats} seats left
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-300 text-xs font-semibold capitalize">
                      {eventCategories.find(cat => cat.id === event.category)?.name}
                    </span>
                    <span className="text-white text-sm font-bold">{event.price}</span>
                  </div>
                  
                  <h3 className="text-white font-semibold text-sm mb-2 leading-tight">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <span>📅</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="mb-4">
                    <CountdownTimer eventId={event.id} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setActiveEvent(event)}
                      to="/events"
                      className="text-purple-300 text-xs font-semibold hover:text-purple-200 transition-colors duration-300"
                    >
View Details →
</button>

<Link
  to="/signinhost"
  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 ml-2"
>
  Register Now →
</Link>

<Link
  to="/signinguest"
  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 ml-2"
>
  Sign in as Guest →
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar View */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Event <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Calendar</span>
            </h2>
            <p className="text-gray-400 text-sm">Plan ahead and never miss an event</p>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventCalendar.map((calendarItem, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-4 border border-purple-500/10">
                  <div className="text-purple-300 font-semibold text-sm mb-2">
                    {formatDate(calendarItem.date)}
                  </div>
                  {calendarItem.events.map((eventName, eventIndex) => (
                    <div key={eventIndex} className="text-white text-xs flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{eventName}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Events Organizers */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Our Events</h2>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                We create extraordinary experiences that bring people together, inspire innovation, 
                and create lasting memories. Our team of expert event planners ensures every detail 
                is perfect.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                to="/aboutus"
                className="text-purple-300 text-sm font-semibold hover:text-purple-200 transition-colors duration-300"
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Event Highlights */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Past Event <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Highlights</span>
            </h2>
            <p className="text-gray-400 text-sm">See what makes our events unforgettable</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="relative group cursor-pointer">
                <ImageWithLoader
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  imageId={`past-${index}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-lg flex items-end p-3">
                  <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="font-semibold">{event.title}</div>
                    <div>{event.attendees} attendees</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/gallery"
              className="text-purple-300 text-sm font-semibold hover:text-purple-200 transition-colors duration-300"
            >
              View full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Partners</span>
            </h2>
            <p className="text-gray-400 text-sm">Trusted by industry leaders</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl mb-2">{sponsor.logo}</div>
                <div className="text-gray-300 text-sm">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Updates */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Event <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Insights</span>
            </h2>
            <p className="text-gray-400 text-sm">Latest news and tips from our blog</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {blogUpdates.map((post, index) => (
              <div key={index} className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-white font-semibold text-sm mb-2">{post.title}</h3>
                <p className="text-gray-400 text-xs mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                  <Link 
                    to="/blogs"
                    className="text-purple-300 text-xs font-semibold hover:text-purple-200 transition-colors duration-300"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-lg font-bold text-white mb-3">
              Never Miss an <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Event</span>
            </h2>
            
            <p className="text-gray-300 text-sm mb-6">
              Get notified about upcoming events and exclusive offers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 flex-1"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-xl font-bold text-white mb-3">Need Help?</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Our support team is here to help you with any questions about our events
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                to="/contactus"
                className="px-6 py-3 bg-transparent border border-purple-500/30 text-purple-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-purple-500/10"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-xs">
            © 2024 EventEase. Creating unforgettable experiences, one event at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}