console.log("script two is also working ");
//exercise 2
    //var name=prompt("give me your username");
    //console.log("name is ",name);
    //alert("the name of user is "+ name);

    // to concatenate string on console use comma(,)
    // to concatenate string on alert use +


//exercise 3
var txtinput=document.querySelector("#text-input");
var btn=document.querySelector("#junn");
btn.addEventListener("click",function button(){
    console.log("clicked")
    console.log(txtinput.value)
})


