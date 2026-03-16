import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import LinkButton from './LinkButton'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }
    Alert.alert('Thank you!', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    // Reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/images/SySelf.png')} style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20, }} />

        <Text style={styles.title}>
            Contact Me
        </Text>
        
        <Text style={styles.regularText}>
            Name: Sylas Sanchez
        </Text>
        <Text style={styles.regularText}>
            Email: ssanchez124@csub.edu
        </Text>

        <Text style={styles.subtitle}>Social Links</Text>
        <LinkButton href="https://github.com/ssanchez124" style={styles.linkButton}> My GitHub profile </LinkButton>
        <LinkButton href="https://linkedin.com/in/your-linkedin-profile" style={styles.linkButton}> My LinkedIn profile </LinkButton>

        <Text style={styles.subtitle}>Contact Form</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <LinkButton href="/" style={styles.linkButton}> Back to Home Page</LinkButton>
      </View>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
  scrollContainer: {
        flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ff7b7bff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  regularText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10, 
    marginBottom: 10
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkButton: {
    marginVertical: 5,
  },
})