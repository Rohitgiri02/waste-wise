import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          About Waste Wise 🌍
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering individuals and communities to manage e-waste responsibly.
        </p>
      </section>

      {/* Our Mission */}
      <section id="mission" className="py-16 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Our Mission
        </h2>
        <p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto">
          At Waste Wise, our mission is to revolutionize e-waste management
          through technology, gamification, and community-driven solutions. We
          aim to create a sustainable future where every individual plays a
          part in reducing e-waste and protecting the planet.
        </p>
      </section>

      {/* Our Story */}
      <section id="story" className="py-16 px-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Our Story
        </h2>
        <div className="mt-6 max-w-4xl mx-auto text-gray-700 space-y-4">
          <p>
            Waste Wise was born out of a desire to address the growing problem
            of electronic waste. With millions of devices discarded every year,
            we recognized the urgent need for a platform that empowers people
            to recycle, refurbish, and responsibly dispose of e-waste.
          </p>
          <p>
            From a small idea to a growing movement, Waste Wise has brought
            together communities, businesses, and individuals to make
            sustainability a priority. With innovative features like gamified
            recycling, we’re making e-waste management accessible, rewarding,
            and fun.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Meet the Team
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member Card */}
          {[
            { name: "Rohit giri", role: "Handsome Boy", img: "https://via.placeholder.com/100" },
            { name: "Anshu", role: "Chief Sustainability Officer", img:"https://via.placeholder.com/100" },
            { name: "ujjwal", role: "Lead Developer", img: "https://via.placeholder.com/100" },
            { name: "akhand", role: "Lead Developer", img: "https://via.placeholder.com/100"},
            { name: "ritik", role: "Lead Developer", img: "https://via.placeholder.com/100" },
            { name: "rudra", role: "Lead Developer", img: "https://via.placeholder.com/100" },
            { name: "vivek", role: "Lead Developer", img: "https://via.placeholder.com/100" },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-16 px-10 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <h2 className="text-3xl font-bold">
          Join Us in Making a Difference
        </h2>
        <p className="mt-4 text-lg">
          Be a part of the Waste Wise community and take the first step toward
          a sustainable future. Together, we can create lasting change.
        </p>
        <button
          onClick={() => alert("Redirect to Sign Up or Community Page")}
          className="mt-6 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200"
        >
          Get Involved
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>© 2024 Waste Wise. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
