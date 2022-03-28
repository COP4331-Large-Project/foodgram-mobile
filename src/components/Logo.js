import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/foodgram_logo_2.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 310,
    marginBottom: 8,
  },
})