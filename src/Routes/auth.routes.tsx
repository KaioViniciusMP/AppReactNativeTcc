import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import PageEntrada from "../pages/Entrada";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Entrada' component={PageEntrada} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}