import React from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import DATA from '../db/databaseStores.json'
import { theme } from '../styles/globalcss';

const Item = ({ name, avatar }) => (
  <TouchableOpacity style={styles.store}>
    <Image
      style={styles.Avatar}
      source={{ uri: `${avatar}` }} />
    <Text style={{ fontWeight: 'bold', color: '#F7F7F7', fontSize: 13 }}>{name}</Text>
  </TouchableOpacity>
);

export default function Stories() {
  const renderItem = ({ item }) => (
    <Item style={styles.List} name={item.name} avatar={item.avatar} />
  );

  return (
    <ScrollView style={styles.StoriesContainer}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    </ScrollView >
  );
}


const styles = StyleSheet.create({
  StoriesContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  List: {
    flexDirection: 'row'
  },
  store: {
    alignItems: 'center',
    margin: 3,
  },
  Avatar: {
    backgroundColor: theme.colors.primary,
    width: 65,
    height: 65,
    borderRadius: 50
  },

})