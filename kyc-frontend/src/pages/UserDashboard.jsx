import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { HiDocumentText, HiClock, HiCheckCircle, HiXCircle } from 'react-icons/hi';

function UserDashboard() {
  const [kycStatus, setKycStatus] = useState('pending');
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserKYC = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/user/kyc-status', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setKycStatus(response.data.status);
        setDocuments(response.data.documents || []);
      } catch (error) {
        console.error('Error fetching KYC status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserKYC();
  }, []);

  const statusColors = {
    pending: 'text-yellow-500',
    approved: 'text-green-500',
    rejected: 'text-red-500'
  };

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Status Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-[#1E293B] rounded-xl p-6 border border-[#2D3B54]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#6366F1] bg-opacity-20 rounded-lg">
                <HiDocumentText className="w-6 h-6 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-[#F1F5F9] font-semibold">KYC Status</h3>
                <p className={`text-lg font-medium ${statusColors[kycStatus]}`}>
                  {kycStatus.charAt(0).toUpperCase() + kycStatus.slice(1)}
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional status cards */}
          {/* ... */}
        </motion.div>

        {/* Document Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1E293B] rounded-xl p-6 border border-[#2D3B54] mb-8"
        >
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Document Upload</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Document upload cards */}
            <div className="border border-dashed border-[#2D3B54] rounded-xl p-6 text-center">
              <div className="mb-4">
                <HiDocumentText className="w-12 h-12 text-[#6366F1] mx-auto" />
              </div>
              <h3 className="text-[#F1F5F9] font-medium mb-2">Identity Document</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Upload a valid government-issued ID
              </p>
              <button className="bg-[#6366F1] text-white px-4 py-2 rounded-lg hover:bg-[#4F46E5] transition-colors">
                Upload Document
              </button>
            </div>
            {/* Additional upload cards */}
          </div>
        </motion.div>

        {/* Verification History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1E293B] rounded-xl p-6 border border-[#2D3B54]"
        >
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Verification History</h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#0F172A] rounded-lg">
                <div className="flex items-center space-x-4">
                  <HiDocumentText className="w-6 h-6 text-[#6366F1]" />
                  <div>
                    <h4 className="text-[#F1F5F9]">{doc.type}</h4>
                    <p className="text-[#94A3B8] text-sm">
                      Submitted on {new Date(doc.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[doc.status]}`}>
                  {doc.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UserDashboard; 