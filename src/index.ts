export const env = new Proxy(process.env, {
  get: (envObj, prop) => {
    if (!(String(prop) in envObj)) {
      throw new Error(`Environment variable '${String(prop)}' is not defined`);
    }

    return envObj[String(prop)];
  },
}) as Record<string, string>;
