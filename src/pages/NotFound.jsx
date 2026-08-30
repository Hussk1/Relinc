import {
  useLayoutEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { gsap } from "gsap";

export const NotFound = () => {
  const pageRef = useRef(null);
  const contentRef = useRef(null);
  const labelRef = useRef(null);
  const codeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(labelRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(codeRef.current, {
        opacity: 0,
        y: 45,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(contentRef.current, {
        visibility: "visible",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(labelRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.85,
        })
        .to(
          codeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.15,
          },
          "-=0.5",
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.65",
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
          },
          "-=0.55",
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.5",
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1b1b1b] px-4 [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]"
    >
      <div
        ref={contentRef}
        className="invisible relative z-10 mx-auto max-w-3xl text-center"
      >
        <span
          ref={labelRef}
          className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary"
        >
          Sidan kunde inte hittas
        </span>

        <h1
          ref={codeRef}
          className="mb-2 text-[100px] font-bold leading-none text-primary sm:text-[140px] md:text-[180px]"
        >
          404
        </h1>

        <h2
          ref={titleRef}
          className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Här verkar det vara tomt
        </h2>

        <p
          ref={textRef}
          className="mx-auto mb-10 max-w-xl text-base font-semibold leading-7 text-white/70 sm:text-lg"
        >
          Sidan du försöker besöka finns inte, har flyttats eller så är
          webbadressen fel. Du kan gå tillbaka till startsidan eller kontakta
          oss om du behöver hjälp.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-black transition hover:opacity-90 sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Till startsidan
          </Link>

          <Link
            to="/kontakta"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-primary hover:text-primary sm:w-auto"
          >
            Kontakta oss

            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] sm:h-[500px] sm:w-[500px]" />
    </div>
  );
};

export default NotFound;