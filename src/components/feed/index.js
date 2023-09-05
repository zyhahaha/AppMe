import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Image } from '@rneui/themed';

import { replace } from '../../router/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

export default class Photo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let clickAvatarCount = 0

        const birthMonth = 3
        const birthDate = 17

        let growMonth = (new Date()).getMonth() + 1 - birthMonth
        let growDate = 0
        const nowDate = (new Date()).getDate()
        if (nowDate < birthDate) {
            growMonth = growMonth - 1
            growDate = 30 - Math.abs(nowDate - birthDate)
        } else {
            growDate = nowDate - birthDate
        }
        return (
            <>
                <View style={{
                    position: 'relative',
                    height: 200
                }}>
                    <View style={{
                        height: 200,
                        width: '100%',
                        backgroundColor: '#00000033',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }}></View>

                    <Image
                        source={{ uri: 'http://119.96.189.81:7788/ABoa/9993.jpg' }}
                        containerStyle={{
                            width: '100%',
                            flex: 1,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />

                    <View style={{
                        opacity: this.props.tabIndex === 1 ? 0 : 1,
                        position: 'absolute',
                        bottom: 50,
                        left: 30,
                        zIndex: 2
                    }}>
                        <Image
                            source={{ uri: 'http://119.96.189.81:7788/ABoa/9995.jpg' }}
                            containerStyle={{
                                width: 50,
                                height: 50,
                                borderRadius: 50
                            }}
                            PlaceholderContent={<ActivityIndicator />}
                            onPress={() => {
                                clickAvatarCount++
                                if (clickAvatarCount === 5) {
                                    replace('LoginScreen')
                                }
                                setTimeout(() => {
                                    clickAvatarCount = 0
                                }, 2000)
                            }}
                        />
                    </View>
                    <View style={{
                        opacity: this.props.tabIndex === 1 ? 0 : 1,
                        position: 'absolute',
                        bottom: 58,
                        left: 90,
                        zIndex: 2
                    }}>
                        <Text style={{
                            color: '#fff'
                        }}>赵小福</Text>
                        <Text style={{
                            color: '#fff'
                        }}>{growMonth}个月{growDate}天</Text>
                    </View>

                    <View style={{
                        // opacity: this.props.tabIndex === 1 ? 0 : 1,
                        position: 'absolute',
                        bottom: 2,
                        left: 0,
                        zIndex: 2,
                        flexDirection: 'row'
                    }}>
                        <View onStartShouldSetResponder={() => this.props.setTabIndex(0)} style={{
                            flex: 1,
                            height: 25,
                        }}><Text style={{ textAlign: 'center', color: '#fff' }}>首页</Text></View>
                        <View onStartShouldSetResponder={() => this.props.setTabIndex(1)} style={{
                            flex: 1,
                            height: 25,
                        }}><Text style={{ textAlign: 'center', color: '#fff' }}>相册</Text></View>
                        <View onStartShouldSetResponder={() => this.props.setTabIndex(2)} style={{
                            flex: 1,
                            height: 25,
                        }}><Text style={{ textAlign: 'center', color: '#fff' }}>疫苗接种</Text></View>
                    </View>

                    <View style={{
                        // opacity: this.props.tabIndex === 1 ? 0 : 1,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 2,
                        flexDirection: 'row'
                    }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}
