const Banner = ({ inProgress, resolved }) => {
    return (
        <div className="px-4 md:px-10 grid md:grid-cols-2 gap-6 py-20">
            <div className="rounded-xl p-15 text-white bg-linear-to-r from-purple-600 to-indigo-500 shadow-lg text-center">
                <h2 className="text-xl">In-Progress</h2>
                <p className="text-5xl font-bold pt-4">{inProgress}</p>
            </div>

            <div className="rounded-xl p-15 text-white bg-linear-to-r from-green-500 to-teal-600 shadow-lg text-center">
                <h2 className="text-xl">Resolved</h2>
                <p className="text-5xl font-bold pt-4">{resolved}</p>
            </div>
        </div>
    );
};

export default Banner;
