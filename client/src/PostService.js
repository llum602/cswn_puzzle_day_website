import axios from 'axios';

//const url = 'http://localhost:5001/api/posts/';
const url = 'api/posts/';

class PostService {
    //Get posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //Create post
    static insertPost(teamname,pin,members,score,p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30) {
        return axios.post(url, {
            teamname: teamname,
            pin: pin,
            members,
            score,
            p1, 
            p2, 
            p3, 
            p4, 
            p5, 
            p6, 
            p7, 
            p8, 
            p9, 
            p10,
            p11,
            p12,
            p13,
            p14,
            p15,
            p16,
            p17,
            p18,
            p19,
            p20,
            p21,
            p22,
            p23,
            p24,
            p25,
            p26,
            p27,
            p28,
            p29,
            p30
            //text: text
        });
    }

    //Delete post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

    //Modify post
    static modifyPost(id, puz_index) {
        console.log(id);
        console.log("puz index = " + puz_index);
        return axios.put(`${url}${id}/${puz_index}`);
    
        
    }

}

export default PostService; 