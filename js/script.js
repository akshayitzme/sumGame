let score = ansr = parseInt(0);
let qstn= 1;

const startGame = () => {
  setWindow();
  setQstn();
};

const stopGame= ()=>{
    let gContent = document.querySelector("#gContent");
    let stopBtn= document.querySelector('#toggler');
    stopBtn.classList.add('d-none');
    // <img src="/images/pexels-magda-ehlers-1329296.jpg" alt="" id="gImg" class="img-fluid rounded mt-2"></img>
    let replay= `<p class="h4"> Score: ${score}</p> <p>  </p><div class="stop mx-auto mt-1"> <p class="h5">You Played Well 😊 ✌️</p> <button onclick="location.reload();" class="mt-2 btn btn-info">Replay</button> </div> </p>`;
    gContent.innerHTML=replay;
}

const setWindow = () => {
  let gContent = document.querySelector("#gContent");
  let gImg = document.querySelector("#gImg");
  gImg.classList.add("d-none");
  gContent.classList.remove("d-none");
  let toggler = document.querySelector("#toggler");
  toggler.innerHTML = "Stop Game";
  toggler.setAttribute("onclick", "stopGame()");
};

const setQstn = () => {
  let nums = makeQ();
  let q = document.querySelector("#qstn");
  q.innerHTML = `${nums["num1"]} + ${nums["num2"]} = ?`;
  setChoices(nums);
};

const makeQ = () => {
  let nums = {
    num1: Math.floor(Math.random() * 20 + 1),
    num2: Math.floor(Math.random() * 10 + 1),
  };
  return nums;
};

const setChoices = (nums) => {
  let choices = ["#choice1", "#choice2", "#choice3"];
  let ansrBtns= document.getElementsByName('choice');
    // to chnage options randomly
    for(i of ansrBtns){
      i.innerHTML= ansr+Math.floor(Math.random() * 10 + 0);
    }

  ansr = nums["num1"] + nums["num2"];
  let ansrBtn = document.querySelector(
    `${choices[Math.floor(Math.random() * 3 + 0)]}`
  );
  ansrBtn.innerHTML = ansr;
//   console.log(ansr);
};

const selChoice = (x) => {
  let selBtn = document.querySelector(`#choice${x}`);
  let selValue = selBtn.innerHTML;
  if (selValue == ansr) {
    selBtn.classList.remove("bg-warning");
    selBtn.classList.add("btn-success");
    incrScore();
  } else {
    selBtn.classList.remove("bg-warning");
    selBtn.classList.add("btn-danger");
    decrScore();
  }
  ++qstn;     
  qElm = document.querySelector("#q");
  qElm.innerHTML = qstn;
  setTimeout(()=>{ 
    let btns= document.getElementsByName('choice');
    // btns.classList.add('bg-warning'); 
    for (i of btns){
        i.classList.add('bg-warning');
    }
    }, 500);
};

const incrScore = () => {
  ++score;
  let scoreElm = document.querySelector("#score");
  scoreElm.innerHTML = score;
  setTimeout(()=>{
    setQstn()
  },700) ;
};

const decrScore= ()=>{
  if(score == 0){
    
  }else{
    --score;
    let scoreElm = document.querySelector("#score");
    scoreElm.innerHTML = score;
  }
}
const normalizeBtns= ()=>{
    let btns= document.getElementsByName('choice');
    btns.classList.add('bg-warning');
}