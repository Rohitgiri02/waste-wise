import React, { useState, useEffect } from "react";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1500); // Animation duration: 1.5 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className={`min-h-screen bg-gray-100 text-gray-800 ${isAnimating ? "overflow-hidden" : ""}`}>
      {/* Full-Screen Opening Animation */}
      {isAnimating && (
        <div className="fixed inset-0 z-50 bg-green-600 flex items-center justify-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white animate-bounce"
          >
            Waste Wise 🌍
          </h1>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Be Waste Wise, Save the Planet 🌍
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join us in revolutionizing e-waste management through gamification.
          </p>
          <button
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200"
          >
            Get Started
          </button>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 px-10 bg-white">
          <h2 className="text-3xl font-bold text-center text-green-600">
            Achievements
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Achievement Card */}
            {["Recycler Level 1", "E-Waste Warrior", "Sustainability Champion"].map(
              (achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-100 shadow-md p-6 rounded-lg text-center hover:scale-105 transition-transform duration-200"
                >
                  <h3 className="text-xl font-semibold">{achievement}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {index === 0
                      ? "Earned by recycling 5 devices."
                      : index === 1
                      ? "For completing a community clean-up drive."
                      : "Achieved after saving 100 kg of e-waste."}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-green-600">
            About Waste Wise
          </h2>
          <p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto">
            Waste Wise is a platform designed to make e-waste management
            rewarding and engaging. Our mission is to minimize e-waste while
            empowering individuals to make sustainable choices through
            gamification and community collaboration.
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-green-700 text-white py-6 text-center">
          <p>© 2024 Waste Wise. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
