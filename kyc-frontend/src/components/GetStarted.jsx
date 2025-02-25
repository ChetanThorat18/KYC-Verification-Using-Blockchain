import { motion } from "framer-motion";
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaMedium 
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
    //   { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQs", href: "/faqs" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Compliance", href: "/compliance" }
    ]
  }
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaGithub, href: "https://github.com" },
  { icon: FaMedium, href: "https://medium.com" }
];

function GetStarted() {
  return (
    <div className="relative bg-[#0F172A] pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[1000px] bg-[#3B82F6] rounded-full filter blur-[150px] opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#6366F1] rounded-full filter blur-[150px] opacity-5"></div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#3B82F6] mb-6">
            Ready to Transform Your KYC Process?
          </h2>
          <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Sign up today and experience the power of blockchain-driven identity verification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-[#6366F1] px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]">
              Request a Demo
            </button>
            <button className="bg-gradient-to-r from-[#6366F1] to-[#3B82F6] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]">
              Start Now
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2D3B54] to-transparent mb-16"></div>

        {/* Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F1F5F9]">KYC Chain</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Transforming identity verification with blockchain technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#6366F1] transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-[#F1F5F9] font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[#94A3B8] hover:text-[#6366F1] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-[#94A3B8] text-sm">
          <p>© 2024 KYC Chain. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default GetStarted; 