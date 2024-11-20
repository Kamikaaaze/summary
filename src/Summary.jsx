import './Summary.css'
function Summary(){
return(
    <div className="card">
        <div className='left'>
            <p className='yresult'> Your Result</p>
                <div className='circle'>
                    <p className='score'>76</p>
                    <p className='total'>of 100</p>
                </div>
            <p className='great'>Great</p>
            <p className='greet'>Your score is 65% greater than the people who take the test</p>
        </div>


        <div className='right'>
            <p className='summary'>Summary</p>
            <div className='reaction'>Reaction</div>
            <div className='memory'>Memory</div>
            <div className='verbal'>Verbal</div>
            <div className='visual'>Visual</div>
            <input type='submit' value='continue'/>
        </div>
    </div>
)

}

export default Summary;