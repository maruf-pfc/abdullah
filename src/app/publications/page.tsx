import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaBook } from "react-icons/fa";
import connectToDatabase from "@/lib/db";
import Publication from "@/models/Publication";

export const metadata = {
  title: "Publications | Muhammad Abdullah",
  description: "Explore Muhammad Abdullah's publications.",
};

export default async function Publications() {
  await connectToDatabase();
  const publications = await Publication.find({}).sort({ createdAt: -1 });

  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              Publications
            </h1>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaBook className="mr-2" /> Journal Articles
              </h2>
              {publications.length > 0 ? (
                <ul className="list-disc pl-8 space-y-4">
                  {publications.map((pub) => (
                    <li key={pub._id.toString()}>{pub.citation}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No publications listed yet.</p>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
