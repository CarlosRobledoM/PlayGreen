import {ThemeProps} from './index'
import { createGlobalStyle, withTheme } from 'styled-components';

type GlobalThemeProps = {
    theme: ThemeProps;
  };

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #181828;
    --dark-backgroundSecondary: #2C2B3E;
    --dark-text: #FEFEFE;
    --dark-primary: #FFFFFF; 
    --light-complementary: #777777;
    --dark-error: #D36060; 

    //light-mode
    --light-background: #F3F3F3;
    --light-backgroundSecondary: #ffffff;
    --light-text: #161617;
    --light-primary: #063BA8; 
    --light-complementary: #777777;
    --light-error: #D36060;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body  {
    height: 100vh;
    width: 80vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #home  {
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }
  h1 {
    font-size: 3rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  p { 
    font-size: 1rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  input {
    height: 3rem;
    width: 100%;
    border-radius: 1rem;
    border: none;
    padding: 0rem 1rem;
    margin: 0.5rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundSecondary};
  }
  a {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  button {
    background: linear-gradient(#236BFE, #0D4ED3);
    padding: 1rem 2rem;
    border: none;
    border-radius: 1rem;
    margin: 1rem 0rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  #secondaryButton {
    background: ${({ theme }: GlobalThemeProps) => theme.backgroundSecondary};
  }
  #secondaryBackground {
    background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundSecondary};
  }
  a:active {
    color: ${({ theme }: GlobalThemeProps) => theme.primary};
  }
`;

export default withTheme(globalStyle);