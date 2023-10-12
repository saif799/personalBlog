function test<T>(array: T[]): T[] {
  array.shift();

  return array;
}
function test2<T>(random: T, ran: T) {
  return { random, ran };
}

// test([1, 2, 3, 4]);
// test(["", "", "", ""]);

const s = test2(3, 5);
const ss = test2("should work ", "random");

