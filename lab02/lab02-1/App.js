import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={
          require('./assets/IT_Logo.png')
        }
        style={{
          width:120, height:100
        }}
      />
      <Text style={{fontSize: 5}}></Text>
      <Text
        style={{fontSize: 25}}
        >คณะเทคโนโลยีสารสนเทศ</Text>
      <Text style={{fontSize: 5}}></Text>
      <Text
        style={{fontSize: 17}}
      >สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>

      <View style={[styles.bottom, {}]}>
        <Text style={[styles.button, {fontSize: 15}]}>PROGRAMS</Text>
        <Text style={{fontSize: 5}}></Text>
        <Text style={[styles.button, {fontSize: 15}]}>ABOUT US</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  bottom: {
    // flexDirection: 'col',
    // marginBottom: 0,
    marginTop: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {width:300, height:40, backgroundColor: '#2097f3', color: 'white', textAlign:'center', verticalAlign: 'middle', borderRadius: 3}
});
