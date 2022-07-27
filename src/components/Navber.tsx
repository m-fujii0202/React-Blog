import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

 export const Navber = () => {
    return (
    <Snav>
      <Link to="/">ホーム</Link>
      <Link to="/createpost">記事投稿</Link>
      <Link to="/login">ログイン</Link>
    </Snav>
    )
};

const Snav = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 height:50px;
 background-color:#cb8c54;
 gap:45px;
`;

// Snav a {
//     text-decoration:none;
//     color:while;
//     transition:all 0.3s;
// }
//   Snav a:hover{
//    color:cadetblue;
//   }