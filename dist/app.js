const collections=[
 {id:'velvet',title:'The Velvet Edit',type:'film',label:'SIGNATURE FILM',detail:'Sample film · 08:30',price:18,art:1,symbol:'✧',description:'A cinematic collection inspired by plum velvet, soft light, and an evening away from the ordinary.'},
 {id:'silver',title:'Silver Hour',type:'photos',label:'PHOTO COLLECTION',detail:'Sample collection · 24 photographs',price:12,art:2,symbol:'◇',description:'An editorial photo collection with platinum highlights and a quietly luxurious atmosphere.'},
 {id:'midnight',title:'Midnight Notes',type:'member',label:'MEMBER COLLECTION',detail:'Sample film · 06:15',price:null,art:3,symbol:'✦',description:'A more personal chapter in the member collection. This is illustrative content for the website preview.'}
];
const saved=new Set();
try{const ids=JSON.parse(localStorage.getItem('pad-saved')||'[]');if(Array.isArray(ids))ids.filter(id=>collections.some(c=>c.id===id)).forEach(id=>saved.add(id));}catch{}
const modal=document.querySelector('#modal'),body=document.querySelector('#modal-body');
function open(html){body.innerHTML=html;if(!modal.open)modal.showModal();}
function art(c){return `<div class="art art-${c.art}"><span class="art-symbol" aria-hidden="true">${c.symbol}</span><span class="tag">${c.label}</span><div class="art-bottom"><span>PLATINUM AFTER DARK</span><span>PREVIEW</span></div></div>`;}
function render(filter='all'){document.querySelector('#cards').innerHTML=collections.filter(c=>filter==='all'||c.type===filter).map(c=>`<article>${art(c)}<h3 class="collection-title">${c.title}</h3><div class="card-meta">${c.detail}</div><div class="card-bottom"><strong>${c.price===null?'Included with membership':`$${c.price} · Sample price`}</strong><button data-preview="${c.id}">View collection ↗</button></div></article>`).join('');}
function preview(id){location.hash='#/release/'+id;}
function updateCount(){document.querySelector('#saved-count').textContent=saved.size;}
function library(){location.hash='#/library';}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.filter){document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});render(b.dataset.filter);}if(b.dataset.preview)preview(b.dataset.preview);if(b.dataset.save){const id=b.dataset.save;if(saved.has(id))saved.delete(id);else saved.add(id);try{localStorage.setItem('pad-saved',JSON.stringify([...saved]));}catch{}updateCount();preview(id);}if(b.hasAttribute('data-library'))library();if(b.hasAttribute('data-browse')){modal.close();document.querySelector('#collection').scrollIntoView({behavior:'smooth'});}if(b.dataset.info)location.hash='#/'+b.dataset.info;});
document.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
document.addEventListener('click',e=>{if(e.target.closest('#join'))location.hash='#/checkout/membership';if(e.target.closest('#show-live'))location.hash='#/live';});
document.querySelector('#year').textContent=new Date().getFullYear();render();updateCount();

