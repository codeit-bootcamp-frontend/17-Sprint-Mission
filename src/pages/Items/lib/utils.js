const screenSizeNumber = {
  TABLET: 768,
  DESKTOP: 1280,
};
const getItemLimitByscreenSize = ({
  mobileLimit,
  tabletLimit,
  desktopLimit,
}) => {
  const width = window.innerWidth;
  if (width > screenSizeNumber.DESKTOP) return desktopLimit;
  if (width > screenSizeNumber.TABLET) return tabletLimit;
  return mobileLimit;
};
export const getAllItemsLimitByScreenSize = () => {
  return getItemLimitByscreenSize({
    mobileLimit: 4,
    tabletLimit: 6,
    desktopLimit: 10,
  });
};
export const getBestItemsLimitByScreenSize = () => {
  return getItemLimitByscreenSize({
    mobileLimit: 1,
    tabletLimit: 2,
    desktopLimit: 4,
  });
};
