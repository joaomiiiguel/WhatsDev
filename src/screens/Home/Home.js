import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import DATA from '../../db/databaseMessage.json'

import Stories from '../../components/stories'
import Chats from '../../components/cardChats'




export default function Home({ navigation }) {

    const renderItem = ({ item }) => (
        <Chats avatar={item.avatar} name={item.name} lastMessage={item.lastMessage} time={item.time} SMS={item.SMS} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleWhats}>WhatsDev</Text>
                <View style={styles.iconList}>
                    <TouchableOpacity>
                        <Icon name="search" size={23} color="#F7F7F7" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="camera" size={23} color="#F7F7F7" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="ellipsis-vertical" size={23} color="#F7F7F7" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.storesContainer}>
                <Stories />
            </View>
            <View style={styles.chatContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}
