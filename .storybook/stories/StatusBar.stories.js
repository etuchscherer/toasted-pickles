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
      system: {
        default: select('apply a state', {
          success: { status: 'success', message: 'all systems operating normally', icon: 'mdi-check-outline'},
          info: { status: 'info', message: 'manual override enabled', icon: 'mdi-information-outline' },
          error: { status: 'error', message: 'fault detected in GPIO', icon: 'mdi-alert-outline' }
        },
        { status: 'success', message: 'all systems operating normally', icon: 'mdi-check-outline'})
      }
    },
    template: `
    <StatusBar :system="system" />
  `
  });