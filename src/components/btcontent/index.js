import React from 'react';
import axios from 'react-native-axios';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { Text, SearchBar, PricingCard, lightColors } from '@rneui/themed';
// import ImageViewer from 'react-native-image-zoom-viewer';
// import medicineList from './data/medicine.js.js'

// const medicineList = []
export default () => {
    const [searchKeyword, setSearchKeyword] = React.useState("");
    const [resultList, setResultList] = React.useState([]);
    const [resCount, setResCount] = React.useState(0);
    const [resParseCount, setResParseCount] = React.useState(0);
    const [resKeywordCount, setResKeywordCount] = React.useState(0);

    const onUpdateSearch = (keyword) => {
        setSearchKeyword(keyword);

        if (keyword) {
            const options = {
                url: 'http://119.96.189.81:8877/powerful/list',
                method: 'POST',
                data: { keyword, pageIndex: 1, pageSize: 20, status: 9, hot_count: 0 }
            };
            axios(options).then(response => {
                console.log(response.data.data.total, response.data.data.parseTotal)
                const resData = response.data.data
                const resCountTemp = resData.total || 0
                const resParseCountTemp = resData.parseTotal || 0
                const resKeywordCountTemp = resData.keywordTotal || 0
                const resultListTemp = resData.list || []
                setResCount(resCountTemp)
                setResParseCount(resParseCountTemp)
                setResKeywordCount(resKeywordCountTemp)

                setTimeout(() => {
                    setResultList(resultListTemp)
                }, 0)
                // nextFn && nextFn(response.data.data.list)

                // if (pageIndex > 100) pageIndex = 1
                // if (!response.data.data.list.length) pageIndex = 1
            })
                .catch(error => {
                })

            // const resultList = medicineList.filter(v => v.name.includes(keyword))
            // setResultList(resultList)
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
                        <Text style={{
                            width: '100%',
                            fontSize: 30,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'rgb(173, 20, 87)'
                        }}>{resCount}</Text>
                        <Text style={{
                            width: '100%',
                            fontSize: 14,
                            textAlign: 'center',
                            color: 'rgb(134, 147, 158)'
                        }}>已解析：{resParseCount}</Text>
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
                        searchKeyword && (
                            <View style={{ marginLeft: 10 }}>
                                <Text>搜索结果共{resKeywordCount}条</Text>
                            </View>
                        )
                    }
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
                                        }}>{resultItem.content_two}</Text>

                                        <View style={{
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{
                                                flex: 9,
                                                fontSize: 12,
                                                color: '#8F8F8F'
                                            }}>magnet:?xt=urn:btih:{resultItem.content}</Text>
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
                                                }}>热度：{resultItem.hot_count}</Text>
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
                                                }}>文件大小：{resultItem.content_three}</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            paddingTop: 5
                                        }}>
                                            <Text style={{
                                                width: '100%',
                                                fontSize: 14,
                                            }}>创建时间：{resultItem.createTime}</Text>
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
