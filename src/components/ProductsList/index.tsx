import React, {FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {theme} from '../../theme';
import {IProduct} from '../../types/product';
import {BoldText} from '../BoldText';
import {ProductItem} from '../ProductItem';
import styles from './styles';

interface ProductsListProps {
  products: IProduct[];
  loading?: boolean;
}

const ProductsList: FC<ProductsListProps> = ({products, loading}) => {
  const renderProduct = (product: IProduct) => (
    <ProductItem product={product} />
  );

  const renderHeader = () => <BoldText text="Listagem" fontSize={24} />;

  return loading ? (
    <ActivityIndicator
      style={styles.loading}
      size={'large'}
      color={theme.colors.primary}
    />
  ) : (
    <FlatList
      style={styles.container}
      numColumns={2}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.content}
      ListHeaderComponentStyle={styles.header}
      renderItem={({item}) => renderProduct(item)}
      data={products}
      keyExtractor={item => `${item.id}`}
    />
  );
};

export {ProductsList};
