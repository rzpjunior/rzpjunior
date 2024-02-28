const Header: React.FC = () => {
    return (
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">rzpjunior</span>
          </div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  