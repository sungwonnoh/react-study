import styled from "styled-components";//{라이브러리나 리스트를 가져올때}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledBox = styled.div`
  width:300px;
  height: 500px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  position: relative;
  color: black;
`;
const Poster = styled.img`
  width: 250px;
  height: 400px;
`;
const Box1 = styled.div`
  width: 250px;
  height: 400px;
  position: absolute;
  color: white;
  background-color: rgba(0,0,0,0.7);
  //sborder: 1px solid yellow;
  overflow-y: scroll;
`;
export default function Card(props){
    const [isVisible, setIsvisible] = useState(false);
    const navigate = useNavigate();
    const whileHover = () =>{
      setIsvisible(true);
    };
    const whileLeave =() =>{
      setIsvisible(false);
    };
    const onCardClick = () => {
      navigate(`${props.id}`)
    }
    return (
    <StyledBox key={props.id} onMouseLeave={whileLeave} onMouseOver={whileHover} onClick={onCardClick}>
        {isVisible ? <Box1>
          <div>{props.overview}</div>
        </Box1> : null}
        <Poster src={`https://image.tmdb.org/t/p/w200/${props.poster}` }/> 
        <h4>{props.title}</h4>
        <div>⭐{props.average}</div>
      </StyledBox>
    )
}