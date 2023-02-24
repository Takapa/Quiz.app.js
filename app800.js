const quiz = [
  {
    question: '逸話',
    answer: ['fertilizer','collaboration','anecdote','incentive'],
    correct: 'anecdote'
  },{
    question: '取り入れる',
    answer: ['incorporate','lapse','simplify','surpass'],
    correct: 'incorporate'
  },{
    question: '褒める ',
    answer: ['complement','commend','applicable','withstand'],
    correct: 'commend'
  },{
    question: '提唱者',
    answer: ['compromise','malfunction','advocate','credentials'],
    correct: 'advocate'
  },{
    question: '支配的な',
    answer: ['nutritious','fierce','exhausted','dominant'],
    correct: 'dominant'
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