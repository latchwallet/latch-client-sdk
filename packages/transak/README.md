# `@latch-wallet/transak`

> A library to import the transak for web directly from [Biconomy SDK](https://github.com/bcnmy/biconomy-client-sdk)

## Usage

No need to create api key from transak dashboard.

```ts
import Transak from "@latch-wallet/transak";
const transak = new Transak("STAGING");
transak.init();
```
