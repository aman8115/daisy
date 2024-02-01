import Home from "./layout";

function HomePage(){
    return(
        <>
      <Home>
      <div className="pt-10 flex items-center justify-center flex-col gap-10 h-[90vh]">
            <div className="w-1/2 space-y-6"></div>
          <h1 className=" text-white text-xl font-bold">Find Out Best
          <span className="text-yellow-400 text-3xl font-bold">Online course</span>
          </h1>
          <p className="text-xl text-gray-500">we have a large library of courses taught by highly skilled and qualified faculties at very affordable rate</p>
       
        </div>
     
      </Home>
       
       
        </>
    )

}
export default HomePage;
