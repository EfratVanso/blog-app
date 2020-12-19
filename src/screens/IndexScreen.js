import React, {useContext} from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import {Context} from '../context/BlogContext'

export default function IndexScreen() {
    const {state, addBlogPost} = useContext(Context);
    return (
        <View>
            <Text>IndexScreen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
            data={ state}
            keyExtractor={(post) =>post.title}
            renderItem={ ({item}) => {
                return <Text>{item.title}</Text>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})
