import { buildClient } from "@xata.io/client";
import type { BaseClientOptions } from "@xata.io/client";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type DatabaseSchema = {};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Assel-Altayeva-s-workspace-55p5tf.ap-southeast-2.xata.sh/db/Jim_looma",
  apiKey: process.env.XATA_API_KEY,
  branch: "main",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options });
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};