import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; // 控制启动页的包

import MainStackScreen from './src/router/MainStackScreen'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // 保证项目启动后，系统启动页一直显示
  }, []);

  setTimeout(() => {
    setAppIsReady(true)
  }, 1000) // 一秒后隐藏启动页，模拟网络请求

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync(); // 系统启动页消失（需要确保需要展示的界面已经准备好）
  }

  return (
      <MainStackScreen />
  );
}
