import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { FaBriefcase, FaIndustry } from "react-icons/fa";

export default function IndustrialAttachment() {
  return (
    <div className="min-h-screen bg-[#f0ffd7]">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#8B0000]">
              INDUSTRIAL ATTACHMENT
            </h1>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaBriefcase className="mr-2" /> British American Tobacco
                Bangladesh (BATB), Dhaka
              </h2>
              <p className="mb-2 font-semibold">November 2023</p>
              <p className="mb-4">
                I was attached to both Secondary Manufacturing Department (SMD)
                and Filter Manufacturing Department (FMD) in BATB for 17 days.
                There, I have observed practically how various technical
                component works. Moreover, I have worked for preparing the
                machines for IWS Phase-2.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaIndustry className="mr-2" /> Dockyard and Engineering works
                (DEW), Narayanganj
              </h2>
              <p className="mb-2 font-semibold">June 2022</p>
              <p className="mb-4">
                A day long tour to visit various parts of the industry.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
