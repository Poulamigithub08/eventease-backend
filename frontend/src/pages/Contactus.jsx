import React, { useState, useEffect } from "react";

export default function ContactUs() {
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "",
    budget: "",
    attendees: "",
    message: "",
    subscribe: false,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    // Add floating animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-bounce {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
      }
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with creative loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Contact form data:", formData);
    setFormData(emptyForm);
    setIsSubmitting(false);
    
    // Show creative success message
    alert("🎊✨ Amazing! Your event vision is now in our creative hands! We'll craft something extraordinary and reach out within 24 hours! 🌟");
  };

  const eventTypes = [
    "Corporate Event",
    "Wedding Celebration",
    "Conference & Summit",
    "Birthday Extravaganza",
    "Music Festival",
    "Product Launch",
    "Charity Gala",
    "Team Building",
    "Trade Show",
    "Networking Soirée",
    "Other - Surprise Us!"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000 - Dream Big!"
  ];

  const CreativeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
      
      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        >
          <div className="text-2xl opacity-20">
            {['🎪', '🎭', '🌟', '✨', '🎨', '🎼', '🎤', '💫'][i % 8]}
          </div>
        </div>
      ))}
      
      {/* Sparkle Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] animate-gradient-shift" 
           style={{animation: 'gradient-shift 8s ease infinite', backgroundSize: '60px 60px'}} />
    </div>
  );

  const CreativeInput = ({ label, type = "text", name, value, placeholder, required = false, icon, options }) => (
    <div className="group relative">
      <label className="block text-xs font-medium text-gray-300 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {type === "select" ? (
          <>
            <select
              name={name}
              value={value}
              onChange={handleChange}
              onFocus={() => setActiveField(name)}
              onBlur={() => setActiveField(null)}
              className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-xs
                         focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/50 backdrop-blur-sm
                         appearance-none cursor-pointer"
              required={required}
            >
              <option value="" className="text-gray-500">{placeholder}</option>
              {options.map(option => (
                <option key={option} value={option} className="text-white bg-gray-900">{option}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </>
        ) : type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setActiveField(name)}
            onBlur={() => setActiveField(null)}
            rows="4"
            className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-xs
                       placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/50 backdrop-blur-sm resize-none"
            placeholder={placeholder}
            required={required}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setActiveField(name)}
            onBlur={() => setActiveField(null)}
            className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-xs
                       placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/50 backdrop-blur-sm"
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <CreativeBackground />
      
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with smaller text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Let's Create <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Unforgettable Events</span>
            </h1>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Get in touch with our event experts to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-900/10">
                <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
                
                {[
                  { icon: "📞", title: "Call Us", details: "+1 (555) 123-4567", desc: "Mon-Fri from 8am to 6pm" },
                  { icon: "✉️", title: "Email Us", details: "hello@eventease.com", desc: "We'll respond within 24 hours" },
                  { icon: "📍", title: "Visit Us", details: "123 Event Street, Suite 100", desc: "New York, NY 10001" },
                  { icon: "🕒", title: "Office Hours", details: "Monday - Friday", desc: "8:00 AM - 6:00 PM EST" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 mb-4 group">
                    <div className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold text-xs">{item.title}</h4>
                      <p className="text-purple-300 text-xs font-medium">{item.details}</p>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-900/10">
                <h3 className="text-lg font-bold text-white mb-4">Why Choose EventEase?</h3>
                {[
                  { icon: "🎯", text: "500+ Successful Events" },
                  { icon: "⭐", text: "5-Star Client Reviews" },
                  { icon: "🚀", text: "End-to-End Management" },
                  { icon: "💡", text: "Creative & Innovative Solutions" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-2 group">
                    <span className="text-base group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-gray-300 text-xs group-hover:text-white transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-900/10">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CreativeInput
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required={true}
                    />
                    <CreativeInput
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      required={true}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CreativeInput
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required={true}
                    />
                    <CreativeInput
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CreativeInput
                      label="Company/Organization"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                    <CreativeInput
                      label="Event Type"
                      type="select"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      placeholder="Select event type"
                      required={true}
                      options={eventTypes}
                      icon="🎪"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CreativeInput
                      label="Event Date"
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                    <CreativeInput
                      label="Estimated Budget"
                      type="select"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Select budget range"
                      options={budgetRanges}
                      icon="💰"
                    />
                    <CreativeInput
                      label="Expected Attendees"
                      type="number"
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleChange}
                      placeholder="e.g., 100"
                      min="1"
                    />
                  </div>

                  <CreativeInput
                    label="Tell Us About Your Event"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your event vision, requirements, and any specific needs..."
                    required={true}
                  />

                  {/* Newsletter Subscription */}
                  <div className="flex items-start space-x-3 p-3 bg-black/30 rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                    <input
                      id="subscribe"
                      name="subscribe"
                      type="checkbox"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      className="w-4 h-4 mt-0.5 bg-black/40 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 flex-shrink-0"
                    />
                    <label htmlFor="subscribe" className="text-xs text-gray-300">
                      Subscribe to our newsletter for event planning tips, industry insights, and special offers
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl 
                               font-semibold text-sm transition-all duration-300 transform hover:scale-105 
                               hover:shadow-2xl hover:shadow-purple-900/30 border border-purple-500/30 relative overflow-hidden group
                               ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-500 hover:to-blue-500'}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-xs">Sending Your Message...</span>
                      </div>
                    ) : (
                      <>
                        <span className="relative z-10 text-sm">Get Free Consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-white mb-6">Our Event Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: "💼", title: "Corporate Events", desc: "Conferences & Meetings" },
                { icon: "💍", title: "Weddings", desc: "Unforgettable Celebrations" },
                { icon: "🎪", title: "Social Events", desc: "Parties & Gatherings" },
                { icon: "🚀", title: "Product Launches", desc: "Memorable Debuts" }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group hover:scale-105">
                  <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="text-white text-xs font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300">{service.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}