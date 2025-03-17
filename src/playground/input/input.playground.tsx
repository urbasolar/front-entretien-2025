import { FC, useState } from 'react';

import { Input } from '@components/input/input';
import { TInput } from '@components/input/input.types';
import { Section } from '@components/section/section';
import { Select } from '@components/select/select';
import { Switch } from '@components/switch/swtich';
import { Option } from '@/components/select/select.types';

const InputPlayground: FC<Partial<TInput>> = (props: Partial<TInput>) => {
  const [value, setValue] = useState<string | number>();
  const [label, setLabel] = useState('label');
  const [inputSize, setInputSize] = useState<Option>({
    value: 'full',
    label: 'full',
  });
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="flex flex-col w-full h-full">
      <div
        className={`h-1/2 content-center ${
          inputSize.value !== 'full' && 'self-center'
        }`}
      >
        <Input
          label={label}
          {...props}
          currentValue={(currentValue) => setValue(currentValue)}
          inputSize={inputSize.value as TInput['inputSize']}
          disabled={disabled}
        />
        <p className="text-white">Valeur du champs: {value}</p>
      </div>
      <Section className="h-1/2" title="Options">
        <div className="flex flex-col gap-4 p-m w-1/4">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              label="Label"
              value={label}
              currentValue={(text) => setLabel(text as string)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select
              options={[
                { value: 'sm', label: 'sm' },
                { value: 'md', label: 'md' },
                { value: 'lg', label: 'lg' },
                { value: 'full', label: 'full' },
              ]}
              onChange={(value) => setInputSize(value as Option)}
              value={inputSize}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Désactiver</p>
            <Switch
              leftText="off"
              rightText="on"
              isActive={(state) => setDisabled(state)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default InputPlayground;
