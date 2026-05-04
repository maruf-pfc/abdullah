"use client";

import { useState, useEffect } from "react";

type Publication = {
  _id: string;
  citation: string;
};

export default function AdminPublications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    citation: "",
  });

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    setLoading(true);
    const res = await fetch("/api/publications");
    if (res.ok) {
      setPublications(await res.json());
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `/api/publications/${editingId}` : "/api/publications";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ citation: "" });
      setEditingId(null);
      fetchPublications();
    }
  };

  const handleEdit = (p: Publication) => {
    setEditingId(p._id);
    setFormData({ citation: p.citation });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/publications/${id}`, { method: "DELETE" });
    if (res.ok) fetchPublications();
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ citation: "" });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Manage Publications</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Publication" : "Add New Publication"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Citation / Description</label>
            <textarea
              required
              rows={4}
              value={formData.citation}
              onChange={e => setFormData({...formData, citation: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
            />
          </div>
          <div className="flex space-x-2">
            <button type="submit" className="bg-[#8B0000] text-white px-4 py-2 rounded shadow hover:bg-[#a30000]">
              {editingId ? "Update Publication" : "Add Publication"}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-300">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Citation</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {publications.map((p) => (
              <tr key={p._id}>
                <td className="px-6 py-4 text-sm text-gray-900 break-words line-clamp-3">{p.citation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button onClick={() => handleEdit(p)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  <button onClick={() => handleDelete(p._id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
            {publications.length === 0 && (
              <tr>
                <td colSpan={2} className="px-6 py-4 text-center text-sm text-gray-500">No publications found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
