import React from 'react'
import Button from '../UI/Button';
import s from './AddToDo.module.sass'

export default function AddToDo({addToDo}) {

  const submit = e => {
      e.preventDefault();
      const {title, description} = e.target;
      addToDo(Date.now()%100000, title.value, description.value);
      title.value = '';
      description.value = '';
  }
  
  return (
    <form id='main' className={s.form} onSubmit={submit}>
      <label className={s.field}>
        <p>Название</p>
        <input name='title' type="text" />
      </label>
      <label className={s.field}>
        <p>Описание</p>
        <textarea name="description" ></textarea>
      </label>
      <Button />
  </form>
  )
}
