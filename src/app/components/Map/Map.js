import React from 'react';
import Helmet from 'react-helmet';


export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeystrokes = this.handleKeystrokes.bind(this);
    }

    componentDidMount() {
        if (typeof window ==="object"){
            document.addEventListener("keydown", this.handleKeystrokes);
        }
    }

    componentWillUnmount() {
        if (typeof window ==="object"){
            document.removeEventListener("keydown", this.handleKeystrokes);
        }
    }

    handleKeystrokes({keyCode}) {
        switch(keyCode){
            case(87):
                return this.props.moveUp('player')

            case(83):
                return this.props.moveDown('player')

            case(65):
                return this.props.moveLeft('player')

            case(68):
                return this.props.moveRight('player')
        }
    }

    render() {
        const {playerMovement} = this.props;
        return (
            <div>
            <Helmet title="Map" />
            {
                Object.keys(playerMovement).map((actor, i)=>(
                    <span key={i}>
                    <h1>{actor}</h1>
                    <p>x: {playerMovement[actor].x} y: {playerMovement[actor].y} </p>
                    </span>
                ))
            }
            </div>
        )
    }
}
