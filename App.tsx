import {Provider,useDispatch} from 'react-redux';
import {store} from './src/redux/store';
import MainNavigator from './src/navigation/MainNavigator';
import {useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './src/firebase/firebaseConfig';
import {login,logout} from './src/redux/userSlice';
import {doc,getDoc} from 'firebase/firestore';
import {db} from './src/firebase/firebaseConfig';

function AuthListener(){
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        const docRef=doc(db,'users',user.uid);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
          dispatch(login({name:docSnap.data().name,
            email:user.email!,
          }));
        }
      }
      else{
        dispatch(logout());
      }
    });
  },[]);
  return null;
}

export default function App(){
  return (
    <Provider store={store}>
      <AuthListener/>
      <MainNavigator/>
    </Provider>
  )
}