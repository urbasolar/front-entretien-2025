import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import {
  TComponents,
  TComponentsLazyImported,
} from '@pages/sandbox/sandbox.types';

const DropDown = lazy(
  () => import('../../playground/dropDown/dropDown.playground')
);
const Input = lazy(() => import('../../playground/input/input.playground'));
const Button = lazy(() => import('../../playground/button/button.playground'));
const Card = lazy(() => import('../../playground/card/card.playground'));
const Drawer = lazy(() => import('../../playground/drawer/drawer.playground'));
const Section = lazy(
  () => import('../../playground/section/section.playground')
);
const Select = lazy(() => import('../../playground/select/select.playground'));
const Modal = lazy(() => import('../../playground/modal/modal.playground'));
const Switch = lazy(() => import('../../playground/switch/switch.playground'));
const TextArea = lazy(
  () => import('../../playground/textArea/textArea.playground')
);
const Table = lazy(() => import('../../playground/table/table.playground'));
const Checkbox = lazy(
  () => import('../../playground/checkbox/checkbox.playground')
);
const Tabs = lazy(() => import('../../playground/tabs/tabs.playGround'));
const Tooltip = lazy(
  () => import('../../playground/tooltip/tooltip.playground')
);
const Carousel = lazy(
  () => import('../../playground/carousel/carousel.playground')
);

const TopBar = lazy(() => import('../../playground/topBar/topBar.playground'));

export const Playground = () => {
  useLocation();

  const getComponentFromURL = () => {
    const path = window.location.pathname;
    return path.split('/')[1] as keyof TComponentsLazyImported;
  };

  const components: TComponents<TComponentsLazyImported> = {
    dropdown: <DropDown />,
    input: <Input />,
    button: <Button />,
    card: <Card />,
    drawer: <Drawer />,
    section: <Section />,
    select: <Select />,
    modal: <Modal />,
    switch: <Switch />,
    textarea: <TextArea />,
    table: <Table />,
    checkbox: <Checkbox />,
    tabs: <Tabs />,
    tooltip: <Tooltip />,
    carousel: <Carousel />,
    topBar: <TopBar />,
  };

  return (
    <div className="h-full flex items-center justify-center p-l">
      <Suspense fallback={<p>wait...</p>}>
        {components[getComponentFromURL()]}
      </Suspense>
    </div>
  );
};
