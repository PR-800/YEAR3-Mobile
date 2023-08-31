import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const data = [
    {source: require("./assets/course-bach-it.jpg"), text:'Information Technology'},
    {source: require("./assets/course-bach-dsba.jpg"), text:'Data Science and Business Analysis'},
    {source: require("./assets/course-bach-bit.jpg"), text:'Business Information Technology (International Program)'},
    {source: require("./assets/course-bach-ait.jpg"), text:'Artificial Intelligence Technology'},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={
            require('./assets/IT_Logo.png')
          }
          style={{
            width:71, height:59, marginLeft:20, marginTop:25
          }}
        />
        <Text style={styles.header}>
          Programs
        </Text>
      </View>

      <FlatList style={styles.FlatList}
        data={data} 
        keyExtractor={(item) => item.source}
          renderItem={({item}) => { 
            return (
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={item.source}
                />
                <Text style={styles.font}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            ) 
          }
        }
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  FlatList: {
    backgroundColor: '#d3d3d3',
    marginHorizontal: 20,
  },
  font: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center'
  },
  top: {
    backgroundColor: '#abd9e6',
    height: 100
  },
  header: {
    fontSize: 35,
    marginTop: -50,
    marginLeft: 150,
    fontWeight: 'bold',
    color: '#000087',
  }
});
