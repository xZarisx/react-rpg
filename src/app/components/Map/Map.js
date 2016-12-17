import React from 'react';
import styles from './Map.css';

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
        const { map } = this.props;
        return (
            <div className={styles.map}>
                {
                    map.map((item, i) => (
                        <div className={styles.mapItem} key={i} style={{bottom: item.y * 10, right: item.x * 10}}>{item.title}</div>
                    ))
                }
            </div>
        )
    }
}
