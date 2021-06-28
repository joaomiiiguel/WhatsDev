import React from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import DATA from '../../db/databaseContacts.json';

import Contacts from '../../components/cardContacts'

export default function Contact({ navigation }) {

    const renderItem = ({ item }) => (
        <Contacts avatar={item.avatar} name={item.name} number={item.number} status={item.status}/>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleWhats}>Contacts</Text>
                <View style={styles.iconList}>
                    <TouchableOpacity>
                        <Icon name="search" size={23} color="#F7F7F7" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="ellipsis-vertical" size={23} color="#F7F7F7" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.chatContainer}>
                <View>

                </View>
                <View style={styles.chatContainer}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}
