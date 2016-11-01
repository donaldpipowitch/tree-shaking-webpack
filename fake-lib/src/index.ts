import { foo, doBar, logBaz } from './lib';

export { logBaz };

export const logFoo = () => console.log(foo);
export const logBar = () => console.log(doBar());

export const logFizz = () => console.log('Hello TREE_SHAKING.fizz.');
export const logBuzz = () => console.log('Hello TREE_SHAKING.buzz.');
