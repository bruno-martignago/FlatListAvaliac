import React from 'react';
import {View, FlatList, StyleSheet, StatusBar, Image} from 'react-native';

import {List} from 'react-native-paper';

import Pessoas from '../data/Pessoas';

export default props => {

    const Info = ({elemento}) => {

        const item = elemento.item;
        
        return(   
        <List.Info
            title={item.nome}
            description={item.email}
            // left={props => <List.Icon {...props} icon="folder" />}
            left={props => 
                <Image {...props} 
                    style={styles.tinyLogo} 
                    source={
                        {
                            uri: item.urlImagem
                        }
                    }/>}
            onPress={() => props.navigation.navigate("DetalheProduto", {id: item.id})}
        />
    )};

    return (
        <View style={styles.container}>
            <FlatList
                data={Pessoas}
                renderItem={( info ) =><Info elemento={ info } /> }
                keyExtractor={ info => info.id }
            />
        </View>
    );
}

// Style
const styles = StyleSheet.create({
    container: {
        flex:      1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding:          20,
        marginVertical:   8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});