const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace the Cardamom Crisis
const crisisStart = html.indexOf('<section id="cardamom-crisis"');
const landStart = html.indexOf('<section id="land"');
if (crisisStart !== -1 && landStart !== -1) {
    const newCrisis = `<section id="cardamom-crisis" class="section-dark" style="background-color: var(--primary);">
        <div class="reveal" style="text-align: center; margin-bottom: 5rem;">
            <span class="section-tag" style="color: var(--accent);">THE CHALLENGE</span>
            <h2 class="serif" style="font-size: clamp(2rem, 4vw, 3.5rem); color: var(--white); margin-bottom: 2rem; text-transform: uppercase;">CARDAMOM PLANTATIONS DAMAGING THE ENVIRONMENT AND BIODIVERSITY</h2>
            <p style="font-size: 1.15rem; color: rgba(255,255,255,0.8); max-width: 900px; margin: 0 auto; line-height: 1.9;">
                <strong style="color: var(--white);">Cardamom</strong> — a native of western Ghats in Kerala celebrated for centuries as the “Queen of Spices” — once symbolized purity, wellness, and the rich ecological heritage of the rainforest.
            </p>
        </div>

        <div class="grid-2" style="max-width: 1200px; margin: 0 auto; align-items: stretch; gap: 2rem;">
            <div class="card reveal" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; display: flex; flex-direction: column;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.5rem; font-family: 'Cormorant Garamond', serif;">Chemical Contamination</h3>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.8; margin: 0;">Today, an alarming crisis threatens this legacy. Intensive chemical-dependent cultivation practices have led to pesticide residues in cardamom far exceeding internationally accepted safe limits, affecting farmers, workers, and consumers globally.</p>
            </div>
            
            <div class="card reveal" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; display: flex; flex-direction: column;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.5rem; font-family: 'Cormorant Garamond', serif;">Severe Health Impacts</h3>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.8; margin: 0;">Major health issues linked to these toxic practices include Acute Pesticide Poisoning (APP), Cancer, Respiratory and Reproductive Issues, Musculoskeletal Disorders, and Congenital Abnormalities.</p>
            </div>
            
            <div class="card reveal" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; display: flex; flex-direction: column;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.5rem; font-family: 'Cormorant Garamond', serif;">Widespread Impact</h3>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.8; margin: 0;">Spread across nearly 100,000 acres in Kerala alone, cardamom cultivation directly and indirectly impacts hundreds of thousands of farm workers and millions of people who come into contact with the produce.</p>
            </div>
            
            <div class="card reveal" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; display: flex; flex-direction: column;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.5rem; font-family: 'Cormorant Garamond', serif;">Economic & Trade Risks</h3>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.8; margin: 0;">Increasingly stringent international quality standards and repeated rejection of export consignments are placing severe pressure on India’s cardamom trade and its global reputation.</p>
            </div>
        </div>

        <div class="reveal" style="text-align: center; margin-top: 4rem; padding: 4rem 2rem; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); background: linear-gradient(90deg, transparent, rgba(217, 160, 91, 0.03), transparent);">
            <p style="color: var(--accent); font-size: clamp(1.5rem, 3vw, 2.2rem); font-family: 'Cormorant Garamond', serif; font-style: italic; max-width: 900px; margin: 0 auto; line-height: 1.5;">
                "Our vision is to help revive a future where cardamom can once again be cultivated in harmony with nature — safe for people, sustainable for farmers, and respectful of the forests from which it originated"
            </p>
        </div>
    </section>

    `;
    html = html.slice(0, crisisStart) + newCrisis + html.slice(landStart);
}

// 2. Fix Strategic title
html = html.replace(
    '<span class="section-tag" style="color: var(--accent); font-size: 1.5rem;">Strategic Initiatives</span>',
    '<span class="section-tag">Strategic Plan</span>\\n            <h2 class="serif" style="color: var(--accent);">Strategic Initiatives</h2>'
);

// 3. Delete Economic Future
const ecoStart = html.indexOf('<section id="economic-future"');
const platStart = html.indexOf('<section id="platform"');
if (ecoStart !== -1 && platStart !== -1) {
    html = html.slice(0, ecoStart) + html.slice(platStart);
}

// 4. Restore Platform structure
const platSecStart = html.indexOf('<section id="platform"');
const csrStart = html.indexOf('<section id="csr"');
if (platSecStart !== -1 && csrStart !== -1) {
    const newPlatform = `<section id="platform" class="section-dark">
        <div class="grid-2">
            <div class="reveal" style="display: flex; align-items: center; justify-content: center;">
                <div class="img-container" style="position: relative; width: 90%; box-shadow: none; height: clamp(600px, 85vh, 900px); background: #000; border: none;">
                    <img src="/elephant.png" alt="Wild elephant captured by the Native Ground 24x7 Ecological Observatory" style="height: 100%; width: 100%; object-fit: cover; object-position: 65% center; transform: scale(1.02);" loading="lazy">
                </div>
            </div>
            <div class="reveal">
                <span class="section-tag">24×7 Observatory</span>
                <h2 class="serif">Experience Biodiversity Live—Digitally</h2>
                <p>Native Ground is developing a Living Biodiversity Intelligence & Experience Platform.</p>
                
                <ul class="list-premium">
                    <li><strong>Virtual Forest Experience:</strong> At the heart of this initiative is an always-on, interactive platform that enables people globally to explore the unique flora, fauna, landscapes, and intricate ecological relationships that define Native Ground.</li>
                    <li><strong>Immersive Engagement:</strong> Through advanced digital storytelling, biodiversity intelligence, and immersive experiences, the platform will allow visitors to meaningfully engage with the living ecosystem of Native Ground from anywhere in the world.</li>
                </ul>

                <div style="margin-top: 3rem; background: rgba(255,255,255,0.02); padding: 2rem; border-left: 3px solid var(--accent);">
                    <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); line-height: 1.8; margin: 0; font-style: italic;">
                        "This initiative is envisioned to create a rapidly expanding global community of virtual visitors, followers, and environmental advocates, positioning Native Ground as a globally recognized brand in biodiversity restoration, ecological stewardship, and regenerative conservation."
                    </p>
                </div>
            </div>
        </div>
    </section>

    `;
    html = html.slice(0, platSecStart) + newPlatform + html.slice(csrStart);
}

fs.writeFileSync('index.html', html);
console.log('Replacements completed.');
