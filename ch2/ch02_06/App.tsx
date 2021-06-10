//  import React from 'react';
//  import{SafeAreaView, ScrollView} from 'react-native'
// import ClassComponent from './src/screens/ClassComponent';
// import ArrowComponent from './src/screens/ArrowComponent'
// import Person from './src/screens/Person'
// import * as D from './src/data'

// const people = D.makeArray(100).map(D.createRandomPerson)

//  export default function App(){
//    const children = people.map((person) => (
//      <Person key={person.id} person={person} />
//    ))
//    return(
//      <SafeAreaView>
//        <ScrollView>{children}</ScrollView>
//      </SafeAreaView>
//    )
//  };
import React from 'react'
import {SafeAreaView, Alert, Button} from 'react-native'
import {TouchableOpacity, TouchableHighlight, Text} from 'react-native'
import {TextInput} from 'react-native'

const onPress = () => Alert.alert('home pressed.', 'message')

export default function App(){
  return (
    <SafeAreaView>
      <Button title='Home' onPress={onPress}/>
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text:string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
        />
    </SafeAreaView>
  )
}
