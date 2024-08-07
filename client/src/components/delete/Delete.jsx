import { Navigate, useParams } from "react-router-dom";

import { useDelete } from "../../hooks/useMovies";

export default function Delete() {
  const { id } = useParams();
  const isConfirmed = confirm(
    "Are you sure, you would like to delete this movie?"
  );
  if (!isConfirmed) {
    return;
  }

  const deleteItem = useDelete(id);

  deleteItem();

  return <Navigate to={"/catalog"} />;
}
