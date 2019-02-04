import { getUniqueString } from "./getUniqueString";

test("should return a string", () => {
  expect(typeof getUniqueString()).toEqual("string");
});

const count = 1000;

test(`should return unique string in ${count} cases`, () => {
  const uids = [];
  for (let i = 0; i <= count; i += 1) {
    const uid = getUniqueString();
    expect(uids.includes(uid)).toEqual(false);
    uids.push(uid);
  }
});
