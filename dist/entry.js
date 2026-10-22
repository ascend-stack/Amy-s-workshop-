// Prototype self-declaration only. Never use this state to authorize restricted media.
const entry = document.querySelector('#age-entry');
const siteContent = document.querySelector('#site-content');
const entryKey = 'pad-age-confirmation-v2';
const ageAcknowledgment = document.querySelector('#age-acknowledgment');
const entryContinue = document.querySelector('#confirm-age');
ageAcknowledgment.addEventListener('change',()=>{entryContinue.disabled=!ageAcknowledgment.checked;});
function enterPreview(){
  entry.hidden = true;
  siteContent.hidden = false;
  siteContent.inert = false;
}
let confirmed = false;
try { confirmed = sessionStorage.getItem(entryKey) === 'confirmed'; } catch {}
if (confirmed) enterPreview();
entryContinue.addEventListener('click', () => {
  if(!ageAcknowledgment.checked)return;
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
  ageAcknowledgment.checked = false;
  entryContinue.disabled = true;
  document.querySelector('#entry-title').focus();
  window.scrollTo({top:0,behavior:'instant'});
});

// Public policies remain readable before self-declaration; the site stays hidden.
const entryPolicyDialog = document.querySelector('#entry-policy-dialog');
const entryPolicyBody = document.querySelector('#entry-policy-body');
const readableEntryPolicies = new Set(['terms','privacy','complaints','copyright','safety','legal-requests']);
document.addEventListener('click',event=>{
 const link=event.target.closest('[data-entry-policy]');
 if(!link || !readableEntryPolicies.has(link.dataset.entryPolicy))return;
 event.preventDefault();
 const kind=link.dataset.entryPolicy;
 document.querySelector('#entry-policy-title').textContent=pageTitles[kind] || 'Site information';
 entryPolicyBody.innerHTML=kind==='terms'||kind==='privacy'?infoPage(kind):reportingPage(kind);
 entryPolicyBody.querySelectorAll('button').forEach(button=>button.remove());
 entryPolicyBody.querySelectorAll('a').forEach(anchor=>{
  const target=(anchor.getAttribute('href')||'').replace('#/','');
  if(readableEntryPolicies.has(target))anchor.dataset.entryPolicy=target;
  else anchor.remove();
 });
 if(!entryPolicyDialog.open)entryPolicyDialog.showModal();
 entryPolicyDialog.scrollTop=0;
});
document.querySelector('#entry-policy-close').addEventListener('click',()=>entryPolicyDialog.close());
document.querySelector('#entry-policy-return').addEventListener('click',()=>entryPolicyDialog.close());
