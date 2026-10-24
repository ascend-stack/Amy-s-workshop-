# Age assurance options — Amy’s solo site

> Current direction, October 24, 2026: `IMPLEMENTATION_REQUIREMENTS.md` and README.md take precedence over older layout, vendor and registration descriptions below. Account activation requires email confirmation plus a separate provider-managed adult-age check; restricted access also requires the appropriate paid entitlement. Creator website/magazine layouts and separate global/creator navigation are approved. These requirements are not yet connected backend functionality.

Research date: October 22, 2026. Status: preliminary shortlist; no provider purchased, account opened, or integration activated. Product descriptions below come from provider publications, not independent certification of suitability for this site.

## Recommended next decision

Ask Scrile what its current plan already includes before buying a separate service. Its product page advertises age verification support and API integrations but the reviewed page does not name the visitor-check provider, included methods, or per-check charges. Do not assume creator onboarding also verifies visitors.

If a separate visitor service is needed, evaluate Yoti first, Sumsub second, and Veriff as an alternative. This ranking is our project recommendation based on the published fit below; it is not a final vendor selection.

## Shortlist

| Candidate | Published capability | Fit for this project | Commercial and privacy questions |
| --- | --- | --- | --- |
| Yoti Age Verification Service | An explicit adult-content offering; facial age estimation, document and digital-ID methods, reusable age proofs, and an API. It supports threshold results rather than requiring the site to receive identity documents. | First candidate to evaluate for visitor age assurance while retaining our branded entry page. | Request a quote for expected volume, permitted regions, fallback methods, and token reuse. Verify exact retention and subprocessors for the chosen methods. |
| Sumsub | ID checks, facial age estimation and configurable workflows; hosted links, SDKs, and API integration. Adult-content websites are identified among its age-verification use cases. | Consider if Scrile already supports it, or if visitor checks and future creator onboarding can share an appropriately scoped provider. | Public Basic identity verification pricing is $1.35/check with a $149 monthly minimum at review time. This is not a quote for an age-estimation-only deployment. Confirm age-only pricing, adult-site acceptance, result fields, retention, and Scrile integration. |
| Veriff | Age Validation checks ID-derived age against a threshold and returns a pass/fail result. Its broader Age Assurance product combines lower-friction methods with document escalation. | Alternative for a provider-managed result and a document fallback. | Adult-content acceptance for our exact use is not established by the reviewed product page. Confirm permitted business model, pricing, retention, regional methods, and integration before treating it as eligible. |

## Privacy distinction

A branded page is the interface. Age assurance checks evidence behind that interface. The current preview implements self-declaration only and never requests a camera, ID, or birthday.

Yoti's published AVS privacy notice says the customer receives a threshold result or age in years, without directly identifiable personal information. It also states that most check data is deleted on completion, but manual document review can retain data for 28 days and check results are retained for six months unless deleted sooner. Other method-specific and legal exceptions apply. Do not describe any candidate as universally anonymous or as storing nothing.

Preferred configuration: the website receives only the eligibility result and the minimum reference needed to validate it, with documented retention. Provider contracts and actual settings must support that design.

## Questions to resolve with Scrile and the provider

1. Does the selected Scrile plan check visitors, creators, or both? What is included versus an extra fee?
2. Can the existing plum-and-platinum frontend and its full page layouts be preserved? What integration work and recurring costs apply?
3. Which age-check methods are available by served location, and what fallback, appeal, and accessibility paths exist?
4. What is charged for completed checks, failures, retries, returning visitors, and minimum monthly usage?
5. What fields can the website receive? Can access be based on an over-threshold result without storing ID images or exact birth dates?
6. Who processes the data, in which locations, for how long, and under which deletion and privacy terms?
7. How are result authenticity, session binding, expiration, and replay protection enforced server-side?
8. Are original files, thumbnails, video segments, direct URLs, and CDN paths all protected before the required verification and purchase checks?
9. What sandbox is available, and who maintains the integration when APIs change?
10. What separate creator identity, consent, and content-record workflows are required for Amy?

These are evaluation requirements, not a claim that a vendor satisfies every jurisdiction. Choose served locations and obtain an appropriate legal review before commercial launch.

## Primary sources reviewed

- Scrile Connect: https://www.scrile.com/connect
- Yoti adult-content offering: https://www.yoti.com/adult-content-age-verification/
- Yoti AVS privacy notice: https://www.yoti.com/privacy/age-verification/
- Yoti organisation terms: https://www.yoti.com/terms/age-verification/organisations/
- Sumsub age verification: https://sumsub.com/age-verification/
- Sumsub pricing: https://sumsub.com/pricing/
- Veriff Age Validation: https://www.veriff.com/product/age-validation

Prices, terms and available methods may change. Confirm a scoped written quote before procurement. User-provided screenshots confirm the user sent Scrile a sales inquiry on October 21, 2026. A reply has not been reviewed here. No follow-up has been sent by the assistant.
