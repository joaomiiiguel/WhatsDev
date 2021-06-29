import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '../styles/globalcss';
import Icon from 'react-native-vector-icons/Ionicons';


export default function CardCalls({ avatar, name, status, date }) {
    return (
        <View style={styles.CardChat}>
            <Image
                style={styles.Avatar}
                source={{ uri: `${avatar}` }} />
                {status === 'accepted' ? <Icon style={styles.callStatus} name="arrow-redo" size={23} color="#EA2140" /> : <Icon style={styles.callStatus} name="arrow-undo" size={23} color="#26D366" />}
            <View style={{ width: '75%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: theme.colors.primary }}>{name}</Text>
                    <Text style={styles.TextCall}>{date}</Text>
                </View>
                <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>

                    <Icon name="call" size={23} color="#075F56" />
                </TouchableOpacity>
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
    TextCall: {
        alignItems:'center',
        textAlign: 'center',
        color: theme.colors.cinza,
        paddingTop: 5,
        fontSize: 14,
    },
    callStatus:{
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 25,
        top: 50,
        left: 50,
        elevation: 2
    }

})