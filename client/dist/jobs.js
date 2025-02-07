const S="http://localhost:3000";document.addEventListener("DOMContentLoaded",async()=>{const C=document.querySelector("[dev-target=job-search]"),I=document.querySelectorAll("[dev-target-filters]"),g=document.querySelector("[dev-target=job-item-template]"),h=document.querySelector("[dev-target=job-loader]"),f=document.querySelector("[dev-target=jobs-wrapper]"),m=document.querySelector("[dev-target=job-list]");let u="",j="",p="",d=null;if(!C||!I||!g||!h||!f||!m)return console.error("Missing elements");try{const e=await k();d=e,L({jobs:e,jobList:m,jobLoader:h,jobItemTemplate:g,jobsWrapper:f}),A({jobSearchInput:C,jobItemTemplate:g,jobList:m,jobLoader:h,jobsWrapper:f}),T({jobFilterWrappers:I,jobItemTemplate:g,jobList:m,jobLoader:h,jobsWrapper:f})}catch(e){console.error("Something went wrong",e)}function A({jobSearchInput:e,jobItemTemplate:t,jobList:i,jobLoader:s,jobsWrapper:a}){e.addEventListener("input",o=>{if(p=o.target.value,d){const c=y({category:j,jobs:d,search:p,state:u});L({jobs:c,jobList:i,jobLoader:s,jobItemTemplate:t,jobsWrapper:a})}})}function y({category:e,jobs:t,search:i,state:s}){return{...t,data:t.data.filter(a=>{var n;const o=i===""||a.title.toLowerCase().includes(i.toLowerCase()),r=s===""||((n=a.address.state)==null?void 0:n.toLowerCase())===s.toLowerCase(),c=e===""||a.publishedCategory.name.toLowerCase()===e.toLowerCase();return o&&r&&c})}}function T({jobFilterWrappers:e,jobItemTemplate:t,jobList:i,jobLoader:s,jobsWrapper:a}){e.forEach(async o=>{const r=o.getAttribute("dev-target-filters"),c=o.querySelector("[dev-target=dd-input]"),n=o.querySelector("[dev-target=dd-wrapper]");if(!n||!c)return console.error("Missing filter dropdown elements");if(!r)return console.error("Missing filter type");if(r==="state"){const l=await J();E({filterDropdownInput:c,filterDropdownWrapper:n,filterList:l,filterType:r,jobItemTemplate:t,jobList:i,jobLoader:s,jobsWrapper:a})}else if(r==="category"){const l=await M();E({filterDropdownInput:c,filterDropdownWrapper:n,filterList:l,filterType:r,jobItemTemplate:t,jobList:i,jobLoader:s,jobsWrapper:a})}})}function E({filterDropdownInput:e,filterDropdownWrapper:t,filterList:i,filterType:s,jobList:a,jobLoader:o,jobItemTemplate:r,jobsWrapper:c}){const n=t.querySelector("[dev-target=dd-container]"),l=t.querySelector("[dev-target=dd-item-template]");if(!n||!l)return console.error("Missing filter dropdown elements");n.innerHTML="",console.log({filterDropdownInput:e}),e.addEventListener("click",()=>{console.log("click"),t.getAttribute("dev-hide")==="true"?t.setAttribute("dev-hide","false"):t.setAttribute("dev-hide","true")});const w=l.cloneNode(!0);w.textContent="Select one...",w.addEventListener("click",()=>{if(e.textContent="Select one...",s==="state"?u="":s==="category"&&(j=""),t.setAttribute("dev-hide","true"),d){const b=y({category:j,jobs:d,search:p,state:u});L({jobs:b,jobList:a,jobLoader:o,jobItemTemplate:r,jobsWrapper:c})}}),n.appendChild(w),i.forEach(b=>{const v=l.cloneNode(!0);v.textContent=b,v.addEventListener("click",()=>{if(e.textContent=b,s==="state"?u=b:s==="category"&&(j=b),t.setAttribute("dev-hide","true"),d){const x=y({category:j,jobs:d,search:p,state:u});L({jobs:x,jobList:a,jobLoader:o,jobItemTemplate:r,jobsWrapper:c})}}),n.appendChild(v)})}function L({jobs:e,jobList:t,jobLoader:i,jobItemTemplate:s,jobsWrapper:a}){t.innerHTML="",e.data.forEach(o=>{const r=s.cloneNode(!0),c=r.querySelector("[dev-target=item-link]"),n=r.querySelector("[dev-target=item-title]"),l=r.querySelector("[dev-target=location]");if(!c||!n||!l)return console.error("Missing job item elements");c.href=`/internal-jobs-final?id=${o.id}`,n.textContent=o.title,l.textContent=`${o.address.city}${o.address.state?"/"+o.address.state:""}`,t.appendChild(r)}),q({element:i,toggle:"hide"}),q({element:a,toggle:"show"})}function q({element:e,toggle:t}){t==="show"?e.setAttribute("dev-hide","false"):e.setAttribute("dev-hide","true")}async function k(){try{const e=await fetch(`${S}/api/jobs`);if(!e.ok)throw new Error("Failed to fetch jobs");return await e.json()}catch(e){throw console.error("Error fetching jobs:",e),e}}async function J(){try{const e=await fetch(`${S}/api/states`);if(!e.ok)throw new Error("Failed to fetch job states");return await e.json()}catch(e){throw console.error("Error fetching job states:",e),e}}async function M(){try{const e=await fetch(`${S}/api/categories`);if(!e.ok)throw new Error("Failed to fetch job categories");return await e.json()}catch(e){throw console.error("Error fetching job categories:",e),e}}});
//# sourceMappingURL=jobs.js.map
