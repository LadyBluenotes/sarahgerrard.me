import { JSX, splitProps } from 'solid-js';
import './Button.css';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  const [local, others] = splitProps(props, ['variant', 'size', 'fullWidth', 'class', 'children']);

  const variant = local.variant || 'primary';
  const size = local.size || 'medium';
  const fullWidth = local.fullWidth || false;

  const classes = [
    'button',
    `button-${variant}`,
    `button-${size}`,
    fullWidth ? 'button-full-width' : '',
    local.class || '',
  ].filter(Boolean).join(' ');

  return (
    <button class={classes} {...others}>
      {local.children}
    </button>
  );
};

export default Button;