import React from 'react';
import {
    Modal,
    SafeAreaView, ScrollView,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { Text, Image } from '@rneui/themed';
import ImageViewer from 'react-native-image-zoom-viewer';
import computeCountDays from './utils/compute.js'

export default () => {
    const [imagesUrl, setImagesUrl] = React.useState([]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const [modalVisible, setModalVisible] = React.useState(false);

    const nowMonth = (new Date()).getMonth() + 1
    const nowDate = (new Date()).getDate()
    return (
        <>
            <SafeAreaView>
                <ScrollView>
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
                            {/* 每日 */}
                            <View style={{
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
                                    <Text>{nowMonth}月{nowDate}日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>小福今天{computeCountDays(Date.parse('2023-03-17')).days}天了</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>{nowMonth}月{nowDate}日 8:00</Text>
                                </View>
                            </View>
                            {/* 照片 */}
                            <View style={{
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
                                    <Text>7月22日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    backgroundColor: '#fff',
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{ uri: 'http://119.96.189.81:7788/ABoa/9992.jpg' }}
                                        containerStyle={{
                                            aspectRatio: 1,
                                            // width: 120,
                                            borderRadius: 10,
                                            flex: 1,
                                        }}
                                        PlaceholderContent={<ActivityIndicator />}
                                        onPress={() => {
                                            setImagesUrl([{url: 'http://119.96.189.81:7788/ABoa/9992.jpg'}])
                                            setModalVisible(true)
                                        }}
                                    />

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flex: 1,
                                        marginTop: 5,
                                        paddingLeft: 10,
                                    }}>
                                        <View>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                            }}>上传了一张照片</Text>
                                            <Text style={{
                                                marginTop: 5,
                                                fontSize: 12,
                                                color: '#8F8F8F'
                                            }}>7月22日 15:30</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* 身高体重 */}
                            <View style={{
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
                                    <Text>6月17日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>身高  60 cm</Text>
                                    <Text style={{
                                        fontSize: 14
                                    }}>体重  5.6 kg</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>6月17日 15:00</Text>
                                </View>
                            </View>
                            {/* 照片 */}
                            <View style={{
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
                                    <Text>6月16日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    backgroundColor: '#fff',
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{ uri: 'http://119.96.189.81:7788/ABoa/999.jpg' }}
                                        containerStyle={{
                                            aspectRatio: 1,
                                            // width: 120,
                                            borderRadius: 10,
                                            flex: 1,
                                        }}
                                        PlaceholderContent={<ActivityIndicator />}
                                        onPress={() => {
                                            setImagesUrl([{ url: 'http://119.96.189.81:7788/ABoa/999.jpg' }])
                                            setModalVisible(true)
                                        }}
                                    />

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flex: 1,
                                        marginTop: 5,
                                        paddingLeft: 10,
                                    }}>
                                        <View>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                            }}>上传了一张照片</Text>
                                            <Text style={{
                                                marginTop: 5,
                                                fontSize: 12,
                                                color: '#8F8F8F'
                                            }}>6月16日 15:00</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* 身高体重 */}
                            <View style={{
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
                                    <Text>4月29日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>身高  54.5 cm</Text>
                                    <Text style={{
                                        fontSize: 14
                                    }}>体重  4.1 kg</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>4月29日 15:03</Text>
                                </View>
                            </View>
                            {/* 身高体重 */}
                            <View style={{
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
                                    <Text>3月17日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>身高  49 cm</Text>
                                    <Text style={{
                                        fontSize: 14
                                    }}>体重  2.85 kg</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>3月17日 16:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
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
