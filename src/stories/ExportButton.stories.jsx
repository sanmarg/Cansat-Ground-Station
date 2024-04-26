import ExportButton from "../components/CSVexporter/UI/ExportButton";
import { Provider } from "react-redux";
import store from "../app/store";

export default {
  title: "Export Button",
  component: ExportButton,
};

export const Default = () => (
  <Provider store={store}>
    <ExportButton />
  </Provider>
);
