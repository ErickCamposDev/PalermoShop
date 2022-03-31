import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: 172,
    margin: 12,
    height: 340,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 172,
    height: 183,
    borderRadius: 10,
    marginBottom: 8,
  },
  regularText: {
    fontFamily: theme.fonts.medium,
    fontSize: 10,
    color: theme.colors.regularText,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  margin: {
    marginBottom: 4,
  },
});

export default styles;
