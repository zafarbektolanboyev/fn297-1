import React, { useState } from "react";
import { useRef } from "react";
import elipse from "../assets/ellipsis-solid.svg";

function Header() {
    const [users,setUsers] = useState([])
    const nameRef = useRef('')
    const descRef = useRef('')
    const rateRef = useRef('')
    const balanceRef = useRef('')
    const statusRef = useRef('')
    const depositeRef = useRef('')

    function handleClick(e) {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            rate: rateRef.current.value,
            balance: balanceRef.current.value,
            status: statusRef.current.value,
            deposit: depositeRef.current.value,
            desc: descRef.current.value
        };
    
        setUsers([...users, user]);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users)
    }
    

  return (
    <div className="bg-[#F4F7FC] p-[20px]">
      <div className="container">
        <div className="flex flex-row justify-between ">
          <div className="logo flex flex-row gap-2 ">
            <h1 className="text-2xl flex-col flex">lll</h1>
            <input
              className="border w-[300px] pl-2 h-[40px] rounded-md"
              placeholder="Search"
              type="search"
            />
          </div>
          <div>
            <button
              className="btn text-white bg-blue-500"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              + Add Customer
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between text-[#606F89] mt-[20px]">
          <div className="gap-2 flex">
            <input type="checkbox" name="" id="" />
            <span className="text-xl">NAME</span>
          </div>
          <div>
            <h1 className="text-[#606F89]">DESCRIPTION</h1>
          </div>
          <div>
            <h1 className="text-[#606F89]">RATE</h1>
          </div>
          <div>
            <h1 className="">BALANCE</h1>
          </div>
          <div>
            <h1>DEPOSIT</h1>
          </div>
          <div>
            <h1>STATUS</h1>
          </div>
          <div className="text-black">
            <img src={elipse} width={25} height={25} alt="" />
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        <h1 className="text-2xl">Hello user</h1>
          <form method="dialog items-center">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="gap-4">
            <input ref={nameRef} type="text" placeholder="Type name" className="input input-bordered w-full mb-2" />
            <input ref={rateRef} type="text" placeholder="Type rate" className="input input-bordered w-full mb-2" />
            <input ref={balanceRef} type="text" placeholder="Type balance" className="input input-bordered w-full mb-2" />
            <input ref={depositeRef} type="text" placeholder="Type deposit" className="input input-bordered w-full mb-2" />
            <select ref={statusRef} name="" id="" className="input input-bordered w-full mb-2">
                <option value="active">active</option>
                <option value="inactive">inactive</option>
            </select>
            <textarea ref={descRef} name="" id="" placeholder="Type description" className="input input-bordered w-full mb-5"></textarea>
          </div>
          <button className="w-full p-[15px] tex  text-white text-xl rounded-md bg-blue-600" onClick={handleClick}>Save</button>
        </div>
      </dialog>
    </div>
  );
}

export default Header;
