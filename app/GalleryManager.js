export default class GalleryManager{


    objectData;
    model;
    dataCounter = 0;
    constructor(data, model){
        this.objectData = data;
        this.model = model;
        // if($(".arrow").length == 0){
        //     this.displayFullGallery();
        // }else{
        console.log("Before leftArrow.");
        $("#leftArrow").on("click", e => {
            this.cycleContent("left",1);
        });

        $("#rightArrow").on("click", e => {
            this.cycleContent("right",1);
        });
        // }
    }


    cycleContent(direction, num){
        switch(direction){
            case "left":
                this.dataCounter -= num;
                if(this.dataCounter < 0){
                    this.dataCounter = 9;
                }
                this.updateGallery();
                break;
            case "right":
                this.dataCounter += num;
                if(this.dataCounter > 9){
                    this.dataCounter = 0;
                }
                this.updateGallery();
                break;
            default:
                break;
        }
    }

    updateGallery(){
        $("#galleryTitle").html(this.objectData["Developers"][this.dataCounter]["title"]);
        $("#galleryImage").attr("src", `${this.objectData["Developers"][this.dataCounter]["image"]}`);
        // $("#galleryPublisher").html(this.objectData["GameObjects"][this.dataCounter]["distributor"]);
        // $("#galleryGenre").html(this.objectData["GameObjects"][this.dataCounter]["type"]);
        // $("#galleryPlatforms").html(this.objectData["GameObjects"][this.dataCounter]["price"]);
        // if(i == 200){
        //     $("#galleryTitle").html(this.objectData["GameObjects"][this.dataCounter]["product"]);
        //     $("#galleryImage").attr("src", `${this.objectData["GameObjects"][this.dataCounter]["image"]}`);
        //     $("#galleryPublisher").html(this.objectData["GameObjects"][this.dataCounter]["distributor"]);
        //     $("#galleryGenre").html(this.objectData["GameObjects"][this.dataCounter]["type"]);
        //     $("#galleryPlatforms").html(this.objectData["GameObjects"][this.dataCounter]["price"]);
        // }else{
        //     $("#mainContainer").html(this.model.galleryPage);
        //     $("#galleryTitle").html(this.objectData["CampObjects"][i]["product"]);
        //     $("#galleryImage").attr("src", `${this.objectData["CampObjects"][i]["image"]}`);
        //     $("#galleryPublisher").html(this.objectData["CampObjects"][i]["distributor"]);
        //     $("#galleryGenre").html(this.objectData["CampObjects"][i]["type"]);
        //     $("#galleryPlatforms").html(this.objectData["CampObjects"][i]["price"]);
        // }
    }



    displayFullGallery(){
        var galleryString = '';
        for(var i = 0;i < 10;i++){
            if(i == 0){
                galleryString += `<div class="galleryRows">`;
            }
            galleryString += `
            <div id="galleryContent${i}">
                <div id="galleryTitle${i}">Monster Hunter Rise</div>
                <img id="galleryImage${i}" src="assets/images/mhrise.jpg" />
                <div id="galleryPublisher${i}">Nintendo</div>
                <div id="galleryGenre${i}">Fighting</div>
                <div id="galleryPlatforms${i}">Switch/PS4/XBOX/PC</div>
            </div>
            `;
            if(i%3 == 2){
                galleryString += `</div><div class="galleryRows">`;
            }

            if(i == 9){
                galleryString += `</div>`; 
            }
            // $(`#galleryTitle${i}`).html(this.objectData["CampObjects"][i]["product"]);
            // $(`#galleryImage${i}`).attr("src", `${this.objectData["CampObjects"][i]["image"]}`);
            // $(`#galleryPublisher${i}`).html(this.objectData["CampObjects"][i]["distributor"]);
            // $(`#galleryGenre${i}`).html(this.objectData["CampObjects"][i]["type"]);
            // $(`#galleryPlatforms${i}`).html(this.objectData["CampObjects"][i]["price"]);
            // this.setGalleryContentStyles(i);
        }
        $(`#gallery`).append(galleryString);
        for(var i = 0;i < 10;i++){
            $(`#galleryTitle${i}`).html(this.objectData["CampObjects"][i]["product"]);
            $(`#galleryImage${i}`).attr("src", `${this.objectData["CampObjects"][i]["image"]}`);
            $(`#galleryPublisher${i}`).html(this.objectData["CampObjects"][i]["distributor"]);
            $(`#galleryGenre${i}`).html(this.objectData["CampObjects"][i]["type"]);
            $(`#galleryPlatforms${i}`).html(this.objectData["CampObjects"][i]["price"]);
            this.setGalleryContentStyles(i);
        }
    }



    setGalleryContentStyles(i){
        $(`#galleryContent${i}`).css("text-align", "center");
        $(`#galleryContent${i}`).css("background-color", "grey");
        $(`#galleryContent${i}`).css("padding", "1rem");
        $(`#galleryContent${i}`).css("border-radius", "10px");
        $(`#galleryContent${i}`).css("color", "#FFFFFF");
        $(`#galleryContent${i}`).css("font-family", "'Courier New', Courier, monospace");
        $(`#galleryContent${i}`).css("width", "65%");
        $(`#galleryContent${i}`).css("flex", "33%");
        $(`#galleryContent${i}`).css("margin", "5%");
        $(`#galleryContent${i}`).css("padding", "5%");
        $(`#galleryContent${i}`).css("cursor", "pointer");
        $(`#galleryContent${i}`).on("click", e => {
            this.updateGallery(i);
        });
    }
}