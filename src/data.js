export const API_KEY = "AIzaSyAeovE6LOdStNJtkM6c1RpATf4zzkvcFy4";

export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
