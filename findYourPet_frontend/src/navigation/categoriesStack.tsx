import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Categories'

const Stack = createStackNavigator();

export const CategoriesStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Categories" component={Category} />
        </Stack.Navigator>
    );
}