import React from 'react'
import type { LabelHTMLAttributes } from "react";

export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement> {

    text: string;
}

const Label = ({ text, ...props }: LabelProps) => {
    return (
        <label {...props} className="uppercase text-(--text-light) fond-medium text-sm">
            {text}
        </label>
    );
};

export default Label
