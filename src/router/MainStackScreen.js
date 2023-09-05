import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// import LaunchScreen from '../login'; // 这是我的登录页的第一个界面
// import HomePage from '../home'; // 这是tabbar界面

import { navigationRef } from './RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的
import stacks from './index'; // 这个文件里面放了项目中所有用到的界面

const MainStack = createNativeStackNavigator();

const MainStackScreen = (props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator initialRouteName={props.root}>
        {/* tab */}
        {/* <MainStack.Screen name="Tab" component={HomePage} options={{ headerShown: false }} /> */}
        {/* LaunchScreen */}
        {/* <MainStack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} /> */}
        {/* all screens */}
        {stacks.map((item, index) => (
          <MainStack.Screen key={index.toString()} name={item.name} component={item.component} options={item.options} />
        ))}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackScreen;
