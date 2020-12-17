import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BlogContext from '../context/BlogContext'

export default function IndexScreen() {
    const value = useContext(BlogContext);
    return (
        <View>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
