import { AppRegistry } from "react-native";
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from "react-native";
import { Card } from "react-native-paper";

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        description: 'Pupuas de frijol con queso',
        src: require('./src/img/pupusas.jpg')
    },
    {
        id: '2',
        title: 'Yuca',
        description: 'Rica yuca frita con salsa y curtido',
        src: require('./src/img/yuca.jpg')
    },
    {
        id: '3',
        title: 'Sopa de Pata',
        description: 'Sopa con extremidades de vaca y verduras',
        src: require('./src/img/sopa.jpg')
    },
    {
        id: '4',
        title: 'Atol',
        description: 'Atol a base de elote',
        src: require('./src/img/atol.jpg')
    }
]

const Item = ({ title, img, description }) => (
    <Card style={styles.item}>
        <View style={{flexDirection: 'row'}}>
            <View>
                <Image style={styles.img} source={img} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </View>
    </Card>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.src} description={item.description} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#BCC8DC',
        borderRadius: 20,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 5
    },
    title: {
        fontSize: 32,
        marginLeft: 10
    },
    desc: {
        marginLeft: 10,
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 100
    }
}); 

AppRegistry.registerComponent("comidas", () => App);