import{t as e}from"./preload-helper.BxF6Ia7x.js";var t=null,n=null,r=0,i=-1,a=[],o,s,c={};function l(){return t?Promise.resolve(t):n||(n=e(()=>import(s).then(async e=>(typeof e.init==`function`&&await e.init(),t=e,e)),[]).catch(e=>{throw console.error(`Failed to load Pagefind`,e),n=null,e}),n)}function u(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function d(e){return u(e??``).replaceAll(`&lt;mark&gt;`,`<mark>`).replaceAll(`&lt;/mark&gt;`,`</mark>`)}function f(e,t){e.innerHTML=t,a=Array.from(e.querySelectorAll(`[data-search-result-link]`)),i=a.length>0?0:-1,v()}function p(e){f(e,`<div class="px-5 py-12 text-center">
        <div class="bg-base-200 text-base-content/45 mx-auto flex h-10 w-10 items-center justify-center rounded-full" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
        </div>
        <p class="text-base-content/70 mt-3 text-sm">${u(c.typeToStart)}</p>
      </div>`)}function m(e){f(e,`<div class="px-5 py-12 text-center">
        <p class="text-base-content/70 inline-flex items-center gap-2 text-sm">
          <span class="loading loading-spinner loading-xs" aria-hidden="true"></span>
          ${u(c.searching)}
        </p>
      </div>`)}function h(e,t){f(e,`<div class="px-5 py-12 text-center">
        <div class="bg-base-200 text-base-content/45 mx-auto flex h-10 w-10 items-center justify-center rounded-full" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/></svg>
        </div>
        <p class="text-base-content/70 mt-3 text-sm">
          ${u(c.noResultsFor)}
          <span class="text-base-content font-semibold">"${u(t)}"</span>
        </p>
      </div>`)}function g(e){try{let t=new URL(e,window.location.origin).pathname.replace(/\/+$/g,``).split(`/`).filter(Boolean);return t.length===0?`/`:t.join(` › `)}catch{return e}}function _(e,t){let n=t.length,r=n===1?c.resultsCountOne:c.resultsCount,i=t.map((e,t)=>{let n=u(e.meta?.title||e.url),r=u(g(e.url)),i=d(e.excerpt||``);return`<li>
          <a
            data-search-result-link
            data-idx="${t}"
            href="${u(e.url)}"
            class="search-result group block px-4 py-3 sm:px-5"
          >
            <div class="text-base-content/45 group-hover:text-primary/70 flex items-center gap-1.5 text-[0.7rem] tracking-wide uppercase">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
              <span class="truncate">${r}</span>
            </div>
            <h3 class="text-base-content group-hover:text-primary mt-0.5 text-[0.95rem] leading-snug font-semibold">${n}</h3>
            <p class="text-base-content/65 mt-1 line-clamp-2 text-[0.825rem] leading-snug">${i}</p>
          </a>
        </li>`}).join(``);f(e,`<div>
        <div class="text-base-content/70 border-base-300 border-b px-4 py-2 text-[0.7rem] tracking-wide uppercase sm:px-5">
          ${n} ${u(r)}
        </div>
        <ul class="divide-base-300 divide-y" role="listbox">${i}</ul>
      </div>`)}function v(){a.forEach((e,t)=>{t===i?(e.setAttribute(`data-active`,`true`),e.setAttribute(`aria-selected`,`true`),e.scrollIntoView({block:`nearest`})):(e.removeAttribute(`data-active`),e.setAttribute(`aria-selected`,`false`))})}function y(e){a.length!==0&&(i=(i+e+a.length)%a.length,v())}function b(){return i<0||!a[i]?!1:(a[i].click(),!0)}function x(){let e=document.querySelector(`[data-search-modal]`),t=document.querySelector(`[data-search-input]`),n=document.querySelector(`[data-search-clear]`),i=document.querySelector(`[data-search-results]`);if(!e||!t||!i||!n)return;s=e.dataset.pagefindScript,c=JSON.parse(e.dataset.i18n||`{}`);function a(){t.value=``,n.classList.add(`hidden`),n.classList.remove(`inline-flex`),p(i),r++}async function u(e){let t=++r;try{let n=await l();if(t!==r)return;m(i);let a=await n.search(e);if(t!==r)return;if(!a||!a.results||a.results.length===0){h(i,e);return}let o=a.results.slice(0,12),s=await Promise.all(o.map(e=>e.data()));if(t!==r)return;_(i,s)}catch(e){console.error(e),f(i,`<p class="text-error px-5 py-6 text-sm">Search index not available. Run <code class="bg-base-200 rounded px-1">bun run build</code>.</p>`)}}function d(){let e=t.value.trim();if(e?(n.classList.remove(`hidden`),n.classList.add(`inline-flex`)):(n.classList.add(`hidden`),n.classList.remove(`inline-flex`)),clearTimeout(o),!e){p(i);return}o=setTimeout(()=>u(e),140)}t.addEventListener(`input`,d),n.addEventListener(`click`,()=>{a(),t.focus()}),e.addEventListener(`close`,a),t.addEventListener(`keydown`,e=>{e.key===`ArrowDown`?(e.preventDefault(),y(1)):e.key===`ArrowUp`?(e.preventDefault(),y(-1)):e.key===`Enter`&&b()&&e.preventDefault()});async function g(){typeof e.showModal==`function`?e.showModal():e.setAttribute(`open`,``),l().catch(()=>{}),requestAnimationFrame(()=>t.focus())}document.querySelectorAll(`[data-search-open]`).forEach(e=>{e.addEventListener(`click`,g)});function v(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`}document.addEventListener(`keydown`,e=>{let t=(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`,n=e.key===`/`&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!v(e.target);(t||n)&&(e.preventDefault(),g())})}x(),document.addEventListener(`astro:page-load`,x);