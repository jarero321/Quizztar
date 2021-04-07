import styled from "styled-components";
import {Colors} from "../styles/Colors";
import {motion} from "framer-motion";

export const ContainerQuestion = styled(motion.div)`
    width:90%;
    height:100%;
    margin:0 auto;
`;
export const ContentQuestion = styled.div`
    width:100%;
    height:60%;
`;
export const TitlePlanet = styled.h2`
    color: ${props => props.Theme && Colors[props.Theme] };
    font-size:30px;
    height:10%;
    padding-top:5%;
    @media (min-width:768px){
        font-size:40px;
    }
`;
export const QuestionContain = styled.p`
    color: ${props => props.Theme && Colors[props.Theme] };
    font-size:20px;
    height:10%;
    margin-top:5%;
    @media (min-width:768px){
        font-size:30px;
    }
`;
export const PlanetIMG = styled.div`
    width:100%;
    height:100%;
    @media (min-width:768px){
        width:90%;
        height:90%;
    }
`;
export const Planet = styled.img`
    width:70%;
    height:75%;
    margin-left:15%;
    margin-top:7%;
    z-index:50;
    @media (min-width:768px){
        width:80%;
    }
    @media (min-width:1200px){
        margin-top:2.5%;
    }
`;
export const Shadow = styled.img`
    width:85%;
    height:100%;
    position:absolute;
    top:-10%;
    left:7.5%;
    z-index:-10;
    @media (min-width:1200px){
        width:30%;
        height:60%;
        left:34.5%;
        top:20%;
    }
`;

export const Options = styled.div`
    outline:none;
    &:focus { 
    outline:none;
    width:100%;
    height:40%;
    text-align:center;
    margin-top:10%;
    cursor: pointer;
    @media (min-width:768px){
        height:35%;
    }
    @media (min-width:1200px){
        width:90%;
        height:35%;
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        position: fixed;
        top:45%;
    }

`;
export const ContentAnswer = styled.div`
    outline:none;
    &:focus { 
    outline:none;
    width:100%;
    height:15%;
    border:1px solid ${props => props.Theme && Colors[props.Theme]};
    margin-top:5%;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: ${props => props.Theme && Colors[props.Theme] };;
    &:hover{
        background-color:${props => props.Theme && Colors[props.Theme] };
        color:black;
    }
    @media (min-width:768px){
        font-size:25px;
        border:3px solid ${props => props.Theme && Colors[props.Theme]};
    }
    @media (min-width:1200px){
        margin: 0;
        width:80%;
        height:50%;
        margin-top:25%;
    }
`;
