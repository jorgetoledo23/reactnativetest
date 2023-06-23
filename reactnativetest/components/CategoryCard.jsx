import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryCard ({Category}) {

    return (
        <View style={{ border : "1px solid red"}}>
          <Text>{Category.name}</Text>
          <StatusBar style="auto" />
        </View>
      );

}