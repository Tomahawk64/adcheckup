export default function ServiceCard({ icon, title, description, id }) {
  return (
    <article
      id={id}
      className="card group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
        <span className="text-emerald-500" aria-hidden="true">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
