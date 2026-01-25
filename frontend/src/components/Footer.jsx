import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links with proper SVG icons
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/eventease',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:text-blue-500'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/15551234567',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      ),
      color: 'hover:text-green-500'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/eventease',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.765 3.73 13.614 3.73 12.317s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.716-6.978c0 .634-.512 1.146-1.146 1.146s-1.146-.512-1.146-1.146c0-.634.512-1.146 1.146-1.146s1.146.512 1.146 1.146zm1.449 4.587c-.033.238-.19.445-.424.526-.234.08-.49.024-.665-.142-.175-.166-.233-.422-.153-.656.08-.234.287-.391.525-.424.238-.033.49.024.665.19.175.167.233.423.152.657zm1.204 1.204c-.297.297-.7.464-1.121.464s-.824-.167-1.121-.464c-.297-.297-.464-.7-.464-1.121s.167-.824.464-1.121c.297-.297.7-.464 1.121-.464s.824.167 1.121.464c.297.297.464.7.464 1.121s-.167.824-.464 1.121z"/>
        </svg>
      ),
      color: 'hover:text-pink-500'
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/eventease',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/eventease',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/c/eventease',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-black/95 to-black/80 backdrop-blur-xl border-t border-red-500/20 shadow-2xl shadow-red-900/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto py-12 px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section with Same Logo from Header */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              {/* Same Logo from Header */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl flex items-center justify-center group-hover:from-red-400 group-hover:via-red-500 group-hover:to-red-600 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-red-900/30 relative overflow-hidden">
                  
                  {/* Animated E shape */}
                  <div className="relative w-6 h-6">
                    {/* Vertical bar with pulse animation */}
                    <div className="absolute left-0 top-0 w-1.5 h-6 bg-white rounded-full shadow-lg animate-pulse-slow"></div>
                    {/* Top horizontal bar */}
                    <div className="absolute left-0 top-0 w-4 h-1.5 bg-white rounded-full shadow-lg group-hover:w-5 transition-all duration-300"></div>
                    {/* Middle horizontal bar */}
                    <div className="absolute left-0 top-2 w-3 h-1.5 bg-white rounded-full shadow-lg group-hover:w-4 transition-all duration-300 delay-75"></div>
                    {/* Bottom horizontal bar */}
                    <div className="absolute left-0 top-4.5 w-5 h-1.5 bg-white rounded-full shadow-lg group-hover:w-6 transition-all duration-300 delay-150"></div>
                  </div>

                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-red-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced floating particles */}
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce shadow-lg shadow-yellow-400/50"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-300 shadow-lg shadow-yellow-300/50"></div>
                
                {/* Pulsing outer glow */}
                <div className="absolute inset-0 bg-red-400 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 -z-10 group-hover:scale-110 animate-pulse-slow"></div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="self-center text-2xl font-black whitespace-nowrap text-white group-hover:text-red-100 transition-colors duration-500 tracking-tight">
                  Event<span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text drop-shadow-lg animate-gradient-x">Ease</span>
                </span>
                <span className="text-[8px] text-red-400/70 font-medium tracking-widest uppercase -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:delay-300">
                  Effortless • Elegant • Exceptional
                </span>
              </div>

              {/* Enhanced animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 via-yellow-400 to-transparent group-hover:w-full transition-all duration-700 rounded-full"></div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              Your premier partner for seamless event planning and execution. 
              We transform your vision into reality with elegance, precision, 
              and unforgettable experiences that last a lifetime.
            </p>
            <div className="flex space-x-3">
              {/* Updated Social Links with all platforms */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-red-500/20 hover:scale-110 ${social.color} border border-gray-700 hover:border-red-500/30 group`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/events", label: "Events" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "About Us" },
                { to: "/blogs", label: "Blog" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm py-1"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-400 flex items-start group">
                <span className="text-red-500 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">📍</span>
                <span className="group-hover:text-white transition-colors duration-300">
                  123 Event Street,<br />
                  City, State 12345
                </span>
              </li>
              <li className="text-gray-400 flex items-center group">
                <span className="text-red-500 mr-3 group-hover:scale-110 transition-transform duration-300">📞</span>
                <span className="group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="text-gray-400 flex items-center group">
                <span className="text-red-500 mr-3 group-hover:scale-110 transition-transform duration-300">✉️</span>
                <span className="group-hover:text-white transition-colors duration-300">
                  hello@eventease.com
                </span>
              </li>
              <li className="text-gray-400 flex items-center group">
                <span className="text-red-500 mr-3 group-hover:scale-110 transition-transform duration-300">🕒</span>
                <span className="group-hover:text-white transition-colors duration-300">
                  24/7 Customer Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <span className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear}{" "}
              <Link to="/" className="text-white hover:text-red-300 transition-colors duration-300 font-semibold">
                EventEase™
              </Link>
              . All Rights Reserved.
            </span>
            
            {/* Trust badges */}
            <div className="flex space-x-3">
              <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-xs text-green-400 flex items-center space-x-1">
                <span>🔒</span>
                <span>Secure Booking</span>
              </span>
              <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 flex items-center space-x-1">
                <span>⭐</span>
                <span>5-Star Rated</span>
              </span>
            </div>
          </div>
          
          <ul className="flex flex-wrap justify-center items-center space-x-6 text-sm font-medium text-gray-400">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Cookie Policy", to: "/cookies" },
              { label: "Contact", to: "/contacts" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="hover:text-white transition-colors duration-300 hover:underline text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl border border-red-500/20 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold text-lg mb-1">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get the latest event trends, tips, and exclusive offers</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white text-sm placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300 flex-1 min-w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 text-sm font-medium shadow-lg shadow-red-900/20 hover:shadow-red-900/30 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute top-6 right-6 w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400 hover:text-white hover:bg-red-500/30 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg shadow-red-900/20"
        aria-label="Scroll to top"
      >
        <span className="text-lg font-bold">↑</span>
      </button>
    </footer>
  );
}