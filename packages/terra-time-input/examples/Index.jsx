/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TimeInputSrc from '!raw-loader!../src/TimeInput.jsx';
// Example Files
import TimeInputDefault from './TimeInputDefault';

const TimeInputExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TimeInputSrc} />
    <h2 id="default">Time Input - Default</h2>
    <TimeInputDefault />
  </div>
);

export default TimeInputExamples;
