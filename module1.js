////QNO.1>>>>
// function Time(time) {
//   const totalSeconds = time;
//   const hours = Math.floor(totalSeconds / 3600);
//   const remainingSeconds = totalSeconds % 3600;
//   const minutes = Math.floor(remainingSeconds / 60);
//   const seconds = remainingSeconds % 60;

//   return (
//     String(hours).padStart(2, "0") +
//     ":" +
//     String(minutes).padStart(2, "0") +
//     ":" +
//     String(seconds).padStart(2, "0")
//   );
// }

// const time = 300;

// setInterval(() => {
//   console.log(Time(time));
//   if (time === 0) clearInterval(countDown);
//   time--;
// }, 1000);

////QNO.2>>>>

// const unit = 159;
// if (unit < 0) {
//   console.log("ERROR");
// } else if (unit <= 100) {
//   console.log("Bill:", unit);
// } else if (unit <= 200) {
//   const bill2 = unit - 100;
//   console.log("Bill:", 100 + bill2 * 2);
// } else {
//   const bill3 = unit - 200;
//   console.log("Bill:", 300 + bill3 * 5);
// }

////QNO.3>>>>>

// async function getAll() {
//   const api = "http://jsonplaceholder.typicode.com/users";
//   try {
//     const res = await fetch(api);
//     if (!res.ok) {
//       throw new Error(`HTTP error status: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log("Success", data);
//   } catch (error) {
//     console.log("Fetched failed: ", error.message);
//   }
// }

// getAll();
