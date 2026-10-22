// Prototype self-declaration only. Never use this state to authorize restricted media.
const entry = document.querySelector('#age-entry');
const siteContent = document.querySelector('#site-content');
const entryKey = 'pad-age-confirmation-v1';
function enterPreview(){
  entry.hidden = true;
  siteContent.hidden = false;
  siteContent.inert = false;
}
let confirmed = false;
try { confirmed = sessionStorage.getItem(entryKey) === 'confirmed'; } catch {}
if (confirmed) enterPreview();
document.querySelector('#confirm-age').addEventListener('click', () => {
  try { sessionStorage.setItem(entryKey, 'confirmed'); } catch {}
  enterPreview();
  const heading = document.querySelector('main h1, main h2');
  heading.setAttribute('tabindex', '-1');
  heading.focus({preventScroll: true});
  window.scrollTo({top:0,behavior:'instant'});
});
document.querySelector('#review-age').addEventListener('click', () => {
  try { sessionStorage.removeItem(entryKey); } catch {}
  siteContent.inert = true;
  siteContent.hidden = true;
  entry.hidden = false;
  document.querySelector('#entry-title').focus();
  window.scrollTo({top:0,behavior:'instant'});
});
