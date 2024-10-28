export default function About() {
    return (
      <div 
        className="min-h-screen relative flex items-center justify-center pt-16"
        style={{
          backgroundImage: 'url("/resources/estateSplash.png")', // You might want to use a different image for About page
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-4"> {/* Increased max-width for longer text */}
          <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-white">About Go Face Games</h1>
            <div className="space-y-4 text-white">
              <p className="text-lg">
                Founded in 2021, GoFaceGames was born from a shared passion for creating meaningful gaming experiences. 
                We believe in the power of games to tell stories, create connections, and push creative boundaries.
              </p>
              <p className="text-lg">
                Our team brings together talented individuals from diverse backgrounds, united by our interest in making 
                great games and gaining experience in the gaming industry. Many of us are looking to build the necessary 
                skills for gaming industry jobs.
              </p>
              <p className="text-lg">
                Our first game, Signified, is the result of our collective thousands of hours of playing physical and 
                digital card games. We wanted to make our own unique take on the deck-building genre and we feel that 
                we have a distinct take to share.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }