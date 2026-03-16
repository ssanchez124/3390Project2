import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import LinkButton from './LinkButton';
import projects from './projects';

const PortfolioList = () => {
  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
            Some of the projects I've made 
        </Text>

        {projects.map((project) => (
          <Link key={project.slug} href={`/portfolioList/${project.slug}`} asChild>
            <TouchableOpacity style={styles.projectCard}>
              <Image source={project.image} style={styles.projectImage} />
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <Text style={styles.projectTech}>Tech: {project.techStack.join(', ')}</Text>
            </TouchableOpacity>
          </Link>
        ))}
        
        <LinkButton href="/" style={styles.linkButton}> Home page</LinkButton>
      </View>
    </ScrollView>
  );
};

export default PortfolioList;

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
    marginBottom: 20,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  projectImage: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  projectTech: {
    fontSize: 12,
    color: '#666',
  },
  linkButton: {
    marginTop: 20,
  },
})