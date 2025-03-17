import { TopBar } from '@/components';
import { faClipboardCheck, faTrash } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopBarPlayground = (): JSX.Element => {
  return (
    <div className="w-full h-max flex justify-center mt-48 items-center gap-8">
      <TopBar
        elements={[
          <FontAwesomeIcon icon={faTrash} />,
          <FontAwesomeIcon icon={faClipboardCheck} />,
        ]}
      />
    </div>
  );
};

export default TopBarPlayground;
