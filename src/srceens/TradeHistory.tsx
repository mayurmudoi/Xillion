import React from 'react';
import {Text, StyleSheet, Dimensions, FlatList, View, Image, TouchableOpacity} from 'react-native';
import TradeCard from '../custom/components/TradeHistory/TradeCard.tsx';
import {Fonts} from '../GlobalStyles.tsx';
import {tradeHistoryData} from '../custom/data/TradeHistoryData';
import PortFolio from "../custom/components/TradeHistory/Portfolio.tsx";

const {width, height} = Dimensions.get('window');

const TradeHistory = ({navigation}: any) => {
	return (
		<View style={styles.fullscreen}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Image source={require('../assets/icons/back.png')} style={styles.icon}/>
				</TouchableOpacity>
				<Text style={styles.headerText}>Trade History</Text>
				<Image source={require('../assets/icons/order.png')} style={styles.icon}/>
			</View>
			<View style={styles.linearGradient}>
				<FlatList
					data={tradeHistoryData}
					ListHeaderComponent={PortFolio}
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
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	fullscreen: {
		flex: 1,
		backgroundColor: '#201831',
	},
	headerContainer: {
		backgroundColor: '#201831',
		height: height * 0.08,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	backButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#5b5b5b',
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
		fontSize: width * 0.064,
		marginLeft: 8,
		fontFamily: Fonts.montserratSemiBold,
		alignSelf: 'center',
	},
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: width * 0.05,
	},
	headerText: {
		color: 'white',
		fontSize: width * 0.06,
		fontFamily: Fonts.montserratMedium,
	},
	linearGradient: {
		flex: 1,
		padding: width * 0.02,
	},
});

export default TradeHistory;
