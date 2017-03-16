/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TimeInputTests from './TimeInputTests';
import DefaultTimeInput from './DefaultTimeInput';

const routes = (
  <div>
    <Route path="/tests/time-input-tests" component={TimeInputTests} />
    <Route path="/tests/time-input-tests/default" component={DefaultTimeInput} />
  </div>
);

export default routes;
