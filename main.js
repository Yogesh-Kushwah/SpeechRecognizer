const texts = document.querySelector(".texts");

window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  console.log(e);
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes('Hi')) {
      p = document.createElement("p");
      p.classList.add("replay");
       p.innerText = 'Hi Anand ,How are you ?';
      texts.appendChild(p);
    }
    if (text.includes("I'm fine")) {
      p = document.createElement("p");
      p.classList.add("replay");
       p.innerText = 'Me too';
      texts.appendChild(p);
    }

    if (text.includes("How are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
       p.innerText = "As i am a AI tool i don't have feelings";
      texts.appendChild(p);
    }
   
    if (text.includes('What can you do?')|| text.includes("what task can you perform")) {
      p = document.createElement("p");
      p.classList.add("replay");
       p.innerText = 'As i am a AI tool so i can only perform task of the availabel data  ';
      texts.appendChild(p);
    }
   
    if (
      text.includes("What's your name") || text.includes("What is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "i am a speach recognizer";
      texts.appendChild(p);
    }
   
    if (text.includes('what are you doing')) {
      p = document.createElement("p");
      p.classList.add("replay");
       p.innerText = 'nothing';
      texts.appendChild(p);
    }

    if (text.includes("Open Google")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Google ";
      texts.appendChild(p);
      console.log("opening Google");
      window.open("https://www.google.co.in/");
    }

    if (text.includes("Open  portal")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Portal ";
      texts.appendChild(p);
      console.log("opening Portal");
      window.open("https://onlinefeestechnocrats.in/");
    }
   
    if (text.includes("Open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube ";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
