import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SmallCard from '../custom/components/HomeScreen/SmallCard';
import RecommendationCard from '../custom/components/HomeScreen/RecommendationCard';
import ExecuteComponent from '../custom/components/HomeScreen/ExecuteComponent.tsx';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const recommendations = Array(10).fill({});

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.fullscreen}>
			<View style={styles.headerContainer}>
				<LinearGradient
					colors={['#670989', '#391FDC']}
					style={styles.linearGradient}
					start={{x: 0, y: 0.1}}
					end={{x: 0, y: 1}}
				>
					<View style={styles.headerRow}>
						<Image source={require('../assets/icons/user.png')} style={styles.icon}/>
						<Text style={styles.headerText}>XILLION</Text>
						<Image source={require('../assets/icons/notification.png')} style={styles.icon}/>
					</View>
					<View style={styles.fundsInfoContainer}>
						<Text style={styles.portfolioTitle}>Current Portfolio</Text>
						<View style={styles.fundsInfoRow}>
							<Text style={styles.amountText}>₹2,00,000</Text>
							<Image source={require('../assets/icons/refresh.png')} style={styles.icon}/>
						</View>
						<Text style={styles.unusedFundsLabel}>Unused Funds</Text>
						<Text style={styles.unusedFundsAmount}>₹1,00,000</Text>
					</View>
				</LinearGradient>
			</View>
			<View style={styles.midBarContainer}>
				<SmallCard icon={require('../assets/icons/download.png')} title="Portfolio"/>
				<SmallCard icon={require('../assets/icons/chat.png')} title="Ask AI"/>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.mainText}>Today's Recommendations</Text>
				<View style={styles.recommendationContainer}>
					<FlatList
						data={recommendations}
						nestedScrollEnabled={true}
						renderItem={() => <RecommendationCard/>}
						keyExtractor={(item, index) => index.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{paddingBottom: 20}}
					/>
					<Text style={styles.recommendationText}>
						On executing this basket, buy orders along with stop loss and target will be placed.
					</Text>
				</View>
				<ExecuteComponent navigation={navigation}/>
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
		height: height * 0.3,
	},
	linearGradient: {
		flex: 1,
		padding: width * 0.05,
	},
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: height * 0.02,
	},
	icon: {
		height: width * 0.06,
		width: width * 0.06,
		tintColor: 'white',
	},
	headerText: {
		color: 'white',
		fontSize: width * 0.06,
		fontWeight: 'bold',
	},
	fundsInfoContainer: {
		alignItems: 'center',
	},
	portfolioTitle: {
		color: 'white',
		fontSize: width * 0.045,
	},
	fundsInfoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: height * 0.01,
	},
	amountText: {
		color: 'white',
		fontSize: width * 0.08,
		fontWeight: 'bold',
		marginRight: width * 0.02,
	},
	unusedFundsLabel: {
		color: 'white',
		fontSize: width * 0.045,
	},
	unusedFundsAmount: {
		color: 'white',
		fontSize: width * 0.045,
		fontWeight: 'bold',
		marginTop: height * 0.005,
	},
	midBarContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: width * 0.05,
		marginVertical: height * 0.02,
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
	},
	mainText: {
		fontSize: width * 0.06,
		color: 'white',
		fontWeight: 'bold',
		marginVertical: height * 0.01,
	},
	recommendationContainer: {
		backgroundColor: '#585065',
		width: width,
		height: height * 0.4,
		borderRadius: width * 0.05,
		padding: width * 0.02,
		marginVertical: height * 0.02,
	},
	recommendationText: {
		fontSize: width * 0.04,
		color: 'white',
		textAlign: 'justify',
		marginTop: height * 0.01,
		padding: width * 0.01,
	},

});

export default HomeScreen;
