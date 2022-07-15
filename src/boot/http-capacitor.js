import { Platform } from "quasar";

const options = {
  url: process.env.API,
  headers: {
    client: `${Platform.is.platform} / ${Platform.is.name}`,
    "Content-Type": "application/json",
  },
};

export { options };
