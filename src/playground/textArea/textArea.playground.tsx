import { FC, useState } from 'react';

import { TextArea } from '@components/textArea/textArea';
import { TTextArea } from '@components/textArea/textArea.types';

const TextAreaPlayground: FC<Partial<TTextArea>> = (
  props: Partial<TTextArea>
): JSX.Element => {
  const [value, setValue] = useState('');
  return (
    <div className="w-full">
      <TextArea
        {...props}
        label="label"
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-white">Valeur du champs: {value}</p>
    </div>
  );
};

export default TextAreaPlayground;
