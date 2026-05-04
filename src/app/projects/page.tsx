import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaProjectDiagram } from "react-icons/fa";
import connectToDatabase from "@/lib/db";
import Project from "@/models/Project";

export const metadata = {
  title: "Projects | Muhammad Abdullah",
  description: "Explore Muhammad Abdullah's engineering projects.",
};

export default async function Projects() {
  await connectToDatabase();
  const projects = await Project.find({}).sort({ createdAt: -1 });

  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">Projects</h1>
            {projects.map((project) => (
              <section key={project._id.toString()} className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                  <FaProjectDiagram className="mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{project.title}</span>
                </h2>
                <p className="mb-2 font-semibold">
                  <time dateTime={project.date}>{project.date}</time>
                </p>
                <p className="mb-4 whitespace-pre-wrap">{project.description}</p>
              </section>
            ))}
            {projects.length === 0 && (
              <p className="text-gray-600">No projects listed yet.</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
