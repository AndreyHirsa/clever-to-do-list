import React from 'react';

export interface IRoute {
  component: React.FC;
  path: string;
  exact: true;
}
