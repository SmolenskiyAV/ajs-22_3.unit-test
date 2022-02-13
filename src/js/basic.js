export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

// реализовываем функцию индикации здоровья
export function healthIndication({name: name, health: health}) {
  if (health > 50) return `${name}: healthy`;
  if ((health <= 50) && (health >= 15)) return `${name}: wounded`;
  if (health < 15) return `${name}: critical`;
}

//сортировка массива по величине здоровья героя
export function sortArray(arr) {
  return (
    arr.sort(
    (a, b) => b.health - a.health
    )
  )
}

