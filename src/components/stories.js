import React from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import DATA from '../db/databaseStores.json'
import { theme } from '../styles/globalcss';

const Item = ({ name, avatar }) => (
  <TouchableOpacity style={styles.store}>
    <View style={styles.ContentFT}>
      <Image
        style={styles.Avatar}
        source={{ uri: `${avatar}` }} />
    </View>
    <Text style={{ fontWeight: 'bold', color: '#F7F7F7', fontSize: 13 }}>{name}</Text>
  </TouchableOpacity>
);

export default function Stories() {
  const renderItem = ({ item }) => (
    <Item style={styles.List} name={item.name} avatar={item.avatar} />
  );

  return (
    <ScrollView style={styles.StoriesContainer} horizontal={true}>
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
    margin: 5,

  },
  ContentFT:{
    backgroundColor: theme.colors.secundary,
    width: 65,
    height: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:'center'
  },
  Avatar: {
    backgroundColor: theme.colors.branco,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: theme.colors.primary
  },

})