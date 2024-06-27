import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from "../pages/Home";
import HistoricoTransacoes from "../pages/HistoricoTransacoes";
import PageEscolherModalidade from "../pages/EscolherModalidade";
import PageConfiguracoes from "../pages/Configuracoes";
import PageAjuda from "../pages/Ajuda";
import PageEntradaFinanceiraExtra from "../pages/AdicionamentoRendaExtra";
import PageContasCorrentes from "../pages/ContasCorrentes";
import PageAdicionarContaCorrente from "../pages/AddContaCorrente";
import RelatarProblema from "../pages/RelatarProblema";
import PrivacidadeSeguranca from "../pages/PrivacidadeAndSeguranca";

export type AppStackParamList = {
    Tabs: undefined
    Home: undefined;
    HistoricoTransacoes: undefined;
    EscolherModalidade: undefined;
    Configuracoes: undefined;
    Ajuda: undefined;
    EntradaFinanceiraExtra: undefined;
    ContasCorrentes: undefined;
    AdicionarContaCorrente: undefined;
    RelatarProblema: undefined;
    PrivacidadeSeguranca: undefined;
};
export type AppTabsParamList = {
    Home: undefined;
    HistoricoTransacoes: undefined;
    EscolherModalidade: undefined;
    Configuracoes: undefined;
    Ajuda: undefined;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();
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
        </Stack.Navigator>
    )
}

export function Tabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Tab.Screen name='HistoricoTransacoes' component={HistoricoTransacoes} options={{headerShown: false}} />
            <Tab.Screen name='EscolherModalidade' component={PageEscolherModalidade} options={{headerShown: false}} />
            <Tab.Screen name='Configuracoes' component={PageConfiguracoes} options={{headerShown: false}} />
            <Tab.Screen name='Ajuda' component={PageAjuda} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}