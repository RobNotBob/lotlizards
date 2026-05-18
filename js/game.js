
// ═══════════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════════
const SAVE_KEY = 'lotlizard_save';
const PENNANT_COLORS = ['#c0392b','#f1c40f','#2980b9','#27ae60','#e67e22','#8e44ad'];

// ═══════════════════════════════════════════════════════
//  CAR DATA
// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
//  CAR INVENTORY
//  tier 0 = starting lot (late 1980s–early 2000s)
//  tier 1 = Inventory Quality upgrade 1 (2003–2010)
//  tier 2 = Inventory Quality upgrade 2 (2010–2017)
//  veteranOnly = hidden in Rookie mode
//  starterStock = true on 5 cars per tier delivered free on upgrade purchase
//
//  Tags: reliable cheap boring compact suv roomy risky sporty cult quirky
//        fragile truck tough american prestige cool outdoorsy fast loud
//        thirsty luxury comfort practical euro safe offroad fun minivan
//        rare japanese german swedish korean
// ═══════════════════════════════════════════════════════
const CARS = [

  // ══ TIER 0 — STARTING LOT  (late 1980s–early 2000s) ═══════════════

  { id:'corolla94', carType:'economy',   tier:0, name:"1994 Toyota Corolla",
    price:1200,  priceStr:"$1,200",  condition:3, emoji:"🚗",
    tags:['reliable','cheap','boring','compact','japanese'],
    rep:"Bulletproof. Beige. Will outlive everyone you love." },

  { id:'explorer98', carType:'suv',  tier:0, name:"1998 Ford Explorer",
    price:2100,  priceStr:"$2,100",  condition:2, emoji:"🚙",
    tags:['suv','roomy','risky','american'],
    rep:"An adventure vehicle. The adventure is keeping it upright." },

  { id:'civic01', carType:'compact',     tier:0, name:"2001 Honda Civic",
    price:1800,  priceStr:"$1,800",  condition:3, emoji:"🚘",
    tags:['reliable','sporty','cult','compact','japanese'],
    rep:"Mysterious past. The spoiler is load-bearing, apparently." },

  { id:'neon99', carType:'economy',      tier:0, name:"1999 Dodge Neon",
    price:650,   priceStr:"$650",    condition:2, emoji:"🚗",
    tags:['cheap','quirky','fragile','american'],
    rep:"One mismatched door. Calls it character. We agree." },

  { id:'silverado03', carType:'truck', tier:0, name:"2003 Chevy Silverado",
    price:3400,  priceStr:"$3,400",  condition:3, emoji:"🛻",
    tags:['truck','tough','american','roomy'],
    rep:"Dented, loyal, smells like ambition and hay." },

  { id:'bmw97', carType:'luxury',       tier:0, name:"1997 BMW 3 Series",
    price:2800,  priceStr:"$2,800",  condition:2, emoji:"🚘",
    tags:['prestige','fragile','cool','euro','german'],
    rep:"Looks like a million bucks. Costs that in repairs." },

  { id:'outback02', carType:'suv',   tier:0, name:"2002 Subaru Outback",
    price:2200,  priceStr:"$2,200",  condition:3, emoji:"🚙",
    tags:['outdoorsy','reliable','quirky','offroad','japanese'],
    rep:"The scratches are from Moab. Probably." },

  { id:'firebird95', carType:'sports',  tier:0, name:"1995 Pontiac Firebird",
    price:2600,  priceStr:"$2,600",  condition:2, emoji:"🚗",
    tags:['fast','loud','cool','thirsty','american'],
    rep:"V8, loud, thirsty. Basically a rocket with an AM radio." },

  { id:'odyssey99', carType:'minivan',   tier:0, name:"1999 Honda Odyssey",
    price:2400,  priceStr:"$2,400",  condition:3, emoji:"🚐",
    tags:['minivan','practical','reliable','roomy','japanese'],
    rep:"Seating for eight. Hope for six. Crumbs for all of them." },

  { id:'taurus00', carType:'midsize',    tier:0, name:"2000 Ford Taurus",
    price:1400,  priceStr:"$1,400",  condition:3, emoji:"🚗",
    tags:['reliable','boring','practical','american'],
    rep:"The car of airports, rentals, and quiet acceptance." },

  { id:'cherokee96', carType:'suv',  tier:0, name:"1996 Jeep Cherokee XJ",
    price:2900,  priceStr:"$2,900",  condition:2, emoji:"🚙",
    tags:['outdoorsy','offroad','cult','risky','american'],
    rep:"Cult classic. Leaks something, somewhere. Always." },

  { id:'lesabre01', carType:'luxury',   tier:0, name:"2001 Buick LeSabre",
    price:2600,  priceStr:"$2,600",  condition:3, emoji:"🚗",
    tags:['comfort','luxury','american','boring'],
    rep:"The official vehicle of the early bird special. Immaculate interior." },

  { id:'v70_98', carType:'wagon',      tier:0, name:"1998 Volvo V70",
    price:2300,  priceStr:"$2,300",  condition:3, emoji:"🚙",
    tags:['safe','reliable','euro','practical','swedish'],
    rep:"Swedish safety wrapped in wood trim. It has standards." },

  { id:'rx7_93', carType:'sports',      tier:0, veteranOnly:true, name:"1993 Mazda RX-7",
    price:9800,  priceStr:"$9,800",  condition:3, emoji:"🚗",
    tags:['fast','rare','cult','fragile','fun','japanese'],
    rep:"Rotary perfection. Drinks oil like a sailor. Handles like a rumor about physics." },

  { id:'560sl_89', carType:'luxury',    tier:0, veteranOnly:true, name:"1989 Mercedes 560SL",
    price:14500, priceStr:"$14,500", condition:3, emoji:"🚘",
    tags:['prestige','rare','euro','luxury','cool','german'],
    rep:"German grandeur. The previous owner wore a blazer to the grocery store." },

  // ══ TIER 1 — INVENTORY QUALITY UPGRADE 1  (2003–2010) ══════════════

  { id:'camry04', carType:'midsize',     tier:1, name:"2004 Toyota Camry",
    price:4800,  priceStr:"$4,800",  condition:4, emoji:"🚗",
    tags:['reliable','boring','comfort','practical','japanese'],
    rep:"The apex predator of the used car market. Hunts sensibly." },

  { id:'accord05', carType:'midsize',    tier:1, name:"2005 Honda Accord",
    price:5200,  priceStr:"$5,200",  condition:4, emoji:"🚘",
    tags:['reliable','practical','cult','comfort','japanese'],
    rep:"200,000 miles and still smug about it. Comes with a binder of every receipt." },

  { id:'f150_06', carType:'truck',     tier:1, name:"2006 Ford F-150",
    price:7500,  priceStr:"$7,500",  condition:4, emoji:"🛻",
    tags:['truck','tough','american','roomy','practical'],
    rep:"Best-selling vehicle in America for forty years. It has hauled things. It does not discuss this." },

  { id:'wrangler04', carType:'suv',  tier:1, name:"2004 Jeep Wrangler",
    price:8200,  priceStr:"$8,200",  condition:3, emoji:"🚙",
    tags:['outdoorsy','offroad','cult','fun','risky','american'],
    rep:"Leaks when it rains. The owners consider this a feature, not a flaw." },

  { id:'beetle03', carType:'compact',    tier:1, name:"2003 Volkswagen Beetle",
    price:3800,  priceStr:"$3,800",  condition:3, emoji:"🚗",
    tags:['quirky','fun','euro','compact','cool','german'],
    rep:"Round, cheerful, faintly German. The dashboard flower vase is still occupied." },

  { id:'eclipse05', carType:'sports',   tier:1, name:"2005 Mitsubishi Eclipse",
    price:4600,  priceStr:"$4,600",  condition:3, emoji:"🚘",
    tags:['sporty','cool','fast','cult','japanese'],
    rep:"The poster car from everyone's teenage bedroom. Has lived up to that energy." },

  { id:'optima07', carType:'compact',    tier:1, name:"2007 Kia Optima",
    price:3900,  priceStr:"$3,900",  condition:4, emoji:"🚗",
    tags:['reliable','cheap','practical','korean'],
    rep:"Underdog era Kia. People underestimated it. It noticed. It moved on." },

  { id:'deville04', carType:'luxury',   tier:1, name:"2004 Cadillac DeVille",
    price:6200,  priceStr:"$6,200",  condition:3, emoji:"🚘",
    tags:['luxury','comfort','american','prestige','boring'],
    rep:"Church, Costco, and the occasional funeral. All attended with equal solemnity." },

  { id:'s60_06', carType:'luxury',      tier:1, name:"2006 Volvo S60",
    price:5600,  priceStr:"$5,600",  condition:4, emoji:"🚘",
    tags:['safe','reliable','euro','practical','swedish'],
    rep:"Seven airbags and a quiet sense of moral superiority over every other car on the road." },

  { id:'altima03', carType:'midsize',    tier:1, name:"2003 Nissan Altima",
    price:4200,  priceStr:"$4,200",  condition:4, emoji:"🚗",
    tags:['reliable','practical','cheap','boring','japanese'],
    rep:"Not exciting. Not boring. Aggressively adequate in the finest tradition." },

  { id:'sienna05', carType:'minivan',    tier:1, name:"2005 Toyota Sienna",
    price:5800,  priceStr:"$5,800",  condition:4, emoji:"🚐",
    tags:['minivan','reliable','practical','roomy','japanese'],
    rep:"The minivan that does not apologize for being a minivan. Good." },

  { id:'crv08', carType:'suv',       tier:1, name:"2008 Honda CR-V",
    price:7200,  priceStr:"$7,200",  condition:4, emoji:"🚙",
    tags:['suv','reliable','practical','compact','japanese'],
    rep:"The sensible SUV. Every dentist's second car. Beloved for good reason." },

  { id:'g6_06', carType:'midsize',       tier:1, name:"2006 Pontiac G6",
    price:4100,  priceStr:"$4,100",  condition:4, emoji:"🚗",
    tags:['american','practical','boring','reliable'],
    rep:"GM's last stand at relevance. More dignity than it was given credit for." },

  { id:'s2000_03', carType:'sports',    tier:1, veteranOnly:true, name:"2003 Honda S2000",
    price:12800, priceStr:"$12,800", condition:4, emoji:"🚗",
    tags:['fast','fun','rare','cult','sporty','japanese'],
    rep:"High-revving perfection. Rewards skill. Punishes ego. Redlines at 9,000 RPM." },

  { id:'xlr04', carType:'luxury',       tier:1, veteranOnly:true, name:"2004 Cadillac XLR",
    price:18500, priceStr:"$18,500", condition:4, emoji:"🚘",
    tags:['luxury','rare','prestige','american','cool'],
    rep:"Cadillac built a sports car. It appreciates you acknowledging that." },

  // ══ TIER 2 — INVENTORY QUALITY UPGRADE 2  (2010–2017) ══════════════

  { id:'camry12', carType:'midsize',     tier:2, name:"2012 Toyota Camry",
    price:10500, priceStr:"$10,500", condition:5, emoji:"🚗",
    tags:['reliable','comfort','practical','boring','japanese'],
    rep:"Still invisible. Still perfect. Now with a slightly less beige interior." },

  { id:'civic13', carType:'compact',     tier:2, name:"2013 Honda Civic",
    price:9800,  priceStr:"$9,800",  condition:5, emoji:"🚘",
    tags:['reliable','compact','practical','sporty','japanese'],
    rep:"Divisive styling, bulletproof mechanicals. The haters are still driving." },

  { id:'f150_14', carType:'truck',     tier:2, name:"2014 Ford F-150",
    price:16500, priceStr:"$16,500", condition:5, emoji:"🛻",
    tags:['truck','tough','american','practical','roomy'],
    rep:"Aluminum body. Controversial at launch. Vindicated by time. The haters went quiet." },

  { id:'wagoneer11', carType:'suv',  tier:2, name:"2011 Jeep Grand Wagoneer",
    price:14200, priceStr:"$14,200", condition:4, emoji:"🚙",
    tags:['suv','luxury','offroad','roomy','american','thirsty'],
    rep:"Premium SUV with genuine capability and genuine thirst. It knows it drinks premium." },

  { id:'hummer10', carType:'suv',    tier:2, name:"2010 Hummer H2",
    price:21000, priceStr:"$21,000", condition:4, emoji:"🚙",
    tags:['loud','american','tough','thirsty','cool','rare'],
    rep:"Ten miles per gallon. The driver has made peace with this. The planet has not." },

  { id:'c300_13', carType:'luxury',     tier:2, name:"2013 Mercedes C300",
    price:17800, priceStr:"$17,800", condition:5, emoji:"🚘",
    tags:['prestige','luxury','euro','cool','reliable','german'],
    rep:"Entry luxury that knows it is entry luxury and is completely fine with that." },

  { id:'lacrosse11', carType:'luxury',  tier:2, name:"2011 Buick LaCrosse",
    price:11200, priceStr:"$11,200", condition:5, emoji:"🚘",
    tags:['comfort','luxury','american','practical','boring'],
    rep:"Drives like a moving suggestion. The heated seats have a fan club." },

  { id:'forester14', carType:'suv',  tier:2, name:"2014 Subaru Forester",
    price:12400, priceStr:"$12,400", condition:5, emoji:"🚙",
    tags:['outdoorsy','reliable','offroad','practical','japanese'],
    rep:"Three previous owners. All had dogs. All had opinions about national parks." },

  { id:'odyssey12', carType:'minivan',   tier:2, name:"2012 Honda Odyssey",
    price:13600, priceStr:"$13,600", condition:5, emoji:"🚐",
    tags:['minivan','reliable','practical','roomy','japanese'],
    rep:"The evolved form. Built-in vacuum. No further questions needed." },

  { id:'optima15', carType:'midsize',    tier:2, name:"2015 Kia Optima",
    price:11800, priceStr:"$11,800", condition:5, emoji:"🚗",
    tags:['reliable','sporty','practical','korean'],
    rep:"Glow-up era Kia. Stinger energy at Optima money. Deserves more respect." },

  { id:'jetta13', carType:'compact',     tier:2, name:"2013 Volkswagen Jetta",
    price:9600,  priceStr:"$9,600",  condition:5, emoji:"🚗",
    tags:['euro','practical','compact','reliable','german'],
    rep:"European precision at a price that implies one or two compromises." },

  { id:'tacoma16', carType:'truck',    tier:2, name:"2016 Toyota Tacoma",
    price:22500, priceStr:"$22,500", condition:5, emoji:"🛻",
    tags:['truck','reliable','outdoorsy','offroad','japanese'],
    rep:"Holds its value better than your 401k. Depreciates approximately never." },

  { id:'townco14', carType:'minivan',    tier:2, name:"2014 Chrysler Town & Country",
    price:14200, priceStr:"$14,200", condition:5, emoji:"🚐",
    tags:['minivan','practical','american','roomy','comfort'],
    rep:"Stow-n-go seating. Lost cheerios. The full American family experience." },

  { id:'mustang15', carType:'sports',   tier:2, veteranOnly:true, name:"2015 Ford Mustang GT",
    price:24500, priceStr:"$24,500", condition:5, emoji:"🚗",
    tags:['fast','american','loud','cool','sporty'],
    rep:"The pony car. Parking lot magnet. Makes a sound that ends conversations." },

  { id:'m5_12', carType:'luxury',       tier:2, veteranOnly:true, name:"2012 BMW M5",
    price:32000, priceStr:"$32,000", condition:5, emoji:"🚘",
    tags:['prestige','fast','euro','rare','luxury','german'],
    rep:"The greatest sports sedan argument. BMW people will tell you unprompted." },
];

// ═══════════════════════════════════════════════════════
//  CUSTOMER SCRIPTS  — 8 archetypes, 3 rounds each
//  goodTags: car tags that give a fit bonus for this customer
//  badTags:  car tags that hurt fit
// ═══════════════════════════════════════════════════════
const CUSTOMERS = [

  // 1 ── OVERCONFIDENT TEEN
  // Matrix: charm=best, honest=RISKY(-5 to -8), wild=High ±18
  {
    id:'teen', name:"Kevin", archetype:"The Overconfident Teen", emoji:"😎", budget:2500,
    goodTags:['fast','loud','cool'], badTags:['boring','cheap'],
    intro:"A 19-year-old saunters in wearing a NISMO hat. He has not driven a Nissan. He has not driven much of anything.",
    rounds:[
      { customerLine:"Yeah so basically I need something fast. My friend Tyler has a WRX and I need to pull harder than a WRX. What have you got.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Hype his mission",
            text:"\"Man, you walk in here knowing exactly what you want. I respect that. Tyler's gonna regret the WRX.\"",
            moodDelta:+15, statHint:{charm:+3},
            nextLine:"Right? Yeah. Okay so what's the fastest thing you have on this lot." },
          { tag:'honest', cls:'honest-btn', label:"Reality check",
            text:"\"I'm gonna level with you — nothing here beats a WRX on paper. But looking fast and being fast are two very different things.\"",
            moodDelta:-6, statHint:{honesty:+3},
            nextLine:"...Wait so is it slow? It can't be slow. Tyler would never let me live that down." },
          { tag:'hustle', cls:'hustle-btn', label:"Drop the rumor",
            text:"\"The fast one? Previous owner was a track day instructor. Just putting that out there.\"",
            moodDelta:+10, statHint:{closing:+2},
            nextLine:"Wait, seriously? A track instructor? Does it still have anything from that??" },
          { tag:'wild',   cls:'wild-btn',   label:"Question Tyler",
            text:"\"Does Tyler actually know what a WRX is, or did he just like the way it sounded?\"",
            moodDelta:-5, statHint:{charm:+1},
            nextLine:"...He said it's turbo. I think turbo means fast. I'm pretty sure turbo means fast." },
        ]},
      { customerLine:"Okay so I'm looking at this one. My budget is like... my dad said two grand but I think I can push it if I tell him insurance is cheaper.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Sell the moment",
            text:"\"You and this car are the same energy. People are gonna notice when you pull up. Tyler definitely will.\"",
            moodDelta:+18, statHint:{charm:+4},
            nextLine:"Yeah. Yeah exactly. How much is it exactly though." },
          { tag:'honest', cls:'honest-btn', label:"Warn about the real costs",
            text:"\"The price is over your budget, and heads-up — big engines wreck insurance rates. Your dad is gonna see that bill.\"",
            moodDelta:-5, statHint:{honesty:+4},
            nextLine:"Okay but... it looks amazing. Maybe my dad won't check the insurance for like a month." },
          { tag:'hustle', cls:'hustle-btn', label:"Teach kid accounting",
            text:"\"Tell your dad the small one is two grand and bring the difference. Classic move. Nobody invented it but everyone uses it.\"",
            moodDelta:+12, statHint:{closing:+4,honesty:-2},
            nextLine:"That's... a lot of lying. I respect it. I'm absolutely in." },
          { tag:'wild',   cls:'wild-btn',   label:"Text Tyler right now",
            text:"\"Don't negotiate yet. Just text Tyler a picture of you next to it. Right now.\"",
            moodDelta:+8, statHint:{charm:+1},
            nextLine:"He replied with a thumbs up. I can tell he's not happy about the thumbs up." },
        ]},
      { customerLine:"Alright. I want it. Is there any wiggle room? My dad is literally texting me right now.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Make him feel chosen",
            text:"\"I like you Kevin. I'll take a little off the top — but only because you didn't walk in here asking about Kias.\"",
            moodDelta:+20, statHint:{charm:+5}, outcome:'sold', commission:480,
            nextLine:"YOOO. Okay. Yeah. My dad is gonna be so mad. I love this. Deal." },
          { tag:'hustle', cls:'hustle-btn', label:"Invent interest",
            text:"\"Got a guy coming in tomorrow specifically asking about this one. Today's price is today's price, just saying.\"",
            moodDelta:+12, statHint:{closing:+5,honesty:-3}, outcome:'sold', commission:450,
            nextLine:"Is that true? You know what, I don't care. Tyler's waiting. I'm taking it. Deal." },
          { tag:'honest', cls:'honest-btn', label:"Hold firm, state facts",
            text:"\"Price is the price, Kevin. It's a fair number for what it is. I'm not gonna pretend otherwise.\"",
            moodDelta:-8, statHint:{honesty:+5}, outcome:'lowball', commission:220,
            nextLine:"...[long pause] My dad says meet in the middle or walk. I hate that he's right. Fine. Smaller number." },
          { tag:'wild',   cls:'wild-btn',   label:"Offer to call his dad",
            text:"\"Call your dad. Right now. Speaker phone. I'll do the talking.\"",
            moodDelta:0, statHint:{closing:+3}, outcome:'blowup', commission:0,
            nextLine:"I... he picked up and you said 'Sir, your son has excellent taste' and then he hung up. I can't. I gotta go." },
        ]},
    ]
  },

  // 2 ── BARGAIN HUNTER
  // Matrix: honest=best(+20), hustle=RISKY, wild=Low ±8
  {
    id:'bargain', name:"Deb", archetype:"The Bargain Hunter", emoji:"🧾", budget:1000,
    goodTags:['cheap','reliable'], badTags:['prestige','fast'],
    intro:"A woman strides in clutching a manila folder stuffed with printed Kelley Blue Book pages. She has done the math. She has done everyone else's math too.",
    rounds:[
      { customerLine:"I did my research. I know what these cars are worth. I printed the Kelley Blue Book values and I have notes. Organized notes.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Respect the prep",
            text:"\"Deb. Can I call you Deb? You are the most prepared customer I have seen in fifteen years.\"",
            moodDelta:+12, statHint:{charm:+3},
            nextLine:"Don't try to butter me up. I have a spreadsheet. It has macros." },
          { tag:'honest', cls:'honest-btn', label:"Welcome transparency",
            text:"\"Good. That means we skip the dance. Tell me what you think is fair and we'll go from there.\"",
            moodDelta:+18, statHint:{honesty:+5},
            nextLine:"Finally. Someone reasonable. KBB says this neighborhood is running about twelve percent over book. Explain that." },
          { tag:'hustle', cls:'hustle-btn', label:"Challenge the data",
            text:"\"KBB doesn't account for regional demand. In this zip code, these cars have a waiting list.\"",
            moodDelta:-8, statHint:{closing:+2,honesty:-2},
            nextLine:"I checked Craigslist. There are nine of them within ten miles. Sit down." },
          { tag:'wild',   cls:'wild-btn',   label:"Ask to see the spreadsheet",
            text:"\"Can I actually see it? I want to know if my own pricing is embarrassing.\"",
            moodDelta:+8, statHint:{charm:+2,honesty:+2},
            nextLine:"...You know what, I appreciate that. One column is highlighted red for obvious reasons." },
        ]},
      { customerLine:"I want this one. KBB private party value for this condition and mileage is eight hundred and fifty. Your asking price is higher. Explain the difference.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Sell the intangible",
            text:"\"The difference? That's the peace of mind of buying from someone who's seen this car in daylight.\"",
            moodDelta:+5, statHint:{charm:+3},
            nextLine:"That is the vaguest value proposition I have ever heard. I'm almost impressed by it." },
          { tag:'honest', cls:'honest-btn', label:"Give a real number",
            text:"\"Fair point. My holding costs, cleanup, and paperwork are real. I can do a hundred over KBB. That's my honest floor.\"",
            moodDelta:+22, statHint:{honesty:+6},
            nextLine:"...$950. Okay. That I can work with. It better start on the first try." },
          { tag:'hustle', cls:'hustle-btn', label:"Bundle a phantom extra",
            text:"\"The asking price includes our thirty-day lot guarantee. It's in the paperwork.\"",
            moodDelta:-12, statHint:{closing:+2,honesty:-4},
            nextLine:"Can I see the guarantee documentation. Right now. The actual paper." },
          { tag:'wild',   cls:'wild-btn',   label:"Pivot to context",
            text:"\"You're right on the math. But the other one — same mileage, one non-matching door — is six-fifty. Sometimes context helps.\"",
            moodDelta:-5, statHint:{charm:+1},
            nextLine:"I'm not here for context. I'm here for this one, at a fair price. Focus." },
        ]},
      { customerLine:"Alright. I'm prepared to write a check for my number. And before you say anything, I also have a coupon. It's from a Jiffy Lube but the concept applies.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Accept with grace",
            text:"\"Deb, I would be honored to take your Jiffy Lube coupon as a spiritual gesture. Your number. Done.\"",
            moodDelta:+15, statHint:{charm:+5}, outcome:'lowball', commission:195,
            nextLine:"Ha. Good answer. You're not the worst. Don't tell the others I said that." },
          { tag:'honest', cls:'honest-btn', label:"Counter at your floor",
            text:"\"I can come down, but I need fifty above your number. That's my honest floor and I'm not padding it.\"",
            moodDelta:+18, statHint:{honesty:+6}, outcome:'sold', commission:340,
            nextLine:"...Fine. Fifty. The coupon stands as a moral victory, understood?" },
          { tag:'hustle', cls:'hustle-btn', label:"Hold firm on price",
            text:"\"I can't move more than I already have. The market is the market, Deb.\"",
            moodDelta:-20, statHint:{closing:+2,honesty:-2}, outcome:'walkout', commission:0,
            nextLine:"I came here with a printed spreadsheet and a highlighter. Good DAY." },
          { tag:'wild',   cls:'wild-btn',   label:"Honor the coupon literally",
            text:"\"You know what? Your number, minus three-fifty off an oil change. The coupon is real. Done.\"",
            moodDelta:+25, statHint:{charm:+6,closing:+4}, outcome:'sold', commission:290,
            nextLine:"...I have waited my entire adult life for someone to honor one of my coupons. I have more coupons. You will see them." },
        ]},
    ]
  },

  // 3 ── FIRST-TIME BUYER
  // Matrix: honest+charm=best(+15), hustle=RISKY, wild=Medium ±12
  {
    id:'firsttime', name:"Marcus", archetype:"The First-Time Buyer", emoji:"😰", budget:1800,
    goodTags:['reliable','cheap','boring'], badTags:['fast','loud','fragile'],
    intro:"Marcus arrives with his phone in his hand, six browser tabs open, and the haunted look of someone who has read too many Reddit threads about what to look for when buying a used car.",
    rounds:[
      { customerLine:"Okay so, hi. I've never bought a car before. I've done a lot of research. Maybe too much research. Is this going to be okay?",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Calm him down warmly",
            text:"\"Take a breath. You already did the hard part by showing up. The research was smart. Let's put it to work.\"",
            moodDelta:+18, statHint:{charm:+4},
            nextLine:"Okay. Okay good. The Reddit thread said to always ask about the — can I smell the engine?" },
          { tag:'honest', cls:'honest-btn', label:"Walk him through it",
            text:"\"I'll tell you what I actually know about each car — good and bad. No fluff. You came prepared, let's use that.\"",
            moodDelta:+20, statHint:{honesty:+5},
            nextLine:"Oh thank god. My cousin said never trust a salesperson but you seem... nervous yourself?" },
          { tag:'hustle', cls:'hustle-btn', label:"Redirect with confidence",
            text:"\"You've done plenty of research. Now let experience take the wheel. Follow me.\"",
            moodDelta:-5, statHint:{closing:+2},
            nextLine:"I — wait I had a checklist. It has seventeen items. I printed it. Can we use the checklist?" },
          { tag:'wild',   cls:'wild-btn',   label:"Ask how many tabs",
            text:"\"How many browser tabs do you have open right now. Honestly.\"",
            moodDelta:+8, statHint:{charm:+2},
            nextLine:"...Forty-seven. One of them is still loading. I think it's in Portuguese." },
        ]},
      { customerLine:"I think I want this one. It has five stars on every safety rating I found. But I'm scared there's something wrong with it that I can't see.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Build trust gently",
            text:"\"If there was something hidden, I'd be pushing you toward the pricier one instead. The fact that I'm not should tell you something.\"",
            moodDelta:+15, statHint:{charm:+3},
            nextLine:"...That's actually a really reassuring thing to say. Wait, what's wrong with the pricier one?" },
          { tag:'honest', cls:'honest-btn', label:"Tell him the actual condition",
            text:"\"High miles, paint's tired. But these engines run forever with basic maintenance. No hidden surprises — I'd tell you.\"",
            moodDelta:+22, statHint:{honesty:+6},
            nextLine:"You're not supposed to say that right? That it has problems? I really appreciate it. A lot." },
          { tag:'hustle', cls:'hustle-btn', label:"Point to the paperwork",
            text:"\"We run a full inspection on every car. It's all documented. Nothing to worry about.\"",
            moodDelta:+5, statHint:{closing:+3,honesty:-2},
            nextLine:"Can I see the inspection report? Like, the actual report? Is it digital or paper?" },
          { tag:'wild',   cls:'wild-btn',   label:"Offer to go right now",
            text:"\"Stop reading. Keys are in it. Let's drive it right now and you tell me what you feel.\"",
            moodDelta:-8, statHint:{charm:+1},
            nextLine:"I haven't finished item seven on my checklist. Item seven is 'listen for clicking sounds' and I don't know what that means yet." },
        ]},
      { customerLine:"Okay. I want it. I've decided. I'm going to do this and I feel like I might pass out a little.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Congratulate him",
            text:"\"That's the right call. First car is a big deal. You did your homework and it paid off. Congrats, Marcus.\"",
            moodDelta:+20, statHint:{charm:+5}, outcome:'sold', commission:360,
            nextLine:"Oh wow. Thank you. I'm going to go sit in it for a minute if that's okay. Is that weird? I just want to sit in it." },
          { tag:'honest', cls:'honest-btn', label:"Confirm and reassure",
            text:"\"Good car, good price, good decision. That's all there is to it. It'll treat you well.\"",
            moodDelta:+18, statHint:{honesty:+5}, outcome:'sold', commission:320,
            nextLine:"Can I keep the printout? I want to keep the printout. I did a lot of work on that printout." },
          { tag:'wild',   cls:'wild-btn',   label:"Tell him to call his mom",
            text:"\"Before you sign, call your mom. Not because you have to. Because you'll want to tell her.\"",
            moodDelta:+12, statHint:{charm:+6,honesty:+3}, outcome:'lowball', commission:240,
            nextLine:"...[long pause] She cried a little. Then said to negotiate harder. She always does this." },
          { tag:'hustle', cls:'hustle-btn', label:"Add a warranty pitch",
            text:"\"Excellent choice. And for just a little more I can add our lot protection package — real peace of mind.\"",
            moodDelta:-15, statHint:{closing:+3,honesty:-3}, outcome:'walkout', commission:0,
            nextLine:"I... I need to go back and read more. This is too much. I'll come back. I might come back. Don't sell it." },
        ]},
    ]
  },

  // 4 ── STATUS CHASER
  // Matrix: charm+hustle=best, honest=RISKY(-10), wild=High ±18
  {
    id:'status', name:"Preston", archetype:"The Status Chaser", emoji:"🥂", budget:3000,
    goodTags:['prestige','cool'], badTags:['boring','cheap','fragile'],
    intro:"Preston arrives in sunglasses he did not remove indoors. He is not buying a car. He is buying a story he can tell at a dinner party.",
    rounds:[
      { customerLine:"I'm looking for something with a narrative. Something I can talk about. My therapist says I attach meaning to objects. She's right, obviously.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Speak his language",
            text:"\"Every car on this lot has a story. The question is which one fits the chapter you're currently in.\"",
            moodDelta:+20, statHint:{charm:+5},
            nextLine:"Oh that's good. That's actually very good. What chapter do you think I'm in right now?" },
          { tag:'honest', cls:'honest-btn', label:"Redirect to practicalities",
            text:"\"With respect, the car just needs to run. The narrative is whatever you make of it.\"",
            moodDelta:-5, statHint:{honesty:+3},
            nextLine:"That's a very... utilitarian perspective. I'm not sure we're going to be compatible." },
          { tag:'hustle', cls:'hustle-btn', label:"Lead with prestige",
            text:"\"I have something that practically arrived with a backstory attached. Follow me.\"",
            moodDelta:+15, statHint:{closing:+4},
            nextLine:"Oh, mysterious. I like mysterious. Is it European?" },
          { tag:'wild',   cls:'wild-btn',   label:"Ask about the therapist",
            text:"\"What does your therapist drive? Because that might be the real data point here.\"",
            moodDelta:+8, statHint:{charm:+3},
            nextLine:"A Volvo. Which tracks. She's very grounded. I resent it sometimes." },
        ]},
      { customerLine:"Tell me about this one. I know nothing about cars but I need to sound like I do at Geoff's dinner next Friday. Geoff has a Porsche, which is incredibly annoying.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Feed the dinner party story",
            text:"\"This is a turning-point car. The last of its kind before the category got complicated. Connoisseurs know.\"",
            moodDelta:+22, statHint:{charm:+5},
            nextLine:"'The last of its kind before it got complicated.' Say that again slowly. I'm memorizing it for Friday." },
          { tag:'honest', cls:'honest-btn', label:"Warn about the maintenance",
            text:"\"Looks the part, but cars like this carry real maintenance costs. You need to factor that in before you commit.\"",
            moodDelta:-10, statHint:{honesty:+6},
            nextLine:"How much are we talking. Ballpark. In terms of emotional damage." },
          { tag:'hustle', cls:'hustle-btn', label:"Name-drop the engineering",
            text:"\"Rear-wheel drive, the right displacement, legendary handling. You'll feel it the moment you leave the lot.\"",
            moodDelta:+12, statHint:{closing:+4},
            nextLine:"I don't know what any of that means but it sounded incredible. Say the displacement part again." },
          { tag:'wild',   cls:'wild-btn',   label:"Suggest out-classing Geoff entirely",
            text:"\"Forget matching Geoff. The right car shows up to his dinner party like it doesn't care about dinner parties.\"",
            moodDelta:+10, statHint:{charm:+3},
            nextLine:"...That's insane. That is genuinely insane. I need to hear more of this immediately." },
        ]},
      { customerLine:"I'll take it. Is there anything else I should know? For the story, I mean. Geoff needs to feel this.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Send him off with a line",
            text:"\"Tell Geoff you bought it from a guy who didn't ask questions. That's usually the best part of any story.\"",
            moodDelta:+18, statHint:{charm:+5}, outcome:'sold', commission:560,
            nextLine:"Perfect. That's the whole thing right there. Geoff is going to absolutely hate this. Thank you." },
          { tag:'hustle', cls:'hustle-btn', label:"Upsell the detailing",
            text:"\"For a little extra I'll have it detailed before Friday. Show up clean, show up right. Geoff will notice.\"",
            moodDelta:+10, statHint:{closing:+5}, outcome:'sold', commission:710,
            nextLine:"Yes. Absolutely yes. Geoff's car always looks perfect and I find it insufferable." },
          { tag:'wild',   cls:'wild-btn',   label:"Invent a detail about the past owner",
            text:"\"The previous owner left something in the glovebox. I'm not sure you should ask what it was.\"",
            moodDelta:+5, statHint:{charm:+2}, outcome:'lowball', commission:420,
            nextLine:"...Was it a book? Tell me it was a book. In French. I need it to be a book in French. [leaves to check immediately]" },
          { tag:'honest', cls:'honest-btn', label:"Share an actual flaw",
            text:"\"There's one thing worth knowing — a minor quirk. I'd rather you hear it from me than discover it Friday night.\"",
            moodDelta:-10, statHint:{honesty:+5}, outcome:'walkout', commission:0,
            nextLine:"A quirk. On Friday. In front of Geoff. I... no. I need something I can trust implicitly. I'm going to think about this." },
        ]},
    ]
  },

  // 5 ── OUTDOORSY TYPE
  // Matrix: honest=best(+18), hustle=RISKY, wild=Medium ±12
  {
    id:'outdoorsy', name:"River", archetype:"The Outdoorsy Type", emoji:"🏕️", budget:2500,
    goodTags:['outdoorsy','tough','reliable'], badTags:['prestige','boring'],
    intro:"River arrives in hiking boots and a vest with too many pockets. The vest has seen things. River eyes the lot the way you'd eye a trailhead — looking for the path that isn't paved.",
    rounds:[
      { customerLine:"I need something I can get dirty. Not showroom dirty — actually dirty. I'm doing a route in September and I need to get my gear there.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Speak the outdoor code",
            text:"\"We don't wash the right cars between October and May. The dirt is proof of life. I think you'll find what you're looking for.\"",
            moodDelta:+20, statHint:{charm:+5},
            nextLine:"Okay. Okay I like you already. Show me what you have." },
          { tag:'honest', cls:'honest-btn', label:"Give a straight recommendation",
            text:"\"All-wheel drive, decent clearance, solid reliability — there's one here that fits what you're describing. Let me show you.\"",
            moodDelta:+18, statHint:{honesty:+5},
            nextLine:"The scratches on the quarter panel — those look like trail damage. Am I right about that?" },
          { tag:'hustle', cls:'hustle-btn', label:"Pitch the truck",
            text:"\"You want a truck. It hauls everything and goes anywhere. September is nothing to it.\"",
            moodDelta:+8, statHint:{closing:+3},
            nextLine:"Trucks are a lot. I camp light. What's the ground clearance on the other one?" },
          { tag:'wild',   cls:'wild-btn',   label:"Count the vest pockets",
            text:"\"How many pockets in that vest. I'm genuinely asking before we talk cars.\"",
            moodDelta:+10, statHint:{charm:+3},
            nextLine:"Eleven. Four are hidden. One has an emergency whistle I've never had to use but absolutely will someday." },
        ]},
      { customerLine:"This one looks right. What's the actual clearance? I'm going on roads that aren't really roads.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Lean into its history",
            text:"\"Those scratches? That's not lot damage. The previous owner was committed to finding roads that weren't roads.\"",
            moodDelta:+15, statHint:{charm:+4},
            nextLine:"That is exactly the energy I want in a vehicle. It's already been tested." },
          { tag:'honest', cls:'honest-btn', label:"Give real numbers",
            text:"\"About eight and a half inches of clearance stock. Not a Jeep, but handles gravel roads, fire roads, and packed dirt no problem.\"",
            moodDelta:+20, statHint:{honesty:+5},
            nextLine:"Eight and a half is enough for what I'm doing. And the all-wheel drive is real AWD, not just marketing?" },
          { tag:'hustle', cls:'hustle-btn', label:"Inflate the credentials",
            text:"\"Previous owner did overlanding. I don't know exactly what that means but he seemed very serious about it.\"",
            moodDelta:+5, statHint:{closing:+2,honesty:-2},
            nextLine:"...Overlanding is just camping with better tires. But I respect the spirit of what you're implying." },
          { tag:'wild',   cls:'wild-btn',   label:"Suggest going right now",
            text:"\"There's a fire road two miles up the highway. We take it right now and you get the real answer.\"",
            moodDelta:+12, statHint:{charm:+3,honesty:+2},
            nextLine:"...Are you serious? Because I would absolutely do that. Do you have snacks? I always have snacks." },
        ]},
      { customerLine:"Alright. Your asking price minus three hundred. Is that the deal or is there room? I'm not rich, I just need the car to work.",
        choices:[
          { tag:'honest', cls:'honest-btn', label:"Hold firm honestly",
            text:"\"That's a fair car at an honest price. No games — I'll tell you if it were negotiable, and it nearly is. Meet me halfway.\"",
            moodDelta:+18, statHint:{honesty:+5}, outcome:'sold', commission:440,
            nextLine:"Yeah. I can tell you mean it. Deal. Handshake or are you a hugger? Either is fine with me." },
          { tag:'charm',  cls:'charm-btn',  label:"Throw in trail advice",
            text:"\"Your number, and I'll tell you the tire pressure that works best for the kind of roads you're describing. I've done the route.\"",
            moodDelta:+15, statHint:{charm:+5}, outcome:'sold', commission:400,
            nextLine:"Done. And I'm holding you to the tire pressure. That's real value and you know it." },
          { tag:'wild',   cls:'wild-btn',   label:"Propose a vest trade",
            text:"\"Twenty more off if you leave me one pocket. Any pocket. The hidden ones count double.\"",
            moodDelta:+20, statHint:{charm:+6,closing:+3}, outcome:'lowball', commission:310,
            nextLine:"...[removes pocket square from the hidden compartment] Done. You earned it. It's a hidden one." },
          { tag:'hustle', cls:'hustle-btn', label:"Create a deadline",
            text:"\"I've got someone coming this weekend specifically for this one. Your number holds until Friday.\"",
            moodDelta:-8, statHint:{closing:+3,honesty:-3}, outcome:'walkout', commission:0,
            nextLine:"I don't do deadlines. I do mountains. Goodbye." },
        ]},
    ]
  },

  // 6 ── ALPHA MALE
  // Matrix: hustle+charm=best, honest=RISKY(-8), wild=High ±20
  {
    id:'alpha', name:"Chad", archetype:"The Alpha Male", emoji:"💪", budget:3500,
    goodTags:['fast','loud','truck','american'], badTags:['boring','cheap','quirky'],
    intro:"Chad enters leading with his chest. He is wearing a shirt that says something in all caps. He has already decided he wants the fastest, biggest, loudest thing on the lot, and he wants it to know it's working for him.",
    rounds:[
      { customerLine:"What's your biggest engine. Don't show me sedans. Don't show me hybrids. I need something that sounds like it means business.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Match his energy",
            text:"\"V8 and a truck. Both sound like a tax problem. Follow me.\"",
            moodDelta:+20, statHint:{charm:+4},
            nextLine:"NOW we're talking. Which one is louder. That's the first question." },
          { tag:'honest', cls:'honest-btn', label:"Give him the facts",
            text:"\"The biggest we have is a V8. Not new, but it'll rattle your fillings. That's honest.\"",
            moodDelta:-8, statHint:{honesty:+4},
            nextLine:"Fillings. That sounds like a problem. I like problems. Where is it." },
          { tag:'hustle', cls:'hustle-btn', label:"Let him lead",
            text:"\"Pick a direction. Whichever one draws you first, that's your car.\"",
            moodDelta:+8, statHint:{closing:+3},
            nextLine:"[walks directly toward the loudest-looking thing on the lot] Yeah. This. Obviously this." },
          { tag:'wild',   cls:'wild-btn',   label:"Ask his bench press",
            text:"\"Before we talk cars — what's your bench?\"",
            moodDelta:+15, statHint:{charm:+5},
            nextLine:"315. Raw. Why — does that matter for picking a vehicle?" },
        ]},
      { customerLine:"This one. How fast does it go. Don't give me city MPG — I don't care about city MPG.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Frame it as a statement",
            text:"\"It's not a supercar. It's a statement. There's a difference and you already know which one matters more.\"",
            moodDelta:+18, statHint:{charm:+5},
            nextLine:"A statement. Yes. That is exactly what I need to make. To Dave." },
          { tag:'honest', cls:'honest-btn', label:"Give the real performance data",
            text:"\"It moves. Quick for its age, good exhaust note, reasonable power. I'm not gonna hype what the numbers already say.\"",
            moodDelta:-5, statHint:{honesty:+4},
            nextLine:"Reasonable power. I don't want reasonable. Reasonable is what Dave drives." },
          { tag:'hustle', cls:'hustle-btn', label:"Tell him to just start it",
            text:"\"Get in. Start it. The numbers stop mattering once you hear that engine turn over. Trust me.\"",
            moodDelta:+14, statHint:{closing:+5},
            nextLine:"[thirty seconds later] Okay. Yeah. I need this. This is it." },
          { tag:'wild',   cls:'wild-btn',   label:"Ask who Dave is",
            text:"\"Who's Dave?\"",
            moodDelta:+10, statHint:{charm:+4},
            nextLine:"My coworker. Got a promotion last month. He's been insufferable. This is about Dave. I'm not going to pretend it isn't." },
        ]},
      { customerLine:"Your asking price. Is that firm? I feel like I should negotiate. That's what men do. I've been told that.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Respect the ritual",
            text:"\"I'll come down a hundred. You negotiated, I moved. Everyone goes home with their dignity intact.\"",
            moodDelta:+18, statHint:{charm:+5}, outcome:'sold', commission:500,
            nextLine:"Perfect. That felt correct. Dave is going to absolutely lose his mind. Deal." },
          { tag:'hustle', cls:'hustle-btn', label:"Add the detail instead",
            text:"\"Price holds, but I'll have it waxed before you pick it up. Show up shiny. Dave will notice.\"",
            moodDelta:+15, statHint:{closing:+5}, outcome:'sold', commission:520,
            nextLine:"Waxed. Yes. Dave's thing always looks perfect and it is very annoying. Deal." },
          { tag:'wild',   cls:'wild-btn',   label:"Arm wrestle for it",
            text:"\"You win, I drop the price two hundred. I win, you pay asking. Best of one.\"",
            moodDelta:+5, statHint:{charm:+3}, outcome:'lowball', commission:480,
            nextLine:"[thirty seconds later] I don't know how you did that. Fine. Two hundred off. I need to go to the gym immediately." },
          { tag:'honest', cls:'honest-btn', label:"Tell him it's already fair",
            text:"\"Price is already fair for what it is. I'm not padding it. Nothing to negotiate here.\"",
            moodDelta:-10, statHint:{honesty:+5}, outcome:'walkout', commission:0,
            nextLine:"Nothing to negotiate. Nothing to negotiate. That's... no. I need to feel like I won something. I'm looking elsewhere." },
        ]},
    ]
  },

  // 7 ── KAREN
  // Matrix: honest=best(+15), charm=RISKY, wild=Low ±8
  {
    id:'karen', name:"Brenda", archetype:"The Karen", emoji:"👩‍💼", budget:2000,
    goodTags:['reliable','boring'], badTags:['loud','quirky','fragile'],
    intro:"Brenda arrives already disappointed. She has not yet seen anything wrong, but she will. She came prepared with a list of questions and the expression of someone who has already spoken to several managers this week.",
    rounds:[
      { customerLine:"I need to speak to someone in charge. Are you in charge? Because the last place I went the person wasn't actually in charge and that was a whole situation.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Claim full authority",
            text:"\"I am completely in charge. Owner, operator, and chief decision-maker. The buck stops right here.\"",
            moodDelta:+10, statHint:{charm:+5},
            nextLine:"Good. Because I have a list of questions and I need them answered by the correct person." },
          { tag:'honest', cls:'honest-btn', label:"Be transparent",
            text:"\"It's my lot. I'll answer what I can honestly and tell you when I don't know. That's the deal.\"",
            moodDelta:+15, statHint:{honesty:+4},
            nextLine:"...Fine. That's acceptable. Most places won't admit when they don't know something." },
          { tag:'hustle', cls:'hustle-btn', label:"Redirect immediately",
            text:"\"Absolutely in charge. Now — what kind of car are we finding you today?\"",
            moodDelta:-8, statHint:{closing:+2},
            nextLine:"I'll ask the questions. My needs are specific and I have written them down on this paper." },
          { tag:'wild',   cls:'wild-btn',   label:"Offer to call your manager",
            text:"\"I can get you my manager on the phone right now if you'd prefer.\"",
            moodDelta:-5, statHint:{charm:+1},
            nextLine:"Who is your manager. Specifically." },
        ]},
      { customerLine:"I'm looking at this one. However, I'd like to know why it's priced the way it is when I could potentially find something similar elsewhere.",
        choices:[
          { tag:'charm',  cls:'charm-btn',  label:"Validate her standards",
            text:"\"You clearly know what a good deal looks like, which is exactly why I think this one works for you specifically.\"",
            moodDelta:-8, statHint:{charm:+4},
            nextLine:"...Go on. But I want specifics, not flattery. There are several items on the list." },
          { tag:'honest', cls:'honest-btn', label:"Explain the pricing plainly",
            text:"\"Older car with miles, but these engines run forever. A newer car at this price would be a much bigger gamble.\"",
            moodDelta:+15, statHint:{honesty:+5},
            nextLine:"...That is actually a fair point. I still have other concerns. Several concerns." },
          { tag:'hustle', cls:'hustle-btn', label:"Invite the comparison",
            text:"\"Go get the similar one. Drive it here. We compare on the spot. I'm confident enough to offer that.\"",
            moodDelta:+8, statHint:{closing:+3},
            nextLine:"I might actually do that. That's a bold offer. You had better be correct." },
          { tag:'wild',   cls:'wild-btn',   label:"Ask about the list",
            text:"\"Can I see the list? I want to address all of them in order.\"",
            moodDelta:+10, statHint:{honesty:+3,charm:+2},
            nextLine:"...[long pause] Fine. Item one: paint oxidation on the hood. Item two: I don't like how the trunk sounds." },
        ]},
      { customerLine:"Fine. I'll consider this one. But I want a guarantee. A real one. In writing if possible.",
        choices:[
          { tag:'honest', cls:'honest-btn', label:"Be clear about what you can promise",
            text:"\"I can't promise a year — no one honestly can. But I'll clean it, and you can call me directly if something breaks in the first thirty days.\"",
            moodDelta:+15, statHint:{honesty:+6}, outcome:'sold', commission:360,
            nextLine:"The first thirty days is actually significant. I looked it up. Fine. You've been reasonable. Deal." },
          { tag:'wild',   cls:'wild-btn',   label:"Ask what happened before",
            text:"\"Something went wrong with a car before this, didn't it. Tell me what happened.\"",
            moodDelta:+8, statHint:{charm:+4,honesty:+3}, outcome:'sold', commission:250,
            nextLine:"...[long pause] The last one had a cracked block. I found out three weeks later. I want your cell number and two hundred off. Those are my terms." },
          { tag:'charm',  cls:'charm-btn',  label:"Give the personal guarantee",
            text:"\"Brenda, I personally guarantee that if something goes wrong, you call me first and I'll figure it out. My word.\"",
            moodDelta:-5, statHint:{charm:+5}, outcome:'lowball', commission:200,
            nextLine:"...A verbal guarantee from a car salesman. I want that in writing AND two hundred and fifty off. Don't look at me like that." },
          { tag:'hustle', cls:'hustle-btn', label:"Produce a fake warranty",
            text:"\"We have a lot protection certificate. I'll write one up right now.\"",
            moodDelta:-20, statHint:{closing:+2,honesty:-5}, outcome:'blowup', commission:0,
            nextLine:"I want to see it. Now. [reads it] This is a sticky note. It says 'Lot Guarantee' in ballpoint pen. I am calling someone about this." },
        ]},
    ]
  },

// ── end CUSTOMERS ──
];





// ═══════════════════════════════════════════════════════
//  UPGRADE DATA
//  key:        matches state.upgrades property name
//  maxTier:    3 for standard, 3 for veteran-unlocks
//  cost[]:     cost per tier (index = tier-1)
//  desc[]:     description of each tier
//  next[]:     what the next tier unlocks (shown as incentive)
//  veteranOnly: only visible/purchasable in veteran mode
// ═══════════════════════════════════════════════════════
const UPGRADE_DATA = [
  {
    key:'signage', label:'Signage', maxTier:3,
    cost:[300, 700, 1200],
    desc:[
      'A hand-painted plywood sign. Optimistic.',
      'Proper lit signage. People slow down now.',
      'Jumbotron. Visible from the highway. Possibly from space.'
    ],
    next:[
      'Next: Real signage — attract better walk-ins.',
      'Next: Jumbotron — status customers start showing up.',
      'MAXED — The lot is legendary.'
    ],
    effect: t => t >= 2 ? 'Unlocks status-chaser customers' : t >= 1 ? '+Foot traffic' : ''
  },
  {
    key:'coffee', label:'Coffee Station', maxTier:3,
    cost:[200, 500, 900],
    desc:[
      'A Mr. Coffee from 2003 and some powdered creamer.',
      'Decent drip. Customers linger a little longer.',
      'Full espresso bar. Customers arrive in a good mood.'
    ],
    next:[
      'Next: Real coffee — improves customer arrival mood.',
      'Next: Espresso bar — Wildcard choices land better.',
      'MAXED — The coffee is better than the cars.'
    ],
    effect: t => t >= 2 ? 'Wildcards +5 mood bonus' : t >= 1 ? 'Arrival mood +5' : ''
  },
  {
    key:'inventory', label:'Inventory Quality', maxTier:3,
    cost:[500, 1000, 1800],
    desc:[
      'Whatever rolled in. Condition varies. Wildly.',
      'Screened stock. Less mystery, more reliability.',
      'Certified pre-owned adjacent. Respectable cars.'
    ],
    next:[
      'Next: Screened stock — condition dots more accurate.',
      'Next: Better cars — veteran cars unlock if applicable.',
      'MAXED — The inventory speaks for itself.'
    ],
    effect: t => t >= 2 ? 'Veteran cars available (if Veteran mode)' : t >= 1 ? 'Condition ratings accurate' : ''
  },
  {
    key:'appraisal', label:'Appraisal Tools', maxTier:3,
    cost:[350, 750, 1400],
    desc:[
      'The eyeball method. And vibes.',
      'Basic OBD scanner. You know what to look for.',
      'Full diagnostic suite. No surprises on the buy side.'
    ],
    next:[
      'Next: OBD scanner — see hidden condition issues.',
      'Next: Full diagnostics — essential for buy-side (Phase 7).',
      'MAXED — You know more about these cars than their owners.'
    ],
    effect: t => t >= 2 ? 'Ready for buy-side appraisal (Phase 7)' : t >= 1 ? 'Hidden issues visible' : ''
  },
  {
    key:'aesthetics', label:'Lot Aesthetics', maxTier:3,
    cost:[400, 900, 1600],
    desc:[
      'Dirt, weeds, and one string of Christmas lights.',
      'Gravel, decent lighting, a pressure-washed office.',
      'Paved, landscaped, showroom-adjacent. The dream.'
    ],
    next:[
      'Next: Gravel + lighting — improves reputation gain.',
      'Next: Paved lot — unlocks win condition check.',
      'MAXED — This is actually a real dealership now.'
    ],
    effect: t => t >= 2 ? 'Reputation gains increased' : t >= 1 ? 'Reputation floor raised' : ''
  },
  // ── VETERAN-ONLY UPGRADES ──
  {
    key:'backlot', label:'The Back Lot', maxTier:3, veteranOnly:true,
    cost:[600, 1200, 2000],
    desc:[
      'A mystery car slot. Condition unknown until appraised.',
      'Two mystery slots. High risk, high margin.',
      'Three mystery slots. Now you are basically a car flipper.'
    ],
    next:[
      'Next: +1 mystery car slot.',
      'Next: +2 mystery slots — requires Appraisal Tier 2.',
      'MAXED — The back lot is its own ecosystem.'
    ],
    effect: t => `+${t} mystery inventory slot${t !== 1 ? 's' : ''}`
  },
  {
    key:'reputation_network', label:'Reputation Network', maxTier:3, veteranOnly:true,
    cost:[450, 900, 1600],
    desc:[
      'Word is starting to get around. A little.',
      'Customers arrive having heard good things.',
      'You have a reputation. It precedes you into the room.'
    ],
    next:[
      'Next: Occasional warm leads — higher arrival mood.',
      'Next: Regular referrals — some customers pre-sold.',
      'MAXED — The lot sells itself. Almost.'
    ],
    effect: t => t >= 2 ? 'Referral customers: pre-sold mood' : t >= 1 ? 'Warm leads: +10 arrival mood' : ''
  },
  {
    key:'black_book', label:'The Black Book', maxTier:3, veteranOnly:true,
    cost:[500, 1000, 1800],
    desc:[
      'Enough experience to spot patterns people to recognize patterns.',
      'A behavioral tell surfaces before the conversation starts.',
      'You read rooms like a newspaper. Fast and accurate.'
    ],
    next:[
      'Next: See one behavioral tell before Round 1.',
      'Next: Two tells — narrow down the type faster.',
      'MAXED — You see the whole play before it starts.'
    ],
    effect: t => t >= 2 ? 'Two customer tells revealed' : t >= 1 ? 'One behavioral tell shown' : ''
  },
];

// ═══════════════════════════════════════════════════════
//  GAME STATE

// ═══════════════════════════════════════════════════════
//  GAME STATE
// ═══════════════════════════════════════════════════════
function freshState() {
  return {
    salesmanName: '',
    difficulty: 'rookie',
    day: 1,
    cash: 420,
    reputation: 1,
    stats: { charm:33, honesty:33, closing:33 },
    upgrades: { signage:1, coffee:1, inventory:0, appraisal:0, aesthetics:0 },
    customerOrder: [],
    totalEarned: 0,
    dayDone: false,
    lastResult: null,
    lastStatDeltas: { charm:0, honesty:0, closing:0 },
    perks: { charmer:0, shooter:0, closer:0 },
    perkPointsRaw: 0,
    lotInventory: ['corolla94', 'explorer98', 'civic01', 'neon99', 'silverado03', 'bmw97', 'outback02', 'firebird95'],
    tutorialSeen: false,
    acquisitionCosts: {},  // carId → price paid

  };
}

let state = freshState();

// Dialogue runtime — not saved to localStorage
let dlg = { customer:null, round:0, mood:60, pickedCar:null, statDeltas:{charm:0,honesty:0,closing:0} };
let eodTimers = [];  // tracks pending EOD-related timeouts so they can be cancelled

function scheduleEod(fn, delay) {
  // Cancel any existing EOD timers then schedule a new one
  eodTimers.forEach(t => clearTimeout(t));
  eodTimers = [];
  const t = setTimeout(fn, delay);
  eodTimers.push(t);
  return t;
}

function cancelEodTimers() {
  eodTimers.forEach(t => clearTimeout(t));
  eodTimers = [];
}




// ═══════════════════════════════════════════════════════
//  LOT SCENE RENDERER
//  Reads state.upgrades to determine visual tier.
//  Called from buildLot() on every lot refresh.
//
//  Upgrade effects on scene:
//   aesthetics 0 → dark dirt lot, silhouette cars, weeds
//   aesthetics 1 → gravel, one floodlight, cars get color
//   aesthetics 2 → two floodlights, brighter cars, painted lines
//   aesthetics 3 → paved surface, decorative lights, polished office
//   signage    0 → handmade plywood sign
//   signage    1 → handmade sign (same)
//   signage    2 → proper lit sign panel
//   signage    3 → jumbotron billboard
//   coffee     1 → basic cart visible
//   coffee     2 → proper stand with awning
//   coffee     3 → espresso bar with neon
// ═══════════════════════════════════════════════════════
function drawLotScene() {
  const svg = document.getElementById('lot-svg');
  if (!svg) return;

  const aes  = state.upgrades.aesthetics  || 0;
  const sign = state.upgrades.signage     || 0;
  const cof  = state.upgrades.coffee      || 0;
  const name = (state.salesmanName || 'LARRY').toUpperCase();

  // ── Colour palette driven by aesthetics tier ──
  // Sky / background
  const skyCol   = aes >= 3 ? '#1e1e2a' : aes >= 1 ? '#1e1e1a' : '#1a1a14';
  // Ground surface
  const groundCol = aes >= 3 ? '#2a2a2e' : aes >= 2 ? '#252520' : aes >= 1 ? '#1e1e18' : '#161610';
  // Lot surface (between ground line and bottom)
  const lotCol   = aes >= 3 ? '#28282c' : aes >= 2 ? '#222220' : aes >= 1 ? '#1c1c18' : '#141410';
  // Ground line colour
  const lineCol  = aes >= 2 ? '#4a4a44' : aes >= 1 ? '#363630' : '#2c2c28';
  // Parking line colour and style
  const parkLine = aes >= 2 ? '#5a5a52' : '#2c2c28';
  const parkDash = aes >= 2 ? '' : '4,4';

  // Car body colours — silhouette when dark (aes 0), coloured when lit (aes 1+)
  const lit = aes >= 1;
  const bright = aes >= 2;
  const CAR_COLORS = {
    // aes 0: near-black silhouettes | aes 1: clear colour | aes 2+: vivid with metallic sheen
    corolla:  { body: lit ? (bright ? '#a09878' : '#847a5e') : '#3a3a2e',
                cab:  lit ? (bright ? '#8a8468' : '#6e6652') : '#2e2e24',
                glass:lit ? (bright ? '#3a6a9a' : '#2a5080') : '#1a2a3a' },
    explorer: { body: lit ? (bright ? '#9a6040' : '#7a4a2e') : '#3a2418',
                cab:  lit ? (bright ? '#844e34' : '#643c24') : '#2e1c10',
                glass:lit ? (bright ? '#3a6a9a' : '#2a5080') : '#1a2a3a' },
    civic:    { body: lit ? (bright ? '#3a6ab0' : '#2a509a') : '#161e38',
                cab:  lit ? (bright ? '#2e5898' : '#1e4480') : '#10182e',
                glass:lit ? (bright ? '#4a8ac0' : '#2a6090') : '#1a2a3a' },
    truck:    { body: lit ? (bright ? '#4a7848' : '#366036') : '#182014',
                cab:  lit ? (bright ? '#3e663c' : '#2c502a') : '#12180e',
                glass:lit ? (bright ? '#3a6a9a' : '#2a5080') : '#1a2a3a' },
  };

  // Helper to build SVG string
  let s = '';
  const el = (tag, attrs, inner='') => {
    const a = Object.entries(attrs).map(([k,v]) => `${k}="${v}"`).join(' ');
    return inner ? `<${tag} ${a}>${inner}</${tag}>` : `<${tag} ${a}/>`;
  };

  // ── BACKGROUND ──
  s += el('rect', {width:680, height:140, fill:skyCol});

  // ── GRAVEL TEXTURE (aes 1+) ──
  if (aes >= 1) {
    s += el('rect', {y:140, width:680, height:60, fill:lotCol});
    // Gravel stipple
    const dots = [[20,155],[60,162],[110,158],[200,165],[300,160],[420,157],[530,163],[620,159]];
    dots.forEach(([x,y]) => {
      s += el('circle', {cx:x, cy:y, r:1.5, fill:'#333', opacity:0.5});
    });
  } else {
    s += el('rect', {y:140, width:680, height:60, fill:lotCol});
    // Dirt weeds
    [[476,148,474,138],[478,148,480,137],[500,148,498,139],[10,148,8,139],[540,148,542,137]].forEach(
      ([x1,y1,x2,y2]) => s += el('line', {x1,y1,x2,y2, stroke:'#2a3a1a', 'stroke-width':2})
    );
  }

  // ── PAVED SURFACE (aes 3) ──
  if (aes >= 3) {
    s += el('rect', {y:140, width:680, height:60, fill:'#303034'});
    // Painted lot edge
    s += el('line', {x1:0, y1:148, x2:680, y2:148, stroke:'#f1c40f', 'stroke-width':2});
  } else {
    s += el('line', {x1:0, y1:148, x2:680, y2:148, stroke:lineCol, 'stroke-width':2});
  }

  // ── PARKING LINES ──
  [90,180,270,360,450,540].forEach(x => {
    const attrs = {x1:x, y1:148, x2:x, y2:195, stroke:parkLine, 'stroke-width':1};
    if (parkDash) attrs['stroke-dasharray'] = parkDash;
    s += el('line', attrs);
  });

  // ── PENNANT STRING ──
  const pennantY = 30;
  s += el('line', {x1:0, y1:pennantY, x2:680, y2:pennantY, stroke: aes>=2 ? '#888' : '#555', 'stroke-width':1});
  const pennantColors = ['#c0392b','#f1c40f','#2980b9','#27ae60','#e67e22'];
  [40,80,120,160,200,240,280,320,360,400,440,480,520].forEach((x,i) => {
    s += `<polygon points="${x},${pennantY} ${x+10},${pennantY} ${x+5},${pennantY+15}" fill="${pennantColors[i%5]}"/>`;
  });

  // ── OFFICE BUILDING ──
  const officeWall = aes >= 3 ? '#3a3a42' : aes >= 2 ? '#323230' : '#2c2c28';
  const officeTrim = aes >= 2 ? '#4a4a44' : '#3d3d38';
  s += el('rect', {x:532, y:60, width:148, height:80, fill:officeWall, stroke:officeTrim, 'stroke-width':1});
  // Windows — lit yellow when aes 1+
  const winFill = aes >= 1 ? '#c8a44a' : '#1a1a18';
  const winOpacity = aes >= 2 ? '0.9' : aes >= 1 ? '0.7' : '1';
  s += el('rect', {x:546, y:72, width:28, height:20, fill:winFill, stroke:officeTrim, 'stroke-width':1, opacity:winOpacity});
  s += el('rect', {x:582, y:72, width:28, height:20, fill:winFill, stroke:officeTrim, 'stroke-width':1, opacity:winOpacity});
  s += el('rect', {x:652, y:92, width:22, height:48, fill: aes>=2 ? '#2a2a28' : '#232320', stroke:officeTrim, 'stroke-width':1});

  // ── SIGNAGE ──
  if (sign >= 3) {
    // Jumbotron billboard — wider to match building
    s += el('rect', {x:520, y:6, width:160, height:50, fill:'#111', stroke:'#f1c40f', 'stroke-width':2, rx:2});
    s += el('rect', {x:523, y:9, width:154, height:44, fill:'#1a1a28', rx:1});
    s += el('text', {x:600, y:28, 'text-anchor':'middle', 'font-family':"'Oswald',sans-serif", 'font-size':12, fill:'#f1c40f', 'font-weight':'bold', 'letter-spacing':2}, `${name}'S MOTORS`);
    s += el('text', {x:600, y:44, 'text-anchor':'middle', 'font-family':"'Courier Prime',monospace", 'font-size':8, fill:'#e74c3c'}, '★ DEALS CLOSING FAST ★');
    // Pole
    s += el('line', {x1:600, y1:56, x2:600, y2:60, stroke:'#555', 'stroke-width':4});
  } else if (sign >= 2) {
    // Proper illuminated sign panel — spans full office width
    s += el('rect', {x:530, y:48, width:152, height:22, fill:'#c0392b', rx:2});
    s += el('rect', {x:532, y:50, width:148, height:18, fill:'#e74c3c', rx:1, opacity:'0.3'});
    s += el('text', {x:606, y:63, 'text-anchor':'middle', 'font-family':"'Oswald',sans-serif", 'font-size':11, fill:'#f5f0e0', 'font-weight':'bold', 'letter-spacing':2}, `${name}'S MOTORS`);
  } else {
    // Plywood sign on pole
    s += el('line', {x1:30, y1:148, x2:30, y2:45, stroke:'#3d3d38', 'stroke-width':3});
    s += el('rect', {x:8, y:45, width:90, height:36, fill:'#d4ac0d', rx:2});
    s += el('text', {x:53, y:58, 'text-anchor':'middle', 'font-family':"'Courier Prime',monospace", 'font-size':8, fill:'#1a1a18', 'font-weight':'bold'}, 'BIG DEALS');
    s += el('text', {x:53, y:70, 'text-anchor':'middle', 'font-family':"'Courier Prime',monospace", 'font-size':8, fill:'#1a1a18', 'font-weight':'bold'}, 'TODAY ONLY!');
  }

  // ── FLOODLIGHTS (aes 1+) ──
  if (aes >= 1) {
    // Left pole + light
    s += el('line', {x1:120, y1:148, x2:120, y2:50, stroke:'#555', 'stroke-width':3});
    s += el('rect', {x:112, y:46, width:16, height:6, fill:'#888', rx:1});
    s += el('ellipse', {cx:120, cy:46, rx:30, ry:20, fill:'rgba(255,240,180,0.07)'});
    if (aes >= 2) {
      // Right pole + light
      s += el('line', {x1:420, y1:148, x2:420, y2:50, stroke:'#555', 'stroke-width':3});
      s += el('rect', {x:412, y:46, width:16, height:6, fill:'#888', rx:1});
      s += el('ellipse', {cx:420, cy:46, rx:30, ry:20, fill:'rgba(255,240,180,0.07)'});
    }
    if (aes >= 3) {
      // Decorative string lights along roof edge
      [540,558,576,594,612,630,648,666].forEach(x => {
        s += el('circle', {cx:x, cy:61, r:2, fill:'#f1c40f', opacity:'0.9'});
      });
      // Third pole center
      s += el('line', {x1:270, y1:148, x2:270, y2:50, stroke:'#555', 'stroke-width':3});
      s += el('rect', {x:262, y:46, width:16, height:6, fill:'#888', rx:1});
      s += el('ellipse', {cx:270, cy:46, rx:30, ry:20, fill:'rgba(255,240,180,0.08)'});
    }
  }

  // ── CARS ──
  // Car 1: Corolla (sedan) at x=50
  const c = CAR_COLORS;
  s += `<g transform="translate(50,110)">
    <rect x="0" y="20" width="72" height="22" fill="${c.corolla.body}" rx="2"/>
    <rect x="10" y="8" width="52" height="22" fill="${c.corolla.cab}" rx="4"/>
    <rect x="14" y="11" width="20" height="14" fill="${c.corolla.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <rect x="38" y="11" width="20" height="14" fill="${c.corolla.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <circle cx="14" cy="42" r="8" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="58" cy="42" r="8" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="14" cy="42" r="4" fill="${lit?'#444':'#333'}"/>
    <circle cx="58" cy="42" r="4" fill="${lit?'#444':'#333'}"/>
    ${bright ? '<rect x="0" y="26" width="6" height="4" fill="#d4ac0d" rx="1"/><rect x="66" y="26" width="6" height="4" fill="#c0392b" rx="1"/>' : ''}
  </g>`;

  // Car 2: Explorer (SUV) at x=145
  s += `<g transform="translate(145,105)">
    <rect x="0" y="18" width="82" height="28" fill="${c.explorer.body}" rx="2"/>
    <rect x="8" y="6" width="66" height="24" fill="${c.explorer.cab}" rx="3"/>
    <rect x="12" y="9" width="24" height="16" fill="${c.explorer.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <rect x="46" y="9" width="24" height="16" fill="${c.explorer.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <circle cx="16" cy="46" r="9" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="66" cy="46" r="9" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="16" cy="46" r="5" fill="${lit?'#444':'#333'}"/>
    <circle cx="66" cy="46" r="5" fill="${lit?'#444':'#333'}"/>
    ${bright ? '<rect x="0" y="24" width="6" height="5" fill="#d4ac0d" rx="1"/><rect x="76" y="24" width="6" height="5" fill="#c0392b" rx="1"/>' : ''}
  </g>`;

  // Car 3: Civic (compact with spoiler) at x=248
  s += `<g transform="translate(248,112)">
    <rect x="0" y="18" width="68" height="22" fill="${c.civic.body}" rx="2"/>
    <rect x="8" y="6" width="50" height="20" fill="${c.civic.cab}" rx="4"/>
    <rect x="52" y="3" width="20" height="3" fill="${c.civic.cab}" rx="1"/>
    <line x1="56" y1="6" x2="56" y2="10" stroke="${c.civic.cab}" stroke-width="2"/>
    <rect x="12" y="9" width="18" height="12" fill="${c.civic.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <rect x="36" y="9" width="18" height="12" fill="${c.civic.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <circle cx="13" cy="40" r="7" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="55" cy="40" r="7" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="13" cy="40" r="3" fill="${lit?'#444':'#333'}"/>
    <circle cx="55" cy="40" r="3" fill="${lit?'#444':'#333'}"/>
  </g>`;

  // Car 4: Silverado (truck) at x=335
  s += `<g transform="translate(335,103)">
    <rect x="0" y="20" width="90" height="30" fill="${c.truck.body}" rx="2"/>
    <rect x="4" y="8" width="38" height="24" fill="${c.truck.cab}" rx="3"/>
    <rect x="8" y="11" width="14" height="16" fill="${c.truck.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <rect x="24" y="11" width="14" height="16" fill="${c.truck.glass}" rx="1" opacity="${lit?'0.9':'0.8'}"/>
    <circle cx="16" cy="50" r="9" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="74" cy="50" r="9" fill="#1a1a18" stroke="${lit?'#666':'#555'}" stroke-width="2"/>
    <circle cx="16" cy="50" r="5" fill="${lit?'#444':'#333'}"/>
    <circle cx="74" cy="50" r="5" fill="${lit?'#444':'#333'}"/>
    ${bright ? '<rect x="0" y="28" width="6" height="5" fill="#d4ac0d" rx="1"/><rect x="84" y="28" width="6" height="5" fill="#c0392b" rx="1"/>' : ''}
  </g>`;

  // ── COFFEE STATION ──
  if (cof >= 3) {
    // Espresso bar with neon sign
    s += el('rect', {x:486, y:108, width:52, height:40, fill:'#3a2a1a', rx:2});
    s += el('rect', {x:484, y:100, width:56, height:12, fill:'#8B4513', rx:2});
    // Neon ESPRESSO sign
    s += el('rect', {x:488, y:94, width:48, height:8, fill:'rgba(231,76,60,0.15)', rx:2});
    s += el('text', {x:512, y:101, 'text-anchor':'middle', 'font-family':"'Oswald',sans-serif", 'font-size':6, fill:'#e74c3c', 'font-weight':'bold'}, 'ESPRESSO');
    s += el('rect', {x:500, y:118, width:12, height:20, fill:'#2c1a0a', rx:1});
    // Cups on counter
    s += el('rect', {x:494, y:116, width:6, height:8, fill:'#f5f0e0', rx:1, opacity:'0.8'});
  } else if (cof >= 2) {
    // Proper stand with awning
    s += el('rect', {x:490, y:110, width:44, height:38, fill:'#3d2a1a', rx:2});
    s += el('rect', {x:488, y:102, width:48, height:12, fill:'#c0392b', rx:2});
    s += el('text', {x:512, y:112, 'text-anchor':'middle', 'font-family':"'Courier Prime',monospace", 'font-size':7, fill:'#f5f0e0', 'font-weight':'bold'}, 'COFFEE');
    s += el('rect', {x:502, y:120, width:14, height:18, fill:'#2c1a0a', rx:1});
    s += el('rect', {x:492, y:118, width:8, height:10, fill:'#f5f0e0', rx:1, opacity:'0.7'});
  } else {
    // Basic cart
    s += el('rect', {x:492, y:110, width:40, height:38, fill:'#3d2a1a', rx:2});
    s += el('rect', {x:496, y:104, width:32, height:10, fill:'#c0392b'});
    s += el('text', {x:512, y:112, 'text-anchor':'middle', 'font-family':"'Courier Prime',monospace", 'font-size':6, fill:'#f5f0e0'}, 'COFFEE');
    s += el('rect', {x:505, y:120, width:14, height:18, fill:'#2c1a0a', rx:1});
  }

  svg.innerHTML = s;
}

// ═══════════════════════════════════════════════════════
//  WEB AUDIO ENGINE
//  All sounds synthesized — no files, works offline.
//  AudioContext initializes on first user gesture.
// ═══════════════════════════════════════════════════════
let audioCtx = null;
let masterGain = null;
let ambientOsc = null;
let muted = false;

function initAudio() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.6;
    masterGain.connect(audioCtx.destination);
    startAmbient();
  } catch(e) { audioCtx = null; }
}

function toggleMute() {
  if (!audioCtx) return;
  muted = !muted;
  masterGain.gain.setTargetAtTime(muted ? 0 : 0.6, audioCtx.currentTime, 0.1);
  const btn = document.getElementById('mute-btn');
  if (btn) btn.textContent = muted ? '🔇' : '🔊';
}

// ── Ambient lot hum ──
// Very quiet low-frequency tone — barely perceptible, like an idling engine far away
function startAmbient() {
  if (!audioCtx || ambientOsc) return;
  ambientOsc = audioCtx.createOscillator();
  const ambGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 120;
  ambientOsc.type = 'sine';
  ambientOsc.frequency.value = 55;
  ambGain.gain.value = 0.03;
  ambientOsc.connect(filter);
  filter.connect(ambGain);
  ambGain.connect(masterGain);
  ambientOsc.start();
}

// ── Helper: create a gain node that fades out ──
function makeDecayGain(startVol, duration) {
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(startVol, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  g.connect(masterGain);
  return g;
}

// ── SOLD: cash register ding ──
// Two-tone: a sharp attack sine at 1200Hz then a second at 900Hz
function playSoundSold() {
  if (!audioCtx || muted) return;
  [{ freq:1200, delay:0, vol:0.25 }, { freq:900, delay:0.12, vol:0.2 }].forEach(({ freq, delay, vol }) => {
    const osc = audioCtx.createOscillator();
    const g   = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + 0.7);
    osc.connect(g); g.connect(masterGain);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + 0.7);
  });
}

// ── LOWBALL: muted two-tone, slightly flat ──
function playSoundLowball() {
  if (!audioCtx || muted) return;
  [{ freq:800, delay:0, vol:0.15 }, { freq:620, delay:0.15, vol:0.12 }].forEach(({ freq, delay, vol }) => {
    const osc = audioCtx.createOscillator();
    const g   = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + 0.5);
    osc.connect(g); g.connect(masterGain);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + 0.5);
  });
}

// ── WALKOUT: door close thud ──
// Filtered noise burst at low frequency
function playSoundWalkout() {
  if (!audioCtx || muted) return;
  const buf  = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.3, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src    = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const g      = audioCtx.createGain();
  filter.type = 'lowpass'; filter.frequency.value = 180;
  src.buffer = buf;
  g.gain.setValueAtTime(0.3, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
  src.connect(filter); filter.connect(g); g.connect(masterGain);
  src.start();
}

// ── BLOWUP: descending buzzer ──
function playSoundBlowup() {
  if (!audioCtx || muted) return;
  const osc = audioCtx.createOscillator();
  const g   = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(320, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.5);
  g.gain.setValueAtTime(0.18, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
  osc.connect(g); g.connect(masterGain);
  osc.start(); osc.stop(audioCtx.currentTime + 0.5);
}

// ── UPGRADE purchased: satisfying click + rising tone ──
function playSoundUpgrade() {
  if (!audioCtx || muted) return;
  // Click
  const buf  = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * 0.01), audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = audioCtx.createBufferSource();
  const gC  = audioCtx.createGain();
  gC.gain.value = 0.15;
  src.buffer = buf; src.connect(gC); gC.connect(masterGain); src.start();
  // Rising tone
  const osc = audioCtx.createOscillator();
  const g   = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, audioCtx.currentTime + 0.02);
  osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.3);
  g.gain.setValueAtTime(0.15, audioCtx.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
  osc.connect(g); g.connect(masterGain);
  osc.start(audioCtx.currentTime + 0.02);
  osc.stop(audioCtx.currentTime + 0.4);
}

// ── PERK unlocked: three ascending shimmer tones ──
function playSoundPerk() {
  if (!audioCtx || muted) return;
  [{ freq:600, delay:0 }, { freq:800, delay:0.1 }, { freq:1000, delay:0.2 }].forEach(({ freq, delay }) => {
    const osc = audioCtx.createOscillator();
    const g   = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    g.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + delay + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + 0.3);
    osc.connect(g); g.connect(masterGain);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + 0.3);
  });
}

// ── NEXT DAY: soft morning chime ──
function playSoundNextDay() {
  if (!audioCtx || muted) return;
  [{ freq:440, delay:0, vol:0.1 }, { freq:550, delay:0.15, vol:0.08 }, { freq:660, delay:0.3, vol:0.06 }].forEach(({ freq, delay, vol }) => {
    const osc = audioCtx.createOscillator();
    const g   = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + 0.6);
    osc.connect(g); g.connect(masterGain);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + 0.6);
  });
}

// ── UI click tick: extremely subtle ──
function playSoundClick() {
  if (!audioCtx || muted) return;
  const buf  = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * 0.004), audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = audioCtx.createBufferSource();
  const g   = audioCtx.createGain();
  g.gain.value = 0.06;
  src.buffer = buf; src.connect(g); g.connect(masterGain); src.start();
}

// ── Outcome dispatcher ──
function playSoundForOutcome(outcome) {
  if      (outcome === 'sold')    playSoundSold();
  else if (outcome === 'lowball') playSoundLowball();
  else if (outcome === 'walkout') playSoundWalkout();
  else if (outcome === 'blowup')  playSoundBlowup();
}


// ═══════════════════════════════════════════════════════
//  SELLER ARCHETYPES
//  Same 3-round structure as customers but reversed.
//  Player is the appraiser. Choices: inspect/lowball/fair/wild
//
//  carPool: tags used to pick a car from CARS for this seller
//  baseValue: multiplier of car.price for the seller's ask
//    (seller asks ~80-90% of list; you try to buy at 50-70%)
//  offerMultiplier: what a "fair" offer looks like (% of car.price)
// ═══════════════════════════════════════════════════════
const SELLERS = [

  // ── DESPERATE DIVORCE GUY ──────────────────────────
  {
    id:'divorce', name:"Dave", archetype:"Desperate Seller", emoji:"😓",
    carPool:['american','midsize','suv'],
    baseValue: 0.75,   // asks 75% of list — already underselling
    offerMultiplier: 0.55,
    intro:"A man in a slightly wrinkled dress shirt walks in fast. He has the energy of someone whose lawyer just sent an invoice. He wants this done today.",
    rounds:[
      {
        sellerLine:"I just need to move this thing. Whatever you can give me. I'm not — look, I just need it gone. It runs fine. It ran fine last week.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Check it over first",
            text:"\"I appreciate the urgency. Give me five minutes with it before we talk numbers.\"",
            moodDelta:+5, offerShift:+0.05,
            nextLine:"Yeah. Sure. Take your time. I'll be — I'll just stand here." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Lead with a low number",
            text:"\"I can take it off your hands today. Won't be a lot, but it'll be cash and it'll be fast.\"",
            moodDelta:-5, offerShift:+0.08,
            nextLine:"How low are we talking. I have a number in my head." },
          { tag:'fair', cls:'fair-btn',
            label:"Empathize and reassure",
            text:"\"Let's make this easy. I'll give you a fair number and we'll have the paperwork done in an hour.\"",
            moodDelta:+15, offerShift:0,
            nextLine:"That's... yeah. Okay. That's what I need to hear right now." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask what happened",
            text:"\"You don't have to tell me. But sometimes it helps to say it out loud.\"",
            moodDelta:+10, offerShift:+0.03,
            nextLine:"[long pause] She got the house. I'm getting an apartment that allows cats. I don't even like cats." },
        ]
      },
      {
        sellerLine:"It's a good car. 2006. I kept up on the oil changes — mostly. The AC works. The check engine light is... it's been on a while but the mechanic said it was fine.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Pull the codes",
            text:"\"I'm going to plug in my scanner. If it's nothing serious, it won't affect the offer.\"",
            moodDelta:0, offerShift:+0.06,
            nextLine:"Right. Yeah. It's probably the O2 sensor. It's always the O2 sensor." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Use the light against him",
            text:"\"Check engine light changes things. I have to account for the unknown.\"",
            moodDelta:-10, offerShift:+0.12,
            nextLine:"It's just a sensor. It's fine. The mechanic said." },
          { tag:'fair', cls:'fair-btn',
            label:"Take it at face value",
            text:"\"If your mechanic cleared it, I'll take that at face value. Doesn't change my offer.\"",
            moodDelta:+12, offerShift:0,
            nextLine:"See, that's — thank you. That's reasonable." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask about the cat",
            text:"\"What kind of cat are you getting?\"",
            moodDelta:+8, offerShift:+0.02,
            nextLine:"I was thinking a tabby. Something independent. That doesn't need a lot from me." },
        ]
      },
      {
        sellerLine:"Okay. So. What are we looking at. Just — give it to me straight.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Give an honest appraisal",
            text:"\"Based on what I see — the miles, the light, the condition — I can do sixty percent of book. Fair given the unknowns.\"",
            moodDelta:+10, offerShift:0,
            outcome:'deal', margin:0.40,
            nextLine:"Sixty percent. Okay. Yeah. Can we do it today? Like right now today?" },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Go in low",
            text:"\"I can do fifty percent of book. That's accounting for the risk I'm taking on.\"",
            moodDelta:-5, offerShift:0,
            outcome:'deal', margin:0.50,
            nextLine:"Fifty. I... yeah. Fine. Whatever. Just get me out of this." },
          { tag:'fair', cls:'fair-btn',
            label:"Offer a fair split",
            text:"\"Sixty-five percent. I'll cover the inspection and the paperwork. Clean break for both of us.\"",
            moodDelta:+20, offerShift:0,
            outcome:'deal', margin:0.35,
            nextLine:"Sixty-five. Yeah. Deal. You're a good person. I'm sorry I was weird when I came in." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Throw in life advice",
            text:"\"Sixty percent for the car. And for free — cats are actually great. You'll be fine.\"",
            moodDelta:+15, offerShift:0,
            outcome:'deal', margin:0.40,
            nextLine:"[laughs for the first time] Okay. Sixty percent. And I'm naming him Dave. After me. Fresh start." },
        ]
      }
    ]
  },

  // ── DELUSIONAL CLASSIC CAR GUY ─────────────────────
  {
    id:'delusion', name:"Gerald", archetype:"The Optimist", emoji:"🤩",
    carPool:['american','cult','quirky'],
    baseValue: 1.8,   // asks nearly double what it's worth
    offerMultiplier: 0.45,
    intro:"Gerald arrives wearing a vintage racing jacket that has not seen a track. He is pulling a trailer. On the trailer is a 1998 Pontiac Sunfire with a custom hood scoop. He is beaming.",
    rounds:[
      {
        sellerLine:"So. Before you say anything — I know what you're thinking. But hear me out. This is not your average Sunfire. This has the sport package. AND it has a hood scoop.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Examine the scoop",
            text:"\"Tell me about the hood scoop. Is it functional?\"",
            moodDelta:+15, offerShift:-0.05,
            nextLine:"It's decorative. But it LOOKS functional, which in my opinion is more important." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Be direct about value",
            text:"\"Gerald, I appreciate the enthusiasm. The market for modified Sunfires is... specific.\"",
            moodDelta:-10, offerShift:+0.08,
            nextLine:"The MARKET doesn't understand vision. That's what I'm telling you." },
          { tag:'fair', cls:'fair-btn',
            label:"Let him tell the story",
            text:"\"Walk me through everything you've done to it. I want the full picture.\"",
            moodDelta:+20, offerShift:-0.02,
            nextLine:"OKAY so. First I added the scoop. Then I had the seats reupholstered — in red. Then I added a spoiler from a 2001 Cavalier which actually fits almost perfectly." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Admire the jacket",
            text:"\"That is a great jacket. Is that original Pontiac merchandise?\"",
            moodDelta:+12, offerShift:0,
            nextLine:"It's actually from a NASCAR event in 1987. I wasn't there but I have a connection." },
        ]
      },
      {
        sellerLine:"I'm thinking fifteen hundred. And I think that's very fair given the modifications. The scoop alone — and I had it custom painted — was three hundred dollars.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Price the reality",
            text:"\"I have to be honest. Modified cars are harder to move. The mods add cost but not always value.\"",
            moodDelta:-8, offerShift:+0.15,
            nextLine:"That is the most depressing thing I have ever heard and I once watched my team lose a championship game in overtime." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Counter low",
            text:"\"Book on a '98 Sunfire in this condition is four hundred. I can do five with the scoop as a bonus.\"",
            moodDelta:-20, offerShift:+0.10,
            nextLine:"Five hundred. FIVE. Do you know how long it took me to install that scoop? I'll tell you. Four hours and a YouTube tutorial." },
          { tag:'fair', cls:'fair-btn',
            label:"Split the difference creatively",
            text:"\"I can see eight hundred. I'll keep the scoop on it. It'll sell the story.\"",
            moodDelta:+5, offerShift:0,
            nextLine:"Eight hundred. I'm not — okay. I respect that you're keeping the scoop on it." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask if the spoiler fits perfectly",
            text:"\"You said the spoiler fits 'almost' perfectly. What's the almost?\"",
            moodDelta:0, offerShift:+0.05,
            nextLine:"There's a gap on the right side. About a centimeter. You can't see it unless you look. Don't look." },
        ]
      },
      {
        sellerLine:"Look. I'm not gonna take less than a thousand. That's my floor. The scoop is worth five hundred alone in my mind.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Hold firm with facts",
            text:"\"Seven-fifty. That's the market, Gerald. Not me. The market.\"",
            moodDelta:0, offerShift:0,
            outcome:'deal', margin:0.42,
            nextLine:"...Seven-fifty. I want the scoop to go to a good home. You seem like you'll respect it." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Final offer low",
            text:"\"Six hundred. Final. I'll store the car with the scoop facing the street.\"",
            moodDelta:-15, offerShift:0,
            outcome:'walk', margin:0,
            nextLine:"You know what, I think I'm going to try the internet. Good day." },
          { tag:'fair', cls:'fair-btn',
            label:"Meet at eight",
            text:"\"Eight hundred, we shake on it, and I tell every customer the scoop is a conversation piece.\"",
            moodDelta:+18, offerShift:0,
            outcome:'deal', margin:0.38,
            nextLine:"[visibly moved] You're going to tell people about it? Yes. Eight hundred. Deal." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Offer to display the jacket",
            text:"\"Eight hundred and I'll hang the jacket in the office as a tribute to the car.\"",
            moodDelta:+25, offerShift:0,
            outcome:'deal', margin:0.38,
            nextLine:"[removes jacket immediately] The jacket STAYS with the car. Non-negotiable. But eight hundred. Yes." },
        ]
      }
    ]
  },

  // ── SHADE TREE MECHANIC ────────────────────────────
  {
    id:'shadetree', name:"Randy", archetype:"The Home Mechanic", emoji:"🔧",
    carPool:['american','truck','reliable'],
    baseValue: 0.85,
    offerMultiplier: 0.58,
    intro:"Randy arrives in a truck that is definitely not the truck he's selling. He is wearing a shirt with a pocket and has the confident energy of a man who has fixed many things, some of them correctly.",
    rounds:[
      {
        sellerLine:"She runs great. I did all the work myself. Replaced the alternator, the water pump, both front struts. New brake pads all around. I do my own work so you know it's done right.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Ask about the struts",
            text:"\"What brand struts did you use? And did you do an alignment after?\"",
            moodDelta:-5, offerShift:+0.08,
            nextLine:"I used what the parts store had. And I was going to do the alignment but it drives mostly straight so." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Question the DIY work",
            text:"\"Seller-done repairs are tricky. I can't verify the work, so I have to price in the uncertainty.\"",
            moodDelta:-15, offerShift:+0.12,
            nextLine:"I've been working on cars since I was sixteen. I have TOOLS." },
          { tag:'fair', cls:'fair-btn',
            label:"Appreciate the effort",
            text:"\"That's a lot of work done right before a sale. I appreciate that.\"",
            moodDelta:+15, offerShift:0,
            nextLine:"I'm not gonna sell somebody something I didn't maintain. That's just how I was raised." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask about the truck he arrived in",
            text:"\"Is that your truck out front? That's not the one you're selling?\"",
            moodDelta:+8, offerShift:0,
            nextLine:"That one's not for sale. That one and me have an understanding." },
        ]
      },
      {
        sellerLine:"The only thing I'll tell you is the AC compressor makes a noise when you first turn it on. Goes away after about thirty seconds. I was gonna fix it but then I decided to sell instead.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"How bad is the noise",
            text:"\"What kind of noise? Bearing squeal or something heavier?\"",
            moodDelta:+5, offerShift:+0.06,
            nextLine:"It's more of a... [makes noise] ...that. But quieter. And only for thirty seconds." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Price the compressor",
            text:"\"AC compressor on this model is four hundred parts and labor. I have to factor that in.\"",
            moodDelta:-8, offerShift:+0.10,
            nextLine:"I could fix it myself for like sixty bucks in parts. I just chose not to. That's different." },
          { tag:'fair', cls:'fair-btn',
            label:"Note it but don't penalize hard",
            text:"\"I'll note it but it won't kill the deal. Thirty seconds is fine. I'll disclose it.\"",
            moodDelta:+12, offerShift:+0.02,
            nextLine:"That's fair. It's an honest noise. It goes away." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask him to demonstrate the noise",
            text:"\"Can you do the noise again? I want to hear it.\"",
            moodDelta:+10, offerShift:+0.03,
            nextLine:"[makes the noise again, louder] It's more of a whine than a grind. Whines are fine. Grinds are not fine." },
        ]
      },
      {
        sellerLine:"I want forty-five hundred. I looked it up online. That's fair for the condition and everything I put into it.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Counter with evidence",
            text:"\"Online pricing assumes verified repairs. I can do thirty-eight hundred — that covers my uncertainty.\"",
            moodDelta:0, offerShift:0,
            outcome:'deal', margin:0.38,
            nextLine:"Thirty-eight. You're gonna make money on this. But okay. I respect a straight counter." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Go low",
            text:"\"Three thousand. The AC issue and unverified work put me there.\"",
            moodDelta:-20, offerShift:0,
            outcome:'walk', margin:0,
            nextLine:"Three thousand. I did four hundred in PARTS alone. I'll sell it to a guy at work. Good day." },
          { tag:'fair', cls:'fair-btn',
            label:"Meet him near his number",
            text:"\"Four thousand. Honest price for honest work. Let's shake on it.\"",
            moodDelta:+18, offerShift:0,
            outcome:'deal', margin:0.30,
            nextLine:"Four thousand. Yeah. You know what, you're alright. Tell people the work was done right." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Offer to fix the AC together",
            text:"\"What if I buy it at thirty-eight and you come show me how to fix the compressor?\"",
            moodDelta:+20, offerShift:0,
            outcome:'deal', margin:0.38,
            nextLine:"[pause] That's actually kind of a fun offer. Yeah. Deal. Bring your own ratchet though." },
        ]
      }
    ]
  },

  // ── ESTATE SALE KID ────────────────────────────────
  {
    id:'estate', name:"Tyler", archetype:"The Heir", emoji:"🗝️",
    carPool:['luxury','comfort','boring'],
    baseValue: 0.70,
    offerMultiplier: 0.50,
    intro:"Tyler is 24 and wearing a polo shirt that belonged to someone else. He has a folder of documents he hasn't read. The car belonged to his grandmother. He has been told to 'just get something for it.'",
    rounds:[
      {
        sellerLine:"So. It was my grandma's. She passed in March. We just need to — the estate lawyer said to liquidate assets. I don't really know what it's worth. She kept it in the garage.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Look it over carefully",
            text:"\"Garage-kept cars are usually in great shape. Let me take a look before we talk numbers.\"",
            moodDelta:+10, offerShift:+0.05,
            nextLine:"Sure. Yeah. She only drove it to church and the pharmacy. Like, that's literally it." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Lead very low",
            text:"\"Older cars in estate sales can go either way. I'd have to start low given the unknowns.\"",
            moodDelta:-5, offerShift:+0.10,
            nextLine:"Oh. I mean. I don't really know what's normal so. Okay." },
          { tag:'fair', cls:'fair-btn',
            label:"Be transparent",
            text:"\"I'll give you a fair number based on the actual condition. You should know what it's worth.\"",
            moodDelta:+20, offerShift:0,
            nextLine:"That's — yeah. The lawyer just said don't take the first offer but I don't really know what that means." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask about grandma",
            text:"\"Tell me about her. What was she like?\"",
            moodDelta:+15, offerShift:+0.04,
            nextLine:"She was really cool. Like, genuinely cool. She used to say the car was the only thing that was just hers. That makes me feel weird about selling it." },
        ]
      },
      {
        sellerLine:"There's a folder in the glove box. She kept every receipt for everything she ever did to it. Oil changes, tire rotations... there's a receipt for $4 of windshield washer fluid.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"That folder is gold",
            text:"\"A documented car with a full history is worth more. That folder actually helps your number.\"",
            moodDelta:+15, offerShift:+0.08,
            nextLine:"Really? I thought it was just... paper. She kept everything. Tax returns from 1987." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Ignore the folder",
            text:"\"Documentation is nice but doesn't change the mechanical reality much.\"",
            moodDelta:-8, offerShift:+0.05,
            nextLine:"Oh. I thought it would matter. She was really proud of that folder." },
          { tag:'fair', cls:'fair-btn',
            label:"Value it properly",
            text:"\"Documented maintenance history adds real value. I'll factor it into the offer.\"",
            moodDelta:+18, offerShift:+0.05,
            nextLine:"She would have liked that. She liked things being recognized properly." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask to keep the folder",
            text:"\"Would you mind if I kept the folder in the car? It's part of the story.\"",
            moodDelta:+22, offerShift:+0.06,
            nextLine:"[genuinely touched] Yeah. Yeah, leave it in there. She'd like that." },
        ]
      },
      {
        sellerLine:"The lawyer said I should ask for more than I think it's worth. So I'm going to say... eight thousand? Is that crazy? I feel like that might be crazy.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Gently correct him",
            text:"\"Book is closer to five-five. I can do five with the documentation premium. That's fair.\"",
            moodDelta:+10, offerShift:0,
            outcome:'deal', margin:0.35,
            nextLine:"Five thousand. The lawyer said don't take first offer but you seem really honest. Five thousand." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Take advantage",
            text:"\"Eight is high. I can do three-five given the age and uncertainty.\"",
            moodDelta:-15, offerShift:0,
            outcome:'offended', margin:0,
            nextLine:"Three-five... I'm going to call my dad. This doesn't feel right." },
          { tag:'fair', cls:'fair-btn',
            label:"Give him a real number",
            text:"\"Five-five is honest for this car in this condition with this history. That's what I'd offer anyone.\"",
            moodDelta:+25, offerShift:0,
            outcome:'deal', margin:0.30,
            nextLine:"Five-five. Yeah. That sounds real. That sounds like a real number. Deal. Thank you for being straight with me." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Tell him what the lawyer meant",
            text:"\"What your lawyer meant is: don't accept the first number if it feels low. Five-five doesn't feel low. Trust that feeling.\"",
            moodDelta:+20, offerShift:0,
            outcome:'deal', margin:0.32,
            nextLine:"..That's actually helpful. Five-five. Deal. I'm going to tell my dad I negotiated." },
        ]
      }
    ]
  },

  // ── THE FLIPPER ────────────────────────────────────
  {
    id:'flipper', name:"Marco", archetype:"The Flipper", emoji:"📊",
    carPool:['sporty','cool','cult','fast'],
    baseValue: 0.95,
    offerMultiplier: 0.65,
    intro:"Marco arrives five minutes early and has already walked the lot twice. He knows the CarFax, the auction history, and what the last three sold for on Bring a Trailer. He is trying to squeeze you and he is good at it.",
    rounds:[
      {
        sellerLine:"Before you start — I know exactly what this is worth. I've done the research. Don't try the 'unknown issues' angle on me. I've heard it.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Inspect anyway",
            text:"\"I'm going to inspect it regardless. That's how I protect both of us.\"",
            moodDelta:+5, offerShift:+0.04,
            nextLine:"Fine. Professional. I respect that." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Match his energy",
            text:"\"Good. Then we skip the theater and talk real numbers.\"",
            moodDelta:+10, offerShift:+0.05,
            nextLine:"Finally. Someone who doesn't play games. What's your opening?" },
          { tag:'fair', cls:'fair-btn',
            label:"Acknowledge his research",
            text:"\"You've done your homework. So have I. Let's see if our numbers are close.\"",
            moodDelta:+12, offerShift:0,
            nextLine:"That's the right answer. What are you thinking?" },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask what he paid for it",
            text:"\"What did you buy it for?\"",
            moodDelta:-5, offerShift:+0.08,
            nextLine:"That's not relevant to this transaction. Nice try." },
        ]
      },
      {
        sellerLine:"Bring a Trailer comps have this at fourteen to sixteen depending on condition. Mine is a nine out of ten. Freshly detailed, new tires, clean title.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Challenge the comp",
            text:"\"BaT prices reflect enthusiast premiums. Retail used is different. I'm not an auction.\"",
            moodDelta:0, offerShift:+0.08,
            nextLine:"Fair point. What's your retail comp then." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Anchor low immediately",
            text:"\"My ceiling is eleven. That's retail used with margin for the unknown.\"",
            moodDelta:-12, offerShift:+0.10,
            nextLine:"Eleven is insulting. We both know that." },
          { tag:'fair', cls:'fair-btn',
            label:"Counter with your own data",
            text:"\"Retail used comps for this market put it at twelve-five. That's where I start.\"",
            moodDelta:+8, offerShift:0,
            nextLine:"Twelve-five. You're not far off. I'm at fourteen, minimum." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask why he's selling",
            text:"\"You know this market better than most. Why are you selling through a lot?\"",
            moodDelta:+5, offerShift:+0.04,
            nextLine:"I need liquidity fast. Don't use that against me." },
        ]
      },
      {
        sellerLine:"I'll take thirteen-five and not a penny less. I have two other lots interested. This isn't me being difficult — this is me having options.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Call his bluff professionally",
            text:"\"If the other lots are at thirteen-five, go with them. I'm at twelve-five. That's my number.\"",
            moodDelta:0, offerShift:0,
            outcome:'deal', margin:0.28,
            nextLine:"[pause] You didn't flinch. Twelve-five. Let's go." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Go lower to force movement",
            text:"\"Other lots interested means they haven't committed. I'm committing — at twelve.\"",
            moodDelta:-10, offerShift:0,
            outcome:'walk', margin:0,
            nextLine:"Twelve. No. I'll take my chances elsewhere. Nice meeting you." },
          { tag:'fair', cls:'fair-btn',
            label:"Split it cleanly",
            text:"\"Thirteen. Clean split. No games. I think you appreciate clean.\"",
            moodDelta:+15, offerShift:0,
            outcome:'deal', margin:0.22,
            nextLine:"Thirteen. Yeah. That's clean. Deal." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Offer a bonus for speed",
            text:"\"Twelve-five and we close in the next twenty minutes. Time is the bonus.\"",
            moodDelta:+10, offerShift:0,
            outcome:'deal', margin:0.28,
            nextLine:"Twenty minutes. You know I need the liquidity. Twelve-five. Deal. Clock starts now." },
        ]
      }
    ]
  },

  // ── SUSPICIOUS CHARACTER ───────────────────────────
  {
    id:'suspicious', name:"A Guy", archetype:"No Questions Please", emoji:"🕶️",
    carPool:['american','fast','loud'],
    baseValue: 0.50,   // very cheap — but why
    offerMultiplier: 0.40,
    intro:"A man in sunglasses arrives at opening time. The car he's selling is nicer than it should be at this price. He is friendly. Very friendly. In a way that makes you want to ask fewer questions, not more.",
    rounds:[
      {
        sellerLine:"Nice lot. Listen — I've got a car I need to move. Good car. Great car actually. I just need it gone by end of day. Cash is fine. Whatever you've got.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Ask for the title",
            text:"\"I'll need to see the title before anything else.\"",
            moodDelta:-5, offerShift:+0.10,
            nextLine:"The title is... being transferred. There's a form. It's a normal thing." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Low offer immediately",
            text:"\"End of day, no questions — I can do that. But the price reflects the speed.\"",
            moodDelta:+10, offerShift:+0.05,
            nextLine:"Speed is exactly what I need. What kind of price?" },
          { tag:'fair', cls:'fair-btn',
            label:"Ask basic questions",
            text:"\"Happy to help. Just need the basics — title, mileage, any known issues.\"",
            moodDelta:-8, offerShift:+0.08,
            nextLine:"Questions. Right. Basic questions. Sure. The mileage is... recent." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask why the rush",
            text:"\"What's the hurry?\"",
            moodDelta:-10, offerShift:+0.12,
            nextLine:"I'm relocating. Opportunity came up. Fast. Very fast. This morning, actually." },
        ]
      },
      {
        sellerLine:"It runs perfect. I mean perfect. I've put a lot into this car. A lot. The previous owner — I bought it from a guy — he also put a lot into it.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Run the VIN",
            text:"\"I'm going to run the VIN. Standard procedure.\"",
            moodDelta:-15, offerShift:+0.15,
            nextLine:"The VIN. Sure. [long pause] There might be a discrepancy. In the system. It's a known issue." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Price the risk in",
            text:"\"I can't verify any of this. My offer has to reflect that.\"",
            moodDelta:+5, offerShift:+0.08,
            nextLine:"Verify. Right. Sure. How low are we talking?" },
          { tag:'fair', cls:'fair-btn',
            label:"Ask about the previous owner",
            text:"\"What do you know about the previous owner?\"",
            moodDelta:-5, offerShift:+0.10,
            nextLine:"He was a collector. Private. Kept to himself. Didn't want attention. Relatable honestly." },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask what he put into it",
            text:"\"What specifically did you put into it?\"",
            moodDelta:0, offerShift:+0.05,
            nextLine:"Things. Performance things. Maintenance. The kind of work you don't really document." },
        ]
      },
      {
        sellerLine:"I'm thinking three thousand. For a car like this. I know it's under market. I'm not greedy. I just need it to be someone else's problem by noon.",
        choices:[
          { tag:'inspect', cls:'appraisal-btn',
            label:"Decline professionally",
            text:"\"I appreciate it, but I can't take a car without a clean title. Too much exposure for my lot.\"",
            moodDelta:0, offerShift:0,
            outcome:'walk', margin:0,
            nextLine:"Smart. You're smart. [leaves quickly] Good lot. Nice sign." },
          { tag:'lowball', cls:'lowball-sell-btn',
            label:"Go very low and take the risk",
            text:"\"Twenty-five hundred. Cash. Right now. No paperwork questions from me.\"",
            moodDelta:+15, offerShift:0,
            outcome:'deal', margin:0.50,
            nextLine:"Twenty-five. [looks around] Yeah. Okay. Do you have an envelope?" },
          { tag:'fair', cls:'fair-btn',
            label:"Offer fair but ask for title first",
            text:"\"I'll do three thousand the moment you produce a clean title. I'll wait.\"",
            moodDelta:-5, offerShift:0,
            outcome:'walk', margin:0,
            nextLine:"Waiting is not... I can't wait. I appreciate your time. [leaves]" },
          { tag:'wild', cls:'wild-sell-btn',
            label:"Ask his name again",
            text:"\"I'm sorry — what was your name again?\"",
            moodDelta:-20, offerShift:0,
            outcome:'walk', margin:0,
            nextLine:"[already at the door] A guy. Just a guy. Great lot. Good luck. [gone]" },
        ]
      }
    ]
  },
];

// ═══════════════════════════════════════════════════════
//  PERK CONFIGURATION  — tune these when adding customers
// ═══════════════════════════════════════════════════════
const PERK_CONFIG = {
  pointsPerInteraction: 1,   // every completed day (any outcome)
  bonusFullSale:        1,   // extra point for full-price sold
  lifetimeCap:         12,   // hard ceiling on total points earnable
};

// ═══════════════════════════════════════════════════════
//  PERK DATA  — 3 branches × 3 tiers
//  tag:      which choice tag this branch buffs
//  perks[]:  tier 1, 2, 3 definitions
//    cost:         perk points to unlock
//    name:         display name
//    desc:         flavour description
//    effect:       mechanical effect description (shown to player)
//    moodBonus:    flat mood bonus when this tag is chosen
//    outcomeShift: 'lowball→sold' chance improvement (0–1 probability)
//    statBonus:    extra stat shift added to dlg.statDeltas on use
// ═══════════════════════════════════════════════════════
const PERK_DATA = [
  {
    branch:  'charmer',
    icon:    '🎭',
    label:   'The Charmer',
    desc:    'Warmth as a weapon. Smile first, sell second.',
    tag:     'charm',
    upgradeBonus: 'aesthetics', // Lot Aesthetics T2 gives passive +2
    perks: [
      {
        tier: 1, cost: 2,
        name: 'Silver Tongue',
        desc: 'You have a gift. People just want to believe you.',
        effect: 'Charm choices: +4 mood bonus',
        moodBonus: 4,
        outcomeShift: 0,
        statBonus: { charm: 1 },
      },
      {
        tier: 2, cost: 3,
        name: 'Crowd Pleaser',
        desc: 'You read the room. You always read the room.',
        effect: 'Charm choices: +7 mood bonus. Walkout → Lowball on charm closes.',
        moodBonus: 7,
        outcomeShift: 0.3,
        statBonus: { charm: 2 },
      },
      {
        tier: 3, cost: 4,
        name: 'The Wink',
        desc: 'One look. One wink. They already trust you.',
        effect: 'Charm choices: +11 mood bonus. Lowball → Sold on charm closes.',
        moodBonus: 11,
        outcomeShift: 0.4,
        statBonus: { charm: 3 },
      },
    ]
  },
  {
    branch:  'shooter',
    icon:    '📋',
    label:   'The Straight Shooter',
    desc:    'The truth, delivered with confidence. Mostly.',
    tag:     'honest',
    upgradeBonus: 'appraisal', // Appraisal T2 gives passive +2
    perks: [
      {
        tier: 1, cost: 2,
        name: 'No Fine Print',
        desc: 'What you see is what you get. People respect that.',
        effect: 'Honest choices: +4 mood bonus. Reputation gains +20%.',
        moodBonus: 4,
        outcomeShift: 0,
        statBonus: { honesty: 1 },
      },
      {
        tier: 2, cost: 3,
        name: 'Full Disclosure',
        desc: 'You tell them the bad news first. It builds trust.',
        effect: 'Honest choices: +7 mood bonus. Walkout → Lowball on honest closes.',
        moodBonus: 7,
        outcomeShift: 0.3,
        statBonus: { honesty: 2 },
      },
      {
        tier: 3, cost: 4,
        name: 'The Handshake Deal',
        desc: 'Your word is the contract. They know it.',
        effect: 'Honest choices: +11 mood bonus. Lowball → Sold on honest closes.',
        moodBonus: 11,
        outcomeShift: 0.4,
        statBonus: { honesty: 3 },
      },
    ]
  },
  {
    branch:  'closer',
    icon:    '🦈',
    label:   'The Closer',
    desc:    'Always be closing. No exceptions. No mercy.',
    tag:     'hustle',
    upgradeBonus: 'signage', // Signage T3 gives passive +2
    perks: [
      {
        tier: 1, cost: 2,
        name: 'Urgency Play',
        desc: 'There is always someone else coming in tomorrow.',
        effect: 'Hustle choices: +4 mood bonus. Blowup risk reduced.',
        moodBonus: 4,
        outcomeShift: 0.15,
        statBonus: { closing: 1 },
      },
      {
        tier: 2, cost: 3,
        name: 'The Phantom Offer',
        desc: 'The other buyer is real. Probably. Does it matter?',
        effect: 'Hustle choices: +7 mood bonus. Walkout → Lowball on hustle closes.',
        moodBonus: 7,
        outcomeShift: 0.35,
        statBonus: { closing: 2 },
      },
      {
        tier: 3, cost: 4,
        name: 'Now or Never',
        desc: 'They came to buy. You just helped them realize it.',
        effect: 'Hustle choices: +11 mood bonus. Lowball → Sold on hustle closes.',
        moodBonus: 11,
        outcomeShift: 0.45,
        statBonus: { closing: 3 },
      },
    ]
  },
];

// ═══════════════════════════════════════════════════════
//  PERK HELPERS
// ═══════════════════════════════════════════════════════

// Return highest unlocked tier for a branch (0 = none)
function getPerkTier(branch) {
  return (state.perks && state.perks[branch]) || 0;
}

// Total perk points spent
function perkPointsSpent() {
  if (!state.perks) return 0;
  let spent = 0;
  PERK_DATA.forEach(b => {
    const tier = state.perks[b.branch] || 0;
    for (let t = 0; t < tier; t++) spent += b.perks[t].cost;
  });
  return spent;
}

// Total points earned (capped)
function perkPointsEarned() {
  return Math.min(state.perkPointsRaw || 0, PERK_CONFIG.lifetimeCap);
}

// Available points = earned - spent
function perkPointsAvailable() {
  return perkPointsEarned() - perkPointsSpent();
}

// Get the active perk definition for a branch (highest unlocked tier's data)
function getActivePerk(branch) {
  const branchData = PERK_DATA.find(b => b.branch === branch);
  const tier = getPerkTier(branch);
  if (!branchData || tier === 0) return null;
  return branchData.perks[tier - 1];
}

// Get perk for a choice tag (charm/honest/hustle)
function getPerkForTag(tag) {
  const tagToBranch = { charm:'charmer', honest:'shooter', hustle:'closer' };
  const branch = tagToBranch[tag];
  return branch ? getActivePerk(branch) : null;
}

// Apply upgrade passive bonus to a branch
function getUpgradePassiveBonus(branchData) {
  const key  = branchData.upgradeBonus;
  const tier = state.upgrades[key] || 0;
  return tier >= 2 ? 2 : 0;
}

// ═══════════════════════════════════════════════════════
//  PERK POINT EARNING  — called from resolveOutcome
// ═══════════════════════════════════════════════════════
function awardPerkPoints(outcome) {
  let pts = PERK_CONFIG.pointsPerInteraction;
  if (outcome === 'sold') pts += PERK_CONFIG.bonusFullSale;
  // Apply to raw total (cap applied at read time, not write time)
  state.perkPointsRaw = (state.perkPointsRaw || 0) + pts;
  return pts;
}

// ═══════════════════════════════════════════════════════
//  PERK TREE RENDERING
// ═══════════════════════════════════════════════════════
function renderPerkTree() {
  const body     = document.getElementById('perk-tree-body');
  const avail    = perkPointsAvailable();
  const earned   = perkPointsEarned();
  const spent    = perkPointsSpent();
  const cap      = PERK_CONFIG.lifetimeCap;

  // Update meta bar
  document.getElementById('perk-pts-display').textContent  = avail;
  document.getElementById('perk-cap-display').textContent  = `/ ${cap}`;
  document.getElementById('perk-spent-display').textContent = spent;
  document.getElementById('perk-meta-note').innerHTML =
    `Points per sale: ${PERK_CONFIG.pointsPerInteraction} (+${PERK_CONFIG.bonusFullSale} full sale)<br>` +
    `You cannot master all branches — choose wisely.`;

  // Pip track (12 pips: filled=spent, partial=available, empty=future)
  const pipTrack = document.getElementById('perk-pip-track');
  pipTrack.innerHTML = '';
  for (let i = 0; i < cap; i++) {
    const pip = document.createElement('div');
    pip.className = 'perk-pip ' +
      (i < spent ? 'used' : i < earned ? 'avail' : '');
    pipTrack.appendChild(pip);
  }

  // Render branches
  body.innerHTML = '';
  PERK_DATA.forEach(branchData => {
    const currentTier = getPerkTier(branchData.branch);
    const passiveBonus = getUpgradePassiveBonus(branchData);

    const col = document.createElement('div');
    col.className = 'perk-branch';

    // Branch header
    col.innerHTML = `
      <div class="perk-branch-header">
        <div class="perk-branch-icon">${branchData.icon}</div>
        <div class="perk-branch-name">${branchData.label}</div>
        <div class="perk-branch-desc">${branchData.desc}</div>
        ${passiveBonus > 0
          ? `<div style="font-size:10px;color:var(--orange);margin-top:4px;font-style:italic">
               ★ Lot upgrade: +${passiveBonus} mood passive
             </div>`
          : ''}
      </div>`;

    // Tier cards
    branchData.perks.forEach((perk, i) => {
      const tierNum   = i + 1;
      const owned     = currentTier >= tierNum;
      const unlockable = !owned && currentTier === tierNum - 1;
      const locked    = !owned && !unlockable;
      const canAfford = avail >= perk.cost;
      // Cap reached only matters if you have 0 available AND no more can be earned
      const capExhausted = earned >= cap && avail < perk.cost;

      // Connector line between cards
      if (i > 0) {
        const conn = document.createElement('div');
        conn.className = 'perk-connector' + (currentTier >= tierNum - 1 ? ' unlocked' : '');
        col.appendChild(conn);
      }

      const card = document.createElement('div');
      card.className = 'perk-card ' + (owned ? 'unlocked' : locked ? 'locked' : '');

      let btnHtml;
      if (owned) {
        btnHtml = '<button class="btn-perk owned" disabled>✓ UNLOCKED</button>';
      } else if (locked) {
        btnHtml = '<button class="btn-perk" disabled>🔒 UNLOCK TIER ' + (tierNum-1) + ' FIRST</button>';
      } else if (capExhausted) {
        btnHtml = '<button class="btn-perk" disabled>NO POINTS REMAINING</button>';
      } else {
        btnHtml = `<button class="btn-perk" ${canAfford ? '' : 'disabled'}
          onclick="purchasePerk('${branchData.branch}', ${tierNum})">
          ${canAfford ? `UNLOCK — ${perk.cost} PTS` : `${perk.cost} PTS NEEDED`}
        </button>`;
      }

      card.innerHTML = `
        <div class="perk-card-header">
          <div class="perk-card-name">${perk.name}</div>
          <div class="perk-card-cost">Tier ${tierNum} · ${perk.cost} pts</div>
        </div>
        <div class="perk-card-desc">${perk.desc}</div>
        <div class="perk-card-effect">${perk.effect}</div>
        ${btnHtml}`;

      col.appendChild(card);
    });

    body.appendChild(col);
  });
}

// ═══════════════════════════════════════════════════════
//  PERK PURCHASE
// ═══════════════════════════════════════════════════════
function purchasePerk(branch, tier) {
  if (!state.perks) state.perks = {};
  const branchData = PERK_DATA.find(b => b.branch === branch);
  if (!branchData) return;

  const currentTier = getPerkTier(branch);
  if (currentTier >= tier) return;           // already owned
  if (currentTier !== tier - 1) return;      // must buy in order

  const perk = branchData.perks[tier - 1];
  if (perkPointsAvailable() < perk.cost) return;

  state.perks[branch] = tier;
  playSoundPerk();
  saveGame();
  renderPerkTree();
}

// ═══════════════════════════════════════════════════════
//  PERK EFFECTS IN DIALOGUE
// ═══════════════════════════════════════════════════════

// Called from applyStatWeight — adds perk mood bonus for matching tag
function applyPerkMoodBonus(choice) {
  const perk = getPerkForTag(choice.tag);
  if (!perk) return 0;
  const branchData = PERK_DATA.find(b => b.tag === choice.tag);
  const passive    = branchData ? getUpgradePassiveBonus(branchData) : 0;
  return perk.moodBonus + passive;
}

// Called from resolveOutcome — may shift outcome up one tier
function applyPerkOutcomeShift(outcome, choiceTag) {
  const perk = getPerkForTag(choiceTag);
  if (!perk || perk.outcomeShift === 0) return outcome;

  const roll = Math.random();
  if (outcome === 'blowup'  && roll < perk.outcomeShift) return 'walkout';
  if (outcome === 'walkout' && roll < perk.outcomeShift) return 'lowball';
  if (outcome === 'lowball' && roll < perk.outcomeShift) return 'sold';
  return outcome;
}

// Called from resolveOutcome — adds extra stat delta from perk
function applyPerkStatBonus(choiceTag, statDeltas) {
  const perk = getPerkForTag(choiceTag);
  if (!perk || !perk.statBonus) return;
  Object.entries(perk.statBonus).forEach(([k,v]) => {
    statDeltas[k] = (statDeltas[k] || 0) + v;
  });
}

// Render perk indicator on choice buttons (Rookie mode only)
function getPerkIndicatorHtml(tag) {
  if (state.difficulty === 'veteran') return '';
  const perk = getPerkForTag(tag);
  if (!perk) return '';
  const names = { charm:'charmer', honest:'shooter', hustle:'closer' };
  const branch = names[tag];
  const tier   = getPerkTier(branch);
  const shortNames = ['Silver Tongue','Crowd Pleaser','The Wink',
                      'No Fine Print','Full Disclosure','Handshake Deal',
                      'Urgency Play','Phantom Offer','Now or Never'];
  return `<span class="perk-indicator">★ ${perk.name}</span>`;
}


// ═══════════════════════════════════════════════════════
//  STARTER STOCK DELIVERY
//  When Inventory Quality is upgraded, 5 cars of the new
//  tier arrive on the lot immediately at no cost.
//  This prevents the grind of needing commissions to
//  build inventory — trade-ins will handle ongoing restock.
// ═══════════════════════════════════════════════════════
function deliverStarterStock(newTier) {
  const isVet = state.difficulty === 'veteran';
  // Pick non-veteran cars of exactly the new tier not already in inventory
  const existing = state.lotInventory || [];
  const pool = CARS.filter(c =>
    c.tier === newTier && !c.veteranOnly && !existing.includes(c.id)
  );
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const delivered = shuffled.slice(0, 5);
  // Actually add them to lotInventory
  state.lotInventory = [...existing, ...delivered.map(c => c.id)];
  saveGame();
  showStockDeliveryNotice(delivered, newTier);
}

function showStockDeliveryNotice(cars, tier) {
  const tierNames = {1:'Mid-2000s', 2:'2010s'};
  const tierName  = tierNames[tier] || 'New';
  const existing  = document.getElementById('stock-notice');
  if (existing) existing.remove();

  const notice = document.createElement('div');
  notice.id = 'stock-notice';
  notice.style.cssText = `
    position:fixed; bottom:60px; left:50%; transform:translateX(-50%);
    background:var(--asphalt-mid); border:1px solid var(--green);
    border-top:3px solid var(--green); padding:16px 24px;
    font-family:'Courier Prime',monospace; z-index:600;
    max-width:420px; width:90%; box-shadow:0 4px 20px rgba(0,0,0,0.5);
    animation: slideUp 0.3s ease both;
  `;
  notice.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:3px;
         color:var(--green);margin-bottom:8px;text-transform:uppercase;">
      🚗 New Stock Arrived
    </div>
    <div style="font-size:13px;color:var(--cream-dim);margin-bottom:10px;line-height:1.5;">
      Your ${tierName} inventory upgrade attracted some fresh stock.
      Five cars just rolled onto the lot.
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:12px;">
      ${cars.map(c =>
        `<div style="font-size:12px;color:var(--cream);">
           ${c.emoji} ${c.name}
           <span style="color:var(--green);font-family:'Oswald',sans-serif;
                  font-size:11px;float:right;">${c.priceStr}</span>
         </div>`
      ).join('')}
    </div>
    <button onclick="document.getElementById('stock-notice').remove()"
      style="width:100%;padding:8px;background:var(--green);color:var(--cream);
             border:none;border-bottom:3px solid var(--green-dim);
             font-family:'Oswald',sans-serif;font-size:13px;font-weight:700;
             letter-spacing:2px;cursor:pointer;">
      GOT IT
    </button>
  `;
  document.body.appendChild(notice);
  setTimeout(() => { if (notice.parentNode) notice.remove(); }, 8000);
}


// ═══════════════════════════════════════════════════════
//  PHASE 7: BUY CARS OVERLAY
// ═══════════════════════════════════════════════════════

function renderBuyCars() {
  const container = document.getElementById('buy-cars-container');
  const cashEl    = document.getElementById('buy-cash-display');
  if (!container) return;

  cashEl.textContent = '$' + state.cash.toLocaleString();
  container.innerHTML = '';

  const owned    = state.lotInventory || [];
  const invTier  = state.upgrades.inventory || 0;
  const isVet    = state.difficulty === 'veteran';

  // All cars not currently on the lot, filtered by tier and veteran
  const available = CARS.filter(c => {
    if (c.veteranOnly && !isVet) return false;
    if ((c.tier || 0) > invTier) return false;
    return !owned.includes(c.id);
  });

  // Sort by type
  const sorted = sortCars(available);

  // Split into affordable and stretch (up to 4 stretch cars shown)
  const buyCost   = c => Math.round(c.price * 0.70);
  const affordable = sorted.filter(c => state.cash >= buyCost(c));
  const stretch    = sorted.filter(c => state.cash < buyCost(c)).slice(0, 4);

  const allToShow = [...affordable, ...stretch];

  if (allToShow.length === 0) {
    const empty = document.createElement('div');
    empty.style.cssText = 'grid-column:1/-1;text-align:center;padding:40px;' +
      'color:var(--text-dim);font-style:italic;font-size:14px;';
    empty.textContent = "You own everything available at your current inventory tier. Upgrade inventory quality to unlock more cars.";
    container.appendChild(empty);
    return;
  }

  const TYPE_LABELS = {
    economy:'Economy', compact:'Compact', midsize:'Midsize', fullsize:'Full Size',
    wagon:'Wagon', minivan:'Minivan', suv:'SUV', truck:'Truck',
    sports:'Sports', luxury:'Luxury'
  };

  let lastType   = null;
  let inStretch  = false;

  allToShow.forEach(car => {
    const cost      = buyCost(car);
    const isStretch = state.cash < cost;
    const carType   = car.carType || 'midsize';

    // Stretch section header
    if (isStretch && !inStretch) {
      inStretch = true;
      const hdr = document.createElement('div');
      hdr.className = 'buy-type-header';
      hdr.style.cssText = 'grid-column:1/-1;color:var(--text-dim);border-top:1px dashed var(--asphalt-lt);margin-top:8px;padding-top:12px;';
      hdr.textContent = '— BEYOND REACH FOR NOW —';
      container.appendChild(hdr);
      lastType = null; // reset type header for stretch section
    }

    // Type divider
    if (carType !== lastType) {
      lastType = carType;
      const hdr = document.createElement('div');
      hdr.className = 'buy-type-header';
      hdr.textContent = TYPE_LABELS[carType] || carType.toUpperCase();
      container.appendChild(hdr);
    }

    const dots = Array.from({length:5}, (_,i) =>
      `<div class="cond-dot${i < car.condition ? ' lit':''}"></div>`).join('');
    const vetTag = car.veteranOnly
      ? '<span style="font-size:9px;color:var(--red-bright);border:1px solid var(--red);padding:1px 4px;margin-left:4px;">VET</span>'
      : '';

    const card = document.createElement('div');
    card.className = 'buy-car-card ' + (isStretch ? 'stretch' : 'affordable');
    card.innerHTML = `
      <div class="buy-car-top">
        <div class="buy-car-name">${car.emoji} ${car.name}${vetTag}</div>
      </div>
      <div class="buy-car-rep">${car.rep}</div>
      <div class="buy-cond">${dots}</div>
      <div class="buy-price-row">
        <div class="buy-cost">$${cost.toLocaleString()}</div>
      </div>
      <button class="btn-buy-car"
        ${isStretch || state.cash < cost ? 'disabled' : ''}
        onclick="buyCarDirect('${car.id}', ${cost})">
        ${isStretch ? `$${(cost - state.cash).toLocaleString()} MORE NEEDED` : 'BUY — $' + cost.toLocaleString()}
      </button>`;
    container.appendChild(card);
  });
}

function buyCarDirect(carId, cost) {
  // Re-check at click time — state.cash may have changed since render
  if (state.cash < cost) {
    renderBuyCars(); // refresh buttons to reflect real cash
    return;
  }
  const car = CARS.find(c => c.id === carId);
  if (!car) return;

  state.cash -= cost;
  state.acquisitionCosts = state.acquisitionCosts || {};
  state.acquisitionCosts[carId] = cost;
  state.lotInventory = [...(state.lotInventory || []), carId];

  playSoundUpgrade();
  saveGame();
  buildInventory();
  document.getElementById('hud-cash').textContent    = '$' + state.cash.toLocaleString();
  document.getElementById('buy-cash-display').textContent = '$' + state.cash.toLocaleString();
  renderBuyCars(); // refresh — bought car gone, remaining buttons re-evaluated
}

// ═══════════════════════════════════════════════════════
//  PHASE 7: SELLER SCHEDULING
//  A seller replaces the customer every 4th day (approx).
//  At reputation 3+ : every 3rd day.
//  At reputation 4+ : every other day (more inventory churn).
//  Uses deterministic day-based check so it's consistent on reload.
// ═══════════════════════════════════════════════════════
function shouldTodayBeSeller() {
  const rep    = Math.round(state.reputation);
  const period = rep >= 4 ? 2 : rep >= 3 ? 3 : 4;
  return state.day > 1 && (state.day % period === 0);
}

function pickTodaySeller() {
  // Rotate through sellers by day, weighted slightly toward ones with
  // cars the player can actually use (not already in inventory)
  const idx = (state.day) % SELLERS.length;
  return SELLERS[idx];
}

// Pick a car for the seller based on their carPool tags and what makes sense
function pickSellerCar(seller) {
  const invTier = state.upgrades.inventory || 0;
  const isVet   = state.difficulty === 'veteran';
  // Cars that match at least one pool tag, not already owned, in accessible tier
  const owned = state.lotInventory || [];
  const pool  = CARS.filter(c => {
    if (c.veteranOnly && !isVet) return false;
    if ((c.tier || 0) > Math.min(invTier + 1, 2)) return false; // can bring tier+1 max
    if (owned.includes(c.id)) return false;
    return c.tags.some(t => seller.carPool.includes(t));
  });
  if (pool.length === 0) {
    // Fallback: any car not owned
    const fallback = CARS.filter(c => !owned.includes(c.id) && (!c.veteranOnly || isVet));
    return fallback[Math.floor(Math.random() * fallback.length)] || CARS[0];
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

// ═══════════════════════════════════════════════════════
//  PHASE 7: APPRAISAL DIALOGUE ENGINE
// ═══════════════════════════════════════════════════════
let appraisal = {
  seller:       null,
  car:          null,
  round:        0,
  mood:         60,
  offerShift:   0,    // accumulated adjustments to final offer
  finalOffer:   0,
};

function startAppraisal() {
  const seller = pickTodaySeller();
  const car    = pickSellerCar(seller);

  appraisal = {
    seller,
    car,
    round:      0,
    mood:       60,
    offerShift: 0,
    finalOffer: 0,
  };

  // Switch dialogue screen to seller mode
  const screen = document.getElementById('screen-dialogue');
  screen.className = 'screen dlg-mode-seller';

  // Set left panel — show seller info instead of car selector
  document.getElementById('dlg-avatar').textContent     = seller.emoji;
  document.getElementById('dlg-cust-name').textContent  = seller.name;
  document.getElementById('dlg-archetype').textContent  = seller.archetype;
  document.getElementById('dlg-archetype').style.opacity = '1';

  // Hide car selector, show seller car panel
  document.getElementById('dlg-car-select').style.display  = 'none';
  document.getElementById('dlg-car-label').style.display   = 'none';
  document.getElementById('dlg-car-req-note').style.display = 'none';
  document.getElementById('dlg-car-rep').style.display     = 'none';

  // Create/show seller car info panel
  let sellerPanel = document.getElementById('dlg-seller-car-panel');
  if (!sellerPanel) {
    sellerPanel = document.createElement('div');
    sellerPanel.id = 'dlg-seller-car-panel';
    sellerPanel.className = 'dlg-seller-car';
    // Insert into left panel after mood bar
    const moodEl = document.querySelector('.dlg-mood');
    moodEl.after(sellerPanel);
  }
  sellerPanel.style.display = 'flex';
  sellerPanel.innerHTML = `
    <div class="dlg-car-label">THEY'RE SELLING</div>
    <div class="dlg-seller-car-name">${car.emoji} ${car.name}</div>
    <div class="dlg-seller-car-rep">${car.rep}</div>
    <div class="dlg-offer-display">
      <div class="dlg-offer-label">Your Current Offer</div>
      <div class="dlg-offer-val" id="dlg-offer-val">—</div>
      <div class="dlg-offer-note" id="dlg-offer-note">Calculated in Round 3</div>
    </div>`;

  // Update mood bar
  updateMoodBar();

  // Clear speech area
  document.getElementById('dlg-speech-area').innerHTML = '';
  document.getElementById('dlg-back-btn').classList.remove('visible');

  addNarratorBubble(seller.intro);
  showScreen('screen-dialogue');
  renderAppraisalRound();
}

function renderAppraisalRound() {
  const round = appraisal.seller.rounds[appraisal.round];
  document.getElementById('dlg-round-label').textContent =
    'Round ' + (appraisal.round + 1) + ' of 3';

  addCustomerBubble(appraisal.seller.name, round.sellerLine);

  // Build choice buttons with appraisal-specific tags
  const box = document.getElementById('dlg-choice-btns');
  box.innerHTML = '';
  round.choices.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn ' + ch.cls;
    btn.innerHTML = `<span class="choice-tag ${ch.cls.replace('-btn','')}-tag">${ch.tag.toUpperCase()}</span><span>${ch.label}</span>`;
    btn.onclick = () => handleAppraisalChoice(idx);
    box.appendChild(btn);
  });

  // Update offer display in round 3
  if (appraisal.round === 2) {
    const baseOffer = Math.round(appraisal.car.price * appraisal.seller.offerMultiplier);
    const shift     = Math.round(baseOffer * appraisal.offerShift);
    appraisal.finalOffer = Math.max(100, baseOffer - shift);
    document.getElementById('dlg-offer-val').textContent =
      '$' + appraisal.finalOffer.toLocaleString();
    document.getElementById('dlg-offer-note').textContent =
      'Based on your inspection approach';
  }
}

function handleAppraisalChoice(idx) {
  const round  = appraisal.seller.rounds[appraisal.round];
  const choice = round.choices[idx];

  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
  addPlayerBubble(choice.text);

  // Accumulate shifts
  appraisal.offerShift += (choice.offerShift || 0);
  appraisal.mood = Math.max(5, Math.min(100, appraisal.mood + (choice.moodDelta || 0)));
  updateMoodBar();

  setTimeout(() => {
    addCustomerBubble(appraisal.seller.name, choice.nextLine);
    if (appraisal.round === 2 && choice.outcome) {
      setTimeout(() => resolveAppraisal(choice), 700);
    } else {
      appraisal.round++;
      setTimeout(renderAppraisalRound, 500);
    }
  }, 380);
}

function resolveAppraisal(choice) {
  const outcome = choice.outcome;
  const car     = appraisal.car;

  const labels = {
    deal:     `✓ DEAL — Acquired ${car.name} for $${appraisal.finalOffer.toLocaleString()}`,
    walk:     `✗ WALKED — They took the car elsewhere`,
    offended: `✗ OFFENDED — They left. Reputation docked slightly.`,
  };
  addResultBubble(
    outcome === 'deal' ? 'sold' : outcome === 'offended' ? 'blowup' : 'walkout',
    labels[outcome] || outcome
  );

  if (outcome === 'deal') {
    // Pay for the car
    state.cash -= appraisal.finalOffer;
    state.cash  = Math.max(0, state.cash);
    state.acquisitionCosts = state.acquisitionCosts || {};
    state.acquisitionCosts[car.id] = appraisal.finalOffer;
    // Add to inventory
    state.lotInventory = [...(state.lotInventory || []), car.id];
    playSoundSold();
  } else if (outcome === 'offended') {
    state.reputation = Math.max(1, Math.round((state.reputation - 0.2) * 10) / 10);
    playSoundBlowup();
  } else {
    playSoundWalkout();
  }

  state.dayDone = true;
  state.lastResult = {
    outcome: outcome === 'deal' ? 'sold' : outcome === 'offended' ? 'blowup' : 'walkout',
    commission: 0,
    customerName: appraisal.seller.name,
    isSeller: true,
    acquiredCar: outcome === 'deal' ? car.name : null,
  };
  saveGame();

  setTimeout(() => {
    document.getElementById('dlg-back-btn').classList.add('visible');
    showAppraisalEod(outcome, car);
  }, 1200);
}

function showAppraisalEod(outcome, car) {
  const banner = document.getElementById('eod-banner');
  const sub    = document.getElementById('eod-subtitle');

  if (outcome === 'deal') {
    banner.textContent = '🚗 Car Acquired';
    banner.className   = 'eod-outcome-banner sold';
    sub.textContent    = `${car.name} is now on your lot. Paid $${appraisal.finalOffer.toLocaleString()}. List price ${car.priceStr}.`;
  } else if (outcome === 'walk') {
    banner.textContent = '🚪 They Walked';
    banner.className   = 'eod-outcome-banner walkout';
    sub.textContent    = `${appraisal.seller.name} took the car elsewhere. No deal today.`;
  } else {
    banner.textContent = '💥 Scene Made';
    banner.className   = 'eod-outcome-banner blowup';
    sub.textContent    = `${appraisal.seller.name} left offended. Reputation took a small hit.`;
  }

  // Zero out commission display
  document.getElementById('eod-commission').textContent = '$0';
  document.getElementById('eod-commission').className   = 'eod-stat-val neutral';
  document.getElementById('eod-total').textContent      = '$' + state.cash.toLocaleString();
  const r = Math.max(1, Math.min(5, Math.round(state.reputation)));
  document.getElementById('eod-rep').textContent = '★'.repeat(r) + '☆'.repeat(5-r);

  // Stat shifts neutral for appraisal days
  ['eod-charm-shift','eod-honest-shift','eod-closing-shift'].forEach(id => {
    const el = document.getElementById(id);
    el.textContent = '—';
    el.className   = 'eod-shift-chip-val shift-flat';
  });

  scheduleEod(() => openOverlay('overlay-eod'), 1800);
}

function leaveAppraisal() {
  // Reset dialogue screen back to customer mode
  const screen = document.getElementById('screen-dialogue');
  screen.className = 'screen';
  document.getElementById('dlg-car-select').style.display  = '';
  document.getElementById('dlg-car-label').style.display   = '';
  document.getElementById('dlg-car-rep').style.display     = '';
  const sp = document.getElementById('dlg-seller-car-panel');
  if (sp) sp.style.display = 'none';
}


// ═══════════════════════════════════════════════════════
//  TRADE-IN SYSTEM
//  Triggered after a sold/lowball outcome for eligible customers.
//  Player can accept (reduces commission, gains car) or decline.
// ═══════════════════════════════════════════════════════

// Which customer IDs can offer trade-ins
const TRADEIN_CUSTOMERS = {
  status:   { line: "One more thing before I go — I'm obviously upgrading. What'll you give me for the old one?", emoji:'🚗' },
  alpha:    { line: "Hey — take my old truck off my hands. Dave's gonna see this car anyway, might as well make it clean.", emoji:'🛻' },
  retiree:  { line: "The wife's old car is just sitting in the driveway. You interested? Runs fine. Low miles for the age.", emoji:'🚗' },
  outdoorsy:{ line: "My old Outback still runs. It's earned its retirement. Could be someone else's adventure.", emoji:'🚙' },
  firsttime:{ line: "Oh — my mom said to ask. She has an old Corolla. Would you take a look at it?", emoji:'🚗' },
  karen:    { line: "I have a car I need to be rid of immediately. It has a history. I'd rather not get into it.", emoji:'🚘' },
};

// Pick a trade-in car — not in inventory, matches customer vibe loosely
function pickTradeInCar(customerId) {
  const owned   = state.lotInventory || [];
  const isVet   = state.difficulty === 'veteran';
  const invTier = state.upgrades.inventory || 0;

  // Tag preferences per customer
  const prefs = {
    status:    ['prestige','luxury','euro'],
    alpha:     ['truck','american','fast','loud'],
    retiree:   ['comfort','boring','reliable','american'],
    outdoorsy: ['outdoorsy','offroad','reliable'],
    firsttime: ['cheap','reliable','compact','boring'],
    karen:     ['suv','practical','american','roomy'],
  };

  const preferred = prefs[customerId] || [];
  const pool = CARS.filter(c => {
    if (c.veteranOnly && !isVet) return false;
    if (owned.includes(c.id)) return false;
    // Can trade in cars one tier above current inventory
    if ((c.tier || 0) > Math.min(invTier + 1, 2)) return false;
    return c.tags.some(t => preferred.includes(t));
  });

  if (pool.length === 0) {
    // Fallback: any affordable car not owned
    const fallback = CARS.filter(c =>
      !owned.includes(c.id) && (!c.veteranOnly || isVet)
    );
    return fallback[Math.floor(Math.random() * fallback.length)] || null;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

// Main trade-in trigger — called from resolveOutcome after sale confirmed
function offerTradeIn(finalCommission, capturedDeltas, finalOutcome) {
  // Snapshot lastResult immediately — state may change before timeouts fire
  if (!state.lastResult) {
    return; // nothing to work with
  }
  state._lastResultSnapshot = Object.assign({}, state.lastResult);

  const custId = dlg.customer ? dlg.customer.id : null;
  if (!custId || !TRADEIN_CUSTOMERS[custId]) {
    finishSaleAndShowEod(finalCommission, capturedDeltas, finalOutcome, null);
    return;
  }

  const tradeConfig = TRADEIN_CUSTOMERS[custId];
  const tradeCar    = pickTradeInCar(custId);
  if (!tradeCar) {
    finishSaleAndShowEod(finalCommission, capturedDeltas, finalOutcome, null);
    return;
  }

  // Calculate trade-in value: 40–60% of list price
  const pct        = 0.40 + Math.random() * 0.20;
  const tradeValue = Math.round(tradeCar.price * pct);

  // Adjusted commission: reduce by trade value (floor at 0)
  const adjustedCommission = Math.max(0, finalCommission - tradeValue);

  // Show trade-in bubble in chat after a short delay
  setTimeout(() => {
    showTradeInOffer(tradeConfig, tradeCar, tradeValue,
      finalCommission, adjustedCommission, capturedDeltas, finalOutcome);
  }, 1200);
}

function showTradeInOffer(tradeConfig, tradeCar, tradeValue,
    originalCommission, adjustedCommission, capturedDeltas, finalOutcome) {

  const area = document.getElementById('dlg-speech-area');
  const el   = document.createElement('div');
  el.className = 'bubble-tradein';

  // Commission cost to accept: how much commission is sacrificed
  const commissionCost = originalCommission - adjustedCommission;
  const costLabel = commissionCost >= originalCommission
    ? 'your entire commission'
    : `$${commissionCost.toLocaleString()} of your commission`;

  el.innerHTML = `
    <div class="tradein-header">🔄 TRADE-IN OFFER</div>
    <div style="font-size:14px;color:var(--cream-dim);font-style:italic;margin-bottom:14px;">
      "${tradeConfig.line}"
    </div>
    <div class="tradein-car-name">${tradeCar.emoji} ${tradeCar.name}</div>
    <div class="tradein-car-rep" style="margin-bottom:14px;">${tradeCar.rep}</div>
    <div style="font-size:13px;color:var(--text-dim);margin-bottom:16px;
         border-left:3px solid var(--orange);padding-left:10px;line-height:1.6;">
      Accepting this trade-in will cost you <strong style="color:var(--orange)">${costLabel}</strong>.
      The car goes on your lot — what you do with it is up to you.
    </div>
    <div class="tradein-buttons">
      <button class="btn-tradein-accept" id="btn-ti-accept">
        TAKE THE CAR
      </button>
      <button class="btn-tradein-decline" id="btn-ti-decline">
        PASS — KEEP $${originalCommission.toLocaleString()}
      </button>
    </div>
  `;

  area.appendChild(el);
  setTimeout(() => area.scrollTop = area.scrollHeight, 40);

  document.getElementById('btn-ti-accept').onclick = () => {
    acceptTradeIn(tradeCar, tradeValue, adjustedCommission,
      originalCommission, capturedDeltas, finalOutcome, el);
  };
  document.getElementById('btn-ti-decline').onclick = () => {
    declineTradeIn(originalCommission, capturedDeltas, finalOutcome, el);
  };
}

function acceptTradeIn(tradeCar, tradeValue, adjustedCommission,
    originalCommission, capturedDeltas, finalOutcome, offerEl) {

  // Lock buttons
  offerEl.querySelectorAll('button').forEach(b => b.disabled = true);

  // Adjust cash: we already added originalCommission in resolveOutcome,
  // so we subtract the difference (trade value absorbed from commission)
  const commissionDiff = originalCommission - adjustedCommission;
  state.cash -= commissionDiff;
  state.cash  = Math.max(0, state.cash);

  // Add car to inventory at trade value
  state.acquisitionCosts = state.acquisitionCosts || {};
  state.acquisitionCosts[tradeCar.id] = tradeValue;
  state.lotInventory = [...(state.lotInventory || []), tradeCar.id];

  // Update lastResult to reflect trade
  state.lastResult.commission     = adjustedCommission;
  state.lastResult.tradeIn        = tradeCar.name;
  state.lastResult.tradeInValue   = tradeValue;

  // Confirm bubble
  addPlayerBubble(`"Deal. ${tradeCar.name} goes on the lot. You take the ${dlg.pickedCar ? dlg.pickedCar.name : 'car'}."`);
  addNarratorBubble(`${tradeCar.name} added to your inventory. Acquired for $${tradeValue.toLocaleString()}.`);

  playSoundUpgrade();
  saveGame();

  const snapshotResult = Object.assign({}, state.lastResult);
  scheduleEod(() => {
    document.getElementById('dlg-back-btn').classList.add('visible');
    showEndOfDay(snapshotResult, capturedDeltas);
  }, 1500);
}

function declineTradeIn(originalCommission, capturedDeltas, finalOutcome, offerEl) {
  offerEl.querySelectorAll('button').forEach(b => b.disabled = true);
  addPlayerBubble('"I appreciate it — but let\'s keep it simple. Just the sale today."');
  finishSaleAndShowEod(originalCommission, capturedDeltas, finalOutcome, null);
}

function finishSaleAndShowEod(commission, capturedDeltas, finalOutcome, tradeIn) {
  const snapshotResult = state._lastResultSnapshot || Object.assign({}, state.lastResult) || {};
  scheduleEod(() => {
    document.getElementById('dlg-back-btn').classList.add('visible');
    showEndOfDay(snapshotResult, capturedDeltas);
  }, 1500);
}

// ═══════════════════════════════════════════════════════
//  OVERLAY SYSTEM
// ═══════════════════════════════════════════════════════
function openOverlay(id) {
  if (id === 'overlay-upgrades') {
    document.getElementById('upg-cash-display').textContent =
      '$' + state.cash.toLocaleString();
    renderUpgradeCards();
  }
  if (id === 'overlay-perks') {
    renderPerkTree();
  }
  if (id === 'overlay-buy') {
    renderBuyCars();
  }
  document.getElementById(id).classList.add('active');
}

function closeOverlay(id) {
  document.getElementById(id).classList.remove('active');
}

// ═══════════════════════════════════════════════════════
//  UPGRADE CARD RENDERING
// ═══════════════════════════════════════════════════════
function renderUpgradeCards() {
  const container = document.getElementById('upgrade-cards-container');
  container.innerHTML = '';
  const isVeteran = state.difficulty === 'veteran';

  UPGRADE_DATA.forEach(upg => {
    // Hide veteran-only upgrades in rookie mode
    if (upg.veteranOnly && !isVeteran) return;

    const tier    = state.upgrades[upg.key] || 0;
    const maxed   = tier >= upg.maxTier;
    const canBuy  = !maxed && state.cash >= upg.cost[tier];
    const cost    = maxed ? 0 : upg.cost[tier];

    // Build tier pip row
    const pips = Array.from({length: upg.maxTier}, (_,i) => {
      const cls = i < tier ? (maxed && i === upg.maxTier-1 ? 'tier-pip filled maxed' : 'tier-pip filled') : 'tier-pip';
      return `<div class="${cls}"></div>`;
    }).join('');

    // Current description (tier 0 = "not started" → show tier 1 desc as preview)
    const descIdx = Math.max(0, tier - 1);
    const desc    = tier === 0 ? upg.desc[0] : upg.desc[tier - 1];
    const nextTxt = maxed ? '' : upg.next[tier];

    const card = document.createElement('div');
    card.className = 'upgrade-card' + (upg.veteranOnly ? ' veteran-only' : '');
    card.innerHTML = `
      <div class="upgrade-card-header">
        <div class="upgrade-card-name">${upg.label}</div>
        <div class="upgrade-card-tier">${maxed ? 'MAXED' : `TIER ${tier}/${upg.maxTier}`}</div>
      </div>
      ${upg.veteranOnly ? '<div class="upgrade-veteran-tag">VETERAN ONLY</div>' : ''}
      <div class="upgrade-tier-pips">${pips}</div>
      <div class="upgrade-card-desc">${desc}</div>
      <div class="upgrade-card-next">${nextTxt}</div>
      ${maxed
        ? '<button class="btn-upgrade maxed" disabled>✓ COMPLETE</button>'
        : `<button class="btn-upgrade" ${canBuy ? '' : 'disabled'}
             onclick="purchaseUpgrade('${upg.key}')">
             ${canBuy ? `UPGRADE — \$${cost.toLocaleString()}` : `\$${cost.toLocaleString()} NEEDED`}
           </button>`
      }`;
    container.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════
//  PURCHASE UPGRADE
// ═══════════════════════════════════════════════════════
function purchaseUpgrade(key) {
  const upg  = UPGRADE_DATA.find(u => u.key === key);
  if (!upg) return;
  const tier = state.upgrades[key] || 0;
  if (tier >= upg.maxTier) return;
  const cost = upg.cost[tier] || 0;
  if (state.cash < cost) return;

  state.cash -= cost;
  state.upgrades[key] = tier + 1;

  // Deliver starter stock when inventory quality is upgraded
  if (key === 'inventory') {
    deliverStarterStock(state.upgrades.inventory);
  }

  // Refresh displays
  document.getElementById('upg-cash-display').textContent =
    '$' + state.cash.toLocaleString();
  document.getElementById('hud-cash').textContent =
    '$' + state.cash.toLocaleString();

  renderUpgradeCards();
  renderLotStatus();
  drawLotScene();
  playSoundUpgrade();
  saveGame();
  checkWinCondition();
}

// ═══════════════════════════════════════════════════════
//  LOT STATUS SIDEBAR (dynamic)
// ═══════════════════════════════════════════════════════
function renderLotStatus() {
  const list = document.getElementById('lot-status-list');
  if (!list) return;
  const isVeteran = state.difficulty === 'veteran';

  // Only show base 5 upgrades in sidebar (keeps it compact)
  const baseUpgrades = UPGRADE_DATA.filter(u => !u.veteranOnly);
  list.innerHTML = baseUpgrades.map(upg => {
    const tier  = state.upgrades[upg.key] || 0;
    const maxed = tier >= upg.maxTier;
    const pip   = maxed ? 'pip-done' : tier > 0 ? 'pip-active' : 'pip-locked';
    return `<div class="upgrade-item">
      <div class="upgrade-pip ${pip}"></div>
      <div class="upgrade-name">${upg.label}</div>
      <div class="upgrade-tier">${maxed ? '✓' : `Tier ${tier}/${upg.maxTier}`}</div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════
//  WIN CONDITION
// ═══════════════════════════════════════════════════════
function checkWinCondition() {
  // Win = all 5 base upgrades at max tier AND reputation >= 4 stars
  const baseKeys = ['signage','coffee','inventory','appraisal','aesthetics'];
  const allMaxed = baseKeys.every(k => (state.upgrades[k] || 0) >= 3);
  if (!allMaxed) return;
  if (state.reputation < 4) {
    // Show a nudge if upgrades are maxed but rep isn't there yet
    showRepNudge();
    return;
  }

  const repStars = Math.round(state.reputation);
  const repStr   = '★'.repeat(repStars) + '☆'.repeat(5 - repStars);

  const winLines = [
    `It took ${state.day} days, $${state.totalEarned.toLocaleString()} in commissions, and a tolerance for human nature that most people simply don't have.`,
    `The lot is fully upgraded. The sign is visible from the highway. The coffee is genuinely good. You did this.`,
    `Nobody who walked in here left quite the same. Some of them got a great car. Some of them got a car. Either way, they drove off the lot, and that's the job.`
  ];

  document.getElementById('win-body').textContent   = winLines.join(' ');
  document.getElementById('win-days').textContent   = state.day;
  document.getElementById('win-cash').textContent   = '$' + state.totalEarned.toLocaleString();
  document.getElementById('win-rep').textContent    = repStr;

  // Close upgrades overlay if open, show win
  closeOverlay('overlay-upgrades');
  closeOverlay('overlay-eod');
  setTimeout(() => openOverlay('overlay-win'), 400);
}

// ═══════════════════════════════════════════════════════
//  END-OF-DAY OVERLAY
// ═══════════════════════════════════════════════════════
function showEndOfDay(result, statDeltas) {
  if (!result) return;  // guard against null (can happen if advanceDay fires first)

  const { outcome, commission, customerName } = result;
  const bannerText = {
    sold:    '💰 Sale Closed',
    lowball: '🤝 Lowball Deal',
    walkout: '🚪 Walked Out',
    blowup:  '💥 Scene Made'
  };
  const tradeNote = result.tradeIn
    ? ` + acquired ${result.tradeIn} ($${result.tradeInValue.toLocaleString()} trade value).`
    : '';
  const subtitles = {
    sold:    `${customerName} drove off happy. Probably.${tradeNote}`,
    lowball: `${customerName} drove a hard bargain.${tradeNote}`,
    walkout: `${customerName} walked. Not every day is a sale. That's the game.`,
    blowup:  `${customerName} made a scene. Your reputation took a small hit. Shake it off.`
  };

  const banner = document.getElementById('eod-banner');
  banner.textContent = bannerText[outcome] || 'Day Done';
  banner.className   = `eod-outcome-banner ${outcome}`;

  const perkEarned = perkPointsEarned();
  const perkAvail  = perkPointsAvailable();
  const perkSuffix = perkEarned < PERK_CONFIG.lifetimeCap
    ? ` +${result.outcome === 'sold' ? PERK_CONFIG.pointsPerInteraction + PERK_CONFIG.bonusFullSale : PERK_CONFIG.pointsPerInteraction} perk pt${result.outcome === 'sold' ? 's' : ''}.`
    : '';
  document.getElementById('eod-subtitle').textContent = (subtitles[result.outcome] || '') + perkSuffix;
  const r_comm = result.commission;
  document.getElementById('eod-commission').textContent =
    r_comm > 0 ? `+$${r_comm.toLocaleString()}` : '$0';
  document.getElementById('eod-commission').className  =
    'eod-stat-val ' + (r_comm > 0 ? 'positive' : 'neutral');
  document.getElementById('eod-total').textContent =
    '$' + state.cash.toLocaleString();

  const r = Math.max(1, Math.min(5, Math.round(state.reputation)));
  document.getElementById('eod-rep').textContent = '★'.repeat(r) + '☆'.repeat(5 - r);

  // Stat shift chips
  [['charm','eod-charm-shift'], ['honesty','eod-honest-shift'], ['closing','eod-closing-shift']].forEach(([k,id]) => {
    const v   = statDeltas[k] || 0;
    const el  = document.getElementById(id);
    el.textContent = v > 0 ? `+${v}` : v < 0 ? `${v}` : '—';
    el.className   = 'eod-shift-chip-val ' + (v > 0 ? 'shift-up' : v < 0 ? 'shift-down' : 'shift-flat');
  });

  openOverlay('overlay-eod');
}

function openUpgradesFromEod() {
  closeOverlay('overlay-eod');
  openOverlay('overlay-upgrades');
}

function eodNextDay() {
  cancelEodTimers();
  closeOverlay('overlay-eod');
  advanceDay();
}


// ═══════════════════════════════════════════════════════
//  REPUTATION NUDGE
//  Shown when all upgrades are maxed but rep < 4 stars.
//  Fires from checkWinCondition instead of win screen.
// ═══════════════════════════════════════════════════════
function showRepNudge() {
  const existing = document.getElementById('rep-nudge');
  if (existing) return;  // already showing
  const rep   = Math.round(state.reputation);
  const stars = '★'.repeat(rep) + '☆'.repeat(5 - rep);
  const nudge = document.createElement('div');
  nudge.id = 'rep-nudge';
  nudge.style.cssText = `
    position:fixed; bottom:60px; left:50%; transform:translateX(-50%);
    background:var(--asphalt-mid); border:1px solid var(--orange);
    border-top:3px solid var(--orange); padding:16px 24px;
    font-family:'Courier Prime',monospace; z-index:600;
    max-width:400px; width:90%; animation:slideUp 0.3s ease both;
  `;
  nudge.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:3px;
         color:var(--orange);margin-bottom:8px;">⚠ NOT QUITE YET</div>
    <div style="font-size:13px;color:var(--cream-dim);margin-bottom:12px;line-height:1.6;">
      The lot is fully upgraded — impressive. But the street hasn't decided you've earned it yet.
      You need <strong style="color:var(--yellow)">4 stars</strong> to win.
      You're at <strong style="color:var(--orange)">${stars}</strong>.
      Keep selling.
    </div>
    <button onclick="document.getElementById('rep-nudge').remove()"
      style="width:100%;padding:8px;background:var(--orange);color:var(--cream);
             border:none;border-bottom:3px solid #b7640a;
             font-family:'Oswald',sans-serif;font-size:13px;font-weight:700;
             letter-spacing:2px;cursor:pointer;">
      UNDERSTOOD
    </button>
  `;
  document.body.appendChild(nudge);
  setTimeout(() => { if (nudge.parentNode) nudge.remove(); }, 7000);
}

// ═══════════════════════════════════════════════════════
//  TUTORIAL SYSTEM
// ═══════════════════════════════════════════════════════
let tutStep = 0;

const TUTORIAL_STEPS = [
  {
    icon: '🚗',
    title: 'Welcome to the Lot',
    body: `You are a <strong>used car salesman</strong>. Your lot is a patch of dirt with eight cars and a coffee maker that works most of the time.<br><br>
           Every day a customer shows up. Your job is to <strong>read them, match them to a car, and close the deal</strong>. The character you play is enthusiastic, opportunistic, and <em>ethically flexible</em>. This is a game of caricature and lighthearted fun.`,
    detail: `<div class="detail-row">🎯 <span>Win by fully upgrading your lot and earning a 4-star reputation</span></div>
             <div class="detail-row">💰 <span>Every sale earns commission — use it to buy upgrades</span></div>
             <div class="detail-row">🔄 <span>Each customer is different. No two days are the same.</span></div>`
  },
  {
    icon: '👥',
    title: 'Know Your Customer',
    body: `Each customer has a <strong>personality archetype</strong> — an Overconfident Teen, a Bargain Hunter, a Karen, a Retiree. Each type wants something different and responds differently to your approach.<br><br>
           In <em>Rookie mode</em>, their archetype and budget are shown to help you learn. In <em>Veteran mode</em>, you read the room yourself.`,
    detail: `<div class="detail-row">😎 <span><strong style="color:var(--yellow)">Teen</strong> — wants to look cool. Cares about image over practicality.</span></div>
             <div class="detail-row">🧾 <span><strong style="color:var(--yellow)">Bargain Hunter</strong> — knows every price. Has a spreadsheet. Has macros.</span></div>
             <div class="detail-row">👴 <span><strong style="color:var(--yellow)">Retiree</strong> — patient, sharp, and has seen every trick you know.</span></div>`
  },
  {
    icon: '🎭',
    title: 'The Pitch',
    body: `Each sale plays out over <strong>3 rounds of dialogue</strong>. The customer talks. You choose how to respond.<br><br>
           In <strong>Round 2</strong>, pick a car from your inventory to pitch — this matters. A Firebird for a nervous first-time buyer works against you. A reliable Corolla for a Bargain Hunter works in your favor.`,
    detail: `<div class="detail-row"><span class="detail-tag tag-c">CHARM</span><span>Flattery, humor, building rapport. Best with social types.</span></div>
             <div class="detail-row"><span class="detail-tag tag-h">HONEST</span><span>Straight talk. Builds trust. Rewards long-term reputation.</span></div>
             <div class="detail-row"><span class="detail-tag tag-hu">HUSTLE</span><span>Pressure tactics. Higher risk, sometimes higher reward.</span></div>
             <div class="detail-row"><span class="detail-tag tag-w">WILD</span><span>Unpredictable. Could be brilliant. Could be a disaster.</span></div>`
  },
  {
    icon: '⬆',
    title: 'Growing the Lot',
    body: `Commission goes into <strong>lot upgrades</strong> — better signage, stronger coffee, cleaner inventory, faster appraisals, improved aesthetics. Each upgrade improves your lot visually and mechanically.<br><br>
           The <strong>Perk Tree</strong> lets you specialize your sales style. You can't master every branch — pick one and commit to it.`,
    detail: `<div class="detail-row">☕ <span><strong style="color:var(--yellow)">Coffee upgrade</strong> — customers arrive in a better mood</span></div>
             <div class="detail-row">🪧 <span><strong style="color:var(--yellow)">Signage upgrade</strong> — attracts better customers over time</span></div>
             <div class="detail-row">🦈 <span><strong style="color:var(--yellow)">The Closer perk</strong> — hustle choices land more reliably</span></div>
             <div class="detail-row">📋 <span><strong style="color:var(--yellow)">Straight Shooter perk</strong> — honest choices build reputation faster</span></div>`
  },
  {
    icon: '🏆',
    title: 'Winning',
    body: `Max out all <strong>5 lot upgrades</strong> and earn a <strong>4-star reputation</strong>. That's the whole job.<br><br>
           You can buy upgrades without a great reputation. You can have a great reputation without all the upgrades. But you need <em>both</em> to win. The street decides when you've earned it.`,
    detail: `<div class="detail-row">⬆ <span>Signage, Coffee, Inventory, Appraisal, Aesthetics — all to Tier 3</span></div>
             <div class="detail-row">★ <span>Reputation of 4 stars or higher</span></div>
             <div class="detail-row">💡 <span>Tip: honest choices build reputation more reliably than hustle</span></div>
             <div class="detail-row">💡 <span>Tip: match the right car to the right customer for a mood boost</span></div>`
  }
];

function startTutorial() {
  tutStep = 0;
  renderTutStep();
  showScreen('screen-tutorial');
}

function renderTutStep() {
  const step = TUTORIAL_STEPS[tutStep];
  const total = TUTORIAL_STEPS.length;

  // Pip track
  for (let i = 0; i < total; i++) {
    const pip = document.getElementById('tpip-' + i);
    if (!pip) continue;
    pip.className = 't-pip' +
      (i === tutStep ? ' active' : i < tutStep ? ' done' : '');
  }

  // Animate card out briefly then in
  const card = document.getElementById('tut-card');
  card.style.animation = 'none';
  card.offsetHeight; // force reflow
  card.style.animation = 'tutCardIn 0.3s ease both';

  document.getElementById('tut-icon').textContent   = step.icon;
  document.getElementById('tut-num').textContent    = `Step ${tutStep + 1} of ${total}`;
  document.getElementById('tut-title').textContent  = step.title;
  document.getElementById('tut-body').innerHTML     = step.body;
  document.getElementById('tut-detail').innerHTML   = step.detail;

  // Back button
  const backBtn = document.getElementById('tut-back');
  backBtn.disabled = tutStep === 0;

  // Next button
  const nextBtn = document.getElementById('tut-next');
  const isLast  = tutStep === total - 1;
  nextBtn.textContent = isLast ? "LET'S GO →" : 'NEXT →';
}

function tutNav(dir) {
  const total = TUTORIAL_STEPS.length;
  const next  = tutStep + dir;

  if (next >= total) {
    // Done — mark seen, go to lot
    finishTutorial();
    return;
  }
  if (next < 0) return;
  tutStep = next;
  renderTutStep();
}

function skipTutorial() {
  finishTutorial();
}

function finishTutorial() {
  state.tutorialSeen = true;
  saveGame();
  buildLot();
  showScreen('screen-lot');
}

// ═══════════════════════════════════════════════════════
//  SAVE / LOAD / RESET
// ═══════════════════════════════════════════════════════

/*
  localStorage is a browser key-value store that persists across sessions.
  JSON.stringify() converts the state object to a string for storage.
  JSON.parse() converts it back to an object when loading.
*/
function saveGame() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    flashSave();
  } catch(e) { /* private browsing or storage full — fail silently */ }
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    // Object.assign merges saved data into a fresh state,
    // so any new fields added in future versions get defaults.
    state = Object.assign(freshState(), JSON.parse(raw));
    return true;
  } catch(e) { return false; }
}

function flashSave() {
  const el = document.getElementById('save-flash');
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}

function showResetModal()  { document.getElementById('reset-modal').classList.add('active'); }
function hideResetModal()  { document.getElementById('reset-modal').classList.remove('active'); }

function winReset() {
  // Direct reset from win screen — no confirmation needed, you earned it
  closeOverlay('overlay-win');
  localStorage.removeItem(SAVE_KEY);
  state = freshState();
  document.getElementById('salesman-name').value = '';
  document.getElementById('btn-begin').disabled = true;
  selectDifficulty('rookie');
  showScreen('screen-title');
  checkForSave();
}

function confirmReset() {
  localStorage.removeItem(SAVE_KEY);
  state = freshState();
  hideResetModal();
  // Clear character creation form fields
  document.getElementById('salesman-name').value = '';
  document.getElementById('btn-begin').disabled = true;
  showScreen('screen-title');
  checkForSave();
}

// ═══════════════════════════════════════════════════════
//  TITLE SCREEN
// ═══════════════════════════════════════════════════════
function checkForSave() {
  const raw = localStorage.getItem(SAVE_KEY);
  const hasSave = !!raw;
  document.getElementById('btn-continue-game').style.display = hasSave ? 'block' : 'none';
  const indicator = document.getElementById('save-indicator');
  if (hasSave) {
    try {
      const s = JSON.parse(raw);
      indicator.style.display = 'block';
      indicator.textContent = s.salesmanName
        ? `${s.salesmanName.toUpperCase()} — Day ${s.day} — $${s.cash.toLocaleString()}`
        : '';
    } catch(e) { indicator.style.display = 'none'; }
  } else {
    indicator.style.display = 'none';
  }
}

function startNewGame() {
  state = freshState();
  showScreen('screen-create');
}

function continueGame() {
  if (loadSave()) {
    selectDifficulty(state.difficulty || 'rookie');
    initAudio();
    buildLot();
    showScreen('screen-lot');
  }
}

// ═══════════════════════════════════════════════════════
//  SCREEN TRANSITIONS
// ═══════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ═══════════════════════════════════════════════════════
//  CHARACTER CREATION
// ═══════════════════════════════════════════════════════
function onNameInput() {
  state.salesmanName = document.getElementById('salesman-name').value.trim();
  updateBeginButton();
}
function updateBeginButton() {
  document.getElementById('btn-begin').disabled =
    !(state.salesmanName.length >= 2);
}
function beginGame() {
  if (!state.salesmanName) return;
  state.todayCustomerIdx = getNextCustomerIndex();
  initAudio();
  saveGame();
  if (!state.tutorialSeen) {
    startTutorial();
  } else {
    buildLot();
    showScreen('screen-lot');
  }
}

// ═══════════════════════════════════════════════════════
//  LOT HUB
// ═══════════════════════════════════════════════════════
function buildLot() {
  document.getElementById('lot-title').textContent  = state.salesmanName.toUpperCase() + "'S MOTORS";
  document.getElementById('hud-day').textContent    = state.day;
  document.getElementById('hud-cash').textContent   = '$' + state.cash.toLocaleString();
  document.getElementById('scene-day').textContent  = state.day;
  selectDifficulty(state.difficulty || 'rookie');
  updateRepStars();
  updateStatBars();
  buildInventory();
  renderLotStatus();
  drawLotScene();
  loadDailyCustomer();
}

function updateRepStars() {
  const r = Math.max(1, Math.min(5, Math.round(state.reputation)));
  document.getElementById('hud-rep').textContent = '★'.repeat(r) + '☆'.repeat(5 - r);
}

function updateStatBars() {
  [['charm','charm'], ['honesty','honest'], ['closing','closing']].forEach(([key,css]) => {
    const v = Math.max(0, Math.min(100, Math.round(state.stats[key])));
    document.getElementById('bar-' + css).style.width = v + '%';
    document.getElementById('num-' + css).textContent = v;
  });
}


// ── Returns the cars currently visible in the player's lot ──
// Filters by inventory upgrade tier and veteran mode.
// tier 0 always visible. tier 1 needs upgrade >= 1. tier 2 needs upgrade >= 2.
// veteranOnly cars also need veteran mode active.
// TYPE_ORDER defines display sort for all car lists
const TYPE_ORDER = {
  economy:0, compact:1, midsize:2, fullsize:3,
  wagon:4, minivan:5, suv:6, truck:7, sports:8, luxury:9
};

function sortCars(cars) {
  return [...cars].sort((a, b) => {
    const ta = TYPE_ORDER[a.carType] ?? 5;
    const tb = TYPE_ORDER[b.carType] ?? 5;
    if (ta !== tb) return ta - tb;
    return a.price - b.price;
  });
}

function getAvailableCars() {
  // Use explicit lotInventory list (set at game start, grows via upgrades/trade-ins)
  const ids   = state.lotInventory || [];
  const isVet = state.difficulty === 'veteran';
  const cars  = CARS.filter(car => {
    if (car.veteranOnly && !isVet) return false;
    return ids.includes(car.id);
  });
  return sortCars(cars);
}

function buildInventory() {
  const grid  = document.getElementById('inventory-grid');
  const label = document.getElementById('inventory-label');
  grid.innerHTML = '';
  const visible  = getAvailableCars();
  const invTier  = state.upgrades.inventory || 0;
  if (label) label.textContent = `INVENTORY (${visible.length} CARS)`;

  const typeLabels = {
    economy:'ECONOMY', compact:'COMPACT', midsize:'MIDSIZE', fullsize:'FULL SIZE',
    wagon:'WAGON', minivan:'MINIVAN', suv:'SUV', truck:'TRUCK',
    sports:'SPORTS', luxury:'LUXURY'
  };
  let lastType = null;

  visible.forEach(car => {
    const carType = car.carType || 'midsize';
    // Insert type divider when type changes
    if (carType !== lastType) {
      lastType = carType;
      const div = document.createElement('div');
      div.style.cssText = 'font-family:"Oswald",sans-serif;font-size:10px;' +
        'letter-spacing:3px;text-transform:uppercase;color:var(--yellow);' +
        'padding:8px 0 4px;border-top:1px solid var(--asphalt-lt);margin-top:4px;';
      div.textContent = typeLabels[carType] || carType.toUpperCase();
      grid.appendChild(div);
    }
    const dots = Array.from({length:5}, (_,i) =>
      `<div class="cond-dot${i < car.condition ? ' lit':''}"></div>`).join('');
    const veteranTag = car.veteranOnly
      ? '<span style="font-family:Oswald,sans-serif;font-size:9px;color:var(--red-bright);' +
        'border:1px solid var(--red);padding:1px 4px;margin-left:4px;">VET</span>'
      : '';
    const el = document.createElement('div');
    el.className = 'car-card';
    el.innerHTML = `
      <div class="car-card-top">
        <div class="car-name">${car.emoji} ${car.name}${veteranTag}</div>
        <div class="car-price">${car.priceStr}</div>
      </div>
      <div class="car-rep">${car.rep}</div>
      <div class="car-cond">${dots}</div>`;
    grid.appendChild(el);
  });
}

// ── Difficulty ────────────────────────────────────────
function toggleDifficulty() {
  const next = state.difficulty === 'rookie' ? 'veteran' : 'rookie';
  selectDifficulty(next);
  saveGame();
  buildInventory();       // veteran cars appear/disappear immediately
  loadDailyCustomer();
}

function selectDifficulty(d) {
  state.difficulty = d;
  const rookieBtn  = document.getElementById('diff-rookie');
  const veteranBtn = document.getElementById('diff-veteran');
  const noteEl     = document.getElementById('diff-note');
  if (rookieBtn)  rookieBtn.classList.toggle('selected',  d === 'rookie');
  if (veteranBtn) veteranBtn.classList.toggle('selected', d === 'veteran');
  if (noteEl) {
    const notes = {
      rookie:  'Archetypes labeled. Car fit shown. Budget visible.',
      veteran: 'No labels. No fit hints. Read the room.'
    };
    noteEl.textContent = notes[d];
  }
  const badge = document.getElementById('hud-difficulty');
  if (badge) {
    badge.textContent = d === 'veteran' ? 'VETERAN' : 'ROOKIE';
    badge.className   = 'diff-badge' + (d === 'veteran' ? ' veteran' : '');
  }
}

// ── Customer rotation — Fisher-Yates shuffle, refills when empty ──────────
/*
  Fisher-Yates shuffle: iterate array backwards, swap each element
  with a random earlier element. Produces an unbiased random permutation.
  We store the shuffled index order in state so it persists across saves.
*/
function getNextCustomerIndex() {
  if (!state.customerOrder || state.customerOrder.length === 0) {
    const indices = CUSTOMERS.map((_,i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    state.customerOrder = indices;
  }
  return state.customerOrder.shift();
}

function getTodayCustomer() {
  // customerIndex is set at start of each day
  return CUSTOMERS[state.todayCustomerIdx !== undefined
    ? state.todayCustomerIdx
    : 0];
}

// ── Car fit scoring ────────────────────────────────────
/*
  Returns 'good', 'ok', or 'bad' based on how many of the car's tags
  match the customer's preferred and disliked tags.
*/
function getCarFit(car, customer) {
  if (!car || !customer) return 'ok';
  const goodHits = car.tags.filter(t => customer.goodTags.includes(t)).length;
  const badHits  = car.tags.filter(t => customer.badTags.includes(t)).length;
  if (goodHits >= 2 || (goodHits >= 1 && badHits === 0)) return 'good';
  if (badHits >= 2)  return 'bad';
  if (badHits === 1 && goodHits === 0) return 'bad';
  return 'ok';
}

// ── Stat weighting — high stat boosts matching choice, low stat adds risk ──
/*
  When a player picks a Charm choice, their charm score provides a small
  mood bonus if high (>50) or a penalty if low (<20). This makes stat
  investment feel meaningful without hard gating any content.
*/
function applyStatWeight(choice, moodDelta) {
  const tagToStat = { charm:'charm', honest:'honesty', hustle:'closing', wild:'charm' };
  const stat = tagToStat[choice.tag];
  if (!stat) return moodDelta;
  const val = state.stats[stat] || 33;
  let delta = moodDelta;
  if (val >= 60) delta += 5;
  if (val <= 20) delta -= 5;
  // Coffee Tier 2: wildcard choices get an extra mood cushion
  if (choice.tag === 'wild' && (state.upgrades.coffee || 0) >= 2) delta += 5;
  // Perk mood bonus for charm/honest/hustle tags
  delta += applyPerkMoodBonus(choice);
  return delta;
}

function loadDailyCustomer() {
  const engageBtn  = document.getElementById('btn-engage');
  const doneBanner = document.getElementById('day-done-banner');
  const nextDayBtn = document.getElementById('btn-next-day');

  if (state.dayDone) {
    engageBtn.disabled = true;
    doneBanner.classList.add('visible');
    nextDayBtn.classList.add('visible');
    const r = state.lastResult;
    if (r) {
      const hl = { sold:'💰 Sale closed!', lowball:'🤝 Lowball.', walkout:'🚪 Walked out.', blowup:'💥 Scene made.' };
      document.getElementById('day-result-headline').textContent = hl[r.outcome] || 'Day done.';
      document.getElementById('day-result-detail').textContent =
        r.commission > 0 ? `+$${r.commission} commission earned.` : 'No sale today.';
    }
  } else {
    engageBtn.disabled = false;
    doneBanner.classList.remove('visible');
    nextDayBtn.classList.remove('visible');
  }

  const c = getTodayCustomer();
  const isRookie = state.difficulty !== 'veteran';
  document.getElementById('customer-avatar').textContent = c.emoji;
  document.getElementById('customer-name').textContent   = c.name;
  document.getElementById('customer-archetype').textContent = isRookie
    ? `${c.archetype} — Budget ~$${c.budget.toLocaleString()}`
    : "Unknown — size 'em up";
  document.getElementById('customer-quote').innerHTML =
    `<em>"${c.rounds[0].customerLine}"</em>`;
  engageBtn.textContent = '⚡ MAKE YOUR MOVE';
  engageBtn.onclick     = startDialogue;
  const lbl = document.querySelector('.daily-card .section-label');
  if (lbl) lbl.textContent = "TODAY'S CUSTOMER";
}

function advanceDay() {
  cancelEodTimers();  // kill any pending EOD popup before moving to next day
  state.day++;
  state.dayDone          = false;
  state.lastResult       = null;
  state.todayCustomerIdx = getNextCustomerIndex();
  playSoundNextDay();
  saveGame();
  buildLot();
  showScreen('screen-lot');
}

// ═══════════════════════════════════════════════════════
//  DIALOGUE ENGINE
// ═══════════════════════════════════════════════════════
function startDialogue() {
  const c = getTodayCustomer();
  // Coffee upgrade boosts starting mood
  const coffeeTier   = state.upgrades.coffee || 0;
  const arrivalMood  = 60 + (coffeeTier >= 2 ? 10 : coffeeTier >= 1 ? 5 : 0);
  dlg = { customer:c, round:0, mood:arrivalMood, pickedCar:null, statDeltas:{charm:0,honesty:0,closing:0}, fitPending:null };

  // Populate car dropdown
  const sel = document.getElementById('dlg-car-select');
  sel.innerHTML = '<option value="">— pick a car —</option>';
  getAvailableCars().forEach(car => {
    const opt = document.createElement('option');
    opt.value = car.id;
    opt.textContent = `${car.emoji} ${car.name} — ${car.priceStr}`;
    sel.appendChild(opt);
  });
  sel.disabled = true; // enabled from round 2
  document.getElementById('dlg-car-rep').textContent = "You'll pick a car to pitch in Round 2.";

  // Set left panel info
  const isRookie = state.difficulty !== 'veteran';
  document.getElementById('dlg-avatar').textContent    = c.emoji;
  document.getElementById('dlg-cust-name').textContent = c.name;
  document.getElementById('dlg-archetype').textContent = isRookie ? c.archetype : '?';
  document.getElementById('dlg-archetype').style.opacity = isRookie ? '1' : '0.4';
  updateMoodBar();

  // Clear chat
  document.getElementById('dlg-speech-area').innerHTML = '';
  document.getElementById('dlg-back-btn').classList.remove('visible');

  addNarratorBubble(c.intro);
  showScreen('screen-dialogue');
  renderRound();
}

function renderRound() {
  const round = dlg.customer.rounds[dlg.round];
  document.getElementById('dlg-round-label').textContent = `Round ${dlg.round + 1} of 3`;

  addCustomerBubble(dlg.customer.name, round.customerLine);

  // Build choice buttons
  const box = document.getElementById('dlg-choice-btns');
  box.innerHTML = '';
  round.choices.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn ' + ch.cls;
    const perkInd = getPerkIndicatorHtml(ch.tag);
    btn.innerHTML = `<span class="choice-tag">${ch.tag.toUpperCase()}</span><span>${ch.label}</span>${perkInd}`;
    btn.onclick = () => handleChoice(idx);
    box.appendChild(btn);
  });

  // Enable car selector from round 2 onward
  if (dlg.round >= 1) {
    const sel   = document.getElementById('dlg-car-select');
    const label = document.getElementById('dlg-car-label');
    const note  = document.getElementById('dlg-car-req-note');
    sel.disabled = false;

    if (!dlg.pickedCar) {
      // Mark as required — pulse border, highlight label, disable choices
      sel.classList.add('required-empty');
      label.classList.add('required-label');
      note.classList.add('visible');
      document.getElementById('dlg-car-rep').textContent = '';
      // Disable all choice buttons until car is selected
      document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    } else {
      sel.classList.remove('required-empty');
      label.classList.remove('required-label');
      note.classList.remove('visible');
    }
  }
}

function handleChoice(idx) {
  const choice = dlg.customer.rounds[dlg.round].choices[idx];

  // Disable all choice buttons immediately to prevent double-click
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);

  addPlayerBubble(choice.text);

  // Apply car fit mood nudge once (at round 2 when car is first picked)
  let fitBonus = 0;
  if (dlg.round === 1 && dlg.fitPending) {
    fitBonus = dlg.fitPending === 'good' ? +8 : dlg.fitPending === 'bad' ? -10 : 0;
    dlg.fitPending = null;
  }

  // Stat weighting: high relevant stat boosts mood, low stat hurts it
  const weightedDelta = applyStatWeight(choice, choice.moodDelta);
  dlg.mood = Math.max(5, Math.min(100, dlg.mood + weightedDelta + fitBonus));
  updateMoodBar();

  // Accumulate stat changes
  if (choice.statHint) {
    Object.entries(choice.statHint).forEach(([k,v]) => {
      dlg.statDeltas[k] = (dlg.statDeltas[k] || 0) + v;
    });
  }

  setTimeout(() => {
    addCustomerBubble(dlg.customer.name, choice.nextLine);
    if (dlg.round === 2 && choice.outcome) {
      setTimeout(() => resolveOutcome(choice), 700);
    } else {
      dlg.round++;
      setTimeout(renderRound, 500);
    }
  }, 380);
}

function resolveOutcome(choice) {
  const { outcome, commission = 0 } = choice;

  // Apply perk outcome shift (may improve result)
  const shiftedOutcome = applyPerkOutcomeShift(outcome, choice.tag);
  const effectiveCommission = shiftedOutcome !== outcome && shiftedOutcome === 'sold'
    ? Math.round(commission * 1.2) : commission;

  const labels = {
    sold:    `✓ SOLD — +$${effectiveCommission} commission`,
    lowball: `~ LOWBALL DEAL — +$${effectiveCommission} commission`,
    walkout: `✗ WALKED OUT — $0 commission`,
    blowup:  `✗ SCENE MADE — $0 commission`
  };
  // Show perk shift note if outcome improved
  const shiftNote = shiftedOutcome !== outcome
    ? ` (★ perk: ${outcome} → ${shiftedOutcome})` : '';
  addResultBubble(shiftedOutcome, labels[shiftedOutcome] + shiftNote);
  playSoundForOutcome(shiftedOutcome);

  // Apply commission (use shifted outcome and effective commission)
  const finalOutcome    = shiftedOutcome;
  const finalCommission = shiftedOutcome !== outcome ? effectiveCommission : commission;
  state.cash += finalCommission;

  // Remove sold car from lot inventory (sold or lowball = car leaves the lot)
  if ((finalOutcome === 'sold' || finalOutcome === 'lowball') && dlg.pickedCar) {
    state.lotInventory = (state.lotInventory || []).filter(id => id !== dlg.pickedCar.id);
  }

  // Apply accumulated stat shifts (clamped 0–100)
  Object.entries(dlg.statDeltas).forEach(([k,v]) => {
    state.stats[k] = Math.max(0, Math.min(100, state.stats[k] + v));
  });

  // Reputation nudge
  const repDelta = { sold:0.3, lowball:0.1, walkout:0, blowup:-0.3 };
  state.reputation = Math.max(1, Math.min(5,
    Math.round((state.reputation + (repDelta[shiftedOutcome] || 0)) * 10) / 10
  ));

  // Track lifetime earnings
  state.totalEarned = (state.totalEarned || 0) + commission;

  // Award perk points
  const perkPtsAwarded = awardPerkPoints(outcome);

  // Apply perk stat bonus to statDeltas
  applyPerkStatBonus(choice.tag, dlg.statDeltas);

  // Capture stat deltas before clearing
  const capturedDeltas = Object.assign({}, dlg.statDeltas);

  state.dayDone    = true;
  state.lastResult = { outcome:finalOutcome, commission:finalCommission, customerName: dlg.customer.name };
  state.lastStatDeltas = capturedDeltas;
  document.getElementById('dlg-car-select').disabled = true;

  saveGame();

  // Show back button quickly
  setTimeout(() => {
    document.getElementById('dlg-back-btn').classList.add('visible');
  }, 300);

  // Schedule EOD — stored so it can be cancelled if player navigates away
  if (finalOutcome === 'sold' || finalOutcome === 'lowball') {
    scheduleEod(() => {
      offerTradeIn(finalCommission, capturedDeltas, finalOutcome);
    }, 1500);
  } else {
    const snapshotResult = Object.assign({}, state.lastResult);
    scheduleEod(() => {
      showEndOfDay(snapshotResult, capturedDeltas);
    }, 1800);
  }
}

function leaveDialogue() {
  cancelEodTimers();
  closeOverlay('overlay-eod');
  buildLot();
  showScreen('screen-lot');
}

// ── Speech helpers ──
function addNarratorBubble(text) {
  const el = document.createElement('div');
  el.className = 'bubble-narrator';
  el.textContent = text;
  appendBubble(el);
}
function addCustomerBubble(name, text) {
  const el = document.createElement('div');
  el.className = 'bubble bubble-customer';
  el.innerHTML = `<div class="bubble-who">${name}</div>${text}`;
  appendBubble(el);
}
function addPlayerBubble(text) {
  const el = document.createElement('div');
  el.className = 'bubble bubble-player';
  el.innerHTML = `<div class="bubble-who">YOU</div>${text}`;
  appendBubble(el);
}
function addResultBubble(outcome, text) {
  const el = document.createElement('div');
  el.className = `bubble bubble-result ${outcome}`;
  el.textContent = text;
  appendBubble(el);
}
function appendBubble(el) {
  const area = document.getElementById('dlg-speech-area');
  area.appendChild(el);
  setTimeout(() => area.scrollTop = area.scrollHeight, 40);
}

// ── Mood bar ──
function updateMoodBar() {
  const fill = document.getElementById('dlg-mood-fill');
  fill.style.width = dlg.mood + '%';
  fill.className = 'dlg-mood-fill ' + (dlg.mood < 30 ? 'low' : dlg.mood < 60 ? 'medium' : 'high');
}

// ── Car selector ──
function onCarSelect() {
  const car = CARS.find(c => c.id === document.getElementById('dlg-car-select').value);
  dlg.pickedCar = car || null;
  const repEl = document.getElementById('dlg-car-rep');
  const sel   = document.getElementById('dlg-car-select');
  const label = document.getElementById('dlg-car-label');
  const note  = document.getElementById('dlg-car-req-note');

  if (!car) {
    repEl.innerHTML = '';
    // Re-apply required state if they deselect back to blank
    if (dlg.round >= 1) {
      sel.classList.add('required-empty');
      label.classList.add('required-label');
      note.classList.add('visible');
      document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    }
    return;
  }

  // Car selected — remove required state, enable choices
  sel.classList.remove('required-empty');
  label.classList.remove('required-label');
  note.classList.remove('visible');
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = false);

  const isRookie = state.difficulty !== 'veteran';
  let html = `<span style="font-style:italic">${car.rep}</span>`;

  if (dlg.customer) {
    const fit = getCarFit(car, dlg.customer);
    dlg.fitPending = fit;
    if (isRookie) {
      const fitLabels = {
        good: '<span class="fit-tag fit-good">✓ GOOD MATCH</span>',
        ok:   '<span class="fit-tag fit-ok">~ NEUTRAL</span>',
        bad:  '<span class="fit-tag fit-bad">✗ POOR FIT</span>'
      };
      html += '<br>' + fitLabels[fit];
    }
  }
  repEl.innerHTML = html;
}

// ═══════════════════════════════════════════════════════
//  PENNANTS
// ═══════════════════════════════════════════════════════
function buildPennants() {
  const strip = document.getElementById('pennant-strip');
  if (!strip) return;
  const count = Math.floor(window.innerWidth / 36) + 2;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'pennant';
    p.style.left = (i * 36) + 'px';
    p.style.borderTopColor = PENNANT_COLORS[i % PENNANT_COLORS.length];
    p.style.animationDelay = (i * 0.12) + 's';
    strip.appendChild(p);
  }
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  buildPennants();
  checkForSave();
});
