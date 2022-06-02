import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

import TinderCard from '../../container/TinderCard'

import users from '../../assets/data/users'

export default function Home() {
  return (
    <View style={styles.container}>
      <TinderCard items={users[5]}/>
    </View>
  )
}