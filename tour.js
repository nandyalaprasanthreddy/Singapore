a = document.getElementById("person");
// console.log(typeof parseInt(a.value));
// y = parseInt(a.value);
// console.log(y);
b = document.getElementsByClassName("stay");
// console.log(b);

c = document.getElementById("staydays");
// z = parseInt(c.value);
// console.log(z);
d = document.getElementsByClassName("checkbox");

result = document.getElementById("output");
// //--------------------------------------------------------

finalcost;

function getCount() {
  cost = 0;
  count = 0;
  for (i = 0; i < d.length; i++) {
    if (d[i].checked == true) {
      count += 1;
      cost += parseInt(d[i].value);
    }
  }
  xyz = [count, cost];
  return xyz;
}

// // // //------------------------------------------------------------

function getStayCost() {
  if (b[0].checked == true) {
    staycost = 150 * parseInt(c.value);
  } else {
    staycost = 0;
  }
  return staycost;
}
// // //------------------------------------------------

function calculateDiscount() {
  ss = getCount();
  tt = getStayCost();
  packages = parseInt(a.value) * ss[1];
  if (ss[0] > 3) {
    finalcost = tt + (packages * 85) / 100;
  } else {
    finalcost = tt + packages;
  }
  return finalcost;
}
//-----------------------
function disable() {
  c.style.visibility = "hidden";
}

// //------------------------------------------------------

// // //------------------------------------------------------------

// function stayCost() {
//   for (i = 0; i < b.length; i++) {
//     if (b[i].checked == true) {
//       staycost = 150 * parseInt(c.value * a.value);
//     } else if (b[i].checked == false){
//       staycost = 150 * 1;
//     }
//   }
//   return staycost;
// // }

// // //-------------------------------------------------------------

// // function calculateDiscount() {
// //   if (count > 3) {
// //     totalcost = sitevisitcost + staycost * 85/100;
// //   } else {
// //     totalcost = sitevisitcost + staycost;
// //   }
// //   return totalcost
// // }

// // //-------------------------------------------------------------

function calculateCost() {
  event.preventDefault();
  // console.log("hi");
  // packages = parseInt(a.value) * cost;
  // console.log(packages);
  // console.log();
  getCount();
  getStayCost();
  calculateDiscount();
  disable();
  result.innerHTML = `Your Preferred Package is ${finalcost}`;
}
