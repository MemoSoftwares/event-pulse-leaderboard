import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-university-800 to-university-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About CSSA
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Computer Science Student Association - University of Kelaniya
            </p>
          </div>
        </section>

        {/* About CSSA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-university-800 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-600 mb-4">
                  The Computer Science Student Association (CSSA) is the premier
                  student body representing computing students at the Faculty of
                  Computing & Technology, University of Kelaniya.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, CSSA has been bridging the gap between
                  academic learning and industry expectations by organizing
                  workshops, hackathons, coding competitions, and tech talks
                  that enhance students' practical knowledge.
                </p>
                <p className="text-gray-600">
                  Our association is run by students, for students, with the
                  guidance of faculty advisors who help ensure our activities
                  align with the curriculum and industry trends.
                </p>
              </div>

              <div className="md:w-1/2">
                <Card className="overflow-hidden border-none shadow-lg card-hover">
                  <CardContent className="p-0">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="CSSA members collaborating"
                      className="w-full h-80 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-university-800 mb-12">
              What We Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-university-800 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-university-800 mb-2">
                    Tech Workshops
                  </h3>
                  <p className="text-gray-600">
                    Hands-on workshops on emerging technologies, programming
                    languages, and tools to help students stay updated with
                    industry trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-university-800 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-university-800 mb-2">
                    Coding Competitions
                  </h3>
                  <p className="text-gray-600">
                    Regular coding challenges and hackathons to test
                    problem-solving skills and encourage competitive programming
                    among students.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-university-800 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-university-800 mb-2">
                    Industry Networking
                  </h3>
                  <p className="text-gray-600">
                    Connecting students with industry professionals through tech
                    talks, career fairs, and company visits for internship and
                    job opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-university-800 mb-4">
                Our Proud Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrating milestones that showcase our excellence in
                technology and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Achievement 1 */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="images/intellihack.jpg"
                    alt="Intellihack participants"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-500">
                      2024
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Intellihack 4.0
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sri Lanka's premier ML hackathon where we mentored 50+ teams
                    to build AI solutions for social good. Our participants
                    developed innovative models for healthcare diagnostics and
                    environmental monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                      AI Innovation
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Achievement 2 */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="images/cyberrush.jpg"
                    alt="Cyber Rush competition"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-500">
                      2023
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Cyber Rush Code Jam
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our cybersecurity team placed 1st nationally by developing
                    an advanced threat detection system using behavioral
                    analysis, earning recognition from Sri Lanka CERT.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                      Cybersecurity
                    </span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                      Ethical Hacking
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Achievement 3 */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="images/genesiz.jpg"
                    alt="Genesiz robotics event"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-500">
                      2022
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Genesiz Robotics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pioneered autonomous robotics solutions with our
                    award-winning swarm robotics platform that demonstrated
                    advanced coordination algorithms in industrial simulations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full">
                      Robotics
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full">
                      Automation
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Achievement 4 */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="images/intellihack-winning.webp"
                    alt="Intellihack winners"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-500">
                      2021-Present
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    GDSC Leadership
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Recognized as Sri Lanka's most active Google Developer
                    Student Club, hosting 100+ workshops on cutting-edge
                    technologies with 2000+ participants annually.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      Developer Community
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      Google Technologies
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Achievement 5 */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="images/group.jpg"
                    alt="Junior Hack participants"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-rose-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-500">
                      2020-Present
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Junior Hack
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our initiative to nurture young coders has trained 500+
                    school students in computational thinking, with several
                    winning national coding competitions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-rose-50 text-rose-600 text-xs font-medium rounded-full">
                      Education
                    </span>
                    <span className="px-3 py-1 bg-rose-50 text-rose-600 text-xs font-medium rounded-full">
                      Youth Coding
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Achievement 6 */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="images/ieee.jpg"
                    alt="IEEE collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-500">
                      2019-Present
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    IEEE Partnership
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Published 15+ peer-reviewed papers in IEEE conferences on AI
                    and IoT, establishing our department as a research hub in
                    Sri Lanka's academic community.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 text-xs font-medium rounded-full">
                      Research
                    </span>
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 text-xs font-medium rounded-full">
                      Academic Publishing
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-university-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved with CSSA</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Interested in joining the Computer Science Student Association or
              collaborating on events? Reach out to us today!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
