function Flashcard(props) {
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.RcvWFyEbBCrLF2R8pqIuygAAAA&pid=Api&P=0&h=220" alt="Avatar" style={{"width": "300px", "height": "300px"}} />
                </div>
                <div class="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
             </div>
        </div>
    )
}

export default Flashcard;