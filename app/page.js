import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'url("/resources/estateSplash.png")',
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
      <div className="relative z-10 max-w-2xl mx-4">
        <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Go Face Games</h1>
          <p className="text-lg mb-6">
          We are group of volunteer game developers working on creating games to gain experience and break into the gaming industry. Our first game, Signified, can be previewed here:
          </p>
          <Link 
            href="/signified" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200"
          >
            Preview Signified <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}