import React from 'react';
import {useAppState} from '../state/AppStateContext';
import {useDragLayer} from 'react-dnd';
import {CustomDragLayerContainer} from '../styles';
import {Column} from './Column';

const CustomDragLayer = () => {
    const {draggedItem} = useAppState()
    const {currentOffset} = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }))

    return draggedItem && currentOffset
        ? (
            <CustomDragLayerContainer>
                <Column id={draggedItem.id}
                        text={draggedItem.text}/>
            </CustomDragLayerContainer>

        )
        : null
};

export default CustomDragLayer;