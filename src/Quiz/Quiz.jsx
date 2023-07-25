import './Quiz.css'
import quizbloby from '../assets/quizbloby.svg'
import quizblobb from '../assets/quizblobb.svg'

export default function Quiz(props) {
    const data = props.quizData

    function pushToRandomIndex(element, array) {
        let randomIndex = Math.floor(Math.random() * (array.length + 1));
        array.splice(randomIndex, 0, element);
        return array;
    }

    function decodeHTMLEntities(text) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    } //This is cause some questions/ans are like this: "In what year was the game &quot;FTL: Faster Than Light&quot; released?"

    let quizHTML = data? 
    data.map((question, questionIndex) => {
        const wrongAnswersArray = question.incorrect_answers.slice(0, 3).map(answer => decodeHTMLEntities(answer))
        const correctAnswer = decodeHTMLEntities(question.correct_answer)
        const answers = pushToRandomIndex(correctAnswer, wrongAnswersArray)
        let answersHTML = answers.map((answer, answerIndex) => (
        <li key={answerIndex}
            onClick={props.handleClick}
            >
            {answer}
        </li>))
        
        return (
            <div className='q' key={questionIndex}>
                <h1 className='question'>{decodeHTMLEntities(question.question)}</h1>
                <ul className='options'>
                    {answersHTML}
                </ul>
                <hr></hr>
            </div>
        )
    }):
    null
    //this is because when it will be first rendered there will be no data (since the button wasnt clicked yet to fetch)
    ///
    return (
        <div className="box">
            <div className="quiz">
                {quizHTML}
                <img src={quizbloby} alt="blob" className="quiz_yellow" />
                <img src={quizblobb} alt="blob" className="quiz_blue" />
            </div>
        </div>
    )
}

//Pull back to the last version
// But save this:
// function clickfunc(e){
  //   e.preventDefault()
  //   console.log(e.target)
  // }
  // handleClick={clickfunc}