export function itemHasErrored(bool){
    return{
        type: 'ITEM_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemIsLoading(bool){
    return{
        type: 'ITEM_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items){
    return{
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}
export function itemsFetchData(url){
    return (dispatch) => {
        dispatch(itemIsLoading(true));

        fetch(url)
        .then( (response) => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            dispatch(itemIsLoading(false));

            return response;
        })
        .then((response)=>response.json())
        .then((items) => {
            console.log(items)
            dispatch(itemsFetchDataSuccess(items))}
        )
        .catch( () =>dispatch(itemHasErrored(true)))
    }
}