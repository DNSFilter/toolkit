import cases from "jest-in-case"
import { transformValue } from "../transformValue"

cases(
  "transformValue('string', value)",
  (params) =>
    expect(transformValue("string", params.value)).toBe(params.result),
  [
    {
      name: "undefined -> null",
      value: undefined,
      result: null,
    },
    {
      name: "null -> null",
      value: null,
      result: null,
    },
    {
      name: "'' -> ''",
      value: "",
      result: "",
    },
    {
      name: "0 -> '0'",
      value: 0,
      result: "0",
    },
  ]
)

cases(
  "transformValue('number', value)",
  (params) =>
    expect(transformValue("number", params.value)).toBe(params.result),
  [
    {
      name: "undefined -> null",
      value: undefined,
      result: null,
    },
    {
      name: "null -> null",
      value: null,
      result: null,
    },
    {
      name: "0 -> 0",
      value: 0,
      result: 0,
    },
    {
      name: "'' -> 0",
      value: "",
      result: 0,
    },
  ]
)

cases(
  "transformValue('force-array', value)",
  (params) =>
    expect(transformValue("force-array", params.value)).toEqual(params.result),
  [
    {
      name: "undefined -> []",
      value: undefined,
      result: [],
    },
    {
      name: "null -> null",
      value: null,
      result: [],
    },
    {
      name: "'' -> ['']",
      value: "",
      result: [""],
    },
    {
      name: "0 -> [0]",
      value: 0,
      result: [0],
    },
  ]
)

cases(
  "transformValue('non-empty-str', value)",
  (params) =>
    expect(transformValue("non-empty-str", params.value)).toEqual(
      params.result
    ),
  [
    {
      name: "undefined -> null",
      value: undefined,
      result: null,
    },
    {
      name: "null -> null",
      value: null,
      result: null,
    },
    {
      name: "'' -> null",
      value: "",
      result: null,
    },
  ]
)
