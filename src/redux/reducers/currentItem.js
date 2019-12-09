import data from '../../data/items'

const defaultState = []

//Action = type y payload
function reducer(state = defaultState, { type, payload }){
    switch(type){
        case 'findCurrentItem':{
            return data.find(n => n.id === payload)
        }

        case 'findResults':{
            const regex = new RegExp(`^${payload}`, 'i')

            return data.filter(n => regex.test(n.title))
        }

        case 'findSuggestions': {
            const regex = new RegExp(`^${payload}`, 'i')

            return data.filter(n => regex.test(n.title))
        } 
        
        default:
            return state
    }
}

export default reducer