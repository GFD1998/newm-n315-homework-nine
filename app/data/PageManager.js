export default class PageManager{

    pageName = "HOME";
    homeContent;
    browseContent;
    createContent;
    yourContent;
    editContent;
    loginSignupContent;
    defaultContent;

    constructor(pageData){
        this.pullPages(pageData);
    }


    pullPages(pd){
        this.homeContent = pd.Pages.index;
        this.browseContent = pd.Pages.browseRecipes;
        this.createContent = pd.Pages.createRecipes;
        this.yourContent = pd.Pages.yourRecipes;
        this.editContent = pd.Pages.editRecipes;
        this.loginSignupContent = pd.Pages.loginCreateAccount;

        this.defaultContent = this.homeContent;
    }

}
