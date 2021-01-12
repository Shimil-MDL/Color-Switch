let bg = "#343434";

// i-blue,j-pink,k-green-,l-orange,m-purple
let i=0, blue_switch = document.querySelector(".s-blue"), blue="#0275d8";
let j=0, pink_switch = document.querySelector(".s-pink"), pink="#ff00ff";
let k=0, green_switch = document.querySelector(".s-green"), green="#45e521";
let l=0, orange_switch = document.querySelector(".s-orange"), orange="#ff6600";
let m=0, purple_switch = document.querySelector(".s-purple"), purple="#7f00ff";

//blue's part
blue_switch.addEventListener("click",function(){ 
i = (i+1)%2;
if(i==1)
  {
document.querySelector("body").style.background = blue;
document.querySelector(".head").style.color = "black";
pink_switch.checked = false;
green_switch.checked = false;
orange_switch.checked = false;
purple_switch.checked = false;
j=k=l=m=0;
}
else{
    document.querySelector(".head").style.color = blue;
    document.querySelector("body").style.background = bg;
}});


purple_switch.addEventListener("click",function(){ 
    m = (m+1)%2;
    if(m==1)
      {
    document.querySelector("body").style.background = purple;
    document.querySelector(".head").style.color = "black";
    pink_switch.checked = false;
    green_switch.checked = false;
    orange_switch.checked = false;
    blue_switch.checked = false;
    i=j=k=l=0;
    }
    else{
        document.querySelector(".head").style.color = purple;
        document.querySelector("body").style.background = bg;
    }});


pink_switch.addEventListener("click",function(){ 
    j = (j+1)%2;
    if(j==1)
    {
        document.querySelector("body").style.background = pink;
        document.querySelector(".head").style.color = "black";
        blue_switch.checked = false;
        green_switch.checked = false;
        orange_switch.checked = false;
        purple_switch.checked = false;
        i=k=l=m=0;
    }
    else{
        document.querySelector(".head").style.color = pink;
        document.querySelector("body").style.background = bg;
    }
});


green_switch.addEventListener("click",function(){ 
    k = (k+1)%2;
    if(k==1)
    {
        document.querySelector("body").style.background = green;
        document.querySelector(".head").style.color = "black";
        blue_switch.checked = false;
        pink_switch.checked = false;
        orange_switch.checked = false;
        purple_switch.checked = false;
        i=j=l=m=0;
    }
    else{
        document.querySelector(".head").style.color = green;
        document.querySelector("body").style.background = bg;
    }
});


orange_switch.addEventListener("click",function(){ 
    l = (l+1)%2;
    if(l==1)
    {
        document.querySelector("body").style.background = orange;
        document.querySelector(".head").style.color = "black";
        blue_switch.checked = false;
    green_switch.checked = false;
    pink_switch.checked = false;
    purple_switch.checked = false;
    i=j=k=0,m=0;
}
else{
    document.querySelector(".head").style.color = orange;
    document.querySelector("body").style.background = bg;
}
});