import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FeedItem = () => (
  <View style={styles.feedItem} />
)

const styles = StyleSheet.create({
  feedItem: {
    width: '33%',
    height: 150,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#ccc'
  }
});
