
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons'
import { View, Text, Platform } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from "../pages/Home"
import HistoricoTransacoes from "../pages/HistoricoTransacoes";
import PageEntradaFinanceiraExtra from '../pages/AdicionamentoRendaExtra';
import PageContasCorrentes from '../pages/ContasCorrentes';
import PagePersonalizacaoAndConfig from '../pages/PersonalizacaoAndConfig';


export type AppTabsParamList = {
    Home: undefined;
    PageEntradaFinanceiraExtra: undefined;
    PageContasCorrentes: undefined;
    HistoricoTransacoes: {
        param1: string; // Exemplo de parâmetro
        param2: number; // Outro exemplo de parâmetro
    };
    PagePersonalizacaoAndConfig: undefined;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 60,
                backgroundColor: '#fff',
            },
        }}>

            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo name='home' size={focused ? 35 : 28} color={focused ? "#000" : "#222"} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name='PageEntradaFinanceiraExtra'
                component={PageEntradaFinanceiraExtra}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="attach-money"  size={focused ? 35 : 28} color={focused ? "#000" : "#111"} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name='PageContasCorrentes'
                component={PageContasCorrentes}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#7771A3',
                            width: Platform.OS == "ios" ? 50 : 60,
                            height: Platform.OS == "ios" ? 50 : 60,
                            top: Platform.OS == "ios" ? -10 : -20,
                            borderRadius: Platform.OS == "ios" ? 25 : 30
                        }}>

                            <AntDesign name="plus" size={30} color="white" />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name='HistoricoTransacoes'
                component={HistoricoTransacoes}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="newspaper-outline" size={focused ? 35 : 28} color={focused ? "#000" : "#111"} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name='PagePersonalizacaoAndConfig'
                component={PagePersonalizacaoAndConfig}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={focused ? 40 : 35} color={focused ? "#000" : "#111"} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}