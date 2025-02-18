import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {}

export default function Input(props: InputProps) {
    return (
        <input className='' {...props} />
    );
}
