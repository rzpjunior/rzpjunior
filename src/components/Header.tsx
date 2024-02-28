import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/">
            <div className="hover:text-gray-300">rzpjunior</div>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <div className="hover:text-gray-300">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:text-gray-300">About</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;