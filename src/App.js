import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FeedItem } from './components/FeedItem';
import { Highlight } from './components/Highligh';
import { StoryItem } from './components/StoryItem';

const stories = ['Programação', 'Lorem', 'Ipsum', 'Aulas', 'Javascript']

// TODO: Transformar Header em component
// TODO: Transformar o Profile em component
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
          <View style={styles.profilePic}>
            <Highlight width={100} height={100} />
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profileStatus}>
              <View style={styles.profileStatusText}>
                <Text>114</Text>
                <Text>publicações</Text>
              </View>
              <View style={styles.profileStatusText}>
                <Text>43.4K</Text>
                <Text>seguidores</Text>
              </View>
              <View style={styles.profileStatusText}>
                <Text>1</Text>
                <Text>seguindo</Text>
              </View>
            </View>
            <Text>Let's Code</Text>
            <Text>Escola de programação</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          style={styles.storyWrapperScrollView}
          contentContainerStyle={styles.storyWrapper}
        >
          {stories.map(story => (
            <StoryItem key={story}>
              <Text>{story}</Text>
            </StoryItem>
          ))}
        </ScrollView>
        <View style={styles.feedWrapper}>
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'center'
  },
  profileStatus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileStatusText: {
    alignItems: 'center'
  },
  profilePic: {
    width: '30%',
  },
  profileInfo: {
    width: '70%'
  },
  storyWrapperScrollView: {
    flexGrow: 0,
  },
  storyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feedWrapper: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
