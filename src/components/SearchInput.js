import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        clearButtonMode='while-editing'
        {...props}
      />
        <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  input: {
    height: 40,
    margin: 5,
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    // paddingTop: 8,
  },
})