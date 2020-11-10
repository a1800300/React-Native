
import React  from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

// laskuri, funktiot vähän hukassa

export default function App() {
  const[number1, setNumber1] = React.useState('' );
  const [number2, setNumber2] = React.useState('');
  const plusPressed= () => {number1+number2};
  const minusPressed= () => {number1-number2};
  const buttonPressed= () => {Alert.alert('Result:'+ plusPressed + minusPressed);}



return(
<>
<View style={styles.container}>
<Text>Calculator</Text>
<TextInput style={{width:200  , borderColor: 'gray', borderWidth: 1}}
keyboardType={'numeric'}
onChangeText={number1=>  setNumber1(number1)}
value={number1}/>
<TextInput style={{width:200  , borderColor: 'gray', borderWidth: 1}}
onChangeText={number2=>  setNumber2(number2)}
keyboardType={'numeric'}
value={number2}/>


<Button onPress = {plusPressed, buttonPressed} title='+' /> 
<Button onPress = {minusPressed, buttonPressed} title='-' />

</View>
</>

);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


