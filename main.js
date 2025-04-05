import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 4, 2, 3, 1, 4, 5, 2, 3, 2, 1];
const uniqueNums = lodash.uniq(array);
console.log(chalk.bgGray(uniqueNums));

console.log(chalk.blueBright("Hello, with chalk!"));