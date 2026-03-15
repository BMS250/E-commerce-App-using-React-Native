import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default function Profile({ navigation }) {
    const [img, SetImg] = useState(null)

    async function ChangeProfile() {
        await ImagePicker.requestMediaLibraryPermissionsAsync()
        // 1- open gallery
        var gallery = await ImagePicker.launchImageLibraryAsync();
        console.log(gallery.assets[0].uri);
        // 2- store img path
        SetImg(gallery.assets[0].uri);
    }

    return (
        <View style={{ marginHorizontal: 24, gap: 20 }}>
            <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                <Pressable style={{ width: 45, height: 45, borderRadius: 45, backgroundColor: "#ECF0F4", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="left" color="#000" size={18} />
                </Pressable>
                <Text style={{ fontSize: 17 }}>Profile</Text>
            </View>
            <View style={{ width: 130, height: 130, borderRadius: 90, backgroundColor: "#FFBF6D", position: "relative", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                {img && <Image source={{ uri: img }} style={{ width: 130, height: 130, borderRadius: 90 }} />}
                <Pressable style={{ width: 41, height: 41, bottom: 0, right: 0, borderRadius: 45, backgroundColor: "#FF7622", position: "absolute", justifyContent: "center", alignItems: "center" }} onPress={() => ChangeProfile()}>
                    <FontAwesome name="edit" color="#FFF" size={18} />
                </Pressable>
                {img && <Pressable style={{ width: 41, height: 41, bottom: 0, left: 0, borderRadius: 45, backgroundColor: "#FF0000", position: "absolute", justifyContent: "center", alignItems: "center" }} onPress={() => SetImg(null)}>
                    <FontAwesome name="remove" color="#FFF" size={18} />
                </Pressable>}
            </View>
            <View>
                <Text>FULL NAME</Text>
                <TextInput placeholder='e.g. Bola Milad' style={{ backgroundColor: "#F0F5FA", borderRadius: 24, paddingHorizontal: 12 }} />
            </View>
            <View>
                <Text>EMAIL</Text>
                <TextInput placeholder='e.g. hello@gmail.com' style={{ backgroundColor: "#F0F5FA", borderRadius: 24, paddingHorizontal: 12 }} />
            </View>
            <View>
                <Text>PHONE NUMBER</Text>
                <TextInput placeholder='e.g. 408-841-0926' style={{ backgroundColor: "#F0F5FA", borderRadius: 24, paddingHorizontal: 12 }} />
            </View>
            <View>
                <Text>BIO</Text>
                <TextInput placeholder='e.g. I love fast food' style={{ backgroundColor: "#F0F5FA", borderRadius: 24, paddingHorizontal: 12 }} />
            </View>
            <TouchableOpacity style={{ backgroundColor: "#FF7622", padding: 12, borderRadius: 12 }} onPress={() => navigation.navigate('Intro', { imgNum: imgNum + 1, title: title + `${imgNum + 1}` })}>
                <Text style={{ margin: "auto", color: "white", fontWeight: 600 }}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}
