import React from 'react';
import {incrumentNumber, decrumentNumber} from '../redux/actions/counterAction'
import {connect} from 'react-redux'
const CounterRedux = (props) => {
    console.log(props);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4 offset-4 mt-3">
                <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">{props.number}</h1>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type='button' className="btn btn-success" onClick={props.incrumentNumber}>+</button>
                            <button type='button' className="btn btn-danger" onClick={props.decrumentNumber}>-</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};
const mapStateProps = (state) => {
    console.log(state);
    return {
        number: state.counter.number
    }
}
export default connect(mapStateProps, {incrumentNumber, decrumentNumber})(CounterRedux) ;