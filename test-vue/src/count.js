export function abs(num) {
  if (typeof num !== "number") {
    return NaN;
  } else if (num < 0) {
    return - num;
  } else {
    return num;
  }
}

export function add(...args) {
  return args.reduce((prev, next) => prev + next);
}
