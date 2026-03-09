import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const aboutapp = () => {
  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/images/SySelf.png')} style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20, }} />

        <Text style={styles.title}>
            Some of the projects I've made 
        </Text>
        <Text style={styles.regularText}>
            
        </Text>
        <Text style={styles.regularText}>
            
        </Text>
        
        <LinkButton href="/sylasSP" style={styles.linkButton}> Skills / Project ideas</LinkButton>
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