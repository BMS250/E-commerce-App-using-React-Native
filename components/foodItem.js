import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function FoodItem({ meal, navigation }) {
    return (
        <View key={meal.item.idMeal} style={{ width: 153, backgroundColor: "#F6F6F6", borderRadius: 24, padding: 12, marginHorizontal: 4, marginVertical: 8, gap: 12 }}>
            <View style={{ minHeight: 100, flex: 1, borderRadius: 12 }}>
                <Image source={{ uri: meal.item.strMealThumb }} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ flex: 1, borderRadius: 12 }}>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>{meal.item.strMeal}</Text>
                <Text style={{ fontSize: 13 }}>{meal.item.strCategory}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: 700 }}>${meal.item.idMeal}</Text>
                    <Pressable style={{ width: 30, height: 30, borderRadius: 45, backgroundColor: "#F58D1D" }} onPress={() => navigation.navigate('Details')}>
                        <Text style={{ color: "white", fontSize: 24, fontWeight: 600, margin: "auto" }}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
