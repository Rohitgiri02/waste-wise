import React from "react";

const Dashboard = () => {
  // Mock data for demonstration
  const user = {
    name: "Rohitgiri",
    email: "rohit.giri@example.com",
    avatar: "https://via.placeholder.com/100",
    rank: 2,
    points: 950,
    rewards: [
      { id: 1, name: "Recycler Badge", description: "Recycled 10 items" },
      { id: 2, name: "Eco Warrior", description: "Saved 50 kg of e-waste" },
    ],
    tags: ["Sustainability", "Eco-Friendly", "Waste Saver"],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Welcome Banner */}
      <section className="bg-green-600 text-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
            <p className="text-sm">Every action counts towards a greener planet.</p>
          </div>
        </div>
      </section>

      {/* Main Dashboard Sections */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rewards Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600">Your Rewards</h2>
          <ul className="mt-4 space-y-4">
            {user.rewards.map((reward) => (
              <li
                key={reward.id}
                className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold">{reward.name}</h3>
                <p className="text-sm text-gray-600">{reward.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Ranking Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600">Your Ranking</h2>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-4xl font-bold text-green-600">{user.rank}</p>
            <p className="text-sm text-gray-600">Global Ranking</p>
            <p className="mt-2 text-sm text-gray-500">
              Points: <span className="font-semibold">{user.points}</span>
            </p>
          </div>
        </section>

        {/* Tags Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600">Your Tags</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {user.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* User Details */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-green-600">Your Details</h2>
        <div className="mt-4 space-y-2">
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Points:</span> {user.points}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
