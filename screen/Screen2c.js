import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>PASSWORD GENERATOR</Text>
      <View style={styles.row}>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Password length :</Text>
        <TextInput style={styles.textInput1} />
      </View>

      <View style={styles.row}>
        <Text style={styles.checkboxLabel}>Include lower case letters</Text>
        <CheckBox style={styles.checkbox} />
      </View>

      <View style={styles.row}>
        <Text style={styles.checkboxLabel}>Include upcase letters</Text>
        <CheckBox style={styles.checkbox} />
      </View>

      <View style={styles.row}>
        <Text style={styles.checkboxLabel}>Include number</Text>
        <CheckBox style={styles.checkbox} />
      </View>

      <View style={styles.row}>
        <Text style={styles.checkboxLabel}>Include special symbol</Text>
        <CheckBox style={styles.checkbox} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    padding:10,
  },
  textContainer: {
    marginTop: 70,
    marginLeft:40,
    fontSize:24,
  },
  row: {
    justifyContent:'center',
    marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize:20,
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    padding: 5,
    fontSize:16,
    width: '100%',
    marginTop:20, 
  },
  textInput1: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    flex: 1,
    fontSize:20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
});