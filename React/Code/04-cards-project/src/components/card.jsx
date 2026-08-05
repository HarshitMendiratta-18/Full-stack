

const card = (props) => {
  console.log(props.company);
  return (
    <div className='card'>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <svg xmlns='http://www.w3.org/2000/svg' width="16" height="16" viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth="2" strokeLinecap='round' strokeLinejoin='round'>
          <path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'/>
          </svg></button>
         
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>

        </div>
        <div className="bottom">
          <div>
           
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          
        </div>
        
      </div>
  )
}

export default card
