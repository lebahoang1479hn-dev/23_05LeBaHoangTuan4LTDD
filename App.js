import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

var data = {
  username: 'NVB',
  password: 'abc',

};
var data = {
  username: 'NVA',
  password: 'abcd',
};

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');//lưu trữ giá trị nhập
  const [loginStatus, setLoginStatus] = useState('');// lưu trữ thông báo trạng thái đăng nhập

  const handleLogin = () => {
    // Kiểm tra tên người dùng và mật khẩu
    if (username === data.username && password === data.password) {
      setLoginStatus('Đăng nhập thành công');
    } else {
      setLoginStatus('Tên người dùng hoặc mật khẩu không chính xác');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./assets/nguoi.png')} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer1}>
        <Image source={require('./assets/matkhau.png')} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="PassWord"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.spacing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text1}>CREATE ACCOUNT</Text>
      </View>

      <Text style={styles.loginStatus}>{loginStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },
  textContainer: {
    marginTop: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  textContainer1: {
    marginTop: 40,
    alignItems: 'center',
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 70,
    paddingHorizontal: 5,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 5,
    paddingHorizontal: 130,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  loginStatus: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});