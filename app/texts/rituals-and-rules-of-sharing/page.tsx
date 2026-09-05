import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { texts } from "@/data/texts";

const text = texts.find((entry) => entry.slug === "rituals-and-rules-of-sharing")!;
export const metadata: Metadata = { title: text.title, description: text.description };

function Dialogue({ speaker, children }: { speaker: "JC" | "OB"; children: ReactNode }) {
  return (
    <div className="essay-dialogue">
      <span className="essay-speaker"><abbr title={speaker === "JC" ? "James Connelly" : "Oliver Bancroft"}>{speaker}</abbr>:</span>
      <div>{children}</div>
    </div>
  );
}

export default function RitualsAndRulesPage() {
  return (
    <main className="painting-site">
      <SiteHeader />
      <article className="digital-essay">
        <header className="essay-header">
          <a className="essay-back" href="/texts">← Texts</a>
          <p className="essay-edition">Digital edition · {text.publication}</p>
          <h1>{text.title}</h1>
          <p className="essay-author">{text.author}</p>
          <p className="essay-standfirst">{text.description}</p>
          <a className="essay-source" href={text.pdf}>View original publication (PDF)</a>
        </header>

        <figure className="essay-figure essay-opening-art">
          <img src="/texts/rituals-and-rules-of-sharing/opening-artwork.jpg" width={576} height={480} alt="Painted portrait of Oliver with both arms raised, reproduced on the opening page" />
          <figcaption><em>Oliver <span className="transcription-marker">[title unclear]</span></em>, 2013<br />oil on canvas, <span className="transcription-marker">[dimensions unclear]</span></figcaption>
        </figure>

        <div className="essay-prose">
          <p>James Connelly and Oliver Bancroft’s studio relationship is an intimate and productive one. As the two painters submerge themselves in a new project – a series of collaborative paintings – they talk about their shared studio and how it all works.</p>

          <Dialogue speaker="JC">
            <p>We have got some speakers hooked up to an amp and Olly has a brilliant playlist of music ranging from blues to reggae and opera and various dirges of punk/metal and electronica. We have hundreds of brushes and I built a special rack on the wall for displaying them. We built shelves for storing paint and a storage system with special places for blank canvases, work in progress and finished work. We have exact start and end times for painting and have rules about managing wet brushes, opening and closing paint tubes and managing the palette.</p>
          </Dialogue>
          <Dialogue speaker="OB">
            <p>Our working environment is quite controlled, militant even, and it always has been a struggle to make it that way, we both have painting costumes we get into at the beginning of a session.</p>
          </Dialogue>
          <Dialogue speaker="JC">
            <p>I’ve found if you want to feel like a happy child when you pick up a paintbrush it makes it a lot easier when everything else is highly organised.</p>
          </Dialogue>

          <p>This is a relationship existing and creating in close quarters and with the backdrop of a shared past.</p>

          <Dialogue speaker="JC">
            <p>The paintings are not based on any time in our lives but when we were 20 it seemed like if we weren’t painting we were partying and if we weren’t partying we were painting. In those days everyone got a student grant, there were no fees. My parents, God bless them, my mum was working 12 hour night shifts and my dad 12 hour days to send me £200 a month, which meant I was absolutely loaded at all times. I knew how lucky I was. We both had a brilliant tutor called Alan Welsford. People like him made you feel like you could achieve anything and that you were going to be the next Damien Hirst. It was a very exciting time.</p>
            <p>Art history was an absolute revelation for me. It wasn’t like boring homework from school. It was mind blowing being introduced to 400 year old paintings that opened up these whole worlds of discovery and adventure. We both related to the old masters more than most contemporary artists.</p>
            <p>We are in our 30s now and life’s a bit more complicated but when we manage to get in the studio and start painting we definitely forget everything else and the creative energy takes over.</p>
          </Dialogue>
        </div>

        <figure className="essay-figure essay-portrait">
          <img src="/paintings/ollie-clapping.JPG" width={2662} height={3559} alt="Heads and Haircuts: portrait of Oliver in a blue shirt, head tilted back" loading="lazy" />
          <figcaption><em>Heads and Haircuts</em>, 2013<br /><span className="transcription-marker">[The remaining caption is cut off in the source photograph.]</span><br /><span className="essay-image-note">Original painting image; title as printed in Garageland.</span></figcaption>
        </figure>

        <div className="essay-prose">
          <Dialogue speaker="OB">
            <p>We have known each other for a good part of our lives. We have developed similar sensibilities over that time together, enjoying dancing and the power of art. It’s about time we worked together and if our memories of shared experiences differ, we invent something better.</p>
          </Dialogue>

          <p>Working together in such a way throws up questions as to where one artist’s work begins and the other ends, but this shared process seems to be navigated by a playful approach.</p>

          <Dialogue speaker="JC">
            <p>We both paint on the same canvas but take turns and alternate every few minutes. When one person is painting the other is studio technician cleaning brushes, preparing canvases making tea, sweeping up, preparing reference materials, updating the website. Painting really is a two-person job I have no idea how I ever managed to do it on my own.</p>
          </Dialogue>
          <Dialogue speaker="OB">
            <p>We share paint, brushes, space, canvas and sometimes ideas. It’s give and take and destructive. It works really well.</p>
          </Dialogue>
          <Dialogue speaker="JC">
            <p>When we started collaborating the only problem we had was sometimes we painted over each other’s work and regretted it. We started photographing every stage. This both preserved each other’s work and gave us a stop frame animation. Then we deliberately started animating clapping our hands in paintings. We noticed that the movements were similar to movements in Black Lace’s <em>Superman</em> song. When a painting is going really well and you are improvising, and every brushstroke you do seems to be an improvement from the previous stroke, you feel like you are flying, floating in freedom like Superman.</p>
            <p>The longevity of this collaborative relationship owes much to shared interests and personal friendship. It seems the exchange of skills and mutual quest for the new keeps things fresh.</p>
          </Dialogue>
          <Dialogue speaker="JC">
            <p>I’ve learned a lot about colour from Olly. I knew how to mix black but couldn’t be bothered until Olly forced me, same for various shades of grey. I used to like painting straight from the tube because I thought the colours were already lovely and I relied more on being able to draw than being able to mix exact colours.</p>
          </Dialogue>
          <Dialogue speaker="OB">
            <p>I can’t help but note and learn some of James’ techniques. I think I might start a little business of making Connelly fakes. Working with James in this way strengthened my attitude to relax and hurry up.</p>
          </Dialogue>

          <p className="essay-exhibition">Oliver Bancroft and James Connelly, <em>Superpaintings (Überkünst)</em> is at Transition Gallery, London, 18 May - 9 June 2013</p>
        </div>

        <div className="essay-artworks">
          <figure>
            <img src="/texts/rituals-and-rules-of-sharing/james-doing-the-machoman.jpg" width={600} height={500} alt="James Doing the Machoman: painted portrait in a red shirt with raised fists" loading="lazy" />
            <figcaption><em>James Doing the Machoman</em>, 2013<br />oil on canvas, 50 × 60 cm</figcaption>
          </figure>
          <figure>
            <img src="/texts/rituals-and-rules-of-sharing/jimmy-clapping.jpg" width={510} height={697} alt="Jimmy Clapping: painted portrait with hands raised together in front of his chest" loading="lazy" />
            <figcaption><em>Jimmy Clapping</em>, 2013<br />oil on canvas, 30 × 41 cm</figcaption>
          </figure>
        </div>

        <aside className="essay-editorial" aria-labelledby="transcription-notes">
          <h2 id="transcription-notes">About this digital edition</h2>
          <p>Transcribed from photographs of Corinna Spencer’s article in <em>Garageland, Issue XV</em>. Printed wording and speaker labels are retained; line wrapping has been adapted for the screen. Artwork captions retain their published titles.</p>
          <p>The opening artwork’s full title and dimensions cannot be read confidently. The line beneath <em>Heads and Haircuts, 2013</em> is cut off. Bracketed notes mark these gaps; they are not part of the original article.</p>
          <p>The paragraph beginning “The longevity of this collaborative relationship” has no new speaker label in print. Its placement as an indented continuation has been retained.</p>
          <a href={text.pdf}>View original publication (PDF)</a>
        </aside>
      </article>
    </main>
  );
}
