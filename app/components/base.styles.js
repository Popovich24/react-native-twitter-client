const colorReferences = {
  white: '#ffffff',
  blackPearl: '#041322',
  grayChateau: '#A2AAB3',
  blizzardBlue: '#A3E3ED',
  scienceBlue: '#0066CC',
  transparent: 'rgba(255, 255, 255, 0)',

};

const colors = {
  backgroundPrimary: colorReferences.white,
  backgroundSecondary: colorReferences.scienceBlue,
  backgroundTransparent: colorReferences.transparent,
  iconPrimary: colorReferences.blizzardBlue,
  iconSecondary: colorReferences.grayChateau,
  iconHighlight: colorReferences.scienceBlue,
  textPrimary: colorReferences.blackPearl,
  textSecondary: colorReferences.grayChateau,
  textTertiary: colorReferences.white,
  borderPrimary: colorReferences.grayChateau,
  borderSecondary: colorReferences.scienceBlue,
};

const spacings = {
  XS: 4,
  S: 10,
  M: 16,
  L: 24,
  XL: 30,
  XXL: 45
};

const zIndexes = {
  top: 3,
  normal: 2,
  bottom: 1,
};

const fontSizes = {
  normal: 14,
  title: 18,
  subtitle: 14,
  headline: 24,
  smallIcon: 16,
  mediumIcon: 32,
  bigIcon: 48,
}

export default {
  colors,
  spacings,
  zIndexes,
  fontSizes,
};
