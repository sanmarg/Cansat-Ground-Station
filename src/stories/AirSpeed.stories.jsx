import AirSpeed from "../components/InstrumentCluster/AirSpeed/AirSpeed";

export default {
  title: "Instrument Cluster/AirSpeed",
  component: AirSpeed,
};

const Template = (args) => <AirSpeed {...args} />;

export const Default = Template.bind({});
Default.args = {
  speed: 50,
  width: 300,
  height: 300,
};

export const ZeroSpeed = Template.bind({});
ZeroSpeed.args = {
  speed: 0,
  width: 300,
  height: 300,
};

export const MaxSpeed = Template.bind({});
MaxSpeed.args = {
  speed: 160,
  width: 300,
  height: 300,
};

