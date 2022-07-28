
const Home:any = () => {
    return (
    <div className="homePage">
        <div className="postContents">
            <div className="postHeader">
                <h1>タイトル</h1>
            </div>
        </div>
            <div className="postTextContainer">
                React学集中です!
            </div>
            <div className="nameAndDeleteButton">
               <h3>@makoto</h3>
               <button>削除</button>
            </div>
    </div>
    )
};

export default Home;