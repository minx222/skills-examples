import type { HTMLAttributes, FC } from "react";

export type ComponentProps<R, T = HTMLDivElement>  = FC<R & HTMLAttributes<T>>
