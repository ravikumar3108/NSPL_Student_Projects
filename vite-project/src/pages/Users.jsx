import React from 'react'
import BoxGrid from '../utilties/BoxGrid'

function Users() {


  let jyoti = {
    pagename: "Users",
    buttonname: "",
    description: "Manage your Users and inventory.",
    box1: "Total Users",
    box2: "Active Users",
    box3: "Inactive Users"
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          <BoxGrid data={jyoti} />
        </div>
      </div>
    </>
  )
}

export default Users
