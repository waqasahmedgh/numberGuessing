import inquirer from "inquirer";



async function startGame() {
    const secretNumber : number = Math.floor(Math.random()*10 +1);
    
    async function playRound() {
        const answer = await inquirer.prompt({
            type:"number",
            name: "userGuess",
            message: "Write the Guess Number",
            // validate(value:number) {
            //     const valid = !isNaN(value);
            //     return valid || "Please enter Number Only";
            // },
        })

        const userGuess = answer.userGuess;

        if (secretNumber===userGuess){
            console.log(`Congratulation ! your Guess Number ${userGuess} is match with Secret Number ${secretNumber}` );
            return true;
        } else {
            if (userGuess>secretNumber){
                console.log(`Try again! your Guess Number ${userGuess} is greater than Secret Number` );
            }else{
                console.log(`Try again ! your Guess Number ${userGuess} is less than Secret Number` );
            }
        }return false
    }


let isGuessed= false ;
let attempt = 0;

while(!isGuessed){
    attempt++;
    console.log(`Your attempt No is ${attempt}`);
    
    isGuessed = await playRound();
}
console.log(`You have attemped ${attempt} times to Guess the right Number`);

}

startGame();