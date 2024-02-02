import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import RecipeScreen from '../Screens/RecipeScreen';
import RecipeDetails from '../Screens/RecipeDetails';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return ( 
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="recipe" component={RecipeScreen}/>
          <Stack.Screen name='recipedetails' component={RecipeDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
     );
}
 
export default AppNavigator;