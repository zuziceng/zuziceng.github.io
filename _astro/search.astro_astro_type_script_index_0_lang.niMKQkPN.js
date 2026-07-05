import{t as e}from"./preload-helper.BxF6Ia7x.js";var t=null,n=null,r=0,i,a,o={};function s(){return t?Promise.resolve(t):n||(n=e(()=>import(a).then(async e=>(typeof e.init==`function`&&await e.init(),t=e,e)),[]).catch(e=>{throw n=null,e}),n)}function c(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function l(e){return c(e??``).replaceAll(`&lt;mark&gt;`,`<mark>`).replaceAll(`&lt;/mark&gt;`,`</mark>`)}function u(e){try{let t=new URL(e,window.location.origin).pathname.replace(/\/+$/g,``).split(`/`).filter(Boolean);return t.length?t.join(` › `):`/`}catch{return e}}function d(){let e=document.getElementById(`search-wrapper`),t=document.querySelector(`[data-search-page-input]`),n=document.querySelector(`[data-search-page-clear]`),d=document.querySelector(`[data-search-page-results]`);if(!e||!t||!n||!d)return;a=e.dataset.pagefindScript,o=JSON.parse(e.dataset.i18n||`{}`);function f(){d.innerHTML=`<div class="px-5 py-12 text-center">
        <div class="bg-base-200 text-base-content/45 mx-auto flex h-10 w-10 items-center justify-center rounded-full" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
        </div>
        <p class="text-base-content/70 mt-3 text-sm">${c(o.typeToStart)}</p>
      </div>`}function p(){d.innerHTML=`<div class="px-5 py-12 text-center">
        <p class="text-base-content/70 inline-flex items-center gap-2 text-sm">
          <span class="loading loading-spinner loading-xs" aria-hidden="true"></span>
          ${c(o.searching)}
        </p>
      </div>`}function m(e){d.innerHTML=`<div class="px-5 py-12 text-center">
        <div class="bg-base-200 text-base-content/45 mx-auto flex h-10 w-10 items-center justify-center rounded-full" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/></svg>
        </div>
        <p class="text-base-content/70 mt-3 text-sm">
          ${c(o.noResultsFor)}
          <span class="text-base-content font-semibold">"${c(e)}"</span>
        </p>
      </div>`}function h(e){let t=e.length,n=t===1?o.resultsCountOne:o.resultsCount,r=e.map(e=>{let t=c(e.meta?.title||e.url),n=c(u(e.url)),r=l(e.excerpt||``);return`<li>
            <a href="${c(e.url)}" class="search-result group block px-4 py-3 sm:px-5">
              <div class="text-base-content/45 group-hover:text-primary/70 flex items-center gap-1.5 text-[0.7rem] tracking-wide uppercase">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
                <span class="truncate">${n}</span>
              </div>
              <h3 class="text-base-content group-hover:text-primary mt-0.5 text-[0.95rem] leading-snug font-semibold">${t}</h3>
              <p class="text-base-content/65 mt-1 line-clamp-2 text-[0.825rem] leading-snug">${r}</p>
            </a>
          </li>`}).join(``);d.innerHTML=`<div>
        <div class="text-base-content/70 border-base-300 border-b px-4 py-2 text-[0.7rem] tracking-wide uppercase sm:px-5">${t} ${c(n)}</div>
        <ul class="divide-base-300 divide-y">${r}</ul>
      </div>`}async function g(e){let t=++r;try{let n=await s();if(t!==r)return;p();let i=await n.search(e);if(t!==r)return;if(!i?.results?.length){m(e);return}let a=i.results.slice(0,25),o=await Promise.all(a.map(e=>e.data()));if(t!==r)return;h(o)}catch(e){console.error(e),d.innerHTML=`<p class="text-error px-5 py-6 text-sm">Search index not available.</p>`}}t.addEventListener(`input`,()=>{let e=t.value.trim();if(e?(n.classList.remove(`hidden`),n.classList.add(`inline-flex`)):(n.classList.add(`hidden`),n.classList.remove(`inline-flex`)),clearTimeout(i),!e){r++,f();return}i=setTimeout(()=>g(e),140)}),n.addEventListener(`click`,()=>{t.value=``,n.classList.add(`hidden`),n.classList.remove(`inline-flex`),r++,f(),t.focus()}),s().catch(()=>{});let _=new URL(window.location.href).searchParams.get(`q`);_&&(t.value=_,t.dispatchEvent(new Event(`input`,{bubbles:!0})))}d(),document.addEventListener(`astro:page-load`,d);