const quiz = [
  {
    question: '入手可能',
    answer: ['available','conference','equipment','refer'],
    correct: 'available'
  },{
    question: '経費',
    answer: ['profit','launch','entry','expense'],
    correct: 'expense'
  },{
    question: '前の、かつての',
    answer: ['modern','specific','former','agricultural'],
    correct: 'former'
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
  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
     clickHandlar(e);
  });
  handlerIndex++;
}