const PageLoader = () => {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#0000004f] flex items-center justify-center z-50">
            <div className="bg-white p-3 rounded-xl">
                <div className="jelly-triangle">
                    <div className="jelly-triangle__dot" ></div>
                    <div className="jelly-triangle__traveler" ></div>
                </div>

                <svg width="0" height="0" className="jelly-maker">
                    <defs>
                        <filter id="uib-jelly-triangle-ooze">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="7.3"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                result="ooze"
                            />
                            <feBlend in="SourceGraphic" in2="ooze" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default PageLoader;
