import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import { SectionQuizz} from "../styles/QuizzPageStyles";
import ScoreScreen from "../components/ScoreScreen";
import QuestionPage from "../components/QuestionPage";
const QuizzPage = () => {
    const { ThemePlanet, setThemePlanet } = useContext(ThemeContext);
    const { DataQuestions, Planets } = useContext(DataContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [Score, setScore] = useState(0);
    const [Finish, setFinish] = useState(false);
    const handleClick = (iscorrect) => {
        (iscorrect) && setScore(Score + 1 );
        const QuestionCount = currentQuestion + 1;
        (QuestionCount < Planets.length) ? 
            setCurrentQuestion(QuestionCount) :
            setFinish(true);

    }
    useEffect(() => {
        setThemePlanet(DataQuestions[currentQuestion].planet)
    }, [currentQuestion])
    return (
        <SectionQuizz>
            {
                Finish ? (
                    <ScoreScreen Score= { Score }/>
                ) :
                (
                <QuestionPage handleClick={ handleClick }
                currentQuestion = { currentQuestion }/>
                )
            }
            
        </SectionQuizz>
    )
}
export default QuizzPage;