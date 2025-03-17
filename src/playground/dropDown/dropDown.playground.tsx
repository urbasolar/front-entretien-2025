import { FC } from 'react';

import DrowDown from '@components/dropDown/dropDown';
import { TDropDown } from '@components/dropDown/dropDown.types';

const DropDownPlayground: FC<Partial<TDropDown>> = (
  props: Partial<TDropDown>
): JSX.Element => {
  return <DrowDown {...props}>Dropdown</DrowDown>;
};

export default DropDownPlayground;
