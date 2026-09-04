'use client';

import { useMemo, useState } from 'react';

const rates = {
  photo: { hall: { weekday: 2000, weekend: 2200 }, all: { weekday: 2400, weekend: 2800 } },
  event: { hall: { weekday: 2700, weekend: 3300 }, all: { weekday: 3300, weekend: 4200 } },
};

export function PriceCalculator() {
  const [type, setType] = useState<'photo' | 'event'>('event');
  const [space, setSpace] = useState<'hall' | 'all'>('all');
  const [day, setDay] = useState<'weekday' | 'weekend'>('weekend');
  const [hours, setHours] = useState(4);

  const total = useMemo(() => rates[type][space][day] * hours, [type, space, day, hours]);

  return (
    <div className="calculator">
      <div className="calculator__fields">
        <label className="calculator__field">
          <span>Формат</span>
          <select value={type} onChange={(event) => setType(event.target.value as 'photo' | 'event')}>
            <option value="event">Праздник / мероприятие</option>
            <option value="photo">Фото- или видеосъёмка</option>
          </select>
        </label>
        <label className="calculator__field">
          <span>Пространство</span>
          <select value={space} onChange={(event) => setSpace(event.target.value as 'hall' | 'all')}>
            <option value="all">Оба зала</option>
            <option value="hall">Один зал</option>
          </select>
        </label>
        <label className="calculator__field">
          <span>День</span>
          <select value={day} onChange={(event) => setDay(event.target.value as 'weekday' | 'weekend')}>
            <option value="weekend">Выходной</option>
            <option value="weekday">Будний</option>
          </select>
        </label>
        <label className="calculator__field">
          <span>Количество часов</span>
          <input min="1" max="12" type="number" value={hours} onChange={(event) => setHours(Math.max(1, Number(event.target.value) || 1))} />
        </label>
      </div>
      <div className="calculator__result">
        <span>Ориентировочная стоимость</span>
        <strong>{new Intl.NumberFormat('ru-RU').format(total)} ₽</strong>
        <small>Без дополнительных услуг. Финальную стоимость подтвердит администратор.</small>
      </div>
    </div>
  );
}
