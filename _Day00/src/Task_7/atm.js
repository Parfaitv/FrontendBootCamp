// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате: {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
  let res = {};
  const limitExc = obj => {
    let el = 0;
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        el += obj[key];
        
      }
    }
    return el;
  }
  if(sum % 50 !== 0) return "Incorrect value"
  for (let i = 0; sum > 0; i++) {
    let k = 0;
    let nomin = banknotes[i];
    do {
      if(nomin > sum) continue;
      sum -= nomin
      res[nomin] = ++k;
      if(limitExc(res) > 20) return "Limit exceeded"
    } while (sum >= nomin)
  }
  return res
}

console.log(atm(8350)) // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // Limit exceeded


