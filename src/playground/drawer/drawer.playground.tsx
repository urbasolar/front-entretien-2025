import { FC } from 'react';

import { Drawer } from '@components/drawer/drawer';
import { TDrawer } from '@components/drawer/drawer.types';

const DrawerPlayground: FC<Partial<TDrawer>> = (
  props: Partial<TDrawer>
): JSX.Element => {
  return <Drawer {...props} />;
};

export default DrawerPlayground;
