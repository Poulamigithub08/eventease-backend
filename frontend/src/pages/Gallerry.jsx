import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [viewMode, setViewMode] = useState("grid"); // grid or masonry

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
      @keyframes zoomIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
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

  // Event Albums Data
  const eventAlbums = [
    {
      id: "corporate",
      name: "Corporate Events",
      description: "Professional conferences, product launches, and business gatherings",
      coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center",
      eventCount: 24,
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop&crop=center"
      ]
    },
    {
      id: "weddings",
      name: "Wedding Celebrations",
      description: "Beautiful weddings and romantic celebrations",
      coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center",
      eventCount: 18,
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop&crop=center"
      ]
    },
    {
      id: "festivals",
      name: "Music Festivals",
      description: "Large-scale music festivals and cultural events",
      coverImage: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=300&fit=crop&crop=center",
      eventCount: 12,
      images: [
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1472653525502-fc569e405f5c?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center"
      ]
    },
    {
      id: "charity",
      name: "Charity Galas",
      description: "Elegant fundraisers and philanthropic events",
      coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      eventCount: 15,
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=400&fit=crop&crop=center"
      ]
    },
    {
      id: "product-launches",
      name: "Product Launches",
      description: "Innovative product reveals and brand experiences",
      coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&crop=center",
      eventCount: 20,
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=400&fit=crop&crop=center"
      ]
    },
    {
      id: "private-parties",
      name: "Private Parties",
      description: "Exclusive celebrations and intimate gatherings",
      coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center",
      eventCount: 22,
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop&crop=center"
      ]
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
            {['📸', '🎞️', '🌟', '✨'][i % 4]}
          </div>
        </div>
      ))}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );

  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-zoomIn">
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white text-lg hover:text-purple-400 transition-colors duration-300"
          >
            ✕ Close
          </button>
          <img
            src={image}
            alt="Enlarged view"
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    );
  };

  const AlbumView = ({ album }) => (
    <div className="animate-slideIn">
      {/* Album Header */}
      <div className="text-center mb-8">
        <button
          onClick={() => setSelectedAlbum(null)}
          className="text-purple-400 text-xs hover:text-purple-300 transition-colors duration-300 mb-4 inline-flex items-center"
        >
          ← Back to Albums
        </button>
        <h2 className="text-xl font-bold text-white mb-2">{album.name}</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">{album.description}</p>
        <div className="text-gray-500 text-xs mt-2">{album.images.length} Photos • {album.eventCount} Events</div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/40 backdrop-blur-xl rounded-xl p-1 border border-purple-500/20">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 ${
              viewMode === "grid"
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode("masonry")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 ${
              viewMode === "masonry"
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Masonry View
          </button>
        </div>
      </div>

      {/* Images Grid */}
      <div className={
        viewMode === "grid" 
          ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          : "columns-2 md:columns-3 lg:columns-4 gap-3"
      }>
        {album.images.map((image, index) => (
          <div
            key={index}
            className={`mb-3 break-inside-avoid ${
              viewMode === "grid" ? "aspect-square" : ""
            }`}
          >
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-black/20"
              onClick={() => setSelectedImage(image)}
            >
              <ImageWithLoader
                src={image}
                alt={`${album.name} - Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                imageId={`${album.id}-${index}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  👁️
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
              <div className="text-4xl mb-3 animate-float">📸</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-3"></div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Event <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Gallery</span>
            </h1>
            
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Explore our portfolio of unforgettable events and celebrations
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { number: "150+", label: "Events" },
              { number: "2,500+", label: "Photos" },
              { number: "6", label: "Categories" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {selectedAlbum ? (
            <AlbumView album={eventAlbums.find(album => album.id === selectedAlbum)} />
          ) : (
            <>
              {/* Albums Grid */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-white mb-3">
                  Event <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Albums</span>
                </h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Browse our collection of event categories
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventAlbums.map((album) => (
                  <div
                    key={album.id}
                    className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedAlbum(album.id)}
                  >
                    <div className="relative h-48">
                      <ImageWithLoader
                        src={album.coverImage}
                        alt={album.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        imageId={`album-${album.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-semibold text-sm mb-1">{album.name}</h3>
                        <p className="text-gray-300 text-xs mb-2">{album.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-300 text-xs">{album.eventCount} events</span>
                          <span className="text-white text-xs bg-purple-500/20 px-2 py-1 rounded-full">
                            View Album →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Images Preview */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold text-white mb-3">
                    Featured <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Moments</span>
                  </h2>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    A glimpse of our most memorable event captures
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {eventAlbums.flatMap(album => album.images.slice(0, 2)).slice(0, 8).map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer overflow-hidden rounded-lg bg-black/20"
                      onClick={() => setSelectedImage(image)}
                    >
                      <ImageWithLoader
                        src={image}
                        alt={`Featured moment ${index + 1}`}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                        imageId={`featured-${index}`}
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
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!selectedAlbum && (
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
              <h2 className="text-lg font-bold text-white mb-3">
                Ready to Create Your <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">Memory?</span>
              </h2>
              
              <p className="text-gray-300 text-sm mb-6">
                Let us capture your next unforgettable event
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
                  Book Event Photography
                </button>
                <button className="px-6 py-3 bg-transparent border border-purple-500/30 text-purple-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-purple-500/10">
                  View Full Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs">
            © 2024 EventEase. Capturing unforgettable moments.
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}