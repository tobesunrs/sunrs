import React from 'react'
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text, View} from 'react-native'
import {Colors} from 'react-native-paper'
let{width, height} = Dimensions.get('window')

export default function App(){
  return(
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.Text, {color: 'white'}]}>os : {Platform.OS}</Text>
      <Text style={[styles.Text, {color: 'yellow'}]}>width: {width} px</Text>
      <Text style={[styles.Text, {color: 'orange'}]}>height: {height} px</Text>

      <View style={[styles.box, {borderRadius: 10}]}/>
      <View style={[styles.box, styles.border]}/>
      <View style={[styles.box, styles.border, {borderRadius: 10}]}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  SafeAreaView: {backgroundColor: Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  Text: {fontSize: 20, marginBottom: 10, marginLeft: 50, marginTop: 20},
  box:{width: '70%', height: 100, backgroundColor: 'white', marginBottom:10, marginLeft: Platform.select({ios:20,android: 0})},
  border:{borderWidth:10, borderColor: Colors.lime500}
})