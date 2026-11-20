# BHUMI COIN — MASTER PROJECT ROADMAP
Version: 1.0 | Initial date: 2026-11-20 | Owner: user | Development agent: Google Antigravity IDE | Project planner/reviewer: ChatGPT

## Vision
Build a distinctive, responsive, heritage-luxury-inspired website for a fictional coin named **Bhumi Coin**, then use the project to learn blockchain fundamentals, smart contracts, token development, testing, and a safe testnet integration. It is a lighthearted personal tribute and an educational exercise, **not an investment product or fundraiser**.

## Hard constraints
1. **$0 out-of-pocket total.** No paid domains, subscriptions, paid APIs, premium assets, infrastructure upgrades, real cryptocurrency purchases, or production blockchain transactions. Stop for user approval if a step would incur a cost. Do not assume that a free plan is unlimited.
2. **Local-first.** Complete and review each milestone on localhost before any public deployment. No remote deployment or GitHub push unless separately authorized.
3. **Real vs mock must be explicit.** Until testnet integration, the website contains NO live crypto, token balances, market prices, payments, or real claims. Mark demonstrations as fictional/educational. Never present mocked metrics as live.
4. **Original brand design.** Draw inspiration from heritage country clubs and quiet-luxury fashion, but do not copy the Ralph Lauren logo, Polo imagery, typography assets, proprietary photos, or layouts.
5. **Accessibility and resilience.** Keyboard navigation, semantic HTML, focus states, contrast, reduced-motion support, WebGL fallback, responsive layout, no horizontal scrolling, fast initial load.
6. **Quality gates.** Every milestone must have explicit acceptance criteria, tested commands, a short status report, and at most one clearly scoped change set. Fix root causes; do not pile on dependencies and ad-hoc patches.
7. **Security.** No secrets or private keys in source control or frontend env files. Never request a friend's wallet, private keys, real-money transfer, or photo without consent. Later wallet connection must be opt-in and testnet-only.

## Brand system
- Brand: **Bhumi Coin**, displayed as **BHUMI** / **COIN** in restrained premium typography.
- Possible emblem: original raised 'B' in an engraved laurel-style seal. No horses, polo-player icons, or famous luxury-brand marks.
- Art direction: 'an old-world private society that accidentally invented a cryptocurrency'; charming and playful without stereotypical crypto neon, rockets, candlesticks, or moon charts.
- Palette: forest `#152B24`, ivory `#F4EFE4`, antique gold `#B89858`, midnight navy `#1E2936`, oxblood `#642E33`.
- Fonts: locally bundled, open-license serif for display and open-license clean sans for UI. Favor Cormorant Garamond and Manrope or compatible alternatives, confirming license.
- Visual motifs: numismatic engraving, linen/paper texture via CSS, fine ornamental borders, subtle editorial rules, airy grid, dramatic editorial crop without third-party copyright violation.
- Suggested microcopy: "Some legends are born. Others are minted." / "A currency of excellent company." / "Not all fortunes are measured in money."
- Fun, low-risk interaction: **Flip the Coin**: the coin animates and presents one of several clever, fictional ‘fortune’ messages. This is entertainment only and doesn't mint or claim tokens.

## Stack / repository shape
- Frontend: Vite + React + TypeScript, Tailwind CSS, Three.js + `@react-three/fiber` (optionally Drei only if genuinely necessary).
- Tests: React Testing Library + Vitest for key UI interactions; lightweight browser inspection / optional Playwright if already practical. ESLint + TypeScript checks; production Vite build.
- Hosting later: Vercel Hobby static frontend, no serverless functions, free `*.vercel.app` URL, personal/non-commercial use.
- Blockchain later: Hardhat 3 local simulated EVM, Solidity, OpenZeppelin ERC-20, testnet only when free faucet availability is confirmed.
- Repo layout proposal:
  ```
  bhumi-coin/
    AGENTS.md                 # Durable rules for Antigravity; always re-read
    PROJECT_PLAN.md           # Phases and acceptance criteria; update progress
    README.md                 # Setup, commands, purpose, educational disclaimer
    package.json
    src/
      app/
      components/
        layout/
        sections/
        three/
        ui/
      data/
      styles/
      tests/
    public/
    contracts/                # ONLY added in blockchain phase
  ```
- Favor a simple modular component structure. Avoid global state, CMS, backend, auth, payment providers, analytics trackers, and databases in phase 1.

## Execution stages (sequential, gated)

### Stage 0 — Brief and technical setup
**Goal:** A reproducible repo with pinned compatible dependencies and a documented aesthetic direction.
Deliverables: Vite scaffold, package scripts, `.gitignore`, README, `AGENTS.md`, `PROJECT_PLAN.md`, clean component skeleton.
Checks: `npm install`, `npm run typecheck`, `npm run lint`, `npm run build` all pass. No paid services.
Exit: User can start the site locally.

### Stage 1 — Visual MVP (FIRST ACTIVE MILESTONE)
**Goal:** An original, premium, responsive website that is genuinely pleasant to show a friend, with a 3D hero coin.
Sections:
1. Compact editorial top bar / header with genuine functioning anchor links, accessible mobile menu.
2. Hero: "Some legends are born. Others are minted."; visible Bhumi Coin identity, gorgeous Three.js/R3F gold coin, restrained motion.
3. The Story: fictional origin, personality and humor; no false claims about financial value.
4. The Coin: magnified details: original embossed B seal, ornamental edge, materials, flip interaction with playful fortunes.
5. The Society: playful aspirational manifesto / invitations, not membership signup or an actual token claim.
6. Footer: navigation, explicit "Fictional concept • Blockchain learning project • No financial value" disclaimer.
Functionality: scroll-to-section anchors, mobile navigation, coin flip, responsive WebGL fallback, reduced motion.
Quality: 320, 375/390, 768, 1024, 1440px widths; portrait and landscape if possible. No horizontal overflow. Touch targets >= 44px. Keyboard functionality, focus visible, readable text. On small screens and low GPU, favor performance and fallback over 3D flourish.
Exit: Local demo loads, animations do not jitter, all UI works, typecheck/lint/tests/build pass.

### Stage 2 — Editorial polish and production readiness
**Goal:** Professional visual consistency after feedback on the first localhost demo.
Deliverables: spacing/typography correction, accessible contrast, performance improvements, metadata/OG image made with original text/vector artwork, favicon, loading strategy, error boundary and fallback, stable lockfile. Optional tasteful scroll reveals, but no motion dependency bloat.
Checks: screenshots at target breakpoints, page interaction tests; reasonable Lighthouse targets on test hardware (avoid treating a synthetic score as proof). Ensure reduced motion, keyboard, no WebGL crash, no missing images, no console errors.
Exit: User approves visual quality; no open critical bugs.

### Stage 3 — Public demo (Vercel, only after approval)
**Goal:** Share an accessible URL at no cost.
Deliverables: GitHub repo if user approves; Vercel Hobby project configured as static Vite site, deployment from Git repo, free `vercel.app` subdomain; no custom domain purchase or paid upgrades. Add `vercel.json` only if routing necessitates it. Confirm Vercel Hobby remains noncommercial.
Checks: production `npm run build`, live link opens on desktop/mobile, no uncommitted secrets, no private info in metadata, no broken assets, WebGL fallback stable.
Exit: User can share the link with friend(s) without payment.

### Stage 4 — Blockchain fundamentals laboratory (local only)
**Goal:** Learn the concepts behind the UI before writing a token.
Build a separate `/lab` educational module: visual block chain of linked hashes, transactions, account balances, tamper demonstration, blocks versus smart contracts, proof-of-work as an *optional* small simulator (not used for actual mining). Explain hashes, signatures, public/private keys, transaction lifecycle, consensus, gas and network fees. A browser-only educational model must say it is a simulation, not a secure real chain.
Exit: User can explain what makes a chain tamper-evident and why tokens don't require creating a new chain.

### Stage 5 — First Solidity contract (local only)
**Goal:** Understand state, events, functions, access control and on-chain tests.
Add `contracts/` with Hardhat 3 and a minimal tutorial contract. Write tests for state transitions, reverts, event emission; connect a simulated UI to a local EVM only once the beginner contract passes.
Exit: Repeatable local tests; documented commands and concept explanations.

### Stage 6 — Bhumi Coin ERC-20 educational token (local only)
**Goal:** Create a standards-based token in a local development network.
Use a minimal OpenZeppelin ERC-20 implementation. Candidate settings **for later confirmation**: name `Bhumi Coin`, symbol `BHUMI`, fixed initial supply `1,000,000` whole tokens, conventional 18 decimals, minted once to local deployer; no unneeded owner minting, taxes, blacklists, upgradeability or trading logic. This token is not deployed in Stage 1.
Tests: initial supply, deployer balance, transfers, insufficient balance revert, approvals/allowances, transferFrom, events, decimals, zero-address behavior, conservation of supply. Run static checks on local code; never rely on AI alone for smart-contract security.
Exit: All tests pass locally and user understands ERC-20 balances vs native currency.

### Stage 7 — Optional zero-cost testnet + front-end read/write lab
**Goal:** Experience an actual public testnet without spending real money.
Only proceed if free faucet test tokens can be obtained and user approves deploying to a public **testnet**, e.g. Sepolia. Some faucets have eligibility/rate restrictions; if none is accessible for free, remain on local Hardhat. Never purchase test ETH or switch to mainnet to 'unblock' progress.
Deliverables: documented deployed testnet contract and explorer link if successful, a clearly labeled testnet wallet-connect lab with read supply/balances and an opt-in test transfer. Warn that wallet actions are test-only. Site remains informational and non-commercial.
Exit: Demonstrable testnet transaction if available at $0; otherwise strong local simulation is acceptable.

### Stage 8 — Review, learning recap, maintenance
**Goal:** Preserve what was learned rather than accumulating features.
Deliverables: architecture overview, local command reference, glossary, 'what we learned' notes, all dependencies/security checks, test coverage summary, final $0 cost audit. Optional privacy-sensitive custom tribute details only with friend's consent.
Exit: Public demo stable, educational lab reproducible, no paid service.

## Change control / no-loop protocol
Before each Antigravity prompt:
- Give it a **single stage** with exact objective, non-goals and acceptance tests.
- Make it read `AGENTS.md` and `PROJECT_PLAN.md`, inspect existing code, and preserve working features.
- Require it to reproduce an issue and inspect relevant code before editing; do not rewrite the site for cosmetic mistakes.
- Limit new dependencies; don't shotgun-install packages to resolve one error.
- Require it to run actual commands and report observed pass/fail instead of claiming success from inspection.
- Stop after the accepted milestone; no unsupervised progression to the next stage.

After each Antigravity run, user shares with project planner:
1. Screenshot(s) or short visual description of localhost at desktop and mobile.
2. Terminal output (typecheck, lint, tests, build).
3. Brief summary of files changed and anything blocked.
4. Current local URL.

The planner then produces a tightly scoped next prompt. Do not issue a generic "fix everything" prompt.

## First milestone: acceptance checklist
- [ ] Original brand, with custom B emblem and antique coin (no copied trademarks).
- [ ] High-quality desktop hero and attractive stacked mobile version.
- [ ] Working 3D coin with graceful 2D fallback and optional interaction.
- [ ] Working header navigation and keyboard-friendly mobile menu.
- [ ] Clearly fictional presentation; no real trading, wallet, investment claims, pricing, or fake live data.
- [ ] `prefers-reduced-motion` obeyed.
- [ ] No runtime errors, broken links, accidental horizontal overflow.
- [ ] `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build` all actually pass.
- [ ] Localhost URL and commands printed by the agent.
- [ ] No remote deployment, secrets, payment, or mainnet activity.

## Decision log
- D001: Vite React static frontend instead of a heavier server-rendered stack.
- D002: Three.js through React Three Fiber; progressive enhancement / 2D fallback.
- D003: Heritage-luxury *inspired* identity, not a branded Ralph Lauren clone.
- D004: $0 and local-first with Vercel Hobby for personal noncommercial demo.
- D005: Use local blockchain and later optional public testnet; no mainnet.
- D006: No real wallet or token purchase features in the first frontend milestone.

Status: Stage 1 pending. User will review localhost after first Antigravity implementation.
