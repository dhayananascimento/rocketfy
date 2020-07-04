import React, { useState } from 'react'
import produce from 'immer'
import List from '../List'
import { Container } from  './styles'
import { loadLists } from '../../services/api'
import BoardContext from './context'

const data = loadLists()

export default function Board() {
    const [lists, setLists] = useState(data)

    function move(fromList, toList, from, to){
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from]
            draft[fromList].cards.splice(from, 1)
            draft[toList].cards.splice(to, 0, dragged)
        }))
    }

    function moveList(fromList, toList, from) {
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from]
            draft[toList].cards.push(dragged)
            draft[fromList].cards.splice(from, 1)
        }))
    }

    return (
        <BoardContext.Provider value={{ lists, move, moveList }}>
            <Container>
                {
                    lists.map((list, index) => <List key={list.title} index={index} data={list} />)
                }
            </Container>
        </BoardContext.Provider>
    )
}