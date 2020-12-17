import React, {useContext} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

export default function IndexScreen() {
    const blogPosts = useContext(BlogContext);
    return (
        <View>
            <Text>IndexScreen</Text>
            <FlatList 
            data={ blogPosts}
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
