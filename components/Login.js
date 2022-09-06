import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'
import auth from '@react-native-firebase/auth';
import Home from './Home';
const Login = () => {

const [number,setNumber]=useState(null);
const [code,setCode]=useState(null);
const [confirm, setConfirm] = useState(null);
const[verified,SetVerified]=useState(null)
console.log(number);
console.log(code);
    const signIn= async function signInWithPhoneNumber(number) {
        const confirmation = await auth().signInWithPhoneNumber(number);
    console.log('confirm phone nunmber');
    setConfirm(confirmation);
  
}

   const getCode = async function confirmCode(code) {
    try {
      let data =await confirm.confirm(code);
      console.log(data);
      console.log('verified code');
      SetVerified(true);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

if (verified){
  return <Home/>;
}

  return (
    <View style={styles.container}>
      <Text> phone number login</Text>
       
                      
{!confirm ?
    <View>
        <TextInput 
           placeholder='enter 10 digit phone number'
           style={styles.input}
           keyboardType='numeric'
           onChangeText={(text)=>setNumber(text)}
           value={number}
           keyboardAppearance='default'
                      />
<Button  style={styles.btn} title ="Get Otp" onPress={()=>{ signIn('+91'+ number) }}/>
</View>
:

<View>
<TextInput
   placeholder='enter 6 digit Otp'
   style={styles.input}
   keyboardType='numeric'
   onChangeText={(text)=>setCode(text)}
   value={code}
   keyboardAppearance='default'
  />
  <Button title ="verify" onPress={()=> {getCode(code)}}/>
</View>

}
        
      
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        margin:20,
        borderBottomWidth:2,
        fontSize:25,
        
    }
})