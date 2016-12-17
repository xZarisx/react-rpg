import { connect } from 'react-redux';
import { setLocation, moveUp, moveDown, moveRight, moveLeft } from '../actions/actorLocations.js';
import Map from '../components/Map';
// import mountLoad from '../lib/mount-load';
// import {wrap} from '../lib/ss-resolve';


// const LazyMap = mountLoad(Map);

// const resolveOnServer = (props, store) => store.dispatch( init() );
// const ServerLoadedComponent = wrap(LazyMap, resolveOnServer);


const mapStateToProps = ({ map }) => ({ map });

const bindActionsToDispatch = {
    setLocation, moveUp, moveDown, moveRight, moveLeft
};


const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own
});


export default connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllTheProps
)( Map );
