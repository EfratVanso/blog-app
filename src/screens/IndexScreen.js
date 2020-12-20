import React, {useContext} from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

export default function IndexScreen() {
    const {state, addBlogPost} = useContext(Context);
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
            data={ state}
            keyExtractor={(post) =>post.title}
            renderItem={ ({item}) => {
                return <View style={styles.row}>
                    <Feather name="trash" size={24} color="black" style={styles.icon} />
                    <Text style={styles.title}>{item.title}</Text></View> 
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})
