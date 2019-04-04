
// QUOTES

const quotes = [
  {
    "quote": "It's easier to ask forgiveness than it is to get permission.",
    "author": "Grace Hopper",
    "note": ""
  },
  {
    "quote": "We can't solve problems by using the same kind of thinking we used when we created them.",
    "author": "Albert Einstein",
    "note": ""
  },
  {
    "quote": "Do, or do not. There is no \"try\".",
    "author": "Yoda",
    "note": ""
  },
  {
    "quote": "You can't build a reputation on what you're going to do.",
    "author": "Henry Ford",
    "note": ""
  },
  {
    "quote": "If you knew how much work went into it, you would not call it genius.",
    "author": "Michelangelo",
    "note": ""
  },
  {
    "quote": "I hear and I forget. I see and I remember. I do and I understand.",
    "author": "Confucius",
    "note": ""
  },
  {
    "quote": "I want everything we do to be beautiful. I don't give a damn whether the client understands that that's worth anything, or that the client thinks it's worth anything, or whether it is worth anything. It's worth it to me. It's the way I want to live my life. I want to make beautiful things, even if nobody cares.",
    "author": "Saul Bass",
    "note": ""
  },
  {
    "quote": "Learn from the mistakes of others. You can't live long enough to make them all yourself.",
    "author": "Eleanor Roosevelt",
    "note": ""
  },
  {
    "quote": "Engineering is done with numbers. Analysis without numbers is only an opinion.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #1"
  },
  {
    "quote": "To design a spacecraft right takes an infinite amount of effort. This is why it's a good idea to design them to operate when some things are wrong.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #2"
  },
  {
    "quote": "Design is an iterative process. The necessary number of iterations is one more than the number you have currently done. This is true at any point in time.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #3"
  },
  {
    "quote": "Your best design efforts will inevitably wind up being useless in the final design. Learn to live with the disappointment.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #4"
  },
  {
    "quote": "Three points determine a curve. (Miller's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #5"
  },
  {
    "quote": "Everything is linear if plotted log-log with a fat magic marker.  (Mar's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #6"
  },
  {
    "quote": "At the start of any design effort, the person who most wants to be team leader is least likely to be capable of it.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #7"
  },
  {
    "quote": "In nature, the optimum is almost always in the middle somewhere. Distrust assertions that the optimum is at an extreme point.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #8"
  },
  {
    "quote": "Not having all the information you need is never a satisfactory excuse for not starting the analysis.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #9"
  },
  {
    "quote": "When in doubt, estimate. In an emergency, guess. But be sure to go back and clean up the mess when the real numbers come along.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #10"
  },
  {
    "quote": "Sometimes, the fastest way to get to the end is to throw everything out and start over.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #11"
  },
  {
    "quote": "There is never a single right solution. There are always multiple wrong ones, though.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #12"
  },
  {
    "quote": "Design is based on requirements. There's no justification for designing something one bit \"better\" than the requirements dictate.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #13"
  },
  {
    "quote": "\"Better\" is the enemy of \"good\".",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #14"
  },
  {
    "quote": "The ability to improve a design occurs primarily at the interfaces. This is also the prime location for screwing it up. (Shea's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #15"
  },
  {
    "quote": "The previous people who did a similar analysis did not have a direct pipeline to the wisdom of the ages. There is therefore no reason to believe their analysis over yours. There is especially no reason to present their analysis as yours.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #16"
  },
  {
    "quote": "The fact that an analysis appears in print has no relationship to the likelihood of its being correct.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #17"
  },
  {
    "quote": "Past experience is excellent for providing a reality check. Too much reality can doom an otherwise worthwhile design, though.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #18"
  },
  {
    "quote": "The odds are greatly against you being immensely smarter than everyone else in the field. If your analysis says your terminal velocity is twice the speed of light, you may have invented warp drive, but the chances are a lot better that you've screwed up.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #19"
  },
  {
    "quote": "A bad design with a good presentation is doomed eventually. A good design with a bad presentation is doomed immediately.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #20"
  },
  {
    "quote": "Half of everything you hear in a classroom is crap. Education is figuring out which half is which. (Larrabee's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #21"
  },
  {
    "quote": "When in doubt, document. (Documentation requirements will reach a maximum shortly after the termination of a program.)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #22"
  },
  {
    "quote": "The schedule you develop will seem like a complete work of fiction up until the time your customer fires you for not meeting it.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #23"
  },
  {
    "quote": "It's called a \"Work Breakdown Structure\" because the Work remaining will grow until you have a Breakdown, unless you enforce some Structure on it.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #24"
  },
  {
    "quote": "Following a testing failure, it's always possible to refine the analysis to show that you really had negative margins all along. (Bowden's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #25"
  },
  {
    "quote": "Don't do nuthin' dumb. (Montemerlo's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #26"
  },
  {
    "quote": "Schedules only move in one direction. (Varsi's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #27"
  },
  {
    "quote": "There ain't no such thing as a free launch. (Ranger's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #28"
  },
  {
    "quote": "To get an accurate estimate of final program requirements, multiply the initial time estimates by pi, and slide the decimal point on the cost estimates one place to the right. (von Tiesenhausen's Law of Program Management)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #29"
  },
  {
    "quote": "If you want to have a maximum effect on the design of a new engineering system, learn to draw. Engineers always wind up designing the vehicle to look like the initial artist's concept. (von Tiesenhausen's Law of Engineering Design)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #30"
  },
  {
    "quote": "You can't get to the moon by climbing successively taller trees. (Mo's Law of Evolutionary Development)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #31"
  },
  {
    "quote": "When the hardware is working perfectly, the really important visitors don't show up. (Atkin's Law of Demonstrations)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #32"
  },
  {
    "quote": "A good plan violently executed now is better than a perfect plan next week. (Patton's Law of Program Planning)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #33"
  },
  {
    "quote": "Do what you can, where you are, with what you have. (Roosevelt's Law of Task Planning)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #34"
  },
  {
    "quote": "A designer knows that he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. (de Saint-Exupery's Law of Design)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #35"
  },
  {
    "quote": "Any run-of-the-mill engineer can design something which is elegant. A good engineer designs systems to be efficient. A great engineer designs them to be effective.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #36"
  },
  {
    "quote": "One key to success in a mission is establishing clear lines of blame. (Henshaw's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #37"
  },
  {
    "quote": "Capabilities drive requirements, regardless of what the systems engineering textbooks say.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #38"
  },
  {
    "quote": "Any exploration program which \"just happens\" to include a new launch vehicle is, de facto, a launch vehicle program.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #39"
  },
  {
    "quote": "The three keys to keeping a new manned space program affordable and on schedule: 1) No new launch vehicles. 2) No new launch vehicles. 3) Whatever you do, don't develop any new launch vehicles.",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #39 (alternate formulation)"
  },
  {
    "quote": "You can't make it better until you make it work. (McBryan's Law)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #35"
  },
  {
    "quote": "Space is a completely unforgiving environment. If you screw up the engineering, somebody dies (and there's no partial credit because most of the analysis was right...)",
    "author": "David Akin",
    "note": "Akin's Laws of Spacecraft Design, #35"
  },
  {
    "quote": "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
    "author": "Albert Einstein",
    "note": ""
  },
  {
    "quote": "Don't cry because it's over, smile because it happened.",
    "author": "Dr. Seuss",
    "note": ""
  },
  {
    "quote": "Be yourself\; everyone else is already taken.",
    "author": "Oscar Wilde",
    "note": ""
  },
  {
    "quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "author": "Bernard M. Baruch",
    "note": ""
  },
  {
    "quote": "You only live once, but if you do it right, once is enough.",
    "author": "Mae West",
    "note": ""
  },
  {
    "quote": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi",
    "note": ""
  },
  {
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost",
    "note": ""
  },
  {
    "quote": "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "author": "J.K. Rowling",
    "note": "Harry Potter and the Goblet of Fire"
  },
  {
    "quote": "Don't walk in front of me, I may not follow. Don't walk behind me, I may not lead. Walk beside me, just be my friend.",
    "author": "Albert Camus",
    "note": ""
  },
  {
    "quote": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt",
    "note": ""
  },
  {
    "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "author": "Maya Angelou",
    "note": ""
  },
  {
    "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "author": "Martin Luther King, Jr.",
    "note": "A Testament of Hope: The Essential Writings and Speeches"
  },
  {
    "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author": "Albert Einstein",
    "note": ""
  },
  {
    "quote": "Without music, life would be a mistake.",
    "author": "Friedrich Nietzsche",
    "note": "Twilight of the Idols"
  },
  {
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi",
    "note": ""
  },
  {
    "quote": "Insanity is doing the same thing, over and over again, but expecting different results.",
    "author": "Narcotics Anonymous",
    "note": "Misattributed to Ben Franklin, Mark Twain, and Albert Einstein, among others."
  },
  {
    "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "author": "Ralph Waldo Emerson",
    "note": ""
  },
  {
    "quote": "The most dangerous phrase in the language is, \"We've always done it this way.\"",
    "author": "Grace Hopper",
    "note": "Unsourced variant. Actual quote is: \"Humans are allergic to change. They love to say, \"We've always done it this way.\" I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.\""
  },
  {
    "quote": "I would rather walk with a friend in the dark, than alone in the light.",
    "author": "Helen Keller",
    "note": ""
  },
  {
    "quote": "A late game is only late until it ships. A bad game is bad until the end of time.",
    "author": "Shigeru Miyamoto",
    "note": ""
  },
  {
    "quote": "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    "author": "Samuel Beckett",
    "note": "Not the Quantum Leap guy."
  },
  {
    "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    "author": "Marie Curie",
    "note": ""
  },
  {
    "quote": "If you have knowledge, let others light their candles at it.",
    "author": "Margaret Fuller",
    "note": ""
  },
  {
    "quote": "Calculation and reasoning, like weaving and ploughing, are work, not for human souls, but for clever combinations of iron and wood.",
    "author": "Mary Boole",
    "note": "Wife of that other Boole."
  }
];

export { quotes };
