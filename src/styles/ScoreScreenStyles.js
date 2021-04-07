import styled from "styled-components";
import {Colors} from "../styles/Colors";
import  { Link } from "react-router-dom"
export const SectionScore = styled.div`
    width:80%;
    height:80%;
    padding-top:10%;
    padding-left:10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const TitleScore = styled.h2`
    color:${Colors.main_color};
    width:100%;
    font-size:20px;
    @media (min-width: 768px){
        font-size:50px;
    }
`;
export const ScoreBoard = styled.div`
    margin-top:30%;
    width:100%;
    height:30%;
    border: 3px solid ${Colors.main_color};
    border-radius:20px;
    @media (min-width:1200px){
        height:40%;
        width:60%;
        margin-top:10%;
    }
`;
export const TextScore = styled.p`
    margin-top:10%;
    margin-left:15%;
    margin-bottom:5%;
    color:${Colors.main_color};
    @media (min-width: 768px){
        font-size:20px;
    }
    @media (min-width:1200px){
        margin-top:3%;
    }
`;
export const ButtonScore = styled(Link)`
    text-decoration:none;
    width:80%;
    height:20%;
    background-color: ${Colors.main_color};
    border: 1px solid ${Colors.main_color};
    margin: 0 auto;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (min-width: 768px){
        font-size:20px;
    }
    @media (min-width:1200px){
        height:30%;
        width:50%;   
    }
`;