const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  const name = answer;
  console.log(`Hi ${name}!`);

  rl.question("What's an activity you like doing? ", (answer) => {
    const activity = answer;
    console.log(`${activity} sounds fun!`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      const listensTo = answer;
      console.log('Cool!');

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        const meal = answer;
        console.log('Same!');

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          const food = answer;
          console.log('Yum');

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            const sport = answer;
            console.log('Fun!');

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              const superpower = answer;
              console.log('Great! Give me a second while I write your profile.');
              setTimeout(() => {
                console.log(`${name} loves listening to ${listensTo} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              }, 2000);
              rl.close();
            });
          });
        });
      });
    });
  });
});