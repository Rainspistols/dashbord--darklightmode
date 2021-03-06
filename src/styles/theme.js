const globalTheme = {
  switchWidth: '40px',
  switchHeight: '20px',
  switchPadding: '3px',
  colorContrastLow: '#d3d3d4',
  colorWhite: '#FFF',
  switchColorPrimary: '#302C40',
  switchAnimationDuration: '0,2s',
  gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
  colorGreen: '#5DC399',
};

export const themes = [
  {
    name: 'lightTheme',
    primary: '#FFF',
    secondary: '#F8F8F8',
    textColor: '#585280',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    inactiveMenu: '#AAA5A5',
    ...globalTheme,
  },
  {
    name: 'darkTheme',
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    inactiveMenu: '#AAA5A5',
    ...globalTheme,
  },
  {
    name: 'darkBlue',
    primary: '#482ff7',
    secondary: '#2d6cdf',
    textColor: '#f3f169',
    header: '#f3f169',
    headerNumber: '#2d6cdf',
    activeMenu: '#f3f169',
    inactiveMenu: '#46c3db',
    ...globalTheme,
  },
  {
    name: 'purple',
    primary: '#581b98',
    secondary: '#faee1c',
    textColor: '#f3558e',
    header: '#f3558e',
    headerNumber: '#faee1c',
    activeMenu: '#f3558e',
    inactiveMenu: '#9c1de7',
    ...globalTheme,
  },
  {
    name: 'videoGame',
    primary: '#fc5185',
    secondary: '#364f6b',
    textColor: '#f0f0f0',
    header: '#f0f0f0',
    headerNumber: '#364f6b',
    activeMenu: '#43dde6',
    inactiveMenu: '#f0f0f0',
    ...globalTheme,
  },
];

export const themePalletes = themes.map(({ primary, secondary, name }) => ({
  primary,
  secondary,
  name,
}));
