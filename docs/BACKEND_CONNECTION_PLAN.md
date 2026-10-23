# Backend connection plan — independent development track

Status: Adent xFans is under evaluation following Nathan's proposal. The intended launch starts with Jamie alone, with additional creators enabled later. This document describes required behavior, not verified xFans or Scrile API capabilities. No backend, paid service, or integration has been activated by this plan. Current scope and open questions are in XFANS_REVIEW_BRIEF.md.

Public creator: Jamie Justice. Site brand: Platinum After Dark. Internal project: Amy’s Workshop.

## Decisions that remain open

- Final platform selection and agreement; xFans is the current evaluation direction.
- Which service supplies visitor age assurance and which supplies creator identity/consent checks.
- Adult-compatible payment processor, protected media/streaming, hosting, email delivery, and customer support.
- Served locations, final policies, business operator details, and content/pricing approval.

Python is not required by the existing buildless frontend. Choose a backend language only after evaluating the actual integration needs and operational ownership. Avoid building a second account/payment/media stack before deciding whether the selected platform already supplies it.

## Frontend-to-backend boundaries

| Website experience | Backend responsibility | Minimum state the frontend needs |
| --- | --- | --- |
| Sign-in and recovery | Authenticate accounts, issue secure sessions, deliver recovery messages | Signed-in status and public profile; no provider secrets |
| Visitor age check | Start provider session, validate the result and bind it to the requesting user/session | Not checked, pending, eligible, not eligible, expired, or error |
| Content catalog | Return approved public metadata and safe previews | Release ID, type, title, preview URL, current price, and access label |
| Release access | Enforce verified-age and purchase/membership rules before every restricted request | Access allowed or denied; short-lived protected media access when allowed |
| Checkout | Calculate authoritative price, currency, taxes, terms, and valid payment session | Provider checkout destination and order status; never trust browser prices |
| Order confirmation | Process authenticated payment results idempotently | Pending, paid, failed, refunded, or disputed order state |
| Membership controls | Manage billing periods, renewals, cancellation, payment updates, receipts | Actual renewal/end dates, renewal status, and provider-approved actions |
| Library | Return purchases and current subscription entitlements | Purchases and member releases; saved previews remain a separate concept |
| Live Lounge | Publish schedule and verify access before issuing stream/chat credentials | Offline, scheduled, live, ended; event time/time zone and permitted actions |
| Customer support | Accept authenticated requests, apply retention/access rules | Ticket confirmation and support channel details |

## Proposed access rule

A protected media request succeeds only if the server independently confirms every condition that applies: valid session, required age assurance, valid content entitlement, and permitted content availability. Hiding a page, trusting a browser flag, or blurring a public URL does not implement this rule.

Verification and payment failures must remain failures even if a browser sends a success redirect. Provider callback authentication and server-side session/order lookup determine the result. Keep secrets out of frontend files and GitHub.

## Work that can proceed immediately

- Refine all page layouts, imagery, responsive crops, typography, and content organization.
- Review account, membership, cancellation, checkout, receipt, and access-state designs.
- Prepare approved content metadata and separate public previews from future restricted originals.
- Maintain a backend connection map and vendor evaluation questions.
- Compare provider contracts and scoped quotes when available; do not wait for a vendor to approve design work.

## Work that needs a real service decision

Real identity/age checks, customer accounts, payment collection, subscription management, protected-media playback, live broadcast and chat, transactional email, and production data retention. The current visual prototype must not be represented as performing these functions.

## Current source and review practice

The private GitHub repository contains the portable source and project documents. The private Site is a design review deployment. Keep both current when code changes. A later platform adapter must preserve the approved public design and documented access behavior.
