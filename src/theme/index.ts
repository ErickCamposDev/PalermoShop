import {Appearance} from 'react-native';

const lightTheme = {
  colors: {
    boldText: '#000000',
    regularText: '#85868A',
    primary: '#8775FE',
    background: '#E5E5E5',
    card: '#8775FE',
  },
  fonts: {
    bold: 'workSans-Bold',
    medium: 'workSans-Medium',
    semiBold: 'wokrSans-SemiBold',
  },
};
const darkTheme = {
  colors: {
    boldText: '#FFFFFF',
    regularText: '#EEEEEE',
    primary: '#BEB5FF',
    background: '#000000',
    card: '#CAC2FF',
  },
  fonts: {
    bold: 'workSans-Bold',
    medium: 'workSans-Medium',
    semiBold: 'wokrSans-SemiBold',
  },
};

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'light' ? lightTheme : darkTheme;

export {theme};
