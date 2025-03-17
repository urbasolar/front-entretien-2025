import { faCircleXmark } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useCustomTranslation } from '@utils/hooks/useCustomTranslation';

export const ForbiddenPage = () => {
  const { t } = useCustomTranslation();
  return (
    <div
      id='containerForbiddenPage'
      className='bg-neutral-black w-screen h-screen flex justify-center items-center'
    >
      <div className='flex flex-col text-center'>
        <p className='text-white pb-5'>{t('you_are_not_authorized')}</p>
        <span>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className='text-danger'
            size='2xl'
          />
        </span>
      </div>
    </div>
  );
};
