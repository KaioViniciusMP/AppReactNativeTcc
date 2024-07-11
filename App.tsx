import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/Routes';
import { AuthProvider } from './src/context';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <StatusBar style="dark" />
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}