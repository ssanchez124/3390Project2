import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Bootzie from '../assets/images/BootSmug.png'
import LinkButton from './LinkButton'
/*
+Full Name

+Professional Title / Occupation

+Short description (2–4 sentences)

+Profile image

+Call-to-action buttons (recommended)
*/
const index = () => {
  return (
    <ScrollView style={{ backgroundColor: '#ADD8E6' }} contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageRow}>
          <Image source={require('../assets/images/SySelf.png')} style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20, }} />
        </View>
      
        <Text style={styles.title}>Sylas Sanchez's Portfolio site{"\n\n"}</Text>
          <Text style={{fontSize: 18, topmargin: 15, marginBottom: 10}}>
              Hey, my name is Sylas Sanchez. I'm a Computer Science student at California 
              State University, Bakersfield. 
          </Text>
          <Text style={{fontSize: 18, topmargin: 15, marginBottom: 10}}>
              Occupation: Student, aspiring software developer
          </Text>
          <Text style={{fontSize: 18, topmargin: 15, marginBottom: 10}}>
              This website is a collection of my projects, skills, 
              and blog posts. Currently I'm a 3rd year student, and I'm looking forward to making 
              more projects.
          </Text>

          <LinkButton href="/aboutApp">About the site</LinkButton>
          <LinkButton href="/resume">Resume</LinkButton>
          <LinkButton href="/portfolioList">Portfolio List</LinkButton>
          <LinkButton href="/blogPage">Blog posts</LinkButton>
          <LinkButton href="/contact">Contact</LinkButton>
      </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    margintop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageRow: {
    flexDirection: 'row',      //  puts them side by side
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,                   // spacing between the images
    marginBottom: 20,
  }
})