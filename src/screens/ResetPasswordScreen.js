import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import LoginScreen from './LoginScreen'

export default function ResetPasswordScreen({ navigation }) 
{
  const [email, setEmail] = useState({ value: '', error: '' })
  const [message, setMessage] = useState('')

  const sendResetPasswordEmail = async event => 
  {
    const emailError = emailValidator(email.value)

    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }

    event.preventDefault();

    console.log(email.value);
    var obj = {Email : email.value};
    var js = JSON.stringify(obj);
    try
    {    
      const response = await fetch('https://foodgram-demo.herokuapp.com/api/forgotpassword',
      {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      //console.log(res.id);
      if( res.id <= 0 || res.id == undefined)
      {
          setMessage(json.error);
      }
      else
      {
          //console.log(res.id);
          var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
          //localStorage.setItem('user_data', JSON.stringify(user));
          setMessage('SUCCESS');
          console.log(message);
          //navigation.navigate(LoginScreen);
      }
    }
    catch(e)
    {
        console.log(e.toString());
        return;
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Submit
      </Button>
    </Background>
  )
}