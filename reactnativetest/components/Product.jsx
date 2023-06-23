import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Product ({Producto}) {

    return (
        <View style={{ border : "1px solid red"}}>
          <Text>{Producto.name}</Text>
          <StatusBar style="auto" />
        </View>
      );

}