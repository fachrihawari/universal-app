import "./index.css";

import { AppRegistry } from "react-native";
import App from "@app/shared";
import * as serviceWorker from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

AppRegistry.registerComponent("mobile", () => App);
AppRegistry.runApplication("mobile", {
  rootTag: document.getElementById("root")
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
