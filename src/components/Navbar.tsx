import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        <div className="hidden md:flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-300 px-2 ">
            <Image src='/search.png' alt="" width={12} height={12}/>
            <input type="text" placeholder="search..." className="bg-transparent p-2 w-[200px] outline-none"/>
        </div>
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20}/>
            </div>
            <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20}/>
                <div className="absolute -top-3 -right-3 h-5 w-5 flex items-center justify-center bg-purple-500 text-white rounded-full">1</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">John Doe</span>
                <span className="text-[10px] text-right text-gray-500">Admin</span>
            </div>
            <Image src="/avatar.png" alt="" height={36} width={36} className="rounded-full"/>
        </div>
    </div>
  )
}

export default Navbar
