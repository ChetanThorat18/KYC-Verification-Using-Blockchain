import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { HiUsers, HiDocumentSearch, HiCheckCircle, HiClock } from 'react-icons/hi';

function OrganizationDashboard() {
  const [verifications, setVerifications] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [statsRes, verificationsRes] = await Promise.all([
          axios.get('http://localhost:8080/api/org/stats', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('http://localhost:8080/api/org/verifications', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);
        
        setStats(statsRes.data);
        setVerifications(verificationsRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-[#1E293B] rounded-xl p-6 border border-[#2D3B54]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#6366F1] bg-opacity-20 rounded-lg">
                <HiUsers className="w-6 h-6 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-[#F1F5F9] font-semibold">Total Users</h3>
                <p className="text-2xl font-medium text-[#F1F5F9]">{stats.total}</p>
              </div>
            </div>
          </div>
          {/* Additional stat cards */}
        </motion.div>

        {/* Verification Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1E293B] rounded-xl p-6 border border-[#2D3B54] mb-8"
        >
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Recent Verification Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[#94A3B8] text-left">
                  <th className="pb-4">User</th>
                  <th className="pb-4">Document Type</th>
                  <th className="pb-4">Submitted</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[#F1F5F9]">
                {verifications.map((verification, index) => (
                  <tr key={index} className="border-t border-[#2D3B54]">
                    <td className="py-4">{verification.userName}</td>
                    <td className="py-4">{verification.documentType}</td>
                    <td className="py-4">
                      {new Date(verification.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        verification.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                        verification.status === 'rejected' ? 'bg-red-500/20 text-red-500' :
                        'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {verification.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-[#6366F1] hover:text-[#4F46E5] transition-colors">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Add charts or additional analytics here */}
        </motion.div>
      </div>
    </div>
  );
}

export default OrganizationDashboard; 