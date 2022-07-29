import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, db } from "../firebase";

type PropsType = {
  isAuth: string | null;
}

const CreatePost = ({isAuth}:PropsType) => {
  const [title, setTitle] = useState<string>();
  const [postText, setPostTitle] = useState<string>();

  const navigate = useNavigate();

  const createPost = async () => {
    //     console.log(title);
    //     console.log(postText);
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/");
  };

  useEffect(()=>{
    if(!isAuth){
      navigate("/login");
    }
  },[]);

  return (
    <ScreatePostPage>
      <SpostContainer>
        <Sh1>記事を投稿する</Sh1>
        <div className="inputPost">
          <div>タイトル</div>
          <Sinput
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <Stextarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostTitle(e.target.value)}
          ></Stextarea>
        </div>
        <Sbutton className="postButton" onClick={createPost}>
          投稿する
        </Sbutton>
      </SpostContainer>
    </ScreatePostPage>
  );
};

const ScreatePostPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const SpostContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 500px;
  gap: 10px;
  padding: 0 40px;
  box-shadow: 12px 14px 5px 13px #777777;
`;

const Sh1 = styled.h1`
  margin: 0;
`;

const Sinput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  padding: 0 4px;
`;

const Stextarea = styled.textarea`
  width: 100%;
  height: 120px;
  outline: none;
  padding: 7px;
`;

const Sbutton = styled.button`
  padding: 10px 0;
  background-color: #3d77a5;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(5px);
  }
`;

export default CreatePost;
