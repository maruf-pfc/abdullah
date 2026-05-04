export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to your Admin Panel</h2>
        <p className="text-gray-600 mb-4">
          Use the sidebar to navigate through different sections of your portfolio.
          Any changes you make here will instantly update your live website.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li><strong>Profile:</strong> Manage your career objective, current position, education, and skills.</li>
          <li><strong>Projects:</strong> Add, edit, or remove your engineering projects.</li>
          <li><strong>Publications:</strong> Keep your journal articles and publications up to date.</li>
          <li><strong>Thesis:</strong> Update your thesis information and tools used.</li>
          <li><strong>Attachments:</strong> Manage your industrial attachment experiences.</li>
        </ul>
      </div>
    </div>
  );
}
