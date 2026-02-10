import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

const App = () => {
  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];

  const renderBrand = ({ item }) => (
    <View style={styles.brandItem}>
      <Text style={styles.brandText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Best Phone Guide</Text>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => {}} />
        <Button title="Learn More" onPress={() => {}} />
      </View>
      <FlatList
        data={brands}
        renderItem={renderBrand}
        keyExtractor={(item) => item}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  brandItem: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  brandText: {
    fontSize: 18,
  },
});

export default App;