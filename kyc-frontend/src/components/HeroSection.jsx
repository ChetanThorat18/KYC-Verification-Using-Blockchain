import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function HeroSection() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-[#0F172A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 right-0 w-[500px] h-[500px] bg-[#3B82F6] rounded-full filter blur-[128px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#6366F1] rounded-full filter blur-[128px] opacity-10 animate-pulse delay-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-medium text-[#F1F5F9] mb-4">
              A global turn-key compliance solution
            </h1>
            <p className="text-[#94A3B8] text-lg mb-8 w-4/5">
              An all-in-one workflow solution to verify your customers'
              identities, streamline a KYC on-boarding process and manage the
              entire customer lifecycle.
            </p>
            <button
              onClick={() => navigate(isLoggedIn ? "/profile" : "/login")}
              className="bg-[#6366F1] text-white px-8 py-3 rounded-md hover:bg-[#4F46E5] transition-colors text-lg"
            >
              {isLoggedIn ? "Go to Profile" : "Get Started"}
            </button>
          </div>
          
          {/* Chain SVG Animation */}
          <div className="w-full md:w-1/2 relative h-[600px]">
            <svg
              className="w-full h-full relative z-10"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated gradient for glow effect */}
              <defs>
                <linearGradient id="chainGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>

                {/* Filter for glow effect */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main Chain Structure */}
              <g filter="url(#glow)">
                {/* Vertical Chain Links */}
                {[0, 1, 2, 3].map((i) => (
                  <g key={`chain-${i}`}>
                    <path
                      d={`M${150 + i * 100},100 L${150 + i * 100},500`}
                      stroke="#6366F1"
                      strokeWidth="6"
                      strokeDasharray="20,20"
                      className="animate-pulse"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;40"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                ))}

                {/* Horizontal Connectors */}
                {[150, 250, 350, 450].map((y, i) => (
                  <path
                    key={`connector-${i}`}
                    d={`M150,${y} L450,${y}`}
                    stroke="#3B82F6"
                    strokeWidth="4"
                    strokeDasharray="15,15"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="30;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                ))}

                {/* Chain Nodes */}
                {[150, 250, 350, 450].map((y) => 
                  [150, 250, 350, 450].map((x, i) => (
                    <g key={`node-${x}-${y}`}>
                      {/* Larger Block */}
                      <rect
                        x={x - 30}
                        y={y - 30}
                        width="60"
                        height="60"
                        rx="12"
                        fill="#1E293B"
                        stroke="#6366F1"
                        strokeWidth="3"
                        className="animate-pulse"
                      />
                      
                      {/* Center Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="#3B82F6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.3;1;0.3"
                          dur={`${1 + i * 0.5}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  ))
                )}

                {/* Flowing Data Particles */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <circle
                    key={`particle-${i}`}
                    r="4"
                    fill="#F1F5F9"
                  >
                    <animateMotion
                      path="M150,100 L150,500 M250,100 L250,500 M350,100 L350,500 M450,100 L450,500"
                      dur={`${3 + i}s`}
                      repeatCount="indefinite"
                      begin={`-${i * 1}s`}
                    />
                  </circle>
                ))}
              </g>

              {/* Labels */}
              <g className="labels" fill="#F1F5F9" fontSize="16" fontWeight="bold">
                <text x="130" y="80" className="animate-pulse">VERIFY</text>
                <text x="230" y="80" className="animate-pulse">SECURE</text>
                <text x="330" y="80" className="animate-pulse">PROCESS</text>
                <text x="430" y="80" className="animate-pulse">TRUST</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 