import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRadiography } from './store/actions';

class Radiography extends Component {

    constructor(props){
        super(props);

        this.state = {

        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getRadiography();
        console.log(this.props)
    }

    render (){
        return (
            <div>
                <h1>Radiography Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        radiographyReducers:state.radiographyReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getRadiography }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Radiography);