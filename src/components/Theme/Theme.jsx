import React, { useLayoutEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import styles from '../Styles/Theme.module.css';
import { MdOutlineLightMode } from 'react-icons/md';

/* 
 🌗 This component toggles between light and dark themes and persists 
  the selected theme using local storage. 🌗
 
 Key Points:
   **useLayoutEffect Hook**: 
     🖼️ Used to interact with the DOM synchronously, ensuring that changes to the DOM 
      are made before the browser has a chance to paint.
     🕒 This is crucial when the DOM needs to be updated immediately after the state change.
*/

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('selectedTheme') || 'light';
  });

  useLayoutEffect(() => {
    document.querySelector('body').setAttribute('theme-data', theme);
    localStorage.setItem('selectedTheme', theme);
  }, [theme]);

  const themeToogle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      style={
        theme === 'dark'
          ? { backgroundColor: '#333', color: '#fff' }
          : { backgroundColor: '#fff', color: '#333' }
      }
      className={styles.themeToogleBtn}
      onClick={themeToogle}
    >
      {theme === 'dark' ? (
        <MdDarkMode size={30} />
      ) : (
        <MdOutlineLightMode size={30} />
      )}
    </button>
  );
};

export default Theme;
