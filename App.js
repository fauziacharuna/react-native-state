/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

export default function App() {
    const [nilai, setNilai] = useState(0)

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => setNilai(nilai + 1)}>
                <Tambah props={'Tambah'}/>
            </TouchableOpacity>
            <View>
                <Text style={{fontSize: 40, color: 'black', alignSelf: 'center'}}>{nilai}</Text>
            </View>
            <TouchableOpacity onPress={() => setNilai(nilai - 1)}>
                <Kurang props={'Kurang'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNilai(0)}>
                <Reset props={'Reset'}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export function Tambah({props}) {
    return (
        <View>
            <Text style={{fontSize: 20, color: 'blue', alignSelf: 'center'}}>{props}</Text>
        </View>
    )
}

export function Kurang({props}) {
    return (
        <View>
            <Text style={{fontSize: 20, color: 'blue', alignSelf: 'center'}}>{props}</Text>
        </View>
    )
}

export function Reset({props}) {
    return (
        <View>
            <Text style={{fontSize: 20, color: 'blue', alignSelf: 'center'}}>{props}</Text>
        </View>
    )
}

export function Nilai() {
    return (
        <View>
            <Text style={{fontSize: 40, color: 'black', alignSelf: 'center'}}></Text>
        </View>
    )
}