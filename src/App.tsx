import React from 'react';
import { Zap, Shield, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative" style={{ backgroundColor: '#0B0E1C' }}>
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="circuit2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="circuit3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="circuit4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Circuit Lines */}
          <path d="M0,100 Q300,50 600,100 T1200,100" fill="none" stroke="#3484F0" strokeWidth="2" className="circuit-line-1" opacity="0.6" />
          <path d="M0,300 Q400,250 800,300 T1200,300" fill="none" stroke="#9A4EFF" strokeWidth="2" className="circuit-line-2" opacity="0.6" />
          <path d="M0,500 Q200,450 400,500 T800,500 Q1000,450 1200,500" fill="none" stroke="#3484F0" strokeWidth="2" className="circuit-line-3" opacity="0.4" />
          <path d="M0,700 Q600,650 1200,700" fill="none" stroke="#9A4EFF" strokeWidth="2" className="circuit-line-4" opacity="0.4" />
          
          {/* Circuit Nodes */}
          <circle cx="200" cy="100" r="3" fill="#3484F0" className="circuit-node-1" />
          <circle cx="600" cy="100" r="4" fill="#9A4EFF" className="circuit-node-2" />
          <circle cx="400" cy="300" r="3" fill="#3484F0" className="circuit-node-3" />
          <circle cx="800" cy="500" r="4" fill="#9A4EFF" className="circuit-node-4" />
          <circle cx="1000" cy="700" r="3" fill="#3484F0" className="circuit-node-5" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Share Your Unused Mobile Data.{' '}
              <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #3484F0, #9A4EFF)' }}>
                Earn Crypto.
              </span>
              {' '}Stay Connected.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              CellLink is a decentralized network that turns your mobile data into value — with no effort, no middlemen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg text-white" style={{ background: 'linear-gradient(to right, #3484F0, #9A4EFF)' }}>
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-slate-700 rounded-lg font-semibold text-lg hover:border-slate-600/70 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose CellLink?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the future of mobile connectivity with our innovative decentralized network.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group p-6 rounded-xl border bg-slate-800/30 backdrop-blur-sm transition-all duration-300" style={{ borderColor: '#3484F0', borderWidth: '1px', borderOpacity: 0.2 }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Earnings</h3>
                <p className="text-gray-300">
                  Start earning cryptocurrency immediately by sharing your unused mobile data with the network.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="group p-6 rounded-xl border bg-slate-800/30 backdrop-blur-sm transition-all duration-300" style={{ borderColor: '#9A4EFF', borderWidth: '1px', borderOpacity: 0.2 }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
                <p className="text-gray-300">
                  Your data remains encrypted and secure. We prioritize your privacy with advanced blockchain technology.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="group p-6 rounded-xl border bg-slate-800/30 backdrop-blur-sm transition-all duration-300" style={{ borderColor: '#3484F0', borderWidth: '1px', borderOpacity: 0.2 }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
                <p className="text-gray-300">
                  Join a worldwide community of users building the future of decentralized mobile connectivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Join the{' '}
                <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #3484F0, #9A4EFF)' }}>
                  CellLink Network?
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Start earning crypto by sharing your unused mobile data. Join thousands of users building the future of decentralized connectivity.
              </p>
              <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg text-white" style={{ background: 'linear-gradient(to right, #3484F0, #9A4EFF)' }}>
                Download CellLink
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .circuit-line-1 {
          animation: pulse1 4s ease-in-out infinite;
        }
        
        .circuit-line-2 {
          animation: pulse2 3s ease-in-out infinite;
        }
        
        .circuit-line-3 {
          animation: pulse3 5s ease-in-out infinite;
        }
        
        .circuit-line-4 {
          animation: pulse4 3.5s ease-in-out infinite;
        }
        
        .circuit-node-1 {
          animation: glow1 2s ease-in-out infinite alternate;
        }
        
        .circuit-node-2 {
          animation: glow2 2.5s ease-in-out infinite alternate;
        }
        
        .circuit-node-3 {
          animation: glow3 1.8s ease-in-out infinite alternate;
        }
        
        .circuit-node-4 {
          animation: glow4 2.2s ease-in-out infinite alternate;
        }
        
        .circuit-node-5 {
          animation: glow5 1.5s ease-in-out infinite alternate;
        }
        
        @keyframes pulse1 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse2 {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        
        @keyframes pulse3 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse4 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes glow1 {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
        
        @keyframes glow2 {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
        
        @keyframes glow3 {
          from { opacity: 0.3; }
          to { opacity: 0.9; }
        }
        
        @keyframes glow4 {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
        
        @keyframes glow5 {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}