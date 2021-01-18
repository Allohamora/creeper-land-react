// eslint-disable
import React from 'react';
import AppProvider from '../../src/App/AppProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => <AppProvider><Story /></AppProvider>]