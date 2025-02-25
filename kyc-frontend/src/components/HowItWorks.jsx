import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineDocumentText, HiOutlineLightningBolt, HiOutlineDatabase, HiOutlineShare } from "react-icons/hi";

const steps = [
  {
    number: "01",
    icon: HiOutlineDocumentText,
    title: "User Registers & Uploads Documents",
    description: "User submits ID proofs securely through our encrypted platform.",
    color: "from-blue-400 to-blue-600"
  },
  {
    number: "02",
    icon: HiOutlineLightningBolt,
    title: "AI-Powered Document Verification",
    description: "System verifies authenticity using advanced AI algorithms.",
    color: "from-purple-400 to-purple-600"
  },
  {
    number: "03",
    icon: HiOutlineDatabase,
    title: "Blockchain Hashing & Storage",
    description: "Approved KYC data is hashed & stored securely on-chain.",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    number: "04",
    icon: HiOutlineShare,
    title: "Instant Access & Sharing",
    description: "Users share their verified identity with trusted businesses.",
    color: "from-sky-400 to-sky-600"
  }
];

function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group h-full"
    >
      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 left-[calc(100%-2rem)] w-[calc(4rem)] h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent transform -translate-y-1/2 z-0"></div>
      )}

      <div className="relative z-10 bg-[#1E293B]/50 backdrop-blur-xl p-6 rounded-xl border border-[#2D3B54] hover:border-[#6366F1] transition-all duration-300 h-full flex flex-col">
        {/* Step Number */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          {step.number}
        </div>

        {/* Icon */}
        <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4 shrink-0`}>
          <step.icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-[#F1F5F9] mb-2">{step.title}</h3>
          <p className="text-[#94A3B8] leading-relaxed">{step.description}</p>
        </div>

        {/* Hover Effect Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 to-[#3B82F6]/0 group-hover:from-[#6366F1]/5 group-hover:to-[#3B82F6]/5 rounded-xl transition-all duration-300"></div>
      </div>
    </motion.div>
  );
}

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#0F172A] py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[1000px] bg-[#3B82F6] rounded-full filter blur-[120px] opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#6366F1] rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#3B82F6] mb-6"
          >
            How Our Blockchain-Based KYC Works
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#3B82F6] mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/signup')}
            className="bg-gradient-to-r from-[#6366F1] to-[#3B82F6] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your KYC Verification
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default HowItWorks; 