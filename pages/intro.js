import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Intro({ route, navigation }) {
    const { imgNum, title } = route.params;
    const images = {
        1: require("../assets/images/1.png"),
        2: require("../assets/images/2.png"),
        3: require("../assets/images/3.png"),
    };
    return (
        <View style={{ gap: 18, marginHorizontal: 18 }}>
            <Image source={images[imgNum]} width={240} height={292} />
            <Text style={{ margin: "auto", fontSize: 24, fontWeight: 800 }}>{title}</Text>
            <Text style={{ fontSize: 18, color: "#646982" }}>Get all your loved foods in one once place,
                you just place the orer we do the rest</Text>
            {imgNum < 3 ?
                <View style={{ gap: 18 }}>
                    <TouchableOpacity style={{ backgroundColor: "#FF7622", padding: 12, borderRadius: 12 }} onPress={() => navigation.navigate('Intro', { imgNum: imgNum + 1, title: title + `${imgNum + 1}` })}>
                        <Text style={{ margin: "auto", color: "white", fontWeight: 600 }}>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: "auto", fontWeight: 600 }} onPress={() => navigation.navigate('Main', { navigation: navigation })}><Text>SKIP</Text></TouchableOpacity>
                </View>
                : <TouchableOpacity style={{ backgroundColor: "#FF7622", padding: 12, borderRadius: 12 }} onPress={() => navigation.navigate('Main', { navigation: navigation })}><Text style={{ margin: "auto", color: "white", fontWeight: 600 }}>GET STARTED</Text></TouchableOpacity>
            }

        </View>
    )
}
