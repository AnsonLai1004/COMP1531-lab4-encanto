/**
 * Add type annotations to function parameters and replace all type stubs 'any'.
 */

export interface Madrigal {
  // TODO: add type annotations
  name: string;
  age: number;
  gift?: string;
}

export interface Song {
  // TODO: add type annotations
  name: string;
  singers: string | string[];
}

// TODO: add type annotations
export function createMadrigal(name: string, age: number, gift?: string) {
  // TODO: implementation
  if (gift === undefined) {
    return {
      name: name,
      age: age,
    }
  } else {
    return {
      name: name,
      age: age,
      gift: gift,
    }
  }
}

// TODO: add type annotations
export function createSong(name: string, singers: string | string[]) {
  // TODO: implementation
  return {
    name: name,
    singers: singers,
  };
}

// TODO: add type annotations
export function extractNamesMixed(array: (Madrigal | Song)[]) {
  // TODO: implementation
  const extractNames = function (obj: Madrigal | Song) {
    return obj.name;
  }
  const newList = array.map(extractNames);
  return newList;
}

// TODO: add type annotations
export function extractNamesPure(array: Madrigal[] | Song[]) {
  // TODO: implementation
  const extractNames = (obj: Madrigal | Song) => obj.name;
  const newList = array.map(extractNames);
  return newList;
}

// TODO: add type annotations
export function madrigalIsSinger(madrigal: Madrigal, song: Song) {
  // TODO: implementation
  const singers = song.singers;
  if(!Array.isArray(singers)) {
    if (singers === madrigal.name) {
      return true;
    }
  } else {
    for (let singer of singers) {
      if (singer === madrigal.name) {
        return true;
      }
    }
  }
  return false;
}

// TODO: add type annotations
export function sortedMadrigals(madrigals: Madrigal[]) {
  // TODO: implementation
  const sortedArr = [];
  for (let element of madrigals) {
    sortedArr.push(element);
  }
  sortedArr.sort(
    function(a,b) {
      if (a.age === b.age) {
        /*const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA - nameB;*/
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      }
      return a.age - b.age;
    }
  )
  console.log(sortedArr)
  return sortedArr;
}


// TODO: add type annotations
export function filterSongsWithMadrigals(madrigals: Madrigal[], songs: Song[]) {
  // TODO: implementation
  const result = [];
  for (let song of songs) {
    breakme: for (let madrigal of madrigals) {
      if(madrigalIsSinger(madrigal, song)) {
        result.push(song);
        break breakme;
      }
    }
  }
  return result;
}

// TODO: add type annotations
export function getMostSpecialMadrigal(madrigals: Madrigal[], songs: Song[]) {
  // TODO: implementatio
  let count = [];
  for (let i = 0; i < madrigals.length; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < madrigals.length; i++) {
    for (let song of songs) {
      if (madrigalIsSinger(madrigals[i], song)) {
        count[i] += 1;
      }
    }
  }
  
  let largest = 0;
  let value = count[0];
  for (let i = 1; i < count.length; i++) {
    if (value < count[i]) {
      largest = i;
      value = count[i];
    }
  }
  return madrigals[largest];
}
