import { Observable } from 'rxjs';

const observable = new Observable<string>((subscriber) => {
  subscriber.next('1');
  subscriber.next('2');

  setTimeout(() => {
    subscriber.next('3');
  }, 1000);
  // eğer complete işlemini de çalıştırsaydık 1 - 2 değerlerini ekrana yazdırır ve sonrasında
  // bitti mesajını verirdi
  // bunun sebebi setTimeOut metodu asenkron olması sebebiyle akışa girmemesidir.
  // subscriber.complete();
});

const observer = {
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('Bitti'),
};

// observable.subscribe((data) => console.log(data));

//alttaki işlemde ekran çıktısı 1 2 1 2 3 3 şeklinde olacaktır.
//senkron işlemler bittikten sonra asenkron işlemler ekrana gelecektir
observable.subscribe(observer);
observable.subscribe((data) => console.log(data));

// daha iyi anlamak için üstteki kodu açıklama satırına alıp, alttaki kodu açıklama satırından
// çıkarabilirsiniz
// observable.subscribe((data) => console.log('observable 1: ' + data));
// observable.subscribe((data) => console.log('observable 2: ' + data));
