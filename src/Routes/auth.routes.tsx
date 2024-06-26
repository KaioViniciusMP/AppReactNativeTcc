import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import PageEntrada from "../pages/Entrada";
import Cadastro from "../pages/Cadastro";

export type AuthStackParamList = {
    Entrada: undefined,
    Login: undefined,
    Cadastro: undefined
};

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Entrada' component={PageEntrada} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}