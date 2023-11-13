"use client"
import { AddToList, ToDoList } from "@/components"
import store from "@/context/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <DataProvider>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 px-4">
        <p className="text-3xl font-semibold text-gray-100">ToDo List</p>
        <div className="w-full px-6 py-8 border rounded-lg md:w-1/2 border-zinc-800">
          <AddToList />
          <ToDoList />
        </div>
      </div>
    </DataProvider>
  )
}

const DataProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>
}
