import React, { useState, useEffect } from "react";

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [activeService, setActiveService] = useState(null);
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

  // Service Categories
  const serviceCategories = [
    {
      id: 1,
      name: "Corporate Events",
      icon: "💼",
      description: "Professional events for businesses and organizations",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center",
      features: [
        "Conference Planning",
        "Product Launches",
        "Team Building",
        "Shareholder Meetings",
        "Corporate Retreats",
        "Networking Events"
      ]
    },
    {
      id: 2,
      name: "Social Events",
      icon: "🎉",
      description: "Celebrations and personal milestones",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&crop=center",
      features: [
        "Wedding Planning",
        "Birthday Parties",
        "Anniversaries",
        "Graduations",
        "Baby Showers",
        "Family Reunions"
      ]
    },
    {
      id: 3,
      name: "Special Events",
      icon: "🌟",
      description: "Unique and memorable experiences",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=250&fit=crop&crop=center",
      features: [
        "Charity Galas",
        "Award Ceremonies",
        "Music Festivals",
        "Cultural Events",
        "Product Launches",
        "Grand Openings"
      ]
    }
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      id: "essential",
      name: "Essential",
      price: "$2,499",
      description: "Perfect for small gatherings and intimate events",
      popular: false,
      features: [
        "Event concept development",
        "Venue selection assistance",
        "Basic decor planning",
        "Vendor coordination",
        "Day-of coordination",
        "Up to 50 guests",
        "Basic audio/visual setup"
      ],
      notIncluded: [
        "Full design services",
        "Custom branding",
        "Premium vendors",
        "Multi-day events"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: "$4,999",
      description: "Our most popular package for memorable events",
      popular: true,
      features: [
        "Complete event design",
        "Custom theme development",
        "Premium venue selection",
        "Vendor management",
        "Full decor planning",
        "Up to 150 guests",
        "Professional audio/visual",
        "Event marketing support",
        "RSVP management",
        "On-site coordination team"
      ],
      notIncluded: [
        "International events",
        "Multi-venue coordination",
        "Celebrity appearances"
      ]
    },
    {
      id: "elite",
      name: "Elite",
      price: "$9,999",
      description: "Ultimate luxury experience for extraordinary events",
      popular: false,
      features: [
        "Bespoke event creation",
        "Luxury venue access",
        "World-class vendors",
        "Custom entertainment",
        "Advanced technology integration",
        "Unlimited guest count",
        "Dedicated project manager",
        "360° marketing campaign",
        "VIP guest services",
        "Multi-day event support",
        "International coordination",
        "Post-event analysis"
      ],
      notIncluded: [
        "No limitations - fully customized"
      ]
    }
  ];

  // Service Process
  const serviceProcess = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, requirements, and budget to understand your unique needs.",
      icon: "💬"
    },
    {
      step: "02",
      title: "Planning",
      description: "Our team creates a detailed event strategy and timeline tailored to your goals.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Execution",
      description: "We bring your vision to life with precision and attention to every detail.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Your unforgettable event experience, perfectly executed and memorable.",
      icon: "🎊"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director, TechCorp",
      content: "EventEase transformed our annual conference into an unforgettable experience. Their attention to detail was remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Thompson",
      role: "Wedding Client",
      content: "Our wedding was absolutely perfect! The team handled everything seamlessly while we enjoyed our special day.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "Event Manager, Global Foundation",
      content: "The charity gala organized by EventEase raised 40% more than previous years. Exceptional work!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
    }
  ];

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
            {['💼', '🎉', '🌟', '✨'][i % 4]}
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
              Exceptional <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Event Services</span>
            </h1>
            
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              From intimate gatherings to grand celebrations, we craft unforgettable experiences 
              tailored to your vision and budget.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/20">
            <ImageWithLoader
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop&crop=center"
              alt="Event Services"
              className="w-full h-48 md:h-64 object-cover"
              imageId="services-hero"
            />
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Services</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Comprehensive event solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {serviceCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setActiveService(activeService === category.id ? null : category.id)}
              >
                <div className="relative h-32">
                  <ImageWithLoader
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    imageId={`service-${category.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-3 left-3 text-2xl">{category.icon}</div>
                  <h3 className="absolute bottom-3 left-3 text-white font-semibold text-sm">{category.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-xs mb-3">{category.description}</p>
                  
                  {activeService === category.id && (
                    <div className="animate-slideIn">
                      <h4 className="text-white text-xs font-semibold mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-xs">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Simple <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Pricing</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Choose the perfect package for your event needs
            </p>
          </div>

          {/* Plan Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-black/40 backdrop-blur-xl rounded-xl p-1 border border-purple-500/20">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-900/20'
                    : 'border-purple-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-400 text-xs mb-4">{plan.description}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-xs">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.notIncluded && plan.notIncluded.length > 0 && (
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-500 text-xs mb-2">Not Included:</p>
                    <ul className="space-y-1">
                      {plan.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-500 text-xs">
                          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className={`w-full mt-6 py-3 rounded-xl font-semibold text-xs transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-2xl hover:shadow-purple-900/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } hover:scale-105`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Process</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              How we bring your vision to life, step by step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceProcess.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-purple-400 font-bold text-sm mb-2">{step.step}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Client <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Stories</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              What our clients say about their event experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <ImageWithLoader
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                    imageId={`testimonial-${index}`}
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm">{testimonial.name}</h3>
                    <p className="text-purple-300 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              Frequently Asked <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Everything you need to know about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                question: "How far in advance should I book my event?",
                answer: "We recommend booking 3-6 months in advance for optimal planning. For larger events, 6-12 months is ideal."
              },
              {
                question: "Do you handle events outside the city?",
                answer: "Yes! We coordinate events nationwide and internationally. Additional travel fees may apply."
              },
              {
                question: "Can I customize a package?",
                answer: "Absolutely! All our packages are customizable to fit your specific needs and budget."
              },
              {
                question: "What's included in the pricing?",
                answer: "Pricing includes planning, coordination, and management services. Vendor costs and venue fees are separate."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20"
              >
                <h3 className="text-white font-semibold text-sm mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
            <h2 className="text-lg font-bold text-white mb-3">
              Ready to Create Your <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Dream Event?</span>
            </h2>
            
            <p className="text-gray-300 text-sm mb-6">
              Let's discuss your vision and create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
                Start Planning Now
              </button>
              <button className="px-6 py-3 bg-transparent border border-purple-500/30 text-purple-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-purple-500/10">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs">
            © 2024 EventEase. Professional event services for unforgettable experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}