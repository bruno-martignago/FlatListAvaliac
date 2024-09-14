import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Pessoas from "../data/Pessoas";

const getProdutoPorId = (id) => {
    return Pessoas.find(p => p.id == id)
}

export default ({route, navigation}) => {
    const [pessoa, setPessoa] = useState(getProdutoPorId(route.params.id))

    return (
        <View>
            <Card>
                <Card.Cover source={{
                        uri: pessoa.urlImagem
                    }} />
                <Card.Title title={pessoa.nome} />
                <Card.Content>
                    <Text variant="bodyMedium">{pessoa.email}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}