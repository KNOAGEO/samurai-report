// 東京都の天気予報データを取得するためのURL
const url = 'https://jsonplaceholder.typicode.com/posts';
// イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

// ボタンのクリック時にイベント処理を実行する
button.addEventListener('click', () => {
    // 送信するダミーデータ
    const dummyData = { name: '侍太郎', age: 30};

    // ダミーサーバーにAjaxリクエストを送信する
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(dummyData) // JSON形式に変換
    })
    .then((response) => response.json())
    .then((data) =>{
        // サーバーから受け取ったダミーデータを見やすい形にして表示
        console.log('サーバーからの応答: \n' + JSON.stringify(data, null, 2));
    });
});






/*　気象庁のwebサイトにリクエストを送信し、天気予報データを取得する
    fetch(url)
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => response.json()) //JSON形式のデータに変換
    .then((data) =>{
        // JSONデータから「東京の明日の天気」を抽出して表示
        const weather = data[0].timeSeries[0].area[0].weathers[1];
        console.log('東京の明日の天気:' + weather);
    });
 });
*/



