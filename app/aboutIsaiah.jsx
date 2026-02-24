import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Isaiah from '../assets/images/Isaiah.jpg'
import LinkButton from './LinkButton'

const AboutIsaiah = () => {
  return (
    <ScrollView style = {{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={Isaiah} style={{ width: 100, height: 100 }} />

        <Text style={styles.title}>Hello everyone! My name is Isaiah, and I am one of the creators of this app</Text>
        
        <Text style={styles.subTitle}>Introduction</Text>

        <Text style={styles.regularText}>
          I was born in December 2001, in Montebello.{"\n\n"}

          I am an undergraduate student at CSUB, majoring in Computer Science.{"\n\n"}</Text>

        <Text style={styles.subTitle}>Interests and Career Goals</Text> 

        <Text style={styles.regularText}>I have a personal interest in programming and music making, but the second one is just a hobby.{"\n\n"}

          I am learning that there is so much encapsulated within the field of computer science, and I am trying to find my own path within it.{"\n\n"}

          Currently, I have found that I do have an interest in software development and engineering, but I am currently learning about AI, IoT, and more on application development.{"\n\n"}

          I learned that I am not a fan of cybersecurity as much; however, I plan on getting security certifications in the future, as I do want to have a good understanding of it and I know that it is an important aspect of the tech industry.{"\n\n"}

          What ended up sparking my interest in Computer Science was my father-in-law, who tried getting me into CyberSecurity, and I even had that as my major in community college for a while.{"\n\n"}

          However, I found that I was very interested in programming but not so interested in the hardware aspect of I.T. That’s when I changed my major to Computer Science, and my interest in this field has only grown ever since.

          For these reasons, I am striving towards becoming a software engineer, but I am also open to exploring other career paths in the tech industry.{"\n\n"}
        </Text>

        <LinkButton href="/" style={styles.linkButton}>Back to Home Page</LinkButton>
        <LinkButton href="https://github.com/isaiahurquilla" style={styles.linkButton}>Github Page</LinkButton>
        <LinkButton href="/isaiahSP" style={styles.linkButton}>Skills and Projects</LinkButton>
      </View>
    </ScrollView>
  )
}


export default AboutIsaiah

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    width: '100%',
  },
  regularText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10, 
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
})