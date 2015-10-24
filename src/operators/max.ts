import Observable from '../Observable';
import { ReduceOperator } from './reduce-support';

export default function max<T, R>(predicate?: (x: R, y: T) => R,
                                  thisArg?: R): Observable<R> {
  const max = (x, y) => x > y ? x : y;
  const maxPredicate = (typeof predicate === 'function') ? predicate : max;
  return this.lift(new ReduceOperator(maxPredicate, thisArg));
}
