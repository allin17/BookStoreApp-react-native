import React from "react";
import {COLORS, FONTS, SIZES} from "../constants";
import {FlatList, SafeAreaView, Text, TouchableOpacity} from "react-native";

function CategoryHeader({categories, selectedCategory, setSelectedCategory}) {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, marginRight: SIZES.padding }}
                onPress={() => setSelectedCategory(item.id)}
            >
                {
                    selectedCategory == item.id &&
                    <Text style={{ color: COLORS.white, fontSize: 18 }}>
                        {item.categoryName}
                    </Text>
                }
                {
                    selectedCategory != item.id &&
                    <Text style={{ color: COLORS.lightGray, fontSize: 18 }}>
                        {item.categoryName}
                    </Text>
                }
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, paddingLeft: SIZES.padding }}>
            <FlatList
                data={categories}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
            />
        </SafeAreaView>
    )
}

export default CategoryHeader
