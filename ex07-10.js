function BMI2() {var height1 = Number(document.getElementById('height1').value) / 100; //ここで身長をメートルに変換している。
                var body weight1 = Number(document.getElementById('body weight1').value);
                 var bmi1 = body weight1 / (height1 * height1); //ここでBMI値の計算

                 var bmialert; //ここで空の変数を用意しておく。なぜなら、まとめて表示する際に必要だから。
                 
                 if (bmi1 < 18.5) {bmialert = '低体重'} //変数「bmialert」に「低体重」を入れている。
                 else if
                   (bmi1 < 25) {bmialert = '普通'} //変数「bmialert」に「普通」を入れている。
                 else
                 {bmialert = '肥満'}

                 alert('あなたのBMI値は' + bmi1 + 'です。')
                 alert('あなたの肥満度は' + bmialert + 'です。')
