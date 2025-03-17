import { FC } from 'react';

import { Section } from '@components/section/section';
import { TSection } from '@components/section/section.types';

const SectionPlayground: FC<Partial<TSection>> = (
  props: Partial<TSection>
): JSX.Element => {
  return (
    <Section {...props}>
      <p>section</p>
    </Section>
  );
};

export default SectionPlayground;
