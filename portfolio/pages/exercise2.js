import React from 'react'

const exercise2 = () => {
  return (
    
    <div>
    <figure className="md:flex bg-black-100 rounded-xl p-8 md:p-0 dark:bg-stale-800 text-2xl">
      <img
        className="w-44 h-56 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="../public/assets/img/10a/khiiderchuluun.png"
        alt
        width={384}
        height={512}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-purple-500">
            Итгэл найдвараар дүүрэн хүн л ГАЙХАМШГИЙГ БҮТЭЭДЭГ. Зовлон үгүй
            бол жаргал үгүй. Зүтгэл үгүй бол АМЖИЛТ үгүй. Тиймээс та бүхэн
            маань амжилтанд хүрье гэвэл эхлээд ТЭМЦЭГЧ байгаарай.
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-900 text-right font-bold">
            Л.ХИЙДЭРЧУЛУУН
          </div>
          <div className="text-stale-700 dark:text-stale-500 text-right text-lg">
            Анги удирдсан багш, Хэл шинжлэлийн ухааны магистр, Заах аргач
          </div>
        </figcaption>
      </div>
    </figure>
  </div>
);
};


export default exercise2