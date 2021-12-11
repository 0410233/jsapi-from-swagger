
// 测试 abort
// function request() {
//   let task;

//   const promise = new Promise((resolve, reject) => {
//     task = setTimeout(() => {
//       const num = parseInt(Math.random() * 100);
//       if (num%2 == 0) {
//         resolve(num);
//       } else {
//         reject(num);
//       }
//     }, 2000);
//   });

//   promise.abort = function() {
//     if (task) {
//       console.log('clear:', task);
//       clearTimeout(task);
//     }
//   };

//   return promise;
// }
