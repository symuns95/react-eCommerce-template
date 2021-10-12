import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
const router = [
  { exact: true, path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/shop", component: Shop },
  { path: "/contact", component: Contact },
  { path: "/singleproduct/title:", component: SingleProductPage },
  { path: "*", component: Error },
];
export default router;
