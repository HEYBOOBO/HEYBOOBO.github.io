

const cards = [
  {
    fields: [
      "\n Welcome to Peilin's pile of mess \n \nThis is a compilation of my works created during Professor Greyory Blake's class 'Art of The Web: Interactive Concepts for Art & Design'. \n \n Go ahead, rummage through the cards and enjoy! They're meant to be explored. "
    ]
  },
  {
    fields: ["Philadelphia Sunset \n \n ▼ click ▼ ", "img:Contents/SUNSET.png", "https://codepen.io/PL-Liao/pen/RNbEGrq"]
  },
  {
    fields: ["CSS Still Life \n \n ▼ click ▼", "img:Contents/StillLife.png", "https://codepen.io/PL-Liao/pen/VYZEoag"]
  },
  {
    fields: ["Little Souls \n \n ▼ click ▼", "img:Contents/DS1.jpg", "https://heyboobo.github.io/"]
  },
  {
    fields: ["Major Arcanas \n \n ▼ click ▼", "img:Contents/arcana(1).png", "https://heyboobo.github.io/s2p2/"]
  },
  {
    fields: ["Moon Phase Clock \n \n ▼ click ▼", "img:Contents/HEKATE.png", "https://editor.p5js.org/HEYBOOBO/sketches/Jk1akGTuJ"]
  },
  {
    fields: ["TIC TAC TOE \n \n ▼ click ▼", "img:Contents/TIC2.png", "https://editor.p5js.org/HEYBOOBO/full/hbJ_Pw_Fc"]
  },
  {
    fields: ["IFTTT \n \n ▼ click ▼", "img:Contents/DOWN2.png", "https://baronhsieh2005.github.io/dsgn-1020-section-3-assignment-2/"]
  },
  {
    fields: ["Dot Art Generator \n \n ▼ click ▼", "img:Contents/DOT.png", "https://heyboobo.github.io/s3fp/"]
  },
  {
    fields: ["Want to hear more ramblings? \n\n ▼Yes(Y)\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0▼No(Y)", "img:Contents/Yes.png", "./Reading_Responses.html"]
  },
];



let currentCard = 0;

function renderCard() {
  const content = document.getElementById('card-content');
  content.innerHTML = '';

  const fields = cards[currentCard].fields;

  fields.forEach((field, index) => {
    if (field.startsWith("img:")) {
      const imgSrc = field.slice(4).trim();
      const img = document.createElement("img");
      img.src = imgSrc;
      img.className = "card-image";

      const nextField = fields[index + 1];
      if (nextField && nextField.trim() !== "") {
        const link = document.createElement("a");
        link.href = nextField;


        if (nextField.startsWith("http")) {
          link.target = "_blank";
        }

        link.appendChild(img);
        content.appendChild(link);
      } else {
        content.appendChild(img);
      }
    } else if (!field.startsWith("http") && !field.startsWith("./")) {
      const div = document.createElement('div');
      div.className = 'field';
      div.innerText = field;
      content.appendChild(div);
    }
  });

  document.getElementById('card-number').innerText = `Card ${currentCard + 1}`;
}


function nextCard() {
  if (currentCard < cards.length - 1) {
    currentCard++;
    renderCard();
  }
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    renderCard();
  }
}

renderCard();

function hideStartup() {
  const startup = document.getElementById('startup');
  startup.classList.add('fade-out');


  setTimeout(() => {
    startup.style.display = 'none';
  }, 10000); // matches the transition duration
}