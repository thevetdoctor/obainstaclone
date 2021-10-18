import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FooterIcons from './FooterIcons';
import Header from './Header';
import Post from './Post';
import posts from './posts';
import Stories from './Stories';
import styles from './styles';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {posts.map((item, idx) => (
                    <Post key={idx} post={item}/>
                ))}
                <FooterIcons />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
