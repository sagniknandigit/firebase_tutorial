import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'
import {auth} from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase/firebaseConfig';
import {doc,setDoc} from 'firebase/firestore';

const RegisterScreen = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleRegister=async()=>{
    try{
      const userCredential=await createUserWithEmailAndPassword(auth,email,password);
      const user=userCredential.user;

      await setDoc(doc(db,'users',user.uid),{
        name,email,
      });
    }
    catch(error:any){
      alert(error.message);
    }
  };
  return (
    <View style={{padding:20}}>
      <Text>Register</Text>
      <TextInput placeholder='Name' value={name} onChangeText={setName}></TextInput>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail}></TextInput>
      <TextInput placeholder='Password'secureTextEntry value={password} onChangeText={setPassword}></TextInput>
      <Button title='Register' onPress={handleRegister}></Button>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})