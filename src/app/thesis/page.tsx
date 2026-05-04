import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaGraduationCap, FaTools } from "react-icons/fa";
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
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              Thesis (Undergraduate)
            </h1>
            {theses.map((thesis) => (
              <section key={thesis._id.toString()} className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                  <FaGraduationCap className="mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{thesis.title}</span>
                </h2>
                <p className="mb-4 whitespace-pre-wrap">{thesis.description}</p>
                
                {thesis.software && thesis.software.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-[#8B0000] flex items-center">
                      <FaTools className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>Software utilized:</span>
                    </h3>
                    <ul className="list-disc pl-8">
                      {thesis.software.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            ))}
            {theses.length === 0 && (
              <p className="text-gray-600">No theses listed yet.</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
