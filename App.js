import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { normalizeRect } from 'react-native/Libraries/StyleSheet/Rect';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}> 
        <Text> FoodGram </Text>
      </View>
      <TextInput style={styles.input} placeholder={"Username"}/>
      <TextInput style={styles.input} placeholder={"Password"}/>
      <Button title='Login' onPress={ () => Alert.alert('Is it working?')} />
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
  },
  title: {
    backgroundColor: '#fff',
    fontWeight: '700',
    tintColor: '#3F3D56',
    fontFamily: 'Prompt',
    fontStyle: 'normal',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 36.29,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
