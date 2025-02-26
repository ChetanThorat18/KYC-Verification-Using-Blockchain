import { motion } from "framer-motion";
import { 
  BsBuildingsFill,
  BsCurrencyBitcoin,
  BsController,
  BsCart3
} from "react-icons/bs";

const useCases = [
  {
    icon: BsBuildingsFill,
    title: "Banks & Fintech",
    description: "Secure customer onboarding with automated verification processes. Reduce fraud and comply with regulations while providing a smooth user experience.",
    features: ["Digital Onboarding", "Risk Assessment", "Compliance Management"],
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: BsCurrencyBitcoin,
    title: "Crypto Exchanges",
    description: "Regulatory compliance with seamless user verification. Meet global standards while maintaining the speed crypto users expect.",
    features: ["AML Compliance", "Identity Verification", "Transaction Monitoring"],
    gradient: "from-violet-400 to-purple-500"
  },
  {
    icon: BsController,
    title: "Gaming & NFTs",
    description: "Ensure identity authenticity for fair play. Create trust in digital asset ownership while preventing fraud and maintaining user privacy.",
    features: ["Age Verification", "Wallet Verification", "Fraud Prevention"],
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: BsCart3,
    title: "E-Commerce",
    description: "Prevent fraud & enable secure transactions. Build trust with customers while protecting your business from fraudulent activities.",
    features: ["Merchant Verification", "Payment Security", "Customer Trust"],
    gradient: "from-rose-400 to-pink-500"
  }
];

function UseCaseCard({ useCase, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1E293B]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#2D3B54] hover:border-[#6366F1] transition-all duration-300 group"
    >
      {/* Icon Header */}
      <div className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-xl p-0.5 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-full h-full bg-[#1E293B] rounded-[10px] flex items-center justify-center">
          <useCase.icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-semibold text-[#F1F5F9] mb-3">{useCase.title}</h3>
      <p className="text-[#94A3B8] mb-6 leading-relaxed">{useCase.description}</p>

      {/* Features */}
      <div className="space-y-3">
        {useCase.features.map((feature, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
            <span className="text-[#CBD5E1]">{feature}</span>
          </div>
        ))}
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 to-[#3B82F6]/0 group-hover:from-[#6366F1]/5 group-hover:to-[#3B82F6]/5 rounded-2xl transition-all duration-300"></div>
    </motion.div>
  );
}

function UseCases() {
  return (
    <div className="relative bg-[#0F172A] py-24 overflow-hidden -mt-20">
      {/* Background Effects - Modified for better blend */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#3B82F6] rounded-full filter blur-[150px] opacity-5 transform translate-y-[-30%]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#6366F1] rounded-full filter blur-[150px] opacity-5 transform translate-y-[30%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-[#6366F1] text-lg font-semibold mb-4 block">
              INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#3B82F6] mb-6">
              Who Can Benefit from Our KYC Solution?
            </h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#3B82F6] mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#6366F1] to-[#3B82F6] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Explore More Use Cases</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default UseCases; 