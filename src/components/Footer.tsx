import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Tarun Rana. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
