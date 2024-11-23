import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

type CarouselCustomProps = {
    arrayImages: { image: string }[]
}

export default function CarouselCustom({ arrayImages }: CarouselCustomProps) {


    /*
    COMO CHAMA-LO:
    <CarouselCustom arrayImages={carousel}/>
    
    
    E TEM QUE PASSAR UM ARRAY DE IMAGENS:
    
    const carousel = [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3rCYT3LQ5HFpQ_GDKi2RHDf_I92KG0-Xfw&s',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KI4j3PkM6_df2Jfpd2_sY5Nahfpdvkeidw&s',
        },
        {
          image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1e/42/81/1e428161-e0f1-e565-ee1b-3cde9d44c400/e73b0dc8-f9a3-4fe3-b577-67002a71509a_Screen-551.png/750x750bb.jpeg',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwjsLijPalTdJv5Mc0_zSNamguxVD9YbqFwlppP_VlSqCzGQRXpxDrsjQJIVS1weaFfE&usqp=CAU',
        }
      ];
    */






    const [currentIndex, setCurrentIndex] = useState(0);

    const onScroll = (event: any) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(slideIndex);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={arrayImages}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScroll}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.image }} style={styles.image} />
                )}
            />
            <View style={styles.indicatorContainer}>
                {arrayImages.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentIndex === index && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: width,
        height: '100%',
        resizeMode: 'cover',
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 10,
        display: 'flex',
        marginBottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: '#000',
        width: 10,
        height: 10,
    },
});


