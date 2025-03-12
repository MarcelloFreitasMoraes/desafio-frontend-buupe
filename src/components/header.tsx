import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuthStore } from '../../auth/useStore';

// const entityLinks = [
//   { href: "/people", label: "People" },
//   { href: "/films", label: "Films" },
//   { href: "/species", label: "Species" },
// ];

const Header: React.FC = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuthStore();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

  return (
    <header className="p-4 bg-blue-500">
      <nav className="container flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex justify-center sm:justify-start w-full sm:w-auto">
          <img src={''} alt="logo" className="h-8 mx-auto sm:mx-0 mb-4 sm:mb-0" />
        </Link>
        {/* <ul className="flex gap-6 pt-4 sm:pt-0 justify-center sm:justify-end w-full sm:w-auto">
          {entityLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-lg text-white hover:text-black transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}
        <div>
          {/* <h4 className='text-white cursor-pointer' onClick={handleLogout}>Logout</h4> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
