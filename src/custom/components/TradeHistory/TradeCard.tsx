import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width: width} = Dimensions.get('window');

const TradeCard = ({buyPrice, stockName, qty, investedAmount, status, roi, returnAmount,ltp}) => {
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

		<View>
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
						<Text style={styles.status}>{status.toLowerCase()}</Text>
					) : (
						<Text style={styles.status}>LTP: {ltp}</Text>
					)}
				</View>
			</View>
			<View style={styles.hrLine}/>
		</View>
	)
		;
};


const styles = StyleSheet.create({
	tradeCard: {
		marginBottom: 8,
		marginTop: 8,
		flexDirection: 'row',
	},
	buyPrice: {
		color: 'lightgrey',
	},
	status: {
		color: 'white',
	},
	stockName: {
		fontSize: 24,
		color: 'white',
		fontWeight: '500',
	},
	returnAmount: {
		fontSize: 24,
		color: 'white',
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
	hrLine: {
		height: 0.4,
		width: width,
		backgroundColor: 'white',
		alignSelf: 'center',
	},
});

export default TradeCard;
