import axios from "axios";

async function getData(Number){  // number = user id

    const user = await axios("https://jsonplaceholder.typicode.com/users/"+Number);

    const userPosts = await axios("https://jsonplaceholder.typicode.com/posts?userId="+Number);


    return {
    user: user.data,
    posts: userPosts.data
    };

}

export default getData;