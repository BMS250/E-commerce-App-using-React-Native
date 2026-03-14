import { StatusBar } from "expo-status-bar";
import {

    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from "react";

export default function Home({navigation}) {
    const [selectedIndex, SetSelectedIndex] = useState(0)
    return (
        // when using marginTop, the last row appears, but the orange circle be cut
        // when using paddingTop, the orange circle not be cut, but the last row disappears
        <ScrollView style={{ paddingHorizontal: 24 }}>
            <View style={{ display: "flex", gap: 16 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 20 }}>
                    <View style={{ display: "flex", flexDirection: "row", gap: 18 }}>
                        <View style={{ width: 45, height: 45, backgroundColor: "#ECF0F4", display: "flex", borderRadius: 45 }}>
                            <Image source={require('../assets/icons/menu.png')} style={{ width: 12, height: 16, margin: "auto" }} />
                        </View>
                        <View style={{ display: "flex", gap: 3 }}>
                            <Text style={{ color: "#FC6E2A", fontSize: 12, fontWeight: "700" }}>DELIVER TO</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
                                <Text style={{ color: "#676767" }}>Halal Lab Office</Text>
                                <Image source={require('../assets/icons/bottomArrow.png')} style={{ width: 10, height: 7 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 45, height: 45, backgroundColor: "#181C2E", display: "flex", borderRadius: 45, position: "relative" }}>
                        <Image source={require('../assets/icons/bag.png')} style={{ width: 18, height: 20, margin: "auto" }} />
                        <View style={{ width: 25, height: 25, backgroundColor: "#FF7622", borderRadius: 45, position: "absolute", right: -5, top: -5 }}>
                            <Text style={{ color: "white", width: 9, height: 19, fontWeight: 700, margin: "auto" }}>2</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontSize: 16 }}>Hey Halal, </Text>
                    <Text style={{ fontSize: 16, fontWeight: 700 }}>Good Afternoon!</Text>
                </View>
                <TextInput style={{ backgroundColor: "#F6F6F6", padding: 24, borderRadius: 12 }} placeholder="Search dishes, restaurants" placeholderTextColor={"#A0A5BA"} editable={true} />
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20 }}>All Categories</Text>
                    <Pressable style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onPress={() => navigation.navigate("Food")}>
                        <Text style={{ fontSize: 16 }}>See All</Text>
                        <MaterialIcons name="keyboard-arrow-right" color="#000" size={24} />
                    </Pressable>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                        <TouchableOpacity style={{ backgroundColor: selectedIndex === 0 ? "#FFD27C" : "white", borderRadius: 45, padding: 8, paddingRight: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }} onPress={() => SetSelectedIndex(0)}>
                            <View style={{ width: 44, height: 44, backgroundColor: "#98A8B8", borderRadius: 45 }}></View>
                            <Text style={{ fontSize: 14, fontWeight: 700 }}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: selectedIndex === 1 ? "#FFD27C" : "white", borderRadius: 45, padding: 8, paddingRight: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }} onPress={() => SetSelectedIndex(1)}>
                            <View style={{ width: 44, height: 44, backgroundColor: "#98A8B8", borderRadius: 45 }}></View>
                            <Text style={{ fontSize: 14, fontWeight: 700 }}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: selectedIndex === 2 ? "#FFD27C" : "white", borderRadius: 45, padding: 8, paddingRight: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }} onPress={() => SetSelectedIndex(2)}>
                            <View style={{ width: 44, height: 44, backgroundColor: "#98A8B8", borderRadius: 45 }}></View>
                            <Text style={{ fontSize: 14, fontWeight: 700 }}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: selectedIndex === 3 ? "#FFD27C" : "white", borderRadius: 45, padding: 8, paddingRight: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }} onPress={() => SetSelectedIndex(3)}>
                            <View style={{ width: 44, height: 44, backgroundColor: "#98A8B8", borderRadius: 45 }}></View>
                            <Text style={{ fontSize: 14, fontWeight: 700 }}>All</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20 }}>Open Restaurants</Text>
                    <Pressable style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onPress={() => navigation.navigate("Food")}>
                        <Text style={{ fontSize: 16 }}>See All</Text>
                        <MaterialIcons name="keyboard-arrow-right" color="#000" size={24} />
                    </Pressable>
                </View>
                <View style={{ display: "flex", gap: 8 }}>
                    <Image source={require('../assets/images/img1.jpg')} style={{ width: 327, height: 137 }} borderRadius={12} />
                    <Text style={{ fontSize: 20 }}>Rose Garden Restaurant</Text>
                    <Text style={{ fontSize: 14, color: "#A0A5BA" }}>Burger - Chiken - Riche - Wings</Text>
                    <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="star" color="#FF7622" size={24} />
                            <Text style={{ fontSize: 16, fontWeight: 700 }}>4.7</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="truck" color="#FF7622" size={24} />
                            <Text>Free</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="clock" color="#FF7622" size={24} />
                            <Text>20 min</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", gap: 8 }}>
                    <Image source={require('../assets/images/img1.jpg')} style={{ width: 327, height: 137 }} borderRadius={12} />
                    <Text style={{ fontSize: 20 }}>Rose Garden Restaurant</Text>
                    <Text style={{ fontSize: 14, color: "#A0A5BA" }}>Burger - Chiken - Riche - Wings</Text>
                    <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="star" color="#FF7622" size={24} />
                            <Text style={{ fontSize: 16, fontWeight: 700 }}>4.7</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="truck" color="#FF7622" size={24} />
                            <Text>Free</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="clock" color="#FF7622" size={24} />
                            <Text>20 min</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", gap: 8 }}>
                    <Image source={require('../assets/images/img1.jpg')} style={{ width: 327, height: 137 }} borderRadius={12} />
                    <Text style={{ fontSize: 20 }}>Rose Garden Restaurant</Text>
                    <Text style={{ fontSize: 14, color: "#A0A5BA" }}>Burger - Chiken - Riche - Wings</Text>
                    <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="star" color="#FF7622" size={24} />
                            <Text style={{ fontSize: 16, fontWeight: 700 }}>4.7</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="truck" color="#FF7622" size={24} />
                            <Text>Free</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                            <Feather name="clock" color="#FF7622" size={24} />
                            <Text>20 min</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <StatusBar backgroundColor={"green"} translucent={false} /> */}
        </ScrollView >
    )
}
