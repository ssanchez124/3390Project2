import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const aboutapp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/images/favicon.png')} style={{ width: 100, height: 100 }} />

        <Text style={[styles.regularText, { marginTop: 20, marginBottom: 10, textAlign: 'center', }]}>
          This is a simple portfolio website created by Sylas Sanchez{"\n\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 20, textAlign: 'center', }]}>
          Tools used
        </Text>
        <Text style={[styles.regularText, { marginBottom: 10, textAlign: 'center', }]}>
          I usedReact Native and Expo to create this app, coding made in VScode, Code stored using Github, and hosted using Vercel{"\n\n"}
        </Text>

        <LinkButton href="/">Back to Home Page</LinkButton>
      </View>
    </ScrollView>
  )
}

export default aboutapp

const styles = StyleSheet.create({
  scrollContainer: {
      flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 16,
    fontWeight: "300"
  }
})