import { useState, useEffect } from 'react';

function Theme() {



  useEffect(() => {
   
    const darkTheme = 'dark'
    localStorage.setItem('theme', darkTheme)
    document.documentElement.classList.add(darkTheme)
  }, []);

  return null

}

export default Theme;
