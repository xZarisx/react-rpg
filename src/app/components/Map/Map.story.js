import { storiesOf } from '@kadira/storybook';
import Map from './Map.js';

const demoData = [
    { title: 'player', x: 0, y: 0 },
    { title: 'bolder', x: 10, y: 0 },
    { title: 'tim', x: 0, y: 10 },
    { title: 'tree', x: 10, y: 20 }
];

storiesOf('Map', module)

    .add('south', () => (
        <Map map={demoData}/>
    ))
