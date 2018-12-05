import { createSwitchNavigator } from '@react-navigation/core';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

export default createSwitchNavigator({
  Main: HomeScreen,
  Links: LinksScreen,
});
