/**
 * Add type annotations to function parameters and replace all type stubs 'any'.
 */

export interface Madrigal {
  // TODO: add type annotations
  name: any;
  age: any;
  gift?: any;
}

export interface Song {
  // TODO: add type annotations
  name: any;
  singers: any;
}

// TODO: add type annotations
export function createMadrigal(name, age, gift?) {
  // TODO: implementation
  return null;
}

// TODO: add type annotations
export function createSong(name, singers) {
  // TODO: implementation
  return null;
}

// TODO: add type annotations
export function extractNamesMixed(array) {
  // TODO: implementation
  return ['string', 'array'];
}

// TODO: add type annotations
export function extractNamesPure(array) {
  // TODO: implementation
  return ['string', 'array'];
}

// TODO: add type annotations
export function madrigalIsSinger(madrigal, song) {
  // TODO: implementation
  return false;
}

// TODO: add type annotations
export function sortedMadrigals(madrigals) {
  // TODO: implementation
  return [];
}

// TODO: add type annotations
export function filterSongsWithMadrigals(madrigals, songs) {
  // TODO: implementation
  return [];
}

// TODO: add type annotations
export function getMostSpecialMadrigal(madrigals, songs) {
  // TODO: implementation
  return [];
}
