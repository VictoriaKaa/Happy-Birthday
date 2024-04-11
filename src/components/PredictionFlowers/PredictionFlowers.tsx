import React from 'react';
import { Flower } from './Flower/Flower';
import './PredictionFlowers.scss';

const flowers = [
    { name: 'Роза', description: 'Роза - символ чувств, особенно любви. Также это цветок выражения признательности, восхищения, уважения, дружеской привязанности, благодарности, симпатии, поддержки. Вас ждет море любви и поддержки!', img: '/images/rose1.jpg' },
    { name: 'Хризантема', description: 'Хризантема - символ долголетия. Вас ждет долгая и позитивная жизнь!', img: '/images/flowers2.jpeg' },
    { name: 'Пион', description: 'Пион - символ богатства и роскоши, а в некоторых странах еще и долголетия с крепким здоровьем. Ждите богатство и долголетие!', img: '/images/flower3.jpg' },
    { name: 'Астра', description: 'Астры - цветы, похожие на звезды. Это олицетворение изящества и изысканности. Часто означает безопасность. Этот цветок принесет в вашу жизнь ограждение от невзгод! ', img: '/images/flower4.jpg' },
    { name: 'Георгина', description: 'Георгина - символ упорства и стойкости. Вы будете полны силы перед любыми невзгодами!', img: '/images/flower555.jpg' },
    { name: 'Нарцисс', description: 'Нарцисс, несмотря на происхождение своего названия, - символ семейного счастья и процветания. Вас ждет благополучие!', img: '/images/flower6.jpg' },
    { name: 'Гербера', description: 'Гербера - цветок счастья и успеха. Он несет радость и хорошее настроение в вашу жизнь!', img: '/images/flower7.jpeg' },
    { name: 'Лилия', description: 'Лилия - символ чистоты, искренности и благородства, а в восточных культурах - силы духа. Лилия привнесет в вашу жизнь эти чудесные качества!', img: '/images/flower8.jpg' },
    { name: 'Орхидея', description: 'Орхидея - символ любви, нежности и красоты, что она и привнесет в вашу жизнь!', img: '/images/flower99.jpg' },
    { name: 'Тюльпан', description: 'Тюльпан - символ весны и любви. Он сулит вам тепло и любовь!', img: '/images/flower10.jpg' },
    { name: 'Цинния', description: 'Цинния означает длительную привязанность и постоянство. Вас ждет спокойствие и стабильность!', img: '/images/flower11.jpg' },
]

export const PredictionFLowers = () => {
    const elements = flowers.map(item => <Flower key={item.name} item={item} />)

    return (
        <div className='gallery-container'>
            <h1 className='gallery-title'>Выберите цветок и узнайте, к чему он!</h1>
            <div className="gallery">
                {elements}
            </div>
        </div>
    );
}
