import React from 'react';
import GraphComponent from '../components/GraphComponent/GraphComponent';

export default {
  title: 'GraphComponent',
  component: GraphComponent,
};

const Template = (args) => <GraphComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { x: new Date('2022-01-01'), y: 10 },
    { x: new Date('2022-01-02'), y: 20 },
    { x: new Date('2022-01-03'), y: 15 },
  ],
};