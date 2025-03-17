import { FC, useState } from 'react';

import { Checkbox } from '@components/checkbox/checkbox';
import { Section } from '@components/section/section';
import { Select } from '@components/select/select';
import { Switch } from '@components/switch/swtich';
import { TCheckbox } from '@components/checkbox/checkbox.types';
import { Option } from '@/components/select/select.types';

const CheckboxPlayground: FC<any> = (): JSX.Element => {
  const [checkboxSize, setCheckboxSize] = useState<Option>({
    value: 'md',
    label: 'md',
  });
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="flex flex-col w-full h-full">
      <div className={`h-1/2 content-center self-center`}>
        <Checkbox
          size={checkboxSize.value as TCheckbox['size']}
          name="my_checkbox"
          disabled={isDisabled}
          onChange={(value) => console.log({ value })}
        />
      </div>
      <Section className="h-1/2" title="Options">
        <div className="flex flex-col gap-4 p-m w-1/4">
          <div className="flex flex-col gap-2">
            <Select
              options={[
                { value: 'sm', label: 'sm' },
                { value: 'md', label: 'md' },
                { value: 'lg', label: 'lg' },
              ]}
              value={checkboxSize}
              onChange={(value) => setCheckboxSize(value as Option)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Désactiver</p>
            <Switch
              leftText="off"
              rightText="on"
              isActive={(state) => setIsDisabled(state)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CheckboxPlayground;
