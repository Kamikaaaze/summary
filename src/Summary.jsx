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
            <div className='reaction'><p className='rea'>Reaction</p><div className='num'><p>80</p><p style={{color:'gray'}}>/100</p></div></div>
            <div className='memory'><p className='mem'>Memory</p><div className='num'><p>92</p><p style={{color:'gray'}}>/100</p></div></div>
            <div className='verbal'><p className='ver'>Verbal</p><div className='num'><p>61</p><p style={{color:'gray'}}>/100</p></div></div>
            <div className='visual'><p className='vis'>Visual</p><div className='num'><p>72</p><p style={{color:'gray'}}>/100</p></div></div>
            <input className='continue' type='submit' value='Continue'/>
        </div>
    </div>
)

}

export default Summary;