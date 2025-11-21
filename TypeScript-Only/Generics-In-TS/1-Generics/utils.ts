export function getFirst<T>(arr: T[]): T | undefined {
  if (!arr) {
    return undefined;
  }

  return arr[0];
}
