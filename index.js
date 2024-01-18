const cardContainer = document.querySelector('.card-container');
const cards = Array.from(cardContainer.querySelectorAll('.card'));


const shuffleButton = document.getElementById('shuffle');

shuffleButton.addEventListener('click', () => {
  cards.forEach((card) => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    cardContainer.insertBefore(card, cardContainer.children[randomIndex]);
  });
});


const sortButton = document.getElementById('sort');


const sortCards = () => {
  cards.sort((a, b) => a.textContent - b.textContent);
  cardContainer.append(...cards); 
};

const c = document.querySelectorAll('.card');


function applyStyles() {
    const screenWidth = window.innerWidth;

    c.forEach((c, index) => {
        if (screenWidth <= 375) {
            
            c.style.background = `linear-gradient(to right, var(--color-${index + 1}) 10%, white 0%, #efefef 100%)`;
        } else {
            
            c.style.background = `var(--color-${index + 1})`;
        }
    });
}


applyStyles();


window.addEventListener('resize', applyStyles);

sortButton.addEventListener('click', sortCards);

/* git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/ToyeshShendeSyngenta/PRACTICE_HTML_CSS.git

git push origin main */

// git push --set-upstream origin master
// git add . 
// git commit -m "second commit"
// git push