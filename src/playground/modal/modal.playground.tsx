import { FC, useState } from 'react';

import { Modal } from '@components/modal/modal';
import { TModal } from '@components/modal/modal.types';

const ModalPlayground: FC<Partial<TModal>> = (
  props: Partial<TModal>
): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
        <p>Modal</p>
      </Modal>
    </>
  );
};

export default ModalPlayground;
