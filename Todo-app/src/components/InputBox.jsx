
const InputBox = ({value,handlechange,handleclick}) => {
 
  return (
    <div className="h-20 flex bg-amber-700 justify-center items-center w-[800px] gap-2">
      <input
        value={value}
        onChange={handlechange}
        className="border-black p-2 bg-gray-100 rounded-4xl w-150"
        type="text"
        placeholder="enter todo..."
      />
      <button onClick={()=>handleclick()} className="bg-sky-500 p-2 hover:bg-sky-700 w-26 rounded-4xl cursor-pointer text-white font-bold">
        save
      </button>
    </div>
  );
};

export default InputBox;
