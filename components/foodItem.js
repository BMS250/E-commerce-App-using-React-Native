import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function FoodItem({ meal, navigation, inCart = false }) {
    return (
        <View key={meal.idMeal} style={{ 
            width: inCart ? '100%' : 153, 
            backgroundColor: "#FFFFFF", 
            borderRadius: 16, 
            padding: 16, 
            marginHorizontal: inCart ? 0 : 4, 
            marginVertical: 8, 
            gap: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3, // For Android shadow
            borderWidth: 1,
            borderColor: "#E0E0E0"
        }}>
            <View style={{ height: inCart ? 120 : 100, borderRadius: 12, overflow: 'hidden' }}>
                <Image source={{ uri: meal.strMealThumb }} style={{ width: "100%", height: "100%", borderRadius: 12 }} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 700, color: "#333" }}>{meal.strMeal}</Text>
                <Text style={{ fontSize: 14, color: "#666", marginBottom: 8 }}>{meal.strCategory}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: 700, color: "#F58D1D" }}>$32</Text>
                    {!inCart && (
                        <Pressable 
                            style={{ 
                                width: 36, 
                                height: 36, 
                                borderRadius: 18, 
                                backgroundColor: "#F58D1D",
                                justifyContent: "center",
                                alignItems: "center"
                            }} 
                            onPress={() => navigation.navigate('Details', { meal: meal })}
                        >
                            <Text style={{ color: "white", fontSize: 20, fontWeight: 600 }}>+</Text>
                        </Pressable>
                    )}
                    {inCart && (
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Text style={{ fontSize: 16, color: "#666" }}>Qty: {meal.quantity || 1}</Text>
                            <Pressable style={{ padding: 8 }}>
                                <Text style={{ fontSize: 18, color: "#F58D1D" }}>✕</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}
