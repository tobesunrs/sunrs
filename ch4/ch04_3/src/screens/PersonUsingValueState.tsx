import React, {useCallback, useState} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import {styles} from './Person.style'
import moment from 'moment-with-locales-es6'
import {Avatar, IconText} from '../components'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const PersonUsingValueState: FC<PersonProps> = ({person: initialPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar Pressed.'), [])
  const deletePressed = useCallback(() => Alert.alert('delete Pressed.'), []) 
  const [comment, setComment] = useState<number>(0)
  const [retweet, setRetweet] = useState<number>(0)
  const [heart, setHeart] = useState<number>(0)
  const commentPressed = useCallback(() => setComment((comment) => comment + 1), [])
  const retweetPressed = useCallback(() => setRetweet((retweet) => retweet + 1), [])
  const heartPressed = useCallback(() => setHeart((heart) => heart + 1), [])

     return(
     <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar imageStyle={[styles.avatar]} uri={initialPerson.avatar} size={50} onPress={avatarPressed}/>
        </View>
        <View style={[styles.rightView]}>
          <Text style={[styles.name]}>{initialPerson.name}</Text>
          <Text style={[styles.email]}>{initialPerson.email}</Text>
          <View style={[styles.dateView]}>
            <Text style={[styles.text]}>{moment(initialPerson.createdDate).startOf('day').fromNow()}
            </Text>
            <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed}/>
          </View>
          <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{initialPerson.comments}</Text>
          <Image style={[styles.image]} source={{uri:initialPerson.image}}/>
          <View style={styles.countsView}>
            <IconText viewStyle={[styles.touchableIcon]} 
                                onPress={commentPressed} 
                                name="comment" size={24} 
                                color={Colors.blue500} 
                                textStyle={[styles.iconText]} 
                                text={comment}/>
            <IconText viewStyle={[styles.touchableIcon]} 
                                onPress={retweetPressed} 
                                name="twitter-retweet" size={24} 
                                color={Colors.purple500} 
                                textStyle={[styles.iconText]} 
                                text={retweet}/>
            <IconText viewStyle={[styles.touchableIcon]} 
                                onPress={heartPressed} 
                                name="heart" size={24} 
                                color={Colors.red500} 
                                textStyle={[styles.iconText]} 
                                text={heart}/>
          </View>
        </View>
      </View>
   )
 }

 export default PersonUsingValueState

// const Person: FC<PersonProps> = ({person}) =>{
//   const avatarPressed = useCallback(() => Alert.alert('avatar Pressed.'), [])
//   const deletePressed = useCallback(() => Alert.alert('delete Pressed.'), [])
//   const countIconPressed = useCallback((name: string) => () => Alert.alert(`${name} pressed.`), [])

//   return(
//     <View style={[styles.view]}>
//        <View style={[styles.leftView]}>
//          <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}/>
//        </View>
//        <View style={[styles.rightView]}>
//          <Text style={[styles.name]}>{person.name}</Text>
//          <Text style={[styles.email]}>{person.email}</Text>
//          <View style={[styles.dateView]}>
//            <Text style={[styles.text]}>{moment(person.createdDate).startOf('day').fromNow()}
//            </Text>
//            <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed}/>
//          </View>
//          <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
//          <Image style={[styles.image]} source={{uri:person.image}}/>
//          <View style={styles.countsView}>
//            <IconText viewStyle={[styles.touchableIcon]} 
//                                onPress={countIconPressed('comment')} 
//                                name="comment" size={24} 
//                                color={Colors.blue500} 
//                                textStyle={[styles.iconText]} 
//                                text={person.counts.coment}/>
//            <IconText viewStyle={[styles.touchableIcon]} 
//                                onPress={countIconPressed('retweet')} 
//                                name="twitter-retweet" size={24} 
//                                color={Colors.purple500} 
//                                textStyle={[styles.iconText]} 
//                                text={person.counts.retweet}/>
//            <IconText viewStyle={[styles.touchableIcon]} 
//                                onPress={countIconPressed('heart')} 
//                                name="heart" size={24} 
//                                color={Colors.red500} 
//                                textStyle={[styles.iconText]} 
//                                text={person.counts.heart}/>
//          </View>
//        </View>
//      </View>
//   )
// }

// export default Person

// const Person: FC<PersonProps> = ({person}) =>{
//   return(
//     <View style={[styles.view]}>
//       <View style={[styles.leftView]}>
//         <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}/>
//       </View>
//       <View style={[styles.rightView]}>
//         <Text style={[styles.name]}>{person.name}</Text>
//         <Text style={[styles.email]}>{person.email}</Text>
//         <View style={[styles.dateView]}>
//           <Text style={[styles.text]}>{moment(person.createdDate).startOf('day').fromNow()}
//           </Text>
//           <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed}/>
//         </View>
//         <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
//         <Image style={[styles.image]} source={{uri:person.image}}/>
//         <View style={styles.countsView}>
//           <IconText viewStyle={[styles.touchableIcon]} 
//                               onPress={countIconPressed('comment')} 
//                               name="comment" size={24} 
//                               color={Colors.blue500} 
//                               textStyle={[styles.iconText]} 
//                               text={person.counts.coment}/>
//           <IconText viewStyle={[styles.touchableIcon]} 
//                               onPress={countIconPressed('retweet')} 
//                               name="twitter-retweet" size={24} 
//                               color={Colors.purple500} 
//                               textStyle={[styles.iconText]} 
//                               text={person.counts.retweet}/>
//           <IconText viewStyle={[styles.touchableIcon]} 
//                               onPress={countIconPressed('heart')} 
//                               name="heart" size={24} 
//                               color={Colors.red500} 
//                               textStyle={[styles.iconText]} 
//                               text={person.counts.heart}/>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Person