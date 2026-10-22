# Platinum After Dark

Portable, buildless website prototype. Serve `dist/` through any static web server. No framework or build step is required.

## Included

Responsive homepage, filterable sample collection, detail dialogs, browser-local saved preview library, membership preview, live lounge, and explanatory privacy/terms/support dialogs. Locked palette: deep plum, platinum, rhinestone-inspired gemstone details. Abstract CSS and SVG artwork contains no explicit media.

## Jewelry artwork update

`dist/assets/plum-platinum-wrap-ring.png` was generated with the built-in image-generation tool. Prompt brief: luxury editorial photograph of deep plum satin and a sculptural open-wrap platinum cocktail ring with a curved rhinestone ribbon; no solitaire or bridal styling, text, or people. `dist/jewelry.css` uses the photograph for the hero and its lower fabric area for supporting backgrounds.

The opening section now uses `dist/assets/plum-ring-panorama.png` as a continuous background behind both the copy and jewelry. The built-in image editor extended the approved ring photograph into a wide composition with dark plum fabric on the left and the same ring on the right. Mobile styling uses the portrait composition with a continuous dark fabric blend.

The lower membership invitation follows the desktop reference: crystal photography on the left, “Your membership. Your access.” in the center, and a bordered View Membership link on the right. `dist/assets/platinum-crystal-facets.png` was created with the built-in image-generation tool using a macro crystal brief with platinum, lilac, and plum reflections and no text or people. Styling is in `dist/membership-banner.css`.

Visual polish adds shared fabric backgrounds to the header, collections, live area, membership panel, and footer. Selected navigation and collection filters use a platinum glow and a single shimmer sweep; reduced-motion preferences disable the animation. Navigation updates its selected state as sections scroll into view. These frontend interactions need no backend.

## Integration work before commercial launch

All content, prices, durations, and membership benefits are illustrative. No accounts, payments, entitlements, age verification, video storage, or streaming are connected. A static page or localStorage must never enforce paid-content access. Add server-side authentication and purchase/subscription authorization; validate payment webhooks and protect media through the selected platform. Replace sample copy, add real support details and final policies, and connect the domain only after launch configuration is complete.

Scrile Connect/Stream integration, template compatibility, API access, and product costs remain unconfirmed. This frontend is portable source code, not a claim of compatibility with a specific Scrile plan.

## Consistent dialog and button styling

All popup dialogs share the existing plum satin artwork with a dark readability overlay. Primary action buttons use the same translucent plum gradient, platinum border, serif lettering, and corner glow as the View Membership invitation.

Visual comparison: The Velvet Edit and Midnight Notes use a generated fictional adult fashion model in an opaque plum evening dress. Silver Hour retains crystal artwork for comparison. The portrait is a temporary design placeholder and does not depict Amy.

## Adults-only entry preview

The satin entry screen defaults to visible and hides the page until the visitor confirms they are 18 or older. It remembers that self-declaration in sessionStorage for the current browser tab. Leave opens a blank page; the footer's 18+ entry control resets confirmation. Without JavaScript the page remains hidden. This is a visual prototype, not age verification or a media authorization boundary. No explicit media is included.

Before production: select age assurance appropriate to the served jurisdictions, validate provider results server-side, enforce access on every restricted-media route, use protected media storage, and define privacy and retention policies. Do not use a browser flag to protect explicit media. Creator identity verification is a separate workflow.

Serve locally with `python3 -m http.server 8000 --directory dist`, then open localhost:8000. Generated PNG source assets have been replaced with optimized WebP copies for website delivery.

## Full solo-site visual pages

Use hash routes so every destination works on static hosting and survives refresh:

- `#/home`: approved landing design
- `#/collection`: catalog with category and title search
- `#/release/velvet`, `#/release/silver`, `#/release/midnight`: individual release views
- `#/live`: offline and simulated live layouts; local-only chat demonstration
- `#/membership`: benefits, plan and FAQs
- `#/library`: saved, purchased and membership sections (only browser-local saves work)
- `#/account`: profile, billing and privacy designs
- `#/signin`, `#/signup`: account-entry layouts; no personal information collected
- `#/checkout/velvet`, `#/checkout/membership`: checkout designs without a payment form
- `#/confirmation/velvet`: confirmation layout; no order is created
- `#/verify`: provider-neutral age-assurance journey; no camera or document access
- `#/about`, `#/privacy`, `#/terms`, `#/support`: editorial and supporting pages

All images and their CSS crops can be replaced later. The hero retains the approved ring and satin design. Destination pages reuse the same typography, satin, platinum borders and glowing action buttons.

Validation: JavaScript syntax checks; browser navigation across all destinations; desktop and 375px content-width overflow checks; saved-release/library journey; entry and footer reset. Provider research is recorded in docs/AGE_ASSURANCE_OPTIONS.md. This is a complete visual pass, not a commercial readiness or compliance certification.

## Creator identity

Public creator name: **Jamie Justuce** (exact spelling and capitalization). Any XXX styling is undecided and reserved for Jamie’s approval. Platinum After Dark remains the site brand. Amy’s Workshop remains the internal project/repository context. Public navigation, biography placeholders, and Live Lounge schedule copy use the creator identity. The fictional model placeholder does not depict Jamie Justuce.

## Independent development track

Continue visual and portable frontend development without waiting for a platform vendor. `#/manage-membership` now previews active and nonrenewing membership states, cancellation confirmation, and payment-update handoff. These sample states are not customer entitlements. The backend connection plan is in docs/BACKEND_CONNECTION_PLAN.md. No vendor inquiry has been sent by the assistant and no purchase has been made.

## Scrile inquiry and purchase-library examples

The user supplied screenshots confirming a Scrile Connect Solo inquiry sent October 21, 2026. No reply has been reviewed. See docs/SCRILE_INQUIRY_STATUS.md. The `#/library-example` route compares sample active/ended memberships, keeps individual purchases visually distinct, and labels purchase-after-expiry access as a proposed policy pending confirmation. No actual entitlements are granted.

## Reporting and legal page layouts

Draft routes: `#/complaints`, `#/copyright`, `#/safety`, and `#/legal-requests`, linked from the footer. These pages organise report types, planned intake information, related channels and submission acknowledgement design. They do not submit reports or accept documents and are not monitored channels. No legal fees, response deadlines, business address, designated agent, or contact email is invented. Final policies and operating procedures are pending.

## Entry acknowledgment with policy links

The warning screen includes a required 18+ self-acknowledgment checkbox and inline Terms, Privacy, complaint, copyright, safety and legal-request links. Those links open the same draft site information in a separate satin dialog before entry, without exposing the hidden site or checking the box. Continue stays disabled until the visitor checks the box. Closing a policy does not grant entry. Session confirmation uses a new versioned key so visitors see the revised notice. This remains self-declaration, not identity/age verification or a legal-readiness claim.

Platinum sparkle direction: metallic lettering, fine glitter highlights, luminous gemstone marks, and restrained corner glints across buttons and satin panels. Motion is optional and disabled for reduced-motion preferences.
