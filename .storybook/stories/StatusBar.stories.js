import { storyFactory } from "../util/helpers";
import StatusBar from "../../src/components/StatusBar";
import { text, boolean } from "@storybook/addon-knobs";

export default { title: "StatusBar" };

const story = storyFactory();

export const asDefault = () =>
  story({
    components: {
      StatusBar
    },
    props: {
      color: {
        default: text('color value', 'green')
      }
    },
    template: `
    <StatusBar :color="color" />
  `
  });