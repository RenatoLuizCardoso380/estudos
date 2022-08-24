import React, { Component } from "react";
import { View, Pressable ,TouchableHighlight, Text, TextInput , StyleSheet, Image, Alert} from "react-native";
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  
   render() {

return (
      
  <View style={styles.container}>
  <Picker
  selectedValue={'java'}
 
  >
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
</View>
  
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    countText: {
      color: "#FF00FF"
    }
  });
  
  
export default App; 

