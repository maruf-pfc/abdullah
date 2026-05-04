export const dynamic = 'force-dynamic';
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaBookOpen, FaQuoteLeft } from "react-icons/fa";
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
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row max-w-[1400px] w-full mx-auto relative">
        <Navigation />
        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto w-full">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center">
                Publications
              </h1>
              <p className="text-gray-500 mt-2">Journal articles and research papers.</p>
            </div>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                  <FaBookOpen />
                </div>
                Journal Articles
              </h2>
              
              {publications.length > 0 ? (
                <div className="space-y-6">
                  {publications.map((pub) => (
                    <div key={pub._id.toString()} className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-100/50 transition-colors group">
                      <FaQuoteLeft className="text-gray-300 text-xl mr-4 flex-shrink-0 mt-1 group-hover:text-[#8B0000]/40 transition-colors" />
                      <p className="text-gray-700 leading-relaxed text-[15px]">
                        {pub.citation}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-500">No publications listed yet.</p>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
