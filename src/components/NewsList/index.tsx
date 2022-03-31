import React, {FC} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {theme} from '../../theme';
import {IProduct} from '../../types/product';
import {BoldText} from '../BoldText';
import {ProductItem} from '../ProductItem';
import styles from './styles';

interface NewsListProps {
  products: IProduct[];
  loading: boolean;
}

const NewsList: FC<NewsListProps> = ({products, loading}) => {
  const renderProduct = (product: IProduct) => (
    <ProductItem product={product} />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={theme.colors.primary} />
        </View>
      ) : (
        <>
          <View style={styles.textContainer}>
            <BoldText text="Novidades" fontSize={24} />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => renderProduct(item)}
            data={products}
            keyExtractor={item => `news-${item.id}`}
          />
        </>
      )}
    </View>
  );
};

export {NewsList};
