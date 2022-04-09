const CardAvatar = () => (
    <article className="bg-[#1C1F4A] row-span-2 rounded-lg overflow-hidden text-white">
        <section className="overflow-hidden p-4 bg-[#5847EB] text-white rounded-lg">
            <img
                src="https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"
                alt=""
                className="rounded-full border-4 border-gray-400 w-16 mb-7"
            />
            <div className="fonts pb-12">
                <p className="font-thin">Lorem, ipsum dolor.</p>
                <h2 className="text-5xl">Jeremy Robson</h2>
            </div>
        </section>
        <section className="p-4">
            <ul>
                <li>Daily</li>
                <li>Weeken</li>
                <li>Montly</li>
            </ul>
        </section>
    </article>
);

const CardWork = ({ bgColor }) => (
    <article
        className={`grid grid-rows-3 ${
            bgColor || "bg-black"
        } rounded-b-xl rounded-t-lg text-white`}
    >
        <div className="row-span-1 bg-svg" />
        <div className="p-4 bg-[#1C1F4A] row-span-2 rounded-lg hover:cursor-pointer hover:bg-white/30">
            <div className="flex justify-between">
                <h5>Work</h5>
                <p>lorem</p>
            </div>
            <h3 className="text-4xl">32hrs</h3>
            <p>Last work - lorem</p>
        </div>
    </article>
);

const App = () => {
    return (
        <div className="grid place-content-center min-h-screen bg-gray-900 py-8 md:py-0">
            <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 container mx-auto">
                <CardAvatar />
                <CardWork bgColor="bg-gradient-to-r from-orange-400 to-yellow-500" />
                <CardWork bgColor="bg-gradient-to-r from-blue-500 to-cyan-500" />
                <CardWork bgColor="bg-gradient-to-r from-purple-500 to-pink-500" />
                <CardWork bgColor="bg-gradient-to-r from-green-500 to-blue-500" />
                <CardWork bgColor="bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <CardWork bgColor="bg-gradient-to-r from-orange-400 to-yellow-500" />
            </div>
        </div>
    );
};

export default App;
