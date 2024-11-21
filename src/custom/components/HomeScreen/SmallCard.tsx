import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');
const SmallCard = ({icon, title}: { icon: any, title: String }) => {
	return (
		<View style={styles.midBarContainer}>
			<Image source={icon} style={styles.icon}/>
			<Text style={styles.midBarDataText}>{title}</Text>
		</View>
	);
};

export default SmallCard;

const styles = StyleSheet.create({
	midBarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0d0422',
		padding: 10,
		borderRadius: 16,
		gap: 8,
		width: width / 2.8,
	},
	midBarDataText: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold',
	},
	icon: {
		height: 24,
		width: 24,
		tintColor: 'white',
	},
});
