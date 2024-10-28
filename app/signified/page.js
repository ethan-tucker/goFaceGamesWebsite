'use client';

export default function Signified() {
  const galleryItems = [
    {
      image: "/resources/estateSplash.png",
      title: "The Estate",
      description: "A sprawling Victorian mansion serves as the central location for our psychological horror game. Players will uncover dark secrets within its walls while dealing with their own internal struggles. The estate's architecture reflects the fractured psyche of our protagonist."
    },
    {
      image: "/resources/theaterScreen.png",
      title: "Dynamic Interactions",
      description: "Experience a responsive environment where your choices matter. The game adapts to your playstyle and decisions, creating a personalized horror experience. The estate itself seems to react to your presence, with dynamic events that respond to player behavior."
    },
    {
      image: "/resources/bossCombat.jpeg",
      title: "Psychological Elements",
      description: "Delve deep into the protagonist's mind as you navigate through psychological challenges. The game's unique mechanics reflect the character's mental state, creating an immersive and unsettling experience. Every decision affects both the story and the character's psychological well-being."
    },
    {
      image: "/resources/combatScreen.png",
      title: "Environmental Storytelling",
      description: "Discover the narrative through careful observation of your surroundings. The estate holds countless secrets in its architecture and decor. Every room tells a story, and every artifact holds significance. Players must piece together the truth from environmental clues."
    },
    {
      image: "/resources/combatScreenPretty.png",
      title: "Immersive Atmosphere",
      description: "Get lost in a meticulously crafted atmosphere that blends visual and audio elements. The game's sound design and visual effects work together to create a deeply unsettling experience. Every shadow and sound has been carefully designed to enhance the psychological horror."
    }
  ];

  return (
    <div className="w-full pt-16">
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="relative w-full"
          style={{
            height: '100vh'
          }}
        >
          {/* Background Image Container */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex justify-center" style={{ paddingTop: '15vh' }}> {/* Adjusted positioning */}
            <div className="max-w-xl mx-4"> {/* Reduced width from 2xl to xl */}
              <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg shadow-xl text-center"> {/* Reduced padding */}
                <h2 className="text-3xl font-bold mb-3 text-white">{item.title}</h2> {/* Slightly smaller title */}
                <p className="text-base text-white leading-relaxed"> {/* Smaller text */}
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}