
export default function Home() {
  return (
    // Text decorations & typography
    // <div>
    //   <h1 className="text-3xl italic">Title 1</h1>
    //   <h2 className="text-2xl underline decoration-red-300 decoration-wavy underline-offset-8 leading-loose">Title 2</h2>
    //   <h3 className="text-xl">Title 3</h3>
    //   <p className="text-base capitalize">A regular paragraph</p>
    //   <p className="text-base break-all">Lorem, ipsum dolor sit pneumonoultramicroscopicsilicovolcanoconiosis amet consectetur adipisicing elit. Amet, ipsa.</p>
    //   <p className="text-sm uppercase">A description paragraph</p>
    //   <p className="text-xs note">A little note</p>
    // </div>
    // Margin & Padding
    // <div>
    //   <h1 className="mb-4 text-2xl font-bold">
    //     This is my title
    //   </h1>
    //   <p className="">
    //     This is my paragraph
    //   </p>
    // </div>
    // Negative margins
    // <div>
    //   <div className="h-16 w-36 bg-blue-600 opacity-20"></div>
    //   <div className="bg-sky-300 -mt-8">-mt-8</div>
    // </div>
    // Flex columns and vertical margin & padding
    // <div className="flex-col space-y-4 min-h-screen">
    //   <div className="w-1/5 text-nowrap bg-red-500">Side bar</div>
    //   <div className="w-4/5 bg-green-500">Main content</div>
    // </div>
    // Configuring Margin in tailwind.config.ts (margin-4 = 20px instead of default)
    // <h1 className="mb-4">First title</h1>
    // Flex
    // <div className="Parent">
    //   <div>Header</div>
    //   <div className="flex">
    //     <div className="grow">Main Content</div>
    //     <div className="flex flex-col">
    //       <div>Sidebar</div>
    //       <div>Menu</div>
    //     </div>
    //   </div>
    // </div>
    // Flex basis and media queries
    // <div className="Parent">
    //   <div>Header</div>
    //   <div className="flex flex-col md:flex-row">
    //     <div className="bg-red-500 basis-1/5">Sidebar</div>
    //     <div className="bg-green-500 basis-3/5">Main Content</div>
    //     <div className="bg-blue-500 basis-1/5">Another Sidebar</div>
    //   </div>
    // </div>
    // Flex wrap
    // <div className="Parent">
    //   <div>
    //     Header
    //   </div>
    //   <div className="flex flex-col md:flex-row">
    //     <div className="flex w-full flex-wrap">
    //       <div className="w-32 grow">01</div>
    //       <div className="w-32 grow">02</div>
    //       <div className="w-32 grow">03</div>
    //       <div className="w-32 grow">04</div>
    //       <div className="w-32 grow">05</div>
    //     </div>
    //   </div>
    // </div>
    // Justify content
    // <div className="Parent">
    //   <div>Header</div>
    //   <div className="flex items-center justify-evenly">
    //     <div>Sidebar</div>
    //     <div>
    //       <h1>Main Content</h1>
    //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor inventore assumenda tempora ipsum, officiis modi voluptas id dicta exercitationem iste!</p>
    //     </div>
    //     <div>Another sidebar</div>
    //   </div>
    // </div>
    // Align items baseline
    <div className="Parent">
      <div>Header</div>
      <div className="flex items-baseline">
        <div className="pt-2 pb-6 bg-sky-500">01</div>
        <div className="pt-8 pb-12 bg-red-500">02</div>
        <div className="pt-12 pb-4 bg-green-500">03</div>
      </div>
    </div>
  );
}
