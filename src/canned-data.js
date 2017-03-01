var POP = 'Pop Songs';
var POETRY = 'Poetry';
var NR = 'Nursery Rhymes';
var OTHER = 'Other';

var CANNED_SONGS = [
  {slug: 'buddyholly', artist: 'Weezer', title: 'Buddy Holly', group: POP},
  {slug: 'barbiegirl', artist: 'Aqua', title: 'Barbie Girl', group: POP},
  {slug: 'judas', artist: 'Lady Gaga', title: 'Judas', group: POP},
  {slug: 'plan', artist: 'They Might Be Giants', title: 'No-one Knows My Plan', group: POP},
  {slug: 'spiderwebs', artist: 'No Doubt', title: 'Spiderwebs', group: POP},
  {slug: 'peaches', artist: 'The Presidents of the United States of America', title: 'Peaches', group: POP},
  {slug: 'lovefool', artist: 'The Cardigans', title: 'Lovefool', group: POP},
  {slug: 'sugarsugar', artist: 'The Archies', title: 'Sugar Sugar', group: POP},
  {slug: 'ibleed', artist: 'The Pixies', title: 'I Bleed', group: POP},
  {slug: 'ribs', artist: 'Lorde', title: 'Ribs', group: POP},
  {slug: 'hardestbutton', artist: 'The White Stripes', title: 'The Hardest Button To Button', group: POP},
  {slug: 'cheapthrills', artist: 'Sia', title: 'Cheap Thrills', group: POP},
  {slug: 'anthems', artist: 'Broken Social Scene', title: 'Anthems For A Seventeen-Year Old Girl', group: POP},
  {slug: 'debaser', artist: 'The Pixies', title: 'Debaser', group: POP},
  {slug: 'team', artist: 'Lorde', title: 'Team', group: POP},
  {slug: 'wouldntitbenice', artist: 'The Beach Boys', title: "Wouldn't It Be Nice?", group: POP},
  {slug: 'whatsup', artist: '4 Non-Blondes', title: "What's Up?", group: POP},
  
  {slug: 'test', artist: 'colinmorris', title: 'test', group: 'Test', hidden: true},
  
  {slug: 'praiseyou', artist: 'Fatboy Slim', title: 'Praise You', group: POP},
  {slug: 'badgirls', artist: 'M.I.A.', title: 'Bad Girls', group: POP},
  {slug: 'royals', artist: 'Lorde', title: 'Royals', group: POP},
  {slug: 'whereismymind', artist: 'The Pixies', title: 'Where Is My Mind?', group: POP},
  {slug: 'chandelier', artist: 'Sia', title: 'Chandelier', group: POP},
  {slug: 'sexotheque', artist: 'La Roux', title: 'Sexotheque', group: POP},
  
  {slug: 'badromance', artist: 'Lady Gaga', title: 'Bad Romance', group: POP},
  {slug: 'cgyoomh', artist: 'Kylie Minogue', title: "Can't Get You Out Of My Head", group: POP},
  {slug: 'humps', artist: 'The Black-eyed Peas', title: 'My Humps', group: POP},
  {slug: 'gottobereal', artist: 'Cheryl Lynn', title: 'Got To Be Real', group: POP},
  {slug: 'mysharona', artist: 'The Knack', title: 'My Sharona', group: POP},
  {slug: 'killvmaim', artist: 'Grimes', title: 'Kill v Maim', group: POP},
  {slug: 'whenitrains', artist: 'They Might Be Giants', title: 'When It Rains It Snows', group: POP},
  
  {slug: 'itsraining', artist: '', title: "It's Raining, It's Pouring", group:NR},
  {slug: 'threeblindmice', artist: '', title: "Three Blind Mice", group:NR},
  {slug: 'hotcrossbuns', artist: '', title: "Hot Cross Buns", group:NR},
  {slug: 'frerejacques', artist: '', title: "Frere Jacques", group:NR},
  {slug: 'baabaa', artist: '', title: "Baa Baa Black Sheep", group:NR},
  //{slug: '', artist: '', title: "", group:NR},
  
  {slug: 'theechoinggreen', artist: 'William Blake', title: 'The Echoing Green', group: POETRY},
  {slug: 'thepasture', artist: 'Robert Frost', title: 'The Pasture', group: POETRY},
  {slug: 'thelamb', artist: 'William Blake', title: 'The Lamb', group: POETRY},
  {slug: 'thetyger', artist: 'William Blake', title: 'The Tyger', group: POETRY},
  {slug: 'odetopsyche', artist: 'John Keats', title: "Ode To Psyche", group: POETRY},
  {slug: 'wheniwasoneandtwenty', artist: 'A.E. Housman', title: "When I Was One-and-Twenty", group: POETRY},
  {slug: 'jabberwocky', artist: 'Lewis Carroll', title: "The Jaberwocky", group: POETRY},
  {slug: 'theowlandthepussycat', artist: 'Edward Lear', title: "The Owl And The Pussycat", group: POETRY},
  //{slug: '', artist: '', title: "", group: POETRY},
  
  {slug: 'whenafelon', artist: 'Gilbert & Sullivan', title: "When A Felon's Not Engaged In His Employment", group: OTHER},
  {slug: 'majorgeneral', artist: 'Gilbert & Sullivan', title: "The Major-General's Song", group: OTHER},
  {slug: '12daysofxmas', artist: '', title: "The Twelve Days of Christmas", group: OTHER},
  {slug: 'blowblow', artist: 'William Shakespeare', title: "Blow, Blow, Thou Winter Wind (from As You Like It)", group: OTHER},
  {slug: 'discontent', artist: 'William Shakespeare', title: "Now is the winter of our discontent... (Richard III opening soliloquy)", group: OTHER},
  //{slug: '', artist: '', title: "", group: OTHER},
  
  {slug: 'sidetoside', artist: 'Ariana Grande (feat. Nicki Minaj)', title: 'Side To Side', group:POP},
  {slug: 'millionreasons', artist: 'Lady Gaga', title: 'Million Reasons', group:POP},
  {slug: 'mmmbop', artist: 'Hanson', title: 'Mmmbop', group:POP},
  {slug: 'abc', artist: 'Jackson 5', title: 'ABC', group:POP},
  {slug: 'getthepartystarted', artist: 'Pink', title: 'Get The Party Started', group:POP},
  {slug: 'beatit', artist: 'Michael Jackson', title: 'Beat It', group:POP},
  {slug: 'allyouneedislove', artist: 'The Beatles', title: 'All You Need Is Love', group: POP},
  {slug: 'bad', artist: 'Michael Jackson', title: 'Bad', group: POP},
  {slug: 'blackbeatles', artist: 'Rae Sremmurd ft. Gucci Mane', title: 'Black Beatles', group: POP},
  {slug: 'cantfeelmyface', artist: 'The Weeknd', title: "Can't Feel My Face", group: POP},
  {slug: 'darkhorse', artist: 'Katy Perry ft. Juicy J', title: 'Dark Horse', group: POP},
  {slug: 'dontfuckingtellmewhattodo', artist: 'Robyn', title: "Don't Fucking Tell Me What To Do", group: POP},
  {slug: 'formation', artist: 'Beyonce', title: 'Formation', group: POP},
  {slug: 'hotlinebling', artist: 'Drake', title: "Hotling Bling", group: POP},
  {slug: 'ifeellove', artist: 'Diana Ross', title: "I Feel Love", group: POP},
  {slug: 'leanon', artist: 'Major Lazer ft. M0', title: "Lean On", group: POP},
  {slug: 'rapture', artist: 'Blondie', title: "Rapture", group: POP},
  {slug: 'rumourhasit', artist: 'Adele', title: "Rumour Has It", group: POP},
  {slug: 'singleladies', artist: 'Beyonce', title: "Single Ladies", group: POP},
  {slug: 'stressedout', artist: 'Twenty-One Pilots', title: "Stressed Out", group: POP},
  {slug: 'thriller', artist: 'Michael Jackson', title: "Thriller", group: POP},
  {slug: 'unconventionalgirl', artist: 'Kate Nash', title: "Unconventional Girl", group: POP},
  {slug: 'wannadancewithsomebody', artist: 'Whitney Houston', title: "I Wanna Dance With Somebody", group: POP},
  //{slug: '', artist: '', title: "", group: POP},
  
  //{slug: '', artist: '', title: ''},
];

export {POP, CANNED_SONGS as default};