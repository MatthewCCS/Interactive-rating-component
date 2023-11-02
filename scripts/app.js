
const cardRating = document.getElementById('card-ratingEl')
const cardThanks = document.getElementById('card-thankYouEl')
const submitBtn = document.getElementById('submit-btn')
const ratingOptions = document.getElementsByTagName('LI')
let result = document.getElementById('resultsEl')
let ratingScore = ""

for (let i = 0; i < ratingOptions.length; i++) {
  ratingOptions[i].addEventListener('click', (event) => {
    for (let j = 0; j < ratingOptions.length; j++) {
      ratingOptions[j].classList.remove('active')
    }
    event.target.classList.add('active')
    submitBtn.disabled = false
    return ratingScore = event.target.innerHTML
    
  });
}

submitBtn.addEventListener('click',() => {
  cardRating.style.display = 'none'
  cardThanks.style.display = 'block'
  result.innerText = `You selected ${ratingScore} out of 5`
  
})
