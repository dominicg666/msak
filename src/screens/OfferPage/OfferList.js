import * as React from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchRestarantList,openRestarantDetails } from '../../store/reducers/restaurant/actions';
import ShimmerList from './ShimmerList';
import { View, Text, Animated, FlatList, Image, Dimensions,TouchableOpacity } from 'react-native';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import styles from "./styles";
const CONTACTS = [
    { name: 'Marissa Castillo', number: 7766398169 },
    { name: 'Denzel Curry', number: 9394378449 },
    { name: 'Miles Ferguson', number: 8966872888 },

];

class OfferList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    componentWillMount() {

        let URL = this.props.apiService.base_url + this.props.apiService.getrestaurant_by_cat;
        let API_KEY = this.props.apiService.api_key;
        let KEY = this.props.routekey;

        this.props.fetchRestarantList({ URL, API_KEY, KEY });

    }
    _renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                this.props.openRestarantDetails({ restarant_id: item.restuarant_id })
                this.props.navigation.navigate("OfferView")
            }}
        >
            <View style={styles.cardView}>
                <View style={styles.mainViewStyle}>
                    <Image
                        style={styles.cardImg}
                        source={{ uri: item.picture }}
                    />
                </View>

                <View style={styles.mainView}>
                    <Text style={styles.priceTag}>{item.offerpcntg}</Text>
                    <Text style={styles.textStyleOne}>{item.restuarant_name}</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={styles.imageThree}
                            source={require("../../assets/location.png")}
                        />
                        <Text style={{ color: "#929497" }}>{item.distance} KM</Text>
                    </View>
                    <Text style={styles.textSix}>{item.food_type}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    // _ItemSeparator = () => <View style={styles.separator} />;

    render() {
        //  console.log('restarantList', this.props.restarantByCategoryService.restarantList);
        //no-data-foundShimmerList
        return this.props.restarantByCategoryService.restarantList && this.props.restarantByCategoryService.restarantList[`routekey_${this.props.routekey}`]
            && this.props.restarantByCategoryService.restarantList[`routekey_${this.props.routekey}`]['isRequest'] ?
            (<ShimmerList />) :
            this.props.restarantByCategoryService.restarantList && this.props.restarantByCategoryService.restarantList[`routekey_${this.props.routekey}`]
                && this.props.restarantByCategoryService.restarantList[`routekey_${this.props.routekey}`]['data']
                && this.props.restarantByCategoryService.restarantList[`routekey_${this.props.routekey}`]['data'].length > 0 ? (
                    <AnimatedFlatList
                        style={{ paddingTop: 70, paddingLeft: 12, paddingRight: 12, backgroundColor: "white" }}
                        data={this.props.restarantByCategoryService.restarantList[`routekey_${this.props.routekey}`]['data']}
                        keyExtractor={(item, i) => String(i)}
                        renderItem={this._renderItem}
                        // ItemSeparatorComponent={this._ItemSeparator}
                        {...this.props}
                    />
                ) : (<View style={{
                    flex: 1, paddingTop: 160, paddingLeft: 12, paddingRight: 12,
                    width: Dimensions.get('screen').width,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "white"

                }}>
                    <Image
                        style={{ height: 100, width: 180 }}
                        source={require("../../assets/no-data-found.png")}

                    />
                    <Text>No Data Found...</Text>
                </View>);
    }
}


const mapStateToProps = state => {
    return {
        apiService: state.ApiReducer,
        restarantByCategoryService: state.RestarantByCategoryReducer

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestarantList: ({ URL, API_KEY, KEY }) => dispatch(fetchRestarantList({ URL, API_KEY, KEY })),
        openRestarantDetails: (offer_id) => dispatch(openRestarantDetails(offer_id))
        

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferList);
