export type ColumnDragItem={
    id:string
    text:string
    type:"Column"
}

export type CardDragItem={
    id:string
    text:string
    type:"Card"
}

export type DragItem=ColumnDragItem|CardDragItem