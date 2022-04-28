import * as React from 'react';
import { Text, View } from 'react-native';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import Button from '../components/Button';

export default function PostScreen({ navigation }) {

    const [name, setName] = useState({ value: '', error: '' })
    const [ingredients, setIngredients] = useState({ value: '', error: '' })
    const [instructions, setInstructions] = useState({ value: '', error: '' })
    const [category, setCategory] = useState({ value: '', error: '' })

    const RecipePost = async event =>
    {
        
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Post New Recipe Here!</Text>
        <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
        />
        <TextInput
            label="Category"
            returnKeyType="next"
            value={category.value}
            onChangeText={(text) => setCategory({ value: text, error: '' })}
            error={!!category.error}
            errorText={category.error}
        />
        <div><input type="file" /></div>
        <TextInput
            label="Ingredients"
            returnKeyType="next"
            value={ingredients.value}
            onChangeText={(text) => setIngredients({ value: text, error: '' })}
            error={!!ingredients.error}
            errorText={ingredients.error}
        />
        <TextInput
            label="Instructions"
            returnKeyType="next"
            value={instructions.value}
            onChangeText={(text) => setInstructions({ value: text, error: '' })}
            error={!!instructions.error}
            errorText={instructions.error}
        />
        <Button mode="contained" style={{margintop:24}} onPressed={RecipePost}>Post It!!</Button>
        </View>
    );
}