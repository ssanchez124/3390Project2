import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import posts from '../posts'

const BlogDetail = () => {
  const { slug } = useLocalSearchParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Post not found</Text>
        <Link href="/blogPage" style={styles.backLink}>
          <Text style={styles.backText}>Back to Blog</Text>
        </Link>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
            <Link href="/blogPage" style={styles.backLink}>
                <Text style={styles.backText}>← Back to Blog</Text>
            </Link>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.date}>{post.date}</Text>
            <Text style={styles.content}>{post.content}</Text>
        </View>
    </ScrollView>
  )
}

export default BlogDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4e0000',
  },
  postContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backLink: {
    marginBottom: 20,
  },
  backText: {
    color: '#000000',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  date: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: '#000000',
    lineHeight: 24,
  },
  error: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
})