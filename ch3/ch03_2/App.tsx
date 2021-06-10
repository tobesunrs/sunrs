import React from 'react'
// prettier-ignore
import {StyleSheet, SafeAreaView, ImageBackground, Image, View, Platform, Text, Alert} from 'react-native'
import * as D from './src/data'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50

const text = `Almost before wo knew it, wo had left the ground.`
const onIconPressed = () => Alert.alert('icon Pressed')

export default function App(){
  return(
      <SafeAreaView style={styles.flex}>
        <ImageBackground
          style={[styles.flex, styles.ImageBackground]}
          source={require('./src/assets/images/bg.jpg.jpg')}>
          <Image source={{uri:avatarUrl}} style={[styles.image]}></Image>
          <View style={[styles.flex, styles.padding10]}>
            <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
            <Text style={[styles.text, styles.medium]}>{text} [meduim]</Text>
            <Text style={[styles.text, styles.semiBold]}>{text} [semi bold]</Text>
            <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
          </View>
          <Icon name="home" size={50} color={Colors.lightBlue500} onPress={onIconPressed}></Icon>
        </ImageBackground>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  flex:{flex: 1},
  ImageBackground:{padding:10},
  //backgroundImage:{flex:1},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  padding10: {padding:10},
  text:{textAlign:'center', fontSize:25, color:'white', marginBottom:10},

  regular:{fontFamily:'DancingScript-Regular', fontWeight:'400'},
  medium:{fontFamily:'DancingScript-Medium', fontWeight:'500'},
  semiBold:{fontFamily:'DancingScript-SemiBold', fontWeight:'600'},
  bold:{fontFamily:'DancingScript-Bold', fontWeight:Platform.select({ios:'700', android:'600'})},
})