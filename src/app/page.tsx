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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0ffd7]">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
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
                    <FaEnvelope className="text-[#8B0000] mr-2" />
                    <Link
                      href="mailto:abdullah1810037@gmail.com"
                      className="text-[#8B0000] hover:underline"
                    >
                      abdullah1810037@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-[#8B0000] mr-2" />
                    <a href="tel:+8801521707828" className="hover:underline">
                      +880 1521707828
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaFileAlt className="text-[#8B0000] mr-2" />
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
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                  <Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                  <Link
                    href="https://www.researchgate.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ResearchGate"
                  >
                    <FaResearchgate className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                  <Link
                    href="https://scholar.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Scholar"
                  >
                    <FaGoogle className="text-2xl text-[#8B0000] hover:text-[#A80000]" />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-[#8B0000] mb-2 flex items-center">
                    <FaUserTie className="mr-2" /> Career Objective
                  </h2>
                  <p className="text-gray-700">
                    To establish a successful career in the academic sectors by
                    leveraging my strong Mechanical Engineering skills,
                    analytical mindset, and passion for applying knowledge for
                    academic expansion. I am eager to contribute to the teaching
                    and research activities within the department of Mechanical
                    Engineering.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-[#8B0000] mb-2 flex items-center">
                    <FaUserTie className="mr-2" /> Current Position
                  </h2>
                  <div className="pl-6">
                    <p className="font-semibold">Adjunct Lecturer</p>
                    <p>Department of Mechanical Engineering,</p>
                    <p>
                      Bangladesh University of Engineering and Technology
                      (BUET), Dhaka-1000
                    </p>
                    <p className="text-gray-600">August 2024 - Present</p>
                  </div>
                </section>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">
                    Master of Science in Mechanical Engineering
                  </h3>
                  <p>
                    Bangladesh University of Engineering and Technology (BUET),
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-gray-600">September 2024 - Present</p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Bachelor of Science in Mechanical Engineering
                  </h3>
                  <p>
                    Bangladesh University of Engineering and Technology (BUET),
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-gray-600">April 2019 - July 2024</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>CGPA: 3.98/4.00</li>
                    <li>Merit position: 2/180</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Higher Secondary Certificate (Science)
                  </h3>
                  <p>Dhaka City College, Dhaka - 2018</p>
                  <p>GPA: 5.00/5.00</p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Secondary School Certificate (Science)
                  </h3>
                  <p>Rasullahbad U.A. Khan High School - 2016</p>
                  <p>GPA: 5.00/5.00</p>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaTrophy className="mr-2" /> Achievements
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Recipient, Dean's list award for 4 levels (January 2019, July
                  2021, January 2022, January 2023) From Bangladesh University
                  of Engineering and Technology.
                </li>
                <li>
                  Recipient, University merit award for seven consecutive
                  semesters (January 2019, January 2020, January 2021, July
                  2021, January 2022, July 2022, January 2023) from Bangladesh
                  University of Engineering and Technology.
                </li>
                <li>
                  Recipient, Board-General scholarship in the Secondary School
                  Certificate (SSC-2016) examination under Comilla Board.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaCertificate className="mr-2" /> Skills and Certification
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Certified in Short Course on Research Skill Development
                  organized by Director of Continuing Education (DCE), BUET.
                </li>
                <li>
                  COMSOL Multiphysics: Expertise in simulating using COMSOL
                  Multiphysics.
                </li>
                <li>MATLAB: Certified by Mathworks.</li>
                <li>
                  CAD software: Proficient in using AutoCAD and SolidWorks for
                  designing.
                </li>
                <li>
                  MS Office: Prolific knowledge about Microsoft Word, Excel and
                  PowerPoint.
                </li>
                <li>
                  Adobe Illustrator: Intermediate knowledge of illustrator for
                  designing.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaLanguage className="mr-2" /> Language Proficiency
              </h2>
              <p>
                Mother Tongue: Bengali. Fluent in Bengali and full working
                knowledge of English.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#8B0000] mb-4 flex items-center">
                <FaUserTie className="mr-2" /> References
              </h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Dr. Mohammad Nasim Hasan</h3>
                  <p>
                    Professor, Department of Mechanical Engineering, BUET,
                    Dhaka-1000
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:nasim@me.buet.ac.bd"
                      className="text-[#8B0000] hover:underline"
                    >
                      nasim@me.buet.ac.bd
                    </a>
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Dr. Mohammad Jane Alam Khan</h3>
                  <p>
                    Assistant Professor, Department of Mechanical Engineering,
                    BUET, Dhaka-1000
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:ronin@me.buet.ac.bd"
                      className="text-[#8B0000] hover:underline"
                    >
                      ronin@me.buet.ac.bd
                    </a>
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
