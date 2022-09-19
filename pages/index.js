
import { connect } from "react-redux";
import * as t from "../redux/types";

const Home = (props) => { 
  const { handleMinus, handlePlus, handleDelete } = props
  return ( 
      <div className=' flex justify-center items-center min-h-full'>
        <div className=' w-72 h-72 bg-slate-400 p-2 rounded shadow-md shadow-slate-900'>
          Total : {props.order}
          <div className=' flex items-center justify-between min-h-full p-8'>
            <button className=' p-5 w-12 h-12 bg-white rounded-full shadow-md shadow-slate-700 flex items-center justify-center' onClick={() => handleMinus()}>-</button>
            <button className=' p-5 w-12 h-12 bg-white rounded-full shadow-md shadow-slate-700 flex items-center justify-center' onClick={() => handlePlus()}>+</button>
            <button className=' p-5 w-12 h-12 bg-white rounded-full shadow-md shadow-slate-700 flex items-center justify-center' onClick={() => handleDelete()}>x</button>
          </div>
        </div>
      </div> 
  )
}

const mapStateToProps = state => {
  return {
    order: state.main.totalOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMinus: () => dispatch({
      type: t.MINUS_ORDER
    }),
    handlePlus: () => dispatch({
      type: t.PLUS_ORDER
    }),
    handleDelete: (id) => dispatch({
      type: t.DELETE_ORDER
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 