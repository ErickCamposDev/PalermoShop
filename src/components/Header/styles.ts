import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 20 : 0
  },
  text: {
    fontFamily: theme.fonts.bold,
  },
  numberContainer: {
    backgroundColor: '#FFFFFF',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    position: 'absolute',
    zIndex: 1,
    right: -8,
    top: -8,
  },
});

export default styles;
