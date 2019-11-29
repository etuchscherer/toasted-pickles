import { storyFactory } from "../util/helpers";
import StatusBar from "../../src/components/StatusBar";
import { text, select } from "@storybook/addon-knobs";

export default { title: "StatusBar" };

const story = storyFactory();

export const asDefault = () =>
  story({
    components: {
      StatusBar
    },
    props: {
      state: {
        default: text('applied state', 'error')
      }
    },
    template: `
    <StatusBar :state="state" />
  `
  });