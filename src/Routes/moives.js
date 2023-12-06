import {movies} from "../api"; //상대위치
import styled from "styled-components";
import Card from "../components/card"; //컴포넌트로 쓸때는 중괄호 없이 <>로할때 가능
import { useMatch } from "react-router-dom";
import { Modal } from "../components/modal";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: oldlace;
  z-index: 80;
`;
export function Movies(){
  const isMatch = useMatch("/movies/:id");
  const theId = 
    isMatch?.params.id &&
    movies.results.find((movie) => movie.id + "" === isMatch.params.id);
  
    return (
    <>
      {isMatch? (<Modal 
        photo={theId.poster_path}
        title={theId.title}
        overview={theId.overview}
        average={theId.vote_average}
      />):null
      }
      <Wrapper >
        {movies.results.map((movie, key)=>(
        <Card id={movie.id} overview={movie.overview} poster={movie.poster_path} key={key} title={movie.title} average={movie.vote_average} />
    
      ))}
      </Wrapper>
    </>
    )
}