export default class SPAManager{


    _model;
    gm;
    userSettings;


    homeContent(){
        $("#mainContainer").html(this._model.homeContent);
        // window.location.hash = "home";
    }

    createContent(){
        $("#mainContainer").html(this._model.createContent);
        // window.location.hash = "home";
    }

    editContent(){
        $("#mainContainer").html(this._model.editContent);
        // window.location.hash = "home";
    }

    loginSignupContent(){
        $("#mainContainer").html(this._model.loginSignupContent);
        // window.location.hash = "home";
    }

    defaultContent(){
        $("#mainContainer").html(this._model.defaultContent);
        // window.location.hash = "home";
    }

    detailsPage(page){
        console.log("Hello from dp");
        switch(page){
            case "capcom":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "bethesda":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "blizzard":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "ea":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "fromSoftware":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "naughtyDog":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "nintendo":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "rockstar":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "scottCawthon":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            case "squareEnix":
                $("#mainContainer").html(this._model.detailContent);
                this.updateDetailsPage(page);
                break;
            default:
                break;
        }
    }


    updateDetailsPage(page){
        console.log("Hello from udp");
        for(var i = 0;i < 10;i++){
            console.log(i);
            console.log(page);
            console.log(this.gm.objectData["Developers"][i]["title"].toLowerCase());
            switch(page){
                case "capcom":
                    page = "Capcom";
                    break;
                case "bethesda":
                    page = "Bethesda Softworks";
                    break;
                case "blizzard":
                    page = "Blizzard Entertainment";
                    break;
                case "rockstar":
                    page = "Rockstar Games";
                    break;
                case "scottCawthon":
                    page = "Scott Cawthon";
                    break;
                case "ea":
                    page = "Electronic Arts";
                    break;
                case "naughtyDog":
                    page = "Naughty Dog";
                    break;
                case "squareEnix":
                    page = "Square Enix";
                    break;
                case "nintendo":
                    page = "Nintendo";
                    break;
                case "fromSoftware":
                    page = "From Software";
                    break;
            }
            // if(this.gm.objectData["Developers"][i]["title"].toLowerCase() == page){
            if(this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page ||
            this.gm.objectData["Developers"][i]["title"] == page){

                var objectString = `    
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

                var finalString = ``;
                for(var m = 0;m < 10;m++){

                    finalString += `
                    <div id="gallery">
                        <div id="galleryContent">
                            <div id="galleryTitle">${this.gm.objectData["Developers"][i]["Games"][m]["title"]}</div>
                            <img id="galleryImage" src="${this.gm.objectData["Developers"][i]["Games"][m]["image"]}" />
                            <div id="galleryPublisher">${this.gm.objectData["Developers"][i]["title"]}</div>
                            <div id="galleryGenre">${this.gm.objectData["Developers"][i]["Games"][m]["genre"]}</div>
                            <div id="galleryPlatforms">${this.gm.objectData["Developers"][i]["Games"][m]["platforms"]}</div>
                        </div>
                    </div>
                    `;
                    // $("#galleryTitle").html(this.gm.objectData["Developers"][i]["Games"][1]["title"]);
                    // $("#galleryImage").attr("src", `${this.gm.objectData["Developers"][i]["Games"][1]["image"]}`);
                    // $("#galleryPublisher").html(this.gm.objectData["Developers"][i]["Games"][1]["publisher"]);
                    // $("#galleryGenre").html(this.gm.objectData["Developers"][i]["Games"][1]["genre"]);
                    // $("#galleryPlatforms").html(this.gm.objectData["Developers"][i]["Games"][1]["platforms"]);
                }
                $("#gallery").css("flex-direction", "column");
                $("#gallery").html(finalString);
                break;
            }
        }
    }



    updateView(){
        $('title').html(`${window.location.hash.split('#')[1]} Page`);
        window.scrollTo(0, 0);
        $("#mainMenu").css("display", "none");
        this.setTriggers();
    }


    constructor(_model, gallery){
        this._model = _model;
        this.gm = gallery;
        $(document).ready(e => {
            this.updateView();
            if($("#mainContainer").innerHTML == null){
                $("#mainContainer").html(this.defaultContent());
            }
            // window.location = $(location).attr("href").split("#")[0];
        });

        $(window).on("hashchange", e => {
            console.log("Hello from routeTo()" + window.location.hash);
            switch(window.location.hash){
                case "#HOME":
                    this.homeContent();
                    break;
                case "#CREATE":
                    this.createContent();
                    break;
                case "#EDIT":
                    this.editContent();
                    break;
                case "#LOGIN":
                    this.loginSignupContent();
                    break;
                case "#SIGNUP":
                    this.loginSignupContent();
                    break;
                case "#DETAILS":
                    console.log($("#galleryImage").attr("src").split("/")[3].split(".")[0]);
                    this.detailsPage($("#galleryImage").attr("src").split("/")[3].split(".")[0]);
                    break;
                default:
                    break;
            }
            this.updateView();
        });

        $("#hamburger").on("click", e =>{
            if($("#mainMenu").css("display") == "none"){
                $("#mainMenu").css("display", "block");
            }else if($("#mainMenu").css("display") == "block"){
                $("#mainMenu").css("display", "none");
            }
        });


        $(window).on("resize", e => {
            var pageWidth = e.currentTarget.innerWidth;
            if(pageWidth >= 960){

            }else{

            }
        });

        this.setTriggers();
    }

    setTriggers(){
        $(".imageContainerSection img").mouseenter(e => {
            $(".overlayImageContainer").css("display", "block");
        });
        $(".overlayImageContainer").mouseleave(e => {
            $(".overlayImageContainer").css("display", "none");
        });
    }
}



/*
        {
            "title":"Monster Hunter Rise",
            "publisher":"Capcom",
            "genre":"Fighting",
            "platforms":"Switch/PS4/XBOX/PC",
            "image":"assets/images/mhrise.jpg"
        },
        {
            "title":"Super Smash Bros. Ultimate",
            "publisher":"Nintendo",
            "genre":"Fighting",
            "platforms":"Switch",
            "image":"assets/images/ssbu.jpg"
        },
        {
            "title":"Monster Hunter Generations Ultimate",
            "publisher":"Capcom",
            "genre":"Fighting",
            "platforms":"Switch",
            "image":"assets/images/mhgu.jpg"
        },
        {
            "title":"Super Mario Odyssey",
            "publisher":"Nintendo",
            "genre":"Platformer",
            "platforms":"Switch",
            "image":"assets/images/smo.jpg"
        },
        {
            "title":"Legend of Zelda: Breath of the Wild",
            "publisher":"Nintendo",
            "genre":"Adventure/Puzzle",
            "platforms":"Switch",
            "image":"assets/images/lozbotw.jpg"
        },
        {
            "title":"Metroid Prime Remastered",
            "publisher":"Nintendo",
            "genre":"Adventure",
            "platforms":"Switch",
            "image":"assets/images/mpr.jpg"
        },
        {
            "title":"Super Mario Kart 8 Deluxe",
            "publisher":"Nintendo",
            "genre":"Racing",
            "platforms":"Switch",
            "image":"assets/images/smk8d.jpg"
        },
        {
            "title":"Monster Hunter World",
            "publisher":"Capcom",
            "genre":"Fighting",
            "platforms":"PS4/XBOX/PC",
            "image":"assets/images/mhworld.jpg"
        },
        {
            "title":"Bloodborne",
            "publisher":"FromSoftware",
            "genre":"RPG",
            "platforms":"PS4",
            "image":"assets/images/bb.jpg"
        },
        {
            "title":"Pokemon Shield",
            "publisher":"Nintendo",
            "genre":"RPG",
            "platforms":"Switch",
            "image":"assets/images/ps.jpg"
        }
*/