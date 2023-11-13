"use client"
import { BsCardChecklist, BsPlus } from "react-icons/bs"
import { useState } from "react"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { ADD_TO_LIST } from "@/context/actions/toDoActions"

export default function AddToList() {
  const [value, setValue] = useState("")

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(ADD_TO_LIST(value))
    setValue("")
  }

  return (
    <div className="flex items-center justify-center w-full gap-4 px-8 py-4 rounded-lg bg-zinc-800">
      <BsCardChecklist className="text-2xl text-[#555]" />
      <input
        type="text"
        className="flex-1 outline-none border-none bg-transparent placeholder:text-[#555]"
        placeholder="Add to your list"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="p-2 border rounded-md cursor-pointer border-emerald-400 hover:bg-emerald-400"
      >
        <BsPlus className="text-2xl text-emerald-500 group-hover:text-white" />
      </motion.div>
    </div>
  )
}
