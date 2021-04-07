import React from "react";
import {SectionLanding, ContainerSection, PlanetIMG, WhiteShadowimg, Planet, ContainerText, Title, ButtonStart,LinkStart} from "../styles/LandingPageStyles";
import Sun from "../img/Sun.svg";
import WhiteShadow from "../img/WhiteShadow.svg";
// import animations
import {containerLanding, TitleAnimation, PlanetAnimation, WhiteShadowAnimation, ButtonAnimation} from "../styles/Animations"
const LandingPage = () => {
    return (
        <SectionLanding
        variants={containerLanding}
        initial="hidden"
        animate="show">
            <ContainerSection>
                <PlanetIMG>
                    <Planet
                    variants={PlanetAnimation}
                    initial="hidden"
                    animate="show" src={Sun}/>
                    <WhiteShadowimg
                    variants={WhiteShadowAnimation}
                    initial="hidden"
                    animate="show" src={WhiteShadow} />
                </PlanetIMG>
                <ContainerText>
                    <Title
                    variants={TitleAnimation}
                    initial="hidden"
                    animate="show"
                    >
                        Quizztar
                    </Title>
                    <ButtonStart
                    variants={ButtonAnimation}
                    initial = "hidden"
                    animate = "show"
                    >
                        <LinkStart to ="/Quizz">
                            Start
                        </LinkStart>
                    </ButtonStart>
                </ContainerText>
            </ContainerSection>
        </SectionLanding>
        )
}
export default LandingPage;