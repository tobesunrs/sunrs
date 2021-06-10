import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize = 30, iconsColor ='white'
const icons = ['home', 'table-search', 'face-profile-woman', 'account-settings']

const styles = StyleSheet.create({
  view :{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:10,
    backgroundColor:Colors.lightBlue500
  }
})

export default function BottomBar(){
  const children = icons.map((name) => (
    <Icon key={name} name={name} size={iconSize} color={iconsColor} />
  ))
  return <View style={styles.view}>{children}</View>
}