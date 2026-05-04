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
    // default empty profile if none in DB
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
    <div className="min-h-screen flex flex-col bg-[#f0ffd7]">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <article className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/abdullah.jpg"
                  alt="Muhammad Abdullah"
                  width={300}
                  height={400}
                  className="w-full rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-bold text-[#8B0000]">
                    Muhammad Abdullah
                  </h1>
                  <p className="text-lg text-gray-600">Adjunct Lecturer</p>
                  <p className="text-sm text-gray-500">
                    Department of Mechanical Engineering
                  </p>
                  <p className="text-sm text-gray-500">
                    BUET, Dhaka-1000, Bangladesh
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <FaEnvelope
                      className="text-[#8B0000] mr-2"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:abdullah1810037@gmail.com"
                      className="text-[#8B0000] hover:underline"
                    >
                      abdullah1810037@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <FaPhone
                      className="text-[#8B0000] mr-2"
                      aria-hidden="true"
                    />
                    <a href="tel:+8801521707828" className="hover:underline">
                      +880 1521707828
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaFileAlt
                      className="text-[#8B0000] mr-2"
                      aria-hidden="true"
                    />
                    <Link
                      href="https://docs.google.com/file/d/1cJvvlDo9BJJLOQ1v0zcVs-exFzutvdDc/edit?usp=docslist_api&filetype=msword"
                      className="text-[#8B0000] hover:underline"
                      download={true}
                    >
                      Curriculum Vitae
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/muhammad-abdullah-19b729200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                  <Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                  <Link
                    href="https://www.researchgate.net/profile/Muhammad-Abdullah-360"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ResearchGate Profile"
                  >
                    <FaResearchgate className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                  <Link
                    href="https://scholar.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Scholar Profile"
                  >
                    <FaGoogle className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-[#8B0000] mb-2 flex items-center">
                    <FaUserTie className="mr-2" aria-hidden="true" /> Career Objective
                  </h2>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {profile.careerObjective}
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-[#8B0000] mb-2 flex items-center">
                    <FaUserTie className="mr-2" aria-hidden="true" /> Current Position
                  </h2>
                  <div className="pl-6">
                    <p className="font-semibold">{profile.currentPosition?.title}</p>
                    <p>{profile.currentPosition?.department}</p>
                    <p>{profile.currentPosition?.institution}</p>
                    <p className="text-gray-600">{profile.currentPosition?.period}</p>
                  </div>
                </section>
              </div>
            </section>

            {/* In the previous page there was education, achievements etc. */}
            {profile.achievements && profile.achievements.length > 0 && (
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                  <FaTrophy className="mr-2" aria-hidden="true" /> Achievements
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {profile.achievements.map((ach: string, idx: number) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </section>
            )}

            {profile.skills && profile.skills.length > 0 && (
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                  <FaCertificate className="mr-2" aria-hidden="true" /> Skills and
                  Certification
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {profile.skills.map((skill: string, idx: number) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {profile.languages && (
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                  <FaLanguage className="mr-2" aria-hidden="true" /> Language
                  Proficiency
                </h2>
                <p>{profile.languages}</p>
              </section>
            )}

          </article>
        </main>
      </div>
    </div>
  );
}
