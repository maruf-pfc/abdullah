import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaGraduationCap, FaTools, FaFileAlt } from "react-icons/fa";
import connectToDatabase from "@/lib/db";
import Thesis from "@/models/Thesis";

export const metadata = {
  title: "Thesis | Muhammad Abdullah",
  description: "Explore Muhammad Abdullah's thesis work.",
};

export default async function ThesisPage() {
  await connectToDatabase();
  const theses = await Thesis.find({}).sort({ createdAt: -1 });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row max-w-[1400px] w-full mx-auto relative">
        <Navigation />
        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto w-full">
          <article className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Thesis Work</h1>
              <p className="text-gray-500 mt-2">Undergraduate and graduate research theses.</p>
            </div>

            <div className="space-y-6">
              {theses.map((thesis) => (
                <section key={thesis._id.toString()} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-start leading-tight">
                    <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-4 text-[#8B0000] flex-shrink-0 mt-0.5">
                      <FaGraduationCap aria-hidden="true" />
                    </div>
                    <span>{thesis.title}</span>
                  </h2>
                  
                  <div className="pl-12">
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6">
                      <h3 className="flex items-center text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                        <FaFileAlt className="mr-2 text-gray-400" /> Abstract / Description
                      </h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-[15px]">
                        {thesis.description}
                      </p>
                    </div>
                    
                    {thesis.software && thesis.software.length > 0 && (
                      <div>
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center">
                          <FaTools className="mr-2 text-gray-400" aria-hidden="true" />
                          Software Utilized
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {thesis.software.map((s: string, idx: number) => (
                            <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              ))}
              
              {theses.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500">No theses listed yet.</p>
                </div>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
