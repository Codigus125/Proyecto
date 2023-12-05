import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FondoAnimado = ({ modoGrises }) => {
  const [hueBase, setHueBase] = useState(330);
  const [satBase, setSatBase] = useState(60);

  const [props, set] = useSpring(() => ({
    hue: 330,
    sat: 60,
  }));

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let w, h;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;

    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
    };

    let points = [];
    let dots = [];
    const lines = 7;
    let nt = 0;

    function pushPoints() {
      for (let i = 0; i < lines; i++) {
        points.push({
          xs: -5,
          ys: (h / lines) * i,
          xp1: Math.random() * (w / 3),
          yp1: (h / lines) * i + (Math.random() * 200 - 100) + 100,
          xp2: Math.random() * (w / 3) + (w / 3) * 2,
          yp2: (h / lines) * i + (Math.random() * 300 - 200) + 100,
          xe: w + 5,
          ye: (h / lines) * i
        });
      }
    }

    function pushDots() {
      if (dots.length > 200) {
        return;
      }
      let rad = Math.random() * (4 - 1) + 1;
      let zix = Math.floor(Math.random() * lines + 1);
      dots.push({
        x: Math.random() * w,
        y: h + 30,
        v: 4 - rad / 1.2,
        r: (rad + zix) * 0.5,
        h: Math.random() * 20,
        z: zix
      });
    }

    function draw() {
      nt += 0.003;
      for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < dots.length; j++) {
          if (dots[j].z === i) {
            ctx.beginPath();
            ctx.fillStyle =
              modoGrises
                ? "rgba(128, 128, 128, 0.8)" // Color gris en modo de grises
                : "hsl(" +
                  ((hueBase + dots[j].h + nt * 100) % 360) +
                  ", " +
                  satBase +
                  "%, " +
                  (80 - i * (60 / lines)) +
                  "%)";
            ctx.arc(dots[j].x, dots[j].y, dots[j].r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            if (dots[j].y < 0 || dots[j].y > h + 60) {
              dots[j] = dots[dots.length - 1];
              dots.pop();
            } else {
              dots[j].y -= dots[j].v;
            }
          }
        }

        ctx.beginPath();
        ctx.fillStyle =
          modoGrises
            ? "rgba(128, 128, 128, 0.8)" // Color gris en modo de grises
            : "hsl(" +
              ((hueBase + i * (50 / lines) + nt * 100) % 360) +
              ", " +
              satBase +
              "%, " +
              (20 + i * (60 / lines)) +
              "%)";
        ctx.moveTo(points[i].xs, points[i].ys);
        ctx.bezierCurveTo(
          points[i].xp1,
          points[i].yp1,
          points[i].xp2,
          points[i].yp2,
          points[i].xe,
          points[i].ye
        );
        ctx.lineTo(w + 5, h + 5);
        ctx.lineTo(-5, h + 5);
        ctx.lineTo(-5, h + 5);
        ctx.fill();
        ctx.closePath();
      }
    }

    function clear() {
      ctx.clearRect(0, 0, w, h);
    }

    function clearDots() {
      dots = [];
    }

    function render() {
      clear();
      draw();
      requestAnimationFrame(render);
    }

    pushPoints();
    setInterval(pushDots, 50);
    setInterval(clearDots, 90000);
    render();

    // Cambios automáticos en los colores
    const colorChangeInterval = setInterval(() => {
      setHueBase((prevHue) => (prevHue + 1) % 360);
      setSatBase((prevSat) => (prevSat + 1) % 100);
    }, 50000);

    return () => {
      clearInterval(colorChangeInterval);
    };
  }, [modoGrises]);

  // Cambia gradualmente el color
  set({
    hue: modoGrises ? 0 : 330, // Si está en modo grises, cambia a 0, de lo contrario, al valor base
    sat: modoGrises ? -100 : 60, // Si está en modo grises, desatura (-100), de lo contrario, al valor base
    reset: true, // Reinicia la animación
    config: { duration: 1000000 }, // Duración en milisegundos (10 segundos)
  });

  return (
    <animated.canvas
      id="canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        filter: `hue-rotate(${props.hue}deg) saturate(${props.sat}%)`,
      }}
    ></animated.canvas>
  );
};

export default FondoAnimado;