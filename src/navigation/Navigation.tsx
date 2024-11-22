import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../srceens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};

export default Navigation;
