import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 15 },
        { id: 2, message: "Its my first posts", likesCount: 20 },
      ],
      newPostText: "",
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: "Oleh" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Viktor" },
        { id: 4, name: "Sania" },
        { id: 5, name: "Loos" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hows is you it-kamasutra" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Hows is you it-kamasutra" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      friendsName: [{ name: "Andrei" }, { name: "Sana" }, { name: "Dion" }],
    },
  },
  _renderEntireTree() {
    console.log("State Changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._renderEntireTree(this._state);
  },
};

export default store;
