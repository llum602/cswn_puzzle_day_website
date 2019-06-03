<template>
  <div id="app">
    <!-- ************* HEADER *************** -->
    <header class="header">
        <h4>
        <img class="logo" src="@/assets/images/logo.png">
            <ul> 
                <li><a href="#home">Home</a></li>
                <li><a href="#register">Register</a></li>
                <li><a href="#answer">Submit</a></li>
                <li><a href="#leaderboard">Leaderboard</a></li>
            </ul>
        </h4>
    </header>

    <!-- ************* HOME *************** -->

    <div id="home" class="fuck">
    
        <div>
            <div class="leftBox">
                <div id="center">
                    <h2 style="color:rgb(30, 89, 109);">CSWN Puzzle Day 2019</h2>
                    <h3 style="color:rgb(66, 122, 141);">Around the world</h3>
                </div>
            </div>

            <div class="rightBox"><img src="@/assets/images/home_graphic.png" alt="world" class="world"></div>
        </div>
    
    </div>

    <!-- ************* Register *************** -->

    <div id="register" class="fuck" style="outline:2px dashed rgb(219, 219, 219);">

      <h3 style="color:rgb(30, 89, 109);">Register</h3>

      <iframe width="0" height="0" name="dummyframe" id="dummyframe"></iframe>

      <form target="dummyframe" style="margin-left:60px;margin-right:60px;">
        <div class="create-post">
          <div class="form-row">
            <div class="form-group col-md-6">
                <label for="teamname">Team Name</label>
                <input type="text" v-model="teamname" class="form-control" id="create-post" placeholder="team name" required="required">
            </div>
            <div class="form-group col-md-6">
                <label for="pin">PIN</label>
                <input type="int" v-model="pin" class="form-control" id="create-post" placeholder="enter a secret PIN to submit answers" required="required">
            </div>
          </div>
          <div class="form-group">
              <label for="members">Group Members</label>
              <input type="text" v-model="members" class="form-control" id="create-post" placeholder="separate group members with a comma" required="required">
          </div>

          <button v-on:click="createPost" class="btn btn-primary">Submit</button>
        </div>
      </form>

        
    </div>

    <!-- ************* Submit *************** -->
    <div id="answer" class="fuck">  
      <h3 style="color:rgb(30, 89, 109);">Submit</h3>

      <iframe width="0" height="0" name="dummyframe" id="dummyframe"></iframe>

      <form target="dummyframe" style="margin-left:60px;margin-right:60px;">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="teamname">Team Name</label>
            <input type="text" v-model="sub_teamname" class="form-control" placeholder="team name" required="required">
          </div>
          <div class="form-group col-md-6">
            <label for="pin">PIN</label>
            <input type="int" v-model="sub_pin" class="form-control" placeholder="enter your PIN" required="required">
          </div>
      </div>    

      <div class="form-row">
        <div class="form-group col-md-1">
          <select v-model="selected" class="custom-select mr-sm-2" id="selectPuzzle" name="selectPuzzle">
            <option disabled value="">Puzzle...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            
          </select>
        </div>
        <div class="form-group col-md-10">
          <input type="text" v-model="puz_answer" class="form-control" id="answer" name="answer" placeholder="Enter answer here">
        </div>
        <div class="form-group col-md-1">
          <button v-on:click="modifyScore" class="btn btn-primary">Submit</button>
        </div>
      </div>      

      </form>
      <hr style="border-top: 2px dashed rgb(219, 219, 219);" />
    </div>

    <!-- ************* Leaderboard *************** -->
    <div id="leaderboard" class="fuck">  

      <h3 style="color:rgb(30, 89, 109);">Leaderboard</h3>
      <ul class="list-group" style="margin-left:60px;margin-right:60px;">

       
      
      </ul>

      <div class ="posts-container">
        <div class="post"
          v-for="(post, index) in posts"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id"
        >
          <p class="text">{{ post.teamname }}</p>
          <p class="score">{{ post.score }}</p>
        </div>
      </div>  
                        
    </div>

    <!-- ************* Footer *************** -->
    <div class="fuck">
        <img src="@/assets/images/footer_graphic_longer.png" alt="footer" class="footer">
    </div>
  </div>
</template>

<script>
import PostService from '@/PostService.js';

export default {
  name: 'app',
  data() {
    return {
      posts: [],
      teamname: '',
      pin: '',
      members: "",
      score: "",
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
      p10: "",
      p11: "",
      p12: "",
      p13: "",
      p14: "",
      p15: "",
      p16: "",
      p17: "",
      p18: "",
      p19: "",
      p20: "",
      p21: "",
      p22: "",
      p23: "",
      p24: "",
      p25: "",
      p26: "",
      p27: "",
      p28: "",
      p29: "",
      p30: "",
      sub_teamname: '',
      sub_pin: '',
      selected: '',
      puz_answer: '',
      p_index: '',
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }

  },
  methods: {
      async createPost() {
        //check teamname
        var check = 0;
        this.posts = await PostService.getPosts();
        
        for(var i = 0; i < this.posts.length; i += 1) {
          //console.log(this.posts[i].teamname);
          if(this.posts[i].teamname == this.teamname) {
            check = 1;
            console.log("duplicate name");
          }
        }

        if(check == 0) {
          console.log("creating team");

          await PostService.insertPost(
          this.teamname,this.pin,this.members,0,this.p1, 
          this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, 
          this.p9, this.p10,this.p11,this.p12,this.p13,this.p14,
          this.p15,this.p16,this.p17,this.p18,this.p19,this.p20,
          this.p21,this.p22,this.p23,this.p24,this.p25,this.p26,
          this.p27,this.p28,this.p29,this.p30
          );
        }
        else {
          alert("Team name taken; please choose a different name");
        }

        location.reload();

      },
      async modifyScore() {
        //arrays
        var puzzles = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10","p11","p12","p13","p14","p15","p16","p17","p18","p19","p20","p21","p22","p23","p24","p25","p26","p27","p28","p29","p30"];
        var answers = [
          "Corn","Seven Wonders Of The World","The Kremlin","Liberia","alien","Lets go to the beach","Florence","Taipei taiwan","Hawaii","West Lafayette","40 126 144 96 50 5 35 20 18","Travel makes one modest, you see what a tiny place you occupy in the world.","India","NIELSEN","70","39","TOWER","New York City","Seattle","1833","Paris","Antarctica","214","DIFFICULT","YOLO","596283598","1524","DAILY DOUBLE","BARRIS"
        ];

        //find teamname
        console.log(this.sub_teamname);
        var check = 0;
        var index = 0;
        this.posts = await PostService.getPosts();
        
        for(var i = 0; i < this.posts.length; i += 1) {
          //console.log(this.posts[i].teamname);
          if(this.posts[i].teamname == this.sub_teamname) {
            check = 1;
            index = i;
            console.log("name found");
          }
        }

        if(check == 1) {
          //check pin
          if(this.posts[index].pin != this.sub_pin) {
            alert("Wrong pin");
          }
          else {
            //check their answer but you don't even have the answers omegalulllll
            var puz_index = this.selected-1;
            console.log("puz index = " + puz_index);
            console.log(puzzles[this.selected-1]);
            var p_name = puzzles[this.selected-1];

            //check if they already have an answer
            //console.log("answer = " + this.posts[this.selected].puzzles[this.selected-1]);

            if(answers[puz_index].toLowerCase() == this.puz_answer.toLowerCase()) {
              alert("correct answer");
            }
            else {
              alert("wrong answer");
              return;
            }

            //case and switch boissss
            switch(p_name) {
              case "p1":
                if(this.posts[index].p1 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p2":
                if(this.posts[index].p2 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p3":
                if(this.posts[index].p3 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p4":
                if(this.posts[index].p4 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p5":
                if(this.posts[index].p5 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p6":
                if(this.posts[index].p6 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p7":
                if(this.posts[index].p7 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p8":
                if(this.posts[index].p8 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p9":
                if(this.posts[index].p9 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p10":
                if(this.posts[index].p10 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p11":
                if(this.posts[index].p11 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p12":
                if(this.posts[index].p12 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p13":
                if(this.posts[index].p13 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p14":
                if(this.posts[index].p14 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p15":
                if(this.posts[index].p15 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p16":
                if(this.posts[index].p16 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p17":
                if(this.posts[index].p17 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p18":
                if(this.posts[index].p18 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p19":
                if(this.posts[index].p19 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p20":
                if(this.posts[index].p20 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p21":
                if(this.posts[index].p21 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p22":
                if(this.posts[index].p22 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p23":
                if(this.posts[index].p23 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p24":
                if(this.posts[index].p24 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p25":
                if(this.posts[index].p25 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p26":
                if(this.posts[index].p26 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p27":
                if(this.posts[index].p27 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p28":
                if(this.posts[index].p28 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p29":
                if(this.posts[index].p29 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              case "p30":
                if(this.posts[index].p30 == "") {
                  //insert score
                  console.log("updating score for " + this.posts[index].teamname);
                  await PostService.modifyPost(this.posts[index]._id, p_name);
                }
                break;
              default:
                break;
            }
            
          }
        }
        else {
          alert("Please enter a registered team name");
        }

        location.reload();
      },
      async modifyPost(id) {
        await PostService.modifyPost(id);
      },
      async deletePost(id) {
        await PostService.deletePost(id);
        this.posts = await PostService.getPosts();
      }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

h3 {
  font-size: 30px;
  color: rgb(30, 89, 109);
}

h2 {
  font-size:45px;
  color: rgb(66, 122, 141);
}

h4 {
    font-size: 25px;
    color: rgb(30, 89, 109);
}

/* header */
.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  /*position: fixed;*/
  width: 100%;
}


.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

.header ul {
  margin: 0;
  padding: 10px;
  list-style: none;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  text-align: right;
  text-decoration: none;
  
}

.header li {
  display: inline-flex;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  border-left: 1px solid #f4f4f4;
  font-family: sans-serif;
  text-decoration: none;
}

.header a {
  font-size: 20px;
  color: rgb(30, 89, 109);
  text-decoration: none;
}

/*leaderboard*/
.list-group h3 {
    font-size: 20px;
    color: rgb(30, 89, 109);
}


/*images*/

.logo {
  float: left;
  height: 100%;
  width: 6%;
  padding: 15px;
  margin-top: 2px;
}

.world {
  margin-left: auto;
  margin-right: 80px;
  width:600px;
  height:600px;
  float:right;
}

.footer {
  width:1950px;
  height:130px;
  overflow:hidden;
  opacity: .7;
}

/*containers*/
.rightBox {
  float: right;
  width: 60%;
  height: auto;
  outline: 2px dashed rgb(255, 255, 255);
}

.leftBox {
  width: 30%;
  height: auto;
  margin: 10px;
  padding: 10px;
  float: left;
  outline: 2px dashed rgb(255, 255, 255);
  text-align: center;
}

#center {
  top:40%;
  left:10%;
  position: absolute;
}

.container {
    width:100%;
    float: left;
    height: auto;
    outline: 2px dashed rgb(0, 0, 0);
    position: relative;
    text-align: center;
    overflow:hidden;
}

.fuck {
  width:100%;
  outline: 2px dashed rgb(255, 255, 255);
  position:relative;
  float: left;
  height: auto;
  text-align: center;
  overflow: hidden;
  padding:10px;
}

.teamForm {
  outline: 2px dashed rgb(131, 131, 131);

}


div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid rgb(30, 89, 109);
  background-color: 3bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
  color: rgb(30, 89, 109);
}
p.score {
  font-size: 22px;
  margin-bottom: 0;
  color: rgb(50, 106, 124);
}

</style>
