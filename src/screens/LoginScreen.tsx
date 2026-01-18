// import { useDispatch } from 'react-redux';
import { View, Button,Text,TextInput } from 'react-native';
import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/firebaseConfig';
import { login } from '../redux/userSlice';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  // const dispatch = useDispatch();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigation=useNavigation();

  // const handleLogin = () => {
  //   console.log('Login button pressed');
  //   dispatch(login({ name: 'Sagnik Nandi', email: 'sagnik@gmail.com' }));
  // };

  const handleLogin=async ()=>{
    try{
      await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error:any){
      alert(error.message);
    }
  };

  return (
    <View style={{padding:20}}>
      <Text>Login</Text>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail}></TextInput>
      <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}></TextInput>
      <Button title='Login' onPress={handleLogin}></Button>
      <Button title='Go to Register' onPress={()=>navigation.navigate('Register')} />
    </View>
  );
}
