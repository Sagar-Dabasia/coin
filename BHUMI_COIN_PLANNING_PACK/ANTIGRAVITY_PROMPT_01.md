# ANTIGRAVITY PROMPT 01 — BUILD THE BHUMI COIN LOCALHOST FRONTEND

You are my senior frontend engineer, visual designer, accessibility engineer and QA reviewer. Build the **first local-only milestone** of an original website called **Bhumi Coin**. This is a playful personal educational tribute inspired by old-money/heritage private clubs; it is not an investment service. I am using this project to learn blockchain later. For this task implement **only the complete polished frontend**, not blockchain.

## Authority and constraints
- The project is absolutely **$0**. Only free, open-source packages, open-license bundled fonts and self-created SVG/CSS/procedural graphics. No premium assets, services, paid APIs or paid infrastructure.
- Work in the currently open project folder. Inspect it first. If empty, scaffold from scratch. Do not overwrite unrelated files without reason.
- Create and keep up to date `AGENTS.md`, `PROJECT_PLAN.md`, and `README.md` with current constraints and stage status. PROJECT_PLAN should contain the full stages summarized below. Re-read them on future work.
- Do NOT deploy, push to GitHub, create remote repositories, create blockchain contracts, install wallet extensions, or connect to paid APIs during this task.
- Work directly and sequentially. Do not spawn parallel coding agents, task swarms, autonomous endless revision cycles, or background workflows. Browser inspection is permitted for QA when available.
- Do not tell me to manually fix build issues. Diagnose and fix them in this pass. Do not claim tests passed unless commands actually ran. Stop if an external requirement would cost money.
- Preserve originality: never use Ralph Lauren/Polo brand assets, horse/player logos, copyrighted campaign photography, or cloned layouts. The brand must be our own.

## Technology
Build with **Vite + React + TypeScript**, **Tailwind CSS**, **Three.js + @react-three/fiber**. Use a maintained, compatible stable package set and commit the lockfile. Add only genuinely necessary libraries. Prefer CSS for ordinary hover/reveal animations; avoid bloated motion libraries. Use semantic components and modular folder structure. Keep architecture simple enough to move to Vercel Hobby as a static site later.

## Visual design brief (non-negotiable)
Visual voice: classic private social club meets numismatic artistry — exceptional typography, carefully balanced white space, antique-gold trim, rich green panels, paper/linen textures rendered in CSS, editorial asymmetry, understated cinematic movements. It should feel like a premium handcrafted brand website, **NOT** a default AI-generated SaaS page, generic crypto landing page or template.

Palette: forest green `#152B24`; warm ivory `#F4EFE4`; antique gold `#B89858`; ink navy `#1E2936`; restrained oxblood `#642E33`. Use consistent tokens, contrast and a restrained system of dividers/patterns.

Typography: graceful editorial serif for display (prefer open-license Cormorant Garamond) and elegant legible sans for UI (prefer Manrope), hosted locally/bundled if practical. Big cinematic typography on desktop, uncluttered mobile composition. Build a bespoke typographic `BHUMI / COIN` wordmark, no third-party logo.

Suggested copy (you may refine without losing personality):
- Eyebrow: `THE BHUMI SOCIETY • EST. MMXXVI`
- Hero title: `Some legends are born. Others are minted.`
- Hero supporting line: `Introducing Bhumi Coin — a fictional token of appreciation, made with old-world charm and just enough mischief.`
- Secondary phrase: `Not all fortunes are measured in money.`
- Call-to-action: `Discover the Coin` (scrolls to coin section), `Our Story` (scrolls to story section).
- Every claim about a real market, token launch, financial value, blockchain deployment or purchasing must be avoided.

## Required page structure
1. **Header**: original monogram seal + BHUMI COIN, tasteful nav to `Story`, `The Coin`, `The Society`, anchored interactions; elegant responsive hamburger/drawer on mobile; sticky with subtle transparent-to-solid behavior only if reliable.
2. **Hero**: genuinely memorable responsive composition, luxury editorial typography on one side and large original **interactive 3D gold coin** on the other, with subtle highlights, decorative details and tasteful ambient lighting. The image must look like an engraved minted coin, not a flat emoji. Add premium layout framing or a plinth / vignette in CSS. Use no paid/external 3D assets. Coin features a distinctive embossed letter `B` and engraved border (procedurally create texture/meshes as practical).
3. **The Story**: a short poetic, humorous fictional introduction to Bhumi Coin; premium editorial layout rather than cards everywhere.
4. **The Coin**: showcase design details (seal, finish, inscription), with a working `Flip the Coin` button. The interaction spins the digital coin or uses a graceful CSS alternative, then shows one of several fun fortunes (e.g., `Excellent taste is a lifelong investment.` / `The house always bets on Bhumi.`). Announce the text change accessibly. Clearly state the flip does not mint or award real cryptocurrency.
5. **The Society**: a delightfully theatrical, tongue-in-cheek club manifesto or invitation; no fake signup, real purchase, or wallet claim.
6. **Footer**: useful links, project year, and a compact but readable disclaimer: `Fictional concept • Educational blockchain project • No financial value`.

## Interaction & quality constraints
- Every button and link has a real function. No empty links, dead CTAs, false social profiles, decorative fake market counters, misleading wallet connect, or token price charts.
- The 3D scene is a progressive enhancement. On devices that cannot run WebGL, where reduced motion is preferred, or where scene initialization fails, show an attractive static CSS/SVG coin instead of an empty canvas or crash. Prefer reduced animation, not just reduced frame rate. Avoid keeping a render loop active when not needed.
- Use lazy loading/code splitting where it materially improves first load. Keep shaders, textures, geometry and device pixel ratio modest to protect mobile performance. Clean up Three.js resources as needed.
- Implement accessibility: semantic headings, descriptive button labels, visible keyboard focus, keyboard-operable menu and flip button, sensible `aria-live` for fortunes, no scroll trap, 44px touch targets, sufficient color contrast, responsive typography. Support `prefers-reduced-motion`.
- Verify widths `320`, `375`, `390`, `768`, `1024`, and `1440` CSS px. No horizontal overflow, cut-off content, unreadable type, broken stacking or obscured controls. Test both mobile and desktop navigation.
- Add document title, meta description and favicon made from original emblem. Avoid privacy trackers and unnecessary network dependencies.
- The site should load with no environment variables, backend, authentication, API keys, wallets or database.

## QA and execution requirements
1. Check existing project environment (Node and npm versions) and installed packages.
2. Scaffold and implement the app, including appropriate package scripts: `dev`, `typecheck`, `lint`, `test`, `build`.
3. Add a small set of practical UI tests using Vitest + React Testing Library: critical text renders, key navigation or semantic interactions, and fortune button behavior. Mock/abstract the 3D scene in tests rather than relying on real WebGL in JSDOM.
4. Actually run `npm install`, `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build`, address errors, and rerun relevant checks until passing. Avoid unnecessary rewrites; fix root causes.
5. Run localhost via `npm run dev -- --host 127.0.0.1`, preferably port `5173` if free, and open it in Antigravity's local browser if available. Inspect at desktop and mobile widths, test menu/button interactions and check browser console. Take screenshots if available. If browser tooling is not accessible, say so explicitly; do not pretend visual checks were performed.
6. Update README with exact setup commands, system requirements, what is mocked, and how to run. Create a concise `AGENTS.md` summarizing permanent guardrails. Create `PROJECT_PLAN.md` with the roadmap:
   - Stage 0 setup and standards
   - Stage 1 polished frontend (this task)
   - Stage 2 visual polish/performance/accessibility
   - Stage 3 optional Vercel Hobby static launch after approval
   - Stage 4 local blockchain/hash/transactions teaching lab
   - Stage 5 Solidity and Hardhat local contracts
   - Stage 6 OpenZeppelin ERC-20 Bhumi Coin token locally and tests
   - Stage 7 optional Sepolia testnet with free faucet and user approval
   - Stage 8 learning recap, security review, maintenance.
7. **STOP after localhost Stage 1.** Do not start further stages without user sign-off.

## What to send back
- Brief summary of the visual concept and implemented interactions.
- File tree and actual versions used.
- Exact localhost URL and run command.
- Results of each validation command (pass/fail). Screenshot paths if captured.
- Any real outstanding issues, without inventing success.
- State explicitly: `Stage 1 complete; awaiting visual review` only if all mandatory quality gates passed, otherwise identify blockers with evidence.

Start implementing now. Do not respond with another planning essay or ask non-essential questions; make reasonable design choices and deliver the working site.
