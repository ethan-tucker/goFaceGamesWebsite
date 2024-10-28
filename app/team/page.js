import TeamMemberCard from '../../components/teamMemberCard';

export default function Team() {
    const teamMembers = [
        {
          name: "Adam Klein",
          title: "Game Director",
          image: "/resources/adamHeadshot.png",
          portfolio: undefined,
        },
        {
          name: "Ethan Tucker",
          title: "Lead Game Designer",
          image: "/resources/ethanHeadshot.png",
          portfolio: "https://ethan-tucker.games"
        },
        {
          name: "Luke Leonard",
          title: "Game Developer",
          image: "/resources/lukeHeadshot.png",
          portfolio: undefined
        },
        {
          name: "Shannon Chou",
          title: "Narrative Lead",
          image: "/resources/shannonHeadshot.png",
          portfolio: undefined
        },
        // Add more team members as needed
      ];
  

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-gray-800 font-bold mb-12 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}