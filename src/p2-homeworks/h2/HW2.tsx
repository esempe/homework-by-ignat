import React, {useState} from 'react'
import Affairs from './Affairs'
import affairs from "./Affairs";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = { // need to fix any
    _id: number, name: string, priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType
export type defaultAffairsTypes = Array<AffairType>
// constants

const defaultAffairs: defaultAffairsTypes = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: defaultAffairsTypes, filter: FilterType): defaultAffairsTypes => { // need to fix any
     if (filter === 'high') { // need to fix
        return affairs.filter(el => el.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter(el => el.priority === 'middle')
    } else  if (filter === 'low') {
        return affairs.filter(el => el.priority === 'low')
    }  else return affairs
}
export const deleteAffair = (affairs: defaultAffairsTypes, _id: number): defaultAffairsTypes => { // need to fix any
    console.log(`таска с айдишником ${_id} - удалена`)
    affairs = affairs.filter(el=> el._id != _id)
    return  affairs // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<defaultAffairsTypes>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
