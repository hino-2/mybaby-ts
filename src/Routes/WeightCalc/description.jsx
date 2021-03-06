import React from "react";

export default (
	<>
		<h4>Калькулятор веса</h4>
		<p>
			Не все родители успевают записывать веса своих утят точно по месяцам. Ничего страшного.
			Укажите любую дату, и сколько весил ваш утенок в этот день, и я рассчитаю остальное за
			вас. <br />
			<font>Начните с даты рождения!</font>
		</p>
		Нормальный вес рассчитывается по полным месяцам жизни по формуле: <br />
		<br />
		<div className="formula">
			<li>от месяца до полугода: вес при рождении + 800 * на число мес.</li>
			<li>после 6 месяцев: вес при рождении + 800 * 6 + 400 * на мес. после 6</li>
		</div>
		<br />
	</>
);
