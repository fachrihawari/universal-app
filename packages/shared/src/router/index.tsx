import { createAppContainer, createStackNavigator } from './navigation'

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";


const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        path: ''
      },
      About: {
        screen: AboutScreen,
        path: 'about'
      }
    },
    {
      initialRouteName: 'Home',
    },
  ),
)

export default AppContainer