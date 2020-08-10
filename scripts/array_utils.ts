export function draw<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function findLastIndex<T>(array: T[], critera: (item: T) => boolean): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (critera(array[i])) {
      return i;
    }
  }
  return -1;
}

//   /*   let shuffled = deck.slice(0), i = arr.length, min = i - size, temp, index;
//     while (i-- > min) {
//         index = Math.floor((i + 1) * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//     }
//     return shuffled.slice(min);*/
//   return [];
// };
