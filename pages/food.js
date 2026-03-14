import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import FoodItem from 'components/foodItem'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'

export default function Food({ navigation }) {
    const [meals, setMeals] = useState([])
    const [fullMeals, setFullMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    async function getMeals() {

        try {
            setIsLoading(true)

            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`)
            // console.log(res.data.meals)
            setMeals(res.data.meals)
            setFullMeals(res.data.meals)
            // console.log(meals);

        } catch (err) {
            console.log(err);

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMeals()
    }, [])

    async function handleRefreshing() {
        setRefreshing(true)
        await getMeals()
        setRefreshing(false)
    }

    async function handleInput(text) {
        const value = text.trim().toLowerCase()
        const filteredMeals =
            value === ''
                ? fullMeals
                : fullMeals.filter(m =>
                    m.strMeal?.toLowerCase().includes(value)
                )
        setMeals(filteredMeals)
    }

    return (
        <View style={{ marginBottom: 150 }}>
            <TextInput placeholder='e.g. Pizza' placeholderTextColor={"#676767"} style={{ borderRadius: 12, backgroundColor: "#F6F6F6", padding: 18, marginBottom: 32 }} onChangeText={(text) => handleInput(text)} />
            <FlatList data={meals}
                numColumns={2}
                renderItem={(meal) => <FoodItem meal={meal} navigation={navigation} />}
                refreshing={refreshing}
                onRefresh={handleRefreshing} />

            {isLoading && <ActivityIndicator size={50} />}
        </View>
    )
}
