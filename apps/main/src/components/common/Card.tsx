import { JSX, splitProps } from 'solid-js';
import './Card.css';

export interface CardProps {
  title?: string;
  elevation?: 'flat' | 'low' | 'medium' | 'high';
  class?: string;
  children: JSX.Element;
}

const Card = (props: CardProps) => {
  const [local, others] = splitProps(props, ['title', 'elevation', 'class', 'children']);
  
  const elevation = local.elevation || 'low';
  
  const classes = [
    'card',
    `card-elevation-${elevation}`,
    local.class || '',
  ].filter(Boolean).join(' ');

  return (
    <div class={classes} {...others}>
      {local.title && <h3 class="card-title">{local.title}</h3>}
      <div class="card-content">
        {local.children}
      </div>
    </div>
  );
};

export default Card;