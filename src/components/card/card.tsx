import { FC } from 'react';

import { TCard } from '@components/card/card.types';

export const Card: FC<TCard> = (props: TCard) => {
  const { children, className } = props;
  return (
    <div
      className={`dark:bg-dark bg-neutral-gray rounded-lg p-l ${
        className ? className : ' w-full'
      }`}
    >
      {children}
    </div>
  );
};
