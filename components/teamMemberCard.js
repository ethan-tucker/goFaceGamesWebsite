'use client';

export default function TeamMemberCard({ member }) {
  const handlePortfolioClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="p-4 text-center">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{member.title}</p>
        {member.portfolio && <button
          onClick={() => handlePortfolioClick(member.portfolio)}
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          View Portfolio →
        </button>}
      </div>
    </div>
  );
}