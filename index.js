const HIGHER = 1;
const LOWER = -1;
const SAME = 0;

export default function sortBy (computer) {
  return function sortByComputer (array) {
    return [...array].sort((left, right) => {
      if (computer(left) < computer(right)) {
        return LOWER;
      }

      if (computer(left) > computer(right)) {
        return HIGHER;
      }

      return SAME;
    });
  };
}
