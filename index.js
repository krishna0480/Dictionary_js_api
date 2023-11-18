const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound")
const btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    let inpword=document.getElementById("inp-word").value;
    console.log(inpword);
    fetch(`${url}${inpword}`)
    .then((response)=>response.json())
    .then((data)=>{console.log(data)
    result.innerHTML = `
    <div class="word">

    <h3>${inpword}</h3>
    <button onClick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
</div>
<div class="details">
    <p>${data[0].meanings[0].partsOfSpeech}</p>
    <p>${data[0].phonetic}</p>
</div>
<p class="word-meaning">
${data[0].meanings[0].definitions[0].definition}
</p>
<p class="word-example">
${data[0].meanings[0].definitions[0].example || ""}
</p>`;
sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`)
console.log(sound);


})
})

function playSound(){
    sound.play()
}