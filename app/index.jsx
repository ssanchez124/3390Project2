import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bootzie from '../assets/images/BootSmug.png'
import Shadow from '../assets/images/Shadow.jpg'
import LinkButton from './LinkButton'

const index = () => {
  return (
    <View style={styles.container}>
    <View style={styles.imageRow}>
      <Image source={Bootzie} style={{ width: 200, height: 200 }} />
      <Image source={Shadow} style={{ width: 200, height: 200 }} />
    </View>
      <Text style={styles.title}>Introduction App {"\n\n"}</Text>
        <LinkButton href="/aboutApp">About our app</LinkButton>
        <LinkButton href="/goalsPage">Goals and Plans</LinkButton>
        <LinkButton href="/aboutIsaiah">About Isaiah</LinkButton>
        <LinkButton href="/aboutSylas">About Sylas</LinkButton>
      <LinkButton href="/Gallery">Gallery</LinkButton>
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