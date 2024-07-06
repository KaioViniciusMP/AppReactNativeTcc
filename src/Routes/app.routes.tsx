import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home"
import HistoricoTransacoes from "../pages/HistoricoTransacoes";
import PageEscolherModalidade from "../pages/EscolherModalidade";
import PageConfiguracoes from "../pages/Configuracoes";
import PageAjuda from "../pages/Ajuda";
import PageEntradaFinanceiraExtra from "../pages/AdicionamentoRendaExtra";
import PageContasCorrentes from "../pages/ContasCorrentes";
import PageAdicionarContaCorrente from "../pages/AddContaCorrente";
import RelatarProblema from "../pages/RelatarProblema";
import PrivacidadeSeguranca from "../pages/PrivacidadeAndSeguranca";
import Tabs from "./tabbed.routes";
import Transferencia from "../pages/Transferencia";

export type AppStackParamList = {
    Tabs: undefined
    Home: undefined;
    HistoricoTransacoes: {
        param1: string; // Exemplo de parâmetro
        param2: number; // Outro exemplo de parâmetro
    };
    EscolherModalidade: undefined;
    Configuracoes: undefined;
    Ajuda: undefined;
    EntradaFinanceiraExtra: undefined;
    ContasCorrentes: undefined;
    AdicionarContaCorrente: undefined;
    RelatarProblema: undefined;
    PrivacidadeSeguranca: undefined;
    Transferencia:{
        localTransferencia: string;
    };
};



const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}} />

            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='HistoricoTransacoes' component={HistoricoTransacoes} options={{headerShown: false}} />
            <Stack.Screen name='EscolherModalidade' component={PageEscolherModalidade} options={{headerShown: false}} />
            <Stack.Screen name='Configuracoes' component={PageConfiguracoes} options={{headerShown: false}} />
            <Stack.Screen name='Ajuda' component={PageAjuda} options={{headerShown: false}} />
            <Stack.Screen name='EntradaFinanceiraExtra' component={PageEntradaFinanceiraExtra} options={{headerShown: false}} />
            <Stack.Screen name='ContasCorrentes' component={PageContasCorrentes} options={{headerShown: false}} />
            <Stack.Screen name='AdicionarContaCorrente' component={PageAdicionarContaCorrente} options={{headerShown: false}} />
            <Stack.Screen name='RelatarProblema' component={RelatarProblema} options={{headerShown: false}} />
            <Stack.Screen name='PrivacidadeSeguranca' component={PrivacidadeSeguranca} options={{headerShown: false}} />
            <Stack.Screen name='Transferencia' component={Transferencia} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

