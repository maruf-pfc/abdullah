"use client";

import { useState, useEffect } from "react";

type Thesis = {
  _id: string;
  title: string;
  description: string;
  software: string[];
};

export default function AdminThesis() {
  const [theses, setTheses] = useState<Thesis[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    software: "",
  });

  useEffect(() => {
    fetchTheses();
  }, []);

  const fetchTheses = async () => {
    setLoading(true);
    const res = await fetch("/api/thesis");
    if (res.ok) {
      setTheses(await res.json());
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `/api/thesis/${editingId}` : "/api/thesis";
    const method = editingId ? "PUT" : "POST";

    const payload = {
      ...formData,
      software: formData.software.split(",").map(s => s.trim()).filter(Boolean),
    };

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setFormData({ title: "", description: "", software: "" });
      setEditingId(null);
      fetchTheses();
    }
  };

  const handleEdit = (t: Thesis) => {
    setEditingId(t._id);
    setFormData({ title: t.title, description: t.description, software: t.software.join(", ") });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/thesis/${id}`, { method: "DELETE" });
    if (res.ok) fetchTheses();
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: "", description: "", software: "" });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Manage Thesis</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Thesis" : "Add New Thesis"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              required
              type="text"
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Software Used (comma separated)</label>
            <input
              type="text"
              value={formData.software}
              onChange={e => setFormData({...formData, software: e.target.value})}
              placeholder="e.g. COMSOL Multiphysics 6.1, Tecplot, MS Excel"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
            />
          </div>
          <div className="flex space-x-2">
            <button type="submit" className="bg-[#8B0000] text-white px-4 py-2 rounded shadow hover:bg-[#a30000]">
              {editingId ? "Update Thesis" : "Add Thesis"}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-300">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {theses.map((t) => (
              <tr key={t._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button onClick={() => handleEdit(t)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  <button onClick={() => handleDelete(t._id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
            {theses.length === 0 && (
              <tr>
                <td colSpan={2} className="px-6 py-4 text-center text-sm text-gray-500">No theses found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
