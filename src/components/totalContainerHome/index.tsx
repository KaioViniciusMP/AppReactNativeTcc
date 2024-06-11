import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export function TotalContainerHome() {
    return (
        <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total gasto</Text>
            <Text style={styles.totalAmount}>R$ 12.123,00</Text>
            <Text style={styles.availableText}>Disponível para utilizar</Text>
            <Text style={styles.availableAmount}>R$ 12.123,00</Text>
            <TouchableOpacity style={styles.useButton}>
                <Text style={styles.useButtonText}>Utilizar</Text>
            </TouchableOpacity>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Seus rendimentos de 2024</Text>
                {/* Here you can add a chart component */}
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
        borderRadius: 10,
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
    availableText: {
        marginTop: 10,
        fontSize: 14,
    },
    availableAmount: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    useButton: {
        backgroundColor: '#7F5AF0',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    useButtonText: {
        color: '#fff',
        fontSize: 16,
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
        marginBottom: 10,
    },
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    categoryText: {
        fontSize: 14,
    },
    categoryAmount: {
        fontSize: 14,
        fontWeight: 'bold',
    },

});