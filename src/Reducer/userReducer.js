const initialData={
    list:[]
}


const dataReducer=(state=initialData,action)=>{
    switch(action.type){
        case "REGIS":

        const {data}= action.payload;
        return{
            ...state,
            list:[
                // ...state.list,
                {
                  data:data
            }]
        }
        default : return state
    }
}

export default dataReducer