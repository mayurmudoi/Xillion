import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ExecuteComponent = () => {
	return (
		<TouchableOpacity style={styles.executeIconButton}>
			<Image source={require('../../../assets/icons/execute.png')} style={styles.executeIcon}/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	executeIconButton:{
		borderWidth:2,
		borderRadius: 40,
		padding: height * 0.015,
	},
	executeIcon: {
		height: width * 0.1,
		width: width * 0.1,
	},
});
export default ExecuteComponent;
