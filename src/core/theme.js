import { DefaultTheme } from 'react-native-paper'

// sets the theme throughout the app
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary:'#3F3D56',
    secondary:'#414757',
    terciary: '#ff203a',
    // primary: '#ff203a',
    // secondary: '#3F3D56',
    // primary: '#560CCE',
    // secondary: '#414757',
    error: '#f13a59',
  },
}