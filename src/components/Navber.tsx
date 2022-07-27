import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHouse, 
    faFilePen, 
    faArrowRightToBracket 
} from '@fortawesome/free-solid-svg-icons'


 export const Navber = () => {
    return (
    <Snav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
        </Link>

      <Link to="/createpost">
      <FontAwesomeIcon icon={faFilePen} />
      記事投稿
      </Link>

      <Link to="/login">
      <FontAwesomeIcon icon={faArrowRightToBracket} />
      ログイン
      </Link>
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

// nav a avg [
//     margin-right: 5px;
// ]