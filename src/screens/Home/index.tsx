import {useNavigation} from '@react-navigation/native';
import {AxiosResponse} from 'axios';
import React, {FC, useContext, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AnimatedButton} from '../../components/AnimatedButton';
import {CategoryTag} from '../../components/CategoryTag';
import {FilterCategoriesText} from '../../components/FilterCategoriesText';
import {Header} from '../../components/Header';
import {NewsList} from '../../components/NewsList';
import {ProductsList} from '../../components/ProductsList';
import {CartContext} from '../../contexts/cart';
import {getProducts, getCategories} from '../../services/products.service';
import {ICartContext} from '../../types/cart';
import {IProduct} from '../../types/product';
import styles from './styles';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productLoading, setProductLoading] = useState(false);

  const {cartItems} = useContext(CartContext) as ICartContext;

  const navigation = useNavigation();

  useEffect(() => {
    setProductLoading(true);
    getProducts(selectedCategory)
      .then((res: AxiosResponse<IProduct[]> | any) => setProducts(res.data))
      .catch(e => {
        console.log('err', e);
      })
      .finally(() => setProductLoading(false));
  }, [selectedCategory]);

  useEffect(() => {
    getCategories()
      .then((res: AxiosResponse<Array<string>> | any) =>
        setCategories(res.data),
      )
      .catch(e => {
        console.log('err', e);
      });
  }, []);

  const renderCategories = () => (
    <View style={styles.scrollContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        horizontal>
        {categories.map((item, i) => (
          <CategoryTag
            key={`category-${i}`}
            onPress={() => setSelectedCategory(item)}
            title={item}
            selected={item === selectedCategory}
          />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header numberOfItems={cartItems.length} title="Produtos" />
      <FilterCategoriesText />
      {renderCategories()}
      <NewsList loading={productLoading} products={products} />
      <ProductsList loading={productLoading} products={products} />
      <AnimatedButton
        onPress={() => navigation.navigate('Cart')}
        isOpen={cartItems.length > 0}
      />
    </SafeAreaView>
  );
};

export {Home};
