
export default function Home() {
  return (
    // Containers
    // <div className="h-screen text-white Parent bg-slate-900">
    //   <div className="container px-2 columns-3">
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati debitis facilis quae adipisci iste? Laboriosam quae magnam molestias nesciunt minima, exercitationem, doloribus veritatis perferendis quod corporis deserunt, illum ullam?</p>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati debitis facilis quae adipisci iste? Laboriosam quae magnam molestias nesciunt minima, exercitationem, doloribus veritatis perferendis quod corporis deserunt, illum ullam?</p>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati debitis facilis quae adipisci iste? Laboriosam quae magnam molestias nesciunt minima, exercitationem, doloribus veritatis perferendis quod corporis deserunt, illum ullam?</p>
    //   </div>
    // </div>

    // Float & Clear
    //   <div className="h-screen text-white Parent bg-slate-900">
    //   <div className="container px-2">
    //     <img src="https://www.tangledupinfood.com/sites/default/files/monaco_new_harbor.jpg" className="w-64 float-left"/>
    //     <img src="https://www.tangledupinfood.com/sites/default/files/monaco_new_harbor.jpg" className="w-32 float-right"/>
    //     <p className="clear-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati debitis facilis quae adipisci iste? Laboriosam quae magnam molestias nesciunt minima, exercitationem, doloribus veritatis perferendis quod corporis deserunt, illum ullam?</p>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati debitis facilis quae adipisci iste? Laboriosam quae magnam molestias nesciunt minima, exercitationem, doloribus veritatis perferendis quod corporis deserunt, illum ullam?</p>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati debitis facilis quae adipisci iste? Laboriosam quae magnam molestias nesciunt minima, exercitationem, doloribus veritatis perferendis quod corporis deserunt, illum ullam?</p>
    //   </div>
    // </div>

    // Position
    // <div className="text-white Parent bg-slate-900">
    //   <div className="container px-2">
    //     <div className="relative w-32 h-32 bg-red-500 rounded-lg p-8">
    //       <div className="absolute inset-2 w-24 h-24 bg-green-500 rounded-lg"></div>
    //     </div>
    //   </div>
    // </div>

    // Z-order/position
    // <div className="text-white Parent bg-slate-900 Parent">
    //   <div className="container flex">
    //     <div className="bg-red-500 -mr-2 border p-3 border-white rounded-full z-40">05</div>
    //     <div className="bg-red-500 -mr-2 border p-3 border-white rounded-full z-30">04</div>
    //     <div className="bg-red-500 -mr-2 border p-3 border-white rounded-full z-20">03</div>
    //     <div className="bg-red-500 -mr-2 border p-3 border-white rounded-full z-10">02</div>
    //     <div className="bg-red-500 -mr-2 border p-3 border-white rounded-full z-0">01</div>
    //   </div>
    // </div>

    // Object position
    <div className="text-white Parent bg-slate-900 Parent">
      <div className="container">
        <img className="object-none object-right-bottom w-64 h-64" src="https://www.tangledupinfood.com/sites/default/files/monaco_new_harbor.jpg" alt=""/>
      </div>
    </div>
  );
}
