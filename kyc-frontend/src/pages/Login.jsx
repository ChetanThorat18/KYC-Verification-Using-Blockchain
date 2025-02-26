import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", formData);
      login(res.data.token);
      navigate("/profile");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0F172A] overflow-hidden">
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#6366F1] rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <form onSubmit={handleSubmit} className="relative bg-[#1E293B] p-8 rounded-xl shadow-xl w-[384px] mx-4 border border-[#2D3B54] z-10">
        <h1 className="text-3xl font-bold mb-6 text-[#F1F5F9] text-center">Welcome Back</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-[#94A3B8]">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#0F172A] border-[#2D3B54] text-[#F1F5F9] focus:border-[#6366F1] focus:ring-[#6366F1] placeholder-[#64748B]"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-[#94A3B8]">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="bg-[#0F172A] border-[#2D3B54] text-[#F1F5F9] focus:border-[#6366F1] focus:ring-[#6366F1] placeholder-[#64748B]"
            />
          </div>
          <div>
            <Label htmlFor="role" className="text-[#94A3B8]">Role</Label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3 py-2 bg-[#0F172A] border-[#2D3B54] text-[#F1F5F9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
            >
              <option value="user">User</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <Button type="submit" className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white transition-colors">
            Login
          </Button>
          <p className="text-center text-[#94A3B8] mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#6366F1] hover:text-[#4F46E5]">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;