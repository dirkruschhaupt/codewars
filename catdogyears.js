function years(humanYears) {
  let  catYears = 15;
  let dogYears = 15;
  if ( humanYears === 1 ) {
    return [humanYears,catYears,dogYears]
    }
    if ( humanYears === 2 ) {
      return  [humanYears,catYears+9,dogYears+9]
    }
    if ( humanYears >= 3 ) {
      return [humanYears,catYears+((humanYears-2) *4)+9,dogYears+((humanYears-2)*5)+9]
    }
}
console.log(years(1));
console.log(years(2));
console.log(years(3));
console.log(years(4));
console.log(years(5));
console.log(years(10));
