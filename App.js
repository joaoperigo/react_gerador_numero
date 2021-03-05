
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      meuTexto: "Um texto inicial",
      contador:  numberMega()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button 
          title="Incrementar"
          onPress={ _ => this.setState({contador: numberMega() })}
        />
      </View>
    )
  }
}

function numberMega() {
  let arrayMega = [getRandomInt(60)];
  while(arrayMega.length < 6) {
    let number = getRandomInt(60);
    if(arrayMega.indexOf(number) < 0) { // can't repeat number
      arrayMega.push(number);   
    }
  }

  for(let i=5; i>0; i--) // for decoration
    arrayMega.splice(i, 0,  ' + ');
  
  return arrayMega;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
}

// //hook
// export default function App() {
//   const [outputText, setOutputText] = useState('Texto inicial');
//   return (
//     <View style={styles.container}>
//       <Text>{outputText}</Text>
//       <Button 
//         title="Alterar Texto"
//         onPress={() => {setOutputText('Novo Texto')}}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
