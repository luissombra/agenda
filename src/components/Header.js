import React from 'react';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' />
  );
  
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon}/>
  );


const TopBar = () => (
    <TopNavigation
    leftControl={BackAction()}
    title='Application Title'/>
)

export default TopBar;
