let index = 0;

export function getIndex(): number {
  index += 1;
  return index;
}

export function getIndexString(): string {
  return `#${getIndex()}`;
}
