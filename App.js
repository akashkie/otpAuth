import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth'
import Login from './components/Login'


const Home =()=>{
  return(
    <View style={styles.container}>
    <Text style={{fontSize:30,color:'black'}}> welcome </Text>
  </View>
  );
 }
const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState( false);
console.log("user",user);
  const onAuthStateChanged=(user)=>{
    setUser(user);
    if (initializing) setInitializing(false);
  }

 
  useEffect( () => {     
    const subscriber =  auth().onAuthStateChanged(onAuthStateChanged);
    console.log("subscriber"+subscriber);
    return subscriber; // unsubscribe on unmount
}, []);
  
  if (initializing) return null;

   

  return (
    
       <Login/>
        
  );
}

export default App;

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white'
}
});