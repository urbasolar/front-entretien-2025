import { Card } from '@components/card/card';
import { TCard } from '@components/card/card.types';
import { FC } from 'react';

const CardPlayground: FC<Partial<TCard>> = (
  props: Partial<TCard>
): JSX.Element => {
  return (
    <Card {...props} className='bg-neutral-dark-gray'>
      <p>card</p>
    </Card>
  );
};

export default CardPlayground;
