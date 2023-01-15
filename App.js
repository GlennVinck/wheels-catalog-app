import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Details from "./screens/Details";
import ShoppingCartIcon from "./components/ShoppingCart";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

/*options={({ navigation }) => ({
    headerRight: () => (
        <ShoppingCartIcon navigation={navigation} />
    ),
})}*/
