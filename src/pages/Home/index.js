import React, {useState, useEffect} from 'react';
import CardFruits from '../../components/CardFruits';
import {colors} from '../../styles';
import {SafeAreaView, StatusBar, StyleSheet, FlatList} from 'react-native';
import api from '../../utils/api';

const Home = ({navigation}) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    api.get().then(response => {
      setFruits(response.data);
    });
  }, []);

  const renderItem = ({item}) => (
    <CardFruits
      onPress={() =>
        navigation.navigate('Detalhes', {
          item,
        })
      }
      photo={item.photo}
      name={item.name}
      calories={item.calories}
      protein={item.protein}
      carbohydrates={item.carbohydrates}
      fiber={item.fiber}
      blubber={item.blubber}
      portion={item.portion}
    />
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={fruits}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});

export default Home;
