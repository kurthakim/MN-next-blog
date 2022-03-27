import React from 'react';

const DarkTheme = () => {
  return (
    <style jsx global>{`
      /* Dark Theme */
      :root {
        --background-color: rgb(20, 20, 20);
        --link-color: rgb(250, 215, 19);
        --text-color: rgb(228, 228, 228);
      }
    `}</style>
  );
};

export default DarkTheme;
