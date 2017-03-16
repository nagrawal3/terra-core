/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ClinicalItemViewSrc from '!raw-loader!../src/ClinicalItemView.jsx';
// Example Files
import ClinicalItemViewStandard from './ClinicalItemViewStandard';
import ClinicalItemViewTwoColumn from './ClinicalItemViewTwoColumn';
import ClinicalItemViewTwoColumnLeft from './ClinicalItemViewTwoColumnLeft';
import ClinicalItemViewComment from './ClinicalItemViewComment';
import ClinicalItemViewAll from './ClinicalItemViewAll';

const ClinicalItemViewExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ClinicalItemViewSrc} />
    <h2 id="standard">Standard Displays</h2>
    <ClinicalItemViewStandard />
    <h2 id="outline-variant">Two Column ClinicalItemView</h2>
    <ClinicalItemViewTwoColumn />
    <h2 id="link-variant">Left Emphasis ClinicalItemView</h2>
    <ClinicalItemViewTwoColumnLeft />
    <h2 id="link-variant">Comment ClinicalItemView</h2>
    <ClinicalItemViewComment />
    <h2 id="link-variant">All Elements ClinicalItemView</h2>
    <ClinicalItemViewAll />
  </div>
);

export default ClinicalItemViewExamples;
