import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStore, faSearch, faShoppingBag, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

function FooterIcons() {
    return (
            <View style={styles.footerIcons}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faStore } size={30} secondaryOpacity={ 0.9 }/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faSearch } size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faCameraRetro } size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.headerIcon} icon={ faShoppingBag } size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={{uri : 'https://i.insider.com/5b881eec3cccd119008b4582?width=700'}}
                        style={styles.footerImage}
                    />
                </TouchableOpacity>
            </View>
    )
}

export default FooterIcons;
