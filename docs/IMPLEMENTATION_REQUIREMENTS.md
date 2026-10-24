# Platinum After Dark — approved implementation requirements

Prepared October 24, 2026 for Nathan / Adent xFans review. The owner has approved this direction. This is a request for a fixed implementation quote and acceptance plan, not a purchase order. Public creator name: Jamie Justice. Omit unrelated corporate, legal and personal records from this repository.

## 1. Visual implementation

- Preserve the approved website and magazine layouts in `dist/creator-pages.js` and `dist/creator-pages.css`, shared gemstone, satin, typography and glow treatment. Develop responsive creator templates rather than separately hand-coding every future creator.
- Each creator receives a personal branded website within the platform domain. No separate domain is required. Content, settings and navigation must be scoped to the correct creator.
- Platform tabs: Discover Creators / Live Cams / Directory / Magazine. Creator tabs: Home / Collections / Live / [creator]'s Feature. Global Library and Account stay in the main header. The main brand returns to platform discovery.
- Existing preview hash routes are portable prototypes; production URL design can change without changing the approved layout or access semantics.
- Remove the top design-preview banner only during the agreed production handover, after illustrative content, operational policies and backend integration have been addressed. Current sample labels must not imply live functionality.

## 2. Account registration and access

| State | Intended access |
| --- | --- |
| Preview visitor | Approved public/nonexplicit content and properly censored preview assets; entry and regional requirements must be configured for launch |
| Pending account | Email confirmation and provider-managed adult-age check; no restricted access |
| Verified free account | Approved free browsing; explicit originals remain locked |
| Verified paid creator member | That creator's designated member content while entitlement is valid |
| Verified purchaser | The purchased release under the final access terms |
| Creator | Separate identity, consent, publication and payout onboarding before publishing |

- Verify control of email and separately verify adult eligibility at account activation. ID/document checking or other explicitly agreed suitable provider methods can be used; exact Yoti method availability and configuration require written confirmation.
- Bind a validated provider response to the correct authenticated account/session. Handle failed, incomplete, expired, replayed and revoked results. Do not accept a client-provided verified flag. Recheck rules and regional entry obligations need final configuration.
- Show locked previews with a lock and clear 'Members only' or 'Purchase required' labels. The preview is a separately approved censored/nonexplicit asset. Never send the explicit original and rely on browser blurring to protect it.
- Paid access is independent of age verification. Check both on every restricted-media request. Prevent copied-link access and cross-creator/cross-user data access. Use private media storage and appropriately expiring delivery authorization.
- Do not store identity documents in ordinary profile tables or expose legal identities to public pages. Confirm provider result fields, necessary references, retention and restricted staff access. Do not promise zero provider retention without verifying the actual service configuration.

## 3. Commercial functionality to confirm

Subscriptions, individual photo/video sales, tips, paid messages, live streaming and private video calls, with clear inclusion/exclusion per creator. Processor-hosted payment collection where appropriate; server verification of processor callbacks; duplicate-event handling; refund/chargeback reconciliation; creator-scoped balances and statements; cancellation and expiry behavior; separately identifiable purchases in My Library. Pricing and commission examples in the preview are not final commercial terms.

Directory: quote separately and explain whether the approach shares identity/navigation with xFans, what data and admin tools it needs, and what must be added. The current route is a coming-soon frontend only. No real advertisers, bookings or service payments are implemented.

## 4. Security and ongoing responsibility

Provide an included / configurable / extra-development / unavailable response for:

- Creator and administrator MFA/passkeys options, secure recovery, login/session alerts, session revocation and brute-force protection.
- Reauthentication and notifications for payout/email changes; suspicious-change handling.
- Role-based staff access, separate developer accounts, access logs and removal of unnecessary support access at handover. Secrets must stay outside GitHub and frontend assets.
- Safe uploads, file validation/scanning, limits, metadata stripping for public images, private storage and protection against malicious message/profile content.
- Application/server updates, vulnerability fixes, traffic/bot protection, storage/streaming usage limits and cost alerts.
- Encrypted/protected backups, retention, an actual restore demonstration, incident contacts, response coverage and responsibility for recovery.
- Tests for unpaid/copied-link access, cross-user and cross-creator access, forged/duplicate payment callbacks, expired memberships and verification results. Identify what independent security review is included versus separately priced.

External clone-profile/content-leak monitoring and takedowns are a separate service, not presumed part of xFans or Nathan's quote. No Rulta/BranditScan service has been purchased through this handoff.

## 5. Future optional AI automation — separate scope

Ask whether APIs, signed event notifications or exports can support read-only operational summaries and security-alert triage later. No AI Core integration exists in the prototype. No access to other Ascend businesses' confidential records is permitted. Start with fictional records, minimum data and permissions, reviewable logs and human approval for consequential account/content/payment actions. Do not include autonomous payouts, identity judgments or bans in the initial scope. Price optional integration separately.

## 6. Required quote response

For each feature identify: existing xFans capability, configuration versus custom development, one-time charge, recurring/usage charge, responsible provider, timeline, dependencies and acceptance demonstration. State milestones, support duration, maintenance responsibilities and approval procedure for extra charges. Clarify processor fees/reserves, verification minimums/retries, streaming licenses, storage/bandwidth, hosting, email and backup costs. Our earlier $300–$400/month discussion was a provisional planning allowance, not a confirmed operating quote.

Nathan's latest email confirms his team accepted the repository invitation and will return a fixed integration quote, timeline and directory details. No email is sent by this repository update.

## Account and monetization separation — approved October 24, 2026

One free verified platform account supports customer, creator and advertiser roles with separately authorized onboarding. No site-wide premium plan is selected. Creator subscriptions cover only the named creator; Jamie's subscription is labeled Subscribe to Jamie / Jamie Justice Membership. Individual purchases and paid live events/interactions are separately labeled and billed. Directory advertiser listing plans and optional featured placement are separate, with final pricing and enrollment pending.

Placement: guest header has Sign In / Create Account. In the explicit signed-in-navigation demo, the header has My Library / My Account. Account contains Subscriptions & Billing, verification, advertiser dashboard and creator enrollment. Creator navigation has a Subscribe to Jamie button. Directory has Advertise With Us / Manage Listing. Additional creator and advertiser enrollment is not open in the prototype. Registration previews email confirmation then a separate adult-age check; no identity documents or emails are collected.

Revenue reporting must distinguish creator-content commissions, live commissions and advertising fees. Existing special arrangements for the founding creator must be supported without confusing ownership, creator proceeds and company distributions. No final fees or new paid tier commitments are invented here. The preview-session toggle changes navigation only, never real authentication, verification or media entitlements.
