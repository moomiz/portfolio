import React from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import first from "@/public/firstcloud.png"
import second from "@/public/secondcloud.png"
import Third from "@/public/Thirdcloud.png"

function LogoComponent() {
  return (
    <Wrapper>
      <TitleContainer>
        <Title className="Endeavoring">성장하는</Title>
        <Title><Point>Front-end</Point> 개발자</Title>
      </TitleContainer>
      <ImageContainer>
        <Image
          src={second}
          width={600}
          height={300} alt={""} />
        <Image
          src={first}
          width={600}
          height={300} alt={""}
          className="right" />
      </ImageContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;

`
const TitleContainer = styled.div`
  position: absolute;
  padding-top: 15%;
  padding-left: 25%;
  z-index: 10;
  
`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  bottom: 50%;
  width: 100%;
  .right{
    margin-left: 60%;
  }
  animation: fadein 3s;
  animation-fill-mode: forwards;
  @keyframes fadein {
/* 효과를 동작시간 동안 0 ~ 1까지 */
	from {
		opacity: 0;
    
	}
	to {
		opacity: 1;
    transform: translateY(40%);
	}
}
`
const Title = styled.div`
   font-weight: 800;
  font-size: 128px;
  margin: 1rem;
  font-family:RixInooAriDuriR;
  color:#FFE78F;
  text-shadow: 2px 2px 2px gray;
  font-weight: normal;
  font-style: normal;
`
const Point = styled.span`
  color: ${({ theme }) => theme.color.point};
  font-family: RixInooAriDuriR;
  font-size:78px;
  text-shadow: 2px 2px 2px gray;
  margin-left: 2rem;
  margin-right: 3rem;
`


export default LogoComponent