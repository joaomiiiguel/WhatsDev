import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '../styles/globalcss';

export default function CardChats({ avatar, name, lastMessage, time, SMS }) {
    return (
        <TouchableOpacity style={styles.CardChat}>
            <Image
                style={styles.Avatar}
                source={{ uri: `${avatar}` }} />
            <Image />
            <View style={{ width: '75%', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: theme.colors.primary }}>{name}</Text>
                    <Text style={{ color: theme.colors.cinza, paddingTop: 5, fontSize: 14, }}>{lastMessage}</Text>
                </View>
                <View>
                    <Text style={{ color: theme.colors.cinza }}>{time}</Text>
                        {SMS > '0' ? <Text style={styles.SMSAtived}>{SMS}</Text> : <Text style={{display:'none'}}/> }
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
        width: 52,
        height: 52,
        borderRadius: 50,
        marginRight: 10,
    },
    SMSAtived:{
        backgroundColor: theme.colors.vermelho, 
        color: theme.colors.branco, 
        padding: 5, 
        borderRadius: 50, 
        width: 30, 
        textAlign: 'center'
    }

})