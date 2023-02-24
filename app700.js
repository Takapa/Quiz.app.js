const quiz = [
  {
    question: '長期の',
    answer: ['extended','defective','quarterly','affodable'],
    correct: 'extended'
  },{
    question: '認定証',
    answer: ['guidelines','certificate','agenda','assembly'],
    correct: 'certificate'
  },{
    question: '設置する ',
    answer: ['inspect','relocate','expire','install'],
    correct: 'install'
  },{
    question: '評価する',
    answer: ['evaluate','negotiate','relevant','via'],
    correct: 'evaluate'
  },{
    question: '宿泊施設',
    answer: ['refreshment','accommodations','revenue','preference'],
    correct: 'accommodations'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');
const $lastButton = document.getElementsByTagName('last');
let buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
      buttonIndex++;
  }
}

setupQuiz();

//ボタンをクリックしたら正誤判定
const clickHandlar = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了!!あなたの正解数は' + score + '/' + quizLength + 'です')

    window.location.href = 'home.html';

  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
     clickHandlar(e);
  });
  handlerIndex++;
}