import React, { useEffect, useState } from 'react';

function usePreference() {
  const [preferredColorScheme, setPreferredColorScheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      setPreferredColorScheme(event.matches ? 'dark' : 'light');
    };

    mediaQueryList.addEventListener('change', handleChange);
    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return [preferredColorScheme, setPreferredColorScheme]
}

export default usePreference;
