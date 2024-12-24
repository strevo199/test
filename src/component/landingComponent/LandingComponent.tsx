import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListAndFeatureComponent from '../listandfeaturecomponent/ListAndFeatureComponent';

const LandingComponent = () => {
  const [btnTitle, setBtnTitle] = useState<'edit' | 'landing' | 'create'>(
    'landing',
  );
  const [shoppingList, setShoppingList] = useState([
    
  ]);
  const [isListSorted, setisListSorted] = useState<boolean>(false);

  const handleLandingActionBtn = () => {};

  useEffect(() => {
    setTimeout(() => {
      setBtnTitle('create');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {btnTitle === 'landing' ? (
        <View style={{flex: 0.7}}>
          <Text style={styles.showcaseTitle}>Shopping List App</Text>
        </View>
      ): (
        <ListAndFeatureComponent shoppingList={shoppingList}/>
      ) }
      <View style={{flex: 0.3}}>
        <TouchableOpacity onPress={handleLandingActionBtn}>
          <Text>{btnTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  showcaseTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
});
