import { Navigate, useParams } from "react-router-dom";
import { useDelete } from "../../hooks/useMovies";

export default function Delete() {
    const {id} = useParams();

    const deleteItem = useDelete(id);
    
    deleteItem();
    
    return <Navigate to={'/catalog'}/>;
}