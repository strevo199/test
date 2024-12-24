import { View, Text, FlatList } from 'react-native'
import React from 'react'


export type ListAndFeatureComponentPorps ={
  shoppingList:{
    id:string,
    title:string;
    price: number;
    catg:'snacks' | 'dairy' |' meat' | 'health care';
  }[];
}

const ListAndFeatureComponent = ({shoppingList}:ListAndFeatureComponentPorps) => {
  return (
    <View>
      {/* input */}
      <View></View>
      {/* list */}
      <View>
        <FlatList
        data={shoppingList}
          renderItem={({item,index}) => {
            return (
              <View>
                <Text>{item.catg}</Text>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
              </View>
            )
          }}
        />
      </View>
      
    </View>
  )
}

export default ListAndFeatureComponent