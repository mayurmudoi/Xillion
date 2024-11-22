import React from 'react';
import {Text, StyleSheet, Dimensions, FlatList, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TradeCard from '../custom/components/TradeHistory/TradeCard.tsx';

const {width, height} = Dimensions.get('window');

const tradeHistoryData = [
	{
		buyPrice: 100,
		stockName: 'TATA',
		qty: 100,
		investedAmount: '30,222.95',
		status: 'ONGOING',
		roi: '+3.8%',
		returnAmount: '+4000',
		ltp: 105,
	},
	{
		buyPrice: 200,
		stockName: 'RELIANCE',
		qty: 50,
		investedAmount: '15,111.47',
		status: 'CLOSED',
		roi: '+5.2%',
		returnAmount: '+2500',
	},
	{
		buyPrice: 80,
		stockName: 'INFY',
		qty: 200,
		investedAmount: '40,000.00',
		status: 'ONGOING',
		roi: '-1.5%',
		returnAmount: '-2000',
		ltp: 78,
	},
	{
		buyPrice: 150,
		stockName: 'HDFC',
		qty: 70,
		investedAmount: '10,500.00',
		status: 'CLOSED',
		roi: '0.0%',
		returnAmount: '0',
	},
	{
		buyPrice: 220,
		stockName: 'ICICI',
		qty: 40,
		investedAmount: '8,800.00',
		status: 'CLOSED',
		roi: '+6.0%',
		returnAmount: '+500',
	},
	{
		buyPrice: 120,
		stockName: 'SBIN',
		qty: 80,
		investedAmount: '9,600.00',
		status: 'ONGOING',
		roi: '+2.5%',
		returnAmount: '+240',
		ltp: 123,
	},
	{
		buyPrice: 350,
		stockName: 'ADANI',
		qty: 30,
		investedAmount: '10,500.00',
		status: 'CLOSED',
		roi: '+4.2%',
		returnAmount: '+450',
	},
	{
		buyPrice: 500,
		stockName: 'BHARTI',
		qty: 20,
		investedAmount: '10,000.00',
		status: 'ONGOING',
		roi: '-1.0%',
		returnAmount: '-100',
		ltp: 495,
	},
	{
		buyPrice: 450,
		stockName: 'MARUTI',
		qty: 25,
		investedAmount: '11,250.00',
		status: 'CLOSED',
		roi: '+3.5%',
		returnAmount: '+393.75',
	},
	{
		buyPrice: 300,
		stockName: 'BAJAJ',
		qty: 40,
		investedAmount: '12,00000.00',
		status: 'ONGOING',
		roi: '+1.8%',
		returnAmount: '+210006',
		ltp: 305,
	},
	{
		buyPrice: 700,
		stockName: 'L&T',
		qty: 10,
		investedAmount: '7,000000.00',
		status: 'CLOSED',
		roi: '-2.0%',
		returnAmount: '-140',
	},
	{
		buyPrice: 250,
		stockName: 'JSW',
		qty: 60,
		investedAmount: '15,000.00',
		status: 'ONGOING',
		roi: '+5.0%',
		returnAmount: '+750',
		ltp: 260,
	},
];
const TradeHistory = ({navigation}: any) => {
	return (
		<View style={styles.fullscreen}>
			<View style={styles.headerContainer}>
				<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
					<Image source={require('../assets/icons/back.png')} style={styles.icon}/>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>My Positions</Text>
			</View>
			<View style={styles.portfolioContainer}>
				<View style={styles.portfolioDetails}>
					<Text style={styles.lightText}>Current Value</Text>
					<Text style={styles.valueText}>$5000</Text>
				</View>
				<View style={styles.portfolioDetailsRight}>
					<Text style={styles.lightText}>Overall P&L</Text>
					<Text style={styles.valueText}>+2.5L</Text>
				</View>
			</View>
			<LinearGradient
				colors={['#430c58', '#391FDC']}
				style={styles.linearGradient}
				start={{x: 0, y: 0}}
				end={{x: 0, y: 1}}
			>
				<FlatList
					data={tradeHistoryData}
					renderItem={({item}) => (
						<TradeCard
							buyPrice={item.buyPrice}
							stockName={item.stockName}
							qty={item.qty}
							investedAmount={item.investedAmount}
							status={item.status}
							roi={item.roi}
							returnAmount={item.returnAmount}
							ltp={item.ltp}
						/>
					)}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
				/>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	fullscreen: {
		flex: 1,
		backgroundColor: 'black',
	},
	headerContainer: {
		backgroundColor: 'black',
		height: height * 0.08,
		flexDirection: 'row',
		alignItems: 'center',
	},
	backButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#26272b',
		borderRadius: 8,
		padding: 6,
		width: width * 0.1,
		height: width * 0.1,
		justifyContent: 'center',
		marginLeft: 8,
	},
	icon: {
		height: width * 0.06,
		width: width * 0.06,
		tintColor: 'white',
	},
	headerTitle: {
		color: 'white',
		fontSize: 18,
		marginLeft: 8,
	},
	portfolioContainer: {
		backgroundColor: '#4e3f7a',
		height: height * 0.08,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	portfolioDetails: {
		gap: 2,
		width: width / 2,
		paddingLeft: 8,
	},
	portfolioDetailsRight: {
		gap: 2,
		width: width / 2,
		alignItems: 'flex-end',
		paddingRight: 8,
	},
	lightText: {
		color: 'lightgray',
		fontSize: 18,
	},
	valueText: {
		color: 'lightgreen',
		fontSize: 24,
	},
	linearGradient: {
		flex: 1,
		padding: width * 0.02,
	},
});

export default TradeHistory;
