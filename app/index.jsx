import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bootzie from '../assets/images/BootSmug.png'
import LinkButton from './LinkButton'

const index = () => {
  return (
    <View style={styles.container}>
    <View style={styles.imageRow}>
      <Image source={Bootzie} style={{ width: 200, height: 200 }} />
    </View>
      <Text style={styles.title}>Sylas Sanchez's Portfolio site{"\n\n"}</Text>
        <LinkButton href="/aboutApp">About the site</LinkButton>
        <LinkButton href="/resume">Resume</LinkButton>
        <LinkButton href="/portfolioList">Portfolio List</LinkButton>
        <LinkButton href="/blogPage">Blog posts</LinkButton>
        <LinkButton href="/contact">Contact</LinkButton>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
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