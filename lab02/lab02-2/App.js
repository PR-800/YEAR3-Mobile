import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
        
        <TouchableOpacity onPress={onPress}>
          <Image
            source={
              require('./assets/course-bach-it.jpg')
            }
          />
          <Text style={styles.font}>
            Information Technology
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image
            source={
              require('./assets/course-bach-dsba.jpg')
            }
          />
          <Text style={styles.font}>
            Data Science and Business Analysis
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPress}>
          <Image
            source={
              require('./assets/course-bach-bit.jpg')
            }
          />
          <Text style={styles.font}>
            Business Information Technology 
            (International Program)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image
            source={
              require('./assets/course-bach-ait.jpg')
            }
          />
          <Text style={styles.font}>
            Artificial Intelligence Technology
          </Text>
        </TouchableOpacity>
        
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
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
