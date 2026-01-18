import { View, Text, Button } from 'react-native';
import { useSelector} from 'react-redux';
import { RootState } from '../redux/store';
import { signOut } from 'firebase/auth';
import {auth} from '../firebase/firebaseConfig';

export default function HomeScreen() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome {user?.name}</Text>
      <Button title="Logout" onPress={() => signOut(auth)} />
    </View>
  );
}
