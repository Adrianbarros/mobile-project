import { NavigationContainer } from '@react-navigation/native'
import { HomeStack } from './src/navigation/homeStack';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>

  );
}


