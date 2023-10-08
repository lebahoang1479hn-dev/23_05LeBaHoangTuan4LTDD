import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputText, setInputText] = useState('');

  const handleChooseImage = () => {
    // Hành động chọn file hình ảnh
  };

  const handleTextInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonPress = () => {
    // Xử lý khi nút được nhấn
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>USB BLUETOOTH VÀ CÁP ÂM THANH 2 ĐẦU 3.5MM BT-163/YET-M1/MZ-301 CHUYỂN ĐỔI LOA, AMPLY, PC…LOẠI THƯỜNG THÀNH BLUETOOTH</Text>
      <View style={styles.inputContainer1}>
        <Image source={require('./assets/pic.png')} style={styles.inputIcon} />
        <Text style={styles.chooseImageText}>Chọn hình ảnh</Text>
      
      </View>
          
      
      
    <View style={styles.inputContainer2}>
      <TextInput style={styles.input} placeholder="Hãy chia sẽ những điều mà bạn thích về sản phẩm" value={inputText}  onChangeText={handleTextInputChange}
            />
    </View>
      

      <Button title="Gửi" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 30,
  },
  inputContainer2: {
    marginTop:20,
  },
 
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
 
  chooseImageButton: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  chooseImageText: {
    fontSize: 16,
    padding : 5,
    color: '#000000',
    
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    height:200,
    
  },
});