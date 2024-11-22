import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../srceens/HomeScreen';
import TradeHistory from '../srceens/TradeHistory.tsx';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{headerShown: false, animation:'ios_from_left'}}
			/>
			<Stack.Screen
				name="TradeHistory"
				component={TradeHistory}
				options={{headerShown: false, animation:'ios_from_right'}}

			/>
		</Stack.Navigator>
	);
};

export default Navigation;
