import {FC} from 'react';

import {VideoCard} from '@components/VideoCard';

import classes from './HomePage.module.scss';

export const HomePage: FC = () => {
  return (
    <div className={classes.root}>
      <VideoCard
        avatar="/avatar/avatar_1.jpg"
        link="/video/1"
        name="ЛИТВИН"
        date="1 день"
        views={10956202}
        thumbnail="/thumbnail/thumbnail_1.webp"
        title="Я СБРОСИЛ ЭТО НА ЛАМБОРГИНИ УРУС ! ПРОЩАЙ МЕЧТА !"
      />
      <VideoCard
        avatar="/avatar/avatar_2.jpg"
        link="/video/2"
        name="Дима Гордей"
        date="6 дней"
        views={145602}
        thumbnail="/thumbnail/thumbnail_6.webp"
        title="КАК Я ВЫЖИЛ в ТОНУЩЕЙ ТАЧКЕ?"
      />
      <VideoCard
        avatar="/avatar/avatar_2.jpg"
        link="/video/3"
        name="Дима Гордей"
        date="1 год"
        views={1165646}
        thumbnail="/thumbnail/thumbnail_4.webp"
        title="ТАЧКА на ПРОКАЧКУ - девушке из глубинки!"
      />
      <VideoCard
        avatar="/avatar/avatar_3.jpg"
        link="/video/4"
        name="itpedia"
        date="2 недели"
        views={621602}
        thumbnail="/thumbnail/thumbnail_7.webp"
        title="УХОЖУ РАБОТАТЬ в MICROSOFT"
      />
      <VideoCard
        avatar="/avatar/avatar_4.jpg"
        link="/video/5"
        name="НИКИТОС"
        date="11 месяцев"
        views={1145562}
        thumbnail="/thumbnail/thumbnail_8.webp"
        title="1000км на САМЫХ ДЕШЕВЫХ ИНОМАРКАХ с ВЕЛИКИМ ВАСЕЙ! ЧАСТЬ 2"
      />
      <VideoCard
        avatar="/avatar/avatar_1.jpg"
        link="/video/6"
        name="ЛИТВИН"
        date="2 года"
        views={5356202}
        thumbnail="/thumbnail/thumbnail_3.webp"
        title="КТО ОТДАЛИТСЯ ДАЛЬШЕ ОТ МОСКВЫ ЗА 10 ЧАСОВ!? ЖЕСТКИЙ ЧЕЛЛЕНДЖ"
      />
      <VideoCard
        avatar="/avatar/avatar_4.jpg"
        link="/video/7"
        name="НИКИТОС"
        date="11 месяцев"
        views={995602}
        thumbnail="/thumbnail/thumbnail_2.webp"
        title="1000км на ИНОМАРКАХ за 30.000р с ВЕЛИКИМ ВАСЕЙ!"
      />
      <VideoCard
        avatar="/avatar/avatar_2.jpg"
        link="/video/8"
        name="Дима Гордей"
        date="2 года"
        views={3867853}
        thumbnail="/thumbnail/thumbnail_5.webp"
        title="БУСТЕР vs ГОРДЕЙ. Кто больше купит машин за 24 часа? ЧЕЛЛЕНДЖ"
      />
      <VideoCard
        avatar="/avatar/avatar_1.jpg"
        link="/video/1"
        name="ЛИТВИН"
        date="1 день"
        views={10956202}
        thumbnail="/thumbnail/thumbnail_1.webp"
        title="Я СБРОСИЛ ЭТО НА ЛАМБОРГИНИ УРУС ! ПРОЩАЙ МЕЧТА !"
      />
      <VideoCard
        avatar="/avatar/avatar_2.jpg"
        link="/video/2"
        name="Дима Гордей"
        date="6 дней"
        views={145602}
        thumbnail="/thumbnail/thumbnail_6.webp"
        title="КАК Я ВЫЖИЛ в ТОНУЩЕЙ ТАЧКЕ?"
      />
      <VideoCard
        avatar="/avatar/avatar_2.jpg"
        link="/video/3"
        name="Дима Гордей"
        date="1 год"
        views={1165646}
        thumbnail="/thumbnail/thumbnail_4.webp"
        title="ТАЧКА на ПРОКАЧКУ - девушке из глубинки!"
      />
      <VideoCard
        avatar="/avatar/avatar_3.jpg"
        link="/video/4"
        name="itpedia"
        date="2 недели"
        views={621602}
        thumbnail="/thumbnail/thumbnail_7.webp"
        title="УХОЖУ РАБОТАТЬ в MICROSOFT"
      />
      <VideoCard
        avatar="/avatar/avatar_4.jpg"
        link="/video/5"
        name="НИКИТОС"
        date="11 месяцев"
        views={1145562}
        thumbnail="/thumbnail/thumbnail_8.webp"
        title="1000км на САМЫХ ДЕШЕВЫХ ИНОМАРКАХ с ВЕЛИКИМ ВАСЕЙ! ЧАСТЬ 2"
      />
      <VideoCard
        avatar="/avatar/avatar_1.jpg"
        link="/video/6"
        name="ЛИТВИН"
        date="2 года"
        views={5356202}
        thumbnail="/thumbnail/thumbnail_3.webp"
        title="КТО ОТДАЛИТСЯ ДАЛЬШЕ ОТ МОСКВЫ ЗА 10 ЧАСОВ!? ЖЕСТКИЙ ЧЕЛЛЕНДЖ"
      />
      <VideoCard
        avatar="/avatar/avatar_4.jpg"
        link="/video/7"
        name="НИКИТОС"
        date="11 месяцев"
        views={995602}
        thumbnail="/thumbnail/thumbnail_2.webp"
        title="1000км на ИНОМАРКАХ за 30.000р с ВЕЛИКИМ ВАСЕЙ!"
      />
      <VideoCard
        avatar="/avatar/avatar_2.jpg"
        link="/video/8"
        name="Дима Гордей"
        date="2 года"
        views={3867853}
        thumbnail="/thumbnail/thumbnail_5.webp"
        title="БУСТЕР vs ГОРДЕЙ. Кто больше купит машин за 24 часа? ЧЕЛЛЕНДЖ"
      />
    </div>
  );
};
