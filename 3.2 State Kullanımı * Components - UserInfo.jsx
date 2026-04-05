import {useState} from "react";
function UserInfo(){

     const state = {
        Users: [
            {UserId:1,UserName:"furkhangul",UserPass:"4686511f",UserEmail:"glfrkn@gmail.com"},
            {UserId:2,UserName:"zodialks",UserPass:"dfjknsm",UserEmail:"dflgnkkn@gmail.com"},
            {UserId:3,UserName:"kesdsua",UserPass:"gkjsl",UserEmail:"meauns@gmail.com"},
        ]
    }
    return(
        <>
            {
                state.Users.map(user =>
                    <h1 key={user.UserId}>{user.UserName}<br/>{user.UserPass}<br/>{user.UserEmail}</h1>
                )
            }
        </>
    )
}

export default UserInfo
