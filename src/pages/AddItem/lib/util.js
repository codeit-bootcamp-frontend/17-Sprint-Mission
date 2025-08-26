export const getNumberOnly = (value) => {
  const cleaned = value.replace(/[^0-9]/g, '');
  return cleaned;
};
