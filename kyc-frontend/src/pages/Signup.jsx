import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/signup", formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0F172A]">
      <div className="absolute -top-40 left-40 w-96 h-96 bg-[#3B82F6] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 right-40 w-96 h-96 bg-[#6366F1] rounded-full filter blur-3xl opacity-10"></div>

      <form onSubmit={handleSubmit} className="relative bg-[#1E293B] p-8 rounded-xl shadow-xl w-96 border border-[#2D3B54] z-10">
        <h1 className="text-3xl font-bold mb-6 text-[#F1F5F9] text-center">Create Account</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-[#94A3B8]">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#0F172A] border-[#2D3B54] text-[#F1F5F9] focus:border-[#6366F1] focus:ring-[#6366F1] placeholder-[#64748B]"
            />
          </div>
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
            Sign Up
          </Button>
          <p className="text-center text-[#94A3B8] mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6366F1] hover:text-[#4F46E5]">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;