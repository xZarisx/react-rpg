import { storiesOf } from '@kadira/storybook';
import Actor from './Actor.js';

storiesOf('Actor', module)

    .add('south', () => (
        <Actor actor={"link"} direction={"south"}/>
    ))

    .add('south walking', () => (
        <Actor actor={"link"} direction={"south"} walking/>
    ))

    .add('north', () => (
        <Actor actor={"link"} direction={"north"}/>
    ))

    .add('north walking', () => (
        <Actor actor={"link"} direction={"north"} walking/>
    ))

    .add('west', () => (
        <Actor actor={"link"} direction={"west"}/>
    ))

    .add('west walking', () => (
        <Actor actor={"link"} direction={"west"} walking/>
    ))

    .add('east', () => (
        <Actor actor={"link"} direction={"east"}/>
    ))

    .add('east walking', () => (
        <Actor actor={"link"} direction={"east"} walking/>
    ))
