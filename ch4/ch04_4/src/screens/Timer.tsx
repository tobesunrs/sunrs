import React, {useEffect, useCallback, useState} from 'react'
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native'
import {Colors} from 'react-native-paper'

const styles = StyleSheet.create({
  view : {flex:1, alignItems: 'center', backgroundColor:Colors.yellow300},
  title:{fontSize:30, fontWeight: '600'}
})

export default function Timer(){
  const [loding, setLoding] = useState(true)
  const toggleLoding = useCallback(() => setLoding((loding) => !loding), [])
  useEffect(() => {
    const id = setTimeout(() => setLoding(false), 3000)
    return () => clearTimeout(id)
  }, [loding])

  return(
    <View style={styles.view}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loding.toString()}</Text>
      <Button onPress={toggleLoding}
        title={loding ? 'stop loading' : 'start loading'} />
      {loding && (
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  )
}