import { useAuthStore } from '@/auth/useStore';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="p-4 bg-blue-500">
      <nav className="flex flex-col sm:flex-row justify-between items-center">
        <Link to="/products" className="text-2xl font-bold flex justify-center sm:justify-start w-full sm:w-auto">
          <img src={'/logo.png'} alt="logo" className="h-20 w-full mx-auto sm:mx-0 mb-4 sm:mb-0" />
        </Link>
        <div>
          <h4 className='text-white cursor-pointer' onClick={handleLogout}>Sair</h4> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
