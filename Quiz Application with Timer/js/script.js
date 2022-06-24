const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0);
    queCounter(1); 
    startTimer(15);
    startTimerLine(0);
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++;
        showQuetions(que_count); 
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine); 
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");


    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length;
}
