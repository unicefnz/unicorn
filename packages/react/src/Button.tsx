import React from 'react';

export default ({ children }: React.PropsWithChildren<void>) => (
  <button type="button">{children}</button>
);
