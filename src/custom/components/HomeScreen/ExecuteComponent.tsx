import React from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useSharedValue, withSpring, interpolate} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {Fonts} from '../../../GlobalStyles.tsx';

const {width, height} = Dimensions.get('window');
const text = 'EXECUTE';

const ExecuteComponent = ({navigation}: any) => {
	const translateX = useSharedValue(0);

	useFocusEffect(
		React.useCallback(() => {
			translateX.value = 0;
		}, [])
	);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{translateX: translateX.value}],
	}));

	const onGestureEvent = (event: any) => {
		translateX.value = Math.max(0, Math.min(event.nativeEvent.translationX, width * 0.7 - width * 0.18));
	};

	const onHandlerStateChange = (event: any) => {
		if (event.nativeEvent.state === State.END) {
			if (translateX.value >= width * 0.7 - width * 0.18) {
				setTimeout(() => navigation.navigate('TradeHistory'), 300);
			} else {
				translateX.value = withSpring(0);
			}
		}
	};

	return (
		<View style={styles.executeContainer}>
			<PanGestureHandler
				onGestureEvent={onGestureEvent}
				onHandlerStateChange={onHandlerStateChange}
			>
				<Animated.View style={[styles.executeIconButton, animatedStyle]}>
					<Image source={require('../../../assets/icons/execute.png')} style={styles.executeIcon}/>
				</Animated.View>
			</PanGestureHandler>
			<View style={styles.textContainer}>
				{text.split("").map((letter, index) => {
					const letterOpacity = useAnimatedStyle(() => ({
						opacity: interpolate(
							translateX.value,
							[0, (width * 0.6 - width * 0.18) * ((index + 1) / text.length)],
							[1, 0]
						),
					}));
					return (
						<Animated.Text key={index} style={[styles.executeText, letterOpacity]}>
							{letter}
						</Animated.Text>
					);
				})}

			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	executeText: {
		fontSize: width * 0.056,
		fontWeight: '500',
		fontFamily: Fonts.montserratSemiBold,
		marginHorizontal: 1,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: height * 0.02,
		width: width * 0.7,
	},
	executeContainer: {
		backgroundColor: '#cacaca',
		width: width * 0.7,
		height: height * 0.08,
		borderRadius: 40,
		justifyContent: 'center',
		overflow: 'hidden',
		position: 'relative',
	},
	executeIconButton: {
		position: 'absolute',
		left: 0,
		borderWidth: 2,
		borderRadius: 40,
		padding: height * 0.015,
		backgroundColor: 'white',
		borderColor: '#7159ff',
		width: width * 0.18,
		justifyContent: 'center',
		alignItems: 'center',
	},
	executeIcon: {
		height: width * 0.1,
		width: width * 0.1,
	},
});

export default ExecuteComponent;
