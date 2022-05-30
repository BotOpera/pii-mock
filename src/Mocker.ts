/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { FirstNames } from './data';

const RandomArrayEntryPicker = (arr: Array<string>): string => {
  const rn = Math.floor(Math.random() * arr.length);
  return arr[rn];
};
const createFullName = () => {
  const fn = `${RandomArrayEntryPicker(FirstNames)} ${RandomArrayEntryPicker(
    FirstNames
  )}`;
  return fn;
};
const Mocker = {
  fake: {
    names: {
      first: RandomArrayEntryPicker(FirstNames),
      last: RandomArrayEntryPicker(FirstNames),
      full: createFullName(),
    },
    dates: {},
  },
  mangle: {},
  is: {},
};

export default Mocker;
