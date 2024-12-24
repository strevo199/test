import {View, Text, FlatList, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import BarcodeScanner from '../barcodescanner/BarcodeScanner';
import { barcode } from '../../assets';
import { shoppingList } from '../../utils/data';

export type ListAndFeatureComponentPorps = {
  shoppingList: {
    id: string;
    title: string;
    data?: string;
    price: number;
    catg: 'snacks' | 'dairy' | ' meat' | 'health care';
  }[];
};

const ListAndFeatureComponent = ({
}: ListAndFeatureComponentPorps) => {
  const [barData, setbarData] = useState('');
  const [newItem, setnewItem] =
    useState<ListAndFeatureComponentPorps['shoppingList'][0]>();
  const [list, setList] =
  useState<ListAndFeatureComponentPorps['shoppingList']>(shoppingList);
  const [setshowCam, setsetshowCam] = useState(false);

    const handleCreate =() => {
console.log('newItem----------',newItem);

        const readyToAdd = {...newItem,data:barData };
        const newArray = [...list,readyToAdd];
        setList(newArray);
    }
    const handleEditOfItem =() => {
        
    }

  return (
    <View style={{backgroundColor: '#fff',flex:1,padding:16}}>
      {/* input */}
      <View>
        <BarcodeScanner setshowCam ={setshowCam} setbarData={setbarData} />
        <View style={{rowGap: 20,marginTop:50}}>
          <TouchableOpacity onPress={() => setsetshowCam(!setshowCam)}>
                      <View>
                        <Text>GET Barcode</Text>
                      <Image source={barcode} style={{height:30,width:30}} />
                      </View>
                    </TouchableOpacity>
          <TextInput
            style={{
              height: 58,
              borderWidth: 1,borderRadius:10,
              borderColor: '#000',
              width: '100%',
            }}
            placeholder="Enter title here"
            value={newItem?.title}
            onChangeText={e => setnewItem({...newItem, title: e})}
          />
          <TextInput
            style={{
              height: 58,borderRadius:10,
              borderWidth: 1,
              borderColor: '#000',
              width: '100%',
            }}
            placeholder="Enter Category here"
            value={newItem?.catg}
            onChangeText={e => setnewItem({...newItem, catg: e})}
          />
          <TextInput
            style={{
              height: 58,borderRadius:10,
              borderWidth: 1,
              borderColor: '#000',
              width: '100%',
            }}
            keyboardType="numeric"
            placeholder="Enter price here"
            value={newItem?.price}
            onChangeText={e => setnewItem({...newItem, price: e})}
          />

          <TouchableOpacity
           onPress={handleCreate}
            style={{
              marginTop:30,
              height: 50,backgroundColor:'#217be3',
              width: 100,
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}>
            <Text style={{color:"#fff",fontWeight:'900'}}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* list */}
      <View>
        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (
              <View style={{backgroundColor: '#ddd', marginVertical: 5}}>
                <Text>{item.catg}</Text>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <TouchableOpacity onPress={handleEditOfItem}>
                  <Text style={{color:'orange'}} >Edit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ListAndFeatureComponent;
