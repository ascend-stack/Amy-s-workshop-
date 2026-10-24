# Platinum After Dark — current developer handoff

Updated October 24, 2026. Public creator: **Jamie Justice**. Vendor: Adent xFans / Nathan G. Source is a portable static frontend prototype, not an operational adult-content platform.

## Start here

1. `docs/IMPLEMENTATION_REQUIREMENTS.md` — current approved requirements and quote-response checklist.
2. `docs/CREATOR_PAGE_DESIGN.md` — approved creator website and magazine direction.
3. `docs/XFANS_REVIEW_BRIEF.md` — proposal history, pricing context and open integration questions.

The owner approves the page layout. The vendor should explain implementation, identify gaps and quote them; design approval is not delegated to the vendor. A fixed quote, timeline and directory integration details are pending Nathan's review. No purchase, payment or launch authorization is represented by these files.

## Preview locally

Serve `dist/`, for example `python3 -m http.server 8000 --directory dist`. No build step is required. Open the server URL and complete the prototype's self-declared 18+ entry. The preview does not verify age.

The private hosted design preview is https://platinum-after-dark.fancyfly17.chatgpt.site . Repository access does not grant access to that private preview. The portable source is sufficient for local review.

## Approved navigation and layouts

| Platform navigation | Route | Current presentation |
| --- | --- | --- |
| Discover Creators | `#/discover` | Jamie as founding creator; links into her website |
| Live Cams | `#/cams` | Platform broadcast discovery; Jamie offline |
| Directory | `#/directory` | Coming-soon layout; no listings or signup |
| Magazine | `#/magazine` | Editorial index linking to Jamie's feature |

| Creator navigation | Route |
| --- | --- |
| Home | `#/home` |
| Collections | `#/collection` |
| Live | `#/live` |
| Jamie's Feature | `#/spotlight` |

The creator website is the personal-brand layout approved from the mockup: plum hero, oversized serif name, platinum artwork, ivory introduction, collection cards and live schedule. The editorial spotlight uses the approved magazine layout. Platform and creator navigation have distinct scopes. Legacy `#/about` redirects to `#/spotlight`.

Other routes include release details, membership, account, library, signup/signin, verification, checkout, membership management, privacy, terms, support and reporting. Collection filtering, browser-local saved previews and demonstration live/library states are frontend interactions only.

## Approved account and access requirements

Free visitors/accounts can browse approved nonexplicit/censored previews. Account activation requires verified email plus a separate adult-age check through the selected provider, with document checking or other agreed suitable methods. Email alone is not proof of age. Paid membership/purchase permissions are a separate server-side check. Full restricted media must never be shipped to an unauthorized browser behind CSS blur, hidden markup, a static URL or localStorage.

These are implementation requirements, not working features in this source. No accounts, emails, ID uploads, age checks, payments, protected media or broadcasts are connected. No real customer records or explicit imagery are included. All prices, biographies, quotes and schedules are illustrative until creator/owner approval.

## Assets and design

Preserve deep plum satin, platinum lettering, raised gemstone, shimmer/glow tabs, non-bridal jewelry and responsive layout. Portrait placeholders are decorative silk/crystals; existing fictional fashion imagery is not Jamie. `dist/assets/creator-silver-silk.webp` is an optimized copy of the generated abstract textile artwork. Existing jewelry assets are retained. Only approved creator photography and copy should replace placeholders.

## Scope and history

Launch initially with Jamie alone and creator registration hidden/disabled; accommodate future creators. xFans content and live features, directory integration, security, maintenance and recurring costs must be itemized in the fixed quote. Directory production launch requires the separate operational/provider/legal review already planned. The directory placeholder is not evidence of an implemented directory backend.

Earlier Scrile research and old solo-page status documents are historical where they conflict with the current requirements. External impersonation/takedown protection is separate from website security. ASCEND AI automation is a future optional integration, not implemented or authorized for autonomous account/payment actions.
