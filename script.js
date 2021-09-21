let userData = {
  'USD': 1000,
  'EUR': 900,
  'UAH': 15000,
  'BIF': 20000,
  'AOA': 100
},
bankData = {
  'USD': {
    max: 3000,
    min: 100,
    img: '💵'
  },
  'EUR': {
    max: 1000,
    min: 50,
    img: '💶'
  },
  'UAH': {
    max: 0,
    min: 0,
    img: '💴'
  },
  'GBP': {
    max: 10000,
    min: 100,
    img: '💷'
  }
}
const keys = {};
const getMoney = (userData, bankData) => {
  return new Promise((resolve, reject) => {
    confirm('Посмотреть баланс на карте?') ? resolve(userData) : reject({userData: userData, bankData: bankData})
  })
}

for(let key in userData) {
  keys[key] = key; 
}

getMoney(userData, bankData)
.then(
  function(userData){
    let userChoice;
    do {
      userChoice = prompt(`введите допустимую валюту, в формате: USD, EUR, UAH, BIF, AOA`);
    }while(userChoice !== keys[userChoice]);
    console.log(`Баланс составляет: ${userData[userChoice]} ${keys[userChoice]}`);
  }
)