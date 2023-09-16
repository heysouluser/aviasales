import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [ // локальный стейт, который про глобальный ничего не знает
    { id: 0, checked: true, value: 'Все' },
    { id: 1, checked: true, value: 'Без пересадок', transfers: 0 },
    { id: 2, checked: true, value: '1 пересадка', transfers: 1 },
    { id: 3, checked: true, value: '2 пересадки', transfers: 2 },
    { id: 4, checked: true, value: '3 пересадки', transfers: 3 },
  ],
  buttons: [
    { id: 0, active: false, value: 'самый дешевый' },
    { id: 1, active: false, value: 'самый быстрый' },
  ]
};

const aviaSlice = createSlice({
  name: 'aviasales',
  initialState,
  reducers: {
    toggleCheckbox(state, action) {
      const checkboxId = action.payload.id;

      if (checkboxId === 0) {
        const allChecked = state.filters.every((filter) => filter.checked);
        state.filters.forEach((el) => {
          el.checked = !allChecked;
        });
      } else {
        state.filters[checkboxId].checked = !state.filters[checkboxId].checked;
      }

      const allCheckedBesidesFirst = state.filters.slice(1).every((filter) => filter.checked);
      state.filters[0].checked = allCheckedBesidesFirst;
    },
    applySort(state, action) {
      const buttonId = action.payload.id;
      state.buttons.forEach((button, index) => {
        const isActive = index === buttonId;
        button.active = isActive;
      })
      if (buttonId === 0) {

      } else {

      }
    }
  },
});

export const { toggleCheckbox, applySort } = aviaSlice.actions; // экшены создаются в toolkit автоматически, когда мы деструктурируем редюсер из слайса и присваиваем его в sliceName.actions
export default aviaSlice.reducer; // reducers - набор методов, котоые мы используем и из них автоматически формируется reducer. Именно эту сущность мы должны подключить в store


