import React from "react";
import {SectionScore, TitleScore, ScoreBoard, TextScore, ButtonScore} from "../styles/ScoreScreenStyles";
const ScoreScreen = ( { Score }) => {
    return (
        <SectionScore>
            <TitleScore>
                Viajero has terminado tu recorrido
                        </TitleScore>
            <ScoreBoard>
                <TextScore>
                    Tu Score fue de {Score} / 10 preguntas
                </TextScore>
                <ButtonScore to="/">
                    Jugar de nuevo
                </ButtonScore>
            </ScoreBoard>
        </SectionScore>
    )
}
export default ScoreScreen;