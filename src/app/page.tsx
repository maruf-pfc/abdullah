import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaGoogle,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaGraduationCap,
  FaTrophy,
  FaLanguage,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";
import connectToDatabase from "@/lib/db";
import Profile from "@/models/Profile";

export const metadata = {
  title: "Muhammad Abdullah - BUET Faculty Profile",
  description:
    "Professional profile of Muhammad Abdullah, Adjunct Lecturer at Bangladesh University of Engineering and Technology (BUET). Explore his academic background, achievements, and research interests.",
};

export default async function Home() {
  await connectToDatabase();
  let profile = await Profile.findOne({});
  if (!profile) {
    profile = {
      careerObjective: "To establish a successful career...",
      currentPosition: {
        title: "Adjunct Lecturer",
        department: "Department of Mechanical Engineering",
        institution: "BUET, Dhaka-1000",
        period: "August 2024 - Present",
      },
      educations: [],
      achievements: [],
      skills: [],
      languages: "Bengali, English",
      references: [],
    };
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row max-w-[1400px] w-full mx-auto relative">
        <Navigation />
        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto w-full">
          <article className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            
            {/* Hero Profile Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-10 hover:shadow-md transition-shadow duration-300">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative group overflow-hidden rounded-2xl ring-4 ring-gray-50 shadow-inner">
                  <Image
                    src="/abdullah.jpg"
                    alt="Muhammad Abdullah"
                    width={300}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6 text-center space-y-1">
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Muhammad Abdullah
                  </h1>
                  <p className="text-lg font-medium text-[#8B0000]">Adjunct Lecturer</p>
                  <p className="text-sm text-gray-500">Department of Mechanical Engineering</p>
                  <p className="text-sm text-gray-500">BUET, Dhaka-1000, Bangladesh</p>
                </div>
                
                {/* Contact Info */}
                <div className="mt-8 space-y-3 w-full bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                      <FaEnvelope aria-hidden="true" />
                    </div>
                    <Link href="mailto:abdullah1810037@gmail.com" className="text-gray-700 hover:text-[#8B0000] font-medium transition-colors break-all">
                      abdullah1810037@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                      <FaPhone aria-hidden="true" />
                    </div>
                    <a href="tel:+8801521707828" className="text-gray-700 hover:text-[#8B0000] font-medium transition-colors">
                      +880 1521707828
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                      <FaFileAlt aria-hidden="true" />
                    </div>
                    <Link
                      href="https://docs.google.com/file/d/1cJvvlDo9BJJLOQ1v0zcVs-exFzutvdDc/edit?usp=docslist_api&filetype=msword"
                      className="text-gray-700 hover:text-[#8B0000] font-medium transition-colors"
                      download={true}
                    >
                      Curriculum Vitae
                    </Link>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-6 flex justify-center space-x-4">
                  {[
                    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-abdullah-19b729200", label: "LinkedIn" },
                    { Icon: FaGithub, href: "https://github.com/", label: "GitHub" },
                    { Icon: FaResearchgate, href: "https://www.researchgate.net/profile/Muhammad-Abdullah-360", label: "ResearchGate" },
                    { Icon: FaGoogle, href: "https://scholar.google.com/", label: "Google Scholar" },
                  ].map(({ Icon, href, label }) => (
                    <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#8B0000] hover:border-[#8B0000] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                      <Icon className="text-xl" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center border-b border-gray-100 pb-2">
                    <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                      <FaUserTie aria-hidden="true" />
                    </div>
                    Career Objective
                  </h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-[15px]">
                    {profile.careerObjective}
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center border-b border-gray-100 pb-2">
                    <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                      <FaUserTie aria-hidden="true" />
                    </div>
                    Current Position
                  </h2>
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-lg">{profile.currentPosition?.title}</h3>
                    <p className="text-gray-700 mt-1">{profile.currentPosition?.department}</p>
                    <p className="text-gray-700">{profile.currentPosition?.institution}</p>
                    <p className="text-sm font-medium text-[#8B0000] mt-3 inline-block bg-[#8B0000]/10 px-3 py-1 rounded-full">
                      {profile.currentPosition?.period}
                    </p>
                  </div>
                </section>
              </div>
            </section>

            {/* Achievements */}
            {profile.achievements && profile.achievements.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                    <FaTrophy aria-hidden="true" />
                  </div>
                  Achievements
                </h2>
                <ul className="space-y-4">
                  {profile.achievements.map((ach: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#8B0000] mr-4"></span>
                      <span className="text-gray-600 leading-relaxed text-[15px]">{ach}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills */}
            {profile.skills && profile.skills.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                    <FaCertificate aria-hidden="true" />
                  </div>
                  Skills & Certification
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.skills.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#8B0000] mr-3"></span>
                      <span className="text-gray-700 text-[15px]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            {profile.languages && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-md bg-[#8B0000]/10 flex items-center justify-center mr-3 text-[#8B0000]">
                    <FaLanguage aria-hidden="true" />
                  </div>
                  Language Proficiency
                </h2>
                <p className="text-gray-600 text-[15px] bg-gray-50 p-4 rounded-xl inline-block border border-gray-100">
                  {profile.languages}
                </p>
              </section>
            )}

          </article>
        </main>
      </div>
    </div>
  );
}
