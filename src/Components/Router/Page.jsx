import { Route, Routes } from "react-router";
import Africa from "./Africa";
import America from "./America";
import Bisons from "./Bisons";

const Page = () => (
    <Routes>
        <Route path="/" element={<h2>Welcome Home</h2>} />
        <Route path="/australia" element={<h2>Welcome to Australia</h2>} />
        <Route path="/africa" element={<Africa />}>
            <Route path="tigers" element={<span>101 tigers</span>} />
            <Route path="lions" element={<span>50 lions</span>} />
            <Route path="zebras" element={<span>1000 zebras</span>} />
        </Route>
        <Route path="/america" element={<America />}>
            <Route path="eagle" element={<span>eagle</span>} />
            <Route path="grizzley" element={<span>grizzley</span>} />
            <Route path="bison" element={<Bisons />} />
            <Route path="bison/:count" element={<Bisons />} />
        </Route>

        <Route path="*" element={<span>404 Page not found!</span>} />
    </Routes>
);

export default Page;
