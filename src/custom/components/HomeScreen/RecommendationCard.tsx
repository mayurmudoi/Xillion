import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const RecommendationCard = () => {
	return (
		<LinearGradient
			colors={['rgba(197, 37, 255, 0.6)', 'rgba(57, 31, 220, 0.6)']}
			style={styles.linearGradient}
			start={{x: 0, y: 0}}
			end={{x: 1, y: 0}}
		>
			<View style={styles.data}>
				<Text style={styles.stockData}>ASHOKA</Text>
				<Text style={styles.stockData}>+10%</Text>
			</View>
			<View style={styles.detailsContainer}>
				<View style={styles.details}>
					<Text style={styles.optionsText}>Buy</Text>
					<Text style={styles.priceText}>₹248-251</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.optionsText}>StopLoss</Text>
					<Text style={styles.priceText}>₹223</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.optionsText}>Target</Text>
					<Text style={styles.priceText}>₹273</Text>
				</View>
			</View>
		</LinearGradient>
	);
};

export default RecommendationCard;

const styles = StyleSheet.create({
	data: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	details: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
		paddingVertical: 8,
		paddingHorizontal: 8,
		borderRadius: 16,
		marginVertical: 6,
	},
	stockData: {
		fontSize: 24,
		color: 'white',
	},
	optionsText: {
		color: 'lightgrey',
		fontSize: 16,
	},
	priceText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
