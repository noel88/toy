import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from 'react-native-shadow-cards';
import PushUpComponent from '../components/pushUpComponent';
import PullUpComponent from '../components/pullUpComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      pushUpComplete: 'start',
      pullUpComplete: 'padding',
    };
  }

  pushUpComplete = (eventValue, eventValue2) => {
    this.setState({pushUpComplete: eventValue});
    this.setState({pullUpComplete: eventValue2});
  };

  pullUpComplete = (eventValue) => {
    this.setState({pullUpComplete: eventValue});
  };

  render() {
    let {height, width} = Dimensions.get('window');
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.contentContainer}>
            <View style={styles.item1}>
              <Text style={styles.leftTitle}>Calisthenics</Text>
            </View>
            <View style={styles.item2}>
              <Icon
                style={styles.rightTitle}
                name={'calendar-month'}
                size={30}
                color={'black'}
              />
            </View>
          </View>
          <View>
            <Image
              style={{width: width, height: 200}}
              source={
                this.state.pushUpComplete === 'start'
                  ? require('../assets/push-up.jpg')
                  : require('../assets/pull-up.jpg')
              }
            />
          </View>
          <View style={styles.screen2}>
            <Card style={{padding: 10, margin: 10, height: 50}}>
              <Text style={styles.text}>상체 1일차</Text>
            </Card>
          </View>
        </SafeAreaView>
        {this.state.pushUpComplete === 'start' && (
          <PushUpComponent pushUpComplete={this.pushUpComplete} />
        )}
        {this.state.pullUpComplete === 'start' && (
          <PullUpComponent pullUpComplete={this.pullUpComplete} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  item1: {
    flex: 1,
  },
  item2: {
    flex: 1,
  },
  leftTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    // alignSelf: 'flex-end',
    marginLeft: 15,
  },
  img: {
    // aspectRatio: 1.9,
    // resizeMode: 'contain',
    // width: 150,
    // alignItems: 'center',
    // height: 150,
    // flex: 1,
    // scale: 0.55,
  },
  rightTitle: {
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  backTextWhite: {
    color: '#000',
  },
  rowFront: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 70,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
    // fontWeight: 'bold',
    // flex: 5,
  },
  subText: {
    alignItems: 'flex-start',
    fontSize: 12,
    marginLeft: 45,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 70,
  },
  backRightBtnLeft: {
    backgroundColor: '#f55858',
    right: 0,
  },
  screen: {
    // flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2: {
    // flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
  },
});
