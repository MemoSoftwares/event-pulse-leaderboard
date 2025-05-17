
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-university-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">
              <div className="text-lg font-semibold">FCT Open Day 2025</div>
              <div className="text-md font-medium text-gray-100">
                Computer Science Degree Program
              </div>
            </h3>
            <p className="text-sm text-gray-300">
              Join our exciting university events and challenge yourself with
              our quizzes and competitions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/questions"
                  className="text-gray-300 hover:text-white transition"
                >
                  Quiz
                </a>
              </li>
              <li>
                <a
                  href="/leaderboard"
                  className="text-gray-300 hover:text-white transition"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="/chatbot" className="text-gray-300 hover:text-white transition">Chatbot</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>University Campus</p>
              <p>123 Education St.</p>
              <p>University City, UC 12345</p>
              <p className="mt-2">Email: events@university.edu</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} University Events. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
