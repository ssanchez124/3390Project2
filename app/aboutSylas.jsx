import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const aboutapp = () => {
  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/images/SySelf.png')} style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20, }} />

        <Text style={styles.title}>
            Hey, I'm Sylas Sanchez, a student at California State University, Bakersfield. I'm currently pursuing a degree in Computer Science. 
        </Text>

        <Text style={[styles.title, {marginBottom: 5, marginTop: 20}]}>
            About me
        </Text>
        <Text style={styles.regularText}>
            I'm very passionate about technology and programming, I've wanted to be a progammer since I was a kid 
            and this app I've worked on along side with Isaiah is a small taste of what I'm capable of.
        </Text>
        <Text style={styles.regularText}>
            Some of my personal interests aside from programming include Video Games and Economics.
        </Text>
        <Text style={styles.regularText}>
            Video Games are a massive part of my life and are most defintely the reason why I got into programming in the first place.
        </Text>

        <Text style={[styles.title, {marginBottom: 5, marginTop: 15}]}>
            Future plans
        </Text>
        <Text style={styles.regularText}>
            I'm still not entirely sure what I want to do with my Computer Science degree, but I'm hoping to find a job in the tech industry after I graduate.
        </Text>
        <Text style={styles.regularText}>
            Some Subjects I'm interested in are Software Development and possibly Cyber Security though I'm not entirely sold on it yet.
        </Text>

        <Text style={[styles.title, {marginBottom: 5, marginTop: 20}]}>
                Fun fact
        </Text>
        <Text style={styles.regularText}>
            I built my own desktop computer when I was 13 years old; I still use it today all the time and I've slowly upgrading its parts over the years.
        </Text>
        <Text style={styles.regularText}>
            Oh also the dog on the home page is my dog Bootzie when he was a baby, he's a Yorkshire Terrier.
        </Text>
        
        <LinkButton href="/sylasSP" style={styles.linkButton}> Skills / Project ideas</LinkButton>
        <LinkButton href="https://github.com/ssanchez124" style={styles.linkButton}> View My GitHub Profile</LinkButton>
        <LinkButton href="/" style={styles.linkButton}> Back to Home Page</LinkButton>
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