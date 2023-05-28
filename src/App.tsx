import { 
  Authenticator, 
  Button, 
  defaultDarkModeOverride,
  Flex, 
  Heading, 
  Image, 
  Text, 
  ThemeProvider, 
  useTheme, 
  View, 
  withAuthenticator 
} from '@aws-amplify/ui-react';

import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const theme = {
    name: 'allDarkTheme',
    overrides: [defaultDarkModeOverride]
  };
  const { tokens } = useTheme();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.attributes?.email}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
