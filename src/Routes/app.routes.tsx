import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import HistoricoTransacoes from "../pages/HistoricoTransacoes";
import PageEscolherModalidade from "../pages/EscolherModalidade";
import PageConfiguracoes from "../pages/Configuracoes";
import PageAjuda from "../pages/Ajuda";
import PageEntradaFinanceiraExtra from "../pages/AdicionamentoRendaExtra";
import PageContasCorrentes from "../pages/ContasCorrentes";


const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='HistoricoTransacoes' component={HistoricoTransacoes} options={{headerShown: false}}/>
            <Stack.Screen name='EscolherModalidade' component={PageEscolherModalidade} options={{headerShown: false}}/>
            <Stack.Screen name='Configuracoes' component={PageConfiguracoes} options={{headerShown: false}}/>
            <Stack.Screen name='Ajuda' component={PageAjuda} options={{headerShown: false}}/>
            <Stack.Screen name='EntradaFinanceiraExtra' component={PageEntradaFinanceiraExtra} options={{headerShown: false}}/>
            <Stack.Screen name='ContasCorrentes' component={PageContasCorrentes} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}