import { FaRegHeart } from "react-icons/fa6";


const DonateComponent = () => {

    return (
        <div>
            {/* donate section */}
            <div className="w-11/12 mx-auto text-center">
                {/* donate section header */}
                <p className="font-secondary text-yellowOp text-2xl font-bold flex justify-center items-center mb-4"><FaRegHeart className="mr-2 text-greenLg" />Lets Start Donating</p>
                <h2 className="font-extrabold font-primary text-2xl md:text-3xl lg:text-5xl mb-2">See Your Impact: Transparent</h2>
                <h2 className="font-extrabold font-primary text-2xl md:text-3xl lg:text-5xl">Donation Causes</h2>
                {/* donation secttion */}

                <div>

                </div>

            </div>
        </div>
    );
};

export default DonateComponent;