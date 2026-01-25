import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call

    try {
      console.log("Submitting", formData);
      const response = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      const data = await response.data;
      console.log(data);
      // ✅ 2️⃣ STORE TOKEN
      localStorage.setItem("token", response.data.token);

      // ✅ 3️⃣ STORE USER INFO
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // ✅ 4️⃣ REDIRECT
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Header with Animated Logo */}
          <div className="text-center mb-8">
            <Link
              to="/"
              className="flex items-center justify-center space-x-3 mb-6 group"
            >
              {/* Animated Logo from Header.jsx */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl flex items-center justify-center group-hover:from-red-400 group-hover:via-red-500 group-hover:to-red-600 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-red-900/30 relative overflow-hidden">
                  <div className="relative w-6 h-6">
                    <div className="absolute left-0 top-0 w-1.5 h-6 bg-white rounded-full shadow-lg animate-pulse-slow"></div>
                    <div className="absolute left-0 top-0 w-4 h-1.5 bg-white rounded-full shadow-lg group-hover:w-5 transition-all duration-300"></div>
                    <div className="absolute left-0 top-2 w-3 h-1.5 bg-white rounded-full shadow-lg group-hover:w-4 transition-all duration-300 delay-75"></div>
                    <div className="absolute left-0 top-4.5 w-5 h-1.5 bg-white rounded-full shadow-lg group-hover:w-6 transition-all duration-300 delay-150"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce shadow-lg shadow-yellow-400/50"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-300 shadow-lg shadow-yellow-300/50"></div>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-white group-hover:text-red-100 transition-colors duration-500 tracking-tight">
                  Event
                  <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text drop-shadow-lg">
                    Ease
                  </span>
                </span>
                <span className="text-[8px] text-red-400/70 font-medium tracking-widest uppercase -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:delay-300">
                  Effortless • Elegant • Exceptional
                </span>
              </div>
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Welcome{" "}
              <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">
                Back
              </span>
            </h1>
            <p className="text-gray-400 text-sm">
              Sign in to your EventEase account
            </p>
          </div>

          {/* Enhanced Creative Sign In Form */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 shadow-2xl shadow-red-900/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-sm
                               placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 group-hover:border-red-500/50 pl-12"
                    placeholder="your.email@company.com"
                    required
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                    ✉️
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-300 mb-2"
                >
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-sm
                               placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 group-hover:border-red-500/50 pl-12 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                    🔒
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center group">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-5 h-5 bg-black/40 border-gray-600 rounded focus:ring-red-500 focus:ring-2 group-hover:border-red-500 transition-colors duration-300"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-3 text-xs text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-xs text-red-400 hover:text-red-300 transition-colors duration-300 underline font-semibold hover:scale-105 transform"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl 
                           font-semibold text-sm transition-all duration-300 transform hover:scale-105 
                           hover:shadow-2xl hover:shadow-red-900/30 border border-red-500/30 relative overflow-hidden group
                           ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:from-red-500 hover:to-red-600"}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">
                      Sign In to EventEase 🚀
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </>
                )}
              </button>

              {/* Social Sign In */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-gradient-to-br from-black/60 to-black/40 text-gray-400 text-xs">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-sm
                             hover:border-red-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white text-sm
                             hover:border-red-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-5 h-5 mr-3 text-blue-300 group-hover:scale-110 transition-transform duration-300">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                  Twitter
                </button>
              </div>
            </form>

            {/* Updated Sign Up Links */}
            <div className="text-center mt-8 p-4 bg-black/30 rounded-xl border border-red-500/10">
              <p className="text-gray-400 text-sm mb-3">
                Don't have an account?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/signuphost"
                  className="px-4 py-2 bg-gradient-to-r from-red-600/20 to-red-800/10 text-red-400 rounded-lg text-sm font-semibold 
                             hover:from-red-600/30 hover:to-red-800/20 transition-all duration-300 transform hover:scale-105 
                             border border-red-500/20 hover:border-red-500/40 flex items-center justify-center space-x-2"
                >
                  <span>🎯</span>
                  <span>Sign up as host</span>
                </Link>
                <Link
                  to="/signupguest"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/10 text-purple-400 rounded-lg text-sm font-semibold 
                             hover:from-purple-600/30 hover:to-blue-600/20 transition-all duration-300 transform hover:scale-105 
                             border border-purple-500/20 hover:border-purple-500/40 flex items-center justify-center space-x-2"
                >
                  <span>🎪</span>
                  <span>Join as guest</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              {
                icon: "⚡",
                title: "Fast Access",
                desc: "Quick event discovery",
              },
              { icon: "🔒", title: "Secure", desc: "Your data is protected" },
              {
                icon: "🌟",
                title: "Personalized",
                desc: "Tailored recommendations",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-xl p-4 border border-red-500/10 hover:border-red-500/20 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="text-white text-xs font-semibold mb-1 group-hover:text-red-300 transition-colors duration-300">
                  {feature.title}
                </div>
                <div className="text-gray-400 text-xs">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
