import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, Button, } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState(["Test1"])

  const addText = () => {
    setHistory(history => [...history, text]);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>สมุดบันทึก</Text>
      <TextInput
        placeholder="เพิ่มข้อความที่นี่"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button
        onPress={() => { addText(); setText("");}}
        style={styles.button}
        title={"บันทึก"}
      />
      <Text style={{ fontSize: 18 }}></Text>
      <FlatList style={styles.list}
        data={history} 
        keyExtractor={(item) => item.key}
          renderItem={({item}) => { 
            return <Text style={styles.history}>{item}</Text> 
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50

  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  button: {
    width:100
  },
  history: {
    fontSize: 18,
    textAlign: 'center'
  },
  list: {
    width: "100%"
  }
});
