import React, {createContext, useContext, useRef, useCallback} from 'react'
import type {FC, ComponentProps} from 'react'
import {findNodeHandle} from 'react-native'
import type {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export type FocusContextType ={}
const deffaultFocusContext ={}
