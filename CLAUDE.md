# Lot Lizard — Used Car Salesman Game
## CLAUDE.md — Project Handoff Document

---

## Project Overview

A single-player browser game where you play a used car salesman. Match customers
to cars, earn commissions, upgrade your lot, build a reputation. Lighthearted,
caricature-driven humor. Playable offline with no internet connection required.

**Entry point:** `index.html`
**Tech:** Vanilla JS, CSS, SVG, Web Audio API. No frameworks, no build tools.
**Offline:** All fonts load from Google Fonts (requires internet on first load).
Everything else is self-contained.

---

## File Structure

```
lotlizards/
  index.html          # HTML shell only — structure and DOM elements
  css/main.css        # All styles
  js/game.js          # All game logic, data, and state
  archive/            # Old monolithic lot_lizard.html (reference only)
  CLAUDE.md           # This file
```

---

## Current Phase Status

| Phase | Status | Description |
|-------|--------|-------------|
| 1 | ✅ Complete | Title, character creation, lot hub shell |
| 2 | ✅ Complete | Dialogue engine, autosave, reset |
| 3 | ✅ Complete | 8 customers, car matching, stat weighting, difficulty |
| 4 | ✅ Complete | Upgrade overlay, economy loop, win condition |
| 5 | ✅ Complete | Perk tree, forced specialization |
| 6 | ✅ Complete | Dynamic lot SVG, Web Audio, 45-car roster |
| 7 | ✅ Complete | Buy screen, seller archetypes, appraisal, trade-ins |
| 8 | 🔄 In Progress | 28 customers, dialogue rebalance, perk economy rebalance |

---

## Phase 8 Remaining Tasks

**Task 1 — CUSTOMERS array replacement (primary task for this session)**

The CUSTOMERS array in `js/game.js` currently has 8 customers (lines ~263–794).
Replace the entire block with 28 fully written customers.

The 8 existing customers need rebalancing:
- Honest choices should NOT always work — each archetype responds differently
- Wildcard = genuine 50/50 (sometimes +20 mood, sometimes -15)
- Hustle works on Status Chaser and Alpha Male; backfires on Retiree and Outdoorsy
- See the Customer-Technique Matrix below

The 20 new archetypes to add:
Soccer Mom, Midlife Crisis, College Kid, Rideshare Driver, Contractor,
Recently Divorced Woman, Hypochondriac, Influencer, Mechanic's Wife,
Cheapskate, Eco Warrior, Small Business Owner, Recent Graduate, Out-of-Towner,
Conspiracy Guy, Lottery Winner, Widow, Petrolhead, Fleet Manager, Nervous Parent

**Task 2 — Remove hardcoded car references from all dialogue**

All customer dialogue currently contains hardcoded car names ("the Firebird",
"the Corolla", "the Neon"). Replace with helper functions already defined:
- `carName()`  → returns dlg.pickedCar.name or 'this car'
- `carShort()` → returns 'the Civic' style short name or 'it'
- `carType()`  → returns dlg.pickedCar.carType or 'vehicle'

**Task 3 — Customer rotation update**
`getNextCustomerIndex()` uses `CUSTOMERS.length` automatically — no change needed
once the array is expanded to 28.

**Task 4 — Trade-in eligibility for new customers**
Add these new customers to TRADEIN_CUSTOMERS in game.js:
- Midlife Crisis: "One more thing — I have the old car outside if you want it."
- Recently Divorced Woman: "Actually... I have my ex's car I need to get rid of."
- Widow: "Harold's car is still in the garage. Would you take a look at it?"
- Mechanic's Wife: "My husband says to ask about the trade-in value."
- Small Business Owner: "I'll trade in the old one if the price is right."
- Fleet Manager: "The vehicles we're replacing — you interested in buying them?"

**Task 5 — Perk point economy rebalance**
In `js/game.js`, find `const PERK_CONFIG` and adjust:
```javascript
const PERK_CONFIG = {
  pointsPerInteraction: 1,  // consider reducing to every other sale
  bonusFullSale:        1,
  lifetimeCap:         12,  // may need to increase for 28-customer arc
};
```
With 28 customers the game runs ~28+ days minimum. Current cap of 12 may be
too easy to hit. Suggest: keep pointsPerInteraction at 1, raise lifetimeCap to 16.

**Task 6 — Upgrade cost balancing (Final Polish)**
Defer to after Task 1–5 are complete and tested.

---

## Customer-Technique Matrix

This governs moodDelta values for each choice tag per archetype.
Use this when writing/rebalancing customer scripts.

| Customer | Best Tag | Risky Tag | Honest moodDelta | Wild variance |
|----------|----------|-----------|------------------|---------------|
| Overconfident Teen | charm | honest | -5 to -8 | High ±18 |
| Bargain Hunter | honest | hustle | +20 | Low ±8 |
| First-Timer | honest+charm | hustle | +15 | Medium ±12 |
| Status Chaser | charm+hustle | honest | -10 | High ±18 |
| Outdoorsy Type | honest | hustle | +18 | Medium ±12 |
| Alpha Male | hustle+charm | honest | -8 | High ±20 |
| Karen | honest | charm | +15 | Low ±8 |
| Retiree | honest | hustle | +20 | Low ±6 |
| Soccer Mom | honest+charm | wild | +15 | Medium ±12 |
| Midlife Crisis | charm+hustle | honest | -12 | High ±20 |
| College Kid | charm | hustle | +8 | Medium ±12 |
| Rideshare Driver | honest | charm | +18 | Low ±8 |
| Contractor | honest | charm | +15 | Medium ±12 |
| Recently Divorced | charm+honest | hustle | +12 | High ±18 |
| Hypochondriac | honest | wild | +20 | Low ±8 |
| Influencer | charm | honest | -8 | High ±20 |
| Mechanic's Wife | honest | hustle | +20 | Low ±8 |
| Cheapskate | honest | charm | +15 | Low ±8 |
| Eco Warrior | honest | hustle | +18 | Medium ±12 |
| Small Business Owner | hustle+honest | wild | +10 | Medium ±12 |
| Recent Graduate | charm+honest | hustle | +12 | Medium ±12 |
| Out-of-Towner | hustle | honest | +5 | High ±18 |
| Conspiracy Guy | wild | hustle | -15 | High ±20 |
| Lottery Winner | charm | honest | -5 | High ±20 |
| Widow | honest | hustle | +20 | Low ±6 |
| Petrolhead | honest | charm | +18 | Low ±8 |
| Fleet Manager | hustle+honest | charm | +10 | Low ±8 |
| Nervous Parent | honest | hustle | +18 | Medium ±12 |

---

## Outcome Balance Target

Across all 28 customers × 4 round-3 choices = 112 outcomes total:
- sold:    ~56 (50%)
- lowball: ~31 (28%)
- walkout: ~18 (16%)
- blowup:   ~7 (6%)

After writing, verify with:
```bash
grep -o "outcome:'[a-z]*'" js/game.js | sort | uniq -c
```

---

## Key Data Structures in game.js

### CARS array (45 cars)
```javascript
{ id:'corolla94', tier:0, carType:'economy', name:"1994 Toyota Corolla",
  price:1200, priceStr:"$1,200", condition:3, emoji:"🚗",
  tags:['reliable','cheap','boring','compact','japanese'],
  rep:"Bulletproof. Beige. Will outlive everyone you love." }
```
- tier 0 = starting lot (1980s–early 2000s)
- tier 1 = Inventory Quality upgrade 1 (2003–2010)
- tier 2 = Inventory Quality upgrade 2 (2010–2017)
- veteranOnly:true = hidden in Rookie mode

### CUSTOMERS array (currently 8, expanding to 28)
```javascript
{
  id:'teen', name:"Kevin", archetype:"The Overconfident Teen",
  emoji:"😎", budget:2500,
  goodTags:['fast','loud','cool'], badTags:['boring','cheap'],
  intro:"Narrative description of customer arrival.",
  rounds: [
    {
      customerLine: "What the customer says to open this round.",
      choices: [
        { tag:'charm', cls:'charm-btn', label:"Short button label",
          text:"\"What the player says.\"",
          moodDelta:+15, statHint:{charm:+3},
          nextLine:"Customer response to this choice." },
        // ... 3 more choices
      ]
    },
    // Round 2 (same structure)
    {
      customerLine: "...",
      choices: [ /* 4 choices, no outcome field */ ]
    },
    // Round 3 — choices include outcome and commission
    {
      customerLine: "...",
      choices: [
        { tag:'charm', cls:'charm-btn', label:"...",
          text:"\"...\"",
          moodDelta:+20, statHint:{charm:+5},
          outcome:'sold', commission:480,
          nextLine:"Customer response after the outcome." },
        // ... 3 more choices with outcomes
      ]
    }
  ]
}
```

### SELLERS array (6 archetypes — used for trade-ins only)
Dave (Desperate), Gerald (Delusional), Randy (Shade Tree),
Tyler (Estate Kid), Marco (Flipper), A Guy (Suspicious).
These power the trade-in flow — they do NOT appear as standalone seller days.

### TRADEIN_CUSTOMERS object
```javascript
const TRADEIN_CUSTOMERS = {
  status:    { line:"...", emoji:'🚗' },
  alpha:     { line:"...", emoji:'🛻' },
  retiree:   { line:"...", emoji:'🚗' },
  outdoorsy: { line:"...", emoji:'🚙' },
  firsttime: { line:"...", emoji:'🚗' },
  karen:     { line:"...", emoji:'🚘' },
};
```
Key = customer id. Add new eligible customers here for Task 4.

### state object (freshState())
```javascript
{
  salesmanName, difficulty,        // 'rookie' or 'veteran'
  day, cash, reputation,           // reputation 1.0–5.0
  stats: { charm, honesty, closing }, // 0–100 each
  upgrades: { signage, coffee, inventory, appraisal, aesthetics }, // 0–3
  customerOrder: [],               // shuffled index queue
  totalEarned, dayDone, lastResult,
  lastStatDeltas,
  perks: { charmer, shooter, closer }, // 0–3 each
  perkPointsRaw,
  lotInventory: ['corolla94',...], // car IDs currently on lot
  tutorialSeen,
  acquisitionCosts: {},            // carId → price paid
  todayCustomerIdx,
  difficulty
}
```

---

## Game Flow

```
Title → Character Creation → Tutorial (new games only) → Lot Hub
  Lot Hub:
    - Daily customer OR day-done state
    - PERKS / UPGRADES / BUY CARS buttons (overlays)
    - NEXT DAY button (after day done)
  Customer Dialogue:
    Round 1 → Round 2 (pick car, required) → Round 3 → Outcome
    → [Trade-in offer for eligible customers] → EOD overlay
  EOD Overlay:
    - Commission, stat shifts, perk points earned
    - UPGRADES button or NEXT DAY
```

---

## Win Condition

All 5 base upgrades at Tier 3 **AND** reputation >= 4 stars.
Checked in `checkWinCondition()` after every upgrade purchase.
If upgrades maxed but rep < 4: orange nudge notification appears.

---

## Difficulty Modes

| Feature | Rookie | Veteran |
|---------|--------|---------|
| Archetype label | Shown | Hidden ("?") |
| Budget hint | Shown | Hidden |
| Car fit indicator | Shown (✓/~/✗) | Hidden (mood reacts silently) |
| Veteran-only cars | Hidden | Available at Inventory T2 |
| Veteran-only upgrades | Hidden | Back Lot, Reputation Network, Black Book |
| Perk indicators on choices | Shown | Hidden |

Toggled by clicking the ROOKIE/VETERAN badge in the topbar.
Stored in `state.difficulty`.

---

## Upgrade System

5 base upgrades × 3 tiers. Costs: [first, second, third].
Tier 3 of all 5 + 4-star reputation = win condition.

| Upgrade | key | Costs | Effect |
|---------|-----|-------|--------|
| Signage | signage | 300/700/1200 | Lot SVG changes, status customers unlock |
| Coffee | coffee | 200/500/900 | Arrival mood bonus, wildcard cushion |
| Inventory | inventory | 500/1000/1800 | Unlocks tier 1/2 cars, delivers 5 starter cars |
| Appraisal | appraisal | 350/750/1400 | Condition visibility, buy-side prep |
| Aesthetics | aesthetics | 400/900/1600 | Lot SVG upgrades, car colors light up |

3 veteran-only upgrades also exist (Back Lot, Reputation Network, Black Book).

---

## Perk Tree

3 branches × 3 tiers. Lifetime cap: 12 points.
Cannot max all branches (9 points per branch × 3 = 27 > 12 cap).

| Branch | key | Tag buffed | Tier costs |
|--------|-----|-----------|------------|
| The Charmer | charmer | charm | 2/3/4 pts |
| The Straight Shooter | shooter | honest | 2/3/4 pts |
| The Closer | closer | hustle | 2/3/4 pts |

Points earned: 1 per interaction, +1 bonus for full-price sold.
Stored in `state.perkPointsRaw` (capped at read time).

---

## Lot SVG

Drawn dynamically by `drawLotScene()` based on upgrade state.
Called from `buildLot()` and after every upgrade purchase.

Visual states driven by:
- `state.upgrades.aesthetics` (0–3): ground, lighting, car colors
- `state.upgrades.signage` (0–3): plywood → lit panel → jumbotron
- `state.upgrades.coffee` (0–3): cart → stand → espresso bar

---

## Web Audio

All sounds synthesized via Web Audio API. No external files.
Initialized on first user gesture (`initAudio()` in beginGame/continueGame).
Master gain node at 0.6. Mute toggle in topbar (🔊/🔇).

Sound functions:
- `playSoundSold()` — cash register ding
- `playSoundLowball()` — muted two-tone
- `playSoundWalkout()` — door thud
- `playSoundBlowup()` — descending buzzer
- `playSoundUpgrade()` — click + rising tone
- `playSoundPerk()` — three ascending tones
- `playSoundNextDay()` — morning chime
- `playSoundForOutcome(outcome)` — dispatcher

---

## Car Reference Helpers (use in all dialogue)

```javascript
carName()   // → "2004 Toyota Camry" or "this car"
carShort()  // → "the Camry" or "it"
carType()   // → "midsize" or "vehicle"
```

These reference `dlg.pickedCar` — the car selected in Round 2.
**Never hardcode car names in customer dialogue.**

---

## EOD Timer System

All end-of-day popups use `scheduleEod(fn, delay)` — never raw `setTimeout`.
This allows `cancelEodTimers()` to kill pending popups when the player
navigates away, preventing the "popup appears on next day" bug.

```javascript
scheduleEod(() => showEndOfDay(snapshot, deltas), 1800);
cancelEodTimers(); // called in advanceDay(), leaveDialogue(), eodNextDay()
```

---

## Testing Commands

```bash
# Syntax check JS
node --check js/game.js

# Verify outcome balance
grep -o "outcome:'[a-z]*'" js/game.js | sort | uniq -c

# Check car count by tier
grep -c "tier:0," js/game.js
grep -c "tier:1," js/game.js
grep -c "tier:2," js/game.js

# Verify no hardcoded car names in customer dialogue
# (check for specific model names that should use carName() instead)
grep -n "Firebird\|Corolla\|Neon\|Silverado\|Outback" js/game.js | grep "nextLine\|text:"

# Count customers
grep -c "id:'" js/game.js
```

---

## Git Workflow

```bash
# Before starting work
git status
git pull origin main

# After completing a task
git add js/game.js css/main.css index.html
git commit -m "feat: description of change"
git push origin main
```

Branch: `main`
Remote: `origin`

---

## Known Issues / Deferred Items

- Upgrade cost balancing deferred to Final Polish (needs full 28-customer economy data)
- Dialogue review for new customers: all references to specific cars must use
  carName()/carShort() — verify with the grep command above after writing
- When expanding to 28 customers, review PERK_CONFIG lifetime cap
- Phase 7 seller archetypes (Dave, Gerald, Randy, Tyler, Marco, A Guy) are
  in the SELLERS array but only fire via trade-in flow, never as standalone days

---

## What NOT to Change

- The CSS import in index.html: `<link rel="stylesheet" href="css/main.css">`
- The JS import in index.html: `<script src="js/game.js"></script>`
- The `eodTimers` / `scheduleEod` / `cancelEodTimers` system — fragile, working
- The `state._lastResultSnapshot` pattern in resolveOutcome — prevents null errors
- The `sortCars()` function and TYPE_ORDER constant — used everywhere
- The `getAvailableCars()` function — filters by lotInventory, tier, and veteran mode
