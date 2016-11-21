import { connect } from 'react-redux';
import { init, selectPerson } from '../actions/people.js';
import People from '../components/People';
import mountLoad from '../lib/mount-load';
import {wrap} from '../lib/ss-resolve';
import {isBrowser} from '../env.js';


const LazyPeople = mountLoad(People);

const resolveOnServer = (props, store) => store.dispatch( init() );
const ServerLoadedComponent = wrap(LazyPeople, resolveOnServer);


const mapStateToProps = ({ people }) =>
    ({ people: people.all, filtered: people.filtered, q: people.q });


const bindActionsToDispatch = (dispatch) => ({
    onLoad: () => isBrowser && dispatch( init() ),
    selectPerson: (q) => {
        return isBrowser && dispatch( selectPerson(q) )
    }
});


const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    onLoad: () => actions.onLoad(),
    selectPerson: (q) => actions.selectPerson(q),
    wait: state.people.length === 0
});


export default connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllTheProps
)( ServerLoadedComponent );
