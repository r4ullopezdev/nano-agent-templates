import { describe, expect, test } from "vitest";
import { catalog, listTemplateIds } from "../src/catalog.js";

describe("catalog", () => {
  test("contains the expected starter templates", () => {
    expect(catalog).toHaveLength(5);
    expect(listTemplateIds()).toContain("research");
  });
});

