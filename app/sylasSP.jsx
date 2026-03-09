import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const aboutapp = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Skills and Project Ideas
      </Text>

      <Text style={[styles.title, {marginBottom: 5, marginTop: 30}]}>
        Skills
      </Text>
      <Text style={styles.regularText}>
        Some of my skills include Java, Python, C++, some JavaScript and I'm currently learning how to use React Native.
      </Text>

      <Text style={[styles.title, {marginBottom: 5, marginTop: 25}]}>
        Projects
      </Text>
      <Text style={styles.regularText}>
        Some of my project ideas include building a personal website to show off some of my apps, 
        building some kind of useful app which I haven't decided on yet, and making a simple video game.
      </Text>
      <Text style={styles.regularText}>
        My simple video game idea is still in the early idea stages but the goal is to attempt to make something 
        that is at least fun and won't take an obsene amount of time to make from scratch.
      </Text>
      <Text style={styles.regularText}>
        A project that I am currently working on this semester is making a security camera by using an 
        ESP32, the project is still in the planning phase but is coming along nicely.
      </Text>
      <Text style={styles.regularText}>

      </Text>
      <Text style={styles.regularText}>

      </Text>
      <LinkButton href="/aboutSylas" style={styles.linkButton}> Back to my About Page</LinkButton>
    </View>
  )
}

export default aboutapp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7b7bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10, 
    marginBottom: 10
  }
})