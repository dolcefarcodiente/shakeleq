// ─────────────────────────────────────────────────────────────
// РАБОТЫ. Чтобы добавить картину: положи фото в images/works/
// и добавь объект сюда. Поля с "—" заполни реальными данными.
// status: "available" | "sold" | "enquire" | "nfs" (not for sale)
// type:   "painting" | "drawing" | "study"
// ─────────────────────────────────────────────────────────────
window.WORKS = [
  {
    id: "01", src: "images/works/01.jpg", type: "painting", year: 2026,
    title: { en: "Figure with Raised Arms", it: "Figura a braccia alzate" },
    medium: { en: "Oil on canvas", it: "Olio su tela" },
    size: "— × — cm", status: "available", ph: "ochre", ratio: "3/4", featured: true
  },
  {
    id: "02", src: "images/works/02.jpg", type: "painting", year: 2026,
    title: { en: "Red Interior", it: "Interno rosso" },
    medium: { en: "Oil on canvas", it: "Olio su tela" },
    size: "— × — cm", status: "available", ph: "red", ratio: "3/4"
  },
  {
    id: "03", src: "images/works/03.jpg", type: "painting", year: 2026,
    title: { en: "She Who Became a Tree", it: "Colei che divenne albero" },
    medium: { en: "Oil and charcoal on canvas", it: "Olio e carboncino su tela" },
    size: "— × — cm", status: "enquire", ph: "charcoal", ratio: "4/3"
  },
  {
    id: "04", src: "images/works/04.jpg", type: "study", year: 2026,
    title: { en: "Tree Figure, Study I", it: "Figura-albero, studio I" },
    medium: { en: "Oil on paper", it: "Olio su carta" },
    size: "— × — cm", status: "available", ph: "umber", ratio: "4/3"
  },
  {
    id: "05", src: "images/works/05.jpg", type: "painting", year: 2026,
    title: { en: "Figure in Felt Hat", it: "Figura con cappello di feltro" },
    medium: { en: "Oil on canvas", it: "Olio su tela" },
    size: "— × — cm", status: "sold", ph: "night", ratio: "1/1"
  },
  {
    id: "06", src: "images/works/06.jpg", type: "painting", year: 2026,
    title: { en: "Tartan and Roses", it: "Tartan e rose" },
    medium: { en: "Oil on canvas", it: "Olio su tela" },
    size: "— × — cm", status: "available", ph: "teal", ratio: "4/3"
  },
  {
    id: "07", src: "images/works/07.jpg", type: "study", year: 2025,
    title: { en: "Tree Figure, Study II", it: "Figura-albero, studio II" },
    medium: { en: "Oil on board", it: "Olio su tavola" },
    size: "— × — cm", status: "available", ph: "grey", ratio: "3/4"
  },
  {
    id: "08", src: "images/works/08.jpg", type: "painting", year: 2025,
    title: { en: "Wind", it: "Vento" },
    medium: { en: "Charcoal and oil on canvas", it: "Carboncino e olio su tela" },
    size: "— × — cm", status: "enquire", ph: "charcoal", ratio: "3/4"
  },
  {
    id: "09", src: "images/works/09.jpg", type: "drawing", year: 2025,
    title: { en: "Two Musicians", it: "Due musicisti" },
    medium: { en: "Pencil on paper", it: "Matita su carta" },
    size: "— × — cm", status: "available", ph: "paper", ratio: "4/3"
  },
  {
    id: "10", src: "images/works/10.jpg", type: "painting", year: 2025,
    title: { en: "Blue Surface", it: "Superficie blu" },
    medium: { en: "Mixed media on canvas", it: "Tecnica mista su tela" },
    size: "— × — cm", status: "nfs", ph: "teal", ratio: "7/5"
  }
];
