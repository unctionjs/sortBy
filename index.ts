import {MapperFunctionType} from "./types";

const HIGHER = 1;
const LOWER = -1;
const SAME = 0;

export default function sortBy<A, B> (mapper: MapperFunctionType<A, B>) {
  return function sortByMapper (array: Array<A>): Array<A> {
    return [...array].sort((left: A, right: A) => {
      if (mapper(left) < mapper(right)) {
        return LOWER;
      }

      if (mapper(left) > mapper(right)) {
        return HIGHER;
      }

      return SAME;
    });
  };
}
