import AsyncStorage from '@react-native-async-storage/async-storage'
import FoodItem from 'components/foodItem'
import React from 'react'
import { View } from 'react-native'

export default function Cart() {
    return (
        <View style={{ marginHorizontal: 24, gap: 20 }}>
            <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                <Pressable style={{ width: 45, height: 45, borderRadius: 45, backgroundColor: "#ECF0F4", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.pop()}>
                    <AntDesign name="left" color="#000" size={18} />
                </Pressable>
                <Text style={{ fontSize: 17 }}>Cart</Text>
            </View>
            {AsyncStorage.getAllKeys().then(res => res.length > 0 ? res.forEach(k => <FoodItem meal={AsyncStorage.getItem(k)} />) : null)}
        </View>
    )
}
