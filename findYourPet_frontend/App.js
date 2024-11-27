import { NavigationContainer } from '@react-navigation/native'
import { HomeStack } from './src/navigation/homeStack';
import { CategoriesStack } from './src/navigation/categoriesStack';

export default function App() {
  return (
    <NavigationContainer  >
      <HomeStack />
      <CategoriesStack />
    </NavigationContainer>

  );
}


