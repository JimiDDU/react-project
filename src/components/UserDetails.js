import { useParams } from "react-router-dom";

function UserDetails() {

    const { userId } = useParams();

  return (
    <div>User details page {userId}</div>
  )
}

export default UserDetails