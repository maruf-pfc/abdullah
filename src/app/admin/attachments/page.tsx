"use client";

import { useState, useEffect } from "react";

type Attachment = {
  _id: string;
  company: string;
  date: string;
  description: string;
};

export default function AdminAttachments() {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    company: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    fetchAttachments();
  }, []);

  const fetchAttachments = async () => {
    setLoading(true);
    const res = await fetch("/api/attachments");
    if (res.ok) {
      setAttachments(await res.json());
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `/api/attachments/${editingId}` : "/api/attachments";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ company: "", date: "", description: "" });
      setEditingId(null);
      fetchAttachments();
    }
  };

  const handleEdit = (a: Attachment) => {
    setEditingId(a._id);
    setFormData({ company: a.company, date: a.date, description: a.description });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/attachments/${id}`, { method: "DELETE" });
    if (res.ok) fetchAttachments();
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ company: "", date: "", description: "" });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Manage Attachments</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Attachment" : "Add New Attachment"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              required
              type="text"
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B0000] focus:ring-[#8B0000] sm:text-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date (e.g., November 2023)</label>
            <input
              required
              type="text"
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
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
          <div className="flex space-x-2">
            <button type="submit" className="bg-[#8B0000] text-white px-4 py-2 rounded shadow hover:bg-[#a30000]">
              {editingId ? "Update Attachment" : "Add Attachment"}
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attachments.map((a) => (
              <tr key={a._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{a.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button onClick={() => handleEdit(a)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  <button onClick={() => handleDelete(a._id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
            {attachments.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">No attachments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
