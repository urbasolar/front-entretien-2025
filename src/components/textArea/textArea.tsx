import { computeStyles } from '@utils/computeStyles';
import { TTextArea } from '@components/textArea/textArea.types';

export const TextArea = (props: TTextArea) => {
  const { className, label, height, onChange, value } = props;
  const { ...rest } = props;
  return (
    <div className="w-full flex gap-1 flex-col font-normal">
      {label && (
        <p className="dark:text-white text-neutral-black font-semibold">
          {label}
        </p>
      )}
      <textarea
        {...rest}
        className={computeStyles(
          `appearance-none w-full ${
            height ?? 'h-44'
          } placeholder:text-white/50 p-m font-normal dark:text-white text-black rounded-lg dark:bg-dark bg-neutral-gray border border-solid dark:border-white border-gray-300 hover:border-primary focus:border-primary focus:outline-0`,
          {
            condition: className !== undefined,
            valid: className,
          }
        )}
        onChange={(e) => onChange && onChange(e)}
        value={value}
      />
    </div>
  );
};
