import React, {useCallback, useState} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import {styles} from './Person.style'
import moment from 'moment-with-locales-es6'
import {Avatar} from '../components'
import PersonIcons from './PersonIcons'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const PersonUsingPassingState: FC<PersonProps> = ({person: initialPerson}) => {
  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment:0, retweet:0, heart:0}
  })
  const avatarPressed = useCallback(() => Alert.alert('avatar Pressed.'), [])
  const deletePressed = useCallback(() => Alert.alert('delete Pressed.'), [])

  return(
    <View style={[styles.view]}>
       <View style={[styles.leftView]}>
         <Avatar uri={person.avatar} size={50} onPress={avatarPressed}/>
       </View>
       <View style={[styles.rightView]}>
         <Text style={[styles.name]}>{person.name}</Text>
         <Text style={[styles.email]}>{person.email}</Text>
         <View style={[styles.dateView]}>
           <Text style={[styles.text]}>{moment(person.createdDate).startOf('day').fromNow()}
           </Text>
           <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed}/>
         </View>
         <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
         <Image style={[styles.image]} source={{uri:person.image}}/>
         <PersonIcons person={person} setPerson={setPerson} />
       </View>
     </View>
  )
}

export default PersonUsingPassingState

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