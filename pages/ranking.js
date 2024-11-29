import React from "react";

const Leaderboard = ({ rankings, currentUser }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">Leaderboard</h1>
          <p className="text-gray-600">
            See how you rank among the top contributors!
          </p>
        </header>

        {/* Leaderboard Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    user.id === currentUser.id
                      ? "bg-green-100"
                      : "bg-white hover:bg-gray-50"
                  } transition`}
                >
                  <td className="py-3 px-4 font-semibold">{index + 1}</td>
                  <td className="py-3 px-4 flex items-center space-x-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border"
                    />
                    <span>{user.name}</span>
                  </td>
                  <td className="py-3 px-4 font-semibold">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Current User Highlight */}
        <div className="mt-6 bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {currentUser.name}
              </h3>
              <p className="text-sm text-gray-600">Your current rank</p>
            </div>
          </div>
          <span className="text-lg font-bold text-green-600">
            {currentUser.rank} / {rankings.length}
          </span>
        </div>
      </div>
    </div>
  );
};

// Example Usage
// Mock Data
const mockRankings = [
  {
    id: 1,
    name: "Anshu",
    avatar: "https://via.placeholder.com/40",
    points: 1500,
  },
  {
    id: 2,
    name: "rohit giri",
    avatar: "https://via.placeholder.com/40",
    points: 950,
  },
  {
    id: 3,
    name: "ritik",
    avatar: "https://via.placeholder.com/40",
    points: 800,
  },
];

const mockCurrentUser = {
  id: 4,
  name: "You",
  avatar: "https://via.placeholder.com/40",
  points: 950,
  rank: 2,
};

// Page Component
const LeaderboardPage = () => (
  <Leaderboard rankings={mockRankings} currentUser={mockCurrentUser} />
);

export default LeaderboardPage;
