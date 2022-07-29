import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

type PropsType = {
  isAuth: boolean;
};

export const Navber = (props: PropsType) => {
  const { isAuth } = props;
  console.log(typeof(isAuth));

  
  return (
    <Snav>
      <NavLink to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </NavLink>

      {!isAuth ? (
        <NavLink to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </NavLink>
      ) : (
        <>
          <NavLink to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </NavLink>

          <NavLink to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </NavLink>
        </>
      )}
    </Snav>
  );
};

const Snav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #cb8c54;
  gap: 45px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  margin: 5px 0;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
    color: #000;
  }
`;
