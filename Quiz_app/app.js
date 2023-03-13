const correctAnswers = ['B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answers, index) => {
    if(answers === correctAnswers[index])
    score += 25;
  });

  // make submit button scroll to top 
  scrollTo(0,0)

  // show result
  result.classList.remove('d-none');

  let output = 0
  const timer =setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10)

});
