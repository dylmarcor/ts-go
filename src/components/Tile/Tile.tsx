import React, { ReactElement } from 'react';
import './Tile.css';
import { Labels } from '../../models/Labels';
import mergeClasses from '../../utils/utils'

type TileProps = {
    label: Labels;
}

export const Tile = ({ label }: TileProps): ReactElement => {
    return <div className={mergeClasses('cell', label)}></div>
}