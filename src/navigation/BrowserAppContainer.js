import { createBrowserApp } from '@react-navigation/web';
import AppNavigator from './AppNavigator';

const BrowserAppContainer = createBrowserApp(AppNavigator);

export default BrowserAppContainer;
