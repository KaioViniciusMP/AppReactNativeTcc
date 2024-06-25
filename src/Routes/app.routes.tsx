import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import HistoricoTransacoes from "../pages/HistoricoTransacoes";


const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='HistoricoTransacoes' component={HistoricoTransacoes} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}