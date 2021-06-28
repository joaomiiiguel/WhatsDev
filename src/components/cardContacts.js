import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '../styles/globalcss';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ContactChats({ avatar, name, number, status }) {
    return (
        <TouchableOpacity style={styles.CardChat}>
            <Image
                style={styles.Avatar}
                source={{ uri: `${avatar}` }} />
            <Image />
            <View style={{ width: '75%', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: theme.colors.primary }}>{name}</Text>
                    <Text style={{ color: theme.colors.cinza, paddingTop: 5 }}>{number}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
                    <Icon name="chatbubbles" size={23} color="#075F56" />
                    <Icon name="call" size={23} color="#075F56" />
                </View>
            </View>
        </TouchableOpacity>
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
        marginHorizontal: 3,
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
        width: 65,
        height: 65,
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