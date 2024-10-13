import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { HelmetProvider } from "react-helmet-async";
import TagManager from "react-gtm-module";

const gtmKey = import.meta.env.VITE_TAG_KEY;

const tagManagerArgs = {
	gtmId: gtmKey
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</HelmetProvider>
);
