import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import MainNavigator from './src/screens/Mainavigator'

const styles = StyleSheet.create({
  safeAreaView: {flex: 1}
})

export default function App(){
  return(
    <SafeAreaView style={[styles.safeAreaView]}>
      <MainNavigator />
    </SafeAreaView>
  )
}