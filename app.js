const dialog=document.querySelector('#contact');
document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()});
document.querySelector('[data-copy]').addEventListener('click',async event=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(event.currentTarget.dataset.copy);status.textContent='邮箱已复制'}catch{status.textContent='请直接选择上方邮箱复制'}});
const links=[...document.querySelectorAll('nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -60% 0px',threshold:0});
document.querySelectorAll('main section').forEach(section=>observer.observe(section));
