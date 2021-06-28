import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles';

export default function Details({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button
                title="Voltar pro Home"
                onPress={() => navigation.goBack('Details')}
            />
        </View>
    )
}
