const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //Sctions Active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //resmove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
    
    
    let faviconDark = "assets/images/favicon-dark.ico";
    let faviconLight = "assets/images/favicon-light.ico";
    
    let favicon = document.getElementById('favicon').href;

    if(favicon.includes(faviconDark)){
    document.getElementById('favicon').href = favicon.replace(faviconDark,faviconLight);
    }
    else{
    document.getElementById('favicon').href = favicon.replace(faviconLight,faviconDark);
    }

  });
}

PageTransitions();

function ConsolePrinting() {
  console.log(
    "%cHello, world!",
    "color: blue; font-weight: bold; background-color: yellow;"
  );

  const data = [
    { name: "John", age: 28, country: "USA" },
    { name: "Emily", age: 32, country: "Canada" },
    { name: "Anna", age: 24, country: "Germany" },
  ];

  console.table(data);

  console.group("Group 1");
  console.log("Message 1");
  console.log("Message 2");
  console.groupEnd();

  console.group("Group 2");
  console.log("Message 3");
  console.log("Message 4");
  console.groupEnd();


  console.group("Group 1");
  console.log("Message 1");
  console.group("Group 2");
  console.log("Message 3");
  console.log("Message 4");
  console.groupEnd();
  console.groupEnd();

  
}

ConsolePrinting();
console.log('are wah ek error aya contact karo asap');
