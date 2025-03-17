import { computeStyles } from "@utils/computeStyles";
import { TOutput } from "./output.types";
import "./output.css";

export const Output = (props: TOutput) => {
  const { className, text} = props;

  return (
    <div className="outputComponent">
      <div className="outputComponent__container">
        <div
          className={computeStyles("outputComponent__text", {
            condition: className !== undefined,
            valid: className,
          })}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Output;
