/* ================= ICONS ================= */
const P={
home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
alert:'<path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
down:'<path d="m22 17-8.5-8.5-5 5L2 7"/><path d="M16 17h6v-6"/>',
up:'<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
check:'<path d="M20 6 9 17l-5-5"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',
menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
palette:'<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a6 6 0 0 0 6-6c0-4.4-4.5-8.2-10-8.2z"/>',
link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
db:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
arrow:'<path d="M5 12h14M13 5l7 7-7 7"/>',
edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>',
grad:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
play:'<path d="M6 4l14 8-14 8z"/>',
inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
};
const ic=(n,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:''}>${P[n]||''}</svg>`;

/* ================= I18N ================= */
const L={
ru:{tagline:'Раннее предупреждение · КазНУ',role:'Роль',menu:'Меню',sync:'Синхронизация с univer.kaznu.kz',readonly:'Режим только чтения · данные не покидают серверы университета',demo:'Демо-прототип · все данные вымышлены',search:'Поиск студента, дисциплины…',
student:'Студент',curator:'Куратор (эдвайзер)',teacher:'Преподаватель',parent:'Родитель',admin:'Администратор',
overview:'Обзор системы',s_home:'Главная',s_feed:'Уведомления',s_att:'Посещаемость и оценки',s_set:'Каналы и согласия',
c_dash:'Дашборд рисков',c_scen:'Сценарный анализ',c_plan:'Планы поддержки',c_week:'Недельная сводка',
t_changes:'Изменения расписания',t_week:'Мои занятия',t_set:'Каналы',
p_feed:'Лента по студенту',p_consent:'Согласие студента',
a_rules:'Правила и пороги',a_chan:'Каналы доставки',a_stats:'Статистика',a_models:'Модели iLearn',a_logs:'Журналы',
skin:'Скин интерфейса',notif:'Уведомления',all:'Все',readAll:'Прочитать все',now:'только что'},
kk:{tagline:'Ерте ескерту · ҚазҰУ',role:'Рөл',menu:'Мәзір',sync:'univer.kaznu.kz жүйесімен синхрондау',readonly:'Тек оқу режимі · деректер университет серверлерінен шықпайды',demo:'Демо-прототип · барлық деректер ойдан алынған',search:'Студентті, пәнді іздеу…',
student:'Студент',curator:'Куратор (эдвайзер)',teacher:'Оқытушы',parent:'Ата-ана',admin:'Әкімші',
overview:'Жүйеге шолу',s_home:'Басты бет',s_feed:'Хабарламалар',s_att:'Қатысу және бағалар',s_set:'Арналар мен келісім',
c_dash:'Тәуекелдер тақтасы',c_scen:'Сценарийлік талдау',c_plan:'Қолдау жоспарлары',c_week:'Апталық есеп',
t_changes:'Кесте өзгерістері',t_week:'Менің сабақтарым',t_set:'Арналар',
p_feed:'Студент бойынша лента',p_consent:'Студенттің келісімі',
a_rules:'Ережелер мен шектер',a_chan:'Жеткізу арналары',a_stats:'Статистика',a_models:'iLearn модельдері',a_logs:'Журналдар',
skin:'Интерфейс тақырыбы',notif:'Хабарламалар',all:'Барлығы',readAll:'Барлығын оқу',now:'жаңа ғана'},
en:{tagline:'Early warning · KazNU',role:'Role',menu:'Menu',sync:'Sync with univer.kaznu.kz',readonly:'Read-only mode · data never leaves university servers',demo:'Demo prototype · all data is fictional',search:'Search student, course…',
student:'Student',curator:'Curator (advisor)',teacher:'Teacher',parent:'Parent',admin:'Administrator',
overview:'System overview',s_home:'Home',s_feed:'Notifications',s_att:'Attendance & grades',s_set:'Channels & consent',
c_dash:'Risk dashboard',c_scen:'What-if analysis',c_plan:'Support plans',c_week:'Weekly summary',
t_changes:'Schedule changes',t_week:'My classes',t_set:'Channels',
p_feed:'Student feed',p_consent:'Student consent',
a_rules:'Rules & thresholds',a_chan:'Delivery channels',a_stats:'Statistics',a_models:'iLearn models',a_logs:'Logs',
skin:'Interface skin',notif:'Notifications',all:'All',readAll:'Mark all read',now:'just now'}
};
const t=k=>(L[S.lang]&&L[S.lang][k])||L.ru[k]||k;

/* ================= STATE & DATA ================= */
const S={role:'student',page:'overview',skin:'kaznu',lang:'ru',live:true,unread:3};
const ROLES=[
 {id:'student',icon:'grad',me:'АС',pages:[['overview','layers'],['s_home','home'],['s_feed','bell'],['s_att','chart'],['s_set','gear']]},
 {id:'curator',icon:'users',me:'ГК',pages:[['overview','layers'],['c_dash','target'],['c_scen','sliders'],['c_plan','heart'],['c_week','file']]},
 {id:'teacher',icon:'book',me:'БН',pages:[['overview','layers'],['t_changes','cal'],['t_week','clock'],['t_set','gear']]},
 {id:'parent',icon:'heart',me:'РС',pages:[['overview','layers'],['p_feed','bell'],['p_consent','shield']]},
 {id:'admin',icon:'shield',me:'АД',pages:[['overview','layers'],['a_rules','sliders'],['a_chan','send'],['a_stats','chart'],['a_models','cpu'],['a_logs','file']]},
];
const SKINS=[
 {id:'kaznu',name:'КазНУ Классика',d:'Синий и белый — фирменные цвета',sw:['#05285E','#0A4DA2','#2F7FE0','#FFFFFF']},
 {id:'night',name:'Ночной кампус',d:'Тёмная тема, глубокий синий',sw:['#030916','#0C1A36','#3D8DF0','#79B6FF']},
 {id:'sky',name:'Небо Алматы',d:'Светлая, небесно-бирюзовая',sw:['#0A4DA2','#0874D1','#17B0D8','#EEF7FD']},
 {id:'farabi',name:'Аль-Фараби',d:'Тёмно-синий с золотом',sw:['#071D47','#0B2D6B','#D4AF37','#F6F4EE']},
 {id:'snow',name:'Белый минимал',d:'Много воздуха, синие акценты',sw:['#FFFFFF','#F7F9FC','#1450B8','#0E1726']},
];
const MAXNB=35, THR={l1:9,l2:17,l3:32};

const DISC=[
 {n:'Машинное обучение',c:'ML 2203',nb:6,sc:84,tr:[78,81,80,85,84],cr:5},
 {n:'Высоконагруженные системы',c:'HLS 2210',nb:14,sc:68,tr:[82,79,74,70,68],cr:5},
 {n:'Базы данных',c:'DB 2105',nb:3,sc:90,tr:[86,88,91,89,90],cr:5},
 {n:'Математическая статистика',c:'MS 2107',nb:19,sc:57,tr:[71,66,62,58,57],cr:4},
 {n:'Веб-разработка',c:'WEB 2201',nb:2,sc:93,tr:[88,90,92,94,93],cr:4},
 {n:'Қазақ тілі',c:'KAZ 2101',nb:9,sc:77,tr:[75,79,76,78,77],cr:3},
];
let FEED=[
 {id:1,k:'sched',pr:'high',title:'Изменение расписания · Базы данных (практика)',body:'Занятие завтра, 03.10 в 10:00 — меняется аудитория.',diff:['Ауд. 312, ГУК','Ауд. 204, корпус ФИТ'],ch:['Telegram','Web Push'],tm:'12 мин назад',unread:true},
 {id:2,k:'nb',pr:'mid',title:'Порог 50% по «Математической статистике»',body:'У вас 19 Н/б из 35 допустимых. Уведомление также получил куратор.',ch:['Telegram','Email'],tm:'2 ч назад',unread:true},
 {id:3,k:'grade',pr:'low',title:'Новая оценка · РК1 «Высоконагруженные системы»',body:'64 из 100. Средний балл группы — 73.',ch:['Web Push'],tm:'вчера, 18:40',unread:true},
 {id:4,k:'trend',pr:'mid',title:'Отрицательный тренд по «Мат. статистике»',body:'Баллы снижаются 4 контрольные точки подряд (наклон −3,6 балла за КТ).',ch:['Telegram'],tm:'вчера, 09:15'},
 {id:5,k:'sched',pr:'high',title:'Отмена занятия · Машинное обучение (лекция)',body:'Лекция 04.10 в 13:00 отменена преподавателем.',diff:['04.10, 13:00 · Ауд. 101','Отменено'],ch:['Telegram','Web Push'],tm:'30.09, 16:02'},
 {id:6,k:'nb',pr:'low',title:'Порог 25% по «Высоконагруженным системам»',body:'9 Н/б из 35. Обратите внимание на посещаемость.',ch:['Telegram'],tm:'27.09, 11:20'},
 {id:7,k:'digest',pr:'low',title:'Еженедельный дайджест',body:'5 несрочных уведомлений за неделю: 3 новые оценки, 2 изменения расписания.',ch:['Email'],tm:'27.09, 08:00'},
];
const GROUP=[
 {id:1,n:'Дана Жумабекова',risk:.82,nb:21,nbD:'Мат. статистика',gpa:2.31,pg:2.94,sl:-7.4,an:true,plan:'В работе',tr:[74,70,63,58,51]},
 {id:2,n:'Тимур Касымов',risk:.71,nb:17,nbD:'Высоконагр. системы',gpa:2.58,pg:2.80,sl:-4.1,an:false,plan:'Запланировано',tr:[72,70,66,64,61]},
 {id:3,n:'Алихан Серикбаев',risk:.54,nb:19,nbD:'Мат. статистика',gpa:3.05,pg:3.18,sl:-3.6,an:false,plan:'В работе',tr:[80,77,74,71,70]},
 {id:4,n:'Ержан Бекболатов',risk:.47,nb:12,nbD:'Базы данных',gpa:2.88,pg:2.91,sl:-1.2,an:true,plan:'—',tr:[76,77,74,75,72]},
 {id:5,n:'Мадина Оспанова',risk:.36,nb:9,nbD:'Қазақ тілі',gpa:3.12,pg:3.20,sl:-0.8,an:false,plan:'—',tr:[81,80,79,80,78]},
 {id:6,n:'Санжар Тулегенов',risk:.28,nb:10,nbD:'Веб-разработка',gpa:3.01,pg:2.95,sl:0.6,an:false,plan:'—',tr:[74,75,76,76,77]},
 {id:7,n:'Нурлан Ахметов',risk:.23,nb:8,nbD:'Машинное обучение',gpa:3.22,pg:3.30,sl:-0.5,an:false,plan:'—',tr:[83,82,82,81,81]},
 {id:8,n:'Камила Абдрахманова',risk:.19,nb:5,nbD:'Мат. статистика',gpa:3.46,pg:3.40,sl:1.1,an:false,plan:'—',tr:[84,85,86,87,88]},
 {id:9,n:'Арман Ермеков',risk:.15,nb:6,nbD:'Базы данных',gpa:3.38,pg:3.35,sl:0.4,an:false,plan:'—',tr:[85,85,86,86,86]},
 {id:10,n:'Жанель Муратова',risk:.11,nb:3,nbD:'Высоконагр. системы',gpa:3.71,pg:3.66,sl:1.8,an:false,plan:'—',tr:[88,89,91,92,93]},
 {id:11,n:'Айгерим Сейткали',risk:.08,nb:2,nbD:'Веб-разработка',gpa:3.89,pg:3.85,sl:0.9,an:false,plan:'—',tr:[93,94,94,95,95]},
 {id:12,n:'Алия Нурпеисова',risk:.06,nb:1,nbD:'Машинное обучение',gpa:3.94,pg:3.90,sl:0.3,an:false,plan:'—',tr:[95,95,96,96,96]},
];
let PLANS=[
 {id:1,st:'todo',who:'Тимур Касымов',what:'Встреча с куратором',resp:'Г. Каримова',due:'07.10'},
 {id:2,st:'todo',who:'Ержан Бекболатов',what:'Выяснить причину резкого роста Н/б',resp:'Г. Каримова',due:'08.10'},
 {id:3,st:'doing',who:'Дана Жумабекова',what:'Доп. консультации по мат. статистике (2 раза в неделю)',resp:'А. Тлеубаев',due:'20.10'},
 {id:4,st:'doing',who:'Алихан Серикбаев',what:'План ликвидации пропусков по мат. статистике',resp:'Г. Каримова',due:'15.10'},
 {id:5,st:'doing',who:'Дана Жумабекова',what:'Встреча с родителями (с согласия студента)',resp:'Деканат',due:'10.10'},
 {id:6,st:'done',who:'Мадина Оспанова',what:'Тьюторство по казахскому языку',resp:'Ж. Абенова',due:'28.09',note:'Посещаемость восстановлена, РК1 — 82'},
];
let RULES=[
 {id:1,on:true,ic:'alert',name:'Пропуски: пороги 25 / 50 / 90 %',cond:'Н/б по дисциплине ≥ порога',to:['Студент','Куратор','Родитель*'],ch:['Telegram','Email'],pr:'Средний',once:true},
 {id:2,on:true,ic:'down',name:'GPA ниже порога',cond:'семестровый GPA < 2,5',to:['Студент','Куратор'],ch:['Telegram','Web Push'],pr:'Средний',once:true},
 {id:3,on:true,ic:'down',name:'Падение GPA к прошлому семестру',cond:'ΔGPA < −0,4',to:['Куратор'],ch:['Email'],pr:'Низкий',once:true},
 {id:4,on:true,ic:'chart',name:'Отрицательный тренд по дисциплине',cond:'наклон регрессии за 4 КТ < −2 балла',to:['Студент','Куратор'],ch:['Telegram'],pr:'Средний',once:true},
 {id:5,on:true,ic:'cal',name:'Изменение расписания',cond:'изменены преподаватель / время / аудитория / статус',to:['Студенты групп','Преподаватель'],ch:['Telegram','Web Push'],pr:'Высокий (<24 ч)',once:false},
 {id:6,on:true,ic:'spark',name:'Прогнозный риск iLearn',cond:'вероятность FX/F > 0,60 или аномалия',to:['Куратор'],ch:['Email','Web Push'],pr:'Средний',once:true},
 {id:7,on:false,ic:'bell',name:'Каждая новая Н/б (по выбору студента)',cond:'новая отметка «Н/б»',to:['Студент'],ch:['Telegram'],pr:'Низкий',once:false},
];
const MODELS=[
 {v:'iLearn 1.0',algo:'Градиентный бустинг',data:'Открытый обезличенный датасет',auc:.86,f1:.71,rec:.74,st:'archived',date:'05.2026'},
 {v:'iLearn 1.1-kaznu',algo:'LightGBM',data:'Данные КазНУ 2021–2025 (псевдонимы)',auc:.89,f1:.76,rec:.79,st:'active',date:'09.2026'},
 {v:'iLearn 1.2-rc',algo:'LightGBM + Isolation Forest',data:'КазНУ 2021–2026, + аномалии',auc:.91,f1:.78,rec:.82,st:'candidate',date:'10.2026'},
 {v:'baseline-logreg',algo:'Логистическая регрессия',data:'Данные КазНУ 2021–2025',auc:.81,f1:.66,rec:.70,st:'archived',date:'08.2026'},
];
const SCHED=[
 {d:'Пн 06.10',tm:'08:00–09:50',disc:'Машинное обучение',type:'Лекция',grp:'ВИСИИ-24-1, 24-2',room:'Ауд. 101, ФИТ'},
 {d:'Пн 06.10',tm:'10:00–11:50',disc:'Машинное обучение',type:'Лаб.',grp:'ВИСИИ-24-1/1',room:'Ауд. 315, ФИТ',chg:'room'},
 {d:'Вт 07.10',tm:'13:00–14:50',disc:'Высоконагруженные системы',type:'Практика',grp:'ВИСИИ-24-2',room:'Ауд. 204, ФИТ'},
 {d:'Ср 08.10',tm:'08:00–09:50',disc:'Машинное обучение',type:'Лекция',grp:'ВИСИИ-23-1',room:'Ауд. 101, ФИТ',chg:'cancel'},
 {d:'Чт 09.10',tm:'15:00–16:50',disc:'Высоконагруженные системы',type:'Лаб.',grp:'ВИСИИ-24-1/2',room:'Ауд. 312, ГУК'},
 {d:'Пт 10.10',tm:'10:00–11:50',disc:'Машинное обучение',type:'Практика',grp:'ВИСИИ-24-1',room:'Ауд. 210, ФИТ',chg:'time'},
];

/* ================= HELPERS ================= */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const cssv=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const initials=n=>n.split(' ').map(x=>x[0]).slice(0,2).join('');
const fmt=(x,d=2)=>x.toFixed(d).replace('.',',');
const riskLvl=r=>r>=.6?['danger','Высокий']:r>=.35?['warn','Средний']:['ok','Низкий'];
const nbLvl=n=>n>=THR.l3?'danger':n>=THR.l2?'warn':n>=THR.l1?'notice':'ok';
const lvlColor=l=>`var(--${l})`;
const kindMeta={sched:['cal','notice','Расписание'],nb:['alert','warn','Пропуски'],grade:['book','notice','Оценка'],trend:['down','danger','Тренд'],ai:['spark','danger','iLearn'],digest:['inbox','ok','Дайджест'],sys:['zap','notice','Система']};
const chIc={Telegram:'send',Email:'mail','Web Push':'monitor','Портал':'globe','Моб. приложение':'phone'};

function ring(val,max,lvl,label){
  const p=Math.min(val/max,1)*100;
  return `<div class="ring"><svg viewBox="0 0 66 66"><circle class="trk" cx="33" cy="33" r="27" fill="none" stroke-width="7"/><circle class="val" cx="33" cy="33" r="27" fill="none" stroke="${lvlColor(lvl)}" stroke-width="7" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" data-off="${100-p}"/></svg><b class="tabnum">${val}${label?`<small>${label}</small>`:''}</b></div>`;
}
function lineChart({series,labels,h=220,min,max,thr=[],w=600,yfmt=v=>v}){
  const pl=36,pr=12,pt=12,pb=26,W=w-pl-pr,H=h-pt-pb;
  const all=series.flatMap(s=>s.v);min=min??Math.min(...all);max=max??Math.max(...all);
  const x=i=>pl+(labels.length===1?W/2:i*W/(labels.length-1)), y=v=>pt+H-(v-min)/(max-min)*H;
  let g='<g class="grid">';
  for(let k=0;k<=4;k++){const v=min+(max-min)*k/4;g+=`<line x1="${pl}" x2="${w-pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end">${yfmt(Math.round(v*100)/100)}</text>`}
  g+='</g>';
  labels.forEach((l,i)=>{if(labels.length<=14||i%2===0)g+=`<text x="${x(i)}" y="${h-6}" text-anchor="middle">${l}</text>`});
  thr.forEach(tq=>{g+=`<line x1="${pl}" x2="${w-pr}" y1="${y(tq.y)}" y2="${y(tq.y)}" stroke="${tq.c}" stroke-dasharray="5 5" stroke-width="1.5"/><text x="${w-pr}" y="${y(tq.y)-5}" text-anchor="end" style="fill:${tq.c};font-weight:600">${tq.l}</text>`});
  const uid='g'+Math.random().toString(36).slice(2,7);
  series.forEach((s,si)=>{
    const d=s.v.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    if(s.area!==false&&si===0)g+=`<defs><linearGradient id="${uid}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${s.c}" stop-opacity=".28"/><stop offset="1" stop-color="${s.c}" stop-opacity="0"/></linearGradient></defs><path class="ar" d="${d} L${x(s.v.length-1)},${pt+H} L${x(0)},${pt+H}Z" fill="url(#${uid})"/>`;
    g+=s.dash?`<path d="${d}" fill="none" stroke="${s.c}" stroke-width="2" stroke-dasharray="5 5" opacity=".8"/>`:`<path class="ln" d="${d}" stroke="${s.c}"/>`;
    if(!s.dash)s.v.forEach((v,i)=>{g+=`<circle class="pt" cx="${x(i)}" cy="${y(v)}" r="3.6" fill="var(--surface)" stroke="${s.c}" stroke-width="2.2"><title>${labels[i]}: ${v}</title></circle>`});
  });
  return `<svg class="chart" viewBox="0 0 ${w} ${h}">${g}</svg>`;
}
function colChart({vals,labels,h=200,w=600,colors,max,unit=''}){
  const pl=30,pb=26,pt=16,W=w-pl-10,H=h-pt-pb;max=max||Math.max(...vals)*1.15;
  const bw=W/vals.length*.58;let g='<g class="grid">';
  for(let k=0;k<=4;k++){const v=max*k/4,yy=pt+H-v/max*H;g+=`<line x1="${pl}" x2="${w-10}" y1="${yy}" y2="${yy}"/><text x="${pl-6}" y="${yy+4}" text-anchor="end">${Math.round(v)}</text>`}g+='</g>';
  vals.forEach((v,i)=>{const cx=pl+W/vals.length*(i+.5),bh=v/max*H;
    g+=`<rect class="bar" style="animation-delay:${i*40}ms" x="${cx-bw/2}" y="${pt+H-bh}" width="${bw}" height="${bh}" rx="5" fill="${Array.isArray(colors)?colors[i]:colors}"><title>${labels[i]}: ${v}${unit}</title></rect><text x="${cx}" y="${h-6}" text-anchor="middle">${labels[i]}</text>`});
  return `<svg class="chart" viewBox="0 0 ${w} ${h}">${g}</svg>`;
}
function spark(v,c){const w=110,h=40,mn=Math.min(...v),mx=Math.max(...v);const d=v.map((a,i)=>`${i?'L':'M'}${(i*w/(v.length-1)).toFixed(1)},${(h-4-(a-mn)/(mx-mn||1)*(h-8)).toFixed(1)}`).join(' ');return `<svg class="spark chart" viewBox="0 0 ${w} ${h}"><path class="ln" d="${d}" stroke="${c}"/></svg>`}
function hbars(rows,unit='',max){max=max||Math.max(...rows.map(r=>r[1]));return `<div class="hbars">${rows.map(r=>`<div class="hb"><span>${r[0]}</span><div class="tr"><i data-w="${r[1]/max*100}" style="background:${r[2]||'var(--brand)'}"></i></div><b class="tabnum">${r[3]??r[1]}${unit}</b></div>`).join('')}</div>`}
function animateIn(root=document){
  const lns=$$('.chart .ln',root).filter(p=>!p.dataset.done);
  lns.forEach(p=>{p.dataset.done=1;const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L});
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    lns.forEach(p=>{p.style.transition='stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)';p.style.strokeDashoffset=0});
    $$('[data-off]',root).forEach(e=>e.style.strokeDashoffset=e.dataset.off);
    $$('[data-w]',root).forEach(e=>e.style.width=e.dataset.w+'%');
    $$('[data-count]',root).forEach(e=>{const to=+e.dataset.count,dec=+(e.dataset.dec||0),t0=performance.now();const step=n=>{const k=Math.min((n-t0)/1100,1),v=to*(1-Math.pow(1-k,3));e.textContent=fmt(v,dec).replace(/\B(?=(\d{3})+(?!\d))/g,' ');if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)});
  }));
}
function toast(n){
  const [i,l]=kindMeta[n.k]||kindMeta.sys;
  const el=document.createElement('div');el.className='toast';
  el.innerHTML=`<div class="ic ${l==='notice'?'':l}">${ic(i)}</div><div><b>${n.title}</b><p>${n.body}</p><small>${(n.ch||[]).join(' · ')} · ${t('now')}</small></div>`;
  $('#toasts').prepend(el);
  setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),400)},6000);
  if($$('.toast').length>3)$$('.toast').slice(3).forEach(x=>x.remove());
}
function feedItem(n,isNew){
  const [i,l,lab]=kindMeta[n.k]||kindMeta.sys;
  const prT=n.pr==='high'?'<span class="tag t-danger">Срочно</span>':n.pr==='mid'?'<span class="tag t-warn">Важно</span>':'';
  return `<div class="fi ${n.unread?'unread':''} ${isNew?'new':''}" data-k="${n.k}"><div class="ic ${l==='notice'?'':l}">${ic(i)}</div><div class="body"><b>${n.title}</b><p>${n.body}</p>${n.diff?`<div class="diff"><s>${n.diff[0]}</s>${ic('arrow',14)}<ins>${n.diff[1]}</ins></div>`:''}<div class="meta"><span class="tag t-muted">${lab}</span>${prT}${(n.ch||[]).map(c=>`<span style="display:inline-flex;gap:4px;align-items:center">${ic(chIc[c]||'bell',13)}${c}</span>`).join('')}<span style="margin-left:auto">${n.tm}</span></div></div></div>`;
}

/* ================= SHELL ================= */
function renderShell(){
  const R=ROLES.find(r=>r.id===S.role);
  $('#roles').innerHTML=ROLES.map(r=>`<button title="${t(r.id)}" data-r="${r.id}" class="${r.id===S.role?'on':''}">${ic(r.icon,19)}</button>`).join('');
  $('#roleName').textContent=t(S.role);
  $('#nav').innerHTML=R.pages.map(([k,i])=>`<button data-p="${k}" class="${k===S.page?'on':''}">${ic(i)}<span>${t(k)}</span>${(k==='s_feed'||k==='p_feed')&&S.unread?`<span class="badge">${S.unread}</span>`:''}${k==='c_dash'?'<span class="badge">3</span>':''}</button>`).join('');
  $('#crumbRole').textContent=t(S.role);
  $('#crumbPage').textContent=t(S.page);
  $('#meAv').textContent=R.me;
  $$('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));
  $('#q').placeholder=t('search');
  $('#bellBtn').innerHTML=ic('bell')+(S.unread?`<span class="dot">${S.unread}</span>`:'');
  $('#skinPop').innerHTML=`<div class="side-label" style="color:var(--muted);padding:6px 10px">${t('skin')}</div>`+SKINS.map(s=>`<button class="skin-opt ${s.id===S.skin?'on':''}" data-s="${s.id}"><span class="swatch">${s.sw.map(c=>`<i style="background:${c}"></i>`).join('')}</span><span><b>${s.name}</b><small>${s.d}</small></span>${s.id===S.skin?`<span style="margin-left:auto;color:var(--brand)">${ic('check')}</span>`:''}</button>`).join('');
  $('#bellPop').innerHTML=`<div style="display:flex;align-items:center;padding:6px 8px 10px"><b>${t('notif')}</b><button class="btn sm ghost" style="margin-left:auto" id="readAll">${t('readAll')}</button></div><div class="feed" style="max-height:420px;overflow:auto">${FEED.slice(0,5).map(n=>feedItem(n)).join('')}</div>`;
}
function go(page,role){
  if(role&&role!==S.role){S.role=role;const R=ROLES.find(r=>r.id===role);if(!R.pages.some(p=>p[0]===page))page=R.pages[1][0]}
  S.page=page;renderShell();
  const c=$('#content');c.innerHTML=`<div class="page">${(PAGES[page]||PAGES.overview)()}</div>`;
  (AFTER[page]||(()=>{}))();animateIn(c);
  window.scrollTo({top:0,behavior:'smooth'});
  $('#side').classList.remove('open');$('#scrim').classList.remove('open');
}

/* ================= PAGES ================= */
const PAGES={}, AFTER={};

PAGES.overview=()=>`
<section class="hero">
  <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
  <svg class="orn" viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width="1.2">${Array.from({length:12},(_,i)=>`<ellipse cx="100" cy="100" rx="92" ry="34" transform="rotate(${i*15} 100 100)"/>`).join('')}<circle cx="100" cy="100" r="30"/><circle cx="100" cy="100" r="96"/></svg>
  <span class="eyebrow">${ic('spark',15)} Факультет информационных технологий и ИИ · КазНУ им. аль-Фараби</span>
  <h1><span>Univer AI</span> — система раннего предупреждения и поддержки студентов</h1>
  <p>Анализирует посещаемость, успеваемость и расписание с помощью правил, моделей машинного обучения, трендов и выявления аномалий — и вовремя оповещает студентов, кураторов, родителей и преподавателей через удобные им каналы.</p>
  <div class="actions">
    <button class="btn white" onclick="go('s_home','student')">${ic('grad')} Кабинет студента</button>
    <button class="btn light" onclick="go('c_dash','curator')">${ic('target')} Дашборд куратора</button>
    <button class="btn light" onclick="go('a_rules','admin')">${ic('sliders')} Правила и пороги</button>
  </div>
  <div class="hero-stats">
    <div><b data-count="35">0</b><small>макс. Н/б по дисциплине</small></div>
    <div><b>25·50·90%</b><small>пороги эскалации</small></div>
    <div><b data-count="15">0</b><small>минут — цикл обновления</small></div>
    <div><b data-count="5">0</b><small>каналов доставки</small></div>
  </div>
</section>

<div class="card" style="margin-top:18px">
  <div class="card-h"><div class="ic">${ic('layers')}</div><div><h3>Как это работает</h3><div class="sub">Поток данных: из систем университета — к уведомлению в Telegram за минуты</div></div></div>
  <div class="pipe-wrap">${pipeline()}</div>
</div>

<div class="grid g-main" style="margin-top:18px">
  <div class="card"><div class="card-h"><div class="ic">${ic('target')}</div><h3>Цели системы</h3></div>
    <div class="grid g2">
      ${[['Раннее выявление студентов группы риска','модели ML, анализ трендов, выявление аномалий'],['Меньше превышений лимита Н/б и неуспеваемости','эскалация по порогам 25 / 50 / 90 %'],['Своевременные уведомления об изменениях расписания','с прежним и новым значением, без тихих часов, если < 24 ч'],['Меньше ручной работы кураторов и деканата','автосводки, планы поддержки, дайджесты']].map((g,i)=>`<div class="goal"><span class="n">0${i+1}</span><div><b style="font-size:13.5px">${g[0]}</b><div class="muted" style="font-size:12.5px;margin-top:3px">${g[1]}</div></div></div>`).join('')}
    </div>
  </div>
  <div class="card"><div class="card-h"><div class="ic ok">${ic('shield')}</div><h3>Принципы интеграции</h3></div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="principle"><b>Только чтение</b><span class="muted" style="font-size:13px">Univer AI не изменяет данные в источниках — API или read-only доступ к БД от ДИТ.</span></div>
      <div class="principle"><b>Мастер-данные остаются у университета</b><span class="muted" style="font-size:13px">Храним только нужное: контакты, состояние правил, снимки расписания, журнал, прогнозы.</span></div>
      <div class="principle"><b>Без внешних облаков ИИ</b><span class="muted" style="font-size:13px">Вся обработка — на серверах университета или факультета.</span></div>
    </div>
  </div>
</div>

<div class="sec-title" style="margin-top:28px"><div><h2>Пять ролей — пять кабинетов</h2><p>Нажмите на карточку, чтобы открыть кабинет</p></div></div>
<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
  ${[['student','grad','Студент',['Лента уведомлений','Индикатор лимита Н/б','Каналы и Telegram','Согласие для родителя'],'s_home'],['curator','users','Куратор',['Дашборд рисков группы','Карточка студента','Сценарный анализ','Планы поддержки'],'c_dash'],['teacher','book','Преподаватель',['Изменения расписания','Мои занятия','Настройка каналов'],'t_changes'],['parent','heart','Родитель',['Лента по студенту','В рамках согласия','Приглашение от студента'],'p_feed'],['admin','shield','Администратор',['Правила и пороги','Каналы доставки','Статистика и журналы','Версии ML-моделей'],'a_rules']].map(r=>`<div class="card hover role-card" onclick="go('${r[4]}','${r[0]}')"><div class="ic">${ic(r[1])}</div><h3 style="font-size:15px">${r[2]}</h3><ul>${r[3].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}
</div>

<div class="grid g2" style="margin-top:18px">
  <div class="card"><div class="card-h"><div class="ic">${ic('cpu')}</div><h3>Технологический стек</h3></div>
    <div class="stack">${[['Бэкенд','Python · FastAPI'],['БД','PostgreSQL'],['Очереди','Redis · Celery'],['Фронтенд','React'],['ML','scikit-learn · LightGBM/XGBoost · SHAP'],['Бот','aiogram'],['Деплой','Nginx']].map(s=>`<span><b>${s[0]}</b>${s[1]}</span>`).join('')}</div>
  </div>
  <div class="card"><div class="card-h"><div class="ic">${ic('cal')}</div><h3>Этапы работ</h3></div>
    <div class="timeline">
      <div class="st done"><div class="dotx"></div><b>Этап 0</b><p>Подготовка: ТЗ, доступ к данным ДИТ</p></div>
      <div class="st now"><div class="dotx"></div><b>Этап 1 · MVP</b><p>Бэкенд, фронтенд, дообучение iLearn, сервер</p></div>
      <div class="st"><div class="dotx"></div><b>Этап 2</b><p>Пилот на факультете ИТ и ИИ</p></div>
      <div class="st"><div class="dotx"></div><b>Этап 3</b><p>Push для моб. приложения, другие факультеты</p></div>
    </div>
  </div>
</div>`;

function pipeline(){
  const N=[
    {x:10,y:20,t:'univer.kaznu.kz',s:'оценки · Н/б · расписание',hl:0},
    {x:10,y:110,t:'ДИТ: API / БД',s:'read-only, каждые 15 мин',hl:0},
    {x:240,y:65,t:'Интеграция',s:'сравнение → события',hl:1},
    {x:450,y:20,t:'Правила',s:'пороги, тренды, дубли',hl:0},
    {x:450,y:110,t:'iLearn ML',s:'прогноз · SHAP · аномалии',hl:0},
    {x:660,y:65,t:'Доставка',s:'тихие часы, резерв',hl:1},
  ];
  const ch=[['Telegram','send'],['Email','mail'],['Web Push','monitor'],['Портал','globe'],['Моб. прил.','phone']];
  const box=n=>`<g class="node ${n.hl?'hl':''}"><rect x="${n.x}" y="${n.y}" width="180" height="58" rx="12"/><text x="${n.x+16}" y="${n.y+25}">${n.t}</text><text class="s" x="${n.x+16}" y="${n.y+44}">${n.s}</text></g>`;
  const paths=['M190,49 C215,49 215,94 240,94','M190,139 C215,139 215,94 240,94','M420,94 C435,94 435,49 450,49','M420,94 C435,94 435,139 450,139','M630,49 C645,49 645,94 660,94','M630,139 C645,139 645,94 660,94'];
  const outs=ch.map((c,i)=>`M840,94 C860,94 860,${16+i*36} 880,${16+i*36}`);
  let s=`<svg class="pipe" viewBox="0 0 1010 200">`;
  [...paths,...outs].forEach((d,i)=>{s+=`<path class="link" d="${d}"/><path class="flow" d="${d}" style="animation-delay:-${i*.2}s"/>`;});
  [...paths,...outs].forEach((d,i)=>{s+=`<circle class="pkt" r="4"><animateMotion dur="${2.2+(i%3)*.5}s" begin="-${(i*.37+.1).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></circle>`});
  s+=N.map(box).join('');
  ch.forEach((c,i)=>{const y=16+i*36;s+=`<g class="node"><rect x="880" y="${y-14}" width="122" height="28" rx="8"/><g transform="translate(890,${y-8}) scale(.66)" style="color:var(--brand)"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${P[c[1]]}</g></g><text x="912" y="${y+4.5}" style="font-size:12px">${c[0]}</text></g>`});
  return s+'</svg>';
}

/* ---------- STUDENT ---------- */
PAGES.s_home=()=>{
  const worst=[...DISC].sort((a,b)=>b.nb-a.nb)[0];
  return `
<div class="greet"><span class="blob" style="width:260px;height:260px;background:var(--blob1);right:-60px;top:-100px"></span><span class="blob" style="width:200px;height:200px;background:var(--blob2);right:240px;bottom:-140px;opacity:.3"></span>
  <div class="avatar">АС</div>
  <div><h2>Сәлем, Алихан!</h2><p>ВИСИИ-24-1 · 2 курс · куратор Г. Каримова · осенний семестр 2026–2027</p></div>
  <div class="r"><button class="btn white" onclick="go('s_feed')">${ic('bell')} ${S.unread} новых</button><button class="btn light" onclick="go('s_set')">${ic('send')} Telegram</button></div>
</div>
<div class="grid g4" style="margin-top:18px">
  <div class="card kpi"><span class="l">Накопленный GPA</span><span class="v tabnum" data-count="3.24" data-dec="2">0</span><span class="delta down">${ic('down',13)} −0,13 к прошлому семестру</span>${spark([3.42,3.37,3.31,3.24],'var(--brand-2)')}</div>
  <div class="card kpi"><span class="l">Текущий средний балл</span><span class="v tabnum" data-count="78.2" data-dec="1">0</span><span class="delta up">${ic('up',13)} выше 70 — норма</span>${spark([81,80,79,78,78.2],'var(--ok)')}</div>
  <div class="card kpi"><span class="l">Всего Н/б в семестре</span><span class="v tabnum" data-count="53">0</span><span class="delta down">${ic('alert',13)} 1 дисциплина ≥ 50 %</span>${spark([12,21,30,38,46,53],'var(--warn)')}</div>
  <div class="card kpi"><span class="l">Ближайший риск</span><span class="v" style="font-size:18px;line-height:1.35">${worst.n}</span><span class="delta down">${worst.nb} из ${MAXNB} Н/б</span></div>
</div>
<div class="grid g-main" style="margin-top:18px">
  <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><div><h3>Посещаемость по дисциплинам</h3><div class="sub">Индикатор приближения к лимиту ${MAXNB} Н/б · пороги ${THR.l1} / ${THR.l2} / ${THR.l3}</div></div><div class="r"><button class="btn sm ghost" onclick="go('s_att')">Подробнее ${ic('arrow',14)}</button></div></div>
    <div class="nb-grid">${DISC.map(d=>{const l=nbLvl(d.nb);return `<div class="nb">${ring(d.nb,MAXNB,l)}<div style="min-width:0"><div class="nm">${d.n}</div><div class="meta">${d.nb} из ${MAXNB} · ${l==='ok'?'в норме':l==='notice'?'порог 25%':l==='warn'?'порог 50%':'порог 90%'}</div></div></div>`}).join('')}</div>
  </div>
  <div class="card"><div class="card-h"><div class="ic">${ic('bell')}</div><h3>Последние уведомления</h3><div class="r"><button class="btn sm ghost" onclick="go('s_feed')">Все</button></div></div>
    <div class="feed" id="miniFeed">${FEED.slice(0,4).map(n=>feedItem(n)).join('')}</div>
  </div>
</div>`;};

PAGES.s_feed=()=>`
<div class="sec-title"><div><h2>Уведомления</h2><p>История за семестр · одно событие — одно уведомление · тихие часы 22:00–08:00</p></div>
<div class="r"><div class="tabs" id="feedTabs">${[['all','Все'],['nb','Пропуски'],['grade','Оценки'],['trend','Тренды'],['sched','Расписание'],['digest','Дайджест']].map((x,i)=>`<button data-f="${x[0]}" class="${i?'':'on'}">${x[1]}</button>`).join('')}</div></div></div>
<div class="grid g-main">
  <div class="feed" id="bigFeed">${FEED.map(n=>feedItem(n)).join('')}</div>
  <div style="display:flex;flex-direction:column;gap:18px">
    <div class="card"><div class="card-h"><div class="ic">${ic('zap')}</div><h3>Демо: живые события</h3></div><p class="muted" style="font-size:13px;margin-bottom:12px">Каждые ~15 секунд система «получает» новое событие из univer.kaznu.kz и отправляет уведомление.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn pri" id="fireNow">${ic('zap')} Сгенерировать событие</button><button class="btn ghost" id="liveTg">${S.live?ic('pause')+' Пауза':ic('play')+' Продолжить'}</button></div></div>
    <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><h3>По типам</h3></div>${hbars([['Расписание',2,'var(--notice)'],['Пропуски',2,'var(--warn)'],['Оценки',1,'var(--brand-2)'],['Тренды',1,'var(--danger)'],['Дайджест',1,'var(--ok)']])}</div>
  </div>
</div>`;
AFTER.s_feed=()=>{
  $$('#feedTabs button').forEach(b=>b.onclick=()=>{$$('#feedTabs button').forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;$$('#bigFeed .fi').forEach(el=>el.style.display=(f==='all'||el.dataset.k===f)?'':'none')});
  $('#fireNow').onclick=fireEvent;
  $('#liveTg').onclick=e=>{S.live=!S.live;e.currentTarget.innerHTML=S.live?ic('pause')+' Пауза':ic('play')+' Продолжить'};
};

PAGES.s_att=()=>`
<div class="sec-title"><div><h2>Посещаемость и оценки</h2><p>Данные из univer.kaznu.kz · обновлено ${new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}</p></div></div>
<div class="grid g2">
  <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><div><h3>Динамика GPA по семестрам</h3><div class="sub">Порог администратора — 2,50</div></div></div>
    ${lineChart({series:[{v:[3.42,3.37,3.31,3.24],c:'var(--brand)'}],labels:['1 сем.','2 сем.','3 сем.','4 сем. (тек.)'],min:2.2,max:4,thr:[{y:2.5,l:'Порог 2,5',c:'var(--danger)'}],yfmt:v=>fmt(v,1)})}
  </div>
  <div class="card"><div class="card-h"><div class="ic danger">${ic('down')}</div><div><h3>Тренд: Мат. статистика vs группа</h3><div class="sub">Наклон регрессии −3,6 балла за КТ → правило «отрицательный тренд»</div></div></div>
    ${lineChart({series:[{v:[71,66,62,58,57],c:'var(--danger)'},{v:[74,73,74,72,73],c:'var(--muted)',dash:true,area:false}],labels:['КТ1','КТ2','КТ3','РК1','КТ5'],min:40,max:100})}
    <div class="legend"><span><i style="background:var(--danger)"></i>Вы</span><span><i style="background:var(--muted)"></i>Среднее по группе</span></div>
  </div>
</div>
<div class="card" style="margin-top:18px"><div class="card-h"><div class="ic">${ic('book')}</div><h3>Дисциплины семестра</h3></div>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Дисциплина</th><th>Кредиты</th><th>Н/б (из ${MAXNB})</th><th>Текущий балл</th><th>Тренд (5 КТ)</th><th>Статус</th></tr></thead><tbody>
${DISC.map(d=>{const l=nbLvl(d.nb),p=d.nb/MAXNB*100,sl=d.tr[4]-d.tr[0];return `<tr><td><b>${d.n}</b><div class="muted" style="font-size:12px">${d.c}</div></td><td>${d.cr}</td><td style="min-width:180px"><div style="display:flex;justify-content:space-between;font-size:12.5px"><b>${d.nb}</b><span class="muted">${Math.round(p)}%</span></div><div class="scale"><i data-w="${p}" style="width:0;background:${lvlColor(l)}"></i>${[THR.l1,THR.l2,THR.l3].map(x=>`<em style="left:${x/MAXNB*100}%"></em>`).join('')}</div></td><td><b class="tabnum">${d.sc}</b></td><td style="width:130px">${spark(d.tr,sl<0?'var(--danger)':'var(--ok)').replace('class="spark chart"','class="chart" style="width:110px;height:34px"')}</td><td>${l==='ok'?'<span class="tag t-ok">Норма</span>':l==='notice'?'<span class="tag t-notice">25%</span>':l==='warn'?'<span class="tag t-warn">50%</span>':'<span class="tag t-danger">90%</span>'}</td></tr>`}).join('')}
</tbody></table></div></div>`;

PAGES.s_set=()=>`
<div class="sec-title"><div><h2>Каналы и согласия</h2><p>Выберите, куда приходят уведомления, и кто ещё их получает</p></div></div>
<div class="grid g2">
  <div class="card"><div class="card-h"><div class="ic">${ic('send')}</div><h3>Каналы доставки</h3></div>
    ${[['send','Telegram','@alikhan_s · основной канал',1],['mail','Электронная почта','a.serikbayev@live.kaznu.kz',1],['monitor','Web Push','Браузер на этом устройстве',1],['globe','Портал univer.kaznu.kz','Через REST API Univer AI',0],['phone','Мобильное приложение КазНУ','Этап 3 · в разработке',0]].map(c=>`<div class="row"><div class="ic">${ic(c[0])}</div><div class="tx"><b>${c[1]}</b><small>${c[2]}</small></div><button class="toggle ${c[3]?'on':''}"></button></div>`).join('')}
  </div>
  <div style="display:flex;flex-direction:column;gap:18px">
    <div class="card"><div class="card-h"><div class="ic">${ic('link')}</div><h3>Привязка Telegram</h3><span class="r tag t-ok">${ic('check',13)} Привязан</span></div>
      <p class="muted" style="font-size:13px">Чтобы привязать другой аккаунт, отправьте боту <b style="color:var(--text)">@UniverAI_bot</b> код:</p>
      <div style="display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap"><span class="code" id="tgCode">K7Q-42M</span><button class="btn sm ghost" id="newCode">${ic('refresh',15)} Новый код</button></div>
    </div>
    <div class="card"><div class="card-h"><div class="ic">${ic('moon')}</div><h3>Режим уведомлений</h3></div>
      <div class="row"><div class="tx"><b>Тихие часы 22:00 – 08:00</b><small>Срочные (изменения на ближайшие 24 ч) приходят всегда</small></div><button class="toggle on"></button></div>
      <div class="row"><div class="tx"><b>Уведомлять о каждой новой Н/б</b><small>Помимо порогов 25 / 50 / 90 %</small></div><button class="toggle"></button></div>
      <div class="row"><div class="tx"><b>Дайджест несрочных</b><small>Группировать оценки и мелкие изменения</small></div><select class="sel"><option>Ежедневно</option><option selected>Еженедельно</option><option>Выключен</option></select></div>
    </div>
  </div>
</div>
<div class="card" style="margin-top:18px"><div class="card-h"><div class="ic">${ic('heart')}</div><div><h3>Родитель и согласие</h3><div class="sub">Родитель видит только то, на что вы дали согласие</div></div></div>
  <div class="grid g2">
    <div><div class="row"><div class="avatar" style="width:40px;height:40px">РС</div><div class="tx"><b>Р. Серикбаева</b><small>Мама · привязана по приглашению 12.09</small></div><span class="tag t-ok">Активна</span></div>
    <div style="display:flex;gap:8px;margin-top:10px"><button class="btn sm ghost">${ic('link',15)} Пригласить ещё</button><button class="btn sm ghost" style="color:var(--danger)">${ic('x',15)} Отвязать</button></div></div>
    <div>${[['Пропуски — порог 90%',1],['GPA ниже порога',1],['Прогнозный риск iLearn',0],['Изменения расписания',0]].map(c=>`<div class="row"><div class="tx"><b>${c[0]}</b></div><button class="toggle ${c[1]?'on':''}"></button></div>`).join('')}</div>
  </div>
</div>`;
AFTER.s_set=()=>{$('#newCode').onclick=()=>{const a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',r=n=>Array.from({length:n},()=>a[Math.random()*a.length|0]).join('');const el=$('#tgCode');el.style.opacity=0;setTimeout(()=>{el.textContent=r(3)+'-'+r(3);el.style.opacity=1},200)}};

/* ---------- CURATOR ---------- */
let curFilter='all';
PAGES.c_dash=()=>{
  const hi=GROUP.filter(s=>s.risk>=.6).length, md=GROUP.filter(s=>s.risk>=.35&&s.risk<.6).length;
  return `
<div class="sec-title"><div><h2>Группа ВИСИИ-24-1</h2><p>12 студентов · прогноз iLearn пересчитан сегодня в 06:00 · куратор Г. Каримова</p></div><div class="r"><button class="btn ghost" onclick="go('c_week')">${ic('file')} Недельная сводка</button><button class="btn pri" onclick="go('c_scen')">${ic('sliders')} Сценарный анализ</button></div></div>
<div class="grid g4">
  <div class="card kpi"><span class="l">Высокий риск</span><span class="v" style="color:var(--danger)" data-count="${hi}">0</span><span class="delta down">+1 за неделю</span></div>
  <div class="card kpi"><span class="l">Средний риск</span><span class="v" style="color:var(--warn)" data-count="${md}">0</span><span class="delta up">−1 за неделю</span></div>
  <div class="card kpi"><span class="l">Средний GPA группы</span><span class="v" data-count="3.20" data-dec="2">0</span><span class="delta down">−0,05</span></div>
  <div class="card kpi"><span class="l">Аномалии (Isolation Forest)</span><span class="v" data-count="2">0</span><span class="delta down">резкий рост Н/б, падение баллов</span></div>
</div>
<div class="grid g-main dash" style="margin-top:18px">
  <div class="card"><div class="card-h"><div class="ic">${ic('users')}</div><h3>Студенты по уровню риска</h3><div class="r muted" style="font-size:12px">нажмите на строку — карточка студента</div></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px" id="cf">${[['all','Все'],['hi','Высокий риск'],['nb','Н/б ≥ 50%'],['gpa','GPA < 2,5'],['trend','Отриц. тренд'],['an','Аномалия']].map(f=>`<button class="chip ${f[0]===curFilter?'on':''}" data-f="${f[0]}">${f[1]}</button>`).join('')}</div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Студент</th><th>Риск FX/F</th><th>Макс. Н/б</th><th>GPA</th><th>Тренд</th></tr></thead><tbody id="gbody"></tbody></table></div>
  </div>
  <div style="display:flex;flex-direction:column;gap:18px">
    <div class="card"><div class="card-h"><div class="ic">${ic('target')}</div><h3>Распределение риска</h3></div>${donut([[hi,'var(--danger)','Высокий'],[md,'var(--warn)','Средний'],[GROUP.length-hi-md,'var(--ok)','Низкий']])}</div>
    <div class="card"><div class="card-h"><div class="ic danger">${ic('spark')}</div><h3>Сигналы iLearn</h3></div>
      <div class="feed">
        ${feedItem({k:'ai',pr:'high',title:'Дана Жумабекова · риск 0,82',body:'Аномалия: падение баллов сразу по 3 дисциплинам, Н/б выросли в 2,4 раза за 2 недели.',ch:['Email'],tm:'06:00'})}
        ${feedItem({k:'ai',pr:'mid',title:'Ержан Бекболатов · аномалия',body:'Резкий рост пропусков: 7 Н/б за последнюю неделю (в группе в среднем 1,2).',ch:['Web Push'],tm:'вчера'})}
      </div></div>
  </div>
</div>`;};
function donut(parts){
  const tot=parts.reduce((a,p)=>a+p[0],0);let acc=0;
  const arcs=parts.map(p=>{const len=p[0]/tot*100;const s=`<circle cx="60" cy="60" r="46" fill="none" stroke="${p[1]}" stroke-width="16" pathLength="100" stroke-dasharray="${Math.max(len-1.2,0)} ${100-len+1.2}" stroke-dashoffset="${-acc}" style="transition:.8s"/>`;acc+=len;return s}).join('');
  return `<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap"><svg viewBox="0 0 120 120" style="width:140px;transform:rotate(-90deg)"><circle cx="60" cy="60" r="46" fill="none" stroke="var(--ring-track)" stroke-width="16"/>${arcs}</svg><div style="display:flex;flex-direction:column;gap:10px">${parts.map(p=>`<div style="display:flex;align-items:center;gap:10px"><i style="width:12px;height:12px;border-radius:4px;background:${p[1]}"></i><span style="width:80px">${p[2]}</span><b>${p[0]}</b></div>`).join('')}</div></div>`;
}
function drawGroup(){
  const q=($('#q').value||'').toLowerCase();
  const f={all:()=>1,hi:s=>s.risk>=.6,nb:s=>s.nb>=THR.l2,gpa:s=>s.gpa<2.5,trend:s=>s.sl<-2,an:s=>s.an}[curFilter];
  const rows=GROUP.filter(f).filter(s=>s.n.toLowerCase().includes(q)).sort((a,b)=>b.risk-a.risk);
  $('#gbody').innerHTML=rows.length?rows.map(s=>{const[l,lab]=riskLvl(s.risk);return `<tr class="click" data-id="${s.id}"><td><div class="who"><div class="avatar">${initials(s.n)}</div><div><b>${s.n}</b>${s.an?' <span class="tag t-danger" style="margin-left:4px">аномалия</span>':''}<div class="muted" style="font-size:12px">${lab} риск</div></div></div></td><td><div class="riskbar"><div class="bar"><i data-w="${s.risk*100}" style="width:0;background:${lvlColor(l)}"></i></div><b class="tabnum">${fmt(s.risk)}</b></div></td><td><b class="tabnum" style="color:${lvlColor(nbLvl(s.nb))}">${s.nb}</b><div class="muted" style="font-size:11.5px">${s.nbD}</div></td><td class="tabnum"><b>${fmt(s.gpa)}</b> <span class="muted" style="font-size:11.5px">(${s.gpa-s.pg>=0?'+':''}${fmt(s.gpa-s.pg)})</span></td><td style="width:120px">${spark(s.tr,s.sl<0?'var(--danger)':'var(--ok)').replace('class="spark chart"','class="chart" style="width:100px;height:30px"')}</td></tr>`}).join(''):`<tr><td colspan="5" class="empty">Нет студентов по этому фильтру</td></tr>`;
  $$('#gbody tr.click').forEach(r=>r.onclick=()=>openStudent(+r.dataset.id));
  animateIn($('#gbody'));
}
AFTER.c_dash=()=>{drawGroup();$$('#cf .chip').forEach(c=>c.onclick=()=>{curFilter=c.dataset.f;$$('#cf .chip').forEach(x=>x.classList.toggle('on',x===c));drawGroup()})};

function factors(s){
  const f=[
    [`Н/б по «${s.nbD}»: ${s.nb} из ${MAXNB}`,(s.nb-8)*.012],
    [`Изменение GPA: ${fmt(s.pg)} → ${fmt(s.gpa)}`,(s.pg-s.gpa)*.35],
    [`Наклон оценок за 5 КТ: ${s.sl>0?'+':''}${fmt(s.sl,1)}`,-s.sl*.017],
    [`Текущий балл vs группа: ${s.tr[4]} / 76`,(76-s.tr[4])*.006],
    ['Посещаемость лекций выше среднего',-.035],
  ];
  if(s.an)f.splice(1,0,['Аномалия: резкое отклонение от группы',.09]);
  return f.sort((a,b)=>Math.abs(b[1])-Math.abs(a[1])).slice(0,6);
}
function shapView(f){
  const mx=Math.max(...f.map(x=>Math.abs(x[1])),.05);
  return `<div class="shap">${f.map(([n,v])=>{const w=Math.abs(v)/mx*34;return `<div class="sh"><span>${n}</span><div class="ax"><i style="${v>=0?`left:50%;width:${w}%;background:var(--danger)`:`left:${50-w}%;width:${w}%;background:var(--ok)`}"></i><span style="${v>=0?`left:calc(50% + ${w}% + 4px);color:var(--danger)`:`right:calc(50% + ${w}% + 4px);color:var(--ok)`}">${v>=0?'+':'−'}${fmt(Math.abs(v))}</span></div></div>`}).join('')}</div>`;
}
function openStudent(id){
  const s=GROUP.find(x=>x.id===id),[l,lab]=riskLvl(s.risk);
  $('#modalBox').innerHTML=`
  <div class="mh"><div class="avatar">${initials(s.n)}</div><div><h3>${s.n}</h3><div style="opacity:.85;font-size:13px">ВИСИИ-24-1 · 2 курс · грант · ID ${4000+s.id}</div></div><span class="tag" style="background:rgba(255,255,255,.18);color:#fff;margin-left:12px">${lab} риск · ${fmt(s.risk)}</span><button class="x" onclick="closeModal()">${ic('x')}</button></div>
  <div class="mb">
    <div class="grid g4">
      <div class="card kpi"><span class="l">Вероятность FX/F</span><span class="v" style="color:${lvlColor(l)}">${Math.round(s.risk*100)}%</span></div>
      <div class="card kpi"><span class="l">GPA семестра</span><span class="v">${fmt(s.gpa)}</span></div>
      <div class="card kpi"><span class="l">Макс. Н/б</span><span class="v">${s.nb}<span class="muted" style="font-size:15px">/${MAXNB}</span></span></div>
      <div class="card kpi"><span class="l">План поддержки</span><span class="v" style="font-size:17px;line-height:1.6">${s.plan}</span></div>
    </div>
    <div class="grid g2" style="margin-top:16px">
      <div class="card"><div class="card-h"><div class="ic danger">${ic('spark')}</div><div><h3>Факторы риска (SHAP)</h3><div class="sub">Красные повышают риск, зелёные — снижают</div></div></div>${shapView(factors(s))}</div>
      <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><h3>Баллы за 5 контрольных точек</h3></div>${lineChart({series:[{v:s.tr,c:s.sl<0?'var(--danger)':'var(--ok)'},{v:[76,76,75,76,76],c:'var(--muted)',dash:true}],labels:['КТ1','КТ2','КТ3','РК1','КТ5'],min:40,max:100,h:200})}<div class="legend"><span><i style="background:${s.sl<0?'var(--danger)':'var(--ok)'}"></i>Студент</span><span><i style="background:var(--muted)"></i>Группа</span></div></div>
    </div>
    <div class="grid g2" style="margin-top:16px">
      <div class="card"><div class="card-h"><div class="ic">${ic('bell')}</div><h3>История уведомлений</h3></div><div class="feed">
        ${feedItem({k:'nb',pr:'mid',title:`Порог 50% · ${s.nbD}`,body:`${s.nb} Н/б из ${MAXNB}. Получатели: студент, куратор.`,ch:['Telegram','Email'],tm:'01.10'})}
        ${feedItem({k:'trend',pr:'low',title:'Отрицательный тренд',body:'Снижение баллов несколько КТ подряд.',ch:['Telegram'],tm:'28.09'})}
      </div></div>
      <div class="card"><div class="card-h"><div class="ic">${ic('heart')}</div><h3>Добавить меру поддержки</h3></div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <select class="sel"><option>Консультация с куратором</option><option>Доп. занятия по дисциплине</option><option>Тьюторство</option><option>Встреча с родителями (с согласия)</option><option>Психологическая служба</option></select>
          <div style="display:flex;gap:10px"><input class="inp" style="flex:1" value="Г. Каримова"><input class="inp" style="width:130px" type="date" value="2026-10-15"></div>
          <textarea class="inp" placeholder="Комментарий…"></textarea>
          <button class="btn pri" onclick="addPlan('${s.n}')">${ic('check')} Добавить в план</button>
        </div>
      </div>
    </div>
    <p class="muted" style="font-size:12px;margin-top:14px">Прогнозы используются только для поддержки студента и не применяются для принятия административных решений.</p>
  </div>`;
  $('#modal').classList.add('open');animateIn($('#modalBox'));
}
function closeModal(){$('#modal').classList.remove('open')}
function addPlan(n){PLANS.unshift({id:Date.now(),st:'todo',who:n,what:$('#modalBox select').value,resp:$('#modalBox .inp').value,due:'15.10'});closeModal();toast({k:'sys',title:'Мера добавлена в план поддержки',body:n,ch:['Univer AI']})}

PAGES.c_scen=()=>`
<div class="sec-title"><div><h2>Сценарный анализ</h2><p>«Что будет, если…» — меняйте показатели и смотрите, как модель пересчитывает риск</p></div>
<div class="r"><select class="sel" id="scStu">${GROUP.slice(0,6).map(s=>`<option value="${s.id}">${s.n}</option>`).join('')}</select></div></div>
<div class="grid g-main">
  <div class="card"><div class="card-h"><div class="ic">${ic('sliders')}</div><h3>Параметры сценария</h3><div class="r"><button class="btn sm ghost" id="scReset">${ic('refresh',15)} Сбросить</button></div></div>
    <div id="scSliders"></div>
    <div class="card" style="background:var(--surface-2);box-shadow:none;margin-top:12px"><div class="card-h"><div class="ic danger">${ic('spark')}</div><h3>Вклад факторов</h3></div><div id="scShap"></div></div>
  </div>
  <div class="card" style="display:flex;flex-direction:column;align-items:center;gap:6px">
    <div class="card-h" style="align-self:stretch"><div class="ic">${ic('target')}</div><h3>Вероятность FX / F</h3></div>
    <div class="gauge" id="gauge"></div>
    <div id="scCmp" style="display:flex;gap:10px;margin-top:10px"></div>
    <p class="muted" style="font-size:12.5px;text-align:center;margin-top:12px;max-width:300px" id="scTip"></p>
  </div>
</div>`;
const SCX=[['nb','Н/б по самой проблемной дисциплине',0,35,1],['score','Текущий средний балл',30,100,1],['rk','Рубежный контроль (РК1)',0,100,1],['gpa','GPA прошлого семестра',1,4,.01],['recent','Пропуски за последние 2 недели',0,12,1]];
let scBase,scCur,scOff=0;
function scRisk(v){const terms={nb:.11*(v.nb-8),score:-.05*(v.score-72),rk:-.025*(v.rk-65),gpa:-1.3*(v.gpa-3),recent:.22*(v.recent-2)};const z=-1+Object.values(terms).reduce((a,b)=>a+b,0)+scOff;return{r:1/(1+Math.exp(-z)),terms}}
function scInit(id){const s=GROUP.find(x=>x.id===id);scBase={nb:s.nb,score:s.tr[4],rk:Math.max(30,s.tr[3]-6),gpa:s.pg,recent:s.an?7:Math.max(0,Math.round(s.nb/6))};scCur={...scBase};scOff=0;const z0=Math.log(1/scRisk(scBase).r-1)*-1;scOff=Math.log(s.risk/(1-s.risk))-z0;
  $('#scSliders').innerHTML=SCX.map(([k,lab,mn,mx,st])=>`<div class="slider"><div class="lb"><span>${lab}</span><b id="lv_${k}"></b></div><input type="range" min="${mn}" max="${mx}" step="${st}" value="${scCur[k]}" data-k="${k}"></div>`).join('');
  $$('#scSliders input').forEach(i=>i.oninput=()=>{scCur[i.dataset.k]=+i.value;scUpdate()});scUpdate()}
function scUpdate(){
  $$('#scSliders input').forEach(i=>{const p=(i.value-i.min)/(i.max-i.min)*100;i.style.setProperty('--p',p+'%');$('#lv_'+i.dataset.k).textContent=i.dataset.k==='gpa'?fmt(+i.value):i.value});
  const b=scRisk(scBase),c=scRisk(scCur),[l,lab]=riskLvl(c.r);
  const ang=-90+c.r*180;
  $('#gauge').innerHTML=`<svg viewBox="0 0 280 160"><defs><linearGradient id="gg" x1="0" x2="1"><stop offset="0" stop-color="var(--ok)"/><stop offset=".5" stop-color="var(--warn)"/><stop offset="1" stop-color="var(--danger)"/></linearGradient></defs><path d="M30 140 A110 110 0 0 1 250 140" fill="none" stroke="var(--ring-track)" stroke-width="20" stroke-linecap="round"/><path class="arc" d="M30 140 A110 110 0 0 1 250 140" fill="none" stroke="url(#gg)" stroke-width="20" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100-c.r*100}"/><circle cx="${(140-110*Math.cos(Math.PI*c.r)).toFixed(1)}" cy="${(140-110*Math.sin(Math.PI*c.r)).toFixed(1)}" r="12" fill="var(--surface)" stroke="${lvlColor(l)}" stroke-width="5" style="transition:all .6s cubic-bezier(.2,.8,.2,1)"/></svg><div class="v"><b style="color:${lvlColor(l)}">${Math.round(c.r*100)}%</b><small>${lab} риск</small></div>`;
  const d=c.r-b.r;
  $('#scCmp').innerHTML=`<span class="tag t-muted">Сейчас: ${Math.round(b.r*100)}%</span><span class="tag ${Math.abs(d)<.005?'t-muted':d<0?'t-ok':'t-danger'}">${Math.abs(d)<.005?'Сценарий: без изменений':`Сценарий: ${d<0?'−':'+'}${Math.abs(Math.round(d*100))} п.п.`}</span>`;
  const names={nb:'Н/б по дисциплине',score:'Текущий балл',rk:'Рубежный контроль',gpa:'GPA прошлого семестра',recent:'Пропуски за 2 недели'};
  $('#scShap').innerHTML=shapView(Object.entries(c.terms).map(([k,v])=>[names[k],v*.12]).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1])));
  const best=Object.entries(c.terms).sort((a,b)=>b[1]-a[1])[0];
  $('#scTip').textContent=c.r<.35?'Студент вне зоны риска при таких показателях.':`Сильнее всего риск сейчас повышает: «${names[best[0]]}». Это хорошая цель для плана поддержки.`;
}
AFTER.c_scen=()=>{scInit(+$('#scStu').value);$('#scStu').onchange=e=>scInit(+e.target.value);$('#scReset').onclick=()=>scInit(+$('#scStu').value)};

PAGES.c_plan=()=>`
<div class="sec-title"><div><h2>Планы поддержки</h2><p>Перетащите карточку, чтобы сменить статус · ответственный, срок и итоговая заметка</p></div></div>
<div class="kanban" id="kb">${[['todo','Запланировано','var(--muted)'],['doing','В работе','var(--brand-2)'],['done','Выполнено','var(--ok)']].map(c=>`<div class="col" data-st="${c[0]}"><h4><i style="width:9px;height:9px;border-radius:50%;background:${c[2]}"></i>${c[1]}<span>${PLANS.filter(p=>p.st===c[0]).length}</span></h4>${PLANS.filter(p=>p.st===c[0]).map(p=>`<div class="task" draggable="true" data-id="${p.id}"><b>${p.who}</b><p>${p.what}</p>${p.note?`<p style="color:var(--ok)">${ic('check',13)} ${p.note}</p>`:''}<div class="ft">${ic('user',13)} ${p.resp}<span style="margin-left:auto;display:inline-flex;gap:4px;align-items:center">${ic('clock',13)} ${p.due}</span></div></div>`).join('')}</div>`).join('')}</div>`;
AFTER.c_plan=()=>{
  let dragId=null;
  $$('.task').forEach(t=>{t.ondragstart=()=>{dragId=+t.dataset.id;t.classList.add('drag')};t.ondragend=()=>t.classList.remove('drag');t.ondblclick=()=>{const p=PLANS.find(x=>x.id===+t.dataset.id);p.st={todo:'doing',doing:'done',done:'todo'}[p.st];go('c_plan')}});
  $$('.col').forEach(c=>{c.ondragover=e=>{e.preventDefault();c.classList.add('drop')};c.ondragleave=()=>c.classList.remove('drop');c.ondrop=()=>{const p=PLANS.find(x=>x.id===dragId);if(p){p.st=c.dataset.st;if(p.st==='done'&&!p.note)p.note='Выполнено';}go('c_plan');toast({k:'sys',title:'Статус плана обновлён',body:p?`${p.who}: ${p.what}`:'',ch:['Univer AI']})}});
};

PAGES.c_week=()=>`
<div class="sec-title"><div><h2>Еженедельная сводка · 29.09 – 05.10</h2><p>Формируется автоматически каждый понедельник в 08:00 и уходит куратору на почту</p></div><div class="r"><button class="btn ghost" onclick="window.print()">${ic('file')} Печать</button></div></div>
<div class="grid g4">
 <div class="card kpi"><span class="l">Новых Н/б в группе</span><span class="v" data-count="41">0</span><span class="delta down">+12 к прошлой неделе</span></div>
 <div class="card kpi"><span class="l">Пересечений порогов</span><span class="v" data-count="5">0</span><span class="delta down">2 × 50%, 3 × 25%</span></div>
 <div class="card kpi"><span class="l">Новых оценок</span><span class="v" data-count="68">0</span><span class="delta up">средняя 76,4</span></div>
 <div class="card kpi"><span class="l">Мер поддержки закрыто</span><span class="v" data-count="1">0</span><span class="delta up">из 6 активных</span></div>
</div>
<div class="grid g2" style="margin-top:18px">
 <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><h3>Н/б в группе по дням</h3></div>${colChart({vals:[9,7,11,6,8,0],labels:['Пн','Вт','Ср','Чт','Пт','Сб'],colors:'var(--brand)'})}</div>
 <div class="card"><div class="card-h"><div class="ic">${ic('book')}</div><h3>Проблемные дисциплины</h3></div>${hbars([['Мат. статистика',14,'var(--danger)'],['Высоконагр. системы',11,'var(--warn)'],['Базы данных',7,'var(--brand-2)'],['Қазақ тілі',5,'var(--brand-2)'],['Машинное обучение',4,'var(--brand-2)']],' Н/б')}</div>
</div>
<div class="card" style="margin-top:18px"><div class="card-h"><div class="ic danger">${ic('alert')}</div><h3>Требуют внимания</h3></div>
 <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Студент</th><th>Что изменилось</th><th>Рекомендация</th></tr></thead><tbody>
 <tr><td><b>Дана Жумабекова</b></td><td>Риск 0,64 → 0,82; аномалия по 3 дисциплинам</td><td>Ускорить встречу с родителями (согласие есть)</td></tr>
 <tr><td><b>Тимур Касымов</b></td><td>Достиг порога 50% по «Высоконагр. системам»</td><td>Назначить встречу с куратором</td></tr>
 <tr><td><b>Ержан Бекболатов</b></td><td>7 Н/б за неделю при среднем 1,2</td><td>Выяснить причину (уважительная?)</td></tr>
 </tbody></table></div></div>`;

/* ---------- TEACHER ---------- */
PAGES.t_changes=()=>`
<div class="sec-title"><div><h2>Изменения расписания</h2><p>Система сравнивает снимки расписания и сообщает вам и студентам затронутых групп</p></div></div>
<div class="grid g-main">
 <div class="feed">
  ${feedItem({k:'sched',pr:'high',title:'Аудитория · Машинное обучение (лаб.) · 06.10, 10:00',body:'Группа ВИСИИ-24-1/1 (14 студентов) уведомлена.',diff:['Ауд. 312, ГУК','Ауд. 315, ФИТ'],ch:['Telegram','Email'],tm:'25 мин назад',unread:true})}
  ${feedItem({k:'sched',pr:'mid',title:'Время · Машинное обучение (практика) · 10.10',body:'Группа ВИСИИ-24-1 (26 студентов) уведомлена.',diff:['08:00–09:50','10:00–11:50'],ch:['Telegram'],tm:'вчера, 17:12'})}
  ${feedItem({k:'sched',pr:'mid',title:'Отмена · Машинное обучение (лекция) · 08.10',body:'Причина: участие в конференции. Группа ВИСИИ-23-1 уведомлена.',diff:['08:00, Ауд. 101','Отменено'],ch:['Telegram','Web Push'],tm:'30.09'})}
  ${feedItem({k:'sched',pr:'low',title:'Новое занятие · Высоконагр. системы (консультация)',body:'Добавлено 12.10, 14:00, Ауд. 204.',diff:['—','12.10, 14:00 · Ауд. 204'],ch:['Email'],tm:'29.09'})}
 </div>
 <div class="card"><div class="card-h"><div class="ic">${ic('zap')}</div><h3>Что отслеживается</h3></div>
  ${['Преподаватель','Дата','Время начала и окончания','Аудитория или корпус','Отмена занятия','Добавление занятия'].map(x=>`<div class="row"><span style="color:var(--ok)">${ic('check')}</span><div class="tx"><b>${x}</b></div></div>`).join('')}
  <div class="tag t-danger" style="margin-top:12px;white-space:normal;line-height:1.4;padding:8px 12px">Изменения на ближайшие 24 ч — высокий приоритет, не откладываются в тихие часы</div>
 </div>
</div>`;
PAGES.t_week=()=>`
<div class="sec-title"><div><h2>Мои занятия · 06.10 – 10.10</h2><p>Б. Нурланов · кафедра искусственного интеллекта и Big Data</p></div></div>
<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>День</th><th>Время</th><th>Дисциплина</th><th>Тип</th><th>Группы</th><th>Аудитория</th><th>Статус</th></tr></thead><tbody>
${SCHED.map(s=>`<tr style="${s.chg==='cancel'?'opacity:.6':''}"><td><b>${s.d}</b></td><td class="tabnum">${s.tm}</td><td>${s.disc}</td><td><span class="tag t-muted">${s.type}</span></td><td>${s.grp}</td><td>${s.room}</td><td>${s.chg==='cancel'?'<span class="tag t-danger">Отменено</span>':s.chg==='room'?'<span class="tag t-warn">Аудитория изменена</span>':s.chg==='time'?'<span class="tag t-warn">Перенесено</span>':'<span class="tag t-ok">По плану</span>'}</td></tr>`).join('')}
</tbody></table></div></div>`;
PAGES.t_set=()=>`
<div class="sec-title"><div><h2>Каналы</h2><p>Куда присылать уведомления об изменениях ваших занятий</p></div></div>
<div class="grid g2"><div class="card">${[['send','Telegram','@b_nurlanov',1],['mail','Электронная почта','b.nurlanov@kaznu.kz',1],['monitor','Web Push','Браузер',0]].map(c=>`<div class="row"><div class="ic">${ic(c[0])}</div><div class="tx"><b>${c[1]}</b><small>${c[2]}</small></div><button class="toggle ${c[3]?'on':''}"></button></div>`).join('')}</div>
<div class="card"><div class="row"><div class="tx"><b>Тихие часы 22:00 – 08:00</b><small>Для несрочных уведомлений</small></div><button class="toggle on"></button></div><div class="row"><div class="tx"><b>Резервный канал</b><small>Если Telegram не доставил срочное — отправить на почту</small></div><button class="toggle on"></button></div></div></div>`;

/* ---------- PARENT ---------- */
PAGES.p_feed=()=>`
<div class="greet"><span class="blob" style="width:260px;height:260px;background:var(--blob1);right:-60px;top:-100px"></span><div class="avatar">АС</div><div><h2>Алихан Серикбаев</h2><p>ВИСИИ-24-1 · 2 курс · вы видите уведомления в рамках согласия студента</p></div></div>
<div class="grid g-main" style="margin-top:18px">
 <div class="feed">
  ${feedItem({k:'nb',pr:'high',title:'Пропуски: близко к лимиту',body:'По «Математической статистике» достигнут порог 50% (19 из 35). Куратор уже в курсе.',ch:['Telegram'],tm:'2 ч назад',unread:true})}
  ${feedItem({k:'grade',pr:'mid',title:'GPA ниже порога',body:'Пока не зафиксировано. Вы получите уведомление, если GPA станет ниже 2,5.',ch:['Telegram'],tm:'—'})}
 </div>
 <div class="card"><div class="card-h"><div class="ic">${ic('shield')}</div><h3>Что вам доступно</h3></div>
  ${[['Пропуски — порог 90% (и 50% по решению студента)',1],['GPA ниже порога',1],['Прогнозный риск iLearn',0],['Изменения расписания',0],['Оценки по дисциплинам',0]].map(c=>`<div class="row"><span style="color:${c[1]?'var(--ok)':'var(--muted)'}">${ic(c[1]?'check':'x')}</span><div class="tx"><b style="${c[1]?'':'color:var(--muted);font-weight:500'}">${c[0]}</b></div></div>`).join('')}
 </div>
</div>`;
PAGES.p_consent=()=>`
<div class="sec-title"><div><h2>Согласие студента</h2><p>Как работает привязка родителя</p></div></div>
<div class="grid g3">${[['link','1. Приглашение','Студент отправляет приглашение из своего кабинета (если данных о родителях нет в системах университета).'],['shield','2. Согласие','Студент выбирает, какие уведомления получает родитель. Его можно изменить или отозвать в любой момент.'],['bell','3. Уведомления','Родитель получает уведомления по правилам и только в пределах согласия — например, порог 90% по Н/б.']].map(s=>`<div class="card hover"><div class="ic" style="margin-bottom:12px">${ic(s[0])}</div><h3 style="font-size:15px;margin-bottom:6px">${s[1]}</h3><p class="muted" style="font-size:13px">${s[2]}</p></div>`).join('')}</div>
<div class="card" style="margin-top:18px"><div class="card-h"><div class="ic ok">${ic('check')}</div><h3>Статус</h3></div><div class="row"><div class="tx"><b>Привязка к Алихану Серикбаеву</b><small>Приглашение принято 12.09.2026 · согласие действует</small></div><span class="tag t-ok">Активно</span></div></div>`;

/* ---------- ADMIN ---------- */
PAGES.a_rules=()=>`
<div class="sec-title"><div><h2>Правила и пороги</h2><p>Настраиваются без изменения кода: условие, получатели, каналы, шаблон, приоритет, однократность</p></div><div class="r"><button class="btn pri" id="addRule">${ic('edit')} Новое правило</button></div></div>
<div class="card"><div class="card-h"><div class="ic warn">${ic('alert')}</div><div><h3>Пороги по пропускам (Н/б)</h3><div class="sub">Максимум по умолчанию — <input class="inp tabnum" id="maxNb" type="number" min="10" max="60" value="${MAXNB}" style="width:70px;height:30px;padding:0 8px"> Н/б · можно задать отдельно для дисциплин и типов занятий</div></div></div>
 <div class="thr-vis" id="thrVis"></div>
 <div id="thrRows"></div>
</div>
<div class="sec-title" style="margin-top:24px"><div><h2 style="font-size:18px">Активные правила</h2></div></div>
<div style="display:flex;flex-direction:column;gap:10px" id="rules"></div>
<div class="card" style="margin-top:18px"><div class="card-h"><div class="ic">${ic('edit')}</div><div><h3>Шаблон сообщения · «Порог 50%»</h3><div class="sub">Переменные: {student}, {discipline}, {count}, {max}, {threshold}</div></div></div>
 <div class="grid g2"><textarea class="inp" id="tpl" style="min-height:110px">⚠️ {student}, по дисциплине «{discipline}» у вас {count} Н/б из {max} ({threshold}). Куратор получил уведомление. Univer AI</textarea>
 <div><div class="muted" style="font-size:12px;margin-bottom:6px">Предпросмотр в Telegram</div><div id="tplPrev" style="background:#E6EEF7;border-radius:14px;padding:14px;color:#0B1B33;font-size:13.5px;line-height:1.5"></div></div></div>
</div>`;
function drawThr(){
  const mx=+$('#maxNb').value||35,lv=[['l1','Уровень 1','var(--notice)','Студент'],['l2','Уровень 2','var(--warn)','Студент, куратор'],['l3','Уровень 3','var(--danger)','Студент, куратор, родитель*']];
  $('#thrVis').innerHTML=`<div class="zone" style="left:0;width:${THR.l1/mx*100}%;background:var(--ok-soft)"></div><div class="zone" style="left:${THR.l1/mx*100}%;width:${(THR.l2-THR.l1)/mx*100}%;background:var(--notice-soft)"></div><div class="zone" style="left:${THR.l2/mx*100}%;width:${(THR.l3-THR.l2)/mx*100}%;background:var(--warn-soft)"></div><div class="zone" style="left:${THR.l3/mx*100}%;right:0;background:var(--danger-soft)"></div>`+lv.map(l=>`<div class="mk" style="left:${THR[l[0]]/mx*100}%;background:${l[2]};color:${l[2]}"><span>${THR[l[0]]}</span></div>`).join('');
  if(!$('#thrRows').children.length){
    $('#thrRows').innerHTML=lv.map(l=>`<div class="thr"><div class="lvl"><i style="background:${l[2]}"></i>${l[1]}</div><div class="slider" style="padding:0"><input type="range" min="1" max="${mx}" value="${THR[l[0]]}" data-l="${l[0]}"></div><div><b class="tabnum" id="tv_${l[0]}"></b><div class="muted" style="font-size:12px">${l[3]}</div></div></div>`).join('');
    $$('#thrRows input').forEach(i=>i.oninput=()=>{let v=+i.value;const k=i.dataset.l;if(k==='l1')v=Math.min(v,THR.l2-1);if(k==='l2')v=Math.max(THR.l1+1,Math.min(v,THR.l3-1));if(k==='l3')v=Math.max(v,THR.l2+1);THR[k]=v;i.value=v;drawThr()});
  }
  $$('#thrRows input').forEach(i=>{i.max=mx;const p=(i.value-1)/(mx-1)*100;i.style.setProperty('--p',p+'%');$('#tv_'+i.dataset.l).textContent=`${THR[i.dataset.l]} Н/б · ${Math.round(THR[i.dataset.l]/mx*100)}%`});
  drawTpl();
}
function drawTpl(){const mx=+$('#maxNb').value||35;$('#tplPrev').textContent=$('#tpl').value.replace('{student}','Алихан').replace('{discipline}','Математическая статистика').replace('{count}',THR.l2).replace('{max}',mx).replace('{threshold}',Math.round(THR.l2/mx*100)+'%')}
function drawRules(){
  $('#rules').innerHTML=RULES.map(r=>`<div class="rule ${r.on?'':'off'}"><div class="ic">${ic(r.ic)}</div><div style="min-width:0"><b style="font-size:14px">${r.name}</b><div class="muted" style="font-size:12.5px">Если ${r.cond}</div><div class="k">${r.to.map(x=>`<span class="tag t-notice">${ic('user',12)} ${x}</span>`).join('')}${r.ch.map(x=>`<span class="tag t-muted">${ic(chIc[x]||'bell',12)} ${x}</span>`).join('')}<span class="tag ${r.pr.startsWith('Высок')?'t-danger':r.pr==='Средний'?'t-warn':'t-muted'}">${r.pr}</span>${r.once?'<span class="tag t-ok">однократно</span>':''}</div></div><div class="r" style="display:flex;gap:8px;align-items:center"><button class="btn sm ghost">${ic('edit',14)}</button><button class="toggle ${r.on?'on':''}" data-id="${r.id}"></button></div></div>`).join('');
  $$('#rules .toggle').forEach(b=>b.onclick=()=>{const r=RULES.find(x=>x.id===+b.dataset.id);r.on=!r.on;drawRules();toast({k:'sys',title:r.on?'Правило включено':'Правило выключено',body:r.name,ch:['Журнал аудита']})});
}
AFTER.a_rules=()=>{drawThr();drawRules();$('#maxNb').oninput=()=>{const mx=+$('#maxNb').value||35;THR.l3=Math.min(THR.l3,mx);THR.l2=Math.min(THR.l2,THR.l3-1);THR.l1=Math.min(THR.l1,THR.l2-1);$$('#thrRows input').forEach(i=>i.value=THR[i.dataset.l]);drawThr()};$('#tpl').oninput=drawTpl;$('#addRule').onclick=()=>toast({k:'sys',title:'Конструктор правил',body:'В полной версии здесь открывается редактор условия, получателей и шаблона.',ch:['Демо']})};

PAGES.a_chan=()=>`
<div class="sec-title"><div><h2>Каналы доставки</h2><p>Резервный канал: если срочное уведомление не доставлено, используется следующий доступный</p></div></div>
<div class="grid g2">
 ${[['send','Telegram-бот','aiogram · основной канал',99.1,'Работает','ok'],['mail','Электронная почта','SMTP университета · нужен доступ ДИТ',96.4,'Работает','ok'],['monitor','Веб-кабинет · Web Push','Центр уведомлений + push в браузере',92.8,'Работает','ok'],['globe','Портал univer.kaznu.kz','REST API · встраивание выполняет ДИТ',0,'Ожидает ДИТ','warn'],['phone','Мобильное приложение','API push-уведомлений · этап 3',0,'Этап 3','muted']].map(c=>`<div class="chan"><div class="ic ${c[5]==='ok'?'':c[5]==='warn'?'warn':''}">${ic(c[0])}</div><div class="tx"><b>${c[1]}</b><small>${c[2]}</small>${c[3]?`<div class="scale" style="margin-top:8px"><i data-w="${c[3]}" style="width:0;background:var(--ok)"></i></div>`:''}</div><div style="text-align:right">${c[3]?`<b class="tabnum">${fmt(c[3],1)}%</b><br>`:''}<span class="tag t-${c[5]}">${c[4]}</span></div></div>`).join('')}
 <div class="card"><div class="card-h"><div class="ic">${ic('refresh')}</div><h3>Порядок резервирования</h3></div><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">${['Telegram','Web Push','Email'].map((x,i)=>`<span class="tag t-notice" style="font-size:13px;padding:6px 12px">${i+1}. ${x}</span>${i<2?ic('arrow',16):''}`).join('')}</div><p class="muted" style="font-size:12.5px;margin-top:12px">Тихие часы: 22:00–08:00 · дайджест несрочных — ежедневно в 08:00</p></div>
</div>`;

PAGES.a_stats=()=>{
  const days=Array.from({length:14},(_,i)=>{const d=new Date(2026,8,19+i);return d.getDate()+'.'+String(d.getMonth()+1).padStart(2,'0')});
  return `
<div class="sec-title"><div><h2>Статистика</h2><p>Пилот: факультет информационных технологий и ИИ</p></div><div class="r"><div class="tabs"><button>7 дней</button><button class="on">14 дней</button><button>Семестр</button></div></div></div>
<div class="grid g4">
 <div class="card kpi"><span class="l">Уведомлений отправлено</span><span class="v" data-count="12480">0</span><span class="delta up">${ic('up',13)} +18%</span>${spark([620,700,810,760,880,940,1010],'var(--brand-2)')}</div>
 <div class="card kpi"><span class="l">Доставляемость</span><span class="v" data-count="97.6" data-dec="1">0</span><span class="delta up">% доставлено · цель 95%</span></div>
 <div class="card kpi"><span class="l">Студентов в зоне риска</span><span class="v" data-count="214">0</span><span class="delta up">${ic('down',13)} −9% с начала семестра</span>${spark([248,240,236,229,221,214],'var(--ok)')}</div>
 <div class="card kpi"><span class="l">Привязали Telegram</span><span class="v" data-count="78">0</span><span class="delta up">% студентов</span></div>
</div>
<div class="grid g-main" style="margin-top:18px">
 <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><h3>Уведомления по дням</h3><div class="r legend"><span><i style="background:var(--brand)"></i>Отправлено</span><span><i style="background:var(--danger)"></i>Не доставлено</span></div></div>
  ${lineChart({series:[{v:[640,710,580,820,900,420,310,870,950,880,1010,980,460,350],c:'var(--brand)'},{v:[22,19,15,24,18,9,6,20,17,21,19,16,8,7],c:'var(--danger)',area:false}],labels:days,min:0,max:1100,h:240})}
 </div>
 <div class="card"><div class="card-h"><div class="ic">${ic('layers')}</div><h3>По типам событий</h3></div>${hbars([['Расписание',4820,'var(--notice)'],['Пропуски',3610,'var(--warn)'],['Оценки',2240,'var(--brand-2)'],['Тренды',980,'var(--danger)'],['iLearn',830,'var(--gold)']])}</div>
</div>
<div class="grid g2" style="margin-top:18px">
 <div class="card"><div class="card-h"><div class="ic">${ic('users')}</div><h3>Студенты в зоне риска по курсам</h3></div>${colChart({vals:[92,61,38,23],labels:['1 курс','2 курс','3 курс','4 курс'],colors:['var(--danger)','var(--warn)','var(--brand-2)','var(--brand)']})}</div>
 <div class="card"><div class="card-h"><div class="ic">${ic('send')}</div><h3>Доставляемость по каналам</h3></div>${hbars([['Telegram',99.1,'var(--ok)','99,1'],['Портал (API)',98.7,'var(--ok)','98,7'],['Email',96.4,'var(--ok)','96,4'],['Web Push',92.8,'var(--warn)','92,8']],'%',100)}</div>
</div>`;};

PAGES.a_models=()=>`
<div class="sec-title"><div><h2>Модели iLearn</h2><p>Версии ML-моделей: метрики на отложенной выборке, активация версии · прогноз пересчитывается ежедневно</p></div></div>
<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Версия</th><th>Алгоритм</th><th>Данные</th><th>ROC-AUC</th><th>F1</th><th>Recall</th><th>Статус</th><th></th></tr></thead><tbody id="mbody"></tbody></table></div></div>
<div class="grid g2" style="margin-top:18px">
 <div class="card"><div class="card-h"><div class="ic">${ic('chart')}</div><h3>Сравнение ROC-AUC</h3></div><div id="aucBars"></div></div>
 <div class="card"><div class="card-h"><div class="ic ok">${ic('shield')}</div><div><h3>Аудит справедливости</h3><div class="sub">Recall по группам (разница должна быть < 5 п.п.)</div></div></div>${hbars([['Грант',81,'var(--brand)','0,81'],['Платная основа',80,'var(--brand)','0,80'],['Казахское отд.',82,'var(--brand-2)','0,82'],['Русское отд.',79,'var(--brand-2)','0,79'],['1 курс',78,'var(--gold)','0,78']],'',100)}</div>
</div>
<p class="muted" style="font-size:12px;margin-top:14px">Метрики — иллюстративные, для демонстрации интерфейса.</p>`;
function drawModels(){
  $('#mbody').innerHTML=MODELS.map((m,i)=>`<tr><td><b>${m.v}</b><div class="muted" style="font-size:12px">${m.date}</div></td><td>${m.algo}</td><td style="max-width:220px">${m.data}</td><td class="tabnum"><b>${fmt(m.auc)}</b></td><td class="tabnum">${fmt(m.f1)}</td><td class="tabnum">${fmt(m.rec)}</td><td>${m.st==='active'?'<span class="tag t-ok">● Активна</span>':m.st==='candidate'?'<span class="tag t-notice">Кандидат</span>':'<span class="tag t-muted">Архив</span>'}</td><td>${m.st!=='active'?`<button class="btn sm ghost" data-i="${i}">Активировать</button>`:''}</td></tr>`).join('');
  $$('#mbody button').forEach(b=>b.onclick=()=>{MODELS.forEach(m=>{if(m.st==='active')m.st='archived'});MODELS[+b.dataset.i].st='active';drawModels();toast({k:'ai',title:'Активирована версия '+MODELS[+b.dataset.i].v,body:'Прогнозы будут пересчитаны в 06:00.',ch:['Журнал аудита']})});
  $('#aucBars').innerHTML=hbars(MODELS.map(m=>[m.v,m.auc*100,m.st==='active'?'var(--ok)':'var(--brand-2)',fmt(m.auc)]),'',100);animateIn($('#aucBars'));
}
AFTER.a_models=drawModels;

PAGES.a_logs=()=>`
<div class="sec-title"><div><h2>Журналы</h2><p>Синхронизация, доставка, аудит действий</p></div><div class="r"><div class="tabs" id="logTabs"><button class="on">Синхронизация</button><button>Доставка</button><button>Аудит</button></div></div></div>
<div class="grid g-main">
 <div class="log" id="log"></div>
 <div class="card"><div class="card-h"><div class="ic">${ic('db')}</div><h3>Источники данных</h3></div>
 ${[['Посещаемость','каждые 15 мин','ok'],['Расписание','каждые 15 мин','ok'],['Оценки','раз в сутки','ok'],['GPA','раз в сутки','ok'],['Студенты и группы','раз в сутки','ok'],['Родители','нет в источнике','warn']].map(s=>`<div class="row"><span class="pulse" style="${s[2]==='warn'?'background:var(--warn);animation:none':''}"></span><div class="tx"><b>${s[0]}</b><small>${s[1]}</small></div><span class="tag t-${s[2]}">${s[2]==='ok'?'OK':'по приглашению'}</span></div>`).join('')}
 </div>
</div>`;
let logTimer;
AFTER.a_logs=()=>{
  const L0=[['bc','sync','attendance: получено 1 284 записи, 37 новых Н/б'],['okc','rules','порог 25%: 3 события · порог 50%: 1 событие'],['bc','sync','schedule: снимок #4812, изменений: 2'],['okc','deliver','telegram: 41 отправлено, 41 доставлено'],['wc','deliver','web push: 2 подписки устарели, переключено на email'],['bc','ml','iLearn 1.1-kaznu: пересчёт 2 310 прогнозов за 48 c'],['okc','dedupe','пропущено 6 повторных событий'],['ec','sync','grades: таймаут API ДИТ (попытка 1/3)'],['okc','sync','grades: повтор успешен, 212 новых оценок'],['bc','quiet','12 несрочных уведомлений отложено до 08:00']];
  const el=$('#log');let i=0;
  const add=()=>{const [c,src,msg]=L0[i%L0.length];const tm=new Date().toLocaleTimeString('ru-RU');el.insertAdjacentHTML('beforeend',`<div class="ln"><span class="tm">[${tm}]</span> <span class="${c}">${src.padEnd(8,' ').replace(/ /g,'&nbsp;')}</span> ${msg}</div>`);el.scrollTop=el.scrollHeight;i++};
  for(let k=0;k<7;k++)add();
  clearInterval(logTimer);logTimer=setInterval(()=>{if(S.page!=='a_logs'){clearInterval(logTimer);return}add()},1800);
  $$('#logTabs button').forEach(b=>b.onclick=()=>$$('#logTabs button').forEach(x=>x.classList.toggle('on',x===b)));
};

/* ================= LIVE EVENTS ================= */
const LIVE=[
 {k:'grade',pr:'low',title:'Новая оценка · Машинное обучение',body:'Лабораторная №4 — 92 из 100.',ch:['Web Push']},
 {k:'sched',pr:'high',title:'Перенос · Высоконагруженные системы',body:'Практика сегодня перенесена.',diff:['15:00, Ауд. 312','16:00, Ауд. 204'],ch:['Telegram','Web Push']},
 {k:'nb',pr:'mid',title:'Новая Н/б · Қазақ тілі',body:'10 из 35 — порог 25% уже пройден.',ch:['Telegram']},
 {k:'grade',pr:'low',title:'Новая оценка · Базы данных',body:'СРС №3 — 88 из 100.',ch:['Web Push']},
 {k:'sched',pr:'mid',title:'Замена преподавателя · Веб-разработка',body:'Занятие 07.10 проведёт другой преподаватель.',diff:['А. Мухамедиев','Д. Сапарова'],ch:['Telegram']},
];
let liveI=0;
function fireEvent(){
  const n={...LIVE[liveI++%LIVE.length],id:Date.now(),tm:'только что',unread:true};
  FEED.unshift(n);S.unread++;toast(n);
  renderShell();const b=$('#bellBtn');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');
  ['#bigFeed','#miniFeed'].forEach(sel=>{const f=$(sel);if(f){f.insertAdjacentHTML('afterbegin',feedItem(n,true));if(sel==='#miniFeed'&&f.children.length>4)f.lastElementChild.remove()}});
  $('#syncTime').textContent=t('now');
}
setInterval(()=>{if(S.live&&!document.hidden&&['student'].includes(S.role))fireEvent()},15000);
let syncSec=0;setInterval(()=>{syncSec+=5;$('#syncTime').textContent=syncSec<60?`${syncSec} сек назад`:`${Math.floor(syncSec/60)} мин назад`;if(syncSec>=900)syncSec=0},5000);

/* ================= EVENTS ================= */
document.addEventListener('click',e=>{
  const r=e.target.closest('[data-r]');if(r){const R=ROLES.find(x=>x.id===r.dataset.r);go(S.page==='overview'?'overview':R.pages[1][0],R.id);return}
  const p=e.target.closest('#nav [data-p]');if(p){go(p.dataset.p);return}
  const s=e.target.closest('[data-s]');if(s){S.skin=s.dataset.s;document.documentElement.dataset.skin=S.skin;try{localStorage.setItem('uai-skin',S.skin)}catch(_){}renderShell();$('#skinPop').classList.add('open');return}
  const l=e.target.closest('[data-l]');if(l){S.lang=l.dataset.l;document.documentElement.lang=S.lang;$$('#lang button').forEach(b=>b.classList.toggle('on',b===l));renderShell();return}
  if(e.target.closest('#skinBtn')){$('#skinPop').classList.toggle('open');$('#bellPop').classList.remove('open');return}
  if(e.target.closest('#bellBtn')){$('#bellPop').classList.toggle('open');$('#skinPop').classList.remove('open');return}
  if(e.target.closest('#readAll')){FEED.forEach(n=>n.unread=false);S.unread=0;renderShell();$$('.fi.unread').forEach(x=>x.classList.remove('unread'));return}
  const tg=e.target.closest('.toggle');if(tg&&!tg.dataset.id){tg.classList.toggle('on');return}
  if(!e.target.closest('.pop')){$$('.pop').forEach(x=>x.classList.remove('open'))}
  if(e.target.id==='modal')closeModal();
  if(e.target.closest('#burger')){$('#side').classList.add('open');$('#scrim').classList.add('open')}
  if(e.target.id==='scrim'){$('#side').classList.remove('open');$('#scrim').classList.remove('open')}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();$$('.pop').forEach(x=>x.classList.remove('open'))}});
$('#q').addEventListener('input',()=>{if(S.page!=='c_dash'&&$('#q').value.length>1){go('c_dash','curator')}if($('#gbody'))drawGroup()});

/* ================= INIT ================= */
$('#burger').innerHTML=ic('menu');$('#skinBtn').innerHTML=ic('palette');$('#searchIc').innerHTML=ic('search',16);
try{const sk=localStorage.getItem('uai-skin');if(sk&&SKINS.some(s=>s.id===sk)){S.skin=sk;document.documentElement.dataset.skin=sk}}catch(_){}
go('overview');
setTimeout(()=>toast({k:'sys',title:'Добро пожаловать в Univer AI',body:'Смените роль слева, а скин — кнопкой с палитрой вверху.',ch:['Демо']}),900);
