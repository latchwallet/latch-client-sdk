import { UserOperation } from "@latch-wallet/core-types";
import { BigNumber } from "ethers";

export const transformUserOP = (userOp: UserOperation): UserOperation => {
  try {
    const userOperation = { ...userOp };
    const keys: (keyof UserOperation)[] = [
      "nonce",
      "callGasLimit",
      "verificationGasLimit",
      "preVerificationGas",
      "maxFeePerGas",
      "maxPriorityFeePerGas",
    ];
    for (const key of keys) {
      if (userOperation[key] && userOperation[key] !== "0") {
        userOperation[key] = BigNumber.from(userOp[key]).toHexString();
      }
    }
    return userOperation;
  } catch (error) {
    throw `Failed to transform user operation: ${error}`;
  }
};
