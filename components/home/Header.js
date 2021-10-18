import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import styles from './styles';

function Header() {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Text style={styles.homeScreenTitle}>Instagram</Text>
            </TouchableOpacity>
            <View style={styles.headerIcons}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faPlusSquare } size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faHeart } size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.unreadBadge}>{Math.floor(Math.random() * 20)}</Text>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faFacebookMessenger } size={24}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;
