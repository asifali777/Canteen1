let a = 0;
// for item 1
document.getElementById("plus1").addEventListener("click", () => {
  if (a < 4) {
    a++;
    document.getElementById("num1").innerHTML = a;
    document.getElementById("item1").checked = true;
    buy();
  }
});
document.getElementById("minus1").addEventListener("click", () => {
  if (a > 0) {
    a--;
    document.getElementById("num1").innerHTML = a;
    buy();
    if (a === 0) {
      document.getElementById("item1").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});

let b = 0;
// item2
document.getElementById("plus2").addEventListener("click", () => {
  if (b < 4) {
    b++;
    document.getElementById("num2").innerHTML = b;
    document.getElementById("item2").checked = true;
    buy();
  }
});
document.getElementById("minus2").addEventListener("click", () => {
  if (b > 0) {
    b--;
    document.getElementById("num2").innerHTML = b;
    buy();
    if (b === 0) {
      document.getElementById("item2").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item 3
let c = 0;
document.getElementById("plus3").addEventListener("click", () => {
  if (c < 4) {
    c++;
    document.getElementById("num3").innerHTML = c;
    document.getElementById("item3").checked = true;
    buy();
  }
});
document.getElementById("minus3").addEventListener("click", () => {
  if (c > 0) {
    c--;
    document.getElementById("num3").innerHTML = c;
    buy();
    if (c === 0) {
      document.getElementById("item3").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});

// item4
let e = 0;
document.getElementById("plus4").addEventListener("click", () => {
  if (e < 4) {
    e++;
    document.getElementById("num4").innerHTML = e;
    document.getElementById("item4").checked = true;
    buy();
  }
});
document.getElementById("minus4").addEventListener("click", () => {
  if (e > 0) {
    e--;
    document.getElementById("num4").innerHTML = e;
    buy();
    if (e === 0) {
      document.getElementById("item4").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item5
let f = 0;
document.getElementById("plus5").addEventListener("click", () => {
  if (f < 4) {
    f++;
    document.getElementById("num5").innerHTML = f;
    document.getElementById("item5").checked = true;
    buy();
  }
});
document.getElementById("minus5").addEventListener("click", () => {
  if (f > 0) {
    f--;
    document.getElementById("num5").innerHTML = f;
    buy();
    if (f === 0) {
      document.getElementById("item5").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
//   item6
let g = 0;
document.getElementById("plus6").addEventListener("click", () => {
  if (g < 4) {
    g++;
    document.getElementById("num6").innerHTML = g;
    document.getElementById("item6").checked = true;
    buy();
  }
});
document.getElementById("minus6").addEventListener("click", () => {
  if (g > 0) {
    g--;
    document.getElementById("num6").innerHTML = g;
    buy();
    if (g === 0) {
      document.getElementById("item6").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item7
let h = 0;
document.getElementById("plus7").addEventListener("click", () => {
  if (h < 4) {
    h++;
    document.getElementById("num7").innerHTML = h;
    document.getElementById("item7").checked = true;
    buy();
  }
});
document.getElementById("minus7").addEventListener("click", () => {
  if (h > 0) {
    h--;
    document.getElementById("num7").innerHTML = h;
    buy();
    if (h === 0) {
      document.getElementById("item7").checked = false;
    }
  } else {
    return 0;
  }
});
// item8
let i = 0;
document.getElementById("plus8").addEventListener("click", () => {
  if (i < 4) {
    i++;
    document.getElementById("num8").innerHTML = i;
    document.getElementById("item8").checked = true;
    buy();
  }
});
document.getElementById("minus8").addEventListener("click", () => {
  if (i > 0) {
    i--;
    document.getElementById("num8").innerHTML = i;
    buy();
    if (i === 0) {
      document.getElementById("item8").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item9
let j = 0;
document.getElementById("plus9").addEventListener("click", () => {
  if (j < 4) {
    j++;
    document.getElementById("num9").innerHTML = j;
    document.getElementById("item9").checked = true;
    buy();
  }
});
document.getElementById("minus9").addEventListener("click", () => {
  if (j > 0) {
    j--;
    document.getElementById("num9").innerHTML = j;
    buy();
    if (j === 0) {
      document.getElementById("item9").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item10
let k = 0;
document.getElementById("plus10").addEventListener("click", () => {
  if (k < 4) {
    k++;
    document.getElementById("num10").innerHTML = k;
    document.getElementById("item10").checked = true;
    buy();
  }
});
document.getElementById("minus10").addEventListener("click", () => {
  if (k > 0) {
    k--;
    document.getElementById("num10").innerHTML = k;
    buy();
    if (k === 0) {
      document.getElementById("item10").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item11
let l = 0;
document.getElementById("plus11").addEventListener("click", () => {
  if (l < 4) {
    l++;
    document.getElementById("num11").innerHTML = l;
    document.getElementById("item11").checked = true;
    buy();
  }
});
document.getElementById("minus11").addEventListener("click", () => {
  if (l > 0) {
    l--;
    document.getElementById("num11").innerHTML = l;
    buy();
    if (l === 0) {
      document.getElementById("item11").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item12
let m = 0;
document.getElementById("plus12").addEventListener("click", () => {
  if (m < 4) {
    m++;
    document.getElementById("num12").innerHTML = m;
    document.getElementById("item12").checked = true;
    buy();
  }
});
document.getElementById("minus12").addEventListener("click", () => {
  if (m > 0) {
    m--;
    document.getElementById("num12").innerHTML = m;
    buy();

    if (m === 0) {
      document.getElementById("item12").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});
// item13
let n = 0;
document.getElementById("plus13").addEventListener("click", () => {
  if (n < 4) {
    n++;
    document.getElementById("num13").innerHTML = n;

    document.getElementById("item13").checked = true;
    buy();
  
  }
});
document.getElementById("minus13").addEventListener("click", () => {
  if (n > 0) {
    n--;
    document.getElementById("num13").innerHTML = n;
    buy();

    if (n === 0) {
      document.getElementById("item13").checked = false;
      buy();
    }
  } else {
    return 0;
  }
});

///////////////////////////////////////////////////////////////////
function updateCartPrice() {
  var totalCount1 = document.getElementById("num1").innerHTML;
  var priceListed1 = document.getElementById("price1").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice2() {
  var totalCount1 = document.getElementById("num2").innerHTML;
  var priceListed1 = document.getElementById("price2").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice3() {
  var totalCount1 = document.getElementById("num3").innerHTML;
  var priceListed1 = document.getElementById("price3").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice4() {
  var totalCount1 = document.getElementById("num4").innerHTML;
  var priceListed1 = document.getElementById("price4").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice5() {
  var totalCount1 = document.getElementById("num5").innerHTML;
  var priceListed1 = document.getElementById("price5").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice6() {
  var totalCount1 = document.getElementById("num6").innerHTML;
  var priceListed1 = document.getElementById("price6").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice7() {
  var totalCount1 = document.getElementById("num7").innerHTML;
  var priceListed1 = document.getElementById("price7").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice8() {
  var totalCount1 = document.getElementById("num8").innerHTML;
  var priceListed1 = document.getElementById("price8").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice9() {
  var totalCount1 = document.getElementById("num9").innerHTML;
  var priceListed1 = document.getElementById("price9").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice10() {
  var totalCount1 = document.getElementById("num10").innerHTML;
  var priceListed1 = document.getElementById("price10").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice11() {
  var totalCount1 = document.getElementById("num11").innerHTML;
  var priceListed1 = document.getElementById("price11").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice12() {
  var totalCount1 = document.getElementById("num12").innerHTML;
  var priceListed1 = document.getElementById("price12").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}
function updateCartPrice13() {
  var totalCount1 = document.getElementById("num13").innerHTML;
  var priceListed1 = document.getElementById("price13").innerHTML;
  var price = totalCount1 * priceListed1;
  // console.log(price);
  return price;
}

var listedPrice = document.getElementById("cartPrice").innerHTML;
function buy() {
  var storedPrice = (document.getElementById("cartPrice").innerHTML =
    parseInt(listedPrice) +
    updateCartPrice() +
    updateCartPrice2() +
    updateCartPrice3() +
    updateCartPrice4() +
    updateCartPrice5() +
    updateCartPrice6() +
    updateCartPrice7() +
    updateCartPrice8() +
    updateCartPrice9() +
    updateCartPrice10() +
    updateCartPrice11() +
    updateCartPrice12() +
    updateCartPrice13());
  return storedPrice;
}
// last button
let F = 1;
document.getElementById("plusF").addEventListener("click", () => {
  F++;
  document.getElementById("numF").innerHTML = F;
  finalPrice();
});
document.getElementById("minusF").addEventListener("click", () => {
  if (F > 1) {
    F--;
    document.getElementById("numF").innerHTML = F;
    finalPrice();
  } else {
    return 0;
  }
});

function updateCartPriceF() {
  var totalCount1 = document.getElementById("numF").innerHTML;
  var price = totalCount1 * buy();
  console.log(price);
  return price;
}
function finalPrice() {
  document.getElementById("cartPrice").innerHTML = updateCartPriceF();
  return finalPrice;
};
document.getElementById("button").addEventListener("click",()=>{
 alert("🔧🚨 MAINTENANCE BREAK ALERT! 🚨🔧We know that you are hungery but, We can't take your orders right now 😔,stay tuned for further updates 🛠️🔩 It's that time again when our servers need a little TLC. 🤖💤")
})
