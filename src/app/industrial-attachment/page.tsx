import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaBriefcase, FaIndustry } from "react-icons/fa";
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
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              Industrial Attachment
            </h1>
            {attachments.map((attachment) => (
              <section key={attachment._id.toString()} className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                  <FaBriefcase className="mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{attachment.company}</span>
                </h2>
                <p className="mb-2 font-semibold">
                  <time dateTime={attachment.date}>{attachment.date}</time>
                </p>
                <p className="mb-4 whitespace-pre-wrap">{attachment.description}</p>
              </section>
            ))}
            {attachments.length === 0 && (
              <p className="text-gray-600">No industrial attachments listed yet.</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
