import React, { useState } from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Checkbox from "expo-checkbox";

export default function Login({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{ backgroundColor: "#1E1E2E", height: "100%" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 8 }}>
                <Text style={{ color: "white", fontSize: 30, fontWeight: 700 }}>Log In</Text>
                <Text style={{ color: "white", fontSize: 16 }}>Please sign in to your existing account</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "white", borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, gap: 32 }}>
                <View style={{ gap: 4 }}>
                    <Text>EMAIL</Text>
                    <TextInput style={{ backgroundColor: "#F0F5FA", borderRadius: 12, padding: 12 }} placeholder='example@gmail.com' />
                </View>
                <View style={{ gap: 4 }}>
                    <Text>PASSWORD</Text>
                    <TextInput style={{ backgroundColor: "#F0F5FA", borderRadius: 12, padding: 12 }} placeholder='123456789' />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? "#4630EB" : undefined}
                        />
                        <Text>Remember Me</Text>
                    </View>
                    <Text style={{ color: "#FF7622" }}>Forgot Password</Text>
                </View>
                <TouchableOpacity style={{backgroundColor: "#FF7622", padding: 12, borderRadius: 12}} onPress={() => navigation.navigate('Intro', {imgNum: 1, title: "title 1"})}>
                    <Text style={{margin: "auto", color: "white", fontWeight: 600}}>LOG IN</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "center", gap: 12}}>
                    <Text style={{fontSize: 16}}>Don't have an account?</Text>
                    <Text style={{fontSize: 14, fontWeight: 700, color: "#FF7622"}}>Sign Up</Text>
                </View>
                <Text style={{marginHorizontal: "auto"}}>Or</Text>
                <View style={{flexDirection: "row", justifyContent: "center", gap: 32}}>
                    <View style={{width: 64, height: 64, backgroundColor: "#395998", borderRadius: 45}}><Image source={require('../assets/icons/facebook.png')} style={{margin: "auto"}} /></View>
                    <View style={{width: 64, height: 64, backgroundColor: "#169CE8", borderRadius: 45}}><Image source={require('../assets/icons/twitter.png')} style={{margin: "auto"}}/></View>
                    <View style={{width: 64, height: 64, backgroundColor: "#1B1F2F", borderRadius: 45}}><Image source={require('../assets/icons/apple.png')} style={{margin: "auto"}}/></View>
                </View>

            </View>
        </View>
    )
}
