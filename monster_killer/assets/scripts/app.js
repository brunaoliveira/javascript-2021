const MAX_ATTACK_VALUE = 10;
const MAX_MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const monsterDamage = dealMonsterDamage(MAX_ATTACK_VALUE);
    const playerDamage = dealPlayerDamage(MAX_MONSTER_ATTACK_VALUE);

    currentMonsterHealth -= monsterDamage;
    currentPlayerHealth -= playerDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('It\'s a draw!');
    }
}

attackBtn.addEventListener('click', attackHandler);