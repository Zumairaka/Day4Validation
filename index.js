// //  console.dir(document);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title = "JS Validation";
// // console.log(document.title);
// // console.log(document.all[7]);

// //console.log(document.getElementById("intro"));
// // let store = document.getElementById("intro");
// // console.log(store.textContent);
// // store.textContent = "hiiii";
// // store.innerHTML = "<h1>Hello </h1>";
// // //store.textContent = "<h1>Hello </h1>";

// // let divValue = document.getElementById("div1");
// // divValue.innerHTML = "<p> fdgfahfaahfshgjsdfkgjgkghjkfgcjkfaxvvbfg</p>";

// //document.getElementById("div1").innerHTML = "<p>sgfjghejgrtuhfjgkfhgfg</p>"
// let hold = document.getElementsByClassName("heading");
// hold[1].textContent = "hi.helloo";
// hold[1].style.borderBottom = 'solid 3px black';
// hold[0].style.fontWeight = "bold";
// //hold[0].style.backgroundColor = "green";
// for(var i = 0;i<hold.length;i++)
// {
//     hold[i].style.backgroundColor = "blue";
// }

// let safe = document.getElementsByTagName("h1");
// safe[1].textContent = "Tag Text Changed";
// let area = document.querySelector("input");
// area.value = "Pling!!!";
// //area = document.querySelector("#submit");

// area = document.querySelector("input[id = 'submit']");
// area.value = "Cancel";

// var cnt = 0;
// function myFunction()
//     {
//             area = document.querySelector(".lichild");
//             area.style.color = "Red";
//             area = document.querySelector(".lichild:last-child");
//             area.style.color = "Blue";
//             area = document.querySelector(".lichild:nth-child[2]");
//             area.style.color = "Green";
//     }

//     function onloadFunction()
//     {
//         alert("Welcome");
//     }
//     function changeFunction(val)
//     {
//         alert("The input value has changed. The new value is: "+val);
//     }
    // on entering the text it will convert to uppercase
    function upper()
    {
        var x=document.getElementById("textbox");
        x.value=x.value.toUpperCase();
    }

