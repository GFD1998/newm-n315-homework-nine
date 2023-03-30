export default class Model{

    constructor(userSettings){
        this.userSettings = userSettings;
    }
    pageName = "HOME";

    userSettings;


    // homeContent = `
    // <div id="gallery">
    //     <div id="leftArrow" class="arrow">&#8592;</div>
    //     <div id="galleryContent">
    //         <div id="galleryTitle">Nintendo</div>
    //         <img id="galleryImage" src="assets/images/developers/nintendo.jpg" />
    //     </div>
    //     <div id="rightArrow" class="arrow">&#8594;</div>
    // </div>
    // `;


    detailContent = `
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

    // homeContent = `
    // <div id="banner">
    //     <img src="assets/images/homeBanner.jpg" />
    //     <h2 style="text-align: center;">Form Examples</h2>
    // </div>
    // <div>
    //     <p style="text-align: center;padding: 2rem;">
    //         Welcome to Jurassic Park Laboratories! We specialize in genetic modification and enhancement, bringing creatures of the past back to life!
    //     </p>
    // </div>
    // `;


    //     homeContent = `
    // <div id="banner">
    //     <img src="assets/images/homeBanner.jpg" />
    //     <h2 style="text-align: center;">Form Examples</h2>
    // </div>
    // <div>
    //     <p style="text-align: center;padding: 2rem;">
    //         Welcome to Jurassic Park Laboratories! We specialize in genetic modification and enhancement, bringing creatures of the past back to life!
    //     </p>
    // </div>
    // `;

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
    setUserSettings(US){
        this.userSettings = US;
    }

    

    defaultContent = this.homeContent;

}

// var MODEL = (function(){

// })();


/**
 * 
 * 
 * 
 * toursContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="tourMainSection">
        <div id="tourTopImage">
            <div class="overlayContent">
                <h1>TOURS:</h1>
            </div>
            <img src="assets/images/tourBanner.png" />
        </div>
        <div class="localeRow">
            <div>
                <div class="overlayContent">
                    <h1>Israel</h1>
                    <p>from $1000</p>
                    <a name="ISRAEL" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content1.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>U.S.A</h1>
                    <p>from $1500</p>
                    <a name="USA" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content2.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>Australia</h1>
                    <p>from $1800</p>
                    <a name="AUSTRALIA" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content3.png" />
            </div>
        </div>
        <div class="localeRow">
            <div>
                <div class="overlayContent">
                    <h1>New Zealand</h1>
                    <p>from $1200</p>
                    <a name="NEW ZEALAND" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content4.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>France</h1>
                    <p>from $2500</p>
                    <a name="FRANCE" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content5.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>Egypt</h1>
                    <p>from $900</p>
                    <a name="EGYPT" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content6.png" />
            </div>
        </div>
        <div class="localeRow">
            <div>
                <div class="overlayContent">
                    <h1>Japan</h1>
                    <p>from $1300</p>
                    <a name="JAPAN" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content7.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>Canada</h1>
                    <p>from $2000</p>
                    <a name="CANADA" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content8.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>U.A.E</h1>
                    <p>from $3000</p>
                    <a name="UAE" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="assets/images/content9.png" />
            </div>
        </div>
    </div>
    `;


    /**
     * Tours Sub-content
     

    tours_Aus = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Australia tour package: </h1>
            <p class="startingFrom">STARTING FROM $1800</p>
        </div>
        <img src="assets/images/tours/australia/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/australia/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/australia/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/australia/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;


    tours_Can = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Canada tour package: </h1>
            <p class="startingFrom">STARTING FROM $2000</p>
        </div>
        <img src="assets/images/tours/canada/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/canada/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/canada/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/canada/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Egt = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Egypt tour package: </h1>
            <p class="startingFrom">STARTING FROM $900</p>
        </div>
        <img src="assets/images/tours/egypt/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/egypt/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/egypt/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/egypt/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Fre = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">France tour package: </h1>
            <p class="startingFrom">STARTING FROM $2500</p>
        </div>
        <img src="assets/images/tours/france/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/france/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/france/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/france/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Isl = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Israel tour package: </h1>
            <p class="startingFrom">STARTING FROM $1000</p>
        </div>
        <img src="assets/images/tours/israel/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/israel/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/israel/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/israel/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Jpn = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Japan tour package: </h1>
            <p class="startingFrom">STARTING FROM $1300</p>
        </div>
        <img src="assets/images/tours/japan/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/japan/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/japan/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/japan/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_NZ = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">New Zealand tour package: </h1>
            <p class="startingFrom">STARTING FROM $1200</p>
        </div>
        <img src="assets/images/tours/newZealand/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/newZealand/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/newZealand/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/newZealand/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_UAE = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">U.A.E tour package: </h1>
            <p class="startingFrom">STARTING FROM $3000</p>
        </div>
        <img src="assets/images/tours/uae/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/uae/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/uae/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/uae/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_USA = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">U.S.A tour package: </h1>
            <p class="startingFrom">STARTING FROM $1500</p>
        </div>
        <img src="assets/images/tours/usa/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="assets/images/tours/usa/content1.png" />
        </div>
        <div>
            <img src="assets/images/tours/usa/content2.png" />
        </div>
        <div>
            <img src="assets/images/tours/usa/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;



    specialOffersContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="aboutMainSection">
        <div id="aboutSection2">
            <h1>SPECIAL OFFERS(S):<div id="specialOffersTitleUnderline"></div></h1>
            <div class="quote" style="margin:1vw 0;">
                <div class="quoteContent" style="margin:1vw 0;">
                    <div style="margin:1vw 0;">
                        <img src="assets/images/specialsOffersContent1.png" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <h1>BARCELONA, SPAIN<div id="specialOffersTitleUnderline"></div></h1> 
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <a class="learnMoreBtn" style="width:fit-content;margin:0;position: absolute;bottom: 0;">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="quote" style="margin:1vw 0;">
                <div class="quoteContent" style="margin:1vw 0;">
                <div style="margin:1vw 0;">
                    <img src="assets/images/specialsOffersContent2.png" />
                </div>
                <div style="display: flex;flex-direction: column;position: relative;">
                    <h1>BANGKOK, THAILAND<div id="specialOffersTitleUnderline"></div></h1> 
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <a class="learnMoreBtn" style="width:fit-content;margin:0;position: absolute;bottom: 0;">Learn More</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;


    blogContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="blogMainSection">
        <div class="blogSection">
            <h1>
                BLOG:
                <div id="blogTitleUnderline"></div>
            </h1>
            <div class="blog" style="margin:1vw 0;">
                <div class="blogContent" style="margin:1vw 0;">
                    <div class="dateSection">
                        <img src="assets/images/dates.jpg" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <div style="margin-bottom: 1vw;">
                            <img src="assets/images/blogContent2.png" />
                        </div>
                        <div>
                            <h1>Sed et persipiatis unde omnis iste natus</h1> 
                            <p class="blogText">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="blogContent" style="margin:1vw 0;">
                    <div class="dateSection">
                        <img src="assets/images/dates2.jpg" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <div style="margin-bottom: 1vw;">
                            <img src="assets/images/blogContent2.png" />
                        </div>
                        <div>
                            <h1>Sed et persipiatis unde omnis iste natus</h1> 
                            <p class="blogText">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    contactContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="contactMainSection">
    <div class="contactSection">
        <h1>CONTACT US:<div id="contactTitleUnderline"></div></h1>
        <div class="contact" style="margin:1vw 0;">
            <div class="contactContent" style="margin:1vw 0;">
                <div>
                    <img src="assets/images/contactUs.png"/>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
            <div class="contactContent" style="margin:1vw 0;">
                <form>
                    <input name="tourName" type="text" placeholder="Tour name..." />
                    <input name="email" type="text" placeholder="Email Address..." />
                    <input name="company" type="text" placeholder="Company..." />
                    <textarea name="message"placeholder="Message..."></textarea>
                    <button class="submitBtn contactBtn" type="submit">SEND MESSAGE</button>
                    <!-- <h1>Booking Form</h1>
                    <div class="formRow">
                        <input name="name" type="text" placeholder="name..." />
                        <input name="email" type="text" placeholder="email..." />
                    </div>
                    <div class="formRow">
                        <input name="country" type="text" placeholder="country..." />
                        <input name="hotel" type="text" placeholder="hotel..." />
                    </div>
                    <div class="formRow dateInput">
                        <label  for="checkin">Check-in</label>
                        <input name="checkin" type="date" />
                    </div>
                    <div class="formRow dateInput">
                        <label for="checkout">Check-out</label>
                        <input name="checkout" type="date" />
                    </div>
                    <div class="formRow numberInputs">
                        <div>
                            <label for="adults">Adult</label>
                            <input class="numberInput" name="adults" type="number" />
                        </div>
                        <div>
                            <label for="children">Children</label>
                            <input class="numberInput" name="children" type="number" />
                        </div>
                        <div>
                            <label for="rooms">Rooms</label>
                            <input class="numberInput" name="rooms" type="number" />
                        </div>
                    </div>
                    <div class="formRow">
                        <textarea name="message" placeholder="message..."></textarea>
                    </div>
                    <button class="submitBtn" type="submit">SUBMIT</button> -->
                </form>
            </div>
        </div>
    </div>
</div>
<div >

</div>
    `;
 */