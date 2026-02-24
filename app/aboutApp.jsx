import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const aboutapp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/images/favicon.png')} style={{ width: 100, height: 100 }} />

        <Text style={[styles.regularText, { marginTop: 20, marginBottom: 10, textAlign: 'center', }]}>
          This is an introduction app created by Sylas and Isaiah. 
          We are both students at the California State Bakersfield,
          and we are creating mobile app using React Native and Expo. 
          We hope you enjoy our app!{"\n\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 20, textAlign: 'center' }]}>
          Contributions 
        </Text>
        <Text style={[styles.regularText, { marginBottom: 10, textAlign: 'center' }]}>
          Sylas: Home page, his about page, his skills and project ideas page, gallery page layout and design.{"\n\n"} 
        </Text>
        <Text style={[styles.regularText, { marginBottom: 15, textAlign: 'center', }]}>
          Isaiah: His about page, his skills and project ideas page, and the animation, style importing, and the Goals page{"\n\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 20, textAlign: 'center', }]}>
          Tools used
        </Text>
        <Text style={[styles.regularText, { marginBottom: 10, textAlign: 'center', }]}>
          We used React Native and Expo to create this app, coding made in VScode, Code stored using Github{"\n\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 20, textAlign: 'center', }]}>
          Reflection 
        </Text>
        <Text style={[styles.regularText, { marginBottom: 10, textAlign: 'center', }]}>
          This project was a good learning experience for both of us. The set up for getting the tools to 
          make the app was the hardest and most time consuming part.
          Once we were past that it was smooth sailing and we had a good time working together{"\n\n"}
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