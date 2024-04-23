import Heading from "../components/InstrumentCluster/Heading/Heading";

export default {
  title: "Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  pitch: 20,
  roll: 30,
  width: 300,
  height: 300,
};

export const Pitch = Template.bind({});
Pitch.args = {
  pitch: 20,
  roll: 0,
  width: 300,
  height: 300,
};

export const Roll = Template.bind({});
Roll.args = {
  pitch: 0,
  roll: 30,
  width: 300,
  height: 300,
};
