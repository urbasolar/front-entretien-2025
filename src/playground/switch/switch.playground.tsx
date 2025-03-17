import { TSwitch } from '@components/switch/switch.types';
import { Switch } from '@components/switch/swtich';
import { FC, useState } from 'react';

const SwitchPlayground: FC<Partial<TSwitch>> = (
  props: Partial<TSwitch>
): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col'>
      <Switch {...props} isActive={(state) => setIsOpen(state)} />
      <p>isOpen: {`${isOpen}`}</p>
    </div>
  );
};

export default SwitchPlayground;
