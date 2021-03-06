import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '../styles/globalcss';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ContactChats({ avatar, name, number, status }) {
    return (
        <View style={styles.CardChat}>
            <Image
                style={styles.Avatar}
                source={{ uri: `${avatar}` }} />
            <View style={{ width: '75%', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: theme.colors.primary }}>{name}</Text>
                    <Text style={{ color: theme.colors.cinza, paddingTop: 5 }}>{number}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
                    <TouchableOpacity><Icon style={{marginRight: 15}}name="chatbubbles" size={23} color="#075F56" /></TouchableOpacity>
                    <TouchableOpacity><Icon name="call" size={23} color="#075F56" /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    CardChat: {
        marginBottom: 10,
        backgroundColor: theme.colors.branco,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginHorizontal: 2,
        borderRadius: 50,
        shadowOffset: { width: 5, height: 3, },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    store: {
        alignItems: 'center',
        margin: 3,
    },
    Avatar: {
        backgroundColor: theme.colors.primary,
        width: 52,
        height: 52,
        borderRadius: 50,
        marginRight: 10,
    },
    SMSAtived:{
        backgroundColor: theme.colors.azul, 
        color: theme.colors.branco, 
        padding: 5, 
        borderRadius: 50, 
        width: 30, 
        textAlign: 'center'
    }

})