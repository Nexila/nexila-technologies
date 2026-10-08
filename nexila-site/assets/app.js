const {useState,useEffect,useRef}=React;const html=htm.bind(React.createElement);
const STATS=[[1000,'+','Students Trained',0],[200,'+','Guided Through Career Prep',0],[10,'+','Technical Mentors',0],[15,'+','Job-Oriented IT Courses',0],[4.9,'★','Rated on Google',1]];
const parseHash=()=>window.NX_PAGE||{r:'home'};
const BASE=window.NX_BASE||'';
const pageUrl=(r,slug)=>r==='about'?BASE+'about-us.html':r==='courses'?BASE+'courses.html':r==='internship'?BASE+'internship.html':r==='hackathon'?BASE+'hackathon.html':r==='course'?BASE+'courses/'+slug+'.html':BASE+'index.html';
function go(e,r,sec,slug){if(e&&e.preventDefault)e.preventDefault();const cur=parseHash();
 if(cur.r===r&&(r!=='course'||cur.slug===slug)){if(sec){const el=document.getElementById(sec);el&&el.scrollIntoView({behavior:'smooth'})}else window.scrollTo({top:0,behavior:'smooth'});return}
 location.href=pageUrl(r,slug)+(sec?'#'+sec:'')}
function openDemo(e,kind){if(e&&e.preventDefault)e.preventDefault();window.dispatchEvent(new CustomEvent('nx-open',{detail:kind||'demo'}))}

const COURSES=[
 {c:'Full Stack',i:'🧩',t:'MERN Full Stack',d:'6 months',l:'Beginner',m:'Classroom / Online',x:'React, Node, MongoDB with live projects.'},
 {c:'Full Stack',i:'☕',t:'Java Full Stack',d:'6 months',l:'Beginner',m:'Classroom / Online',x:'Java, Spring Boot, React and SQL.'},
 {c:'Cloud & DevOps',i:'☁️',t:'AWS with DevOps',d:'4 months',l:'Intermediate',m:'Classroom / Online',x:'AWS, Docker, Kubernetes, CI/CD pipelines.'},
 {c:'Cloud & DevOps',i:'🔷',t:'Azure Training',d:'3 months',l:'Beginner',m:'Online',x:'Azure fundamentals to certification prep.'},
 {c:'Data & AI',i:'🤖',t:'Data Science & AI',d:'6 months',l:'Beginner',m:'Classroom / Online',x:'Python, ML and real-world AI projects.'},
 {c:'Data & AI',i:'📊',t:'Power BI & Tableau',d:'2 months',l:'Beginner',m:'Classroom / Online',x:'Dashboards and business analytics.'},
 {c:'Testing',i:'🧪',t:'Selenium Testing',d:'3 months',l:'Beginner',m:'Classroom / Online',x:'Manual and automation testing skills.'},
 {c:'Programming',i:'🐍',t:'Python Programming',d:'2 months',l:'Beginner',m:'Classroom / Online',x:'From basics to automation and APIs.'}];
const CATS=['All',...new Set(COURSES.map(c=>c.c))];
const REVIEWS=[
 {n:'Student name',s:5,t:'Sample review. Live Google reviews will appear here once the Google Places API is connected.'},
 {n:'Student name',s:5,t:'Sample review. Each card will show the real reviewer name, rating, date and text from Google.'},
 {n:'Student name',s:5,t:'Sample review. The list refreshes automatically, so new reviews show up without editing the site.'}];
const FAQ=[
 ["Do you provide placement support?","Yes. Structured career assistance includes resume preparation, LinkedIn guidance, mock interviews and interview readiness, and we work with 100+ hiring partners. Results depend on your effort and performance, and our team will guide you throughout."],
 ["Can I attend a free demo class before enrolling?","Yes. You can book a free demo class, experience how our trainers teach and ask your questions before you decide to join."],
 ["Do I need coding knowledge to join?","No. Our beginner-friendly tracks start from the basics, so freshers and non-IT learners can join without prior coding experience."],
 ["How do I choose the right course?","Use the interest matcher on this page or talk to our career counsellor. We look at your education, current skills, interests and target role, and explain course suitability, duration and career paths before you enrol."],
 ["Are online classes available?","Yes. Most courses are offered in both classroom mode at our Tambaram centre and live online mode. Choose whichever suits your schedule and location."],
 ["How big are the batches?","We keep batches small and focused so you can ask questions, get trainer feedback and take an active part in every session."],
 ["Will I work on real projects?","Yes. Selected courses include guided real-time projects and role-relevant assignments so you can apply what you learn. Ask the counsellor which projects are part of your course."],
 ["What are the course fees and duration?","Fees and duration differ from course to course. Our team shares the complete details, including syllabus and duration, before you enrol, so there are no surprises."],
 ["Can working professionals join?","Yes. Working professionals can choose flexible classroom or live online options. Contact us to discuss timings that fit around your job."],
 ["Do you offer internships?","Yes. Our Internship Program lets students work on practical, live-style projects, including AI and ML tracks. Contact us for the current intake and eligibility."],
 ["What is Nexila Hackathon 2026?","It is our tech challenge for college students, with teams of 2 to 4 building projects in AI and programming, and a prize pool of ₹50K. Use the register button on this page to apply."],
 ["Do you offer corporate training for teams?","Yes. We offer corporate training for organisations. Write to info@nexilatechnologies.com or call +91 980 306 1234 to discuss your requirements."]];

function useReveal(){const r=useRef();useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);return r}
function Fade({children}){const r=useReveal();return html`<div ref=${r} className="fade">${children}</div>`}
function Counter({to,suffix,dec=0}){const [v,setV]=useState(0);const r=useRef();
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();const t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1400,1);setV(to*p);p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});o.observe(r.current);return()=>o.disconnect()},[]);
 return html`<b ref=${r}>${dec?v.toFixed(dec):Math.round(v).toLocaleString('en-US')}${suffix}</b>`}
function Head({tag,title,sub}){return html`<div><div className="tag">${tag}</div><h2 className="h2">${title}</h2>${sub&&html`<p className="sub">${sub}</p>`}</div>`}

function Topbar(){return html`<div className="tb"><div className="wrap"><div className="l">
 <a href="tel:+919803061234">📞 +91 980 306 1234</a><a href="mailto:info@nexilatechnologies.com">✉️ info@nexilatechnologies.com</a></div>
 <div className="r">📍 Tambaram, Chennai</div></div></div>`}
function Header({route}){const [o,setO]=useState(false);
 const L=[['Home',pageUrl('home')],['About',pageUrl('about')],['Courses',pageUrl('courses')],['Placements','#placements'],['Internship',pageUrl('internship')],['Hackathon',pageUrl('hackathon')],['Blog','https://www.nexilatechnologies.com/author/admin_nexila/'],['Contact','#contact']];
 const click=(e,n,h)=>{setO(false);if(n==='Home')go(e,'home');else if(n==='About')go(e,'about');else if(n==='Courses')go(e,'courses');else if(h[0]==='#'&&route!=='home'&&n!=='Contact')go(e,'home',h.slice(1))};
 const act=n=>(n==='Home'&&route==='home')||(n==='About'&&route==='about')||(n==='Courses'&&(route==='courses'||route==='course'))||(n==='Internship'&&route==='internship')||(n==='Hackathon'&&route==='hackathon');
 return html`<header><div className="wrap nav"><a href=${pageUrl('home')} className="logo" onClick=${e=>go(e,'home')}>Nexila<b>.</b>Tech</a>
 <button className="burger" onClick=${()=>setO(!o)} aria-label="Menu">${o?'✕':'☰'}</button>
 <nav className=${'links'+(o?' open':'')}>${L.map(([n,h])=>html`<a key=${n} href=${h} className=${act(n)?'act':''} target=${h.startsWith('http')?'_blank':null} rel=${h.startsWith('http')?'noopener':null} onClick=${e=>click(e,n,h)}>${n}</a>`)}
 <a href="#contact" onClick=${e=>{setO(false);openDemo(e)}} className="btn cta" style=${{padding:'9px 18px'}}>Enroll Now!</a></nav></div></header>`}

function Hero(){return html`<section className="hero"><div className="wrap">
 <div className="hgrid"><div>
  <div className="tag">Software Training Institute · Tambaram, Chennai</div>
  <h1 style=${{marginTop:12}}>Learn. Build. <span>Get Hired.</span></h1>
  <p>Job-focused software training with live projects, internships and dedicated placement support, taught by working industry mentors.</p>
  <div className="row"><a href="#contact" onClick=${openDemo} className="btn cta">Book Free Demo</a><a href="#courses" className="btn ghost">Explore Courses</a></div></div>
  <div className="code"><div className="dots"><span></span><span></span><span></span></div>
  <div><i>const</i> career = <i>await</i> nexila.<em>train</em>({'{'}</div>
  <div>  &nbsp;skills: [<em>"React"</em>, <em>"Cloud"</em>, <em>"AI"</em>],</div>
  <div>  &nbsp;projects: <em>"live"</em>, mentors: <em>"industry"</em></div>
  <div>{'}'});</div><div style=${{marginTop:8}}><i>if</i> (career.ready) <em>getHired</em>();</div></div></div>
 <div className="stats">
  ${STATS.map(([n,x,l,d])=>html`<div className="stat" key=${l}><${Counter} to=${n} suffix=${x} dec=${d}/><span>${l}</span></div>`)}</div></div></section>`}

function Partners(){return html`<section className="sec" id="placements" style=${{paddingBottom:0}}><div className="wrap" style=${{textAlign:'center'}}>
 <div className="tag">Trusted by 100+ hiring partners</div>
 <div className="partners">${['Partner logo','Partner logo','Partner logo','Partner logo','Partner logo'].map((p,i)=>html`<span key=${i} className="pill">${p}</span>`)}</div></div></section>`}

const SLUG={'MERN Full Stack':'mern','Java Full Stack':'java-full-stack','AWS with DevOps':'aws-devops','Azure Training':'azure','Data Science & AI':'data-science','Power BI & Tableau':'power-bi','Selenium Testing':'selenium','Python Programming':'python'};
function Courses(){const [c,setC]=useState('All');const list=COURSES.filter(x=>c==='All'||x.c===c);
 return html`<section className="sec" id="courses"><div className="wrap"><${Head} tag="Courses" title="Pick a career track" sub="Beginner-friendly programs that end with projects, interview prep and placement support."/>
 <div className="tabs">${CATS.map(x=>html`<button key=${x} className=${'tab'+(c===x?' on':'')} onClick=${()=>setC(x)}>${x}</button>`)}</div>
 <div className="grid g4">${list.map(x=>html`<div className="card" key=${x.t}><div className="ico">${x.i}</div><h3>${x.t}</h3><p>${x.x}</p>
 <div className="meta"><span>${x.d}</span><span>${x.l}</span><span>${x.m}</span></div><a href=${pageUrl('course',SLUG[x.t])} className="lnk" onClick=${e=>go(e,'course',null,SLUG[x.t])}>View course →</a></div>`)}</div><div style=${{textAlign:'center',marginTop:32}}><a href=${pageUrl('courses')} className="btn outl" onClick=${e=>go(e,'courses')}>View all courses →</a></div></div></section>`}

function Viz({i}){const [m,setM]=useState(0);const d=k=>({style:{animationDelay:k*.35+'s'}});
 if(i===0)return html`<div className="vz rd">${['Tools','Concepts','Workflows'].map((t,k)=>html`<div className="rn" key=${t} ...${d(k)}><b>${k+1}</b><span>${t}</span></div>`)}</div>`;
 if(i===1)return html`<div className="vz"><div className="term"><div ...${d(0)}><em>trainer</em>$ demo --live</div><div ...${d(1)}>› explain(concept)</div><div ...${d(2)}>› show(example)</div><div ...${d(3)} className="cur">▍</div></div><div className="bub">👨‍🏫 “Let’s try it together.”</div></div>`;
 if(i===2)return html`<div className="vz"><div className="col">${[['✓','Exercise completed'],['✓','Guided activity done'],['▶','Your turn: practise it']].map(([c,t],k)=>html`<div className="ck" key=${t} ...${d(k)}><b className=${k===2?'o':''}>${c}</b>${t}</div>`)}</div></div>`;
 if(i===3)return html`<div className="vz"><div className="avs">${['🧑‍💻','👩‍💻','🙋','👨‍💻','👩‍💻'].map((a,k)=>html`<div key=${k} className=${'a2'+(k===2?' hl':'')}>${a}</div>`)}</div><div className="bub">🙋 “Can you explain this again?”</div><div className="bub" style=${{animationDelay:'1.6s'}}>👨‍🏫 “Sure, here’s feedback.”</div></div>`;
 if(i===4)return html`<div className="vz"><div className="kb">${[['To do',1,''],['In progress',2,''],['Done',2,' dn']].map(([h,n,c],k)=>html`<div key=${h} className=${'kc'+c}><small>${h}</small>${Array.from({length:n}).map((_,j)=>html`<div key=${j} className="kd" ...${d(k+j)}></div>`)}</div>`)}</div></div>`;
 if(i===5)return html`<div className="vz"><div className="col" style=${{maxWidth:'none',flexDirection:'row',flexWrap:'wrap'}}>${['Resume','LinkedIn','Mock interview','Interview ready'].map((t,k)=>html`<div className="ck" key=${t} ...${d(k)}><b>✓</b>${t}</div>`)}</div></div>`;
 if(i===6)return html`<div className="vz" style=${{flexDirection:'column',alignItems:'flex-start'}}><div className="tg">${['Classroom','Live online'].map((t,k)=>html`<button key=${t} className=${m===k?'on':''} onClick=${()=>setM(k)}>${t}</button>`)}</div>
  <div className="pill2" key=${m} style=${{animationDelay:'0s'}}>${m===0?'📍 Learn in person at our Tambaram centre':'💻 Join live sessions from anywhere'}</div></div>`;
 return html`<div className="vz fl">${['You','Right course','Career path'].map((t,k)=>html`<${React.Fragment} key=${t}>${k>0&&html`<span className="ar">→</span>`}<div className="pill2" ...${d(k)}>${t}</div><//>`)}</div>`}

function Why(){const [a,setA]=useState(0);const [pause,setPause]=useState(false);
 useEffect(()=>{if(pause)return;const t=setTimeout(()=>setA(x=>(x+1)%8),5500);return()=>clearTimeout(t)},[a,pause]);
 const W=[['📚','Industry-Relevant Curriculum','Learn tools, concepts and workflows aligned with the skills used in relevant IT roles.',['Tools','Concepts','Workflows']],['👨‍🏫','Experienced Technical Trainers','Learn through instructor-led sessions with practical explanations, demonstrations and guidance.',['Explanations','Demonstrations','Guidance']],['🛠️','Hands-On Practical Training','Practise tools and concepts through exercises and guided activities, not just theory.',['Exercises','Guided activities','Practice']],['👥','Small-Batch Learning','Ask questions, receive trainer feedback and participate actively with focused batch sizes.',['Ask questions','Trainer feedback','Active participation']],['🚀','Guided Real-Time Projects','Apply your learning through practical assignments and role-relevant projects in selected courses.',['Assignments','Role-relevant projects','Applied learning']],['💼','Structured Career Assistance','Get support with resume preparation, LinkedIn guidance, mock interviews and interview readiness.',['Resume','LinkedIn','Mock interviews']],['🔀','Flexible Learning Options','Choose classroom or live online training based on your schedule, location and learning preference.',['Classroom','Live online','Your schedule']],['🧭','Transparent Career Counselling','Understand course suitability, skills covered, duration and career paths before you enrol.',['Course suitability','Duration','Career paths']]];
 const n=W.length,cur=W[a];
 return html`<section className="sec alt"><div className="wrap"><${Head} tag="Why Nexila" title="Training built around real, job-ready skills" sub="Select a point to explore it, or let it play."/>
 <div className="whyg"><div className=${'wl'+(pause?' pz':'')} onMouseEnter=${()=>setPause(true)} onMouseLeave=${()=>setPause(false)}>
 ${W.map((w,i)=>html`<button key=${w[1]} className=${'wi'+(i===a?' on':'')} onClick=${()=>setA(i)}><span className="e">${w[0]}</span>${w[1]}${i===a&&html`<i key=${'p'+a}></i>`}</button>`)}</div>
 <div className="wp" onMouseEnter=${()=>setPause(true)} onMouseLeave=${()=>setPause(false)}><div className="num">${String(a+1).padStart(2,'0')}</div>
 <div className="anim" key=${a}><div className="big">${cur[0]}</div><h3>${cur[1]}</h3><p>${cur[2]}</p><${Viz} i=${a}/><div className="chips">${cur[3].map(c=>html`<span key=${c}>${c}</span>`)}</div></div>
 <div className="wn"><button onClick=${()=>setA((a+n-1)%n)} aria-label="Previous">←</button><button onClick=${()=>setA((a+1)%n)} aria-label="Next">→</button><small>${a+1} / ${n}</small></div></div></div>
 <div className="steps">${[['Learn','Master fundamentals with expert-led sessions.'],['Practice','Solve assignments and build projects.'],['Intern','Work on live projects in our internship program.'],['Get Placed','Interview with our hiring partners.']].map(([t,d])=>html`<div className="step" key=${t}><h3>${t}</h3><p>${d}</p></div>`)}</div></div></section>`}

const PATHS=[
 {i:'🌱',t:'Freshers',d:'Starting your IT journey? Begin with the fundamentals and build confidence one step at a time.',s:['Programming basics','Core course','Mini projects','Interview prep'],c:['Python Programming','Java Full Stack','MERN Full Stack']},
 {i:'💼',t:'Working Professionals',d:'Upskill alongside your job with flexible classroom or live online learning focused on your role.',s:['Skill-gap discussion','Flexible batch','Hands-on labs','Role-ready projects'],c:['AWS with DevOps','Data Science & AI','Azure Training']},
 {i:'🎓',t:'Graduates',d:'Turn your degree into practical, job-ready skills with guided training and project work.',s:['Choose a track','Learn the tools','Build projects','Career assistance'],c:['Java Full Stack','MERN Full Stack','Data Science & AI']},
 {i:'🌐',t:'Non-IT Learners',d:'Coming from commerce, arts or another stream? Start from the basics, with no prior coding required.',s:['Career counselling','Beginner foundation','Guided practice','Portfolio projects'],c:['Selenium Testing','Power BI & Tableau','Python Programming']},
 {i:'📚',t:'Final-Year Students',d:'Get ahead before graduation with practical training, internships and hackathons.',s:['Pick a skill','Learn with practice','Internship or hackathon','Placement readiness'],c:['Internship Program','Hackathon 2026','MERN Full Stack']},
 {i:'🚀',t:'Career Switchers',d:'Moving into IT from another field? Get a clear roadmap, focused skills and support through the change.',s:['Goal and skills review','Targeted course','Real-time projects','Resume and interviews'],c:['Selenium Testing','Power BI & Tableau','AWS with DevOps']}];
const LPBG=['#1d4ed8','#0f766e','#7c3aed','#c2410c','#0369a1','#be185d'];
const LPSC=['🧑‍💻','👩‍💼','👨‍🎓','🧭','🎓','🔁'];
function Paths(){const [a,setA]=useState(0);
 return html`<section className="sec" id="paths"><div className="wrap"><${Head} tag="Learning Paths" title="A learning path for every background" sub="Whether you are starting out, moving up or changing direction, Nexila helps you choose a course and pace that fit where you are today and where you want to go."/>
 <div className="lpw">${PATHS.map((x,i)=>html`<div key=${x.t} role="button" tabIndex="0" aria-expanded=${i===a} className=${'lp'+(i===a?' on':'')}
  style=${{'--g':`linear-gradient(150deg,${LPBG[i]},#0B1B3A)`,...(x.img?{backgroundImage:`url(${x.img})`}:{})}}
  onClick=${()=>setA(i)} onKeyDown=${e=>(e.key==='Enter'||e.key===' ')&&(e.preventDefault(),setA(i))}>
  ${!x.img&&html`<div className="sc">${LPSC[i]}</div>`}<div className="n">0${i+1}</div><div className="vt">${x.t}</div>
  <div className="dt"><h3>${x.t}</h3><p>${x.d}</p>
  <div className="stp">${x.s.map((t,k)=>html`<${React.Fragment} key=${t}>${k>0&&html`<em>→</em>`}<span>${t}</span><//>`)}</div>
  <div className="row2">${x.c.map(c=>html`<span className="cc" key=${c}>${c}</span>`)}<a href="#contact" onClick=${openDemo} className="btn cta" style=${{padding:'10px 20px'}}>Get guidance →</a></div></div></div>`)}</div></div></section>`}

const IN={d:['📊','Data & numbers'],c:['💻','Coding & logic'],b:['🎨','Building what people see'],t:['🔍','Spotting bugs & details'],s:['☁️','Servers & automation'],a:['🤖','AI & new tech'],m:['📱','Mobile apps']};
const MC=[
 {i:'🧩',t:'Full Stack Development',x:'Build complete web applications, front to back.',k:['c','b']},
 {i:'🐍',t:'Python Programming',x:'Learn to code and automate everyday tasks with Python.',k:['c','d']},
 {i:'📈',t:'Data Analytics',x:'Turn raw numbers into dashboards and decisions.',k:['d']},
 {i:'🧠',t:'Data Science',x:'Find patterns in data and build predictive models.',k:['d','a','c']},
 {i:'✨',t:'Artificial Intelligence',x:'Work with AI tools and build intelligent applications.',k:['a','c']},
 {i:'☁️',t:'AWS with DevOps',x:'Deploy, run and automate applications on the cloud.',k:['s','c']},
 {i:'🧪',t:'Software Testing',x:'Keep software reliable with manual and automated testing.',k:['t','c']},
 {i:'📱',t:'Mobile App Development',x:'Create Android and iOS apps people use every day.',k:['m','b','c']}];
function Match(){const [sel,setSel]=useState([]);
 const tog=k=>setSel(v=>v.includes(k)?v.filter(x=>x!==k):[...v,k]);
 const rows=MC.map((c,idx)=>({...c,idx,hits:c.k.filter(k=>sel.includes(k))})).sort((a,b)=>sel.length?(b.hits.length-a.hits.length||a.idx-b.idx):a.idx-b.idx);
 const best=sel.length&&rows[0].hits.length?rows[0]:null;
 return html`<section className="sec alt" id="match"><div className="wrap"><${Head} tag="Not sure which course to choose?" title="Pick what you enjoy, we will point you to a course" sub="Select the things you like doing. We will highlight the courses that fit your interests and strengths best."/>
 <div className="chs">${Object.entries(IN).map(([k,[e,l]])=>html`<button key=${k} className=${'ch'+(sel.includes(k)?' on':'')} onClick=${()=>tog(k)}>${e} ${l}</button>`)}</div>
 <div className="mg">${rows.map(r=>{const top=best&&r.idx===best.idx;const hit=r.hits.length>0;
  return html`<div key=${r.t} className=${'mc'+(top?' top':hit?' hit':sel.length?' dim':'')}>${top&&html`<span className="bd">Best match</span>`}
  <div className="ico">${r.i}</div><h3>${r.t}</h3><p>${r.x}</p><div className="mt">${r.hits.map(k=>html`<span key=${k}>✓ ${IN[k][1]}</span>`)}</div></div>`})}</div>
 <div className="sum">${best?html`Top pick for you: <b>${best.t}</b> · matches ${best.hits.length} of your ${sel.length} ${sel.length>1?'picks':'pick'}`:'Choose one or more interests above to see your matches.'}</div>
 <p className="note">The right course depends on your education, current skills, interests and the role you are aiming for. Talk to a counsellor before you enrol to understand course suitability, duration and career paths.</p>
 <div style=${{textAlign:'center'}}><a href="#contact" onClick=${openDemo} className="btn outl">Talk to a Career Counsellor</a></div></div></section>`}

function Hackathon(){return html`<section className="sec" id="hackathon"><div className="wrap"><div className="hack"><div>
 <div className="tag" style=${{color:'#7FB0FF'}}>Nexila Hackathon 2026</div><h2 style=${{margin:'8px 0 12px'}}>Build. Innovate. Compete.</h2>
 <p>Open to college students in teams of 2 to 4. Turn your idea into a real project and win.</p><a href=${pageUrl('hackathon')+'#register'} onClick=${e=>go(e,'hackathon','register')} className="btn cta" style=${{marginTop:8}}>Register Now →</a></div>
 <div className="prize"><span>Prize pool</span><b>₹50K</b><span>AI and programming tracks</span></div></div></div></section>`}

function Reviews(){return html`<section className="sec alt" id="reviews"><div className="wrap"><div className="rev-head"><${Head} tag="Student Reviews" title="What our students say on Google"/>
 <span className="live">Live from Google Reviews · preview data</span></div>
 <div className="grid g3">${REVIEWS.map((r,i)=>html`<div className="card rev" key=${i}><div className="star">${'★'.repeat(r.s)}</div><p>${r.t}</p>
 <div className="who"><div className="av">${r.n[0]}</div><div><b>${r.n}</b><div style=${{color:'var(--muted)',fontSize:12}}>Google review</div></div></div></div>`)}</div></div></section>`}

function Faq(){const [o,setO]=useState(0);const half=Math.ceil(FAQ.length/2);
 const item=(f,i)=>html`<div className="q" key=${i}><button onClick=${()=>setO(o===i?-1:i)} aria-expanded=${o===i}>${f[0]}<span>${o===i?'−':'+'}</span></button>${o===i&&html`<div>${f[1]}</div>`}</div>`;
 return html`<section className="sec"><div className="wrap"><${Head} tag="FAQ" title="Common questions"/>
 <div className="faq2"><div>${FAQ.slice(0,half).map((f,i)=>item(f,i))}</div><div>${FAQ.slice(half).map((f,i)=>item(f,i+half))}</div></div>
 <div style=${{textAlign:'center',marginTop:28}}><p style=${{color:'var(--muted)',margin:'0 0 14px'}}>Still have questions? Our team is happy to help.</p><a href="#contact" onClick=${openDemo} className="btn cta">Talk to a Counsellor</a></div></div></section>`}

function Lead(){const [ok,setOk]=useState(false);
 return html`<section className="sec" id="contact" style=${{paddingTop:0}}><div className="wrap"><div className="lead"><div>
 <div className="tag" style=${{color:'#7FB0FF'}}>Free consultation</div><h2 style=${{margin:'8px 0 12px',fontSize:34}}>Book your free demo class</h2>
 <p>Tell us what you want to learn and our team will call you back. You can also reach us on +91 980 306 1234.</p></div>
 ${ok?html`<div style=${{alignSelf:'center'}}><h3>Thank you! ✅</h3><p>We will contact you shortly.</p></div>`:
 html`<form onSubmit=${e=>{e.preventDefault();setOk(true)}}><input required placeholder="Full name"/><input required type="tel" placeholder="Mobile number"/><input type="email" placeholder="Email"/>
 <select defaultValue=""><option value="" disabled>Interested course</option>${COURSES.map(c=>html`<option key=${c.t}>${c.t}</option>`)}</select>
 <button className="btn cta" type="submit">Request Callback</button></form>`}</div></div></section>`}

const SOC=[['X (Twitter)','https://x.com/NexilaTech','<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z"/>'],['Facebook','https://www.facebook.com/profile.php?id=61562570624917','<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>'],['Instagram','https://www.instagram.com/nexila_technologies/','<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.3 5.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/>'],['LinkedIn','https://www.linkedin.com/in/nexila-technologies-050ab131a/','<path d="M6.5 8.7H3.3V20h3.2V8.7zM4.9 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.7 13.3c0-3-1.6-4.8-4.2-4.8-1.4 0-2.4.8-2.9 1.5V8.7h-3.1V20h3.2v-5.9c0-1.5.7-2.5 2-2.5 1.3 0 1.9.9 1.9 2.5V20h3.1v-6.7z"/>']];
function Footer(){const nav=id=>e=>go(e,'home',id);
 return html`<footer><div className="wrap"><div className="fg">
 <div><div className="logo" style=${{color:'#fff',marginBottom:10}}>Nexila<b>.</b>Tech</div><p>Software training and placement institute in Tambaram, Chennai.</p>
  <div className="soc">${SOC.map(([n,u,d])=>html`<a key=${n} href=${u} target="_blank" rel="noopener" aria-label=${n} title=${n}><svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML=${{__html:d}}></svg></a>`)}</div></div>
 <div><h3>Company</h3><a href=${pageUrl('about')} onClick=${e=>go(e,'about')}>About</a><a href=${pageUrl('courses')} onClick=${e=>go(e,'courses')}>Courses</a><a href="#reviews" onClick=${nav('reviews')}>Reviews</a><a href="https://www.nexilatechnologies.com/author/admin_nexila/" target="_blank" rel="noopener">Blog</a></div>
 <div><h3>Programs</h3><a href=${pageUrl('course','mern')} onClick=${e=>go(e,'course',null,'mern')}>Full Stack</a><a href=${pageUrl('internship')}>Internship</a><a href=${pageUrl('hackathon')}>Hackathon 2026</a><a href="https://www.nexilatechnologies.com/corporate-training/" target="_blank" rel="noopener">Corporate Training</a></div>
 <div><h3>Get in touch</h3><a href="mailto:info@nexilatechnologies.com">info@nexilatechnologies.com</a><a href="tel:+919803061234">+91 980 306 1234</a><a href="tel:+919629173443">+91 96 29 173 443</a></div></div>
 <div className="copy">© 2026 Nexila Technologies. All rights reserved.</div></div></footer>`}

function DemoPopup(){const [open,setOpen]=useState(false);const [ok,setOk]=useState(false);const [kind,setKind]=useState('demo');const seen=useRef(false);
 useEffect(()=>{try{seen.current=sessionStorage.getItem('nx_demo')==='1'}catch(e){}
  const mark=()=>{seen.current=true;try{sessionStorage.setItem('nx_demo','1')}catch(e){}};
  const f=()=>{if(!seen.current&&window.scrollY>window.innerHeight*3){mark();setKind('demo');setOk(false);setOpen(true)}};
  const o=e=>{mark();setKind(e.detail||'demo');setOk(false);setOpen(true)};
  window.addEventListener('scroll',f,{passive:true});window.addEventListener('nx-open',o);
  return()=>{window.removeEventListener('scroll',f);window.removeEventListener('nx-open',o)}},[]);
 useEffect(()=>{if(!open)return;const k=e=>e.key==='Escape'&&setOpen(false);document.addEventListener('keydown',k);const o=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',k);document.body.style.overflow=o}},[open]);
 if(!open)return null;
 const H=kind==='hack';
 const pts=H?['Teams of 2 to 4 college students','AI and programming tracks','₹50K prize pool']:['Experience a live class','Ask the trainer your questions','Get course and career guidance'];
 return html`<div className="pop" onClick=${e=>e.target===e.currentTarget&&setOpen(false)}><div className="pm" role="dialog" aria-modal="true" aria-label=${H?'Register for Nexila Hackathon 2026':'Book your free demo class'}>
  <button className="px" onClick=${()=>setOpen(false)} aria-label="Close">✕</button>
  <div className="pl"><div className="tag" style=${{color:'#7FB0FF'}}>${H?'Nexila Hackathon 2026':'Free demo class'}</div><h2>${H?'Register for the hackathon':'Book your free demo class'}</h2>
   <p>${H?'Build. Innovate. Compete.':'See how we teach before you enrol.'}</p><ul>${pts.map(t=>html`<li key=${t}>${t}</li>`)}</ul></div>
  <div className="pr">${ok?html`<div style=${{textAlign:'center',padding:'30px 0'}}><h3 style=${{fontSize:26}}>${H?'You are registered! ✅':'Thank you! ✅'}</h3><p style=${{color:'#C4D1EE'}}>${H?'Our team will contact you with the next steps.':'Our team will call you shortly to confirm your demo slot.'}</p><button className="btn cta" onClick=${()=>setOpen(false)}>Continue browsing</button></div>`:
  html`<form onSubmit=${e=>{e.preventDefault();setOk(true)}}><input required placeholder=${H?'Team leader name':'Full name'}/><input required type="tel" placeholder="Mobile number"/><input type="email" placeholder=${H?'Email':'Email (optional)'}/>
   ${H?html`<input required placeholder="College name"/><select required defaultValue=""><option value="" disabled>Team size</option><option>2 members</option><option>3 members</option><option>4 members</option></select>`:
   html`<select required defaultValue=""><option value="" disabled>Interested course</option>${COURSES.map(c=>html`<option key=${c.t}>${c.t}</option>`)}</select>
   <select required defaultValue=""><option value="" disabled>Preferred mode</option><option>Classroom (Tambaram)</option><option>Live online</option></select>`}
   <button className="btn cta" type="submit">${H?'Register Now':'Book My Free Demo'}</button><small>You can also call us on +91 980 306 1234.</small></form>`}</div></div></div>`}

const VIDS=[
 {e:'🧑‍💻',n:'Student name',c:'Full Stack Development',g:'#1d4ed8',yt:''},
 {e:'📊',n:'Student name',c:'Data Analytics',g:'#0f766e',yt:''},
 {e:'☁️',n:'Student name',c:'AWS with DevOps',g:'#7c3aed',yt:''},
 {e:'🧪',n:'Student name',c:'Software Testing',g:'#c2410c',yt:''}];
function Testi(){const [a,setA]=useState(0);const [pl,setPl]=useState(false);const v=VIDS[a];const bg=x=>({'--g':`linear-gradient(150deg,${x.g},#0B1B3A)`});
 return html`<section className="sec alt"><div className="wrap"><${Head} tag="Student stories" title="What Our Students Say" sub="Watch real testimonials from our successful graduates."/>
 <div className="tv"><div className="tmain" style=${bg(v)} key=${a}>
  ${pl&&v.yt?html`<iframe src=${'https://www.youtube-nocookie.com/embed/'+v.yt+'?autoplay=1&rel=0'} title=${'Testimonial: '+v.n} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen></iframe>`:
  html`<${React.Fragment}><div className="sc">${v.e}</div><button className="play" onClick=${()=>setPl(true)} aria-label=${'Play testimonial by '+v.n}>▶</button><div className="cap"><b>${v.n}</b><span>${v.c}</span></div>${pl&&html`<div className="soon">Video coming soon</div>`}<//>`}</div>
 <div className="tl">${VIDS.map((x,i)=>html`<button key=${i} className=${'tt'+(i===a?' on':'')} style=${bg(x)} onClick=${()=>{setA(i);setPl(false)}}><span className="th">${x.e}<i>▶ Watch</i></span><span><b>${x.n}</b><small>${x.c}</small></span></button>`)}</div></div>
 <div style=${{textAlign:'center',marginTop:28}}><a href="#reviews" className="btn outl" onClick=${e=>go(e,'home','reviews')}>Read our Google reviews →</a></div></div></section>`}

const ABOUT_PHOTO='';
const CATS2=[['💻','Programming','Java, Python'],['☁️','Cloud Computing','AWS, Azure, GCP'],['🧪','Software Testing','Selenium, SoapUI'],['🗄️','Databases','Oracle, MySQL, MongoDB'],['📊','Data & Analytics','Data Science, Power BI, Tableau'],['📱','Mobile Apps','Android, iOS'],['🧩','Full Stack','MERN, MEAN'],['🤖','RPA','UiPath, Blue Prism'],['🌐','Web Design','React, Angular, Front-End'],['✨','AI & More','AI, MATLAB, Informatica, .NET']];
const AREAS=['Tambaram','Chromepet','Pallavaram','Velachery','Guindy','Adyar','T. Nagar','Anna Nagar','OMR','Sholinganallur','Porur','Medavakkam','Madipakkam','Nanganallur','Perungudi','Siruseri'];
function About(){
 return html`<${React.Fragment}>
 <section className="hero"><div className="wrap"><div className="hgrid"><div>
  <div className="bc"><a href=${pageUrl('home')} onClick=${e=>go(e,'home')}>Home</a> / About us</div>
  <h1 style=${{marginTop:4}}>About <span>Nexila</span> Technologies</h1>
  <p>A software training and development company in Tambaram, Chennai, helping learners and organisations build the skills for a fast-moving digital world.</p>
  <div className="row"><a href="#contact" onClick=${openDemo} className="btn cta">Enroll Now!</a><a href="#courses" onClick=${e=>go(e,'courses')} className="btn ghost">Explore Courses</a></div></div>
  <div className="abv">${ABOUT_PHOTO?html`<img src=${ABOUT_PHOTO} alt="Nexila Technologies training centre"/>`:html`<div className="ph"><span>📷</span>Nexila photo</div>`}</div></div></div></section>

 <section className="sec"><div className="wrap"><${Head} tag="Who we are" title="Where learning meets real-world skills"/>
 <div className="abg"><div>
  <p>Nexila Technologies is a software training and development company based in Tambaram, Chennai. We help students, graduates and working professionals build the skills the IT industry looks for, and we support organisations through training and software solutions.</p>
  <p>Our aim is simple: bridge the gap between learning and practical application. That is why our classes lean on hands-on practice, guided projects and trainers who explain concepts clearly, so you can keep pace with a rapidly changing technology landscape.</p>
  <p>Whether you want to upskill, move ahead in your career or start one, we are here to support you at every step, from choosing the right course to getting interview-ready.</p>
  <div className="row"><a href="#contact" onClick=${openDemo} className="btn cta">Book a Free Demo</a></div></div>
  <div className="mv">${[['🎯','Our mission','To empower individuals and organisations with the skills and solutions needed to succeed in the digital age.'],['🛠️','What we do','Job-focused IT training, internships, hackathons and corporate training, plus software solutions.'],['🤝','How we teach','Practical sessions, guided projects, small batches and structured career assistance.']].map(([i,t,d])=>html`<${Fade} key=${t}><div className="card"><div className="ico">${i}</div><div><h3>${t}</h3><p>${d}</p></div></div><//>`)}</div></div></div></section>

 <section className="sec alt"><div className="wrap"><div className="stats" style=${{marginTop:0}}>${STATS.map(([n,x,l,d])=>html`<div className="stat" key=${l}><${Counter} to=${n} suffix=${x} dec=${d}/><span>${l}</span></div>`)}</div></div></section>

 <section className="sec"><div className="wrap"><${Head} tag="What we teach" title="Training across the IT skills that matter" sub="From programming and cloud to data, testing and AI, choose the track that fits your goals."/>
 <div className="grid g5">${CATS2.map(([i,t,d])=>html`<${Fade} key=${t}><div className="card"><div className="ico">${i}</div><h3>${t}</h3><p>${d}</p></div><//>`)}</div></div></section>

 <${Testi}/>

 <section className="sec"><div className="wrap"><${Head} tag="Beyond the classroom" title="Programs that build real experience"/>
 <div className="grid g3">${[['🚀','Internship Program','Work on practical, live-style projects, including AI and ML tracks.','Apply now',e=>go(e,'internship','apply')],['🏆','Nexila Hackathon 2026','A tech challenge for college students. Teams of 2 to 4, AI and programming tracks, ₹50K prize pool.','Register now',e=>go(e,'hackathon','register')],['🏢','Corporate Training','Skill-building programs for teams and organisations.','Enquire',e=>openDemo(e)]].map(([i,t,d,b,f])=>html`<${Fade} key=${t}><div className="card"><div className="ico">${i}</div><h3>${t}</h3><p style=${{marginBottom:14}}>${d}</p><a href="#contact" className="lnk" onClick=${f}>${b} →</a></div><//>`)}</div></div></section>

 <section className="sec alt"><div className="wrap" style=${{textAlign:'center'}}><${Head} tag="Where our learners come from" title="Serving learners across Chennai" sub="Our centre is in Tambaram, and learners join us from across the city, or online from anywhere."/>
 <div className="areas" style=${{justifyContent:'center'}}>${AREAS.map(a=>html`<span key=${a}>${a}</span>`)}</div></div></section>

 <${Lead}/><//>`}

const CCATS=[['Programming Languages','💻','#1d4ed8'],['Cloud Computing','☁️','#0369a1'],['Software Testing','🧪','#c2410c'],['Database Developer','🗄️','#0f766e'],['Data Analytics & Science','📊','#7c3aed'],['Mobile App Development','📱','#be185d'],['Full Stack','🧩','#2563EB'],['RPA','🤖','#0e7490'],['Web Designing','🌐','#b45309'],['Others','✨','#4f46e5']];
const CBLURB=['The foundation of software development. Learning more than one language boosts your versatility and employability.','On-demand servers, storage, databases and networking: flexible, scalable and central to modern software.','Check software with manual and automated tools to find errors and gaps against the requirements.','Learn to design, build and maintain databases.','Extract insights from data to support decisions, using statistics, programming and domain knowledge.','Build apps for the devices everyone carries, from communication to business services.','Learn the front end, back end and databases to build complete applications.','Use software robots to automate repetitive, rule-based tasks.','Design, build and maintain websites, from layouts to interactive front ends.','Artificial Intelligence, MATLAB, Informatica and .NET training.'];
const COURSELIST=[[0,'java','Java'],[0,'python','Python'],[1,'aws-certification','AWS Training & Certification'],[1,'aws-devops','AWS with DevOps'],[1,'azure','Azure'],[1,'gcp','Google Cloud Platform (GCP)'],[2,'selenium','Selenium'],[2,'soapui','SoapUI'],[2,'manual-testing','Manual Testing'],[2,'mobile-testing','Mobile Application Testing'],[3,'oracle','Oracle'],[3,'mysql','MySQL'],[3,'mongodb','MongoDB'],[4,'data-analytics','Data Analytics'],[4,'data-science','Data Science'],[4,'tableau','Tableau'],[4,'power-bi','Power BI'],[5,'android','Android'],[5,'ios','iOS'],[6,'mern','MERN Full Stack'],[6,'mean','MEAN Full Stack'],[6,'java-full-stack','Java Full Stack'],[6,'python-full-stack','Python Full Stack'],[7,'uipath','UiPath'],[7,'blue-prism','Blue Prism'],[7,'openspan','OpenSpan'],[7,'automation-anywhere','Automation Anywhere'],[8,'web-development','Web Development'],[8,'angular','Angular JS'],[8,'react','React JS'],[8,'frontend','Front-End Development'],[9,'ai','Artificial Intelligence'],[9,'matlab','MATLAB'],[9,'informatica','Informatica'],[9,'dotnet','.NET']].map(([cat,slug,name])=>({cat,slug,name}));
const T=(...a)=>a;
const DET={mern:{
 desc:'Learn to build complete web applications with the MERN stack: MongoDB, Express.js, React and Node.js. You will cover JavaScript fundamentals, RESTful API development, front-end interfaces and database management, and gain hands-on experience connecting every layer and deploying a full application.',
 stack:[['MongoDB','NoSQL database that stores your application data.'],['Express.js','Web framework for Node.js that makes servers and APIs simpler to build.'],['React','JavaScript library for building user interfaces and single-page apps.'],['Node.js','Runtime that lets you run JavaScript on the server.']],
 comps:['JavaScript fundamentals: core concepts including ES6 features','Node.js basics: environment setup, event-driven architecture and npm packages','Express.js: RESTful APIs, middleware, routing, requests and responses','MongoDB: databases, collections, documents and CRUD operations','React: components, state with hooks and routing with React Router','Full stack integration: connecting front end and back end, API calls and data flow','Deployment: publishing apps on platforms such as Heroku, AWS or Vercel'],
 facts:[['Duration','120 days'],['Class time','90 hours'],['Mode','Classroom + Live online'],['Level','Beginners to experienced'],['Projects','Real-world application'],['Certificate','Completion certificate']],
 mods:[
  {t:'HTML',g:[['Basics',['Elements','Tags','Text formatting','Attributes','Links','Lists','Images','Tables','Colors & backgrounds']],['Web forms',['Input','Text fields','Password','Checkboxes','Radio','Select','Upload','Textarea','Hidden fields','Submit & reset']],['Special tags',['Body','Meta','Style','Div','Layouts','Frames']],['Semantic elements',['Article','Aside','Figure','Footer','Header','Mark','Nav','Progress','Section','Summary','Time']],['HTML5 forms',['Datalist','Output','Color','Date','Datetime-local','Email','Month','Number','Range','Search','Tel','URL','Week','Autocomplete','Autofocus','Pattern (regexp)','Min & max']]]},
  {t:'CSS',g:[['Fundamentals',['Syntax','Selectors (ID, class, tag, attribute)','Backgrounds','Text','Fonts','Links','Lists','Tables']],['Box model & layout',['Border','Outline','Margin','Padding','Dimension','Display','Positioning','Floating','Navigation bar','Image gallery','Image opacity','Alignment']],['CSS3',['Border-radius','Border images','Background size & origin','Text effects & shadow','Box-shadow','Text-overflow','Word-wrap & word-break','Fonts']],['Transforms & transitions',['2D transforms','3D transforms','Transition delay','Transition duration','Transition property','Timing function']]]},
  {t:'JavaScript',g:[['Getting started',['What is JavaScript?','What is AJAX?','Development workflow','Tools','Objects','Variables','Comparisons','Events','Your first script','Internal vs external scripts','Comments']],['Core language',['Alerts, confirms and prompts','Conditional statements','Functions & return values','Switch/case','Error handling','Loops','Arrays','do & while loops','Detecting objects']],['Interactivity',['Image rollovers','Slideshows','Random images','Jump & dynamic menus','Form validation','Email verification','Window, mouse, keyboard & focus events']],['Browser & data',['Cookies: write, read, delete','The DOM: add, delete, insert, replace nodes','Dates & times','Countdowns']],['Real-world uses',['Sliding menus','Pop-up menus','Slideshows with captions','Stylesheet switcher']]]},
  {t:'ReactJS',i:['Introduction to ReactJS','Library & directory structure','React components','Types of components','Building a simple component','Component composition','Component styling','Inter-component communication','Passing data between components','Routing & single-page apps','Hooks & states','Hooks vs states','Types of hooks','Redux as a state container','React Bootstrap','Deploying a ReactJS app']},
  {t:'Node JS',i:['Introduction to Node.js','Application architecture','Synchronous & asynchronous programming','Callback functions','Promises','MongoDB with Node.js','Designing the schema','Designing REST APIs (GET, POST, PUT, DELETE)','JSON Web Token authentication','Building an auth app','E-commerce backend','Payment gateway integration']},
  {t:'ExpressJS: building RESTful APIs',i:['Express & RESTful services','Your first web server','Nodemon','Environment variables','Route parameters','Handling GET requests','Handling POST requests','Calling endpoints with Postman','Input validation','Handling PUT requests','Handling DELETE requests','Project: build the Genres API']},
  {t:'Express: advanced topics',i:['Middleware','Custom middleware','Built-in middleware','Environments & configuration','Debugging','Templating engines','Database engines & integration','Authentication','Structuring Express applications']},
  {t:'MongoDB',i:['Introduction to MongoDB (NoSQL)','Collections','Documents','MySQL vs NoSQL','Inserting data','Filter queries','Schema validation','Indexing','Aggregation','Embedded documents']}],
 trainer:['10+ years of experience','Has trained hundreds of students','Strong theoretical and practical knowledge','Certified professionals with high grades','Well connected with hiring HRs in multinational companies','Real-time project and application experience in MNCs','Currently working in top-level multinational companies'],
 faqs:[['What is the MERN stack?','MERN stands for MongoDB (database), Express.js (web framework for Node.js), React (front-end library) and Node.js (runtime). Together they let you build full stack web applications using JavaScript.'],['Who is this course for?','Beginners who want to start a career in web development, and developers who want to add full stack skills.'],['What prerequisites do I need?','Familiarity with HTML, CSS and basic JavaScript is recommended. Knowing REST APIs and asynchronous programming helps but is not mandatory.'],['What will I learn?','You will set up a MERN application, manage a MongoDB database, build a server with Express.js, develop a front end with React and connect everything into a complete application.'],['What tools or software do I need?','A code editor such as VS Code, Node.js installed and access to MongoDB (locally or through a cloud service). Familiarity with Git also helps.'],['How is the course structured?','Lectures, hands-on coding exercises and projects, with access to additional learning resources.'],['Is there hands-on practice?','Yes. The course includes hands-on exercises and projects so you can apply what you learn in real-world scenarios.'],['Is it available online or in person?','Both. You can learn in our Tambaram classroom or join live online sessions.'],['How long is the course?','120 days, with 90 hours of class time in total. Our team will share the exact schedule when you enrol.'],['Will I get a certificate?','Yes. On successful completion you receive a certificate of completion that you can add to your resume or LinkedIn profile.'],['What jobs can I apply for?','Roles such as Full Stack Developer, Front-End Developer, Back-End Developer or Software Engineer.'],['Will I work on real-world projects?','Yes. You will build a complete application with the MERN stack, which reinforces your learning and gives you practical experience.']]}};
const GEN_FAQ=c=>[['What will I learn in '+c+'?','You will learn the tools and concepts used in real projects, with trainer demonstrations, hands-on practice and guided assignments. Our counsellor can share the detailed syllabus.'],['Do I need prior experience?','Our beginner-friendly tracks start from the basics. Ask our counsellor about prerequisites for this course.'],['Is it available online or in person?','Yes. Most courses run in our Tambaram classroom and as live online batches.'],['Can I attend a demo class first?','Yes. You can book a free demo class and ask the trainer your questions before you enrol.'],['What are the fees and duration?','These vary by course. Our team shares complete details, including the syllabus, before you enrol.']];
function Acc({items}){const [o,setO]=useState(0);return html`<div>${items.map((f,i)=>html`<div className="q" key=${i}><button onClick=${()=>setO(o===i?-1:i)} aria-expanded=${o===i}>${f[0]}<span style=${{color:'var(--blue)'}}>${o===i?'−':'+'}</span></button>${o===i&&html`<div>${f[1]}</div>`}</div>`)}</div>`}
function CourseCard({c}){const cc=CCATS[c.cat];
 return html`<a href=${pageUrl('course',c.slug)} onClick=${e=>go(e,'course',null,c.slug)} className="cc2" style=${{'--g':'linear-gradient(150deg,'+cc[2]+',#0B1B3A)'}}><div className="top"><span className="bd2">${cc[0]}</span>${cc[1]}</div><div className="b"><h3>${c.name}</h3><div className="meta"><span>Classroom + Live online</span><span>Free demo</span></div><span className="lnk">View details →</span></div></a>`}
function CoursesPage(){const [cat,setCat]=useState(-1);const [q,setQ]=useState('');
 const list=COURSELIST.filter(c=>(cat<0||c.cat===cat)&&c.name.toLowerCase().includes(q.trim().toLowerCase()));
 return html`<${React.Fragment}>
 <section className="phero"><div className="wrap"><div className="bc"><a href=${pageUrl('home')} onClick=${e=>go(e,'home')}>Home</a> / Courses</div>
 <h1>Our <span style=${{color:'var(--orange)'}}>Courses</span></h1>
 <p>Courses for every level, from beginners to advanced learners. Pick a track, attend a free demo and start learning.</p>
 <div className="srch"><span>🔍</span><input value=${q} onChange=${e=>setQ(e.target.value)} placeholder="Search courses, e.g. Python, AWS, React" aria-label="Search courses"/></div></div></section>
 <section className="sec" style=${{paddingTop:36}}><div className="wrap">
 <div className="tabs" style=${{marginTop:0}}><button className=${'tab'+(cat<0?' on':'')} onClick=${()=>setCat(-1)}>All (${COURSELIST.length})</button>${CCATS.map((c,i)=>html`<button key=${c[0]} className=${'tab'+(cat===i?' on':'')} onClick=${()=>setCat(i)}>${c[1]} ${c[0]}</button>`)}</div>
 ${cat>=0&&html`<p className="sub" style=${{marginTop:18}}>${CBLURB[cat]}</p>`}
 <div className="grid g4">${list.map(c=>html`<${CourseCard} key=${c.slug} c=${c}/>`)}</div>
 ${!list.length&&html`<p style=${{textAlign:'center',color:'var(--muted)',marginTop:40}}>No courses match your search. <a href="#contact" className="lnk" onClick=${openDemo}>Ask our counsellor</a></p>`}</div></section>
 <section className="sec alt" style=${{padding:'48px 0'}}><div className="wrap"><div className="band"><div><h2>Not sure which course to choose?</h2><p>Tell us your background and goals. We will suggest a path and explain duration and career options.</p></div>
 <div className="row"><a href=${pageUrl('home')+'#match'} className="btn ghost" onClick=${e=>go(e,'home','match')}>Try the interest matcher</a><a href="#contact" className="btn cta" onClick=${openDemo}>Talk to a Counsellor</a></div></div></div></section>
 <${Lead}/><//>`}
const CHN=['Tambaram','Velachery','T Nagar','Thoraipakkam','Anna Nagar','Porur','Medavakkam','Vadapalani','Guindy','Nungambakkam','Chromepet','Pallavaram','Saidapet'];
function JourneyTrack(){const [run,setRun]=useState(false);const [a,setA]=useState(-1);const r=useRef();
 const S=[['📚','Learn','Master fundamentals with expert-led sessions.'],['🛠️','Practice','Solve assignments and build projects.'],['🚀','Intern','Work on live projects in our internship program.'],['🎯','Get Placed','Interview with our hiring partners.']];
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){o.disconnect();setRun(true);S.forEach((_,k)=>setTimeout(()=>setA(x=>Math.max(x,k)),300+k*750))}},{threshold:.3});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);
 return html`<section className="sec jt-sec"><div className="wrap" ref=${r}><${Head} tag="Your journey" title="Your journey with Nexila" sub="Four stages that take you from fundamentals to the interview room."/>
 <div className=${'jt'+(run?' run':'')}><i className="fl"></i>${S.map(([i,t,d],k)=>html`<button key=${t} className=${'js'+(k<=a?' on':'')} style=${{animationDelay:(0.2+k*0.7)+'s'}} onClick=${()=>setA(k)}><span className="nd">${i}</span><div><small>Stage ${k+1}</small><h3>${t}</h3><p>${d}</p></div></button>`)}</div>
 <div style=${{textAlign:'center',marginTop:44}}><a href="#contact" className="btn cta" onClick=${openDemo}>Start Your Journey</a></div></div></section>`}

function CourseDetail({slug}){const c=COURSELIST.find(x=>x.slug===slug);const [open,setOpen]=useState(0);const [tab,setTab]=useState('about');
 useEffect(()=>{const ids=['about','syllabus','trainer','faqs'];const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setTab(e.target.id)),{rootMargin:'-35% 0px -60% 0px'});ids.forEach(i=>{const el=document.getElementById(i);el&&o.observe(el)});return()=>o.disconnect()},[slug]);
 if(!c)return html`<section className="sec"><div className="wrap" style=${{textAlign:'center'}}><h2 className="h2">Course not found</h2><a href=${pageUrl('courses')} className="btn cta" onClick=${e=>go(e,'courses')}>Browse all courses</a></div></section>`;
 const d=DET[slug],cc=CCATS[c.cat];
 const desc=d?d.desc:CBLURB[c.cat]+' Nexila\'s '+c.name+' training is led by experienced trainers, with hands-on practice and guided projects, in classroom or live online mode.';
 const facts=d?d.facts:[['Mode','Classroom + Live online'],['Free demo','Available'],['Batches','Small, focused batches'],['Duration','Shared by our counsellor']];
 const faqs=d?d.faqs:GEN_FAQ(c.name);
 const rel=[...COURSELIST.filter(x=>x.cat===c.cat&&x.slug!==slug),...COURSELIST.filter(x=>x.cat!==c.cat&&['mern','python','aws-devops','data-science','selenium'].includes(x.slug))].slice(0,4);
 const jump=id=>{setTab(id);const el=document.getElementById(id);el&&el.scrollIntoView({behavior:'smooth'})};
 return html`<${React.Fragment}>
 <section className="hero" style=${{paddingBottom:48}}><div className="wrap"><div className="hgrid"><div>
  <div className="bc"><a href=${pageUrl('home')} onClick=${e=>go(e,'home')}>Home</a> / <a href=${pageUrl('courses')} onClick=${e=>go(e,'courses')}>Courses</a> / ${c.name}</div>
  <div className="tag">${cc[0]}</div><h1 style=${{marginTop:8,fontSize:'clamp(30px,5vw,48px)'}}>${c.name} <span>Training</span></h1>
  <p style=${{fontSize:17}}>${desc}</p>
  <div className="row"><a href="#contact" className="btn cta" onClick=${openDemo}>Enroll Now!</a><a href="#contact" className="btn ghost" onClick=${openDemo}>Request Syllabus</a></div></div>
  <div className="abv" style=${{background:'linear-gradient(150deg,'+cc[2]+',#0B1B3A)'}}>${cc[1]}</div></div></div></section>
 <div className="tabbar"><div className="wrap">${[['about','About Course'],['syllabus','Syllabus'],['trainer','Trainer Profile'],['faqs','FAQs']].map(([i,l])=>html`<button key=${i} className=${'ct'+(tab===i?' on':'')} onClick=${()=>jump(i)}>${l}</button>`)}</div></div>
 <section className="sec" style=${{paddingTop:44}}><div className="wrap"><div className="cdg"><div>
  <div className="sx" id="about"><h2>About the course</h2><p>${desc}</p>
   ${d?html`<div className="stk">${d.stack.map(([t,x])=>html`<div className="card" key=${t}><h3>${t}</h3><p>${x}</p></div>`)}</div><h3 style=${{fontSize:19}}>What the course covers</h3><ul className="lst">${d.comps.map(t=>html`<li key=${t}>${t}</li>`)}</ul>`:
   html`<h3 style=${{fontSize:19}}>What you will get</h3><ul className="lst"><li>Trainer-led sessions with practical explanations and demonstrations</li><li>Hands-on exercises and guided assignments</li><li>Role-relevant projects in selected courses</li><li>Resume, LinkedIn and mock interview support</li><li>Classroom or live online learning</li></ul>`}</div>
  <div className="sx" id="syllabus"><h2>Syllabus</h2>
   ${d?d.mods.map((m,i)=>html`<div className="sy" key=${m.t}><button onClick=${()=>setOpen(open===i?-1:i)} aria-expanded=${open===i}><span><i className="n">${i+1}</i>${m.t}</span><span style=${{color:'var(--blue)'}}>${open===i?'−':'+'}</span></button>${open===i&&html`<div className="bd3">${m.g?m.g.map(([h,it])=>html`<div key=${h}><div className="gh">${h}</div><div className="tp">${it.map(t=>html`<span key=${t}>${t}</span>`)}</div></div>`):html`<div className="tp" style=${{marginTop:4}}>${m.i.map(t=>html`<span key=${t}>${t}</span>`)}</div>`}</div>`}</div>`):
   html`<div className="card"><h3>Detailed ${c.name} syllabus</h3><p style=${{margin:'8px 0 16px'}}>Our counsellor will share the module-wise syllabus, duration and schedule for this course.</p><a href="#contact" className="btn cta" onClick=${openDemo}>Request Syllabus</a></div>`}</div>
  <div className="sx" id="trainer"><h2>Trainer profile</h2><div className="tr"><div className="tph">👨‍🏫</div><div>
   <p>Our trainers give you the freedom to explore the subject through real-time examples. They help you complete your projects, prepare you for interview questions and welcome your questions at any time.</p>
   <ul className="lst">${(d?d.trainer:['Experienced technical trainers','Instructor-led sessions with practical demonstrations','Help with projects and interview preparation','Questions welcome at any time']).map(t=>html`<li key=${t}>${t}</li>`)}</ul>
   <a href="#contact" className="btn cta" onClick=${openDemo} style=${{marginTop:18}}>Let's Get Started</a></div></div></div>
  <div className="sx" id="faqs"><h2>Frequently asked questions</h2><${Acc} items=${faqs}/></div></div>
  <aside className="side"><div className="snap"><h3>Course snapshot</h3>${facts.map(([k,v])=>html`<div className="fr" key=${k}><span>${k}</span><b>${v}</b></div>`)}
   <a href="#contact" className="btn cta" onClick=${openDemo} style=${{display:'block',textAlign:'center',marginTop:18}}>Enroll Now!</a>
   <a href="#contact" className="btn outl" onClick=${openDemo} style=${{display:'block',textAlign:'center',marginTop:10}}>Book a Free Demo</a>
   <p style=${{textAlign:'center',fontSize:14,color:'var(--muted)',margin:'14px 0 0'}}>Or call <a href="tel:+919803061234" className="lnk">+91 980 306 1234</a></p></div></aside></div></div></section>
 <${JourneyTrack}/>
 <section className="sec alt"><div className="wrap"><${Head} tag="Trending courses" title="You may also like"/><div className="grid g4">${rel.map(x=>html`<${CourseCard} key=${x.slug} c=${x}/>`)}</div></div></section>
 <section className="sec"><div className="wrap"><${Head} tag="Available in Chennai" title=${c.name+' training near you'}/><div className="areas">${CHN.map(a=>html`<span key=${a}>${c.name} course in ${a}</span>`)}</div></div></section>
 <${Lead}/><//>`}


function FaqCols({items}){const [o,setO]=useState(0);const half=Math.ceil(items.length/2);
 const it=(f,i)=>html`<div className="q" key=${i}><button onClick=${()=>setO(o===i?-1:i)} aria-expanded=${o===i}>${f[0]}<span>${o===i?'−':'+'}</span></button>${o===i&&html`<div>${f[1]}</div>`}</div>`;
 return html`<div className="faq2"><div>${items.slice(0,half).map((f,i)=>it(f,i))}</div><div>${items.slice(half).map((f,i)=>it(f,i+half))}</div></div>`}
function Crumb({page}){return html`<div className="bc"><a href=${pageUrl('home')} onClick=${e=>go(e,'home')}>Home</a> / ${page}</div>`}

/* ================= INTERNSHIP ================= */
const IFEAT=[['🚀','Real-world projects','Work on active projects connected to the real-time tech industry and make a tangible impact.'],['🧑‍🏫','Mentorship','Get paired with an experienced software developer who gives guidance, feedback and support throughout.'],['🛠️','Skill development','Sharpen your programming, pick up new languages and frameworks, and learn the tools and methods used in industry.'],['🤝','Networking opportunities','Engage with professionals across different departments and build connections for your career.'],['🎓','Workshops and seminars','Regular learning sessions on Agile methodologies, software testing, UI/UX design, web development, Java, Python, AWS and more.'],['📈','Performance reviews','Receive constructive feedback through regular reviews to understand your strengths and where to grow.']];
const ISKILLS=['Full Stack Development','MERN Stack','Python / Java Development','Web Application Development','Database Management','API Integration'];
const IELIG=['Currently enrolled in a college or university, pursuing any degree','A basic understanding of software development concepts and methodologies','Ability to work collaboratively in a team','Strong problem-solving skills and a willingness to learn'];
const IWHO=['Engineering students (CSE / IT / ECE)','Degree students (BCA / B.Sc Computer Science)','MCA / M.Sc IT students','Freshers looking for practical IT experience'];
const IBEN=[['🧰','Tools and platforms','Access to company resources, including software tools and platforms.'],['📜','Certificate and letter','A certificate of completion and a recommendation letter on successful completion.'],['🧑‍💼','Industry mentor','Be paired with a mentor from the software industry.'],['💻','Live project support','Hands-on support while you work on a live project.'],['✨','Grooming session','A grooming session to help you get ready for the industry.']];
const IWHY=['Real-time software projects','Full Stack development exposure','Internship completion certificate','Career guidance and support','Industry-oriented training methodology','Located in the heart of Tambaram, Chennai'];
const IGRAD=['B.E / B.Tech','MSc','BCA','MCA','BBA','BSc','MBA','M.E','BMS','BASc','B.Com','M.Com','Other'];
const IYEAR=['1st year','2nd year','Pre-final year','Final year'];
const IDOM=['Web Development','Java / Python','Data Science','Data Analytics','Cloud (AWS)','DevOps','Full Stack Development','Machine Learning & AI','Finance','Other'];
const INEAR=['Guduvancheri','Medavakkam','Chengalpattu','Kanchipuram','Pallavaram','ECR','Kelambakkam','Villupuram','Tindivanam'];
const IFAQ=[
 ['What is the Nexila Internship Program?','It is a software development internship for college students, designed to give hands-on experience in the tech industry. You apply classroom knowledge to real-world projects, build new skills and work with experienced professionals.'],
 ['Who can apply for the internship?','Students currently enrolled in a college or university, from 1st year to final year. Any graduate can apply, including engineering, BCA, B.Sc, MCA, M.Sc IT and other degree students, as well as freshers wanting practical IT experience.'],
 ['Which degrees can I apply with?','Any graduate can apply. The application form lists B.E / B.Tech, MSc, BCA, MCA, BBA, BSc, MBA, M.E, BMS, BASc, B.Com, M.Com and Other.'],
 ['Which year of study can apply?','The form accepts 1st year, 2nd year, pre-final year and final year students.'],
 ['Do I need prior coding experience?','You need a basic understanding of software development concepts and methodologies, along with strong problem-solving skills and a willingness to learn.'],
 ['How long is the internship?','The internship runs for 2 to 8 weeks.'],
 ['When can I start?','Start dates are flexible, and you can choose weekdays or weekends. Our team will confirm the available batches when you apply.'],
 ['Which domains can I choose from?','Web Development, Java / Python, Data Science, Data Analytics, Cloud (AWS), DevOps, Full Stack Development, Machine Learning & AI and Finance. You can also pick Other and tell us what you are interested in.'],
 ['Will I work on real projects?','Yes. Interns work on live, real-time projects and receive live project support from the team.'],
 ['Will I get a mentor?','Yes. Each intern is paired with a mentor who is an experienced software developer and provides guidance, feedback and support.'],
 ['What skills will I develop?','Hands-on skills in areas such as Full Stack Development, the MERN stack, Python / Java development, web application development, database management and API integration.'],
 ['Are there workshops or learning sessions?','Yes. Regular sessions cover topics like Agile methodologies, software testing, UI/UX design, web development, Java, Python, AWS and more.'],
 ['Will I receive a certificate?','Yes. On successful completion of the program you receive a certificate of completion and a recommendation letter.'],
 ['What is the grooming session?','It is part of the program benefits and helps you get ready for the professional environment. Our team shares the details when you join.'],
 ['Do I get access to tools and platforms?','Yes. Interns get access to company resources, including software tools and platforms.'],
 ['How is my progress evaluated?','Interns receive constructive feedback through regular performance reviews, which help you understand your strengths and the areas where you can grow.'],
 ['Will I work in a team?','Yes. Collaboration is a key part of the program, so you will work with other interns and mentors in a team environment.'],
 ['Is career guidance available?','Yes. The program includes career guidance and support, along with industry-oriented training, to help you move towards a career in the IT industry.'],
 ['Where is the internship held?','Nexila Technologies is in West Tambaram, Chennai - 600045. Please contact our team to confirm the mode and batch details for your chosen domain.'],
 ['Can I join from areas outside Tambaram?','Yes. Students come from nearby areas such as Guduvancheri, Medavakkam, Chengalpattu, Kanchipuram, Pallavaram, ECR, Kelambakkam, Villupuram and Tindivanam, among others.'],
 ['How do I apply?','Fill in the Apply for Internship form on this page with your name, contact number, college, degree, year of study and preferred domain. Our team will contact you.'],
 ['Is there a fee or stipend?','Please contact our team on +91 980 306 1234 or info@nexilatechnologies.com for the latest details on fees and other terms.'],
 ['Can I fit the internship around my college schedule?','Start dates are flexible and available on weekdays and weekends, so talk to our team about a schedule that works with your college timetable.']];

const IPH=[{img:'',e:'📷',l:'Internship photo 1'},{img:'',e:'👩‍💻',l:'Internship photo 2'},{img:'',e:'🧑‍💻',l:'Internship photo 3'}];
const IWHY2=[['Real-time software projects','Build on live, real-time projects instead of only classroom exercises.'],['Full Stack development exposure','Work across the front end, back end and database.'],['Internship completion certificate','Receive a certificate of completion, along with a recommendation letter.'],['Career guidance and support','Get guidance to plan your move into the IT industry.'],['Industry-oriented training','A practical approach that focuses on implementation rather than just theory.'],['Located in the heart of Tambaram','West Tambaram, Chennai - 600045.']];
function InternForm(){const [ok,setOk]=useState(false);
 const sel=(l,a)=>html`<select required defaultValue=""><option value="" disabled>${l}</option>${a.map(x=>html`<option key=${x}>${x}</option>`)}</select>`;
 if(ok)return html`<div style=${{padding:'12px 0'}}><h3 style=${{fontSize:24}}>Application received ✅</h3><p style=${{color:'#C4D1EE'}}>Thank you! Our team will contact you shortly.</p></div>`;
 return html`<form onSubmit=${e=>{e.preventDefault();setOk(true)}}><input required placeholder="Name"/><input required type="tel" placeholder="Contact Number"/><input required placeholder="College Name"/>${sel('Graduate',IGRAD)}${sel('Year of Studying',IYEAR)}${sel('Domain',IDOM)}<button className="btn cta" type="submit">Submit Form</button></form>`}
function GReviews(){return html`<div><div className="rev-head"><${Head} tag="Student reviews" title="What students say on Google"/><span className="live">Live from Google Reviews · preview data</span></div>
 <div className="rvl">${REVIEWS.map((r,i)=>html`<div className="card rev" key=${i}><div className="star">${'★'.repeat(r.s)}</div><p>${r.t}</p><div className="who"><div className="av">${r.n[0]}</div><div><b>${r.n}</b><div style=${{color:'var(--muted)',fontSize:12}}>Google review</div></div></div></div>`)}</div></div>`}

function InternshipPage(){
  const GT=[['📅','Batch Availability','Flexible, on weekdays or weekends'],['🎓','Open to','College students, 1st year to final year'],['📚','Eligible Graduates','Any Graduate'],['💻','Program format','Live project with a mentor from the software industry']];
 return html`<${React.Fragment}>
 <section className="hero" style=${{paddingBottom:56}}><div className="wrap"><div className="hgrid"><div>
  <${Crumb} page="Internship Program"/><div className="tag">Software Development Internship · Tambaram, Chennai</div>
  <h1 style=${{marginTop:8,fontSize:'clamp(30px,5vw,50px)'}}>IT Internship for <span>Students</span> in Chennai</h1>
  <p>Real-time software training, live projects and career guidance for college students, guided by mentors from the software industry.</p>
  <div className="row"><a href="#apply" className="btn cta" onClick=${e=>go(e,'internship','apply')}>Apply for Internship</a><a href="#i-faqs" className="btn ghost" onClick=${e=>go(e,'internship','i-faqs')}>Read FAQs</a></div></div>
  <${PhotoSlider} items=${IPH} ms=${2000}/></div></div></section>

 <section className="sec alt"><div className="wrap"><div className="abg" style=${{alignItems:'start'}}>
  <div><${Head} tag="Why Nexila" title="Why choose Nexila Technologies for an internship in Tambaram?" sub="Our internship bridges academic learning and real-time IT industry requirements, with live projects, practical exposure and mentoring from experienced professionals."/>
   <div className="mv" style=${{marginTop:26}}>${IWHY2.map(([t,d])=>html`<${Fade} key=${t}><div className="card"><div className="ico">✓</div><div><h3>${t}</h3><p>${d}</p></div></div><//>`)}</div></div>
  <div className="gx"><span className="tag" style=${{color:'#7FB0FF'}}>Internship at a glance</span>
   <div className="gxd"><span>Duration</span><div><b>2 – 8</b> weeks</div><div className="wk">${[1,2,3,4,5,6,7,8].map(w=>html`<i key=${w} className=${w<=2?'m':'f'}></i>`)}</div><small>Minimum 2 weeks, up to 8 weeks</small></div>
   <div className="gxg">${GT.map(([i,k,v])=>html`<div key=${k}><span className="gi">${i}</span><small>${k}</small><b>${v}</b></div>`)}</div>
   <div className="gxo"><span className="gi">📜</span><div><small>On completion</small><b>Certificate of completion and recommendation letter</b></div></div>
   <div className="gxc"><small>Domains</small><div className="chipset">${IDOM.map(x=>html`<i key=${x}>${x}</i>`)}</div></div>
   <a href="#apply" className="btn cta" onClick=${e=>go(e,'internship','apply')}>Apply Now</a></div></div></div></section>

 <section className="sec"><div className="wrap"><div className="sl"><div>
  <div className="blk"><${Head} tag="Program overview" title="A stepping stone into the IT industry" sub="This internship gives college students hands-on experience in the tech industry. You apply classroom knowledge to real-world projects, build new skills and work alongside seasoned professionals, whether you want to improve your coding, understand the software development life cycle or learn about current industry trends."/>
   <div className="grid g2">${IFEAT.map(([i,t,d])=>html`<${Fade} key=${t}><div className="card"><div className="ico">${i}</div><h3>${t}</h3><p>${d}</p></div><//>`)}</div>
   <div style=${{marginTop:30}}><div className="tag">What you will practise</div><div className="areas">${ISKILLS.map(x=>html`<span key=${x}>${x}</span>`)}</div></div></div>
  <div className="blk"><${Head} tag="Eligibility" title="Who can apply?"/><div className="grid g2"><div className="card"><h3 style=${{marginBottom:6}}>Eligibility criteria</h3><ul className="ck2">${IELIG.map(x=>html`<li key=${x}>${x}</li>`)}</ul></div>
   <div className="card"><h3 style=${{marginBottom:6}}>Open to</h3><ul className="ck2">${IWHO.map(x=>html`<li key=${x}>${x}</li>`)}</ul><p style=${{margin:0,fontSize:14}}><b>2 to 8 weeks</b>, with flexible batches on weekdays or weekends.</p></div></div></div>
  <div className="blk"><${Head} tag="Benefits" title="What you get from the program"/><div className="grid g2">${IBEN.map(([i,t,d])=>html`<${Fade} key=${t}><div className="card"><div className="ico">${i}</div><h3>${t}</h3><p>${d}</p></div><//>`)}</div></div>
  <div className="blk"><${GReviews}/></div></div>
  <aside className="sf"><div className="sfc"><div className="tag" style=${{color:'#7FB0FF'}}>Apply for internship</div><h3>Start your software internship</h3><${InternForm}/></div></aside></div></div></section>

 <section className="sec alt" id="apply"><div className="wrap"><div className="lead" id="contact"><div>
  <div className="tag" style=${{color:'#7FB0FF'}}>Apply for internship</div><h2 style=${{margin:'8px 0 12px',fontSize:34}}>Start your software internship</h2>
  <p>Fill in the form and our team will contact you with the next steps. You can also call us on +91 980 306 1234.</p>
  <ul className="ck2" style=${{color:'#C4D1EE'}}><li style=${{color:'#C4D1EE'}}>2 to 8 weeks, flexible batches</li><li style=${{color:'#C4D1EE'}}>Live project with mentor support</li><li style=${{color:'#C4D1EE'}}>Certificate and recommendation letter</li></ul></div>
  <${InternForm}/></div></div></section>

 <section className="sec"><div className="wrap" style=${{textAlign:'center'}}><${Head} tag="Our location" title="Software Development Internship near Tambaram, Chennai" sub="Looking for an IT internship that gives real-world experience? Visit us in West Tambaram."/>
  <p style=${{margin:'20px 0 6px'}}><b>📍 Nexila Technologies</b><br/><span style=${{color:'var(--muted)'}}>West Tambaram, Chennai - 600045, Tamil Nadu, India</span></p>
  <div className="row" style=${{justifyContent:'center',marginTop:16}}><a className="btn cta" href="https://maps.app.goo.gl/XGk8e9hpmrD6n3tR8" target="_blank" rel="noopener">Find us on Google Maps</a><a className="btn outl" href="https://share.google/YXbXZivGjBjjmfGsZ" target="_blank" rel="noopener">View us on Google</a></div></div></section>

 <section className="sec alt csec" id="i-faqs"><div className="wrap"><${Head} tag="FAQs" title="Internship questions, answered" sub="Everything students ask before applying."/><${FaqCols} items=${IFAQ}/>
  <div style=${{textAlign:'center',marginTop:30}}><p style=${{color:'var(--muted)',margin:'0 0 14px'}}>Still have questions? Our team is happy to help.</p><a href="#apply" className="btn cta" onClick=${e=>go(e,'internship','apply')}>Apply for Internship</a></div></div></section><//>`}

/* ================= HACKATHON ================= */
const HK={close:'2026-09-27',r1:'2026-10-05',r2:'2026-10-17',fin:'2026-10-31'};
const eod=d=>new Date(d+'T23:59:59+05:30').getTime(),sod=d=>new Date(d+'T00:00:00+05:30').getTime();
const HST=[['$ register --team','Registration','Form your team of 2 - 4 and lock in your spot.','Closes Sep 27',HK.close],['$ run round1 --filter-idea','Round 1 · Idea Filtering','Submit your concept online. Best ideas move forward.','Oct 5',HK.r1],['$ run round2 --semifinal','Round 2 · Semi-Finals','Show your build online and earn your seat in the finals.','Oct 17',HK.r2],['$ deploy --finals --live','Grand Finale','Offline. In person. Present to the judges and take the win.','Oct 31',HK.fin]];
const HWHY=[['🚀','Build real projects','Turn your technical ideas into functional and practical solutions.'],['💡','Showcase your innovation','Present your creativity, problem-solving ability and technical knowledge.'],['👥','Team collaboration','Work with 2 to 4 team members and experience real-world development collaboration.'],['🤖','Explore AI and programming','Apply artificial intelligence and programming technologies to create innovative solutions.'],['🏆','Compete and win','Compete with talented college students for a share of the ₹50,000 prize pool.'],['🎯','Gain practical experience','Go beyond classroom learning by building and presenting a working solution.']];
const HFAQ=[
 ['What is Nexila Hackathon 2026?','It is a technology hackathon organised by Nexila Technologies for college students to build and showcase innovative solutions based on AI and programming.'],
 ['Who can participate?','The hackathon is open to college students who meet the eligibility requirements. You can register as a team of 2 to 4 members.'],
 ['What is the theme?','The primary theme is AI & Programming Languages. Participants can build solutions using suitable technologies and programming languages.'],
 ['Is there a fixed problem statement?','No. You choose your own idea and build your own solution, subject to the hackathon rules and evaluation guidelines.'],
 ['What is the team size?','Each team must have a minimum of 2 and a maximum of 4 members.'],
 ['Is the hackathon online or offline?','It follows an online rounds to offline Grand Finale format. Rounds 1 and 2 are online, and the finals are held in person.'],
 ['What is the prize money?','The total prize pool is ₹50,000, with ₹25,000 for 1st place, ₹15,000 for 2nd and ₹10,000 for 3rd, plus a Performer Award and certificates.'],
 ['When is the registration deadline?','The registration deadline is September 27, 2026, subject to the availability of team slots.'],
 ['Can students from different colleges form a team?','Please refer to the official hackathon rules about inter-college teams, or contact our team to confirm.'],
 ['What technologies can we use?','You can use appropriate programming languages, frameworks and AI technologies relevant to your solution, subject to the official rules.']];

function Countdown(){const [now,setNow]=useState(Date.now());useEffect(()=>{const t=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(t)},[]);
 const L=['Registration closes in','Round 1 starts in','Round 2 starts in','Grand Finale starts in'];const i=HST.findIndex(s=>eod(s[4])>now);
 if(i<0)return html`<div className="cdn">Nexila Hackathon 2026 has concluded. Thank you for taking part!</div>`;
 const d=Math.max(0,(i===0?eod(HST[0][4]):sod(HST[i][4]))-now);
 const v=[['Days',Math.floor(d/864e5)],['Hours',Math.floor(d/36e5)%24],['Mins',Math.floor(d/6e4)%60],['Secs',Math.floor(d/1e3)%60]];
 return html`<div><div className="cdl">${d>0?L[i]:'Happening today'}</div><div className="cd">${v.map(([l,n])=>html`<div key=${l}><b>${String(n).padStart(2,'0')}</b><span>${l}</span></div>`)}</div></div>`}

const HPH=[{img:'',e:'🏆',l:'Hackathon photo 1'},{img:'',e:'👩‍💻',l:'Hackathon photo 2'}];
function PhotoSlider({items,ms=3000}){const [a,setA]=useState(0);
 useEffect(()=>{const t=setInterval(()=>setA(x=>(x+1)%items.length),ms);return()=>clearInterval(t)},[items.length,ms]);
 return html`<div className="ps2">${items.map((x,i)=>html`<div key=${i} className=${'sl2 s'+i+(i===a?' on':'')} style=${x.img?{backgroundImage:'url('+x.img+')'}:null}>${!x.img&&html`<div className="ph"><span>${x.e}</span>${x.l}</div>`}</div>`)}
 <div className="dots2">${items.map((_,i)=>html`<button key=${i} className=${i===a?'on':''} onClick=${()=>setA(i)} aria-label=${'Show photo '+(i+1)}></button>`)}</div></div>`}
const HJ=['Team locked in','Best ideas advance','Top builds qualify'];
const TIERS=[['🥇','1st place',25000,50,'#FBBF24'],['🥈','2nd place',15000,30,'#CBD5E1'],['🥉','3rd place',10000,20,'#D97706']];
function Consult(){const [ok,setOk]=useState(false);
 return html`<section className="sec alt" id="contact"><div className="wrap"><div className="lead"><div>
  <div className="tag" style=${{color:'#7FB0FF'}}>Free consultation</div><h2 style=${{margin:'8px 0 12px',fontSize:34}}>Talk to us before you decide</h2>
  <p>Have a question about the hackathon, an internship or a course? Book a free consultation and our team will guide you. You can also call us on +91 980 306 1234.</p>
  <ul className="ck2"><li style=${{color:'#C4D1EE'}}>Course suitability and career paths</li><li style=${{color:'#C4D1EE'}}>Internship and hackathon guidance</li><li style=${{color:'#C4D1EE'}}>Clear answers before you enrol</li></ul></div>
  ${ok?html`<div style=${{alignSelf:'center'}}><h3 style=${{fontSize:26}}>Thank you! ✅</h3><p>Our team will contact you shortly to schedule your free consultation.</p></div>`:
  html`<form onSubmit=${e=>{e.preventDefault();setOk(true)}}><input required placeholder="Full name"/><input required type="tel" placeholder="Mobile number"/><input type="email" placeholder="Email (optional)"/>
  <select required defaultValue=""><option value="" disabled>What would you like to discuss?</option><option>Nexila Hackathon 2026</option><option>Internship Program</option><option>Courses and training</option><option>Corporate training</option><option>Something else</option></select>
  <button className="btn cta" type="submit">Request Free Consultation</button></form>`}</div></div></section>`}

function HackathonPage(){const [ok,setOk]=useState(false);const now=Date.now();const open=now<eod(HK.close);const cur=HST.findIndex(s=>eod(s[4])>now);
 const doneN=HST.filter(s=>eod(s[4])<now).length;const pct=Math.min(100,Math.round((doneN+(cur>=0?0.5:0))/HST.length*100));
 return html`<${React.Fragment}>
 <section className="hero" style=${{paddingBottom:64}}><div className="wrap"><div className="hgrid"><div>
  <${Crumb} page="Hackathon 2026"/><div className="eyb">// NEXILA TECHNOLOGIES PRESENTS</div>
  <h1 style=${{fontSize:'clamp(34px,6vw,58px)'}}>Nexila Hackathon <span>2026</span></h1>
  <h2 style=${{fontSize:'clamp(20px,3vw,28px)',margin:'10px 0 4px'}}>Build. Innovate. Compete.</h2>
  <div style=${{color:'var(--blue)',fontWeight:700,marginBottom:12}}>Where Code Meets Competition</div>
  <p style=${{margin:'0 0 20px'}}>A technology hackathon designed exclusively for college students who want to turn their ideas into real, working solutions, with a focus on Artificial Intelligence and programming languages.</p>
  <div className="pills"><span>🖥️ Online rounds + Offline finals</span><span>👥 Team of 2 – 4 members</span><span>🎓 College students only</span></div>
  <div className="row"><a href="#register" className="btn cta" onClick=${e=>go(e,'hackathon','register')}>Register Your Team</a><a href="#h-pipeline" className="btn ghost" onClick=${e=>go(e,'hackathon','h-pipeline')}>See the Rounds</a></div>
  <p style=${{fontSize:14,margin:'16px 0 0'}}>${open?'Limited team slots available. Register early to secure your spot. Registration closes September 27, first-come, first-served.':'Team registration closed on September 27. Leave your details and our team will get in touch.'}</p></div>
  <div className="hcard"><${Countdown}/><div className="fl"><div><span>Eligibility</span><b>College students only</b></div><div><span>Team size</span><b>2 – 4 members</b></div><div><span>Format</span><b>Online → Offline finals</b></div><div><span>Theme</span><b>AI & Programming</b></div></div></div></div></div></section>

 <section className="sec"><div className="wrap"><div className="abg" style=${{alignItems:'center'}}><div><${Head} tag="About the hackathon" title="About Nexila Hackathon 2026"/>
  <p style=${{marginTop:16}}>Nexila Hackathon 2026 is a student-focused technology competition organised by Nexila Technologies to encourage innovation, problem-solving and practical software development.</p>
  <p>Unlike competitions with predefined problem statements, you have the freedom to choose your own idea and build your own solution. Whether you are into AI, programming, software development, automation or emerging technologies, this is your chance to turn a concept into a working project.</p>
  <p>You will work with your team, build your solution and present it across the stages of the competition.</p></div>
  <${PhotoSlider} items=${HPH}/></div></div></section>

 <section className="sec prz"><div className="wrap"><div className="prg"><div>
  <div className="tag" style=${{color:'#FBBF24'}}>Prize pool</div>
  <h2 className="h2" style=${{color:'#fff',fontSize:'clamp(34px,5vw,54px)'}}>₹<${Counter} to=${50000}/> up for grabs</h2>
  <p style=${{color:'#C4D1EE',maxWidth:440}}>Plus recognition that goes beyond the top three.</p>
  <div className="split">${TIERS.map(([m,l,v,p,c])=>html`<i key=${l} style=${{width:p+'%',background:c}}></i>`)}</div>
  <div className="lg">${TIERS.map(([m,l,v,p,c])=>html`<span key=${l}><u style=${{background:c}}></u>${l.split(' ')[0]} · ${p}%</span>`)}</div>
  <div className="perks"><div><b>⭐ Performer Award</b><span>Recognising standout effort beyond the podium, plus a certificate.</span></div><div><b>📜 Certificate for everyone</b><span>Every participant who competes receives an official certificate.</span></div></div></div>
  <div className="tiers">${TIERS.map(([m,l,v,p,c])=>html`<div className="tr" key=${l}><span className="md">${m}</span><div><b>${l}</b><div className="bar"><i style=${{'--w':p+'%',background:c}}></i></div></div><strong>₹${v.toLocaleString('en-US')}</strong></div>`)}</div></div></div></section>

 <section className="sec"><div className="wrap"><div className="abg" style=${{alignItems:'center'}}><div><${Head} tag="The challenge" title="AI & Programming Languages"/>
  <p style=${{marginTop:16}}>Build something intelligent. Whether it is a sharp AI-powered tool, clever language tooling or a coding experiment nobody has tried yet, if it runs and solves a real problem, it belongs on this stage. There are no fixed problem statements: bring your own idea and defend it.</p></div>
  <div className="cb">${[[['i','// team.js']],[['i','const'],' team = {'],['  size: ',['em','"2–4 members"'],','],['  eligibility: ',['em','"college students"'],','],['  theme: ',['em','"AI & programming"'],','],['  format: [',['em','"online"'],', ',['em','"offline finals"'],']'],['};'],['\u00a0'],[['i','function'],' compete(idea) {'],['  ',['i','return'],' idea.build().pitch().win();'],['}']].map((ln,k)=>html`<div key=${k}>${ln.map((q,j)=>typeof q==='string'?q:html`<${q[0]} key=${j}>${q[1]}<//>`)}</div>`)}</div></div></div></section>

 <section className="sec alt" id="register"><div className="wrap"><div className="abg" style=${{alignItems:'start',gridTemplateColumns:'1.25fr 1fr'}}>
  <div><${Head} tag="Why participate" title="Why should you take part in Nexila Hackathon 2026?"/>
   <div className="grid g2">${HWHY.map(([i,t,d])=>html`<${Fade} key=${t}><div className="card"><div className="ico">${i}</div><h3>${t}</h3><p>${d}</p></div><//>`)}</div></div>
  <div className="hf"><h3>Register your interest</h3><p>Leave your details and our team will get in touch with you.</p>
   ${ok?html`<div style=${{padding:'18px 0'}}><h3 style=${{fontSize:24}}>You are on the list! 🎉</h3><p>Thank you. Our team will get in touch with you soon.</p></div>`:
   html`<form onSubmit=${e=>{e.preventDefault();setOk(true)}}><input required placeholder="Name"/><input required type="email" placeholder="Email"/><input required type="tel" placeholder="Mobile Number"/><button className="btn cta" type="submit">Submit →</button></form>`}</div></div></div></section>

 <section className="sec csec" id="h-pipeline"><div className="wrap"><${Head} tag="The build pipeline" title="Four stages. One winner." sub="Follow the process from registration to the Grand Finale. Every stage moves your team closer to the stage."/>
  <div className="vt2" style=${{'--p':pct+'%'}}>${HST.map(([cmd,t,d,date,end],i)=>{const done=eod(end)<now;return html`<${React.Fragment} key=${t}>
   <div className=${'ti '+(i%2?'r':'l')+(i===cur?' cur':'')+(done?' done':'')}><span className="nd2">${done?'✓':i+1}</span>
    <div className="tc"><span className="cmd">${cmd}</span><h3>${t}</h3><p>${d}</p><div><span className=${'st '+(done?'done':i===cur?'next':'up')}>${done?(i===0?'Closed':'Completed'):i===cur?'Next up':'Upcoming'}</span><span className="dt2">${date}</span></div></div></div>
   ${i<HST.length-1&&html`<div className="tj"><span>↓ ${HJ[i]}</span></div>`}<//>`})}</div></div></section>

 <section className="sec alt"><div className="wrap"><${Head} tag="FAQ" title="Frequently asked questions"/><${FaqCols} items=${HFAQ}/></div></section>

 <section className="sec" style=${{paddingBottom:0}}><div className="wrap"><div className="lead" style=${{alignItems:'center'}}><div><h2 style=${{fontSize:34,marginBottom:10}}>Ready to build?</h2><p style=${{margin:0}}>Rounds 1 and 2 happen online, so all you need to start is a team and an idea.</p></div><div style=${{textAlign:'right'}}><a href="#register" className="btn cta" onClick=${e=>go(e,'hackathon','register')}>Register Your Team</a></div></div></div></section>
 <div style=${{height:76}}></div>
 <${Consult}/><//>`}

function App(){const rt=parseHash();
 useEffect(()=>{if(location.hash.length>1){const el=document.getElementById(decodeURIComponent(location.hash.slice(1)));el&&setTimeout(()=>el.scrollIntoView(),250)}},[]);
 return html`<${React.Fragment}><${Topbar}/><${Header} route=${rt.r}/>
 ${rt.r==='about'?html`<${About}/>`:rt.r==='courses'?html`<${CoursesPage}/>`:rt.r==='internship'?html`<${InternshipPage}/>`:rt.r==='hackathon'?html`<${HackathonPage}/>`:rt.r==='course'?html`<${CourseDetail} slug=${rt.slug} key=${rt.slug}/>`:html`<${React.Fragment}><${Hero}/><${Partners}/><${Courses}/><${Why}/><${Paths}/><${Match}/><${Hackathon}/><${Reviews}/><${Faq}/><${Lead}/><//>`}
 <${Footer}/><a className="wa" href="https://wa.me/919803061234" target="_blank" rel="noopener">💬 WhatsApp</a><${DemoPopup}/><//>`}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App}/>`);
