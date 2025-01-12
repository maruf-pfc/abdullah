import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaBriefcase, FaIndustry } from "react-icons/fa";

export const metadata = {
  title: "Industrial Attachment | Muhammad Abdullah",
  description:
    "Learn about Muhammad Abdullah's industrial attachment experiences at British American Tobacco Bangladesh and Dockyard and Engineering Works.",
};

export default function IndustrialAttachment() {
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
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaBriefcase className="mr-2" aria-hidden="true" />
                <span>British American Tobacco Bangladesh (BATB), Dhaka</span>
              </h2>
              <p className="mb-2 font-semibold">
                <time dateTime="2023-11">November 2023</time>
              </p>
              <p className="mb-4">
                I was attached to both Secondary Manufacturing Department (SMD)
                and Filter Manufacturing Department (FMD) in BATB for 17 days.
                There, I observed practically how various technical components
                work. Moreover, I worked on preparing the machines for IWS
                Phase-2.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaIndustry className="mr-2" aria-hidden="true" />
                <span>Dockyard and Engineering Works (DEW), Narayanganj</span>
              </h2>
              <p className="mb-2 font-semibold">
                <time dateTime="2022-06">June 2022</time>
              </p>
              <p className="mb-4">
                A day-long tour to visit various parts of the industry.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
