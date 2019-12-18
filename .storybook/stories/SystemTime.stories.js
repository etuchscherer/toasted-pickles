import { storyFactory } from "../util/helpers";
import SystemTime from "../../src/components/SystemTime";

export default { title: "SystemTime" };

const story = storyFactory();

export const asDefault = () =>
  story({
    components: {
      SystemTime
    },
    template: `
    <v-system-bar color="green">
      <SystemTime />
    </v-system-bar>
  `
  });



