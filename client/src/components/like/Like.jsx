import { useNavigate, useParams } from "react-router-dom";

import { usePostLike } from "../../hooks/useLike";

export default function Like() {
  const navigate = useNavigate();
  const { id } = useParams();

  try {
    const [like, setLike] = usePostLike();
    navigate(`/catalog/${id}`);
  } catch (error) {
    console.log(error.message);
  }
}
