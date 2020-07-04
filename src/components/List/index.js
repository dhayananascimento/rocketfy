import React, { useContext } from 'react'
import { MdAdd } from 'react-icons/md'
import { Container } from  './styles'
import { useDrop } from 'react-dnd'

import BoardContext from '../Board/context'
import Card from '../Card'

export default function List({ data, index: listIndex }) {

    const { moveList } = useContext(BoardContext)

    const [{ isOver }, dropRef] = useDrop({
        accept: 'CARD',
        canDrop: (item) => {
            if(item.listIndex === listIndex) return
            return true
        },
        drop: (item, monitor) => {
            moveList(item.listIndex, listIndex, item.index)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    })

    return (
        <Container ref={dropRef} data={data} isOver={isOver} >
            <header>
                <h2>{data.title}</h2>
                {
                    data.creatable && (
                        <button type="button">
                            <MdAdd size={24}color="#fff" />
                        </button>
                    )
                }         
            </header>

            <ul>
                {
                    data.cards.map((card, index) => <Card 
                        key={card.id} 
                        listIndex={listIndex}
                        index={index} 
                        data={card} 
                    />)
                }
            </ul>
        </Container>
    )
}