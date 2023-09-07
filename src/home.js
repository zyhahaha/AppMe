import React, { useState } from 'react';
import {
    Button,
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
} from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
// import { navigate } from './libs/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

import Btcontent from './components/btcontent'

export default function BottomTabScreen() {
    const [index, setIndex] = React.useState(0);
    const [visible2, setVisible2] = useState(true);
    const toggleDialog2 = () => {
        setVisible2(!visible2);
      };

    return (
        <>
            <Btcontent />
        </>
    );
}
