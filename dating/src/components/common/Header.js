// import libraries to help create components
import React from 'react';
import { Text, View } from 'react-native';

// create a component
// eslint-disable-next-line
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 20
  }
};

// make the component available to other parts of the app
export { Header };
