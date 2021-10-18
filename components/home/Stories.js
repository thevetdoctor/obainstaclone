import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import users from './users';

function Stories() {
    // console.log(users)
    return (
        <View style={styles.storiesContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {users.map((user, idx) => (
                    <View key={idx} style={styles.userView}>
                        <Image source={{uri: user.image}} style={styles.storyImage} />
                        <Text style={styles.userTitle}>{
                            user.user.length > 6 ? user.user.slice(0, 6) : user.user
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories
