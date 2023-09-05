import React from 'react';
import {
    Modal,
    SafeAreaView, ScrollView,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { Text, Image, SearchBar } from '@rneui/themed';
import ImageViewer from 'react-native-image-zoom-viewer';
import medicineList from './data/medicine.js'
import recordList from './data/record.js'

export default () => {
    const [imagesUrl, setImagesUrl] = React.useState([]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const [modalVisible, setModalVisible] = React.useState(false);

    const nowMonth = (new Date()).getMonth() + 1
    const nowDate = (new Date()).getDate()

    const [searchKeyword, setSearchKeyword] = React.useState("");
    const [resultList, setResultList] = React.useState([]);

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
                    {/* 搜索药品 */}
                    <View style={{
                    }}>
                        <SearchBar
                            platform="ios"
                            placeholder="输入药品名"
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
                                height: 38,
                                margin: 10,
                                backgroundColor: '#F5F5F5'
                            }}
                            containerStyle={{
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
                                        padding: 10,
                                        backgroundColor: '#fff'
                                    }}>
                                        <Text style={{
                                            fontSize: 14
                                        }}>药品名：{resultItem.name}</Text>
                                        <Text style={{
                                            marginTop: 5,
                                            fontSize: 12,
                                            color: '#8F8F8F'
                                        }}>用药建议：{resultItem.type}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                    {/* 疫苗 */}
                    {
                        !searchKeyword && (
                            <View style={{
                                paddingTop: 10,
                                paddingLeft: 10,
                                backgroundColor: '#F5F5F5'
                            }}>
                                <View style={{
                                    borderStyle: 'solid',
                                    borderLeftWidth: 2,
                                    borderLeftColor: '#E4E4E4'
                                }}>
                                    {/* 疫苗列表 */}
                                    {
                                        recordList.map((recordItem, recordIndex) => {
                                            return (
                                                <View key={recordIndex.toString()} style={{
                                                    marginBottom: 15
                                                }}>
                                                    <View style={{
                                                        marginLeft: -6,
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        borderStyle: 'solid',
                                                        borderColor: '#F3C026',
                                                        borderWidth: 2,
                                                        backgroundColor: '#F5F5F5'
                                                    }}></View>
                                                    <View style={{
                                                        marginTop: -15,
                                                        marginLeft: 10,
                                                        marginBottom: 10
                                                    }}>
                                                        <Text>{recordItem.date}</Text>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        padding: 10,
                                                        backgroundColor: '#fff'
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 14
                                                        }}>{recordItem.name}</Text>
                                                        <Text style={{
                                                            marginTop: 5,
                                                            fontSize: 12,
                                                            color: '#8F8F8F'
                                                        }}>{recordItem.type}</Text>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    }
                </ScrollView>
            </SafeAreaView>

            <View
                style={{
                    padding: 10
                }}
            >
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    statusBarTranslucent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ImageViewer
                        imageUrls={imagesUrl}
                        index={imageIndex}
                        onSwipeDown={() => {
                            () => setModalVisible(false)
                        }}
                        onClick={() => {
                            setModalVisible(false)
                        }}
                        enableSwipeDown={true}
                    />
                </Modal>
            </View>
        </>
    );
};
