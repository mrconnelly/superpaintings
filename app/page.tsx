import { PaintingGrid } from "@/components/painting-grid";
import { SiteHeader } from "@/components/site-header";
const movements = ["Clap your hands", "Walk", "Swim", "Ski", "Spray", "Sound your horn", "Macho Man", "Ring the bell", "Superman"];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <video
          className="hero-film"
          autoPlay
          muted
          loop
          playsInline
          poster="/archive/hero-poster.png"
          aria-label="Documentation of a Super Painting coming to life"
        >
          <source src="/archive/super-paintings.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="kicker">Super Paintings · 2014—</p>
          <h1 id="hero-title"><span className="hero-line">Old masters.</span><br /><em>New moves.</em></h1>
          <div className="hero-bottom">
            <p>Oil paintings animated by hand, frame by frame, then revealed through augmented reality.</p>
            <a className="circle-link" href="#story" aria-label="Discover the story">
              <span>Discover</span><b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>
        <p className="film-credit">Oliver Bancroft &amp; James Connelly</p>
      </section>

      <section className="statement" id="story">
        <p className="section-index">01 / The idea</p>
        <div className="statement-copy">
          <h2>A portrait should look as if it <em>might move.</em><br />Ours actually do.</h2>
          <div className="statement-detail">
            <p>
              Super Paintings re-enact the dance moves from Black Lace&apos;s 1981 cult novelty song
              <cite> Superman</cite>. Each movement is painted in oil, one frame at a time, before
              technology folds the sequence back into a single canvas.
            </p>
            <p>
              The project borrows the poised, lifelike presence of <cite>Las Meninas</cite>, Rembrandt&apos;s
              late self-portraits and <cite>The Laughing Cavalier</cite>—then gives that stillness a playful
              shove onto the dance floor.
            </p>
          </div>
        </div>
      </section>

      <section className="archive-section" id="paintings">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / Paintings</p>
            <h2>The original <em>paintings</em></h2>
          </div>
          <p>Look at the original paintings. Choose one to see it large, or explore the collection.</p>
        </div>
        <PaintingGrid />
        <a className="text-link" href="/paintings">All paintings <span aria-hidden="true">↗</span></a>
      </section>

      <section className="marquee" aria-label="The movements">
        <div>
          {[...movements, ...movements].map((movement, index) => (
            <span key={`${movement}-${index}`}>{movement}<i>✦</i></span>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-image">
          <img src="/archive/painting-detail.png" alt="Close detail of a Super Painting and its brushwork" />
          <span>Oil / Canvas / Screen</span>
        </div>
        <div className="process-copy">
          <p className="section-index">03 / How it works</p>
          <h2>Paint becomes<br /><em>performance.</em></h2>
          <ol>
            <li><span>01</span><div><h3>Make the frames</h3><p>Every moment is painted by hand in oil on canvas.</p></div></li>
            <li><span>02</span><div><h3>Build the movement</h3><p>The painted frames are sequenced into a short animation.</p></div></li>
            <li><span>03</span><div><h3>Wake the portrait</h3><p>A screen recognises the canvas and reveals the figure in motion.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="origin">
        <div className="origin-mark" aria-hidden="true">
          <img src="/archive/mark.png" alt="" />
        </div>
        <blockquote>
          “A metamorphosis from oil on canvas into blood and flesh and bones.”
        </blockquote>
        <p>From the original artists&apos; statement</p>
      </section>

      <section className="future" id="future">
        <p className="section-index">04 / The next frame</p>
        <div>
          <h2>The collection is open.<br /><em>So is the future.</em></h2>
          <p>
            Super Paintings began as an experiment in paint and augmented reality. This new home preserves
            the original work—and leaves room for recovered paintings, exhibition histories, new commissions
            and whatever moves come next.
          </p>
          <div className="contact-links">
            <a className="text-link" href="mailto:o_r_bancroft@yahoo.com?subject=Super%20Paintings%20%E2%80%94%20hello">
              Email Oliver <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="mailto:jimmyjconnelly@gmail.com?subject=Super%20Paintings%20%E2%80%94%20hello">
              Email Jimmy <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">
          <span className="mark">SP</span><span>Super Paintings</span>
        </a>
        <p>An artwork by Oliver Bancroft &amp; James Connelly.</p>
        <p>Super Paintings · 2026 · <a href="#top">Back to top ↑</a></p>
      </footer>
    </main>
  );
}
