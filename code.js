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
var div=document.querySelector("#div-out");
//div.innerText="..loading.."

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?&text=junaid"

function gettranslatedURL(t){
    return serverURL+"?"+"text"+t
}


btn.addEventListener("click",function button(){
    
    //console.log("this is in text area"+txtinput.value)
    
    var inputText=txtinput.value; //taking input

    fetch(gettranslatedURL(inputText))
        .then(Response=>Response.json())
        .then(json=>console.log(json.contents.translated))

    div.innerText=inputText; 
})


//var t=document.querySelector("#text-area")

  
