const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',

    },
  ],
};

export default function getSpecial({ special }) {
  const array = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;

    array.push({
      id, name, icon, description,
    });
  });

  return array;
}

// eslint-disable-next-line no-unused-vars
const result = getSpecial(character);
