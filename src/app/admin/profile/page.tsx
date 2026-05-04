"use client";

import { useState, useEffect } from "react";

type ProfileData = {
  careerObjective: string;
  currentPosition: {
    title: string;
    department: string;
    institution: string;
    period: string;
  };
  achievements: string[];
  skills: string[];
  languages: string;
};

export default function AdminProfile() {
  const [formData, setFormData] = useState<ProfileData>({
    careerObjective: "",
    currentPosition: { title: "", department: "", institution: "", period: "" },
    achievements: [],
    skills: [],
    languages: "",
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    const res = await fetch("/api/profile");
    if (res.ok) {
      const data = await res.json();
      setFormData({
        careerObjective: data.careerObjective || "",
        currentPosition: data.currentPosition || { title: "", department: "", institution: "", period: "" },
        achievements: data.achievements || [],
        skills: data.skills || [],
        languages: data.languages || "",
      });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Profile updated successfully!");
      fetchProfile();
    } else {
      alert("Error updating profile.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Manage Profile</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
        
        {/* Career Objective */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#8B0000]">Career Objective</h2>
          <textarea
            rows={4}
            value={formData.careerObjective}
            onChange={e => setFormData({...formData, careerObjective: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
          />
        </div>

        {/* Current Position */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#8B0000]">Current Position</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={formData.currentPosition.title}
                onChange={e => setFormData({...formData, currentPosition: { ...formData.currentPosition, title: e.target.value }})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                value={formData.currentPosition.department}
                onChange={e => setFormData({...formData, currentPosition: { ...formData.currentPosition, department: e.target.value }})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Institution</label>
              <input
                type="text"
                value={formData.currentPosition.institution}
                onChange={e => setFormData({...formData, currentPosition: { ...formData.currentPosition, institution: e.target.value }})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Period (e.g. August 2024 - Present)</label>
              <input
                type="text"
                value={formData.currentPosition.period}
                onChange={e => setFormData({...formData, currentPosition: { ...formData.currentPosition, period: e.target.value }})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
              />
            </div>
          </div>
        </div>

        {/* Arrays using line breaks */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#8B0000]">Achievements & Skills (One per line)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Achievements</label>
              <textarea
                rows={6}
                value={formData.achievements.join("\n")}
                onChange={e => setFormData({...formData, achievements: e.target.value.split("\n")})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
                placeholder="Achievement 1&#10;Achievement 2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Skills</label>
              <textarea
                rows={6}
                value={formData.skills.join("\n")}
                onChange={e => setFormData({...formData, skills: e.target.value.split("\n")})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
                placeholder="Skill 1&#10;Skill 2"
              />
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#8B0000]">Languages</h2>
          <input
            type="text"
            value={formData.languages}
            onChange={e => setFormData({...formData, languages: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
          />
        </div>

        <div className="pt-4 border-t">
          <button type="submit" className="bg-[#8B0000] text-white px-6 py-2 rounded shadow hover:bg-[#a30000]">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
