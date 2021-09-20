function createPaper(object) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");
  let paper = document.createElement("div");
  paper.classList.add("d-flex", "col-12", "profile-card", "vh-75", "p-5", "bgBox");
  paper.classList.add(sidePosition(object.side));
  paper.classList.add(topPosition(object.top));
  paper.style.backgroundImage = "url(" + object.backgroundImageUrl + ")";

  let textDiv = document.createElement("div");
  textDiv.classList.add("col-8");
  let text = document.createElement("h3");
  text.innerHTML = object.text;
  text.style.color = "#" + object.color;


  textDiv.append(text);
  paper.append(textDiv);
  innerFlex.append(paper);

  object.dom.append(innerFlex);
}

function sidePosition(side) {
  if (side === "left") return "justify-content-start";
  if (side === "right") return "justify-content-end";
  return "justify-content-center";
}

function topPosition(top) {
  if (top === "top") return "align-items-start";
  if (top === "bottom") return "align-items-end";
  return "align-items-center";
}

class Motivation {
  constructor(text, color, backgroundImageUrl, top, side, dom) {
    this.text = text;
    this.color = color;
    this.backgroundImageUrl = backgroundImageUrl;
    this.top = top;
    this.side = side;
    this.dom = dom;
  }
}

let domObj = document.getElementById("mainContainer");

let m1 = new Motivation("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center" , domObj);
let m2 = new Motivation("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);
let m3 = new Motivation("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);

createPaper(m1);
createPaper(m2);
createPaper(m3);
