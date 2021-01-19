# `@cubos/env`

This module allow accessing ENV variables in a easier way than standard `process.env.SOMETHING`. The rational is that when you are accessing a configuration variable you expect it to exist. Sometimes it isn't possible to define a default value.

```typescript
const something1 = process.env.FIRST_SOMETHING; // Will be typed as "string | undefined"
// You must check before you use this var.
if (!something1) {
  throw new Error("You must define 'FIRST_SOMETHING'");
}

import { env } from "@cubos/env";

const something1 = env.FIRST_SOMETHING; // This is already a "string". Will throw it the var is not defined.
```

Note: if you want to allow the var to be optional and set a default value, do:

```typescript
const something1 = process.env.FIRST_SOMETHING ?? "default value"; // Will be typed as "string"
```
