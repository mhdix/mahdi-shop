import React from 'react'

interface TButton {
  children: React.ReactNode;
}
function Button({ children }: TButton) {
  return <button>{children}</button>;
}

export default Button