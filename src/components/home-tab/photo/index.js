import React, { Component } from 'react';
// import { View, Modal, TouchableNativeFeedback, Text } from 'react-native';
import { Image } from '@rneui/themed';
import { FlatList, SafeAreaView, View, Modal, StyleSheet, ActivityIndicator } from 'react-native';
// import { Text, Card } from '@rneui/themed';
import ImageViewer from 'react-native-image-zoom-viewer';

// const images = [{
//     // Simplest usage.
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

//     // width: number
//     // height: number
//     // Optional, if you know the image size, you can set the optimization performance

//     // You can pass props to <Image />.
//     props: {
//         // headers: ...
//     }
// }, {
//     url: '',
//     props: {
//         // Or you can set source directory.
//         source: require('../../../../assets/splash.png')
//     }
// }]
const images = [
    { url: 'http://119.96.189.81:7788/ABoa/111.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/222.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/333.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/444.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/555.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/666.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/777.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/888.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/999.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/9990.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/9991.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/9992.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/9993.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/9994.jpg' },
    { url: 'http://119.96.189.81:7788/ABoa/9995.jpg' },
    // { url: 'http://119.96.189.81:7788/ABoa/v2.mp4' },
    // { url: 'http://119.96.189.81:7788/ABoa/v3.mp4' }
    // {
    //     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.b61e85948514dde6c8f2997871c60766?rik=WSmrFRL1fzIM2A&riu=http%3a%2f%2fpic1.bbzhi.com%2ffengjingbizhi%2fdiqiuguibaodachicunziranfengjingbizhijingxuandiyiji%2fnature_2008_landscape_1680_desktop_01_20183_11.jpg&ehk=UHw5ouJjdlJ4utvTAdWd8UZTuIpkI%2fMSeyoP%2fjtTbpQ%3d&risl=&pid=ImgRaw&r=0'
    // }, {
    //     url: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.g9UbVfyVZX-SfD09JcYr5QHaEK?pid=ImgDet&rs=1'
    // }, {
    //     url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M0B/03/06/ChMljl402K6IOTZbAARWayFg6S4AAQJPwFhuRIABFaD752.jpg'
    // }
].reverse()

const styles = StyleSheet.create({
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
});

export default class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            modalVisible: false
        }
    }

    render() {
        return (
            <>
                {/* <View style={{ height: 20 }}></View> */}
                <SafeAreaView>
                    <FlatList
                        data={images}
                        style={styles.list}
                        numColumns={2}
                        keyExtractor={ e => e.url }
                        renderItem={({ item, index }) => (
                            // <View style={{
                            //     padding: 20
                            // }}></View>
                            <Image
                                source={{ uri: item.url }}
                                containerStyle={styles.item}
                                PlaceholderContent={<ActivityIndicator />}
                                onPress={() => {
                                    // console.log('xxx', index)
                                    this.setState({
                                        modalVisible: true,
                                        index
                                    })
                                }}
                            />
                        )}
                    />
                </SafeAreaView>

                <View
                    style={{
                        padding: 10
                    }}
                >
                    <Modal
                        visible={this.state.modalVisible}
                        transparent={true}
                        animationType="slide"
                        statusBarTranslucent={true}
                        onRequestClose={() => this.setState({ modalVisible: false })}
                    >
                        <ImageViewer
                            imageUrls={images}
                            index={this.state.index}
                            onSwipeDown={() => {
                                // console.log('onSwipeDown');
                                () => this.setState({ modalVisible: false })
                            }}
                            onClick={() => {
                                this.setState({ modalVisible: false })
                            }}
                            enableSwipeDown={true}
                        />
                    </Modal>
                </View>
            </>
        )
    }
}

// const styles = StyleSheet.create({
//     list: {
//         width: '100%',
//         backgroundColor: '#000',
//     },
//     item: {
//         aspectRatio: 1,
//         width: '100%',
//         flex: 1,
//     },
// });

// const BASE_URI = 'https://source.unsplash.com/random?sig=';
// const styles = StyleSheet.create({
//     list: {
//         width: '100%',
//         backgroundColor: '#000',
//     },
//     item: {
//         aspectRatio: 1,
//         width: '100%',
//         flex: 1,
//     },
// });


// export default () => {
//     return (
//         <>
//             <SafeAreaView>
//                 <FlatList
//                     data={[...new Array(10)].map((_, i) => i.toString())}
//                     style={styles.list}
//                     numColumns={2}
//                     keyExtractor={(e) => e}
//                     renderItem={({ item }) => (
//                         <Image
//                             source={{ uri: 'http://119.96.189.81:7788/images/%E6%9A%97%E9%BB%91%E6%B3%95%E6%9C%AF%E5%B7%A5%E5%8E%82.png' }}
//                             containerStyle={styles.item}
//                             PlaceholderContent={<ActivityIndicator />}
//                         />
//                     )}
//                 />
//             </SafeAreaView>
//         </>
//     );
// };