import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: 21,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    margin: 12,
  },
  text: {
    fontSize: 10,
    fontFamily: theme.fonts.bold,
    color: '#B4B4B6',
    paddingHorizontal: 8,
  },
  selectedContainer: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0,
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default styles;
