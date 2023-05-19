import React from 'react';
import { useEffect, useState, ReactNode } from 'react';
import { createGlobalStyle, withTheme, ThemeProvider } from 'styled-components';

export interface ThemeProps {
    background: string;
    backgroundSecondary: string;
    text: string;
    primary: string;
    complementary: string;
    error: string;
  }
  
export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',
    backgroundSecondary: 'var(--dark-backgroundSecondary)',
    text: 'var(--dark-text)',
    primary: 'var(--dark-primary)',
    complementary: 'var(--dark-complementary)',
    error: 'var(--dark-error)'
  };
  
export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    backgroundSecondary: 'var(--light-backgroundSecondary)',
    text: 'var(--light-text)',
    primary: 'var(--light-primary)',
    complementary: 'var(--light-complementary)',
    error: 'var(--light-error)'
  };

type userProviderProps = {children : ReactNode}

const useThemeMode = () => {
  const [theme, setTheme] = useState('dark');
  
  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

const themeToggler = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, themeToggler };
};

export function ThemeContext({ children } : userProviderProps ){
  const { theme } = useThemeMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;
  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};