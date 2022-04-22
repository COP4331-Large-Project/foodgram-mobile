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
import Dashboard from './Dashboard'
import { useTogglePasswordVisibility } from '../helpers/passwordVisibility';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function LoginScreen({ navigation }) 
{
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [message, setMessage] = useState('');
  //const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const onLoginPressed = async event => 
  {
    const usernameError = usernameValidator(username.value)
    const passwordError = passwordValidator(password.value)

    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError })
      setPassword({ ...password, error: passwordError })
      return
    }

    event.preventDefault();
    var obj = {login:username.value,password:password.value};
    var js = JSON.stringify(obj);
    try
    {    
      const response = await fetch('https://foodgram-demo.herokuapp.com/api/login',
      {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
        var res = JSON.parse(await response.text());
        // console.log(res.id);
        if( res.id <= 0 || res.id == undefined)
        {
            setMessage('User/Password Combination Incorrect');
        }
        else
        {
            console.log(res.id);
            var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
            //localStorage.setItem('user_data', JSON.stringify(user));
            setMessage('SUCCESS');
            console.log(message);
            navigation.navigate(Dashboard);
        }
    }
    catch(e)
    {
        console.log(e.toString());
        return;
    }    
  };

  return (
    <SafeAreaView style={styles.Safe}>
      <ScrollView style={styles.Scroll}>
        <Background>
          <BackButton goBack={navigation.goBack} />
          <Logo />
          <Text style={{marginTop:10, fontSize:15, color:'red'}}>{message}</Text>
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
      </ScrollView>
    </SafeAreaView>
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
  Safe: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  Scroll: {
    backgroundColor: '#ffffff',
  },
})