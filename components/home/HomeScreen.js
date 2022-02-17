import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import FooterIcons from './FooterIcons';
import Post from './Post';
import posts from './posts';
import Stories from './Stories';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {posts.map((item, idx) => (
                    <Post post={item} key={idx}/>
                ))}
            </ScrollView>
            {/* <FooterIcons /> */}
        </SafeAreaView>
    )
}

export default HomeScreen;
