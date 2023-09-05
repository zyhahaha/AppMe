import React from 'react';
import {
    SafeAreaView, ScrollView,
    StyleSheet
} from 'react-native';
import { Text, Card } from '@rneui/themed';

export default () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <Card>
                        <Text>2023-08-07 4M 20D</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>体重：12kg</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>
                            身高：50cm
                        </Text>
                    </Card>
                    <Card>
                        <Text>2023-08-07 4M 20D</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>体重：12kg</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>
                            身高：50cm
                        </Text>
                    </Card>
                    <Card>
                        <Text>2023-08-07 4M 20D</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>体重：12kg</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>
                            身高：50cm
                        </Text>
                    </Card>
                    <Card>
                        <Text>2023-08-07 4M 20D</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>体重：12kg</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>
                            身高：50cm
                        </Text>
                    </Card>
                    <Card>
                        <Text>2023-08-07 4M 20D</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>体重：12kg</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>
                            身高：50cm
                        </Text>
                    </Card>
                    <Card>
                        <Text>2023-08-07 4M 20D</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>体重：12kg</Text>
                        <Text style={StyleSheet.create({ fontSize: 16, fontWeight: 'bold' })}>
                            身高：50cm
                        </Text>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};