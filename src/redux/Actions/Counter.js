export const ADDING = "ADDING"
export const SUBTRACTING = "SUBTRACTING"

export const addItem = () =>{
    return{
        type: ADDING
    }
}

export const subtractItem = () =>{
    return{
        type: SUBTRACTING
    }
}

