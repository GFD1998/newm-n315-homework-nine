// import GameObjectData from "../data/gameObjects.json" assert {type: "json"};
// import GalleryData from "../data/campObjects.json" assert {type: "json"};
import GameObjectData from "../data/gameObjectsV2.json" assert {type: "json"};
import GalleryManager from "../GalleryManager.js";
import UserSettings from "./user-settings.js";
import SPAManager from "../SPAManager.js";
import Model from "./model-module.js";


var gallery = new GalleryManager(GameObjectData, new Model());
var spa = new SPAManager(new Model(), gallery);
// var whiteRabbit = new SPAManager(new Model(new UserSettings));

