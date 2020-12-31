import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

export default function ShowScreen({navigation}) {
    const {state} = useContext(Context);// get the list of blogs
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );
    return (
        <View> 
            <Text>{blogPost.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
})

