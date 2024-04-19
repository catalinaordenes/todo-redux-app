import {createAction, props} from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crear todo',
        props<{texto: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODO] Editar todo',
  props<{id: number, texto: string}>()
);

export const borrar = createAction(
  '[TODO] Eliminar todo',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All todos',
  props<{completado: boolean}>()
);

export const limpiarCompletados = createAction(
  '[TODO] Limpiar Completados'
);
