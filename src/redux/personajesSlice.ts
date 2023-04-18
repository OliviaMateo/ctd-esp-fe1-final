import {Personaje} from "../types/personaje.type";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const api= 'https://rickandmortyapi.com/api/'

const apiPersonajes = async (filter:string) => {
    const response = await fetch(`${api}character/${filter? '?name='+ filter : ''}`);
    if(response.ok){
        const data = await response.json();
        return data
    }else{
        throw new Error("No se ha podido encontrar el personaje que buscas.");
    }
}

    const apiPersonaje = async (id:string) => {
    const response = await fetch(`${api}character/${id}`);
    if(response.ok){
        const data = await response.json();
        return data
    }else{
        throw new Error("No se ha podido encontrar el personaje que buscas.");
    }
}

const apiPaginacion = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data
}

export const getPersonajes = createAsyncThunk(
    '/getPersonajes',
    async (name: string) => {
        const response = await apiPersonajes(name) 
        return response
        
    }
)

export const getPersonaje = createAsyncThunk(
    '/getPersonaje',
    async (id: string) => {
        const response = await apiPersonaje(id)
        return response
    }
)

export const getPaginacion = createAsyncThunk(
    '/getPaginacion',
    async (url: string) => {
        const response = await apiPaginacion(url)
        return response
    }
)

interface initialType {
    busqueda: string,
    personajes: Personaje[],
    paginacion:{
        next:string,
        previous:string
    },
    favoritos: Personaje[],
    selected: Personaje,
    cargando:boolean
}

const initialState: initialType = {
    busqueda: '',
    personajes:[],
    paginacion:{
        next:'',
        previous:''
    },
    favoritos:[],
    selected:{
        id: 0,
        name: '',
        status: '',
        species:'',
        type:'',
        gender:'',
        origin:{
            name:'',
            url:''
        },
        location:{
            name:'',
            url:''
        },
        image:'',
        episode:[]
    },
    cargando:true
}

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        search: (state, action) => {
            state.busqueda = action.payload
        },
        favoritos: (state, action) => {
            if(!state.favoritos.find(item => item.id === action.payload.id)){
                state.favoritos.push(action.payload)
            }else{
                state.favoritos = state.favoritos.filter(item => item.id !== action.payload.id)
            }
        },
        deleteFavorites: (state) => {
            state.favoritos = initialState.favoritos
        },
        actionSelected: (state, action) => {
            state.selected = action.payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getPersonajes.pending, (state) =>{
            state.cargando = true
        })

        builder.addCase(getPersonajes.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.previous = action.payload.info.previous
            state.cargando = false
        })
    
        builder.addCase(getPersonajes.rejected, (state, action) => {
            state.cargando = false
            state.personajes= []
        })
        
        builder.addCase(getPaginacion.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.previous = action.payload.info.prev
        })
    },

})
export const {search,favoritos, deleteFavorites, actionSelected } = personajesSlice.actions
export default personajesSlice.reducer



