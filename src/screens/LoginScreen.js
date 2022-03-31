import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { usernameValidator } from '../helpers/usernameValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const usernameError = usernameValidator(username.value)
    const passwordError = passwordValidator(password.value)
    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  // const [loginName, setUsername] = useState({ value: '', error: '' })
  // const [loginPassword, setPassword] = useState({ value: '', error: '' })
  // let bp = require('./Path.js');

  // const doLogin = async event => 
  //   {
  //       event.preventDefault();
  //       var obj = {login:loginName.value,password:loginPassword.value};
  //       var js = JSON.stringify(obj);
  //       try
  //       {    
  //         const response = await fetch(bp.buildPath('api/login'),
  //         {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
  //           var res = JSON.parse(await response.text());
  //           if( res.id <= 0 )
  //           {
  //               setMessage('User/Password combination incorrect');
  //           }
  //           else
  //           {
  //               var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
  //               localStorage.setItem('user_data', JSON.stringify(user));
  //               setMessage('');
  //               navigation.reset({
  //                     index: 0,
  //                     routes: [{ name: 'Dashboard' }],
  //               })
  //           }
  //       }
  //       catch(e)
  //       {
  //           console.log(e.toString());
  //           return;
  //       }    
  //   };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})