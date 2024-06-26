import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

export default function PrivacidadeSeguranca() {
    const navigation = useNavigation<NavigationProp>();

    const voltar = () => {
        navigation.pop();
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', position:'absolute',top:0,left: 0, flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                <Text style={{ color: '#fff'}}>Voltar</Text>
                <Text style={{ color: '#fff', marginLeft: 10, fontWeight: "bold", marginBottom: 60 }}>Ola Kaio</Text>
            </View>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 40, marginLeft: 25 }}>CONTEUDO JURÍDICO DO APP</Text>
                </View>
                <Text style={{ fontWeight: "bold", color: '#939393', fontSize: 14, marginLeft: 25, marginBottom: 20, alignSelf: 'center' }}>Termos e Políticas de Privacidade</Text>

                <View style={{ width: '80%', alignSelf: 'center' }}>
                    <Text style={styles.titulos}>Bem-vindo ao MANAGEMENT PERSONAL!</Text>
                    <Text style={styles.itensText}>Estes termos e políticas de privacidade regem o uso do nosso aplicativo de gerenciamento financeiro pessoal. Ao utilizar este aplicativo, você concorda com estes termos e políticas de privacidade. Por favor, leia atentamente.</Text>

                    <Text style={styles.titulos}>1. Dados Coletados</Text>
                    <Text style={styles.itensText}>Nós não coletamos informações pessoais dos usuários. O aplicativo é projetado para garantir a privacidade e a segurança dos seus dados financeiros.</Text>

                    <Text style={styles.titulos}>2. Uso de Dados</Text>
                    <Text style={styles.itensText}>O aplicativo utiliza dados financeiros fornecidos pelo usuário exclusivamente para fins de organização e gerenciamento financeiro pessoal. Não compartilhamos esses dados com terceiros.</Text>

                    <Text style={styles.titulos}>3. Segurança dos Dados</Text>
                    <Text style={styles.itensText}>Empregamos medidas de segurança adequadas para proteger os dados dos usuários contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.</Text>

                    <Text style={styles.titulos}>4. Consentimento</Text>
                    <Text style={styles.itensText}>Ao utilizar o aplicativo, você consente com estes termos e políticas de privacidade.</Text>

                    <Text style={styles.titulos}>5. Alterações nos Termos e Políticas de Privacidade</Text>
                    <Text style={styles.itensText}>Reservamo-nos o direito de atualizar ou modificar estes termos e políticas de privacidade a qualquer momento. </Text>

                    <Text style={styles.titulos}>Recomendamos que você revise periodicamente esta página para estar ciente de quaisquer alterações.</Text>

                    <Text style={styles.titulos}>6. Contato</Text>
                    <Text style={styles.itensText}>Se você tiver alguma dúvida ou preocupação sobre estes termos e políticas de privacidade, entre em contato conosco em (11) 98594-7944.</Text>
                </View>

                <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={voltar} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                        <Text style={{ color: '#FFF', fontWeight: "bold" }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#4D4D4D',
        position:'relative',
        paddingTop: 100
    },
    containerTwo: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingBottom: 100
    },

    titulos: {
        fontWeight: 'bold'
    },
    itensText: {
        fontSize: 12,
        fontWeight: 'semibold',
        marginBottom: 15
    }
});