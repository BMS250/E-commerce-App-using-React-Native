import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Details({ route, navigation }) {
    const { meal } = route.params;

    const [sizeIndex, SetSizeIndex] = useState(1)
    const [itemCounter, SetItemCounter] = useState(1)
    return (
        <ScrollView contentContainerStyle={{ gap: 20 }}>
            <View style={{ marginHorizontal: 24, gap: 20 }}>

                <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                    <Pressable style={{ width: 45, height: 45, borderRadius: 45, backgroundColor: "#ECF0F4", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.pop()}>
                        <AntDesign name="left" color="#000" size={18} />
                    </Pressable>
                    <Text style={{ fontSize: 17 }}>Details</Text>
                </View>
                <View style={{ width: 300, height: 184, borderRadius: 32, position: "relative" }}>
                    <Image source={meal.strMealThumb != null ? { uri: meal.strMealThumb } : require('../assets/images/pizza.avif')} width={"100%"} height={"100%"} />
                    <View style={{ position: "absolute", bottom: 20, right: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#adbac7", padding: 12, borderRadius: 45 }}>
                        <Feather name="heart" color="#FFF" size={24} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 12, alignItems: "center", padding: 20, borderColor: "#E9E9E9", borderRadius: 45, borderWidth: 1, alignSelf: "flex-start" }}>
                    <View style={{ width: 21, height: 21, borderRadius: 45 }}>
                        <Image source={require('assets/icons/market.png')} height={"100%"} />
                    </View>
                    <Text>Uttora Coffe House</Text>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>{meal.strMeal ?? "pizza calzone european"}</Text>
                <Text style={{ color: "#A0A5BA" }}>Prosciutto e funghi is a pizza variety that is topped with tomato sauce.</Text>
                <View style={{ flexDirection: "row", gap: 32 }}>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                        <EvilIcons name="star" color="#FF7622" size={24} />
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>4.7</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                        <Feather name="truck" color="#FF7622" size={24} />
                        <Text style={{ fontSize: 16 }}>Free</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                        <Fontisto name="clock" color="#FF7622" size={24} />
                        <Text style={{ fontSize: 16 }}>20 min</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 24, alignItems: "center" }}>
                    <Text>SIZE:</Text>
                    <Pressable onPress={() => SetSizeIndex(0)} style={{ width: 48, height: 48, borderRadius: 45, justifyContent: "center", alignItems: "center", backgroundColor: sizeIndex === 0 ? "#F58D1D" : "#F0F5FA" }}><Text style={{ color: sizeIndex === 0 ? "white" : "black", fontWeight: 700 }}>10"</Text></Pressable>
                    <Pressable onPress={() => SetSizeIndex(1)} style={{ width: 48, height: 48, borderRadius: 45, justifyContent: "center", alignItems: "center", backgroundColor: sizeIndex === 1 ? "#F58D1D" : "#F0F5FA" }}><Text style={{ color: sizeIndex === 1 ? "white" : "black", fontWeight: 700 }}>14"</Text></Pressable>
                    <Pressable onPress={() => SetSizeIndex(2)} style={{ width: 48, height: 48, borderRadius: 45, justifyContent: "center", alignItems: "center", backgroundColor: sizeIndex === 2 ? "#F58D1D" : "#F0F5FA" }}><Text style={{ color: sizeIndex === 2 ? "white" : "black", fontWeight: 700 }}>16"</Text></Pressable>
                </View>
                <Text>INGREDIENTS</Text>
                <View style={{ flexDirection: "row", gap: 24 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FFEBE4", padding: 14, borderRadius: 45 }}>
                        <Image source={require('assets/icons/salt.png')} height={"100%"} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FFEBE4", padding: 14, borderRadius: 45 }}>
                        <Image source={require('assets/icons/chicken.png')} height={"100%"} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FFEBE4", padding: 14, borderRadius: 45 }}>
                        <Image source={require('assets/icons/onion.png')} height={"100%"} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FFEBE4", padding: 14, borderRadius: 45 }}>
                        <Image source={require('assets/icons/felfel.png')} height={"100%"} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#F0F5FA", borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, gap: 32, marginBottom: 48 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 28 }}>$32</Text>
                    <View style={{ flexDirection: 'row', padding: 12, backgroundColor: "black", borderRadius: 45, justifyContent: "center", gap: 18, alignItems: "center" }}>
                        <Pressable onPress={() => SetItemCounter(itemCounter > 1 ? itemCounter - 1 : itemCounter)} style={{ width: 36, height: 36, backgroundColor: "#41414f", borderRadius: 45, justifyContent: "center", alignItems: "center" }}><Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>-</Text></Pressable>
                        <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>{itemCounter}</Text>
                        <Pressable onPress={() => SetItemCounter(itemCounter + 1)} style={{ width: 36, height: 36, backgroundColor: "#41414f", borderRadius: 45, justifyContent: "center", alignItems: "center" }}><Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>+</Text></Pressable>
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#F58D1D", paddingVertical: 24, borderRadius: 12 }}><Text style={{ margin: "auto", fontSize: 18, fontWeight: 700, color: "white" }}>ADD TO CART</Text></TouchableOpacity>
            </View>

        </ScrollView>
    )
}
