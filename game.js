const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: "Dislocatio ad axin кај долна вилица:",
        choice1: "- најчест тип, антагонистичка мускулатура, во премоларна или моларна регија и може да доведе до лажна анкилоза",
        choice2: "- фрактурите со овој тип дислокација често се отворени интраорално и крепитацијата е чест придружен симптом изразен деформитет во вид на лажна прогенија или микрогнатија ",
        choice3: "- силни интраорални крварења, отворена фрактура и прекин на a.alveolaris inferior со хиперсаливација",
        choice4: "- изразен деформитет во вид на лажна прогенија или микрогнатија ",
        choice5: "- ниту еден ",
        answer: 1,
    },
    {
        question: "Dislocatio ad longitudinem кај долна вилица:",
        choice1: "- најчест тип, антагонистичка мускулатура, во премоларна или моларна регија и може да доведе до лажна анкилоза",
        choice2: "- фрактурите со овој тип дислокација често се отворени интраорално и крепитацијата е чест придружен симптом ",
        choice3: "- изразен деформитет во вид на лажна прогенија или микрогнатија, причина за постоење два вида дислокации",
        choice4: "- силни интраорални крварења, отворена фрактура и прекин на a.alveolaris inferior со хиперсаливација",
        choice5: "- ниту еден ",
        answer: 3,
    },
    {
        question: "Fractura malle sanata ossis zygomatici настанува како резултат на:",
        choice1: "- ненавремено дијагностицирана фрактура и примена на неадекватни РТГ методи",
        choice2: "- одложен третман на зигома > 10 дена",
        choice3: "- погрешно сраснување на фрагменти",
        choice4: "- сите наведени",
        choice5: "- ниту еден ",
        answer: 4,
    },
    {
        question: "Guerin фрактура на максила е:",
        choice1: "- Le Fort 1",
        choice2: "- Le Fort 2",
        choice3: "- Le Fort 3",
        choice4: "- сите наведени",
        choice5: "- ниту еден ",
        answer: 1,
    },
    {
        question: "Rowe и Hayton-Williams хируршки клешти се применува кај:",
        choice1: "- мандибуларни кондиларни фрактури",
        choice2: "- фрактура на симфизата",
        choice3: "- максиларни фрактури",
        choice4: "- фрактури на зигоматичен лак ",
        choice5: "- сите наведени",
        answer: 3,
    },
    {
        question: "Sjogren SY се јавува во неколку облици:",
        choice1: "- перманентен",
        choice2: "- примарен и секундарен ",
        choice3: "- кератоконјуктивитис sicca",
        choice4: "- симптоматски",
        choice5: "- сите се неточни",
        answer: 1,
    },
    {
        question: "Анатомската положба на зигоматичната коска овозможува артикулација со кои од наведените коски:",
        choice1: "- фронтална коска",
        choice2: "- сфеноидална коска",
        choice3: "- темпорална коска",
        choice4: "- максиларни коски",
        choice5: "- сите наведени",
        answer: 5,
    },
    {
        question: "Артро-мио-оклузопатија или Костенов синдром се однесува на:",
        choice1: "- ирадирачка болка",
        choice2: "- девијација на максила",
        choice3: "- девијација на носен септум",
        choice4: "- дисфункција на тмз",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "Во групата на бактериостатици спаѓаат:",
        choice1: "- сулфонамиди ",
        choice2: "- цефалоспорини",
        choice3: "- аминогликозиди",
        choice4: "- рифампицин",
        choice5: "- полимиксини",
        answer: 1,
    },
    {
        question: "Во повреди на артикуларниот апарат во лицево-виличната регија спаѓаат:",
        choice1: "- ефузија и меко-ткивни повреди",
        choice2: "- дислокација на кондилот",
        choice3: "- фрактури, дислокации и девијации",
        choice4: "- сите наведени",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "Во првата генерација на цефалоспорни се вбројуваат:",
        choice1: "- цефалексин",
        choice2: "- цефепим",
        choice3: "- цефепирим",
        choice4: "- цефтобипрол",
        choice5: "- цефтриаксон",
        answer: 1,
    },
    {
        question: "Во цистични промени на плунковни жлезди спаѓаат:мукоцела",
        choice1: "- ранула",
        choice2: "- сијалоцела",
        choice3: "- мукоцела ",
        choice4: "- сите наведени ",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: " Временскиот тајминг за третман на максиларните фрактури кои се третираат со максило-мандибуларна фиксација со жица, изнесува минимум:",
        choice1: "- 2-4 недели",
        choice2: "- 4-6 недели ",
        choice3: "- 7-10 дена",
        choice4: "- 6-8 недели",
        choice5: "- сите се неточни",
        answer: 2,
    },
    {
        question: "Глазгов кома скала се вреднува од:",
        choice1: "- не постои нумеричка вредност, туку само клиничко искуство ",
        choice2: "- 6-12 бодовна скал",
        choice3: "- 3 до 15 скор",
        choice4: "- 1-10",
        choice5: "- ниту една",
        answer: 3,
    },
    {
        question: "Долната вилица се снабдува со крв преку:",
        choice1: "- интерна максиларна артерија",
        choice2: "- инфериорна алвеоларна артерија",
        choice3: "- ментална артерија",
        choice4: "- сите наведени",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "За изолирани (depressed) фрактури на зигоматичниот лак се применува:",
        choice1: "- Dingman-ов пристап ",
        choice2: "- Ivy фиксација",
        choice3: "- Gillies-ов пристап и елеватор",
        choice4: "- Sauer",
        choice5: "- сите наведени",
        answer: 3,
    },
    {
        question: "Избор за пеницилински алергични пациенти се следниве лекови:",
        choice1: "- Clindamycin",
        choice2: "- Moxioxacin",
        choice3: "- Metronidazole",
        choice4: "- сите се точни",
        choice5: "- ниту еден",
        answer: 3,
    },
    {
        question: "Имунолошко пореметување кое се манифестира на плунковните жлезди е:",
        choice1: "- сијалолитијаза",
        choice2: "- паротидис епидемика",
        choice3: "- MUMPS",
        choice4: "- примарен Sjogren SY",
        choice5: "- сите се неточни",
        answer: 4,
    },
    {
        question: "Инцизија за дренажа на дентален абсцес треба доволно да се изведе за да ја опфати само:",
        choice1: "- поткожното ткиво со анатомската содржина",
        choice2: "- се додека не се наиде на крвен сад ",
        choice3: "- сите се точни",
        choice4: "- ниту еден не е точен",
        choice5: "- мукозата и субмукозата",
        answer: 5,
    },
    {
        question: "Кај пациенти алергични на пеницилин се администрира:",
        choice1: "- clarithromycin и clindamycin",
        choice2: "- пеницилин",
        choice3: "- се лекува исклучиво хируршки без антибиотик",
        choice4: "- сите се точни",
        choice5: "- ниту еден",
        answer: 1,
    },
    {
        question: "Кои се причини за попречување на создавање коскен калус:",
        choice1: "- трауматска хиперемија",
        choice2: "- инфективна хиперемија",
        choice3: "- корозивна хиперемија",
        choice4: "- сите се точни",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "Кои функционални анатомски алтерации ги среќаваме кај кондиларни фрактури на тмз:",
        choice1: "- ипсилатерален предвремен контакт и неможност за максимална интеркуспидација",
        choice2: "- ипсилатерална латерогнатија",
        choice3: "- ипсилатерална девијација",
        choice4: "- лимитирано отворање на уста",
        choice5: "- сите наведени",
        answer: 5,
    },
    {
        question: "Кој од наведените материјали и методи се применуваат кај Ле Форт фрактури на максила:",
        choice1: "- биоресорптивни плочки",
        choice2: "- биоресорптивни и титаниумски мини плочки",
        choice3: "- интраоперативна КТМ и 3Д КТ реконструкција",
        choice4: "- сите наведени",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: " Кој од наведените техники се користат за корекција на лингвален френулум во претпротетска хирургија:",
        choice1: "- V-Y инцизија",
        choice2: "- Z-пластик",
        choice3: "- ласер френектомија",
        choice4: "- сите се точни",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: " Кој од следниве антибиотици се во групата на беталактамски?",
        choice1: "- линкозамини",
        choice2: "- хлорамфеникол",
        choice3: "- пеницилини ",
        choice4: "- аминогликозиди",
        choice5: "- сите одговори се неточни",
        answer: 2,
    },
    {
        question: " Кој од следниве техники се применуваат кај пациент со расцеп:",
        choice1: "- Schuchardt",
        choice2: "- Caldwell-Luc",
        choice3: "- двојна Z-пластика, von Langenbeck",
        choice4: "- Dal Pont",
        choice5: "- Obwegeser, Gilles",
        answer: 3,
    },
    {
        question: "Која е најчесто применувана доза во терапијата со депопеницилин?",
        choice1: "- 80.000 до 160.000 I IE",
        choice2: "- 8.000 до 16.000 I IE",
        choice3: "- 180.000 до 1.600.000 I IE",
        choice4: "- 800.000 до 1.600.000 I IE",
        choice5: "- сите одговори се неточни",
        answer: 4,
    },
    {
        question: "Кондиларните фрактури на долна вилица можат да бидат:",
        choice1: "- унилатерални",
        choice2: "- билатерални",
        choice3: "- интракапсуларни",
        choice4: "- екстракапсуларни",
        choice5: "- сите наведени",
        answer: 5,
    },
    {
        question: "Контраиндикација за сијалографија е:",
        choice1: "- хронични воспаленија",
        choice2: "- сијалоаденоза",
        choice3: "- акутен сијалоаденитис",
        choice4: "- цисти ",
        choice5: "- тумори на плунковните жлезди ",
        answer: 3,
    },
    {
        question: "Максиларниот синус природно се дренира преку:",
        choice1: "- среден носен ходник hiatus seminularis",
        choice2: "- не се дренира",
        choice3: "- ороантрална фистула",
        choice4: "- concha nasalis superior",
        choice5: "- сите се неточни",
        answer: 1,
    },
    {
        question: "Модифицирана радикална вратна дисекција тип 1 подразбира презервација на:",
        choice1: "- Аксесорниот спинален нерв",
        choice2: "- Нервус вагус и вена југуларис инетрна",
        choice3: "- Аксесорниот спинален нерви Вена југулрис интерна ",
        choice4: "- Стерноклеидомастоидниот мускул и вена југуларис интерна",
        choice5: "- мм.стреноклеидомастоидеус",
        answer: 1,
    },
    {
        question: " Најчест бенигнен тумор на саливарните жлезди е:",
        choice1: "- плеоморфен аденом",
        choice2: "- амелобластом ",
        choice3: "- одонтом",
        choice4: "- цервикофацијална лимфаденопатија",
        choice5: "- ниту еден",
        answer: 1,
    },
    {
        question: "Најчести видови на инфекции во максилофацијалната регија се:",
        choice1: "- целулитис, абсцес и флегмона",
        choice2: "- лимфаденитис",
        choice3: "- остеомиелитис",
        choice4: "- сите наведени",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "Одонтогените тумори се класифицираат во:",
        choice1: "- епителни",
        choice2: "- мезенхимални",
        choice3: "- мешани",
        choice4: "- сите се точни",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "Одонтогените цисти можат да бидат:",
        choice1: "- примарни и секундарни",
        choice2: "- инфламаторни и развојни",
        choice3: "- хомогени и алогени",
        choice4: "- сите се точни",
        choice5: "- ниту еден",
        answer: 1,
    },
    {
        question: "Одонтомот на РТГ снимка тешко можеме да го диференцираме од :",
        choice1: "- Одонтогена циста ",
        choice2: "- Амелобластом ",
        choice3: "- Остеом",
        choice4: "- Анеуризмална коскена циста",
        choice5: "- херубизам",
        answer: 2,
    },
    {
        question: "Остеомиелитис кај возрасни најчесто се јавува во :",
        choice1: "- максила",
        choice2: "- мандибула",
        choice3: "- зигоматична коска",
        choice4: "- носни коски",
        choice5: "- ТМЗ",
        answer: 1,
    },
    {
        question: "Остеомиелитис може да биде:",
        choice1: "- акутен и хроничен",
        choice2: "- прогресивен и хематоген",
        choice3: "- рекурентен и мултифокален",
        choice4: "- склерозирачки и супуративен",
        choice5: "- сите наведени",
        answer: 5,
    },
    {
        question: "Повреда на а.temporalis supercialis може да настане при:",
        choice1: "- изведување инцизија и примена на Dingman-ов метод",
        choice2: "- изведување инцизија и примена на Kirschener жица",
        choice3: "- изведување инцизија и примена на Pin фиксација",
        choice4: "- изведување инцизија и примена на Gillies-ов метод",
        choice5: "- ниту еден",
        answer: 4,
    },
    {
        question: "Првиот оперативен третман кај расцеп на непце се применува:",
        choice1: "- пред 9 месеци",
        choice2: "- 2-5 години ",
        choice3: "- 9-18 месеци",
        choice4: "- не се третира се до 18 години",
        choice5: "- сите се неточни",
        answer: 3,
    },
    {
        question: " Развојната фаза на дентогена инфекција во прв стадиум на инокулација (едем) трае:",
        choice1: "- 5 дена ",
        choice2: "- 3-7 дена ",
        choice3: "- 0-3 дена",
        choice4: "- не постои фаза на инокулација",
        choice5: "- сите се неточни",
        answer: 2,
    },
    {
        question: " 51. Расцеп на непце претставува:",
        choice1: "- Cheilognathopalatoshisis",
        choice2: "- Uvuloshisis",
        choice3: "- Хеилопластика",
        choice4: "- Палатопластика",
        choice5: "- Palatoshisis",
        answer: 5,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 40

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    
    }

        

        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question


        choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + number]

        })

        availableQuestions.splice(questionsIndex, 1)

        acceptingAnswers = true
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()