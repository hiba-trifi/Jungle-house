import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className='jh-categories'>
      <select
        value={activeCategory}
        onChange={e => setActiveCategory(e.target.value)}
        className='jh-categories-select'
      >
        <option value=''>Chose a categorie</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button className='reset' onClick={() => setActiveCategory('')}>Reset</button>
    </div>
  )
}

export default Categories
