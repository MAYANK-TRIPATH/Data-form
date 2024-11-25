

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800  py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-100">100x Forms</h2>
          <p className="text-sm text-gray-400 mt-1">&copy; 2025 All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end">
          <a href="#" className="text-gray-400 hover:text-gray-600 mx-3 my-2">About Us</a>
          <a href="#" className="text-gray-400 hover:text-gray-600 mx-3 my-2">Services</a>
          <a href="#" className="text-gray-400 hover:text-gray-600 mx-3 my-2">Contact</a>
          <a href="#" className="text-gray-400 hover:text-gray-600 mx-3 my-2">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  )
}

