import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import {COLORS, icons, SIZES} from "../constants";
import LineDivider from "./LineDevider";

function renderButtonSection() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            padding: SIZES.padding,
            marginTop: 50
        }}>
            <View style={{
                flexDirection: "row", height: 70,
                backgroundColor: COLORS.secondary,
                borderRadius: SIZES.radius
            }}>

                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("claim")}
                >
                    <View style={{
                        flex: 1, flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            source={icons.claim_icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white
                            }}
                        >Claim</Text>
                    </View>
                </TouchableOpacity>

                <LineDivider />

                {/*Get Point*/}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Get Point")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.point_icon}
                            resizeMode='contain'
                            style={{
                                width: 30, height: 30
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white
                            }}
                        >
                            Get Point
                        </Text>
                    </View>
                </TouchableOpacity>

                <LineDivider />

                <TouchableOpacity
                    style={{
                        flex: 1
                    }}
                    onPress={()=> console.log('My Card')}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image source={icons.card_icon}
                               style={{
                                   width: 30,
                                   height: 30,
                                   resizeMode: 'contain'
                               }}
                        />
                        <Text
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white
                            }}
                        >
                            My Card
                        </Text>
                    </View>


                </TouchableOpacity>
            </View>
        </View>
    )
}

export default renderButtonSection
