import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Dimensions, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const ExecuteComponent = ({navigation}: any) => {
	return (
		<View style={styles.executeContainer}>
			<TouchableOpacity style={styles.executeIconButton} onPress={() => navigation.navigate('TradeHistory')}>
				<Image source={require('../../../assets/icons/execute.png')} style={styles.executeIcon}/>
			</TouchableOpacity>
			<Text style={styles.executeText}> EXECUTE </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	executeText: {
		fontSize: 24,
		fontWeight: '500',
		textAlign: 'center',
	},
	executeContainer: {
		backgroundColor: '#cacaca',
		width: width * 0.7,
		height: height * 0.08,
		borderRadius: 40,
		justifyContent: 'center',
	},
	executeIconButton: {
		position: 'absolute',
		borderWidth: 2,
		borderRadius: 40,
		padding: height * 0.015,
		backgroundColor: 'white',
		borderColor: '#7159ff',
		width: width * 0.18,
	},
	executeIcon: {
		height: width * 0.1,
		width: width * 0.1,
	},
});
export default ExecuteComponent;

