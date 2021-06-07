import Layout from "Components/Layout/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({
            duration: 700,
            easing: "ease-in",
            once: true,
            delay: 0
        });
	}, []);
	return <Layout />;
}

export default App;
