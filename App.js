/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

export default function App() {
    const [data, setData] = useState()
    const getData = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'us',
                    category: 'business',
                    apiKey: '1118dfb335664e10b4cb624816689b58'
                }
            })
            setData(response.data.articles)

        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
                {data && data.map((item, i) => {
                    return (
                        <>
                            <View style={{flexDirection: 'row', marginVertical: 10, marginHorizontal: 5}}>
                                <Image source={{uri: item.urlToImage}} style={{width: 100, height: 100}}></Image>
                                <View style={{justifyContent:'space-between'}}>
                                    <Text style={{marginHorizontal: 5, fontWeight:'bold'}}>{item.title}</Text>

                                    <Text style={{marginHorizontal: 5}}>{item.author}</Text>
                                </View>
                            </View>
                        </>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}