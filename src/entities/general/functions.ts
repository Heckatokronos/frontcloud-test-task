/* eslint-disable array-callback-return */
export function getArrayFromEnum<E>(e: any): E {
  const array: any = [];
  (Object.values(e) as Array<keyof typeof e>).map((value) => {
    array.push(value);
  });
  return array;
}

export const findById = (array: any[], id: string) => {
  return array.findIndex((item) => item.id === id);
};

export const makePhoneNumber = (tenDigitNumber: string | null) => {
  return "+7" + tenDigitNumber;
};
