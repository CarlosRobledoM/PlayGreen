import React from 'react';
import Router from './router';
import { ThemeContext } from './theme/index';
import GlobaStyle from './theme/global'

export default function App() {
  return (
    <ThemeContext>
      <GlobaStyle />
      <Router />
    </ThemeContext>
  );
}


