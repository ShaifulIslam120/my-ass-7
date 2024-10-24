// src/components/card/Card.js

const Card = ({ player, showSummary = false, handleChoosePlayer }) => {
    const { playerId, name, country, image, battingType, biddingPrice } = player;

    const handleChoose = () => {
        if (handleChoosePlayer) {
            handleChoosePlayer(player);
        }
    };

    return (
        <div className="border rounded-lg p-4 shadow-lg flex w-[1200px] justify-between">
            <img src={image} alt={name} className="w-[100px] h-[100px] object-cover rounded-lg" />
            {showSummary ? (  // Conditional rendering for summary view
                <div className="mt-2">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="font-bold">Batting Type: {battingType}</p>
                </div>
            ) : (
                <>
                    <div className="flex">
                        <h3 className="text-xl font-bold mt-2 ml-2">{name}</h3>
                    </div>
                    <hr className="mt-2" />
                    <p className="font-bold">Batting Type: {battingType}</p>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold">Price: {biddingPrice}</p>
                        <button 
                            className="btn w-[135px] h-auto text-xs" 
                            onClick={handleChoose}
                        >
                            Choose Player
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
