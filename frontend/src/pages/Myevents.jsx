import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useEffect } from "react";
import { toast } from "react-toastify";


export default function MyEvents() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const [events, setEvents] = useState({upcoming: [], past: [], draft: []});

  // Sample events data
  const demo_events = {
    upcoming: [
      {
        id: 1,
        title: "Tech Innovation Summit 2024",
        date: "2024-03-15",
        time: "09:00 AM - 05:00 PM",
        venue: "Convention Center Downtown",
        status: "confirmed",
        type: "conference",
        attendees: 250,
        budget: "$15,000",
        progress: 75
      },
      {
        id: 2,
        title: "Sarah & James Wedding",
        date: "2024-04-20",
        time: "02:00 PM - 11:00 PM",
        venue: "Grand Garden Resort",
        status: "planning",
        type: "wedding",
        attendees: 150,
        budget: "$25,000",
        progress: 45
      },
      {
        id: 3,
        title: "Product Launch - Nova Series",
        date: "2024-05-10",
        time: "06:00 PM - 09:00 PM",
        venue: "Tech Hub Arena",
        status: "confirmed",
        type: "corporate",
        attendees: 300,
        budget: "$35,000",
        progress: 90
      }
    ],
    past: [
      {
        id: 4,
        title: "Annual Charity Gala",
        date: "2024-01-20",
        time: "07:00 PM - 11:00 PM",
        venue: "Royal Ballroom",
        status: "completed",
        type: "charity",
        attendees: 200,
        budget: "$20,000",
        rating: 4.8
      },
      {
        id: 5,
        title: "Winter Music Festival",
        date: "2023-12-15",
        time: "12:00 PM - 10:00 PM",
        venue: "City Park Amphitheater",
        status: "completed",
        type: "festival",
        attendees: 5000,
        budget: "$80,000",
        rating: 4.9
      }
    ],
    draft: [
      {
        id: 6,
        title: "Corporate Team Building",
        date: "2024-06-15",
        time: "10:00 AM - 04:00 PM",
        venue: "Adventure Park",
        status: "draft",
        type: "corporate",
        attendees: 50,
        budget: "$8,000",
        progress: 20
      }
    ]
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

  const eventStats = [
    {
      icon: "📅",
      title: "Upcoming Events",
      value: "3",
      color: "from-green-500/15 to-green-600/10",
      border: "border-green-500/25"
    },
    {
      icon: "✅",
      title: "Completed",
      value: "12",
      color: "from-blue-500/15 to-blue-600/10",
      border: "border-blue-500/25"
    },
    {
      icon: "⏳",
      title: "In Planning",
      value: "5",
      color: "from-yellow-500/15 to-yellow-600/10",
      border: "border-yellow-500/25"
    },
    {
      icon: "💰",
      title: "Total Budget",
      value: "$158K",
      color: "from-purple-500/15 to-purple-600/10",
      border: "border-purple-500/25"
    }
  ];

  const quickActions = [
    {
      icon: "🎯",
      title: "Create New Event",
      description: "Start planning a new event",
      color: "from-red-500/15 to-red-600/10",
      border: "border-red-500/25"
    },
    {
      icon: "📊",
      title: "Event Analytics",
      description: "View event performance",
      color: "from-purple-500/15 to-purple-600/10",
      border: "border-purple-500/25"
    },
    {
      icon: "👥",
      title: "Manage Team",
      description: "Coordinate with your team",
      color: "from-blue-500/15 to-blue-600/10",
      border: "border-blue-500/25"
    },
    {
      icon: "📝",
      title: "Templates",
      description: "Use event templates",
      color: "from-green-500/15 to-green-600/10",
      border: "border-green-500/25"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'planning': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'completed': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'draft': return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'conference': return '🎤';
      case 'wedding': return '💍';
      case 'corporate': return '🏢';
      case 'charity': return '🤝';
      case 'festival': return '🎪';
      default: return '🎉';
    }
  };
  useEffect(() => {
  const fetchMyEvents = async () => {
    try {
      const res = await API.get("/events/my-events");
      console.log("Response Status:", res);
      console.log("Response Data:", res.data);
      // if (res.status === 401){
      //   toast.error("Please login to view your events");
      //   setTimeout(() => {
      //     navigate("/signin");
      //   }, 2000);
      // }
      setEvents(res.data.events);
      console.log("My Events:", res.data.events);

      // Later we will replace fake data with real data
    } catch (err) {
      console.error(err);
      if (err?.response?.status === 401 || err.status === 401){
        toast.error("Please login to view your events");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
      
    }
  };

  fetchMyEvents();
}, []);


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



      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-black mb-2 leading-tight animate-fade-in">
            My <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Events</span>
          </h1>
          <p className="text-xs text-gray-300 mb-6 max-w-md mx-auto leading-relaxed animate-fade-in delay-100">
            Manage all your events in one place. Track progress, coordinate with your team, and create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {eventStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-lg p-3 border ${stat.border} transition-all duration-300 hover:scale-105 group cursor-pointer animate-slide-up`}
                style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                <div className="text-lg mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-white font-bold text-xs mb-0.5">{stat.title}</h3>
                <p className="text-red-300 font-semibold text-lg">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            
            {/* Quick Actions Sidebar */}
            <div className="lg:col-span-1 space-y-3">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-lg p-3 border border-red-500/20 animate-slide-up delay-200">
                <h2 className="text-sm font-bold text-white mb-2 text-center">Quick Actions</h2>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${action.color} backdrop-blur-sm rounded p-2 border ${action.border} transition-all duration-300 hover:scale-102 group cursor-pointer`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                          {action.icon}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-xs">{action.title}</h3>
                          <p className="text-gray-400 text-xs">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Filters */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-lg p-3 border border-red-500/20 animate-slide-up delay-300">
                <h2 className="text-sm font-bold text-white mb-2 text-center">Filters</h2>
                <div className="space-y-2">
                  {['All Events', 'This Month', 'Next 30 Days', 'High Priority', 'Requiring Attention'].map((filter) => (
                    <div key={filter} className="flex items-center space-x-2 p-1 hover:bg-red-500/10 rounded transition-colors duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-xs">{filter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events Main Content */}
            <div className="lg:col-span-3">
              {/* Tab Navigation */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-lg p-1 border border-red-500/20 mb-4 animate-slide-up delay-200">
                <div className="flex space-x-1">
                  {[
                    { id: 'upcoming', label: 'Upcoming', count: events.upcoming !== undefined ? events.upcoming.length : 0 },
                    { id: 'past', label: 'Past Events', count: events.past !== undefined ? events.past.length : 0 },
                    { id: 'draft', label: 'Drafts', count: events.draft !== undefined ? events.draft.length : 0 }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-1.5 px-3 rounded text-xs font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-red-500/20 text-white border border-red-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-red-500/10'
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Events Grid */}
              

              {/* Empty State */}
              {events[activeTab] === undefined || events[activeTab].length === 0 ?  (
                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-lg p-8 border border-red-500/20 text-center animate-slide-up">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="text-white font-bold text-sm mb-1">No {activeTab} events</h3>
                  <p className="text-gray-400 text-xs mb-3">
                    {activeTab === 'upcoming' 
                      ? "You don't have any upcoming events scheduled."
                      : activeTab === 'past'
                      ? "Your past events will appear here."
                      : "You don't have any event drafts."}
                  </p>
                  <button className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded font-semibold text-xs transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-red-900/20">
                    Create Your First Event
                  </button>
                </div>
              ):
              (<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {events[activeTab].map((event, index) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-lg p-3 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-102 animate-slide-up group cursor-pointer"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {getEventTypeIcon(event.type)}
                        </span>
                        <h3 className="text-white font-bold text-sm">{event.title}</h3>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs border ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>

                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <span>📅</span>
                        <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <span>📍</span>
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <span>👥</span>
                        <span>{event.attendees.toLocaleString()} attendees</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <span>💰</span>
                        <span>Budget: {event.budget}</span>
                      </div>
                    </div>

                    {/* Progress Bar for non-completed events */}
                    {event.status !== 'completed' && (
                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Planning Progress</span>
                          <span>{event.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-red-500 to-red-600 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${event.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Rating for completed events */}
                    {event.status === 'completed' && event.rating && (
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-gray-300">Rating: {event.rating}/5.0</span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-1.5 mt-3">
                      <button className="flex-1 py-1.5 bg-red-500/20 text-red-300 rounded text-xs font-medium hover:bg-red-500/30 transition-colors duration-300 border border-red-500/30">
                        View Details
                      </button>
                      <button className="px-2 py-1.5 bg-gray-600/30 text-gray-300 rounded text-xs hover:bg-gray-600/50 transition-colors duration-300 border border-gray-500/30">
                        ⋮
                      </button>
                    </div>
                  </div>
                ))}
              </div>)
              }
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-xl rounded-lg p-3 border border-red-500/20 animate-fade-in delay-600">
            <h2 className="text-sm font-black text-white mb-1">
              Ready to Create <span className="text-transparent bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text">Magic</span>?
            </h2>
            <p className="text-gray-300 text-xs mb-2">
              Start planning your next unforgettable event with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-1 justify-center">
              <button className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded font-semibold text-xs transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-red-900/20">
                Create New Event
              </button>
              <button className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded font-semibold text-xs transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-purple-900/20">
                View Templates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 border border-red-500/20 max-w-md w-full animate-slide-up">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-bold text-sm">{selectedEvent.title}</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span>{new Date(selectedEvent.date).toLocaleDateString()} • {selectedEvent.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Venue:</span>
                <span>{selectedEvent.venue}</span>
              </div>
              <div className="flex justify-between">
                <span>Attendees:</span>
                <span>{selectedEvent.attendees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Budget:</span>
                <span>{selectedEvent.budget}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className={`px-2 py-0.5 rounded-full ${getStatusColor(selectedEvent.status)}`}>
                  {selectedEvent.status}
                </span>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="flex-1 py-1.5 bg-red-600 text-white rounded text-xs font-semibold hover:bg-red-700 transition-colors duration-300">
                Edit Event
              </button>
              <button className="flex-1 py-1.5 bg-gray-600 text-white rounded text-xs font-semibold hover:bg-gray-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add these animations to your CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
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
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
      `}</style>
    </div>
  );
}