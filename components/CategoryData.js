import React from "react";
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {COLORS, icons, SIZES} from "../constants";

function CategoryData({categories, setCategories, selectedCategory, navigation}) {
    let books = []

    let selectedCategoryBooks = categories?.filter(a => a.id == selectedCategory)

    if (selectedCategoryBooks.length > 0) {
        books = selectedCategoryBooks[0].books
    }

    const renderItem = ({item}) => {
        return (
            <View
                style={{
                    marginVertical: SIZES.base
                }}>
                <TouchableOpacity
                    style={{flex: 1, flexDirection: 'row'}}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{width: 100, height: 150, borderRadius: 10}}
                    />

                    <View style={{flex: 1, marginLeft: SIZES.radius}}>
                        {/* Book name and author */}
                        <View>
                            <Text style={{
                                paddingRight: SIZES.padding,
                                color: COLORS.white
                            }}>{item.bookName}</Text>
                            <Text
                                style={{
                                    color: COLORS.lightGray
                                }}>
                                {item.author}
                            </Text>
                        </View>

                        {/* Book Info */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.radius
                            }}>
                            <Image
                                source={icons.page_filled_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text
                                style={{
                                    color: COLORS.lightGray,
                                    paddingHorizontal: SIZES.radius
                                }}>
                                {item.pageNo}
                            </Text>

                            <Image
                                source={icons.read_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text
                                style={{
                                    color: COLORS.lightGray,
                                    paddingHorizontal: SIZES.radius
                                }}>
                                {item.readed}
                            </Text>
                        </View>

                        {/* Genre */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.base
                            }}>
                            {
                                item.genre.includes("Adventure") &&
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: SIZES.base,
                                        marginRight: SIZES.base,
                                        backgroundColor: COLORS.darkGreen,
                                        height: 40,
                                        borderRadius: SIZES.radius
                                    }}>
                                    <Text
                                        style={{
                                            color: COLORS.lightGreen
                                        }}
                                    >
                                        Adventure
                                    </Text>
                                </View>
                            }
                            {
                                item.genre.includes("Romance") &&
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: SIZES.base,
                                    marginRight: SIZES.base,
                                    backgroundColor: COLORS.darkRed,
                                    height: 40,
                                    borderRadius: SIZES.radius
                                }}>
                                    <Text style={{color: COLORS.lightRed}}>Romance</Text>
                                </View>
                            }
                            {
                                item.genre.includes("Drama") &&
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: SIZES.base,
                                        marginRight: SIZES.base,
                                        backgroundColor: COLORS.darkBlue,
                                        height: 40,
                                        borderRadius: SIZES.radius
                                    }}>
                                    <Text
                                        style={{
                                            color: COLORS.lightBlue
                                        }}>
                                        Drama
                                    </Text>
                                </View>
                            }
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Bookmark Button */}
                <TouchableOpacity
                    style={{position: 'absolute', top: 5, right: 15}}
                    onPress={() => console.log("Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginTop: SIZES.radius,
        }}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default CategoryData
