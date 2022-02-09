**Розгорнути проєкт**
-
Встановлюємо залежності

`npm install`

Запускаємо проєкт

`npm run dev`

**Endpoints**
-
POST
`/init`

Input params:

`{ mode: String } // режим гри ('dual' або 'ai')`

Output: 

`{ players: Players, currentPlayer: Player, positions: PositionsObject }`

----
**
**Players** 

`{ first: Player, second: Player }`

**
**Player**

`{ label: String, id: Int (1 || 2), symbol: Char ('O' || 'X')}`

**
**PositionsObject**

`{ 
1: Player?, 2: Player? , 3: Player?, 4: Player?, 5: Player?, 6: Player?, 7: Player?, 8: Player?, 9: Player? }`

Player? - means Player or {}

** 1,2,3 - номер квадртатиків, їхні id.


---
POST `/move`

Input params: 

`{ player: Player, position: Int (1 - 9) }`

Output params: 

`{ nextPlayer: Player, positions: PositionsObject, winner: Player? }`