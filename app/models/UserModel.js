import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

export default class UserModel{

    // userFName = "TestUser";
    // userLName;
    // userEmail;
    user;
    auth;

    constructor(){
        this.auth = getAuth();
        this.user = this.auth.currentUser;
        this.checkForUser();
        // this.createUser();
        // this.loginUser("gdennett@codeflamestudio.com", "fineCheese");
    }

    checkForUser(){
        if(this.user){
          alert("You are already signed in! :)");
        }else{
          alert("Please log in or sign up for the full experience! :)");
        }
    }


    createUser(userEmail, userPassword){
        console.log("Hello from createUser();");
        createUserWithEmailAndPassword(this.auth, userEmail, userPassword)
        .then((userCred) => {
            console.log(userCred);
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    loginUser(userEmail, userPassword){
        signInWithEmailAndPassword(this.auth, userEmail, userPassword)
        .then((creds) => {
            alert("Signed in.");
            $("#mainContainer").html(this.pm.homeContent);
            window.location = '';
        })
        .catch((error) => {
            console.log("Login fail.");
        });
    }
}



































/*

homeContent = `
    <div id="gallery">
        <div id="leftArrow" class="arrow">&#8592;</div>
        <div id="galleryContent">
            <div id="galleryTitle">Nintendo</div>
            <img id="galleryImage" src="assets/images/developers/nintendo.jpg" />
        </div>
        <div id="rightArrow" class="arrow">&#8594;</div>
    </div>
    `;


    browseContent = `
    <div id="gallery">
        <div id="galleryContent">
            <div id="galleryTitle">Monster Hunter Rise</div>
            <img id="galleryImage" src="assets/images/games/mhrise.jpg" />
            <div id="galleryPublisher">Nintendo</div>
            <div id="galleryGenre">Fighting</div>
            <div id="galleryPlatforms">Switch/PS4/XBOX/PC</div>
        </div>
    </div>
    `;

    createContent = `
    <div class="inputForm">
        <form id="inputSection" action="./server/processsignup.php" method="POST">
        <h1></h1>
            <div id="inputRow">

                <div id="dataPoint">

                    <p>First Name</p>

                    <input  type="text"  name="fname" required>

                </div>

                <div id="dataPoint">

                    <p>Last Name</p>

                    <input  type="text" name="lname" required>

                </div>

                <div id="dataPoint">

                    <p>Email</p>

                    <input  type="text"  name="email" required>

                </div>

                <div id="dataPoint">

                    <p>Password</p>

                    <input  type="password" name="passwd" required>

                </div>

                <div id="dataPoint">

                    <p>Favorite Book</p>

                    <input  type="text"  name="confirmpasswd" required>

                </div>

                <div id="dataPoint">

                <p>Favorite Genre</p>

                <input  type="text"  name="fname" required>

            </div>

            <div id="dataPoint">

                <p>Favorite Vehicle</p>

                <input  type="text" name="lname" required>

            </div>

            <div id="dataPoint">

                <p>Favorite Sport</p>

                <input  type="text"  name="email" required>

            </div>

            <div id="dataPoint">

                <p>Favorite Team</p>

                <input  type="password" name="passwd" required>

            </div>

            <div id="dataPoint">

                <p>Favorite Place</p>

                <input  type="text"  name="confirmpasswd" required>

            </div>

            </div>

            <button class="btnstyle submitbtn" type="submit" style="padding-top: 5px; cursor: pointer;" required>Create Account</button>

        </form>

    </div>
    `;


    galleryPage = `
    <div id="gallerySingle">
        <!-- <div id="leftArrow" class="arrow">&#8592;</div> -->
        <div id="galleryContentSingle">
            <div id="galleryTitle">Monster Hunter Rise</div>
            <img id="galleryImage" src="assets/images/mhrise.jpg" />
            <div id="galleryPublisher">Nintendo</div>
            <div id="galleryGenre">Fighting</div>
            <div id="galleryPlatforms">Switch/PS4/XBOX/PC</div>
        </div>
        <!-- <div id="rightArrow" class="arrow">&#8594;</div> -->
    </div>
    `;

    editContent = `
    <div class="inputForm">
    <form id="inputSection" action="./server/processsignup.php" method="POST">
    <h1></h1>
        <div id="inputRow">

            <div id="dataPoint">

                <p>First Name</p>

                <input  type="text"  name="fname" placeholder="${this.pageName}" required>

            </div>

            <div id="dataPoint">

                <p>Last Name</p>

                <input  type="text" name="lname" required>

            </div>

            <div id="dataPoint">

                <p>Email</p>

                <input  type="text"  name="email" required>

            </div>

            <div id="dataPoint">

                <p>Password</p>

                <input  type="password" name="passwd" required>

            </div>

            <div id="dataPoint">

                <p>Favorite Book</p>

                <input  type="text"  name="confirmpasswd" required>

            </div>

            <div id="dataPoint">

            <p>Favorite Genre</p>

            <input  type="text"  name="fname" required>

        </div>

        <div id="dataPoint">

            <p>Favorite Vehicle</p>

            <input  type="text" name="lname" required>

        </div>

        <div id="dataPoint">

            <p>Favorite Sport</p>

            <input  type="text"  name="email" required>

        </div>

        <div id="dataPoint">

            <p>Favorite Team</p>

            <input  type="password" name="passwd" required>

        </div>

        <div id="dataPoint">

            <p>Favorite Place</p>

            <input  type="text"  name="confirmpasswd" required>

        </div>

        </div>

        <button class="btnstyle submitbtn" type="submit" style="padding-top: 5px; cursor: pointer;" required>Create Account</button>

    </form>

</div>
    `;

    loginSignupContent = `
    <div id="loginSignupContainer">
            <div class="inputForm">
    
                <form id="loginForm" action="./server/processlogin.php" method="POST">
    
                    <h1>Login</h1><br>
    
                    <div id="dataPoint">
    
                        <p>Email</p>
    
                        <input type="text" name="loginemail" required>
    
                    </div>
    
                    <div id="dataPoint">
    
                        <p>Password</p>
    
                        <input type="text" name="loginpasswd" required><br><br>
    
                    </div>
    
                    <br>
    
                    <button class="btnstyle submitbtn" type="submit" style="padding-top: 5px; cursor: pointer;" required>Log in</button>
    
                </form>
            </div>
            <div class="inputForm">
                    <form id="inputSection" action="./server/processsignup.php" method="POST">
                    <h1>Sign-up</h1>
                        <div id="inputRow">

                        <div id="dataPoint">

                        <p>First Name</p>

                        <input  type="text"  name="fname" required>

                    </div>

                    <div id="dataPoint">

                        <p>Last Name</p>

                        <input  type="text" name="lname" required>

                    </div>

                            <div id="dataPoint">

                                <p>Email</p>

                                <input  type="text"  name="email" required>

                            </div>

                            <div id="dataPoint">

                                <p>Password</p>

                                <input  type="password" name="passwd" required>

                            </div>

                            <div id="dataPoint">

                                <p>Confirm Password</p>

                                <input  type="text"  name="confirmpasswd" required>

                            </div>

                        </div>

                        <button class="btnstyle submitbtn" type="submit" style="padding-top: 5px; cursor: pointer;" required>Sign up</button>

                    </form>

                </div>

            </div>

        </div>

        <br>

        </div>
        </div>
    `;

    

    defaultContent = this.homeContent;


*/