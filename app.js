/* ============ FureidisTech — shared script ============ */
document.documentElement.classList.add("js");

/* ---------- i18n dictionaries ---------- */
const WIKI = {
  en:"https://en.wikipedia.org/wiki/Fureidis",
  ar:"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D8%AF%D9%8A%D8%B3",
  he:"https://he.wikipedia.org/wiki/%D7%A4%D7%95%D7%A8%D7%99%D7%99%D7%93%D7%99%D7%A1"
};
const T = {
  en: {
    dir:"ltr",
    nav_home:"Home", nav_what:"What we do", nav_events:"Events", nav_town:"The town", nav_join:"Join",
    hero_eyebrow:"Tech Innovation Hub · Fureidis",
    hero_h1a:"Where Fureidis builds", hero_h1b:"what's next",
    hero_lead:"A community hub that brings together young talent, students, and academics from Fureidis — to learn, build real projects, and open doors for one another.",
    hero_cta1:"Join the community", hero_cta2:"Follow on Facebook",
    orb_tag:"One town · one network",
    about_kicker:"About the hub",
    about_h2:"Made by the town, for the town",
    about_p:"FureidisTech gathers the builders of Fureidis under one roof: pupils curious about technology, university students and graduates, researchers and professionals. Together we share knowledge, launch projects, and grow a local tech community.",
    pil1_h:"Learn", pil1_p:"Lectures and hands-on workshops led by local academics and guests from the industry.",
    pil2_h:"Build", pil2_p:"Team projects and innovation challenges that solve real problems and build real portfolios.",
    pil3_h:"Connect", pil3_p:"A network that links students with mentors, graduates, and opportunities.",
    what_kicker:"What we do",
    what_h2:"Four ways we move the town forward",
    what_p:"Everything we run has one goal: turning local talent into local strength.",
    c1_h:"Lectures & workshops", c1_p:"Practical sessions on programming, AI, entrepreneurship, study skills, and career paths — in a language and setting that feel like home.",
    c2_h:"Innovation projects", c2_p:"Small teams take an idea from sketch to working prototype, with guidance from experienced members along the way.",
    c3_h:"Networking & meetups", c3_p:"Evenings that bring pupils, students, graduates, and professionals into the same room — because opportunities travel through people.",
    c4_h:"Academic guidance", c4_p:"Honest advice on degrees, scholarships, and first steps into tech, from people who took that road themselves.",
    what_more_h2:"Have an idea for a session?",
    what_more_p:"The program is built by the community. If there's a topic you want to hear about — or one you can teach — tell us.",
    what_more_cta:"Suggest a topic",
    ev_kicker:"Looking back",
    ev_h2:"Our first gatherings",
    ev_p:"Two events in, and the room keeps getting fuller. Here's what we've done so far.",
    ev1_tag:"Event 01", ev1_h:"Community kickoff meetup",
    ev1_p:"The evening that started it all. People from Fureidis who study and work in tech met under one roof for the first time — shared their stories, exchanged contacts, and shaped the vision for the hub together.",
    ev2_tag:"Event 02", ev2_h:"Lecture & networking night",
    ev2_p:"A practical guest talk followed by open networking: real insights from the field, and new connections made between pupils, students, graduates, and professionals from the town.",
    ev_next_tag:"Coming up", ev_next_h:"The next event",
    ev_next_p:"Details for our next gathering are announced first on our Facebook page. Follow us so you don't miss it — or join below and we'll reach out.",
    ev_next_cta:"Follow for updates",
    town_kicker:"Our home",
    town_h2:"Get to know Fureidis",
    town_p:"The hub grows from a town on the Carmel coast, between the mountain and the sea. Learn more about it:",
    l1_h:"Official town website", l1_p:"The Fureidis Local Council: municipal services, announcements, and contact details.",
    l2_h:"Fureidis on Wikipedia", l2_p:"The town's history, geography, and background at a glance.",
    l3_h:"Find us on the map", l3_p:"Fureidis sits on the coastal road, at the foot of Mount Carmel.",
    l_go:"Open",
    who_kicker:"Who it's for",
    who_h2:"If you're from Fureidis and curious — you belong here",
    who_p:"No experience required. Curiosity is the only entry ticket.",
    chip1:"School pupils", chip2:"University students", chip3:"Graduates & academics", chip4:"Developers & engineers", chip5:"Entrepreneurs & makers",
    join_kicker:"Get involved",
    join_h2:"Be part of what comes next",
    join_p:"New faces are always welcome. Join the community and we'll let you know about the next lecture or meetup.",
    join_cta1:"Join the community", join_cta2:"Send us a message",
    jo_h1a:"Join", jo_h1b:"FureidisTech",
    jo_lead:"Leave your details and we'll be in touch about upcoming lectures, meetups, and projects. It takes one minute.",
    f_name:"Full name", f_email:"Email", f_phone:"Phone (optional)",
    f_iam:"I am a…", f_iam0:"Choose one", f_iam1:"School pupil", f_iam2:"University student", f_iam3:"Graduate / academic", f_iam4:"Working professional", f_iam5:"Other",
    f_msg:"What interests you?", f_msg_ph:"Topics you'd like to hear about, skills you can share, ideas for the hub…",
    f_send:"Send",
    f_note:"We'll only use your details to contact you about FureidisTech activities.",
    f_ok:"Thanks! Your details were sent — we'll be in touch soon.",
    f_err:"Something went wrong sending the form. Please try again, or message us on Facebook.",
    f_alt:"Prefer Facebook? Message us there instead:",
    foot_line:"Tech Innovation Hub · Fureidis"
  },
  ar: {
    dir:"rtl",
    nav_home:"الرئيسية", nav_what:"ماذا نفعل", nav_events:"فعالياتنا", nav_town:"بلدنا", nav_join:"انضمّوا",
    hero_eyebrow:"مركز الابتكار التكنولوجي · الفريديس",
    hero_h1a:"من الفريديس نبني", hero_h1b:"المستقبل",
    hero_lead:"مركز مجتمعي يجمع المواهب الشابة والطلاب والأكاديميين من الفريديس — للتعلّم، وبناء مشاريع حقيقية، وفتح الأبواب أمام بعضنا البعض.",
    hero_cta1:"انضمّوا إلى المجتمع", hero_cta2:"تابعونا على فيسبوك",
    orb_tag:"بلد واحد · شبكة واحدة",
    about_kicker:"عن المركز",
    about_h2:"من البلد، وللبلد",
    about_p:"يجمع FureidisTech بُناة الفريديس تحت سقف واحد: طلاب مدارس فضوليون تجاه التكنولوجيا، طلاب جامعات وخرّيجون، باحثون ومهنيون. معًا نتشارك المعرفة، نطلق مشاريع، وننمّي مجتمعًا تكنولوجيًا محليًا.",
    pil1_h:"نتعلّم", pil1_p:"محاضرات وورشات عملية يقودها أكاديميون محليون وضيوف من الصناعة.",
    pil2_h:"نبني", pil2_p:"مشاريع جماعية وتحديات ابتكار تحلّ مشاكل حقيقية وتبني خبرات حقيقية.",
    pil3_h:"نتواصل", pil3_p:"شبكة تربط الطلاب بالمرشدين والخرّيجين والفرص.",
    what_kicker:"ماذا نفعل",
    what_h2:"أربع طرق ندفع بها البلد إلى الأمام",
    what_p:"كل ما ننظّمه له هدف واحد: تحويل المواهب المحلية إلى قوة محلية.",
    c1_h:"محاضرات وورشات", c1_p:"لقاءات عملية حول البرمجة والذكاء الاصطناعي وريادة الأعمال ومهارات الدراسة والمسارات المهنية — بلغة وأجواء قريبة من القلب.",
    c2_h:"مشاريع ابتكار", c2_p:"فرق صغيرة تأخذ الفكرة من الورقة إلى نموذج أوّلي عامل، بمرافقة أعضاء ذوي خبرة على طول الطريق.",
    c3_h:"لقاءات وتواصل", c3_p:"أمسيات تجمع طلاب المدارس والجامعات والخرّيجين والمهنيين في غرفة واحدة — لأن الفرص تنتقل عبر الناس.",
    c4_h:"إرشاد أكاديمي", c4_p:"نصائح صادقة حول التخصّصات والمنح والخطوات الأولى نحو الهايتك، من أشخاص سلكوا هذا الطريق بأنفسهم.",
    what_more_h2:"عندكم فكرة للقاء؟",
    what_more_p:"البرنامج يبنيه المجتمع. إذا كان هناك موضوع تريدون سماعه — أو موضوع يمكنكم تعليمه — أخبرونا.",
    what_more_cta:"اقترحوا موضوعًا",
    ev_kicker:"نظرة إلى الوراء",
    ev_h2:"لقاءاتنا الأولى",
    ev_p:"فعاليتان حتى الآن، والقاعة تزداد امتلاءً. هذا ما قمنا به:",
    ev1_tag:"الفعالية 01", ev1_h:"لقاء الانطلاقة المجتمعي",
    ev1_p:"الأمسية التي بدأ منها كل شيء. أبناء الفريديس الذين يدرسون ويعملون في مجال التكنولوجيا التقوا لأول مرة تحت سقف واحد — تشاركوا قصصهم، تبادلوا جهات الاتصال، ورسموا معًا رؤية المركز.",
    ev2_tag:"الفعالية 02", ev2_h:"أمسية محاضرة وتواصل",
    ev2_p:"محاضرة عملية لضيف من المجال تلتها جلسة تواصل مفتوحة: خلاصات حقيقية من الميدان، وعلاقات جديدة بين طلاب المدارس والجامعات والخرّيجين والمهنيين من البلد.",
    ev_next_tag:"قريبًا", ev_next_h:"الفعالية القادمة",
    ev_next_p:"تفاصيل لقائنا القادم تُنشر أولًا على صفحتنا في فيسبوك. تابعونا حتى لا يفوتكم — أو انضمّوا وسنتواصل معكم.",
    ev_next_cta:"تابعوا التحديثات",
    town_kicker:"بيتنا",
    town_h2:"تعرّفوا على الفريديس",
    town_p:"ينمو المركز من بلدة على ساحل الكرمل، بين الجبل والبحر. اعرفوا المزيد:",
    l1_h:"الموقع الرسمي للبلدة", l1_p:"المجلس المحلي الفريديس: خدمات، إعلانات، وطرق التواصل.",
    l2_h:"الفريديس على ويكيبيديا", l2_p:"تاريخ البلدة وجغرافيتها وخلفيتها بنظرة واحدة.",
    l3_h:"موقعنا على الخريطة", l3_p:"تقع الفريديس على الشارع الساحلي، عند سفح جبل الكرمل.",
    l_go:"افتحوا",
    who_kicker:"لمن الحاضنة",
    who_h2:"إذا كنتم من الفريديس ولديكم فضول — مكانكم هنا",
    who_p:"لا حاجة لخبرة سابقة. الفضول هو تذكرة الدخول الوحيدة.",
    chip1:"طلاب مدارس", chip2:"طلاب جامعات", chip3:"خرّيجون وأكاديميون", chip4:"مبرمجون ومهندسون", chip5:"روّاد أعمال ومبتكرون",
    join_kicker:"شاركونا",
    join_h2:"كونوا جزءًا مما هو قادم",
    join_p:"الوجوه الجديدة مرحّب بها دائمًا. انضمّوا إلى المجتمع وسنعلمكم بموعد المحاضرة أو اللقاء القادم.",
    join_cta1:"انضمّوا إلى المجتمع", join_cta2:"أرسلوا لنا رسالة",
    jo_h1a:"انضمّوا إلى", jo_h1b:"FureidisTech",
    jo_lead:"اتركوا تفاصيلكم وسنتواصل معكم بشأن المحاضرات واللقاءات والمشاريع القادمة. يستغرق الأمر دقيقة واحدة.",
    f_name:"الاسم الكامل", f_email:"البريد الإلكتروني", f_phone:"الهاتف (اختياري)",
    f_iam:"أنا…", f_iam0:"اختاروا", f_iam1:"طالب/ة مدرسة", f_iam2:"طالب/ة جامعة", f_iam3:"خرّيج/ة / أكاديمي/ة", f_iam4:"مهني/ة عامل/ة", f_iam5:"غير ذلك",
    f_msg:"ما الذي يهمّكم؟", f_msg_ph:"مواضيع تودّون سماعها، مهارات يمكنكم مشاركتها، أفكار للمركز…",
    f_send:"إرسال",
    f_note:"سنستخدم تفاصيلكم فقط للتواصل معكم بشأن نشاطات FureidisTech.",
    f_ok:"شكرًا! تم إرسال التفاصيل — سنتواصل معكم قريبًا.",
    f_err:"حدث خطأ أثناء الإرسال. حاولوا مرة أخرى، أو راسلونا عبر فيسبوك.",
    f_alt:"تفضّلون فيسبوك؟ راسلونا هناك:",
    foot_line:"مركز الابتكار التكنولوجي · الفريديس"
  },
  he: {
    dir:"rtl",
    nav_home:"דף הבית", nav_what:"מה אנחנו עושים", nav_events:"אירועים", nav_town:"היישוב", nav_join:"הצטרפו",
    hero_eyebrow:"מרכז חדשנות טכנולוגית · פוריידיס",
    hero_h1a:"מפוריידיס בונים את", hero_h1b:"העתיד",
    hero_lead:"מרכז קהילתי שמחבר כישרונות צעירים, סטודנטים ואנשי אקדמיה מפוריידיס — כדי ללמוד, לבנות פרויקטים אמיתיים ולפתוח דלתות זה לזה.",
    hero_cta1:"הצטרפו לקהילה", hero_cta2:"עקבו בפייסבוק",
    orb_tag:"יישוב אחד · רשת אחת",
    about_kicker:"על המרכז",
    about_h2:"מהיישוב, בשביל היישוב",
    about_p:"FureidisTech מאגד את הבונים של פוריידיס תחת קורת גג אחת: תלמידים סקרנים לטכנולוגיה, סטודנטים ובוגרים, חוקרים ואנשי מקצוע. יחד אנחנו חולקים ידע, מרימים פרויקטים ומצמיחים קהילת טק מקומית.",
    pil1_h:"לומדים", pil1_p:"הרצאות וסדנאות מעשיות בהובלת אנשי אקדמיה מקומיים ואורחים מהתעשייה.",
    pil2_h:"בונים", pil2_p:"פרויקטים קבוצתיים ואתגרי חדשנות שפותרים בעיות אמיתיות ובונים ניסיון אמיתי.",
    pil3_h:"מתחברים", pil3_p:"רשת שמחברת בין סטודנטים למנטורים, בוגרים והזדמנויות.",
    what_kicker:"מה אנחנו עושים",
    what_h2:"ארבע דרכים לקדם את היישוב",
    what_p:"לכל מה שאנחנו מקיימים יש מטרה אחת: להפוך כישרון מקומי לעוצמה מקומית.",
    c1_h:"הרצאות וסדנאות", c1_p:"מפגשים מעשיים על תכנות, בינה מלאכותית, יזמות, מיומנויות למידה ומסלולי קריירה — בשפה ובאווירה שמרגישות בבית.",
    c2_h:"פרויקטי חדשנות", c2_p:"צוותים קטנים שלוקחים רעיון מהדף ועד אב־טיפוס עובד, בליווי חברים מנוסים לאורך הדרך.",
    c3_h:"מפגשים ונטוורקינג", c3_p:"ערבים שמפגישים תלמידים, סטודנטים, בוגרים ואנשי מקצוע באותו חדר — כי הזדמנויות עוברות דרך אנשים.",
    c4_h:"ליווי אקדמי", c4_p:"ייעוץ כן על תארים, מלגות וצעדים ראשונים להייטק, מאנשים שעברו את הדרך בעצמם.",
    what_more_h2:"יש לכם רעיון למפגש?",
    what_more_p:"התוכנית נבנית על ידי הקהילה. אם יש נושא שתרצו לשמוע עליו — או נושא שאתם יכולים ללמד — ספרו לנו.",
    what_more_cta:"הציעו נושא",
    ev_kicker:"מבט לאחור",
    ev_h2:"המפגשים הראשונים שלנו",
    ev_p:"שני אירועים עד כה, והחדר רק הולך ומתמלא. הנה מה שעשינו:",
    ev1_tag:"אירוע 01", ev1_h:"מפגש הפתיחה הקהילתי",
    ev1_p:"הערב שממנו הכול התחיל. אנשי פוריידיס שלומדים ועובדים בטכנולוגיה נפגשו לראשונה תחת קורת גג אחת — שיתפו סיפורים, החליפו פרטים ועיצבו יחד את החזון של המרכז.",
    ev2_tag:"אירוע 02", ev2_h:"ערב הרצאה ונטוורקינג",
    ev2_p:"הרצאת אורח מעשית ולאחריה נטוורקינג פתוח: תובנות אמיתיות מהשטח, וקשרים חדשים בין תלמידים, סטודנטים, בוגרים ואנשי מקצוע מהיישוב.",
    ev_next_tag:"בקרוב", ev_next_h:"האירוע הבא",
    ev_next_p:"פרטי המפגש הבא מתפרסמים קודם כול בעמוד הפייסבוק שלנו. עקבו כדי לא לפספס — או הצטרפו למטה ואנחנו ניצור קשר.",
    ev_next_cta:"עקבו לעדכונים",
    town_kicker:"הבית שלנו",
    town_h2:"הכירו את פוריידיס",
    town_p:"המרכז צומח מיישוב על חוף הכרמל, בין ההר לים. למדו עוד:",
    l1_h:"האתר הרשמי של היישוב", l1_p:"המועצה המקומית פרדיס: שירותים, הודעות ופרטי התקשרות.",
    l2_h:"פוריידיס בוויקיפדיה", l2_p:"ההיסטוריה, הגאוגרפיה והרקע של היישוב במבט אחד.",
    l3_h:"מצאו אותנו במפה", l3_p:"פוריידיס שוכנת על כביש החוף, למרגלות הר הכרמל.",
    l_go:"פתחו",
    who_kicker:"למי זה מתאים",
    who_h2:"אם אתם מפוריידיס וסקרנים — המקום שלכם כאן",
    who_p:"לא נדרש ניסיון קודם. סקרנות היא כרטיס הכניסה היחיד.",
    chip1:"תלמידי בתי ספר", chip2:"סטודנטים", chip3:"בוגרים ואנשי אקדמיה", chip4:"מפתחים ומהנדסים", chip5:"יזמים ויוצרים",
    join_kicker:"קחו חלק",
    join_h2:"היו חלק ממה שבא עכשיו",
    join_p:"פנים חדשות תמיד מתקבלות בשמחה. הצטרפו לקהילה ונעדכן אתכם על ההרצאה או המפגש הבא.",
    join_cta1:"הצטרפו לקהילה", join_cta2:"שלחו לנו הודעה",
    jo_h1a:"הצטרפו אל", jo_h1b:"FureidisTech",
    jo_lead:"השאירו פרטים ונחזור אליכם לגבי הרצאות, מפגשים ופרויקטים קרובים. זה לוקח דקה.",
    f_name:"שם מלא", f_email:"אימייל", f_phone:"טלפון (לא חובה)",
    f_iam:"אני…", f_iam0:"בחרו", f_iam1:"תלמיד/ת בית ספר", f_iam2:"סטודנט/ית", f_iam3:"בוגר/ת / אקדמאי/ת", f_iam4:"איש/אשת מקצוע", f_iam5:"אחר",
    f_msg:"מה מעניין אתכם?", f_msg_ph:"נושאים שתרצו לשמוע עליהם, מיומנויות שתוכלו לחלוק, רעיונות למרכז…",
    f_send:"שליחה",
    f_note:"נשתמש בפרטים רק כדי ליצור קשר לגבי פעילויות FureidisTech.",
    f_ok:"תודה! הפרטים נשלחו — ניצור קשר בקרוב.",
    f_err:"משהו השתבש בשליחה. נסו שוב, או כתבו לנו בפייסבוק.",
    f_alt:"מעדיפים פייסבוק? כתבו לנו שם:",
    foot_line:"מרכז חדשנות טכנולוגית · פוריידיס"
  }
};

/* ---------- storage helpers (fail-safe) ---------- */
function store(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
function load(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }

/* ---------- language ---------- */
let lang = load("ft-lang") || "en";
if(!T[lang]) lang = "en";
function applyLang(l){
  lang = l;
  const d = T[l];
  document.documentElement.lang = l;
  document.documentElement.dir = d.dir;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if (d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if (d[k] !== undefined) el.setAttribute("placeholder", d[k]);
  });
  const wiki = document.getElementById("wikiLink");
  if (wiki) wiki.href = WIKI[l];
  document.querySelectorAll(".langs button").forEach(b=>{
    b.setAttribute("aria-pressed", String(b.dataset.lang === l));
  });
  store("ft-lang", l);
}
document.querySelectorAll(".langs button").forEach(b=>{
  b.addEventListener("click", ()=>applyLang(b.dataset.lang));
});
applyLang(lang);

/* ---------- theme ---------- */
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const moon = document.getElementById("iconMoon"), sun = document.getElementById("iconSun");
function setTheme(t, persist){
  root.setAttribute("data-theme", t);
  if(moon) moon.style.display = t === "dark" ? "none" : "block";
  if(sun)  sun.style.display  = t === "dark" ? "block" : "none";
  if(persist) store("ft-theme", t);
}
const savedTheme = load("ft-theme");
setTheme(savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), false);
if(themeBtn) themeBtn.addEventListener("click", ()=> setTheme(root.getAttribute("data-theme")==="dark" ? "light" : "dark", true));

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
},{threshold:0, rootMargin:"0px 0px 120px 0px"});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

/* ---------- motion prefs ---------- */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse  = window.matchMedia("(pointer: coarse)").matches;

/* ---------- 3D network sphere (home page only) ---------- */
(function(){
  const cv = document.getElementById("net");
  if(!cv) return;
  const ctx = cv.getContext("2d");
  const W = cv.width, H = cv.height, CX = W/2, CY = H/2;
  const R = W*0.36, N = 90;
  const BRAND = ["#8EDC92", "#3DBFA6", "#2F90C4"];
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for(let i=0;i<N;i++){
    const y = 1 - (i/(N-1))*2;
    const rad = Math.sqrt(1 - y*y);
    const th = golden * i;
    pts.push({x:Math.cos(th)*rad, y:y, z:Math.sin(th)*rad});
  }
  const links = [];
  for(let i=0;i<N;i++){
    const d = [];
    for(let j=0;j<N;j++){
      if(i===j) continue;
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, dz=pts[i].z-pts[j].z;
      d.push({j, dist: dx*dx+dy*dy+dz*dz});
    }
    d.sort((a,b)=>a.dist-b.dist);
    for(let k=0;k<3;k++){ const j=d[k].j; if(i<j) links.push([i,j]); }
  }
  let rotY = 0, rotX = -0.35;
  function frame(){
    if(!reduced) rotY += 0.0028;
    ctx.clearRect(0,0,W,H);
    const cy1=Math.cos(rotY), sy1=Math.sin(rotY);
    const cx1=Math.cos(rotX), sx1=Math.sin(rotX);
    const proj = pts.map(p=>{
      let x = p.x*cy1 + p.z*sy1;
      let z = -p.x*sy1 + p.z*cy1;
      let y = p.y*cx1 - z*sx1;
      z = p.y*sx1 + z*cx1;
      const s = 1.6/(1.6+z*0.9);
      return {sx:CX + x*R*s, sy:CY + y*R*s, z, s};
    });
    for(const [i,j] of links){
      const a=proj[i], b=proj[j];
      const depth = 1 - ((a.z+b.z)/2 + 1)/2;
      const g = ctx.createLinearGradient(a.sx,a.sy,b.sx,b.sy);
      g.addColorStop(0, BRAND[i % 3]);
      g.addColorStop(1, BRAND[j % 3]);
      ctx.strokeStyle = g;
      ctx.globalAlpha = 0.07 + depth*0.32;
      ctx.lineWidth = 1 + depth*1.4;
      ctx.beginPath(); ctx.moveTo(a.sx,a.sy); ctx.lineTo(b.sx,b.sy); ctx.stroke();
    }
    proj.forEach((p,i)=>{
      const depth = 1 - (p.z+1)/2;
      ctx.globalAlpha = 0.25 + depth*0.75;
      ctx.fillStyle = BRAND[i % 3];
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 3 * p.s * 1.5, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ---------- join form (join page only) ---------- */
(function(){
  const form = document.getElementById("joinForm");
  if(!form) return;
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    msg.className = "form-msg";
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    try{
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      if(res.ok){
        form.reset();
        msg.textContent = T[lang].f_ok;
        msg.className = "form-msg ok";
      } else { throw new Error("bad status"); }
    }catch(err){
      msg.textContent = T[lang].f_err;
      msg.className = "form-msg err";
    }
    btn.disabled = false;
  });
})();
