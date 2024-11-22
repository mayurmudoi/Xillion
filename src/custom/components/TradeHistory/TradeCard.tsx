import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Fonts} from "../../../GlobalStyles.tsx";
import LinearGradient from "react-native-linear-gradient";

const {width: width} = Dimensions.get('window');

const TradeCard = ({buyPrice, stockName, qty, investedAmount, status, roi, returnAmount, ltp}) => {
	const getTextColor = (value) => {
		if (parseFloat(value) > 0) {
			return 'lightgreen';
		}
		if (parseFloat(value) < 0) {
			return 'red';
		}
		return 'white';
	};
	return (

		<LinearGradient colors={['rgba(157,70,190,0.6)', 'rgba(98,75,220,0.6)']} start={{x: 0, y: 0}}
						end={{x: 1, y: 0}} style={styles.tradeCardContainer}>
			<View style={styles.tradeCard}>
				<View style={[styles.row1, {flex: 1}]}>
					<Text style={styles.buyPrice}>Buy Price: {buyPrice}</Text>
					<Text style={styles.stockName}>{stockName}</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={styles.buyPrice}>Invested {investedAmount} · </Text>
						<Text style={styles.buyPrice}>QTY {qty}</Text>
					</View>
				</View>
				<View style={styles.row3}>
					<Text style={[styles.buyPrice, {color: getTextColor(roi)}]}>{roi}</Text>
					<Text style={[styles.returnAmount, {color: getTextColor(returnAmount)}]}>{returnAmount}</Text>
					{status === 'CLOSED' ? (
						<Text style={styles.status}>{status}</Text>
					) : (
						<Text style={styles.status}>LTP: {ltp}</Text>
					)}
				</View>
			</View>
		</LinearGradient>
	)
		;
};


const styles = StyleSheet.create({
	tradeCardContainer: {
		borderRadius: 12,
		padding: 8,
		marginBottom: 12,
	},
	tradeCard: {
		flexDirection: 'row',
	},
	buyPrice: {
		color: 'lightgrey',
		fontSize: 14,
		fontFamily: Fonts.montserratSemiBold,
	},
	status: {
		color: 'white',
		fontFamily: Fonts.montserratSemiBold,
		fontSize: 14,
	},
	stockName: {
		fontSize: 20,
		color: 'white',
		fontFamily: Fonts.montserratSemiBold,
	},
	returnAmount: {
		fontSize: 24,
		color: 'white',
		fontFamily: Fonts.montserratSemiBold,
	},
	row1: {
		justifyContent: 'space-between',
	},
	row2: {
		width: width * 0.20,
	},
	row3: {
		alignItems: 'flex-end',
		width: width / 2,
	},
});

export default TradeCard;
