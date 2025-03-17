import { FC } from "react";

import { useTableCheckbox } from "@components/tableCheckbox/tableCheckbox.hook";
import { TCheckbox } from "@components/tableCheckbox/tableCheckbox.types";
import { computeStyles } from "@utils/computeStyles";

export const TableCheckbox: FC<TCheckbox> = (props: TCheckbox) => {
  const { ...rest } = props;
  const { ref, handleClick } = useTableCheckbox(props);

  return (
    <div>
      <input
        ref={ref}
        type="checkbox"
        className="hidden"
        checked={rest.checked}
        onChange={rest.onChange}
      />
      <div
        onClick={handleClick}
        className={computeStyles("w-[16px] h-[16px] rounded", {
          condition: rest.checked ?? false,
          unvalid: "border border-gray-400",
        })}
      >
        {rest.checked && (
          <svg
            className="fill-none stroke-white stroke-2 bg-primary rounded"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
    </div>
  );
};
