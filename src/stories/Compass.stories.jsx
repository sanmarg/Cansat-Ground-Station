import Compass from "../components/InstrumentCluster/Compass/Compass";

export default {
  title: "Compass",
  component: Compass,
};

const Template = (args) => <Compass {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: 60,
  width: 300,
  height: 300,
};

export const North = Template.bind({});
North.args = {
  direction: 0,
  width: 300,
  height: 300,
};

export const West = Template.bind({});
West.args = {
  direction: 90,
  width: 300,
  height: 300,
};
