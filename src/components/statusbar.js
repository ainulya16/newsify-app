import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{height:STATUSBAR_HEIGHT, backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

export { MyStatusBar as StatusBar }