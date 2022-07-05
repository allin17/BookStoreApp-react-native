import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {COLORS, icons, images, SIZES} from "../constants";
import renderButtonSection from "../components/ButtonSection";

import {myBooksData, categoriesData} from '../dummyData'
import CategoryData from "../components/CategoryData";
import CategoryHeader from "../components/CategoryHeader";
import MyBookSection from "../components/BookSection";

const profileData = {
    name: 'Alex',
    point: 200
}

function renderHeader(profile) {
    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            alignItems: "center",
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 18
                        }}
                    >
                        Hello
                    </Text>
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    >
                        {profile.name}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => console.log('point')}
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        width: 120,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}

                            />
                        </View>
                        <Text
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white
                            }}
                        >{profile.point} points</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Home = ({navigation}) => {
    const [profile, setProfile] = useState(profileData)
    const [myBooks, setMyBooks] = React.useState(myBooksData)
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black,
        }}>
            <View style={{top: 30}}>
                <View style={{height: 30}}>
                    {renderHeader(profile)}
                </View>

                <View style={{height: 30}}>
                    {renderButtonSection()}
                </View>

                <ScrollView style={{height: 500, top: 100}}>
                    {/*Books Section*/}
                    <View>
                        {MyBookSection(myBooks,navigation)}
                    </View>
                    {/*Categories Section*/}

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 50,
                        }}>
                            <CategoryHeader
                                categories={categories}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                        </View>
                        <View style={{
                            height: 520,
                            justifyContent: 'center',
                            paddingLeft: 18
                        }}>
                            <CategoryData
                                navigation={navigation}
                                categories={categories}
                                selectedCategory={selectedCategory}
                            />
                        </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default Home;
