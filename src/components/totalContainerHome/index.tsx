import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


export function TotalContainerHome() {
    return (
        <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total gasto</Text>


            <View style={styles.totalUtilizarContainer}>
                <Text style={styles.totalAmount}>R$ 12.123,00</Text>
                <TouchableOpacity style={styles.useButton}>
                    <Text style={styles.useButtonText}>Utilizar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.disponivelUtilizarContainer}>
                <Text style={styles.availableText}>Disponível para utilizar</Text>
                <Text style={styles.availableAmount}>R$ 12.123,00</Text>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Seus rendimentos de 2024</Text>
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesTitle}>Categorias</Text>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Investimento</Text>
                    <Text style={styles.categoryAmount}>R$ 6.340,00</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Alimentação</Text>
                    <Text style={styles.categoryAmount}>R$ 1.340,00</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Transporte</Text>
                    <Text style={styles.categoryAmount}>R$ 1.240,00</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Compras</Text>
                    <Text style={styles.categoryAmount}>R$ 1.140,00</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Saúde</Text>
                    <Text style={styles.categoryAmount}>R$ 1.240,00</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>Lazer</Text>
                    <Text style={styles.categoryAmount}>R$ 1.140,00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    totalContainer: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        width: '100%'
    },



    totalText: {
        fontSize: 16,
    },



    totalAmount: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    totalUtilizarContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    useButton: {
        borderRadius: 8,
        alignItems: 'center',
        width: 123,
        height: 37,
        borderColor: '#716A9C',
        borderWidth: 1,
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
    },
    useButtonText: {
        color: '#716A9C',
        fontSize: 16,
    },




    disponivelUtilizarContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 12,
        alignContent:'center',
    },
    availableText: {
        marginTop: 10,
        fontSize: 14,
    },
    availableAmount: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 13
    },








    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    chartTitle: {
        fontSize: 16,
        marginBottom: 10,
    },




    categoriesContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    categoriesTitle: {
        fontSize: 16,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    categoryText: {
        fontSize: 14,
    },
    categoryAmount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});