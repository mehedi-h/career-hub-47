import { Link } from "react-router-dom";


const ErrPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-lg font-semibold md:text-4xl md:font-bold">Opps !!!</h2>
            <Link to="/"></Link>
        </div>
    );
};

export default ErrPage;