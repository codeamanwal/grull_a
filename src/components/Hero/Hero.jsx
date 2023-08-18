import { backImg, overlayImg } from "../Assets";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const isScreenSizeGreaterThan1200 = useMediaQuery({ minWidth: 1332 });

    const overlayStyle = {
        backgroundImage: `url(${overlayImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "60%",
        height: "100%",
    };

    return (
        <div
            className="flex flex-wrap py-20 -mt-10 sm:mt-0"
            style={{
                backgroundImage: `url(${backImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                position: "relative",
            }}
        >
            {isScreenSizeGreaterThan1200 && (
                <div
                    className="absolute bottom-0 left-1/2 transform  w-[60%] h-full bg-cover bg-center"
                    style={{
                        ...overlayStyle,
                    }}
                ></div>
            )}
            <div className="w-full md:w-8/12">
                <div className="container mx-auto h-full md:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div>
                            <img
                                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                                alt=""
                                className="w-8 md:w-auto"
                            />
                        </div>
                    </nav>
                    <header className="flex flex-col justify-center m-auto items-center md:container px-4 lg:flex mt-10 h-full lg:mt-0">
                        <div className="w-full space-y-12">
                            <h1 className="text-3xl lg:text-7xl font-semibold text-white leading-8 font-spaceGrotesk">
								India's first decentralized freelancing platform.
                            </h1>

                            <p className="md:text-2xl text-lg font-GeneralSans md:mb-10 text-white md:w-4/5 w-full md:leading-8 leading-5">
								A revolutionary product which changes everything with the
								current freelancing industry. GRULL uses the power of Defi, DAO,
								and WEB 3.0 technology to solve problems with the centralized
								freelancing marketplace.
                            </p>
                            <button className="text-white font-spaceGrotesk text-xl font-medium md:px-8 py-2 px-4 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
								EXPLORE THE SPACE
                            </button>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default Hero;
