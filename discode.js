//Imports
const Discord = require('discord.js');
const {
  c,
  cpp,
  node,
  python,
  java
} = require('compile-run');
const mariadb = require('mariadb/callback');
const random = require('random');
var burns = ["You're my favorite person besides every other person I've ever met.",
  "No offense, but you make me want to staple my cunt shut.",
  "Did your parents have any children that lived?",
  "I envy people who have never met you.",
  "Maybe if you eat all that makeup you will be beautiful on the inside.",
  "You're kinda like Rapunzel except instead of letting down your hair, you let down everyone in your life.",
  "You're impossible to underestimate.",
  "You're not the dumbest person on the planet, but you sure better hope he doesn't die.",
  "I'll plant a mango tree in your mother's cunt and fuck your sister in its shade.",
  "Those aren't acne scars, those are marks from the coat hanger.",
  "You have more dick in your personality than you do in your pants.",
  "If you were an inanimate object, you'd be a participation trophy.",
  "You look like your father would be disappointed in you if he stayed.",
  "You're not pretty enough to be <em>that</em> dumb.",
  "Your mother fucks for bricks so she can build your sister a whorehouse.",
  "I'm sorry your dad beat you instead of cancer.",
  "You were birthed out your mother's ass because her cunt was too busy.",
  "You're so stupid you couldn't pour piss out of a boot if the directions were written on the heel.",
  "Take my lowest priority and put yourself beneath it.",
  "Such a shame your mother didn't swallow you.",
  "The best part of you ran down your mom's leg.",
  "You couldn't organize a blowjob if you were in a Nevada brothel with a pocket full of hundred-dollar bills.",
  "You are a pizza burn on the roof of the world's mouth.",
  "Does your ass ever get jealous of the shit that comes out of your mouth?",
  "People like you are the reason God doesn't talk to us anymore.",
  "You're so dense, light bends around you.",
  "I'd love to stay and chat but I'd rather have type-2 diabetes.",
  "You should put a condom on your head, because if you're going to act like a dick you better dress like one, too.",
  "I bet you swim with a T-shirt on.",
  "How the fuck are you the sperm that won?",
  "May your balls turn square and fester at the corners.",
  "I hope your wife brings a date to your funeral.",
  "If you were a potato you'd be a stupid potato.",
  "Your face looks like it was set on fire and put out with chains.",
  "You might want to get a colonoscopy for all that butthurt.",
  "Your mother may have told you that you could be anything you wanted, but a douchebag wasn't what she meant.",
  "You are so ugly that when you were born, the doctor slapped your mother.",
  "You look like two pounds of shit in a one-pound bag.",
  "Ready to fail like your dad's condom?",
  "I'd call you a cunt, but you have neither the warmth or the depth.",
  "If I wanted to commit suicide I'd climb to your ego and jump to your IQ.",
  "You make me wish I had more middle fingers.",
  "If genius skips a generation, your children will be brilliant.",
  "Everyone that has ever said they love you was wrong.",
  "You have the charm and charisma of a burning orphanage.",
  "If there was a single intelligent thought in your head it would have died from loneliness.",
  "I don't have the time or the crayons to explain this to you.",
  "The only difference between you and Hitler is Hitler knew when to kill himself.",
  "You're dumber than I tell people.",
  "I hope you have beautiful children and that they all get cancer.",
  "Your birth certificate is an apology letter from the condom factory.",
  "For years your mother and I wanted kids. Imagine our disappointment when you came along.",
  "Your face is so oily that I'm surprised America hasn't invaded yet.",
  "Your father should've wiped you on the sheets.",
  "If I wanted any shit out of you I'd take my dick out of your ass.",
  "I can explain it to you, but I can't understand it for you.",
  "You're the reason your mom swallows now.",
  "How did you crawl out of the abortion bucket?",
  "If the road were paved with dicks, your mother would walk on her ass.",
  "You are the stone in the shoes of humanity.",
  "You could fuck up a wet dream.",
  "You're not as dumb as you look.",
  "Son, anyone who would fuck you ain't worth fucking.",
  "This is why everyone talks about you as soon as you leave the room.",
  "The smartest thing that ever came out of your mouth was my dick.",
  "You know, people were right about you.",
  "You've got a great body. Too bad there's no workout routine for a face.",
  "If you could suck your own dick then you would finally suck at everything.",
  "I want you to be the pallbearer at my funeral so you can let me down one last time.",
  "Don't make me have to smack the extra chromosome out of you.",
  "You've gotta be two people, because no single person can be that stupid.",
  "If you were any dumber, someone would have to water you twice a week.",
  "You'll never be half the man your mother was.",
  "If you were on fire and I had a cup of my own piss, I'd drink it.",
  "I've forgotten more than you know.",
  "You smell like you wipe back to front.",
  "I could agree with you, but then we'd both be wrong.",
  "Shut your mouth, I can smell your Dad's cock.",
  "You look like something I drew with my left hand.",
  "How do you even masturbate knowing whose dick you're touching?",
  "You are the human embodiment of an eight-dollar haircut.",
  "The only thing that will ever fuck you is life.",
  "You suck dick at fucking pussy.",
  "If you were twice as smart, you'd still be stupid. I can't forget that day.",
  "You look like a bag of mashed-up assholes.",
  "You're a huge bag of tiny cocks.",
  "You're so inbred you're a sandwich.",
  "In a country where anyone can be anything, I will never understand why you chose to be mediocre.",
  "What's a girl like you doing at a nice place like this?",
  "You're about as important as a white crayon.",
  "Was your mother just in the bathroom? Because she forgot to flush your twin.",
  "If my dog had a face like you, I'd paint his ass and teach him to walk backwards.",
  "If your parents were to divorce, would they still be brother and sister?",
  "You look like the kind of person that buys condoms on his way to a family reunion.",
  "People will not only remember your death, they will celebrate it.",
  "You are a shit stain on the underpants of society.",
  "You look like you were poured into your clothes but someone forgot to say when to stop.",
  "You're about as useful as tits on a pigeon.",
  "Why are you playing hard to get when you're so hard to want?",
  "I'd offer you a shit sandwich, but I hear you don't like bread.",
  "Why don't you slip into something more comfortable? Like a coma.",
  "If laughter is the best medicine, your face must be curing the world.",
  "You're so ugly, you scared the crap out of the toilet.",
  "Your family tree must be a cactus because everybody on it is a prick.",
  "No I'm not insulting you, I'm describing you.",
  "It's better to let someone think you are an Idiot than to open your mouth and prove it.",
  "If I had a face like yours, I'd sue my parents.",
  "Your birth certificate is an apology letter from the condom factory.",
  "I guess you prove that even god makes mistakes sometimes.",
  "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
  "You're so fake, Barbie is jealous.",
  "I’m jealous of people that don’t know you!",
  "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you're ugly too.",
  "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
  "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
  "You must have been born on a highway because that's where most accidents happen.",
  "Brains aren't everything. In your case they're nothing.",
  "I don't know what makes you so stupid, but it really works.",
  "I can explain it to you, but I can’t understand it for you.",
  "Roses are red violets are blue, God made me pretty, what happened to you?",
  "Behind every fat woman there is a beautiful woman. No seriously, your in the way.",
  "Calling you an idiot would be an insult to all the stupid people.",
  "You, sir, are an oxygen thief!",
  "Some babies were dropped on their heads but you were clearly thrown at a wall.",
  "Don't like my sarcasm, well I don't like your stupid.",
  "Why don't you go play in traffic.",
  "Please shut your mouth when you’re talking to me.",
  "I'd slap you, but that would be animal abuse.",
  "They say opposites attract. I hope you meet someone who is good-looking, intelligent, and cultured.",
  "Stop trying to be a smart ass, you're just an ass.",
  "The last time I saw something like you, I flushed it.",
  "I'm busy now. Can I ignore you some other time?",
  "You have Diarrhea of the mouth; constipation of the ideas.",
  "If ugly were a crime, you'd get a life sentence.",
  "Your mind is on vacation but your mouth is working overtime.",
  "I can lose weight, but you’ll always be ugly.",
  "Shock me, say something intelligent.",
  "If your gonna be two faced, honey at least make one of them pretty.",
  "Keep rolling your eyes, perhaps you'll find a brain back there.",
  "You are not as bad as people say, you are much, much worse.",
  "I don't know what your problem is, but I'll bet it's hard to pronounce.",
  "You get ten times more girls than me? ten times zero is zero...",
  "There is no vaccine against stupidity.",
  "You're the reason the gene pool needs a lifeguard.",
  "Sure, I've seen people like you before - but I had to pay an admission.",
  "How old are you? - Wait I shouldn't ask, you can't count that high.",
  "Have you been shopping lately? They're selling lives, you should go get one.",
  "You're like Monday mornings, nobody likes you.",
  "Of course I talk like an idiot, how else would you understand me?",
  "All day I thought of you... I was at the zoo.",
  "To make you laugh on Saturday, I need to you joke on Wednesday.",
  "You're so fat, you could sell shade.",
  "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
  "Don't you need a license to be that ugly?",
  "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
  "Your house is so dirty you have to wipe your feet before you go outside.",
  "If you really spoke your mind, you'd be speechless.",
  "Stupidity is not a crime so you are free to go.",
  "You are so old, when you were a kid rainbows were black and white.",
  "If I told you that I have a piece of dirt in my eye, would you move?",
  "You so dumb, you think Cheerios are doughnut seeds.",
  "So, a thought crossed your mind? Must have been a long and lonely journey.",
  "You are so old, your birth-certificate expired.",
  "Every time I'm next to you, I get a fierce desire to be alone.",
  "You're so dumb that you got hit by a parked car.",
  "Keep talking, someday you'll say something intelligent!",
  "You're so fat, you leave footprints in concrete.",
  "How did you get here? Did someone leave your cage open?",
  "Pardon me, but you've obviously mistaken me for someone who gives a damn.",
  "Wipe your mouth, there's still a tiny bit of bullshit around your lips.",
  "Don't you have a terribly empty feeling - in your skull?",
  "As an outsider, what do you think of the human race?",
  "Just because you have one doesn't mean you have to act like one.",
  "We can always tell when you are lying. Your lips move.",
  "Are you always this stupid or is today a special occasion?",
  "I think we all bring something to the table here, but from now on I think you need to bring silence"
];

//Lets make some stuff from these imports
const client = new Discord.Client();
const count = require('word-count')
//code._read = () => {};
//var docker = new Docker();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('with your emotions - (' + burns.length + ')', {
    type: 'PLAYING'
  });
});

client.on('error', console.error);

client.on('message', msg => {
  if (msg.content.startsWith('```c')) {
    generalPromise(c.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```cpp')) {
    generalPromise(cpp.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```node')) {
    generalPromise(node.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```python')) {
    generalPromise(python.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.startsWith('```java')) {
    generalPromise(java.runSource(trimToCode(msg.content)), msg);
  } else if (msg.content.includes('<@510482832628514837>')) {
    var r = -1;
    var m = msg.content.replace('<@510482832628514837>', '');
    if (m != '' && parseInt(m) != 'NaN') {
      r = parseInt(m);
    } else {
      r = random.int(min = 0, max = burns.length);
    }

    var sleep = count(burns[r]) / 70 * 60 * 1000;

    console.log('sleeping for ' + sleep);
    msg.channel.startTyping();
    setTimeout(() => {
      msg.reply("#" + r + ": " + burns[r]);
      msg.channel.stopTyping();
    }, sleep);

  } else if (msg.content.startsWith('```sql')) {

    const conn = mariadb.createConnection({
      host: process.env.DB_IP,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    });

    var m = trimToCode(msg.content);
    conn.query(m, (err, rows) => {

      if (err) msg.reply("Error: " + JSON.stringify(err, null, 2));
      else msg.reply("Result: " + JSON.stringify(rows, null, 2));
      conn.end();
    });
  }
  console.log(msg.content);
});

function generalPromise(p, msg) {
  p.then(result => {
      msg.reply("Here's what came through stderr:\n\n ``` " + result.stderr + " ```\n\nHere's the result of your compilation:\n\n ``` " + result.stdout + " ``` ");
    })
    .catch(err => {
      msg.reply("Something went wrong:\n\n" + err);
    });
}

function trimToCode(s) {
  return (s.replace(/```/g, '').replace(/^.+\n/, ''));
}
//Main

client.login(process.env.DISCORD_KEY);
