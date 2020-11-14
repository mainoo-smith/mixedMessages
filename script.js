const inspiration = [`Everything that is created begins in the mind ~ Fishel, Ruth (1988, p 32) Learning to Live in the Now Health Communications, Inc.Deerfield Beach, Florida`, 
`if physical world can affect mind but mind cannot affect physical world, then its the only one-way interaction known in science !!! ~ Dossey, Larry M.D. (1982, p 206) Space, Time and Medicine. New Science Library, Shambhala, Boston, MA.`,
`Conceptual habits of the conscious mind = greatest bar to man's discovery of himself ~ Anderson, U.S.,(1954, p 15) Three Magic Words . No. Hollywood, CA: Melvin Powers/Wilshire Book Company.`,
`"think whatever makes you truly happy to think" ~ Jampolsky, Gerold G. M.D. (1983) Teach Only Love. NY Bantom Books, p 68`,
`You act out who you think you are. ~ Fishel, Ruth (1988, p 59) Learning to Live in the Now Health Communications, Inc.Deerfield Beach, Florida`];
const joke = [
    `Sometimes when I close my eyes, I can't see. - coolfunnyquotes.com `,
    `Dear Math, please grow up and solve your own problems, I'm tired of solving them for you. - coolfunnyquotes.com `,
    `If we shouldn't eat at night, why is there a light in the fridge? - coolfunnyquotes.com `,
    `Lazy people fact #2347827309018287. You were too lazy to read that number. - coolfunnyquotes.com `,
    `Our phones fall, we panic. Our friends fall, we laugh. - coolfunnyquotes.com `,
    `I just finally discovered what's wrong with my brain: on the left side there is nothing right and on the right side, there is nothing left. - coolfunnyquotes.com `
];
const facts = [
    `“People don't care for facts, unless they can feel those facts in their bones.”
    ― Abhijit Naskar`,
    `“Everybody doesn't need to know everything about you.”
    ― Germany Kent`,
    `“Don't let them blind you. It isn't only a disease. But COVID 19 is the world war 3 started by them.”
    ― Joshua seguya`,
    `“Opinions and ideas are quite different than provable facts.”
    ― Steven Redhead, Life Is A Cocktail`,
    `“Life is nothing but your decisions. No decision is right or wrong. All the decision you take makes you who you are.”
    ― Ismat Ahmed Shaikh, Emaan-The power of change within`,
    `“You can spend your whole life building a wall of facts between you and anything real.”
    ― Chuck Palahniuk`
];

let mixedArray = [];
 mixedArray = mixedArray.concat(inspiration,joke,facts);

const randomizeMessage = (data = []) => {
    let message = data[Math.floor(Math.random() * data.length)];
    console.log(message);
}

randomizeMessage(mixedArray);