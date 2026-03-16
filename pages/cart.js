import { AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import FoodItem from 'components/foodItem'
import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function Cart({ navigation }) {
    const [meals, setMeals] = useState([])
    const [fullMeals, setFullMeals] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            loadCart()
        }, [])
    )

    async function loadCart() {
        try {
            const res = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
            )

            const allMeals = res.data.meals

            const keys = await AsyncStorage.getAllKeys()
            console.log(keys);

            const storedItems = await AsyncStorage.multiGet(keys)
            console.log(storedItems);

            const cartMeals = allMeals.filter(m => keys.includes(m.idMeal)).map(m => {
                const stored = storedItems.find(([key]) => key === m.idMeal)
                return { ...m, quantity: stored ? parseInt(stored[1]) : 1 }
            })

            setMeals(cartMeals)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{ marginHorizontal: 24, gap: 20 }}>
            <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                <Pressable
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 45,
                        backgroundColor: "#ECF0F4",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <AntDesign name="left" color="#000" size={18} />
                </Pressable>

                <Text style={{ fontSize: 17 }}>Cart</Text>
            </View>
            <ScrollView style={{ gap: 16, marginBottom: 60 }}>
                {meals.map(m =>
                    <FoodItem key={m.idMeal} meal={m} navigation={navigation} inCart={true} />
                )}
            </ScrollView>
        </View>
    )
}
