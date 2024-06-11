import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";


const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}