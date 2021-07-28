// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
}

async function aMakeSmoothie() {
  try {
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
   
    return fruits;
  } catch (error) {
    console.log('Ошибка ' + error);
  }
}

// aMakeSmoothie().then(fruits => console.log(fruits));

// function makeSmoothie() {
//   getFruit('apple').then(apple => console.log(apple));
//   getFruit('kiwi').then(kiwi=>console.log(kiwi));
// }




// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
