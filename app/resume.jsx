import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import LinkButton from './LinkButton'

/*
+Professional summary

+Technical skills

+Education

+Experience (work/projects/leadership)
*/

const GoalsPage = () => {
    return (
        <ScrollView style={{ backgroundColor: '#ADD8E6' }} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Resume</Text>
                    <Text style={styles.subTitle}>Sylas's Background</Text>
                    
                        <Text style={styles.goalTitle}>Coding languages</Text>
                        <Text style={styles.goalText}>Python, Javascript, C++, React Native, Unix.{"\n\n"}</Text>

                        <Text style={styles.goalTitle}>Education</Text>
                        <Text style={styles.goalText}>
                            California State University, Bakersfield - 1 year
                            Sonoma State University - 2 years{"\n\n"}
                        </Text>

                        <Text style={styles.goalTitle}>Experience</Text>
                        <Text style={styles.goalText}> 3 years of coding experience, with various small projects.{"\n\n"}</Text>

                    
                
                <LinkButton href="/">Back to Home Page</LinkButton>
            </View>
        </ScrollView>
    )
}

export default GoalsPage

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    subTitle: {
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    goalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    goalText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    },
    linkButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    color: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  }
})