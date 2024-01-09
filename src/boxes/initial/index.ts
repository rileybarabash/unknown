/**
 * @file Something amazing.
 * @author Riley Barabash <riley@rileybarabash.com>
 */

import { Buffer } from "buffer"

/**
 * Logs a secret message.
 */
export const initial = (): void => console.log(Buffer.from("596f7520776572652073656c656374656420666f72206120726561736f6e2e2050726f766520796f757220776f7274682e", "hex").toString("binary"))
