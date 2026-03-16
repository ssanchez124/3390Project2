import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'
import { Link } from 'expo-router'
import posts from './posts'

const BlogPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Link href={`/blog/${post.slug}`} style={styles.title}>
            <Text style={styles.titleText}>{post.title}</Text>
          </Link>
          <Text style={styles.date}>{post.date}</Text>
          <Text style={styles.postText}>{post.excerpt}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default BlogPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4e0000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  postContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    marginBottom: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
    color: '#333',
  },
})
