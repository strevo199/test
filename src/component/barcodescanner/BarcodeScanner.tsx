import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { barcode } from '../../assets';
// import {RNCamera} from 'react-native-camera';

const BarcodeScanner = ({setbarData,setshowCam}: any) => {
  const onBarCodeRead = (e: {data: string; type: string}) => setbarData(e.data);

  return (
    <View>
      {setshowCam && (
        <View style={styles.container}>
          <Text>NO Cam</Text>
        </View>
      )}
      <RNCamera
        style={styles.preview}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Scan a Barcode</Text>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 250, width: '100%', backgroundColor: '#000'},
  preview: {flex: 1},
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
});

export default BarcodeScanner;
