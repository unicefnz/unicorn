export default function mergeClasses(...classes: any[]): string {
  return classes
    .filter(c => c && typeof c === 'string')
    .filter((c, i, arr) => arr.indexOf(c) === i)
    .join(' ');
}
