export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CloudNine. All rights reserved.
        </p>

        <div className="flex space-x-6 text-sm">
          <a href="/privacy" className="hover:text-white transition">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white transition">
            Terms
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
