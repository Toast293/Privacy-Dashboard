
//----- Charts -----//

// Bar Chart //

var BarChart_options = {
    series: [{
        data: [6, 28, 22, 14, 15, 15, 17]
    }],
    chart: {
        type: 'bar',
        height: 400,
        toolbar: {
            show: false
        }
    },
    colors: [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 0,
            borderRadiusApplication: 'end',
            horizontal: false,
            columnWidth: '20%',
        }
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Brevile+', 'Amazon Alexa', 'Google home', 'TP link', 'LG Electronics', 'Ring', 'Nest Labs'],
        labels: {
            style: {
                fontWeight: 'bold',
                fontSize: '25px' // Increased font size
            }
        }
    },
    yaxis: {
        title: {
            text: "Data Types Collected",
            style: {
                fontSize: '25px', // Increased font size,
                 offsetX: 0,
                 offsetY: 50
            }
        }
    }
};

 var barchart = new ApexCharts(document.querySelector("#bar-chart"), BarChart_options);
barchart.render();



// Quiz //

const quizData = [
    {
        question: "Which smart device is most likely to collect voice recordings?",
        a: "Smart TV",
        b: "Smart Speaker",
        c: "Smart Doorbell",
        d: "Smart Airfryer",
        correct: "b",
    },
    {
        question: "How can you reduce privacy risks with smart devices?",
        a: "Regulary update the device firmware",
        b: "Always keep the microphone on",
        c: "Keep all devices connected 24/7",
        d: "Share your login details with friends",
        correct: "a",
    },
    {
        question: "What should you deactivate on smart TVs to prevent data tracking",
        a: "Screen bightness",
        b: "Voice assistant and ad tracking",
        c: "Remote control batteries",
        d: "HDMI ports",
        correct: "b",
    },
    {
        question: "Which of these is a potential privacy risk of smart cameras",
        a: "They can overheat",
        b: "They cannot connect to the internet",
        c: "They only store footage for 24 hours",
        d: "Hackers can access camera footage",
        correct: "d",
    },
    {
        question: "How can you protect your smart device from unauthorised users",
        a: "Disable all security updates",
        b: "Always keep Bluetooth on",
        c: "Use strong passwords and multi-factor authentication",
        d: "Use 12345 as your password",
        correct: "c",
    },
    {
        question: "What should you check before purhasing a smart device",
        a: "The device's price only",
        b: "Whether it comes in multiple different colours",
        c: "Whether it has a charger",
        d: "The privacy policy and whether it allows collection of data",
        correct: "d",
    },
    {
        question: "What is one action that smartwatches can breach privacy?",
        a: "By tracking location and sharing it with third parties",
        b: "By not collection any personal data",
        c: "By only tracking steps",
        d: "By reducing battery life over time",
        correct: "a",
    },
    {
        question: "Which is the biggest privacy challenge of smart speakers?",
        a: "They do not connect to the internet",
        b: "They can accidentally record private conversations",
        c: "They only work with on user",
        d: "They increase bills in terms of electricity",
        correct: "b",
    },
    {
        question: "Why is it important to read a smart device's privacy policy?",
        a: "To compare with other brands",
        b: "To see if it offers free accessories",
        c: "To understand what data is collection and how it is utilised",
        d: "To see what features it includes",
        correct: "c",
    },
    {
        question: "Why should you regulary update smart devices",
        a: "Updates are not neccessary",
        b: "Updates slows down the smart device",
        c: "Updates only improves the device's design",
        d: "Updates fixes security vulnerabilities that unauthorised users may exploit",
        correct: "b",
    }

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz ()

function loadQuiz () {

    deselectAnswers ()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
} 
    
function getSelected () {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz ()
        } else {
            quiz.innerHTML = `
            <h2> Your answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

