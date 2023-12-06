import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
    width:100vw;
    height: 100vh;
    background: rgb(0,0,0,0.7);
    position: fixed;
    z-index: 90;
`

export function Modal(props){
    const navigate = useNavigate();
    const onClick=()=>{
        navigate("/movies");
    };
    return <ModalWrapper onClick={onClick}>
        <div>{props.title}</div>
        <div>{props.average}</div>
        <div>{props.overview}</div>
    </ModalWrapper>
}