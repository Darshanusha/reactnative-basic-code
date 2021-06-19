import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ColourScreen from './screens/ColourScreen';
import CounterScreen from './screens/CounterScreen';
import HomeScreen from './screens/HomeScreen';


const navigator = createStackNavigator({
  HomeScreen: HomeScreen,
  ColourScreen: ColourScreen,
  CounterScreen: CounterScreen
},
{
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions:{
    title: 'App'
  }
});

export default createAppContainer(navigator); 