const generateAdviceButton = document.querySelector('.generate_advice_button');
const adviceTitle = document.querySelector('.advice_title');
const adviceDescription = document.querySelector('.advice_description');



async function getAdvice() {
  adviceTitle.innerHTML = 'Carregando...'
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();
  return {
    advice: json.slip.advice,
    id: json.slip.id,
  }
}

generateAdviceButton.addEventListener('click', async function() {
  const advice = await getAdvice();
  adviceTitle.innerHTML = `Advice #${advice.id}`;
  adviceDescription.innerHTML = advice.advice;
})

