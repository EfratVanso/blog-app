import React ,{useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'

export default function BlogPostForm({ onSubmit, initialValues}) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
          <Text style={styles.label}>Enter Title:</Text>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
          />
          <Text style={styles.label}>Enter Content:</Text>
          <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
          />
          <Button
            title="Save Blog Post"
            onPress={() => onSubmit(title,content)}
          ></Button>
        </View>
      );
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        marginLeft: 10,
        padding: 5,
        margin: 5,
      },
    
      label: {
        fontSize: 20,
        marginBottom: 5,
      },
})
