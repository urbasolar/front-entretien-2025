import { FC, useState } from 'react';

import Input from '@components/input/input';
import { Section } from '@components/section/section';
import { Select } from '@components/select/select';
import { Switch } from '@components/switch/swtich';
import { Option, SelectProps } from '@/components/select/select.types';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
  { label: 'Option 8', value: '8' },
  { label: 'Option 9', value: '9' },
  { label: 'Option 10', value: '10' },
  { label: 'Option 11', value: '11' },
  { label: 'Option 12', value: '12' },
  { label: 'Option 13', value: '13' },
  { label: 'Option 14', value: '14' },
  { label: 'Option 15', value: '15' },
  { label: 'Option 16', value: '16' },
  { label: 'Option 17', value: '17' },
  { label: 'Option 18', value: '18' },
  { label: 'Option 19', value: '19' },
  { label: 'Option 20', value: '20' },
  { label: 'Option 21', value: '21' },
  { label: 'Option 22', value: '22' },
  { label: 'Option 23', value: '23' },
  { label: 'Option 24', value: '24' },
  { label: 'Option 25', value: '25' },
  { label: 'Option 26', value: '26' },
  { label: 'Option 27', value: '27' },
  { label: 'Option 28', value: '28' },
  { label: 'Option 29', value: '29' },
  { label: 'Option 30', value: '30' },
  { label: 'Option 31', value: '31' },
  { label: 'Option 32', value: '32' },
  { label: 'Option 33', value: '33' },
  { label: 'Option 34', value: '34' },
  { label: 'Option 35', value: '35' },
  { label: 'Option 36', value: '36' },
  { label: 'Option 37', value: '37' },
  { label: 'Option 38', value: '38' },
  { label: 'Option 39', value: '39' },
  { label: 'Option 40', value: '40' },
  { label: 'Option 41', value: '41' },
  { label: 'Option 42', value: '42' },
];

const SelectPlayground: FC<Partial<SelectProps>> = (): JSX.Element => {
  const [placeholder, setPlaceholder] = useState('Select');
  const [isMulti, setIsMulti] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  return (
    <div className="flex flex-col w-full h-full">
      <div className={`h-1/2 content-center self-center`}>
        <Select
          options={options}
          onChange={(val) => setSelectedValue(val as Option)}
          value={selectedValue}
          placeholder={placeholder}
          isSearchable
          isMulti={isMulti}
          inputStyle="max-w-64 max-h-10"
        />
      </div>
      <Section title="Options" className="h-1/2">
        <div className="flex flex-col gap-4 p-m w-1/4">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              label="Placeholder"
              value={placeholder}
              currentValue={(text) => setPlaceholder(text as string)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Multiple données</p>
            <Switch
              leftText="off"
              rightText="on"
              isActive={(state) => setIsMulti(state)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SelectPlayground;
