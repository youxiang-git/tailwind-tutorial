
export default function Home() {
  return (
    // Box shadows
    // <div className="h-screen p-4 Parent w-64">
    //   <div className="incline-block p-4 text-black bg-white border rounded-lg shadow-lg shadow-cyan-700">
    //     <h1 className="text-2xl">Hello</h1>
    //     <p className="mb-4">This is my div</p>
    //     <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 opacity-20">Say hello</button>
    //   </div>
    // </div>

    // Filters
    <div className="h-screen p-4 Parent w-64">
      <div className="incline-block p-4 text-black bg-white border rounded-lg shadow-md grayscale brightness-50 hover:brightness-100">
        <img src="https://www.tangledupinfood.com/sites/default/files/monaco_new_harbor.jpg" alt="" className="w-64 mb-4"/>
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 opacity-20">Say hello</button>
      </div>
    </div>
  );
}
