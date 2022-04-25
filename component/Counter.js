import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
const numberInSeconds = 60;

class CustomCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 59,
      minutes: 0,
      hours: 0,
    };
  }

  componentDidMount() {
    this.manageCounter();
  }

  manageCounter = () => {
    // this converts seconds to hours
    let hours = numberInSeconds / (60 * 60);
    let minutes = 0;

    hours = hours + '';

    /// this get hours only
    let realHoursNumber = hours.substring(0, hours.indexOf('.'));

    // console.log(hours);

    if (realHoursNumber == '') {
      minutes = 59;

      realHoursNumber = hours - 1 == 0 ? 0 : hours - 1;
    } else {
      minutes = hours.substring(hours.indexOf('.')); /// .5

      minutes = minutes * 60;

      
    }

    this.setState({hours: realHoursNumber, minutes});

    setInterval(() => {
    

      this.setState({seconds: this.state.seconds - 1});

      if (
        this.state.hours == 0 &&
        this.state.minutes == 0 &&
        this.state.seconds-1 == 0
      ) {
        return;
      }

      if (this.state.seconds - 1 == 0) {
        this.setState({minutes: this.state.minutes - 1, seconds: 59});
      }
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.hours} : {this.state.minutes} : {this.state.seconds}
        </Text>
      </View>
    );
  }
}
export default CustomCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
