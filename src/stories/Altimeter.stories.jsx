import Altimeter from "../components/InstrumentCluster/Altimeter/Altimeter";

export default {
  title: "Altimeter",
  component: Altimeter,
};

const Template = (args) => <Altimeter {...args} />;

export const Default = Template.bind({});
Default.args = {
  altitude: 400,
  width: 300,
  height: 300,
};

export const ZeroAltitude = Template.bind({});
ZeroAltitude.args = {
  altitude: 0,
  width: 300,
  height: 300,
};

export const MaxAltitude = Template.bind({});
MaxAltitude.args = {
  altitude: 8950,
  width: 300,
  height: 300,
};
