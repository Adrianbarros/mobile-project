import { NavigationContainer } from '@react-navigation/native'
import { HomeStack } from './src/navigation/homeStack';
import NavegationBar from './src/components/navegationBar';

export default function App() {
  return (
    <NavigationContainer  >
      <HomeStack />
      <NavegationBar />
    </NavigationContainer>

  );
}


