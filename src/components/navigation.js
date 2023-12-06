import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;//왼쪽에서 오른쪽
    justify-content: space-around;//가로정렬, 동일 간격
    background-color: rgb(0,0,0,0.8);
    font-size: 30px;
    height: 50px;
    color: white;

    font-family: gabriella, sans-serif;
    font-style: normal;
    font-weight: 900;
`

export function Nav(){
    const navigate = useNavigate();
    const onClick = (r) => {
        navigate(`/${r}`);
    }
    return (<Wrapper>
        <span>🥭99Study🥭</span>
        <span onClick={()=>onClick(" ")}>Home</span>
        <span onClick={()=>onClick("movies")}>Movies</span>
        <span onClick={()=>onClick("tv")}>Tv Program</span>
    </Wrapper>);
}