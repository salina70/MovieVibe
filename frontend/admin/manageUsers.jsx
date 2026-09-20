import React, { useEffect } from 'react'

function ManageUsers() {
const userData = async () =>{
  const result = await axios.get("http://localhost:8000/api/admin/totaluser")
}
  return (
<div>

</div>
  )
}

export default ManageUsers