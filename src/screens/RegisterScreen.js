import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { usernameValidator } from '../helpers/usernameValidator'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { firstNameValidator } from '../helpers/firstNameValidator'
import { lastNameValidator } from '../helpers/lastNameValidator'
import LoginScreen from './LoginScreen'

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState({ value: '', error: '' })
  const [lastName, setLastName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = async event => 
  {
    const firstNameError = firstNameValidator(firstName.value)
    const lastNameError = lastNameValidator(lastName.value)
    const emailError = emailValidator(email.value)
    const usernameError = usernameValidator(username.value)
    const passwordError = passwordValidator(password.value)
    
    if (emailError || usernameError || passwordError || firstNameError || lastNameError) {
      setFirstName({ ...firstName, error: firstNameError })
      setLastName({ ...lastName, error: lastNameError })
      setEmail({ ...email, error: emailError })
      setUsername({ ...username, error: usernameError })
      setPassword({ ...password, error: passwordError })
      return
    }

    event.preventDefault();
      
    var obj = 
    {FirstName:firstName.value,
    LastName:lastName.value,
    Login:username.value,
    Password:password.value, 
    Email:email.value
    };

    var js = JSON.stringify(obj);

    try
    {    
      const response = await fetch('https://foodgram-demo.herokuapp.com/api/register',
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      if( res.id <= 0 )
      {
          setMessage(res.error);
      }
      else
      {
          var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
          // localStorage.setItem('user_data', JSON.stringify(user));
          setMessage('');
          navigation.navigate(LoginScreen);
      }
    }
    catch(e)
    {
        console.log(e.toString());
        return;
    }    
  
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Create Account</Header>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstName.value}
        onChangeText={(text) => setFirstName({ value: text, error: '' })}
        error={!!firstName.error}
        errorText={firstName.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastName.value}
        onChangeText={(text) => setLastName({ value: text, error: '' })}
        error={!!lastName.error}
        errorText={lastName.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})