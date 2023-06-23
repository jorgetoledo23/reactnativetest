import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Product from './components/Product';
import axios from 'axios';
import React from 'react';
import CategoryCard from './components/CategoryCard';
import ClassicHeader from "react-native-classic-header";


export default function App() {

    const [products, setProducts] = React.useState(null);
    const [categories, setCategories] = React.useState(null);


    const loadCategories = () => {
        axios.get(`https://localhost:7038/api/Category/getCategories`).then((response) => {
            setCategories(response.data);
        });
    }
    const loadProductsByCat = (categoryId) => {
        axios.get(`https://localhost:7038/api/Products/getProductsByCat?categoryId=${categoryId}`).then((response) => {
            setProducts(response.data);
        });
    }

    React.useEffect(() => {
        loadCategories()
    }, []);

    return (
        <View style={ styles.container }>
            { categories ? categories.map(c => <CategoryCard key={ c.categoryId } Category={c}/>) : <Text>No se encontraron Categorias</Text> }
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start'
    }
});
