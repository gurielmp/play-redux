"use client"
import { AnimatePresence, motion } from "framer-motion"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

export default function ToDoList() {
  const todos = useSelector((state: any) => state.todos?.todos)
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 px-4 py-3 my-4 rounded-lg bg-zinc-800">
      <AnimatePresence>
        {todos?.length > 0 ? (
          <>
            {todos
              ?.slice()
              .sort((a: any, b: any) => b.id - a.id)
              .map((item: any) => (
                <ListCard key={item.id} index={item.id} item={item.item} />
              ))}
          </>
        ) : (
          <>
            <p>No Active Activities</p>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

const ListCard = ({ index, item }: any) => {
  const dispatch = useDispatch()
  return (
    <motion.div
      className="flex items-center justify-between w-full px-4 py-3 bg-black rounded-lg"
      key={index}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <p className="text-lg text-[#555] font-semibold">{item}</p>
      <motion.div
        onClick={() =>
          dispatch({ type: "REMOVE_TO_LIST", payload: { id: index } })
        }
        className="cursor-pointer"
        whileTap={{ scale: 0.9 }}
      >
        <MdDelete className="text-2xl text-red-500" />
      </motion.div>
    </motion.div>
  )
}
