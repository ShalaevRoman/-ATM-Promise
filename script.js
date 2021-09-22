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

const KEYS = {};
const BANKKEYS = {};
const getMoney = (userData, bankData) => {
  return new Promise((resolve, reject) => {
    confirm('Посмотреть баланс на карте?') ? resolve(userData) : reject({userData: userData, bankData: bankData})
  })
};

for(let key in userData) {
  KEYS[key] = key; 
};

for (let key in bankData) {
  BANKKEYS[key] = key;
}

getMoney(userData, bankData)
.then(
  function(userData){
    let userChoiceBalance;
    do {
      userChoiceBalance = prompt(`Введите допустимую валюту, в формате: USD, EUR, UAH, BIF, AOA`);
      if (userChoiceBalance) {
        userChoiceBalance.toUpperCase();
      }
    }while(userChoiceBalance !== KEYS[userChoiceBalance]);
    console.log(userChoiceBalance)
    console.log(`Баланс составляет: ${userData[userChoiceBalance]} ${KEYS[userChoiceBalance]}`);
    console.log(`Спасибо, хорошего дня🤗!)))`)
  },
  
  function(reject) {
    let userChoiceCash;
    let userChoiseNumber;
    do {
      userChoiceCash = prompt(`Введите допустимую валюту, в формате: USD, EUR, UAH, BIF, AOA`);
      if (userChoiceCash) {
        userChoiceCash.toUpperCase();
      }
    } while(userChoiceCash !== KEYS[userChoiceCash] || userChoiceCash !== BANKKEYS[userChoiceCash]);
     
    userChoiseNumber = prompt(`Введите сумму которую желаете снять:`);

    if (userChoiseNumber > reject.bankData[userChoiceCash].max) {
      console.log(`Введенная сумма больше допустимой.`)
      console.log(`Максимальная сумма снятия:${reject.bankData[userChoiceCash].max}${reject.bankData[userChoiceCash].img}`)
      console.log(`Спасибо, хорошего дня🤗!)))`)
      return
    };
     if(userChoiseNumber < reject.bankData[userChoiceCash].min) {
      console.log(`Введенная сумма меньше допустимой.`)
      console.log(`Минимальная сумма снятия:${reject.bankData[userChoiceCash].min}${reject.bankData[userChoiceCash].img}`)
      console.log(`Спасибо, хорошего дня🤗!)))`)
      return
    };
      console.log(`Вот Ваши денежки ${userChoiseNumber}${userChoiceCash}${reject.bankData[userChoiceCash].img}`)
      console.log(`Спасибо, хорошего дня🤗!)))`)
  }
)