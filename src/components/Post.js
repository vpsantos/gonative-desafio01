import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.author}>{data.author}</Text>
    <View style={styles.separator} />
    <Text style={styles.body}>{data.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },

  title: {
    marginBottom: 4,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    borderRadius: 10,
  },

  author: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#999',
  },

  separator: {
    height: 1,
    marginVertical: 10,
    backgroundColor: '#EEE',
  },

  body: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#666',
    lineHeight: 19,
  },
});

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
