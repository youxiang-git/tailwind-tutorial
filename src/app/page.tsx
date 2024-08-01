
export default function Home() {
  return (
    // Grid cols
    // <div className="h-screen text-white Parent bg-slate-900">
    //   <div className="container mx-auto">
    //     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    //       <div className="bg-sky-500 p-6 rounded-lg col-start-2">First column</div>
    //       <div className="bg-sky-500 p-6 rounded-lg col-start-1">Second column</div>
    //       <div className="bg-red-500 p-6 rounded-lg col-span-2">Third column</div>
    //       <div className="bg-sky-500 p-6 rounded-lg ">Fourth column</div>
    //       <div className="bg-sky-500 p-6 rounded-lg col-start-3">Fifth column</div>
    //       <div className="bg-red-500 p-6 rounded-lg col-span-2">Sixth column</div>
    //     </div>
    //   </div>
    // </div>
    
    // Grid rows
    // <div className="h-screen text-white Parent bg-slate-900">
    //   <div className="container mx-auto">
    //     <div className="grid grid-flow-col grid-rows-4 gap-4">
    //       <div className="row-span-3 p-6 rounded-lg bg-sky-500">01</div>
    //       <div className="p-6 rounded-lg bg-sky-500">02</div>
    //       <div className="p-6 rounded-lg bg-sky-500">03</div>
    //       <div className="p-6 rounded-lg bg-sky-500">04</div>
    //       <div className="row-span-2 p-6 rounded-lg bg-sky-500">05</div>
    //       <div className="p-6 rounded-lg bg-sky-500">06</div>
    //       <div className="p-6 rounded-lg bg-sky-500">07</div>
    //       <div className="p-6 rounded-lg bg-sky-500">08</div>
    //       <div className="p-6 rounded-lg bg-sky-500">09</div>
    //       <div className="p-6 rounded-lg bg-sky-500">10</div>
    //       <div className="p-6 rounded-lg bg-sky-500">11</div>
    //       <div className="p-6 rounded-lg bg-sky-500">12</div>
    //     </div>
    //   </div>
    // </div>

    // Grid Auto flow - automatically fills empty space
    <div className="h-screen text-white Parent bg-slate-900">
    <div className="container mx-auto">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
        <div className="col-span-2 p-6 rounded-lg bg-sky-500">01</div>
        <div className="col-span-2 p-6 rounded-lg bg-sky-500">02</div>
        <div className="p-6 rounded-lg bg-sky-500">03</div>
        <div className="p-6 rounded-lg bg-sky-500">04</div>
        <div className="p-6 rounded-lg bg-sky-500">05</div>
        <div className="col-span-2 p-6 rounded-lg bg-sky-500">06</div>
        <div className="p-6 rounded-lg bg-sky-500">07</div>
        <div className="p-6 rounded-lg bg-sky-500">08</div>
        <div className="p-6 rounded-lg bg-sky-500">09</div>
        <div className="col-span-2 p-6 rounded-lg bg-sky-500">10</div>
        <div className="p-6 rounded-lg bg-sky-500">11</div>
        <div className="p-6 rounded-lg bg-sky-500">12</div>
      </div>
    </div>
  </div>
  );
}
