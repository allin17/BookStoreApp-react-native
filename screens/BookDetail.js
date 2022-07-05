import React, {useEffect} from 'react';
import {View} from "react-native";
import {COLORS} from "../constants";
import BookInfoSection from "../components/BookDetail/BookInfoSection";
import BookDescription from "../components/BookDetail/BooksDescription";
import BottomButton from "../components/BookDetail/BottomButtons";

const BookDetail = ({route, navigation}) => {
    const [book, setBook] = React.useState(null)

    useEffect(() => {
        let { book } = route.params
        setBook(book)
    }, [book])

    if(book) {
        return (
            <View style={{
                flex: 1, backgroundColor: COLORS.black
            }}>
                <View style={{ flex: 4 }}>
                    <BookInfoSection book={book} navigation={navigation}/>
                </View>
                <View style={{ flex: 2 }}>
                    <BookDescription book={book}/>
                </View>
                <View style={{
                    height: 70, marginBottom: 30
                }}>
                    <BottomButton />
                </View>
            </View>
        );
    } else {
        return <></>
    }
};

export default BookDetail;
