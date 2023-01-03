export const removeLastString = (value: string) => {
  const strArr = value?.split(" ");
  return strArr?.length > 3
    ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
    : `${strArr?.[0]}`;
};
