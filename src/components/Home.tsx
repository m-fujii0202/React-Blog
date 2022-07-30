import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

type PostType =  {
    author:{id: string, username:string};
    postsText:string;
    title: string;
    id: string;
}


const Home = () => {
   const [postList, setpostList] = useState<PostType[]>([]);
   

   useEffect(() => {
    const getPage = async () => {
      const data = await getDocs(collection(db, "posts"));
      const dataList: PostType[] = data.docs.map((doc) => ({
        author: {
          id: doc.data().author.id,
          username: doc.data().author.username,
        },
        id: doc.id,
        postsText: doc.data().postsText,
        title: doc.data().title,
      }));
    //   console.log(dataList);
      setpostList(dataList);
    };
    getPage();
  }, []);

   const hendleDelete = async (id: string)=>{
    await deleteDoc(doc(db, "posts",id));
    //リロードなしで削除ボタンが画面に反映する「window.location.href 」
    window.location.href = "/";
   }

    return (
    <ShomePage>
        {postList.map((post:PostType)=>{
            return(
            <SpostContents key={post.id}>
                <div className="postHeader">
                    <Sh1>{post.title}</Sh1>
                </div>
                <SpostTextContainer>
                   {post.postsText}
                </SpostTextContainer>
                <SnameAndDeleteButton>
                <Sh3>@{post.author.username}</Sh3>
                {post.author.id === auth.currentUser?.uid && (
                <Sbutton onClick={() => hendleDelete(post.id)}>削除</Sbutton>
                )}
                </SnameAndDeleteButton>
            </SpostContents>
            )
        })}
        
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