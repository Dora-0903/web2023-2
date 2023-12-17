function leapyearjudge() {var year = Number(document.getElementById('year').value);
//西暦を変数「year」に代入　↑

                     var yearjudge; //変数を設定

                     if ((year % 4 == 0 && year % 100 != 0) || year % 400 ==0)
                       //西暦を4で割った余りを求めている。
                       //ただし、西暦が100で割り切れる場合は平年となるため、西暦が4で割り切れてかつ100で割り切れない場合の条件となる。
                       //また、西暦が400で割り切れる場合も閏年になるため、上記のような条件になる。
                       //https://memopad.bitter.jp/w3c/js/js_arithmetic.html　算術演算一覧サイト
                        {yearjudge = '閏年';}
                     else {yearjudge = '平年';}

                     alert('西暦' + year + '年は' + yearjudge + 'です。')
                    }
