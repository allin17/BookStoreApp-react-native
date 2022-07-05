import React from "react";
import {COLORS, icons, SIZES} from "../../constants";
import {Image, Text, TouchableOpacity, View} from "react-native";

function BottomButton() {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            {/* Bookmark */}
            <TouchableOpacity
                style={{
                    width: 60,
                    backgroundColor: COLORS.secondary,
                    marginLeft: SIZES.padding,
                    marginVertical: SIZES.base,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => console.log("Bookmark")}
            >
                <Image
                    source={icons.bookmark_icon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.lightGray2
                    }}
                />
            </TouchableOpacity>

            {/* Start Reading */}
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    marginHorizontal: SIZES.base,
                    marginVertical: SIZES.base,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => console.log("Start Reading")}
            >
                <Text style={{ color: COLORS.white }}>
                    Start Reading
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomButton
