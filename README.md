# `@cubos/env`

This module allow accessing ENV variables in a easier way than standard `process.env.SOMETHING`. The rational is that when you are accessing a configuration variable you expect it to exist. Sometimes it isn't possible to define a default value.

```typescript
const something = process.env.SOMETHING; // string | undefined
// You must check before using this var.
if (!something) {
  throw new Error("You must define 'SOMETHING'");
}

import { env } from "@cubos/env";

const something = env.SOMETHING; // string
// It will throw if the var is not defined.
```

Note: if you want to allow the var to be optional and set a default value, do:

```typescript
const something = process.env.SOMETHING ?? "default value"; // string
```
