export default class UserSettings{

    fName = "N";
    lName = "N";
    email = "N";
    password = "N";
    fBook = "N";
    fGenre = "N";
    fVehicle = "N";
    fSport = "N";
    fTeam = "N";
    fPlace = "N";
    constructor(){}

    setValues(fname,lname,email,password,fbook,fgenre,fvehicle,fsport,fteam,fplace){
        this.fName = fname;
        this.fName = lname;
        this.email = email;
        this.password = password;
        this.fBook = fbook;
        this.fGenre = fgenre;
        this.fVehicle = fvehicle;
        this.fSport = fsport;
        this.fTeam = fteam;
        this.fPlace = fplace;
    }


    getValues(){
        console.log(this.fName);
        console.log(this.lName);
        console.log(this.email);
        console.log(this.password);
        console.log(this.fBook);
        console.log(this.fGenre);
        console.log(this.fVehicle);
        console.log(this.fSport);
        console.log(this.fTeam);
        console.log(this.fPlace);
    }
}