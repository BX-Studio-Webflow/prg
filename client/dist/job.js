const T="https://prg-one.vercel.app";document.addEventListener("DOMContentLoaded",async()=>{const o=document.querySelector("[dev-target=job-id]"),r=document.querySelector("[dev-target=job-name]"),n=document.querySelector("[dev-target=title]"),a=document.querySelector("[dev-target=description]"),c=document.querySelector("[dev-target=custom-text-2]"),d=document.querySelector("[dev-target=state]"),s=document.querySelector("[dev-target=isWorkFromHome]"),i=document.querySelector("[dev-target=employmentType]"),l=document.querySelector("[dev-target=externalCategoryID]"),u=document.querySelector("[dev-target=job-loader]"),m=document.querySelector("[dev-target=content-wrap]"),b=new URLSearchParams(window.location.search).get("id");if(!o||!r||!n||!a||!c||!d||!s||!i||!u||!m||!l)return console.error("Missing element");if(!b)return console.error("Missing id");try{const e=await y(Number(b));e.count===1?(j({job:e,jobCustomText2:c,jobDescription:a,jobEmploymentType:i,jobExternalCategoryID:l,jobIdInput:o,jobNameInput:r,jobState:d,jobTitle:n,jobWorkFromHome:s,jobLoader:u,jobContentWrap:m}),console.log({job:e})):console.log("no job",e)}catch(e){console.error("Something went wrong",e)}function j({job:e,jobCustomText2:t,jobDescription:g,jobEmploymentType:p,jobExternalCategoryID:S,jobIdInput:v,jobNameInput:h,jobState:x,jobTitle:C,jobWorkFromHome:w,jobLoader:q,jobContentWrap:I}){v.value=e.data[0].id.toString(),h.value=e.data[0].title,C.textContent=e.data[0].title,g.innerHTML=e.data[0].publicDescription,t.textContent=e.data[0].customText2??"",x.textContent=e.data[0].address.state??"",console.log({jobWorkFromHome:w}),p.textContent=e.data[0].employmentType,S.innerText=e.data[0].externalCategoryID??"",q.setAttribute("dev-hide","true"),I.setAttribute("dev-hide","false")}async function y(e){try{const t=await fetch(`${T}/api/jobs/${e}`);if(!t.ok)throw new Error("Failed to fetch job");return await t.json()}catch(t){throw console.error("Error fetching job:",t),t}}});
//# sourceMappingURL=job.js.map
