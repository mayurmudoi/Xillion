import {Text, View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Fonts} from '../../../GlobalStyles.tsx';

const {width} = Dimensions.get('window');

const PortFolio = () => {
	return (
		<View style={styles.portfolioContainer}>
			<View style={styles.returnRow}>
				<View style={styles.portfolioDetails}>
					<Text style={styles.lightText}>Current Value</Text>
					<Text style={styles.valueText}>$5000</Text>
				</View>
				<View style={styles.portfolioDetailsRight}>
					<Text style={styles.lightText}>Overall P&L</Text>
					<Text style={styles.valueText}>+2.5L</Text>
				</View>
			</View>
			<View style={styles.hrLine}/>
			<Text style={styles.exitPositionText}>Exit all Positions</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	portfolioContainer: {
		justifyContent: 'space-evenly',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		width: width * 0.96,
		alignSelf: 'center',
		padding: 12,
		marginBottom:20,
	},
	returnRow: {
		flexDirection: 'row',
		width: width * 0.94,
		justifyContent: 'space-between',
		alignSelf: 'center',
		paddingHorizontal: 8,
	},
	portfolioDetails: {
		gap: 2,
	},
	portfolioDetailsRight: {
		gap: 2,
		alignItems: 'flex-end',
	},
	lightText: {
		color: 'lightgray',
		fontSize: 18,
		fontFamily: Fonts.montserratSemiBold,
	},
	valueText: {
		color: 'lightgreen',
		fontSize: 24,
		fontFamily: Fonts.montserratSemiBold,
	},
	hrLine: {
		height: 0.4,
		width: width * 0.88,
		backgroundColor: 'white',
		alignSelf: 'center',
		marginVertical: 8,
	},
	exitPositionText: {
		color: 'lightgrey',
		fontSize: 14,
		fontFamily: Fonts.montserratSemiBold,
	},
})
export default PortFolio;
