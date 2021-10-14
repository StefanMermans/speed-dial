import React from "react";

import cn from 'classnames';

const getPrimaryClass = (disabled) => {
    let className = 'bg-indigo-600 disabled:bg-indigo-900 active:bg-indigo-400 disabled:text-gray-400 ';

    if (!disabled) {
        className += " hover:bg-indigo-700";
    }

    return className;
}

const getDefaultClass = (disabled) => {
    let className = 'active:bg-gray-600 disabled:text-gray-500';

    if (!disabled) {
        className += ' hover:bg-gray-700';
    }

    return className;
};

const COLORS = {
    primary: getPrimaryClass,
    default: getDefaultClass,
}

export default function Button(props) {
    return (
        <button 
            className={cn(
                COLORS[props.variant]?.(props.disabled) ?? getDefaultClass(props.disabled),
                "flex rounded-md px-4 py-2 disabled:cursor-default",
            )}
            {...props}
            disabled={props.disabled}
        >
            {props.children}
        </button>)
    ;
}

Button.defaultProps = {
    variant: 'default',
};
