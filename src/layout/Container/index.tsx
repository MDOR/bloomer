import * as React from 'react';
import { classNames, getHTMLProps } from './../../helpers';

export interface Container<T> extends React.HTMLProps<T> {
    isFluid?: boolean,
}

export function getContainerClasses(props: Container<HTMLDivElement>) {
    return {
        'is-fluid': props.isFluid,
    }
}

export const Container = (props: Container<HTMLDivElement>) => {
    const className = classNames(props, { container: true });
    const HTMLProps = getHTMLProps(props);

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}