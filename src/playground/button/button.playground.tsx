import { FC, useState } from 'react';

import { Button } from '@components/button/button';
import { TButton } from '@components/button/button.types';
import { Section } from '@components/section/section';
import Input from '@components/input/input';
import { Switch } from '@components/switch/swtich';
import { Select } from '@components/select/select';
import { TOption } from '@components/shared/types/option.types';

const ButtonPlayground: FC<Partial<TButton>> = (
  props: Partial<TButton>
): JSX.Element => {
  const [buttonText, setButtonText] = useState<string>('button');
  const [isDisabled, setIsDisabled] = useState(false);
  const [variant, setVariant] = useState<TOption>({
    value: 'primary',
    label: 'primary',
  });
  const [btnSize, setBtnSize] = useState<TOption>({
    value: 'full',
    label: 'full',
  });

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className={`h-1/2 content-center ${
          btnSize.value !== 'full' && 'self-center'
        }`}
      >
        <Button
          {...props}
          text={buttonText}
          onClick={() => {}}
          disabled={isDisabled}
          variant={variant.value as TButton['variant']}
          size={btnSize.value as TButton['size']}
        />
      </div>
      <Section className="h-1/2" title="Options">
        <div className="flex flex-col gap-4 p-m w-1/4">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              label="Texte"
              value={buttonText}
              currentValue={(text) => setButtonText(text as string)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select
              options={[
                { value: 'primary', label: 'primary' },
                { value: 'white', label: 'white' },
                { value: 'success', label: 'success' },
                { value: 'warning', label: 'warning' },
                { value: 'danger', label: 'danger' },
              ]}
              value={variant}
              onChange={(value) => setVariant(value as TOption)}
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
              value={btnSize}
              onChange={(value) => setBtnSize(value as TOption)}
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

export default ButtonPlayground;
