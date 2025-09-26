import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link , useNavigate} from "react-router-dom";                    

export default function HostelComplaintUI() {

  const navigate = useNavigate()

  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ede7f6" }}>
      {/* Navbar */}
      <header className="shadow" style={{ backgroundColor: "#ede7f6" }}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-7xl">
          {/* Left: logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold mr-4">Uni<span className="q-gradient">Q</span>uery</h1>
          </div>

          {/* Center: main links (desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-white/90 mx-auto">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Contact</a>
            <a href="#" className="nav-link">About</a>
          </nav>

          {/* Right: signup button */}
          <div className="hidden md:flex items-center md:justify-end md:ml-auto">
            <button onClick={() => navigate('/signup')} className="signup-btn px-4 py-2 rounded-full font-semibold bg-white text-indigo-700 hover:brightness-95 transition-shadow shadow-md">Sign Up</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 bg-white/60"
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile menu items */}
        {mobileOpen && (
          <div className="md:hidden bg-white/80 px-6 pb-4">
            <a className="block py-2 text-gray-700" href="#">Home</a>
            <a className="block py-2 text-gray-700" href="#">Contact</a>
            <a className="block py-2 text-gray-700" href="#">About</a>
            <a className="block py-2 text-gray-700" href="#">Sign Up</a>
          </div>
        )}
      </header>

      {/* Hero Section (upgraded) */}
      <section className="container mx-auto px-4 sm:px-6 py-10 max-w-7xl">
  <div className="relative overflow-hidden rounded-2xl px-6 py-10 sm:py-16 flex flex-col md:flex-row items-center" style={{ background: 'linear-gradient(135deg, #452c63 20%, #6d28d9 60%, #0891b2 100%)' }}>
          {/* Decorative floating circles */}
          <span className="hidden sm:block absolute -top-8 -left-12 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" aria-hidden="true"></span>
          <span className="hidden md:block absolute -bottom-10 -right-10 w-56 h-56 bg-white/8 rounded-full blur-2xl animate-float" aria-hidden="true"></span>

          <div className="md:w-1/2 w-full text-white z-10 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">UniQuery — Resolve Hostel Queries Fast</h2>
            <p className="mt-4 text-sm sm:text-base text-white/90">Submit a complaint, track progress, and get confirmations — all in one place.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={() => navigate('/login')} className="px-6 py-3 rounded-full font-semibold bg-white text-indigo-700 hover:scale-105 transition transform">Get Started</button>
              <a href="#complaints" className="px-6 py-3 rounded-full font-medium bg-white/20 text-white hover:bg-white/30 transition">See Complaint Types</a>
            </div>

            <p className="mt-4 text-sm text-white/80">Free for students • Secure • Fast resolution</p>
          </div>

          <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center md:justify-end z-10">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-102 transition-all duration-700">
              <img src={assets.resolve_type} alt="Resolve queries illustration" className="w-full h-auto rounded-lg shadow-xl pulse tilt" />
            </div>
          </div>

          {/* Subtle spotlight */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_30%)]" aria-hidden="true"></div>
        </div>
      </section>

      {/* Complaint Types */}
      <section className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Complaint - Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {/* Complaint Cards */}
          {[
            { name: "Room Maintenance", icon: "🔧", path: "/room-maintenance" },
            { name: "WiFi Issues", icon: "📶", path: "/wifi" },
            { name: "Mess Issues", icon: "🍴", path: "/mess" },
            { name: "Laundry Service", icon: "🧺", path: "/laundry" },
            { name: "Housekeeping Service", icon: "🧹", path: "/housekeeping" },
            { name: "Washroom Issues", icon: "🚽", path: "/washroom" },
          ].map((item, index) => (
            <Link
            key={index}
            to={item.path}
            className={`
          bg-white
          rounded-xl
          shadow
          flex flex-col items-center justify-center
          p-6
          w-full
          min-h-[12rem]
          sm:min-h-[14rem]
          transition-transform duration-200
          transform
          hover:-translate-y-1
          hover:shadow-lg
            cursor-pointer
        `}
              
            >
              <div className="text-6xl  mb-4">{item.icon}</div>
              <p className="text-gray-900 text-lg text-center font-bold ">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Mid Section Banner (updated to match hero) */}
      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl px-6 py-8 sm:py-12 flex flex-col md:flex-row items-center" style={{ background: 'linear-gradient(135deg, #452c63 20%, #6d28d9 45%, #0891b2 100%)' }}>
          <span className="hidden sm:block absolute -top-6 left-6 w-28 h-28 bg-white/6 rounded-full blur-2xl animate-float" aria-hidden="true"></span>
          <span className="hidden md:block absolute bottom-6 right-6 w-36 h-36 bg-white/6 rounded-full blur-2xl animate-float" aria-hidden="true"></span>

          <div className="md:w-1/2 w-full text-white z-10 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">Keep Your Hostel Hassle-Free</h2>
            <p className="mt-4 text-sm md:text-base text-white/90">
              Submit, track, and resolve complaints quickly — and get confirmation when issues are fixed.
            </p>
            <button className="glow-btn text-sm text-white mt-6 px-6 py-4 rounded-full font-semibold bg-white/10 hover:bg-white/20 transition" onClick={() => navigate('/complaints')}>
              Register Complaint
            </button>
          </div>

          <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center md:justify-end z-10">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform transition-all duration-700">
              <img className="w-full h-auto rounded-lg shadow-2xl animate-float pulse tilt" src={assets.query_hero} alt="students resolving queries" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.04),transparent_20%)]" aria-hidden="true"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-10 mt-6" aria-label="Footer" style={{ background: 'linear-gradient(90deg, #452c63 0%, #6d28d9 50%, #0891b2 100%)', minHeight: '28vh' }}>
        <div className="overflow-hidden">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6 py-10">
            <div>
              <h4 className="font-bold mb-2 text-lg">Need More Help?</h4>
              <p className="text-sm">+123-8888-0000</p>
              <p className="text-sm mt-2">Live support Mon-Fri</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">Contact</h4>
              <p className="text-sm">support@stayEase.com</p>
              <p className="text-sm mt-2">Office Hours: 9am - 5pm</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><a className="hover:underline text-white/90" href="#">Home</a></li>
                <li><a className="hover:underline text-white/90" href="#">Complaints</a></li>
                <li><a className="hover:underline text-white/90" href="#">Guide</a></li>
                <li><a className="hover:underline text-white/90" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="container mx-auto px-6 py-4 text-xs text-white/70">© {new Date().getFullYear()} UniQuery — Built for quick resolutions</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
