import React from 'react'

const Footer: React.FC = () => {
    return (
      <footer className=" text-gray-400 text-center py-2 mb-0">
        <p className="text-md ">
          © {new Date().getFullYear()} Ifrah Ashraf. All rights reserved.
        </p>
      </footer>
    );
  };

export default Footer
