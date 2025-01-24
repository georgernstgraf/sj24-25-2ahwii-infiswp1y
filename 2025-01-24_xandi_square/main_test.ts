import { assertEquals } from "jsr:@std/assert";
import { pythagoras } from "./main.ts";

Deno.test("pythagoras", () => {
    assertEquals(pythagoras(), [12, 30, 63]);
});
