import AutoComplete from '../AutoComplete/AutoComplete.js';
import DataList from '../DataList/DataList.js';
import Helmet from 'react-helmet';


export default ({people=[], q="", selectPerson}) => (
    <div>
    <h1>{q}</h1>
        <Helmet title="AutoCompletes" />
        <DataList
            onChange={e=>selectPerson(e.target.value)} // eslint-disable-line
            options={people}
        />
    </div>
);
