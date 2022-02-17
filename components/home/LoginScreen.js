import React from 'react'
import { View, Image, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuPrGsBGzOn-ixXtFFVVt_7xnn0lYAa4caA&usqp=CAU';

const LoginScreen = ({navigation}) => {
    return (
        <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center", backgroundColor: 'transparent' }}>
            <Image source={{ uri: logoUrl, width: 160, height: 160 }} />
            <LoginForm navigation={navigation} />
        </View>
    )
}

const LoginForm = ({navigation}) => (
    <View style={{ width: '50' }}>
        <View style={styles.inputStyle}>
            <TextInput 
                autoCapitalize='none'
                placeholderTextColor='black'
                placeholder='Username'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
            />
        </View>
        <View style={styles.inputStyle}>
            <TextInput 
                placeholderTextColor='black'
                placeholder='Password'
                secureTextEntry={true}
                textContentType='password'
                autoCorrect={false}
                autoCapitalize='none'
            />
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.push('HomeScreen')} style={{ padding: 15, borderRadius: 15, backgroundColor: "black", alignContent: "center", justifyContent: "center", flexDirection: "row" }}>
                <Text style={{ color: "#fff" }}>Login</Text>                
            </TouchableOpacity> 
        </View>
    </View>
);

export default LoginScreen
