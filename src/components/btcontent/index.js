import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { Text, SearchBar, PricingCard, lightColors } from '@rneui/themed';
// import ImageViewer from 'react-native-image-zoom-viewer';
// import medicineList from './data/medicine.js.js'

const medicineList = []
export default () => {
    const [searchKeyword, setSearchKeyword] = React.useState("111");
    const [resultList, setResultList] = React.useState([{ name: 'aaa', type: '999' }]);

    const onUpdateSearch = (keyword) => {
        setSearchKeyword(keyword);

        if (keyword) {
            const resultList = medicineList.filter(v => v.name.includes(keyword))
            setResultList(resultList)
        }
    };
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={{
                        paddingTop: 100,
                        paddingBottom: 30
                    }}>
                        {/* <Text style={{
                            width: '100%',
                            fontSize: 22,
                            textAlign: 'center'
                        }}>总数据</Text> */}
                        <Text style={{
                            width: '100%',
                            fontSize: 30,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'rgb(173, 20, 87)'
                        }}>394898213</Text>
                        <Text style={{
                            width: '100%',
                            fontSize: 14,
                            textAlign: 'center',
                            color: 'rgb(134, 147, 158)'
                        }}>已解析：234234</Text>
                        {/* <Text style={{
                            width: '100%',
                            fontSize: 14,
                            textAlign: 'center'
                        }}>453453</Text> */}

                        {/* <PricingCard
                            color={lightColors.primary}
                            title="Free"
                            price="82394898213"
                            info={['453453']}
                            button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}

                            containerStyle={{
                                backgroundColor: 'transparent',
                                borderColor: '#F5F5F5'
                            }}
                        /> */}
                    </View>
                    {/* 搜索关键字 */}
                    <View style={{
                    }}>
                        <SearchBar
                            platform="ios"
                            placeholder="输入关键字"
                            onChangeText={onUpdateSearch}
                            value={searchKeyword}
                            cancelButtonTitle="取消"
                            cancelButtonProps={{
                                fontSize: 14
                            }}
                            inputStyle={{
                                fontSize: 14
                            }}
                            inputContainerStyle={{
                                // height: 38,
                                // margin: 10,
                                // backgroundColor: '#F5F5F5'
                            }}
                            containerStyle={{
                                backgroundColor: 'transparent'
                            }}
                        />
                    </View>
                    {
                        searchKeyword && resultList.map((resultItem, resultIndex) => {
                            return (
                                <View key={resultIndex.toString()} style={{
                                    marginTop: 15,
                                    marginBottom: 15
                                }}>

                                    <View style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        padding: 15,
                                        backgroundColor: '#fff'
                                    }}>
                                        <Text style={{
                                            fontSize: 14
                                        }}>Mastering the MixMastering the MixMastering the MixMastering the MixMastering the Mix</Text>

                                        <View style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{
                                                flex: 9,
                                                fontSize: 12,
                                                color: '#8F8F8F'
                                            }}>magnet:?xt=urn:btih:{resultItem.aaa || '9CD324BC7CD41B361F1F6D2701D8081856861960'}</Text>
                                            <Text style={{
                                                flex: 1,
                                                fontSize: 14,
                                                textAlign: 'right'
                                            }}>复制</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                flex: 1,
                                            }}>
                                                <Text style={{
                                                    fontSize: 14
                                                }}>热度：9999</Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                flex: 3,
                                            }}>
                                                <Text style={{
                                                    width: '100%',
                                                    fontSize: 14,
                                                    textAlign: 'right'
                                                }}>创建时间：2023-09-06 23:25:56</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
