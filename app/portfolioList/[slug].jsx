import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import LinkButton from '../LinkButton';
import projects from '../projects';

const ProjectDetail = () => {
  const { slug } = useLocalSearchParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <View style={styles.container}>
        <Text>Project not found</Text>
        <LinkButton href="/portfolioList" style={styles.linkButton}>Back to Portfolio</LinkButton>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={project.image} style={styles.image} />
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <Text style={styles.techTitle}>Tech Stack:</Text>
        <Text style={styles.techStack}>{project.techStack.join(', ')}</Text>
        {project.github && (
          <TouchableOpacity onPress={() => Linking.openURL(project.github)} style={styles.githubButton}>
            <Text style={styles.githubText}>View on GitHub</Text>
          </TouchableOpacity>
        )}
        <LinkButton href="/portfolioList" style={styles.linkButton}>Back to Portfolio</LinkButton>
      </View>
    </ScrollView>
  );
};

export default ProjectDetail;

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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  techTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  techStack: {
    fontSize: 16,
    marginBottom: 20,
  },
  linkButton: {
    marginTop: 10,
  },
  githubButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    elevation: 3,
  },
  githubText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});