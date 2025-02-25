import { useNavigate } from "react-router-dom";
import { RiShieldKeyholeLine, RiTimeLine, RiLockLine, RiShieldCheckLine, RiFileTextLine } from 'react-icons/ri';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#1E293B]/50 backdrop-blur-xl p-6 rounded-xl border border-[#2D3B54] hover:border-[#6366F1] transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#1E293B]/80">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-[#6366F1] bg-opacity-20 rounded-lg backdrop-blur-xl">
          <Icon className="w-6 h-6 text-[#6366F1]" />
        </div>
        <h3 className="text-xl font-semibold text-[#F1F5F9]">{title}</h3>
      </div>
      <p className="text-[#94A3B8] leading-relaxed">{description}</p>
    </div>
  );
}

function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#0F172A] py-20 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Top-right gradient */}
        <div className="absolute -top-1/4 right-0 w-[500px] h-[500px] bg-[#3B82F6] rounded-full filter blur-[128px] opacity-10 animate-pulse"></div>
        
        {/* Bottom-left gradient */}
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#6366F1] rounded-full filter blur-[128px] opacity-10 animate-pulse delay-150"></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB] rounded-full filter blur-[160px] opacity-5 animate-pulse delay-300"></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/0 via-[#0F172A]/80 to-[#0F172A]/0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header with enhanced styling */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#3B82F6]">
            Why Choose Our Blockchain KYC Solution?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#3B82F6] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <FeatureCard
            icon={RiShieldKeyholeLine}
            title="Decentralized & Secure"
            description="No central authority controlling user data. Your information stays distributed and protected across the blockchain network."
          />
          <FeatureCard
            icon={RiTimeLine}
            title="Instant Verification"
            description="Reduce onboarding time with automated identity checks. Get verified in minutes, not days."
          />
          <FeatureCard
            icon={RiLockLine}
            title="Privacy-Focused"
            description="Users control their identity and share only required data. Your privacy is our priority."
          />
          <FeatureCard
            icon={RiShieldCheckLine}
            title="Tamper-Proof Records"
            description="Immutable blockchain ledger ensures data integrity. Once recorded, your data cannot be altered."
          />
          <FeatureCard
            icon={RiFileTextLine}
            title="Compliance Ready"
            description="Meets AML & KYC regulatory standards. Stay compliant with global regulations."
          />
          
          {/* Enhanced CTA Card */}
          <div className="bg-gradient-to-br from-[#6366F1] to-[#3B82F6] p-6 rounded-xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl border border-white/10">
            <div className="h-full flex flex-col justify-between relative overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Experience the future of KYC verification with our blockchain solution.
                </p>
              </div>
              <button
                onClick={() => navigate('/how-it-works')}
                className="bg-white text-[#6366F1] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors relative z-10 group hover:shadow-lg hover:shadow-white/10"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs; 