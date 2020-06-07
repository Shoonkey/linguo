import React from 'react';

function Icon({ name, size, ...props }) {
  return <ion-icon name={name} size={size} {...props}></ion-icon>;
}

export default Icon;