import Link from 'next/link';

export default function Navigation() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">
              Go Face Games
            </Link>
            <div className="flex space-x-8">
              <Link href="/signified" className="hover:text-gray-300 transition-colors duration-200">
                Signified
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">
                About
              </Link>
              <Link href="/team" className="hover:text-gray-300 transition-colors duration-200">
                Team
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }