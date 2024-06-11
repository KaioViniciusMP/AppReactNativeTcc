import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.greetingContainer}>
                    <View style={styles.greetingRadios} />
                    <Text style={styles.greeting}>Olá, Kaio!</Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Saldo Disponível</Text>
                    <Text style={styles.balanceAmount}>R$ 12.123,00</Text>
                </View>

                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Entrada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A4981',
    },
    header: {
        padding: 20,
        height: '25%'
    },
    greetingContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    greetingRadios: {
        borderRadius: 30,
        height: 30,
        backgroundColor: '#fff',
        width: 30,
        margin: 5
    },
    greeting: {
        color: '#fff',
        fontSize: 20,
    },
    body: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#7F79AB',
    },
    balanceContainer: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        margin: 20,
    },
    balanceText: {
        color: '#fff',
        fontSize: 16,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginHorizontal: 20,
    },
    menuItem: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        padding: 10,
        width: 83,
        height: 83,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuText: {
        color: '#000',
        fontSize: 12,
        textAlign: 'center'
    },
});
