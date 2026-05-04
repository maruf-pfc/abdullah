import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import connectToDatabase from "@/lib/db";
import Attachment from "@/models/Attachment";

export const metadata = {
  title: "Industrial Attachment | Muhammad Abdullah",
  description: "Learn about Muhammad Abdullah's industrial attachments.",
};

export default async function IndustrialAttachment() {
  await connectToDatabase();
  const attachments = await Attachment.find({}).sort({ createdAt: -1 });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row max-w-[1400px] w-full mx-auto relative">
        <Navigation />
        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto w-full">
          <article className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Industrial Attachment</h1>
              <p className="text-gray-500 mt-2">Professional training and industrial experiences.</p>
            </div>

            <div className="space-y-6">
              {attachments.map((attachment) => (
                <section key={attachment._id.toString()} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start leading-tight">
                    <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-4 text-[#8B0000] flex-shrink-0 mt-0.5">
                      <FaBriefcase aria-hidden="true" />
                    </div>
                    <span>{attachment.company}</span>
                  </h2>
                  
                  <div className="flex items-center text-sm font-medium text-[#8B0000] mb-4 pl-12">
                    <FaCalendarAlt className="mr-2 opacity-70" />
                    <time dateTime={attachment.date}>{attachment.date}</time>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-[15px] pl-12">
                    {attachment.description}
                  </p>
                </section>
              ))}
              
              {attachments.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500">No industrial attachments listed yet.</p>
                </div>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
