import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user, updateUser, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/profile');
        updateUser(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email
        });
      } catch (err) {
        setError('Failed to fetch user data');
        console.error('Profile fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading && user) {
      fetchUserData();
    }
  }, [authLoading, user, updateUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8080/api/profile', formData);
      updateUser(response.data);
      setIsEditing(false);
      // Show success message
    } catch (err) {
      setError('Failed to update profile');
      console.error('Profile update error:', err);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-[#F1F5F9] text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1E293B] rounded-xl p-6 shadow-xl border border-[#2D3B54]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-[#6366F1] rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#F1F5F9]">
                  {user?.name || 'User Name'}
                </h1>
                <p className="text-[#94A3B8]">{user?.email || 'email@example.com'}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-[#6366F1] text-white text-sm rounded-full">
                  {user?.role || 'Role'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-[#6366F1] text-white rounded-lg hover:bg-[#4F46E5] transition-colors"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </motion.div>

        {/* Profile Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 bg-[#1E293B] rounded-xl p-6 shadow-xl border border-[#2D3B54]"
        >
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0F172A] border border-[#2D3B54] rounded-lg px-4 py-2 text-[#F1F5F9]"
                />
              </div>
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0F172A] border border-[#2D3B54] rounded-lg px-4 py-2 text-[#F1F5F9]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#6366F1] text-white py-2 rounded-lg hover:bg-[#4F46E5] transition-colors"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1">Name</label>
                <div className="text-[#F1F5F9]">{user?.name}</div>
              </div>
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1">Email</label>
                <div className="text-[#F1F5F9]">{user?.email}</div>
              </div>
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1">Role</label>
                <div className="text-[#F1F5F9]">{user?.role}</div>
              </div>
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1">Member Since</label>
                <div className="text-[#F1F5F9]">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 