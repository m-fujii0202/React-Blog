import styled from "styled-components";
import React from "react";

const Home:any = () => {
    return (
    <ShomePage>
        <SpostContents>
            <div className="postHeader">
                <Sh1>タイトル</Sh1>
            </div>
            <SpostTextContainer>
                React学集中です!
            </SpostTextContainer>
            <SnameAndDeleteButton>
               <Sh3>@makoto</Sh3>
               <Sbutton>削除</Sbutton>
            </SnameAndDeleteButton>
        </SpostContents>
    </ShomePage>
    )
};

const ShomePage = styled.div`
 width:100%;
 height:auto;
 display:flex;
 flex-direction:column;
 align-items:center;
 padding:20px;
`

const SpostContents = styled.div`
width:600px;
height:auto;
max-height:600px;
background-color:#fff;
box-shadow: 12px 14px 5px 13px #777777;
margin:20px;
padding:20px;
border-radius:10px;
`

const Sh1 = styled.h1`
 text-align:center;
 margin-top:5px;
`
const SpostTextContainer = styled.div`
 height:auto;
 word-wrap:break-word;
 max-height:400px;
 width:100%;
`
const SnameAndDeleteButton =styled.div`
 display:flex;
 align-items:center;
`

const Sbutton = styled.button`
 flex:10%;
 background-color:#d36262;
 color:#fff;
 padding:7px 15px;
 border-radius:3px;
 border:none;
 cursor:pointer;
 transition:all 0.3s;
 &:hover{
    background-color:red;
 }
`

const Sh3 = styled.h3`
 flex:90%;
`

 
export default Home;