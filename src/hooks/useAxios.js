import {useState} from "react";
import uuid from "uuid";
import axios from "axios";
import pokemon from "../pokemonList";

const useAxios = (url) => {
   const [state, setState] = useState([]);

   const addCard = async () => {
      const res = await axios.get(`${url}`);
      setState(data => [...data, {...res.data, id: uuid()}]);
   };
   const addPokemon = async (name) => {
      const res = await axios.get(`${url}${name}`);
      setState(data => [...data, {...res.data, id: uuid()}]);
   }
   return [state, addCard, addPokemon];
}

export default useAxios;