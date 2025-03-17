import { ReactNode } from "react";

export type TCarouselProps = {
    children: ReactNode[];
    activeIndex?: number;
    onChange?: (index: number) => void;
    childrenClassName?: string;
    className?: string;
    customBtns?: JSX.Element;
}