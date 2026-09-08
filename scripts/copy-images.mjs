import { readdirSync, statSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const ROOT = join(import.meta.dirname, '..', '..')
const OUT = join(import.meta.dirname, '..', 'public', 'images')

const SOURCES = [
  {
    slug: 'pine-cedar',
    dir: join(ROOT, 'Twin Cottages - Pine & Cedar', 'Twin Cottages - Pine & Cedar'),
    hero: join(ROOT, 'Twin Cottage - Pine and Cedar.jpeg'),
  },
  {
    slug: 'valley-view-maple',
    dir: join(ROOT, 'Valley View- Maple', 'Valley View- Maple'),
    hero: join(ROOT, 'Valley View Cottage - Maple.jpeg'),
  },
  {
    slug: 'premium-magnolia',
    dir: join(ROOT, 'Premium Cottage - Magnolia', 'Premium Cottage - Magnolia'),
    hero: join(ROOT, 'Premium Cottage - Magnolia.jpeg'),
  },
]

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const STITCH_ROOT = join(ROOT, 'stitch design selvana', 'stitch_selvana_boutique_resort_website')
const SITE_IMAGES = [
  { src: 'img_20260128_wa0052.jpg/screen.png', out: 'hero.jpg' },
  { src: 'img_20260410_wa0031.jpg/screen.png', out: 'about.jpg' },
  { src: 'img_20260128_wa0059.jpg/screen.png', out: 'exterior-dusk.jpg' },
  { src: 'img_20260128_wa0097.jpg/screen.png', out: 'exterior-mist-1.jpg' },
  { src: 'img_20260128_wa0109.jpg/screen.png', out: 'exterior-mist-2.jpg' },
  { src: 'img_20260128_wa0115.jpg/screen.png', out: 'exterior-mist-3.jpg' },
  { src: 'img_20260410_wa0036.jpg/screen.png', out: 'hot-tub-view.jpg' },
  { src: 'img_20260410_wa0057.jpg/screen.png', out: 'suite-loft.jpg' },
  { src: 'img_20260410_wa0058.jpg/screen.png', out: 'suite-bed.jpg' },
]

const siteOutDir = join(OUT, 'site')
mkdirSync(siteOutDir, { recursive: true })
for (const img of SITE_IMAGES) {
  copyFileSync(join(STITCH_ROOT, img.src), join(siteOutDir, img.out))
}

const manifest = {}

for (const src of SOURCES) {
  const propDir = join(OUT, src.slug)
  mkdirSync(propDir, { recursive: true })
  manifest[src.slug] = { hero: null, categories: {} }

  // hero image
  if (src.hero) {
    const ext = extname(src.hero)
    const heroName = `hero${ext}`
    copyFileSync(src.hero, join(propDir, heroName))
    manifest[src.slug].hero = `/images/${src.slug}/${heroName}`
  }

  const categories = readdirSync(src.dir).filter((f) => statSync(join(src.dir, f)).isDirectory())
  for (const cat of categories) {
    const catSlug = slugify(cat)
    const catOutDir = join(propDir, catSlug)
    mkdirSync(catOutDir, { recursive: true })
    const files = readdirSync(join(src.dir, cat)).filter((f) => /\.(jpe?g|png|avif|webp)$/i.test(f))
    manifest[src.slug].categories[catSlug] = { label: cat, images: [] }
    files.forEach((file, i) => {
      const ext = extname(file).toLowerCase()
      const outName = `${catSlug}-${i + 1}${ext}`
      copyFileSync(join(src.dir, cat, file), join(catOutDir, outName))
      manifest[src.slug].categories[catSlug].images.push(`/images/${src.slug}/${catSlug}/${outName}`)
    })
  }
}

writeFileSync(join(import.meta.dirname, '..', 'src', 'data', 'imageManifest.json'), JSON.stringify(manifest, null, 2))
console.log('Done. Manifest written to src/data/imageManifest.json')
console.log(JSON.stringify(Object.fromEntries(Object.entries(manifest).map(([k, v]) => [k, { hero: v.hero, categories: Object.keys(v.categories) }])), null, 2))
