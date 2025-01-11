import React from "react";

function Coin({ face }) {
    if (!face) return <p>Click to flip the coin!</p>;

    return (
        <div className="Coin">
            <img
                src={
                    face === "heads"
                        ? "https://www.thecoinshop.shop/6666-medium_default/2009-s-district-of-columbia-silver-quarter-.jpg"
                        : "https://www.numismaticnews.net/.image/t_share/MTg2MDI1NzM4MjU5MzQyNDY1/2022-american-women-quarters-coin-maya-angelou-uncirculated-reverse-768x768.jpg"
                }
                alt={face}
            />
            <p>It's {face}!</p>
        </div>
    );
}

export default Coin;
