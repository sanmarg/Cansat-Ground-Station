import VerticalSpeed from "../components/InstrumentCluster/VerticalSpeed/VerticalSpeed";

export default {
  title: "VerticalSpeed",
  component: VerticalSpeed,
};

const Template = (args) => <VerticalSpeed {...args} />;

export const Default = Template.bind({});
Default.args = {
  verticalspeed: 0,
  width: 300,
  height: 300,
};

export const Zero = Template.bind({});
Zero.args = {
  verticalspeed: 0,
  width: 300,
  height: 300,
};

export const Max = Template.bind({});
Max.args = {
  verticalspeed: 0,
  width: 300,
  height: 300,
};
