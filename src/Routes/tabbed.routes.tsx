
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { View, Text, Platform } from 'react-native';

import Home from "../pages/Home"
import HistoricoTransacoes from "../pages/HistoricoTransacoes";
import PageEntradaFinanceiraExtra from '../pages/AdicionamentoRendaExtra';
import PageContasCorrentes from '../pages/ContasCorrentes';
import PagePersonalizacaoAndConfig from '../pages/PersonalizacaoAndConfig';


export type AppTabsParamList = {
    Home: undefined;
    PageEntradaFinanceiraExtra: undefined;
    PageContasCorrentes: undefined;
    HistoricoTransacoes: undefined;
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
                            <Entypo name='home' size={24} color={focused ? "#16247d" : "#111"} />
                            <Text style={{ fontSize: 12, color: '#16247d' }}>HOME</Text>
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
                            <Entypo name='home' size={24} color={focused ? "#16247d" : "#111"} />
                            <Text style={{ fontSize: 12, color: '#16247d' }}>PageEntradaFinanceiraExtra</Text>
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
                            backgroundColor: '#16247d',
                            width: Platform.OS == "ios" ? 50 : 60,
                            height: Platform.OS == "ios" ? 50 : 60,
                            top: Platform.OS == "ios" ? -10 : -20,
                            borderRadius: Platform.OS == "ios" ? 25 : 30,
                        }}>

                            <FontAwesome name='exchange' size={24} color="#fff" />
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
                            <Entypo name='home' size={24} color={focused ? "#16247d" : "#111"} />
                            <Text style={{ fontSize: 12, color: '#16247d' }}>HistoricoTransacoes</Text>
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
                            <Entypo name='home' size={24} color={focused ? "#16247d" : "#111"} />
                            <Text style={{ fontSize: 12, color: '#16247d' }}>PagePersonalizacaoAndConfig</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}