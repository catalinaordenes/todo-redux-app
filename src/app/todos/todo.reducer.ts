import { createReducer, on } from '@ngrx/store';
import {borrar, crearTodo, editar, limpiarCompletados, toggleAll} from './todo.actions';
import {Todo} from './models/todo.model';
import {toggle} from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo' ),
  new Todo('Ir al supermercado'),
  new Todo('Ir al médico'),
];

const _todoReducer = createReducer(estadoInicial,
  on(crearTodo, (state, {texto}) => [...state, new Todo (texto)]),
  on(limpiarCompletados, state => state.filter(todo => !todo.completado) ),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
on(toggleAll, (state, {completado}) => state.map(todo =>{
  return {
    ...todo,
    completado: completado
  }
})),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          completado: !todo.completado};
      } else {
          return todo;
        }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  })

);

export function todoReducer(state, action){
  return _todoReducer(state, action);
}
