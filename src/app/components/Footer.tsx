import React from 'react'

const Footer: React.FC = () => {
    return (
      <footer className=" text-gray-400 text-center py-2">
        <p className="text-md space-x-4">
          © {new Date().getFullYear()} Ifrah Ashraf. All rights reserved.
        </p>
      </footer>
    );
  };

export default Footer
