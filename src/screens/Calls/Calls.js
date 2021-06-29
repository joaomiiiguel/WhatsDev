import React from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import DATA from '../../db/databaseContacts.json';
import Icon from 'react-native-vector-icons/Ionicons';

import Calls from '../../components/cardCalls'

export default function CallsScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <Calls avatar={item.avatar} name={item.name} status={item.status} date={item.date}/>
    );
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleWhats}>Calls</Text>
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
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}
