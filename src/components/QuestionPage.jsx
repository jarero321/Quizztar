import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import WhiteShadow from "../img/WhiteShadow.svg";
import { ContainerQuestion, ContentQuestion, Options, ContentAnswer, PlanetIMG, TitlePlanet, QuestionContain, Planet, Shadow} from "../styles/QuestionStyles"
import { IntroAnimation } from "../styles/Animations";
const QuestionPage = ( { currentQuestion , handleClick }) => {
    const { ThemePlanet, setThemePlanet } = useContext(ThemeContext);
    const { DataQuestions, Planets } = useContext(DataContext);
    return (
        <ContainerQuestion>
                <ContentQuestion>
                    <TitlePlanet
                    Theme={ThemePlanet}>
                        {
                            DataQuestions[currentQuestion].planet
                        }
                    </TitlePlanet>
                    <QuestionContain Theme={ThemePlanet}>
                        {
                            DataQuestions[currentQuestion].questionText
                        }
                    </QuestionContain>
                    <PlanetIMG>
                        <Planet src={Planets[currentQuestion]} />
                        <Shadow src={WhiteShadow} />
                    </PlanetIMG>
                </ContentQuestion>
                <Options Theme={ThemePlanet}>
                    {
                        DataQuestions[currentQuestion].answerOptions.map(item => (
                            <ContentAnswer Theme={ThemePlanet}
                            onClick={() => handleClick(item.isCorrect)} 
                            >
                            {item.answerText}
                            </ContentAnswer>
                        ))
                    }
                </Options>
            </ContainerQuestion>
    )
}
export default QuestionPage;