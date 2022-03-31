interface IColors {
  boldText: string;
  regularText: string;
  primary: string;
  background: string;
  card: string;
}

interface IFonts {
  bold: string;
  medium: string;
  semiBold: string;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

export interface IThemeContext {
  theme: ITheme;
}
