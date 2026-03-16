import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

/*
+Name

+Detailed description

+Years of experience

+Specializations (list)

+Skills overview

-Resume download button (PDF)

-Image
*/

const aboutapp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/images/favicon.png')} style={{ width: 100, height: 100 }} />

        <Text style={[styles.title, { marginTop: 20, marginBottom: 10, textAlign: 'center', }]}>
          Name
        </Text>
        <Text style={[styles.regularText, { marginBottom: 20, textAlign: 'center', }]}>
          Sylas Sanchez{"\n\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 10, textAlign: 'center', }]}>
          Description
        </Text>
        <Text style={[styles.regularText, { marginBottom: 10, textAlign: 'center', }]}>
          This is a portfolio website I made to showcase my projects, skills, and blog posts. 
          I built this website using React Native and Expo, and it's hosted on Vercel.{"\n\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 10, textAlign: 'center', }]}>
          Specializations
        </Text>
        <Text style={[styles.regularText, { marginBottom: 20, textAlign: 'center', }]}>
          - Web development{"\n"}
          - Mobile app development{"\n"}
          - Software development{"\n"}
        </Text>

        <Text style={[styles.title, { marginBottom: 10, textAlign: 'center', }]}>
          Skills
        </Text>
        <Text style={[styles.regularText, { marginBottom: 20, textAlign: 'center', }]}>
          I have experience with various programming languages and frameworks, 
          including Python, JavaScript, C++, React Native, and Unix.
        </Text>

        <LinkButton href="/">Download Resume PDF (doesnt work yet)</LinkButton>
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