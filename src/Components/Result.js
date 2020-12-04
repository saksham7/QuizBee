const Result = ({score, playAgain}) => {
    function handlePlayAgain() {
        playAgain(true);
    }
    return (
        <>
            <div className="text-center p-4">
                <h3 className="text-muted">You have scored {score}/5</h3>
                <button className="btn btn-success btn-md" onClick={handlePlayAgain}>Play Again!</button>
            </div>
        </>
    )
};

export default Result;