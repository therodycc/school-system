export const getKeysWithValues = (obj: Record<string, any>) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc = {
        ...acc,
        [key]: value,
      };
    }
    return acc;
  }, {});
};
