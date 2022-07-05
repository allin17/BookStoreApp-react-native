import React from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {COLORS, icons, SIZES} from "../constants";

function MyBookSection(myBooks, navigation) {

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius
                }}
                onPress={() => {
                    navigation.navigate("BookDetail", {
                        book: item
                    })
                }}
            >
                {/* Book Cover */}
                <Image
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{
                        width: 180,
                        height: 250,
                        borderRadius: 20
                    }}
                />

                {/* Book Info */}
                <View style={{marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={icons.clock_icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{marginLeft: 5, color: COLORS.lightGray}}>{item.lastRead}</Text>

                    <Image
                        source={icons.page_icon}
                        style={{
                            marginLeft: SIZES.radius,
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray
                        }}
                    />
                    <Text style={{marginLeft: 5, color: COLORS.lightGray}}>{item.completion}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1}}>
            {/* Header */}
            <View style={{paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                    style={{
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>
                    My Book
                </Text>

                <TouchableOpacity
                    onPress={() => console.log("See More")}
                >
                    <Text style={{color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline'}}>see
                        more</Text>
                </TouchableOpacity>
            </View>

            {/* Books */}
            <View style={{flex: 1, marginTop: SIZES.padding}}>
                <FlatList
                    data={myBooks}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default MyBookSection
