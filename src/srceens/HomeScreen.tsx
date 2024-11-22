import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SmallCard from '../custom/components/HomeScreen/SmallCard';
import RecommendationCard from '../custom/components/HomeScreen/RecommendationCard';
import ExecuteComponent from '../custom/components/HomeScreen/ExecuteComponent.tsx';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../GlobalStyles.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
							<Text style={styles.amountText}>₹ 2,00,000</Text>
							<Image source={require('../assets/icons/refresh.png')} style={styles.icon}/>
						</View>
						<Text style={styles.unusedFundsLabel}>Unused Funds</Text>
						<Text style={styles.unusedFundsAmount}>₹ 1,00,000</Text>
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
				<GestureHandlerRootView>
					<ExecuteComponent navigation={navigation}/>
				</GestureHandlerRootView>
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
		height: height * 0.26,
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
		fontSize: width * 0.08,
		fontFamily: Fonts.montserratMedium,
		letterSpacing: 2,
	},
	fundsInfoContainer: {
		alignItems: 'center',
		padding: width * 0.02,
	},
	portfolioTitle: {
		color: 'white',
		fontSize: width * 0.045,
		fontFamily: Fonts.montserratRegular,
	},
	fundsInfoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: height * 0.01,
	},
	amountText: {
		color: 'white',
		fontSize: width * 0.08,
		marginRight: width * 0.02,
		fontFamily: Fonts.montserratSemiBold,
	},
	unusedFundsLabel: {
		color: 'white',
		fontSize: width * 0.040,
		fontFamily: Fonts.montserratRegular,
	},
	unusedFundsAmount: {
		color: 'white',
		fontSize: width * 0.045,
		marginTop: height * 0.005,
		fontFamily: Fonts.montserratSemiBold,
	},
	midBarContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: width * 0.05,
		position: 'absolute',
		bottom: height * 0.73,
		left: width / 2,
		right: width / 2,
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: height * 0.26 / 6,
	},
	mainText: {
		fontSize: width * 0.056,
		color: 'white',
		fontFamily: Fonts.montserratSemiBold,
		marginTop: height * 0.01,
	},
	recommendationContainer: {
		backgroundColor: '#585065',
		width: width * 0.96,
		height: height * 0.51,
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
		fontFamily: Fonts.rethinkSansRegular,
	},
});

export default HomeScreen;
