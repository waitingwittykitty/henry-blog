function Watermark() {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcSet="/bg_set_0.avif" type="image/avif" />
          <img
            src="/bg_0.png"
            alt=""
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
            data-xblocker="passed"
          />
        </picture>

        <picture>
          <source srcSet="/bg_set_1.avif" type="image/avif" />
          <img
            src="/bg_1.png"
            alt=""
            className="w-[90rem] flex-none max-w-none hidden dark:block"
            data-xblocker="passed"
          />
        </picture>
      </div>
    </div>
  );
}

export default Watermark;
