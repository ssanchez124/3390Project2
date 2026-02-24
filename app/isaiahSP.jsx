import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const IsaiahSP = () => {
    return (
        <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Skills and Projects</Text>
                <Text style={styles.subTitle}>Skills</Text>
                <Text style={styles.regularText}>
                    Some skills I have would include Java, Python, C++, I am currently learning how to use React Native.{"\n\n"}
                    I haven't made any fully working personal projects besides simple things such as a library system on intellij, which is available to be viewed on my GitHub link.{"\n\n"} 
                    However, with some friends and classmates, we have made some projects such as a simple tower defense type game that mimics "plants vs zombies" called "college vs students".{"\n\n"}
                </Text>
                <Text style={styles.subTitle}>Project Ideas</Text>
                <Text style={styles.regularText}>
                    I have a few project ideas that I would like to work on in the future.{"\n\n"}
                    One of them is a Calorie Counting app that is easy to use. {"\n\n"}
                    Personally I have been trying to lose weight and was told by multiple sources to count my calories and protein.{"\n\n"}
                    However, what I realized was that they're alll either too expensive, not user friendly and innaccurate.{"\n\n"}
                    So, I would like to make an app that is free, easy to use and accurate for counting individual items and not just premade meals.{"\n\n"}
                </Text>
                <LinkButton href="/">Back to Home Page</LinkButton>
            </View>
        </ScrollView>
    )
}

export default IsaiahSP

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 18,
        alignSelf: 'center',
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
    marginBottom: 10
  }
})