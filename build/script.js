// script for list items 
const bottomBorder = (event)=>{
  const links = document.querySelectorAll("#scrollMenu p");
  links.forEach((link) =>{
      link.style.borderBottomColor = "";
  });
  event.target.style.borderBottomColor = "#FFC844";  
}
document.getElementById("scrollMenu").addEventListener("click",bottomBorder);
var btn1 = document.getElementById("egg");
var btn2 = document.getElementById("shanghai");
var btn3 = document.getElementById("ramen");
var btn4 = document.getElementById("udon");
var btn5 = document.getElementById("edition");
btn1.addEventListener("click",()=>{
  btn1.style.borderBottom="4px solid #FFC844";
  document.getElementById("Egg_Fried_Rice").style.display="block";
  document.getElementById("Shanghai_Fried_Rice").style.display="none";
  document.getElementById("Fresh_Ramen").style.display="none";
  document.getElementById("Fresh_Udon").style.display="none";
  document.getElementById("Healthier_Edition").style.display="none";
});
btn2.addEventListener("click",()=>{
  btn1.style.border="none";
  document.getElementById("Shanghai_Fried_Rice").style.display="block";
  document.getElementById("Fresh_Ramen").style.display="none";
  document.getElementById("Egg_Fried_Rice").style.display="none";
});
btn3.addEventListener("click",()=>{
  document.getElementById("Shanghai_Fried_Rice").style.display="none";
  btn1.style.border="none";
  document.getElementById("Fresh_Ramen").style.display="block";
  document.getElementById("Egg_Fried_Rice").style.display="none";
});
btn4.addEventListener("click",()=>{
  document.getElementById("Fresh_Udon").style.display="block";
  document.getElementById("Healthier_Edition").style.display="none";
  document.getElementById("Shanghai_Fried_Rice").style.display="none";
  btn1.style.border="none";
  document.getElementById("Fresh_Ramen").style.display="none";
  document.getElementById("Egg_Fried_Rice").style.display="none";
});
btn5.addEventListener("click",()=>{
  document.getElementById("Fresh_Udon").style.display="none";
  document.getElementById("Shanghai_Fried_Rice").style.display="none";
  btn1.style.border="none";
  document.getElementById("Fresh_Ramen").style.display="none";
  document.getElementById("Egg_Fried_Rice").style.display="none";
  document.getElementById("Healthier_Edition").style.display="block";
});
// document.getElementById("Egg_Fried_Rice_Item1").addEventListener("click",()=>{
//   document.getElementById("scrollMenu").style.display="none";
//   document.getElementById("signature").style.display = "block";
//   document.getElementById("Egg_Fried_Rice").style.display="none";
//   document.getElementById("backButton").style.display="block";
//   document.getElementById("banner").style.display="block";
//   document.getElementById("banner1").style.display="block";
//   document.getElementById("addOns").style.display="block";
//   document.getElementById("richAltenative").style.display="block";
//   document.getElementById("Wok-Hey").style.display="block";
//   document.getElementById("Special-req").style.display="block";
//   document.getElementById("addToCart").style.display="block";
//   document.getElementById("cartPrice").innerHTML = "7.80"
//   document.getElementById("images").setAttribute("src","./photos/egg fried rice/Food1-preview.png")
// });
// document.getElementById("Egg_Fried_Rice_Item2").addEventListener("click",()=>{
//   document.getElementById("scrollMenu").style.display="none";
//   document.getElementById("Egg_Fried_Rice").style.display="none";
//   document.getElementById("backButton").style.display="block";
//   document.getElementById("banner").style.display="block";
//   document.getElementById("banner1").style.display="block";
//   document.getElementById("addOns").style.display="block";
//   document.getElementById("richAltenative").style.display="block";
//   document.getElementById("Wok-Hey").style.display="block";
//   document.getElementById("Special-req").style.display="block";
//   document.getElementById("addToCart").style.display="block";
//   document.getElementById("cartPrice").innerHTML = "8.80";
//   document.getElementById("signature").style.display = "hidden";
//   document.getElementById("images").setAttribute("src","./photos/egg fried rice/Food2.png");
//   document.getElementById("seasonalPrawns").innerHTML = "Egg Fried Rice with Braised Beef"
// });
// document.getElementById("Egg_Fried_Rice_Item3").addEventListener("click",()=>{
//   document.getElementById("scrollMenu").style.display="none";
//   document.getElementById("Egg_Fried_Rice").style.display="none";
//   document.getElementById("backButton").style.display="block";
//   document.getElementById("banner").style.display="block";
//   document.getElementById("banner1").style.display="block";
//   document.getElementById("addOns").style.display="block";
//   document.getElementById("richAltenative").style.display="block";
//   document.getElementById("Wok-Hey").style.display="block";
//   document.getElementById("Special-req").style.display="block";
//   document.getElementById("addToCart").style.display="block";
//   document.getElementById("cartPrice").innerHTML = "7.30"
//   document.getElementById("signature").style.display = "hidden";
//   document.getElementById("images").setAttribute("src","./photos/egg fried rice/Food3.png");
//   document.getElementById("seasonalPrawns").innerHTML = "Egg Fried Rice with Grilled Chicken"
// });
// document.getElementById("Egg_Fried_Rice_Item4").addEventListener("click",()=>{
//   document.getElementById("scrollMenu").style.display="none";
//   document.getElementById("Egg_Fried_Rice").style.display="none";
//   document.getElementById("backButton").style.display="block";
//   document.getElementById("banner").style.display="block";
//   document.getElementById("banner1").style.display="block";
//   document.getElementById("addOns").style.display="block";
//   document.getElementById("richAltenative").style.display="block";
//   document.getElementById("Wok-Hey").style.display="block";
//   document.getElementById("Special-req").style.display="block";
//   document.getElementById("addToCart").style.display="block";
//   document.getElementById("cartPrice").innerHTML = "6.80";
//   document.getElementById("signature").style.display = "hidden";
//   document.getElementById("images").setAttribute("src","./photos/egg fried rice/Food4.png");
//   document.getElementById("seasonalPrawns").innerHTML = "Egg Fried Rice"
// });


///////////////////////////////////////////////////////////////////////////////////


// script for Add On items ////
// let a = 0;
// // for item 1
// document.getElementById("plus1").addEventListener("click", () => {
//   if (a < 4) {
//     a++;
//     document.getElementById("num1").innerHTML = a;
//     document.getElementById("item1").checked = true;
//   }
// });
// document.getElementById("minus1").addEventListener("click", () => {
//   if (a > 0) {
//     a--;
//     document.getElementById("num1").innerHTML = a;
//     if (a === 0) {
//       document.getElementById("item1").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// let b = 0;
// // item2
// document.getElementById("plus2").addEventListener("click", () => {
//   if (b < 4) {
//     b++;
//     document.getElementById("num2").innerHTML = b;
//     document.getElementById("item2").checked = true;
//   }
// });
// document.getElementById("minus2").addEventListener("click", () => {
//   if (b > 0) {
//     b--;
//     document.getElementById("num2").innerHTML = b;
//     if (b === 0) {
//       document.getElementById("item2").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item 3
// let c = 0;
// document.getElementById("plus3").addEventListener("click", () => {
//   if (c < 4) {
//     c++;
//     document.getElementById("num3").innerHTML = c;
//     document.getElementById("item3").checked = true;
//   }
// });
// document.getElementById("minus3").addEventListener("click", () => {
//   if (c > 0) {
//     c--;
//     document.getElementById("num3").innerHTML = c;
//     if (c === 0) {
//       document.getElementById("item3").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item4
// let e = 0;
// document.getElementById("plus4").addEventListener("click", () => {
//   if (e < 4) {
//     e++;
//     document.getElementById("num4").innerHTML = e;
//     document.getElementById("item4").checked = true;
//   }
// });
// document.getElementById("minus4").addEventListener("click", () => {
//   if (e > 0) {
//     e--;
//     document.getElementById("num4").innerHTML = e;
//     if (e === 0) {
//       document.getElementById("item4").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item5
// let f = 0;
// document.getElementById("plus5").addEventListener("click", () => {
//   if (f < 4) {
//     f++;
//     document.getElementById("num5").innerHTML = f;
//     document.getElementById("item5").checked = true;
//   }
// });
// document.getElementById("minus5").addEventListener("click", () => {
//   if (f > 0) {
//     f--;
//     document.getElementById("num5").innerHTML = f;
//     if (f === 0) {
//       document.getElementById("item5").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// //   item6
// let g = 0;
// document.getElementById("plus6").addEventListener("click", () => {
//   if (g < 4) {
//     g++;
//     document.getElementById("num6").innerHTML = g;
//     document.getElementById("item6").checked = true;
//   }
// });
// document.getElementById("minus6").addEventListener("click", () => {
//   if (g > 0) {
//     g--;
//     document.getElementById("num6").innerHTML = g;
//     if (g === 0) {
//       document.getElementById("item6").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item7
// let h = 0;
// document.getElementById("plus7").addEventListener("click", () => {
//   if (h < 4) {
//     h++;
//     document.getElementById("num7").innerHTML = h;
//     document.getElementById("item7").checked = true;
//   }
// });
// document.getElementById("minus7").addEventListener("click", () => {
//   if (h > 0) {
//     h--;
//     document.getElementById("num7").innerHTML = h;
//     if (h === 0) {
//       document.getElementById("item7").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item8
// let i = 0;
// document.getElementById("plus8").addEventListener("click", () => {
//   if (i < 4) {
//     i++;
//     document.getElementById("num8").innerHTML = i;
//     document.getElementById("item8").checked = true;
//   }
// });
// document.getElementById("minus8").addEventListener("click", () => {
//   if (i > 0) {
//     i--;
//     document.getElementById("num8").innerHTML = i;
//     if (i === 0) {
//       document.getElementById("item8").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item9
// let j = 0;
// document.getElementById("plus9").addEventListener("click", () => {
//   if (j < 4) {
//     j++;
//     document.getElementById("num9").innerHTML = j;
//     document.getElementById("item9").checked = true;
//   }
// });
// document.getElementById("minus9").addEventListener("click", () => {
//   if (j > 0) {
//     j--;
//     document.getElementById("num9").innerHTML = j;
//     if (j === 0) {
//       document.getElementById("item9").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item10
// let k = 0;
// document.getElementById("plus10").addEventListener("click", () => {
//   if (k < 4) {
//     k++;
//     document.getElementById("num10").innerHTML = k;
//     document.getElementById("item10").checked = true;
//   }
// });
// document.getElementById("minus10").addEventListener("click", () => {
//   if (k > 0) {
//     k--;
//     document.getElementById("num10").innerHTML = k;
//     if (k === 0) {
//       document.getElementById("item10").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item11
// let l = 0;
// document.getElementById("plus11").addEventListener("click", () => {
//   if (l < 4) {
//     l++;
//     document.getElementById("num11").innerHTML = l;
//     document.getElementById("item11").checked = true;
//   }
// });
// document.getElementById("minus11").addEventListener("click", () => {
//   if (l > 0) {
//     l--;
//     document.getElementById("num11").innerHTML = l;
//     if (l === 0) {
//       document.getElementById("item11").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item12
// let m = 0;
// document.getElementById("plus12").addEventListener("click", () => {
//   if (m < 4) {
//     m++;
//     document.getElementById("num12").innerHTML = m;
//     document.getElementById("item12").checked = true;
//   }
// });
// document.getElementById("minus12").addEventListener("click", () => {
//   if (m > 0) {
//     m--;
//     document.getElementById("num12").innerHTML = m;
//     if (m === 0) {
//       document.getElementById("item12").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // item13
// let n = 0;
// document.getElementById("plus13").addEventListener("click", () => {
//   if (n < 4) {
//     n++;
//     document.getElementById("num13").innerHTML = n;
//     document.getElementById("item13").checked = true;
//   }
// });
// document.getElementById("minus13").addEventListener("click", () => {
//   if (n > 0) {
//     n--;
//     document.getElementById("num13").innerHTML = n;
//     if (n === 0) {
//       document.getElementById("item13").checked = false;
//     }
//   } else {
//     return 0;
//   }
// });
// // last button
// let F = 0;
// document.getElementById("plusF").addEventListener("click", () => {
//   F++;
//   document.getElementById("numF").innerHTML = F;
// });
// document.getElementById("minusF").addEventListener("click", () => {
//   if (F > 0) {
//     F--;
//     document.getElementById("numF").innerHTML = F;
//   } else {
//     return 0;
//   }
// });
// ///////////////////////////////////////////////////////////////////
