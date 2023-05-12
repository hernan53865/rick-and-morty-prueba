import { Link } from "react-router-dom"

const Navegation = (props) => {
  return (
    <div>
    <div className="d-flex justify-content-between align-items-center">
        {
          (props.prev) && (<button className="btn btn-primary btn-sm"
            onClick={()=> props.setPage(props.page - 1)}
          >
            Page: {props.page - 1}
          </button>)
        }
        <p className="my-auto">Page: {props.page}</p>
        {
          (props.next) && (<button className="btn btn-primary btn-sm"
            onClick={()=> props.setPage(props.page + 1)}
          >
            Page: {props.page + 1}
          </button>)
        }
    </div>
    <Link to={`/login`}>
            <div className="px-8 btn btn-outline-dark btn-lg"> Login </div>
    </Link> 
    </div>
  )
}

export default Navegation